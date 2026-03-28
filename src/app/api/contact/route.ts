import { NextResponse } from 'next/server'
import { Resend } from 'resend'
import * as z from 'zod'

// NOTE: Resend is initialized inside the handler (not at module level)
// so it doesn't crash during Netlify's static build phase.

const contactSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  company: z.string().optional(),
  message: z.string().min(10),
})

export async function POST(req: Request) {
  try {
    const body = await req.json()
    const result = contactSchema.safeParse(body)

    if (!result.success) {
      return NextResponse.json(
        { error: 'Invalid data provided' },
        { status: 400 }
      )
    }

    const { name, email, company, message } = result.data

    const resend = new Resend(process.env.RESEND_API_KEY)

    const { data, error } = await resend.emails.send({
      from: process.env.RESEND_FROM_EMAIL || 'onboarding@resend.dev',
      to: process.env.CONTACT_EMAIL || process.env.RESEND_FROM_EMAIL || 'test@example.com',
      replyTo: email,
      subject: `KtizoTech Inquiry from ${name}${company ? ` (${company})` : ''}`,
      text: `
Name: ${name}
Email: ${email}
Company: ${company || 'N/A'}

Message:
${message}
      `,
    })

    if (error) {
      console.error(error)
      return NextResponse.json({ error: error.message }, { status: 400 })
    }

    return NextResponse.json({ success: true, data })
  } catch (error) {
    console.error(error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
