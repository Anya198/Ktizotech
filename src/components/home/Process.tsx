import RevealWrapper from '@/components/ui/RevealWrapper'
import SectionHead from '@/components/ui/SectionHead'

export default function Process() {
  return (
    <section id="process" className="py-[96px] px-5 lg:px-8 bg-white">
      <div className="max-w-[1140px] mx-auto">
        <RevealWrapper>
          <SectionHead
            badge="How It Works"
            title="From conversation to live automation in weeks."
            subtitle="A repeatable, low-disruption process. No changing your tools. No long implementation cycles."
          />
        </RevealWrapper>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-0 relative">
          {/* Desktop Connecting Line */}
          <div className="hidden lg:block absolute top-[27px] left-[calc(16.67%+20px)] right-[calc(16.67%+20px)] h-[2px] bg-[linear-gradient(90deg,var(--blue-mid)_0%,var(--blue)_50%,var(--blue-mid)_100%)] pointer-events-none" />

          {/* Step 1 */}
          <RevealWrapper delay={0.1} className="lg:px-[28px] lg:text-center pb-[36px] lg:pb-0 flex lg:block gap-5 items-start text-left">
            <div className="w-[56px] h-[56px] shrink-0 rounded-full bg-blue text-white font-sans text-[18px] font-bold flex items-center justify-center lg:mx-auto mb-0 lg:mb-[22px] relative z-10 shadow-[0_4px_16px_rgba(37,117,252,0.35)]">
              1
            </div>
            <div>
              <h3 className="font-sans text-[19px] font-bold text-navy mb-[10px]">Discovery Workshop</h3>
              <p className="font-sans text-[15px] text-text2 leading-[1.7]">
                We map your current workflows, identify the highest-friction processes, and rank them by ROI. You leave with a concrete automation roadmap — whether you hire us or not.
              </p>
            </div>
          </RevealWrapper>

          {/* Step 2 */}
          <RevealWrapper delay={0.2} className="lg:px-[28px] lg:text-center pb-[36px] lg:pb-0 flex lg:block gap-5 items-start text-left">
            <div className="w-[56px] h-[56px] shrink-0 rounded-full bg-blue text-white font-sans text-[18px] font-bold flex items-center justify-center lg:mx-auto mb-0 lg:mb-[22px] relative z-10 shadow-[0_4px_16px_rgba(37,117,252,0.35)]">
              2
            </div>
            <div>
              <h3 className="font-sans text-[19px] font-bold text-navy mb-[10px]">Build & Connect</h3>
              <p className="font-sans text-[15px] text-text2 leading-[1.7]">
                We design, build, and test your automations — connecting your existing tools, configuring access controls, and validating every flow in a staging environment before it touches production.
              </p>
            </div>
          </RevealWrapper>

          {/* Step 3 */}
          <RevealWrapper delay={0.3} className="lg:px-[28px] lg:text-center pb-0 flex lg:block gap-5 items-start text-left">
            <div className="w-[56px] h-[56px] shrink-0 rounded-full bg-blue text-white font-sans text-[18px] font-bold flex items-center justify-center lg:mx-auto mb-0 lg:mb-[22px] relative z-10 shadow-[0_4px_16px_rgba(37,117,252,0.35)]">
              3
            </div>
            <div>
              <h3 className="font-sans text-[19px] font-bold text-navy mb-[10px]">Deploy & Handover</h3>
              <p className="font-sans text-[15px] text-text2 leading-[1.7]">
                We deploy live, train your team, document every flow, and hand over full ownership. Ongoing support is available through our Care Plan — but you&apos;re never locked in.
              </p>
            </div>
          </RevealWrapper>
        </div>
      </div>
    </section>
  )
}
