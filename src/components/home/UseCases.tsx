'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import clsx from 'clsx'
import RevealWrapper from '@/components/ui/RevealWrapper'
import SectionHead from '@/components/ui/SectionHead'
import { useCases } from '@/data/useCases'

export default function UseCases() {
  const [activeTab, setActiveTab] = useState(useCases[0].id)
  const activeData = useCases.find(uc => uc.id === activeTab)

  return (
    <section id="use-cases" className="py-[96px] px-5 lg:px-8 bg-bg2">
      <div className="max-w-[1140px] mx-auto">
        <RevealWrapper>
          <SectionHead
            badge="Use Cases"
            title="Where automation creates the most leverage."
            subtitle="See exactly how we eliminate friction across your most time-intensive processes."
          />
        </RevealWrapper>

        <RevealWrapper delay={0.2} className="flex gap-2 mb-[36px] flex-wrap justify-center lg:justify-start">
          {useCases.map((uc) => (
            <button
              key={uc.id}
              onClick={() => setActiveTab(uc.id)}
              className={clsx(
                "font-sans text-[14px] font-semibold px-[22px] py-[9px] rounded-pill border-[1.5px] transition-all duration-200",
                activeTab === uc.id
                  ? "bg-blue text-white border-blue shadow-[0_4px_14px_rgba(37,117,252,0.3)]"
                  : "bg-white text-text2 border-border hover:bg-bg3"
              )}
            >
              {uc.label}
            </button>
          ))}
        </RevealWrapper>

        <div className="relative overflow-hidden min-h-[500px] lg:min-h-[400px]">
          <AnimatePresence mode="wait">
            {activeData && (
              <motion.div
                key={activeData.id}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.3 }}
                className="grid grid-cols-1 lg:grid-cols-[5fr_4fr] gap-[36px] lg:gap-[60px] items-start"
              >
                <div>
                  <h3 className="font-display text-[32px] font-normal text-navy leading-[1.15] mb-3">
                    {activeData.title}
                  </h3>
                  <p className="font-sans text-[16px] text-text2 leading-[1.7] mb-6">
                    {activeData.subtitle}
                  </p>
                  <ul className="list-none flex flex-col gap-3 mb-6">
                    {activeData.bullets.map((bullet, i) => (
                      <li key={i} className="flex items-start gap-3 font-sans text-[15px] text-text2 leading-[1.5]">
                        <span className="w-5 h-5 rounded-full bg-blue-lt flex items-center justify-center shrink-0 mt-[1px] text-blue">
                          <svg width="10" height="8" viewBox="0 0 10 8" fill="none"><path d="M1 4l3 3 5-6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/></svg>
                        </span>
                        {bullet}
                      </li>
                    ))}
                  </ul>
                  <div className="inline-flex items-center gap-2 bg-blue-lt text-blue px-4 py-2 rounded-lg font-sans text-[13px] font-semibold">
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M2 10L5 6l3 3 4-5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>
                    {activeData.kpi}
                  </div>
                </div>

                <div className="bg-bg2 border border-border rounded-lg p-5 flex flex-col gap-[10px]">
                  <p className="font-sans text-[11px] font-bold text-text3 tracking-[0.1em] uppercase mb-[2px]">
                    Live workflow
                  </p>
                  {activeData.workflowItems.map((item, i) => (
                    <div key={i} className="bg-white border border-border rounded-[10px] p-[14px_16px] shadow-[0_1px_4px_rgba(22,43,84,0.05)]">
                      <div className="flex items-center gap-2 mb-1">
                        <span className={clsx("w-[7px] h-[7px] rounded-full shrink-0", item.status === 'green' ? 'bg-[#0d8a4e]' : 'bg-blue')} />
                        <span className="font-sans text-[13px] font-semibold text-navy">{item.title}</span>
                      </div>
                      <p className="font-sans text-[12px] text-text2 leading-[1.5]">
                        {item.body}
                      </p>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}
