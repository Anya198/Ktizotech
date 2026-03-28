import RevealWrapper from '@/components/ui/RevealWrapper'
import StarButton from '@/components/ui/StarButton'

export default function CtaBand() {
  return (
    <section id="cta" className="bg-navy py-[80px] px-5 lg:px-8">
      <div className="max-w-[1140px] mx-auto text-center">
        <RevealWrapper>
          <h2 className="font-display font-normal text-white text-[clamp(26px,3.5vw,44px)] leading-[1.15] mb-[14px] tracking-tight">
            Get ready to get started.<br />What can be automated, will be.
          </h2>
        </RevealWrapper>
        <RevealWrapper delay={0.1}>
          <p className="font-sans text-[17px] text-white/65 mb-[32px] max-w-[480px] mx-auto leading-[1.7]">
            Join the businesses saving thousands of hours every month. Your first consultation is completely free.
          </p>
        </RevealWrapper>
        <RevealWrapper delay={0.2} className="flex gap-[12px] justify-center flex-wrap">
          <StarButton href="https://calendly.com/officialktizotech/new-meeting" target="_blank" rel="noopener noreferrer">
            book a call
          </StarButton>
        </RevealWrapper>
      </div>
    </section>
  )
}
