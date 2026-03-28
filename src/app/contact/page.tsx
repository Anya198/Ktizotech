'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import clsx from 'clsx'
import RevealWrapper from '@/components/ui/RevealWrapper'
import SectionHead from '@/components/ui/SectionHead'

const contactSchema = z.object({
  name: z.string().min(2, 'Name is required'),
  email: z.string().email('Invalid email address'),
  company: z.string().optional(),
  message: z.string().min(10, 'Message must be at least 10 characters'),
})

type ContactFormData = z.infer<typeof contactSchema>

export default function ContactPage() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [errorMessage, setErrorMessage] = useState('')

  const { register, handleSubmit, formState: { errors }, reset } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema)
  })

  const onSubmit = async (data: ContactFormData) => {
    setStatus('loading')
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })

      if (!response.ok) {
        throw new Error('Failed to send message')
      }

      setStatus('success')
      reset()
    } catch (error: Error | unknown) {
      setStatus('error')
      if (error instanceof Error) {
        setErrorMessage(error.message)
      } else {
        setErrorMessage('Something went wrong')
      }
    }
  }

  return (
    <main className="pt-[120px] pb-[120px] px-5 lg:px-8 bg-white min-h-[calc(100vh-80px)]">
      <div className="max-w-[1140px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-start">
        
        <div>
          <RevealWrapper>
            <SectionHead
              title="Let's build something efficient."
              subtitle="Whether you have a specific workflow in mind or just know things shouldn't be this manual — drop us a line."
              align="left"
              className="mb-8"
            />
          </RevealWrapper>
          
          <RevealWrapper delay={0.1}>
            <div className="flex flex-col gap-6">

              <div>
                <p className="font-sans text-[12px] font-bold text-text3 tracking-[0.1em] uppercase mb-2">Location</p>
                <p className="font-sans text-[16px] text-text2">North America (Remote)</p>
              </div>
              <div>
                <p className="font-sans text-[12px] font-bold text-text3 tracking-[0.1em] uppercase mb-2">Response Time</p>
                <p className="font-sans text-[16px] text-text2">Within 24 business hours</p>
              </div>
            </div>
          </RevealWrapper>
        </div>

        <RevealWrapper delay={0.2} className="bg-bg2 border border-border p-8 rounded-2xl">
          {status === 'success' ? (
            <div className="text-center py-10">
              <div className="w-16 h-16 rounded-full bg-blue-lt mx-auto flex items-center justify-center mb-6">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M5 13l4 4L19 7" stroke="#2575FC" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </div>
              <h3 className="font-display text-[26px] text-navy mb-2">Message received</h3>
              <p className="font-sans text-text2 text-[15px]">Thanks for reaching out. We&apos;ll be in touch shortly.</p>
              <button 
                onClick={() => setStatus('idle')}
                className="mt-8 font-sans text-[14px] font-semibold text-blue hover:underline"
              >
                Send another message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5">
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="name" className="font-sans text-[13px] font-semibold text-navy">Name *</label>
                  <input
                    id="name"
                    type="text"
                    {...register('name')}
                    disabled={status === 'loading'}
                    className={clsx(
                      "w-full bg-white border rounded-lg px-4 py-3 font-sans text-[15px] outline-none transition-colors",
                      errors.name ? "border-red-500 focus:border-red-500" : "border-border focus:border-blue"
                    )}
                  />
                  {errors.name && <span className="font-sans text-[12px] text-red-500">{errors.name.message}</span>}
                </div>

                <div className="flex flex-col gap-1.5">
                  <label htmlFor="company" className="font-sans text-[13px] font-semibold text-navy">Company</label>
                  <input
                    id="company"
                    type="text"
                    {...register('company')}
                    disabled={status === 'loading'}
                    className="w-full bg-white border border-border rounded-lg px-4 py-3 font-sans text-[15px] outline-none transition-colors focus:border-blue"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-1.5">
                <label htmlFor="email" className="font-sans text-[13px] font-semibold text-navy">Work Email *</label>
                <input
                  id="email"
                  type="email"
                  {...register('email')}
                  disabled={status === 'loading'}
                  className={clsx(
                    "w-full bg-white border rounded-lg px-4 py-3 font-sans text-[15px] outline-none transition-colors",
                    errors.email ? "border-red-500 focus:border-red-500" : "border-border focus:border-blue"
                  )}
                />
                {errors.email && <span className="font-sans text-[12px] text-red-500">{errors.email.message}</span>}
              </div>

              <div className="flex flex-col gap-1.5">
                <label htmlFor="message" className="font-sans text-[13px] font-semibold text-navy">How can we help? *</label>
                <textarea
                  id="message"
                  rows={4}
                  {...register('message')}
                  disabled={status === 'loading'}
                  className={clsx(
                    "w-full bg-white border rounded-lg px-4 py-3 font-sans text-[15px] outline-none transition-colors resize-y min-h-[120px]",
                    errors.message ? "border-red-500 focus:border-red-500" : "border-border focus:border-blue"
                  )}
                ></textarea>
                {errors.message && <span className="font-sans text-[12px] text-red-500">{errors.message.message}</span>}
              </div>

              {status === 'error' && (
                <div className="bg-red-50 text-red-600 font-sans text-[13px] px-4 py-3 rounded-lg border border-red-100">
                  {errorMessage}
                </div>
              )}

              <button
                type="submit"
                disabled={status === 'loading'}
                className={clsx(
                  "mt-2 w-full bg-blue text-white font-sans text-[15px] font-semibold py-3.5 rounded-pill shadow-[0_4px_14px_rgba(37,117,252,0.3)] transition-all duration-200",
                  status === 'loading' ? "opacity-70 cursor-not-allowed" : "hover:bg-blue-d hover:-translate-y-[1px]"
                )}
              >
                {status === 'loading' ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          )}
        </RevealWrapper>
      </div>
    </main>
  )
}
