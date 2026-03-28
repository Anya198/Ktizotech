import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Case Studies — KtizoTech',
  description: 'Real automations. Measurable results. See how businesses partner with KtizoTech to cut costs and unlock immense operational leverage.',
  openGraph: {
    title: 'Case Studies — KtizoTech',
    description: 'Real automations. Measurable results.',
    url: 'https://www.ktizotech.com/case-studies',
    siteName: 'KtizoTech',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'KtizoTech Case Studies' }],
    locale: 'en_US',
    type: 'website',
  },
}

export default function CaseStudiesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
