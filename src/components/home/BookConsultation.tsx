'use client'

import { useState } from 'react'
import Script from 'next/script'
import RevealWrapper from '@/components/ui/RevealWrapper'
import SectionHead from '@/components/ui/SectionHead'
import clsx from 'clsx'

const TIMES = ['9:00 AM', '10:30 AM', '1:00 PM', '2:30 PM', '4:00 PM', '5:30 PM']

interface CalendlyWindow extends Window {
  Calendly?: {
    initPopupWidget: (options: { url: string }) => void
  }
}

const openCalendly = (e: React.MouseEvent<HTMLAnchorElement>) => {
  const url = process.env.NEXT_PUBLIC_CALENDLY_URL || 'https://calendly.com/ktizotech/consultation'
  e.preventDefault()

  if (typeof window !== 'undefined' && (window as unknown as CalendlyWindow).Calendly) {
    (window as unknown as CalendlyWindow).Calendly?.initPopupWidget({ url })
  } else {
    window.open(url, '_blank')
  }
}

export default function BookConsultation() {
  const [selectedDay, setSelectedDay] = useState<number | null>(null)
  const [selectedTime, setSelectedTime] = useState<string | null>(null)

  const now = new Date()
  const y = now.getFullYear()
  const m = now.getMonth()
  const mn = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
  const dn = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa']

  const firstDay = new Date(y, m, 1).getDay()
  const daysInMonth = new Date(y, m + 1, 0).getDate()
  const todayDate = now.getDate()

  // Generate calendar days
  const calendarDays = []
  for (let i = 0; i < firstDay; i++) {
    calendarDays.push({ empty: true })
  }
  for (let d = 1; d <= daysInMonth; d++) {
    const isWeekend = new Date(y, m, d).getDay() === 0 || new Date(y, m, d).getDay() === 6
    const isPast = d < todayDate
    const isToday = d === todayDate
    const isAvailable = !isPast && !isWeekend && (d % 2 !== 0 || d === todayDate) // Randomish availability
    
    calendarDays.push({ d, isWeekend, isPast, isToday, isAvailable })
  }

  return (
    <section id="book" className="py-[96px] px-5 lg:px-8 bg-bg2">
      <Script src="https://assets.calendly.com/assets/external/widget.js" strategy="lazyOnload" />
      
      <div className="max-w-[1140px] mx-auto">
        <RevealWrapper>
          <SectionHead
            badge="Free Consultation"
            title={<>Let&apos;s map your first automation.<br />No commitment. No sales pitch.</>}
            subtitle="A free 45-minute call where we walk through your bottlenecks, identify quick wins, and hand you a concrete automation roadmap — yours to keep regardless."
          />
        </RevealWrapper>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-[72px] items-start">
          <div>
            <div className="flex flex-col gap-[18px] mb-[32px]">
              <RevealWrapper delay={0.1} className="flex items-start gap-[14px]">
                <div className="w-[38px] h-[38px] rounded-[10px] bg-blue-lt flex items-center justify-center shrink-0 mt-[2px] text-blue">
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="9" cy="9" r="7"/><path d="M9 5v4l3 3"/></svg>
                </div>
                <div>
                  <p className="font-sans text-[15px] font-semibold text-navy mb-[2px]">45 minutes — straight to the point</p>
                  <p className="font-sans text-[14px] text-text2">We focus on your specific workflows, not generic demos. Real conversation, real output.</p>
                </div>
              </RevealWrapper>
              <RevealWrapper delay={0.2} className="flex items-start gap-[14px]">
                <div className="w-[38px] h-[38px] rounded-[10px] bg-blue-lt flex items-center justify-center shrink-0 mt-[2px] text-blue">
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="14" height="14" rx="3"/><path d="M6 9l2.5 2.5L12 6"/></svg>
                </div>
                <div>
                  <p className="font-sans text-[15px] font-semibold text-navy mb-[2px]">You keep the roadmap</p>
                  <p className="font-sans text-[14px] text-text2">Walk away with a prioritized automation plan — whether you work with us or not.</p>
                </div>
              </RevealWrapper>
              <RevealWrapper delay={0.3} className="flex items-start gap-[14px]">
                <div className="w-[38px] h-[38px] rounded-[10px] bg-blue-lt flex items-center justify-center shrink-0 mt-[2px] text-blue">
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M9 2L3 6v5c0 4 3 6 6 7 3-1 6-3 6-7V6L9 2z"/><path d="M6 9l2 2 4-4"/></svg>
                </div>
                <div>
                  <p className="font-sans text-[15px] font-semibold text-navy mb-[2px]">Zero commitment required</p>
                  <p className="font-sans text-[14px] text-text2">This is a working session. We earn your trust by delivering value upfront, not by selling.</p>
                </div>
              </RevealWrapper>
              <RevealWrapper delay={0.4} className="flex items-start gap-[14px]">
                <div className="w-[38px] h-[38px] rounded-[10px] bg-blue-lt flex items-center justify-center shrink-0 mt-[2px] text-blue">
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="9" cy="9" r="7"/><path d="M9 6v3l2 2"/></svg>
                </div>
                <div>
                  <p className="font-sans text-[15px] font-semibold text-navy mb-[2px]">Results within 2 weeks of kickoff</p>
                  <p className="font-sans text-[14px] text-text2">If we work together, your first production automation is live in under 2 weeks from our discovery session.</p>
                </div>
              </RevealWrapper>
            </div>
            <RevealWrapper>
              <p className="font-sans text-[13px] text-text3">
                Prefer to email first? <a href="mailto:hello@ktizotech.com" className="text-blue font-semibold no-underline hover:underline">hello@ktizotech.com</a>
              </p>
            </RevealWrapper>
          </div>

          <RevealWrapper delay={0.2}>
            <div className="bg-white border border-border rounded-[20px] overflow-hidden shadow-elevated">
              <div className="bg-navy p-[26px_28px_22px]">
                <p className="font-sans text-[18px] font-bold text-white mb-1">Book Your Free Consultation</p>
                <p className="font-sans text-[14px] text-white/60">45 min · Strategy Call · KtizoTech</p>
                <div className="flex gap-[14px] mt-[14px] flex-wrap">
                  <span className="flex items-center gap-[5px] font-sans text-[12px] text-white/60">
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><circle cx="6" cy="6" r="5" stroke="currentColor" strokeWidth="1.2"/><path d="M6 3.5v2.5l1.5 1.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/></svg>
                    45 minutes
                  </span>
                  <span className="flex items-center gap-[5px] font-sans text-[12px] text-white/60">
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><rect x="1" y="2" width="10" height="9" rx="2" stroke="currentColor" strokeWidth="1.2"/><path d="M1 5h10M4 1v2M8 1v2" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/></svg>
                    Google Meet
                  </span>
                  <span className="flex items-center gap-[5px] font-sans text-[12px] text-white/60">
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><circle cx="6" cy="6" r="5" stroke="currentColor" strokeWidth="1.2"/><path d="M4 6l1.5 1.5L8 4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                    Free
                  </span>
                </div>
              </div>

              <div className="p-[26px]">
                <p className="font-sans text-[11px] font-bold text-text3 tracking-[0.08em] uppercase mb-[12px]">
                  {mn[m]} {y}
                </p>
                
                <div className="grid grid-cols-7 gap-[3px] mb-[3px]">
                  {dn.map(d => (
                    <div key={d} className="font-sans text-[10px] font-bold text-text3 text-center py-1">{d}</div>
                  ))}
                </div>

                <div className="grid grid-cols-7 gap-[3px] mb-[20px]">
                  {calendarDays.map((day, i) => {
                    if (day.empty) return <div key={`empty-${i}`} className="aspect-square" />
                    
                    const isSelected = selectedDay === day.d
                    const clickHandler = day.isAvailable ? () => { setSelectedDay(day.d); setSelectedTime(null); } : undefined

                    return (
                      <div
                        key={`day-${day.d}`}
                        onClick={clickHandler}
                        className={clsx(
                          "aspect-square rounded-[7px] flex items-center justify-center font-sans text-[13px] transition-all duration-150 border-[1.5px] border-transparent",
                          day.isPast || (!day.isAvailable && !day.isPast) ? "text-text3 opacity-40 cursor-default" : "cursor-pointer font-medium text-text2",
                          day.isToday && !isSelected ? "bg-blue text-white font-bold shadow-[0_2px_8px_rgba(37,117,252,0.4)]" : "",
                          day.isAvailable && !isSelected && !day.isToday ? "font-semibold text-navy hover:bg-blue-lt hover:text-blue hover:border-blue-mid" : "",
                          isSelected ? "bg-blue text-white border-blue shadow-[0_2px_8px_rgba(37,117,252,0.3)]" : ""
                        )}
                      >
                        {day.d}
                      </div>
                    )
                  })}
                </div>

                <p className="font-sans text-[11px] font-bold text-text3 tracking-[0.08em] uppercase mb-[12px]">
                  {selectedDay ? `Available times on ${mn[m]} ${selectedDay}` : 'Available times'}
                </p>

                <div className="grid grid-cols-2 gap-[8px] mb-[22px]">
                  {TIMES.map(t => (
                    <div
                      key={t}
                      onClick={() => selectedDay && setSelectedTime(t)}
                      className={clsx(
                        "p-[10px_12px] border-[1.5px] rounded-lg font-sans text-[14px] text-center transition-all duration-150",
                        !selectedDay ? "border-border text-text3 opacity-50 cursor-not-allowed" : "cursor-pointer",
                        selectedDay && selectedTime !== t ? "border-border text-text2 hover:border-blue hover:text-blue hover:bg-blue-lt font-medium" : "",
                        selectedTime === t ? "border-blue bg-blue text-white font-medium shadow-[0_2px_8px_rgba(37,117,252,0.3)]" : ""
                      )}
                    >
                      {t}
                    </div>
                  ))}
                </div>

                <a 
                  href={process.env.NEXT_PUBLIC_CALENDLY_URL || 'https://calendly.com/ktizotech/consultation'} 
                  onClick={openCalendly}
                  className="block w-full bg-blue text-white border-none p-[15px] rounded-[10px] font-sans text-[15px] font-bold cursor-pointer transition-all duration-200 shadow-[0_4px_14px_rgba(37,117,252,0.35)] no-underline text-center hover:bg-blue-d hover:-translate-y-[1px]"
                >
                  Schedule on Calendly →
                </a>
                <p className="font-sans text-[12px] text-text3 text-center mt-[10px]">
                  You&apos;ll be taken to Calendly to confirm your slot and add details.
                </p>
              </div>
            </div>
          </RevealWrapper>
        </div>
      </div>
    </section>
  )
}
