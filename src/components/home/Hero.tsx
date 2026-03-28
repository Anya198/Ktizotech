'use client'

import RevealWrapper from '@/components/ui/RevealWrapper'
import Badge from '@/components/ui/Badge'
import Button from '@/components/ui/Button'
import TextRotator from '@/components/ui/TextRotator'
import StarButton from '@/components/ui/StarButton'
import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import clsx from 'clsx'

export default function Hero() {
  const [mounted, setMounted] = useState(false)
  useEffect(() => setMounted(true), [])

  return (
    <section id="hero" className="py-[90px] px-5 lg:px-8 relative overflow-hidden bg-[linear-gradient(155deg,#fff_0%,#f3f7ff_100%)]">
      {/* Blurred blobs */}
      <div className="absolute pointer-events-none rounded-full blur-[80px] w-[600px] h-[600px] -top-[200px] -right-[150px] bg-[rgba(37,117,252,0.06)]" />
      <div className="absolute pointer-events-none rounded-full blur-[80px] w-[400px] h-[400px] -bottom-[100px] -left-[100px] bg-[rgba(22,43,84,0.04)]" />

      <div className="max-w-[1140px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
        <div>
          <RevealWrapper delay={0.1}>
            <Badge label="AI-Powered Process Automation" />
          </RevealWrapper>
          <RevealWrapper delay={0.1}>
            <h1 className="font-display font-normal text-blue text-[clamp(38px,4.5vw,56px)] leading-[1.12] tracking-tight mb-5">
              <TextRotator
                  words={[
                    "Create. Automate.\nScale your business\none step at a time."
                  ]}
                  className="font-bold"
                  color="#2575FC"
                  interval={6000}
                  letterAnimation={true}
              />
            </h1>
          </RevealWrapper>
          <RevealWrapper delay={0.2}>
            <p className="font-sans text-[17px] text-text2 leading-[1.75] mb-[36px] max-w-[440px]">
              KtizoTech builds precision automation workflows that eliminate repetitive work, connect your tools, and free your team to focus on what actually drives growth.
            </p>
          </RevealWrapper>
          <RevealWrapper delay={0.3} className="flex flex-wrap gap-3 mb-[36px]">
            <StarButton href="https://calendly.com/officialktizotech/new-meeting" target="_blank" rel="noopener noreferrer">
              book a call
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M2 7h10M7 2l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
            </StarButton>
            <Button href="/#use-cases" variant="outline">
              See How It Works
            </Button>
          </RevealWrapper>
          <RevealWrapper delay={0.4} className="flex items-center gap-[10px]">
            <div className="flex">
              {['JR', 'ML', 'KW', 'AB'].map((initials, i) => (
                <div key={i} className={clsx("w-[30px] h-[30px] rounded-full border-2 border-white bg-blue-mid flex items-center justify-center text-[11px] text-blue font-bold", i !== 0 && "-ml-[6px]")}>
                  {initials}
                </div>
              ))}
            </div>
            <span className="font-sans text-[13px] text-text3 font-medium">Trusted by 80+ businesses across North America</span>
          </RevealWrapper>
        </div>

        <div className="hidden lg:flex flex-col gap-[14px]">
          <RevealWrapper delay={0.2} className="bg-white border border-border rounded-lg p-[20px_22px] shadow-standard">
            <div className="flex items-center gap-[10px] mb-[10px]">
              <div className="w-8 h-8 rounded-lg bg-blue-lt flex items-center justify-center shrink-0">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M8 1v14M1 8h14" stroke="#2575FC" strokeWidth="1.8" strokeLinecap="round" /></svg>
              </div>
              <div>
                <div className="font-sans text-[14px] font-semibold text-navy">Lead follow-up automation</div>
                <div className="font-sans text-[12px] text-text2">Running — saved 12 hrs this week</div>
              </div>
            </div>
            <div className="h-1 rounded-full bg-bg3 mt-3 overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: mounted ? '78%' : 0 }}
                transition={{ duration: 1.5, ease: 'easeOut', delay: 0.4 }}
                className="h-full rounded-full bg-blue"
              />
            </div>
            <div className="flex gap-[6px] mt-[10px] flex-wrap">
              <span className="bg-blue-lt text-blue text-[11px] font-bold py-[3px] px-[9px] rounded-pill">HubSpot</span>
              <span className="bg-blue-lt text-blue text-[11px] font-bold py-[3px] px-[9px] rounded-pill">Gmail</span>
              <span className="bg-blue-lt text-blue text-[11px] font-bold py-[3px] px-[9px] rounded-pill">Slack</span>
              <span className="bg-[#e5f8ee] text-[#0d8a4e] text-[11px] font-bold py-[3px] px-[9px] rounded-pill">Live</span>
            </div>
          </RevealWrapper>

          <RevealWrapper delay={0.3} className="bg-white border border-border rounded-lg p-[20px_22px] shadow-standard">
            <div className="flex items-center gap-[10px] mb-[10px]">
              <div className="w-8 h-8 rounded-lg bg-blue-lt flex items-center justify-center shrink-0">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <rect x="1" y="1" width="6" height="6" rx="1.5" stroke="#2575FC" strokeWidth="1.6" />
                  <rect x="9" y="1" width="6" height="6" rx="1.5" stroke="#2575FC" strokeWidth="1.6" />
                  <rect x="1" y="9" width="6" height="6" rx="1.5" stroke="#2575FC" strokeWidth="1.6" />
                  <rect x="9" y="9" width="6" height="6" rx="1.5" stroke="#2575FC" strokeWidth="1.6" />
                </svg>
              </div>
              <div>
                <div className="font-sans text-[14px] font-semibold text-navy">Weekly KPI report builder</div>
                <div className="font-sans text-[12px] text-text2">Runs every Monday 8:00 AM</div>
              </div>
            </div>
            <div className="h-1 rounded-full bg-bg3 mt-3 overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: mounted ? '100%' : 0 }}
                transition={{ duration: 1.5, ease: 'easeOut', delay: 0.4 }}
                className="h-full rounded-full bg-blue"
              />
            </div>
            <div className="flex gap-[6px] mt-[10px] flex-wrap">
              <span className="bg-blue-lt text-blue text-[11px] font-bold py-[3px] px-[9px] rounded-pill">Sheets</span>
              <span className="bg-blue-lt text-blue text-[11px] font-bold py-[3px] px-[9px] rounded-pill">Notion</span>
              <span className="bg-[#e5f8ee] text-[#0d8a4e] text-[11px] font-bold py-[3px] px-[9px] rounded-pill">Scheduled</span>
            </div>
          </RevealWrapper>

          <RevealWrapper delay={0.4} className="bg-white border border-border rounded-lg p-[20px_22px] shadow-standard">
            <div className="flex items-center gap-[10px] mb-[10px]">
              <div className="w-8 h-8 rounded-lg bg-blue-lt flex items-center justify-center shrink-0">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M8 1L2 4.5v4.5C2 13 5 15.2 8 16c3-0.8 6-3 6-7V4.5L8 1z" stroke="#2575FC" strokeWidth="1.6" strokeLinejoin="round" /></svg>
              </div>
              <div>
                <div className="font-sans text-[14px] font-semibold text-navy">Finance approval workflow</div>
                <div className="font-sans text-[12px] text-text2">Human-approved, fully logged</div>
              </div>
            </div>
            <div className="h-1 rounded-full bg-bg3 mt-3 overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: mounted ? '55%' : 0 }}
                transition={{ duration: 1.5, ease: 'easeOut', delay: 0.4 }}
                className="h-full rounded-full bg-blue"
              />
            </div>
            <div className="flex gap-[6px] mt-[10px] flex-wrap">
              <span className="bg-blue-lt text-blue text-[11px] font-bold py-[3px] px-[9px] rounded-pill">Airtable</span>
              <span className="bg-blue-lt text-blue text-[11px] font-bold py-[3px] px-[9px] rounded-pill">Slack</span>
              <span className="bg-[#fff7e0] text-[#a06000] text-[11px] font-bold py-[3px] px-[9px] rounded-pill">Pending</span>
            </div>
          </RevealWrapper>
        </div>
      </div>
    </section>
  )
}
