'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Badge from '@/components/ui/Badge'
import RevealWrapper from '@/components/ui/RevealWrapper'
import CaseStudyCard from '@/components/case-studies/CaseStudyCard'
import { caseStudies } from '@/data/caseStudies'
import clsx from 'clsx'
import CtaBand from '@/components/home/CtaBand'

const CATEGORIES = ['All', 'Sales', 'Operations', 'Support']

export default function CaseStudiesPage() {
  const [activeCategory, setActiveCategory] = useState('All')

  const filteredStudies = caseStudies.filter(
    (study) => activeCategory === 'All' || study.category === activeCategory
  )

  return (
    <main>
      <section className="pt-[120px] pb-[80px] px-5 lg:px-8 bg-[linear-gradient(155deg,#fff_0%,#f3f7ff_100%)] border-b border-border text-center">
        <div className="max-w-[800px] mx-auto">
          <RevealWrapper>
            <Badge label="Client Success" />
          </RevealWrapper>
          <RevealWrapper delay={0.1}>
            <h1 className="font-display font-normal text-navy text-[clamp(36px,4.5vw,52px)] leading-[1.12] mb-[20px] tracking-tight">
              Real automations. Measurable results.
            </h1>
          </RevealWrapper>
          <RevealWrapper delay={0.2}>
            <p className="font-sans text-[17px] text-text2 leading-[1.75] max-w-[600px] mx-auto">
              See exactly how businesses like yours partner with KtizoTech to eliminate friction, cut costs, and unlock massive operational leverage.
            </p>
          </RevealWrapper>
        </div>
      </section>

      <section className="py-[80px] px-5 lg:px-8 bg-bg2 min-h-[500px]">
        <div className="max-w-[1140px] mx-auto">
          <RevealWrapper delay={0.3} className="flex gap-[8px] flex-wrap justify-center mb-[48px]">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={clsx(
                  "font-sans text-[14px] font-semibold px-[20px] py-[8px] rounded-pill border-[1.5px] transition-all duration-200",
                  activeCategory === cat
                    ? "bg-blue text-white border-blue shadow-[0_4px_14px_rgba(37,117,252,0.3)]"
                    : "bg-white text-text2 border-border hover:bg-bg3"
                )}
              >
                {cat}
              </button>
            ))}
          </RevealWrapper>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimatePresence mode="popLayout">
              {filteredStudies.map((study) => (
                <motion.div
                  key={study.slug}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                >
                  <CaseStudyCard {...study} />
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
          
          {filteredStudies.length === 0 && (
            <div className="text-center py-[60px] font-sans text-text2 text-[16px]">
              No case studies found for this category yet.
            </div>
          )}
        </div>
      </section>

      <CtaBand />
    </main>
  )
}
