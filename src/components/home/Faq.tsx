'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import clsx from 'clsx'
import RevealWrapper from '@/components/ui/RevealWrapper'
import SectionHead from '@/components/ui/SectionHead'
import { faqs } from '@/data/faqs'

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section id="faq" className="py-[96px] px-5 lg:px-8 bg-bg2 pt-0">
      <div className="max-w-[1140px] mx-auto">
        <RevealWrapper>
          <SectionHead
            badge="FAQ"
            title="Frequently asked questions."
            subtitle="Everything you need to know before we talk."
          />
        </RevealWrapper>

        <RevealWrapper delay={0.2} className="max-w-[760px] mx-auto">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i

            return (
              <div key={i} className="border-b border-border">
                <div
                  className={clsx(
                    "flex justify-between items-center py-[22px] cursor-pointer font-sans text-[16px] font-semibold gap-4 transition-colors duration-200 select-none",
                    isOpen ? "text-blue" : "text-navy hover:text-blue"
                  )}
                  onClick={() => toggleFaq(i)}
                >
                  <span>{faq.q}</span>
                  <div className={clsx("w-[28px] h-[28px] rounded-full flex items-center justify-center shrink-0 transition-all duration-250", isOpen ? "bg-blue-lt rotate-45 text-blue" : "bg-bg3 text-text2")}>
                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none"><path d="M1 5h8M5 1v8" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/></svg>
                  </div>
                </div>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                      className="overflow-hidden"
                    >
                      <p className="pb-[22px] font-sans text-[15px] text-text2 leading-[1.8]">
                        {faq.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            )
          })}
        </RevealWrapper>
      </div>
    </section>
  )
}
