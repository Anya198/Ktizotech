import RevealWrapper from '@/components/ui/RevealWrapper'
import { primaryStats, secondaryStats } from '@/data/stats'

export default function AiStats() {
  return (
    <section id="ai-stats" className="bg-navy py-[80px] px-5 lg:px-8">
      <div className="max-w-[1140px] mx-auto">
        <RevealWrapper className="text-center mb-[52px]">
          <div className="inline-flex items-center gap-[6px] bg-white/10 text-white/75 px-[14px] py-[5px] rounded-pill font-sans text-[12px] font-bold tracking-[0.07em] uppercase mb-4">
            <svg width="8" height="8" viewBox="0 0 8 8"><circle cx="4" cy="4" r="3" fill="rgba(255,255,255,.8)"/></svg>
            The Automation Era
          </div>
          <h2 className="font-display font-normal text-white text-[clamp(26px,3.5vw,42px)] leading-[1.15] tracking-tight mb-3">
            The AI automation revolution<br />is already underway.
          </h2>
          <p className="font-sans text-[16px] text-white/60 max-w-[520px] mx-auto leading-[1.7]">
            Businesses that act now capture compounding advantages. The numbers speak for themselves.
          </p>
        </RevealWrapper>

        <div className="grid grid-cols-2 lg:grid-cols-4 border border-white/10 rounded-lg overflow-hidden mb-[36px]">
          {primaryStats.map((stat, i) => (
            <RevealWrapper key={i} delay={0.1 * (i + 1)} className="bg-white/[0.03] p-[36px_24px] text-center border-r border-white-[0.07] last:border-r-0 hover:bg-white/[0.06] transition-colors">
              <span className="font-display text-[50px] leading-none text-blue block mb-[10px]">{stat.num}</span>
              <p className="font-sans text-[14px] text-white/65 leading-[1.5] mb-[6px]">{stat.label}</p>
              <p className="font-sans text-[11px] text-white/30 italic">{stat.source}</p>
            </RevealWrapper>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-[32px]">
          {secondaryStats.map((stat, i) => (
            <RevealWrapper key={i} delay={0.1 * (i + 1)} className="bg-white/[0.05] border border-white/[0.08] rounded-xl p-[20px_22px]">
              <div className="font-sans text-[28px] font-bold text-white mb-[6px] leading-none">{stat.num}</div>
              <p className="font-sans text-[13px] text-white/55 leading-[1.5]">{stat.desc}</p>
            </RevealWrapper>
          ))}
        </div>

        <RevealWrapper>
          <p className="text-center font-sans text-[12px] text-white/30">
            Sources: McKinsey Global Institute (2023) · Boston Consulting Group (2023) · World Economic Forum Future of Jobs Report (2023) · Gartner (2023) · Deloitte AI Report (2023) · MIT Sloan Management Review
          </p>
        </RevealWrapper>
      </div>
    </section>
  )
}
