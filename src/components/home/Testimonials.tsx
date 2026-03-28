import RevealWrapper from '@/components/ui/RevealWrapper'
import SectionHead from '@/components/ui/SectionHead'
import TestimonialStack from '@/components/ui/TestimonialStack'
import { testimonials } from '@/data/testimonials'

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-[96px] px-5 lg:px-8 bg-white relative overflow-hidden">
      {/* Background gradients for interest */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-40">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-mid blur-[120px] rounded-full" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-mid blur-[120px] rounded-full opacity-60" />
      </div>

      <div className="max-w-[1140px] mx-auto relative z-10">
        <RevealWrapper>
          <SectionHead
            badge="Client Results"
            title="What teams say after going live."
          />
        </RevealWrapper>

        <RevealWrapper delay={0.2} className="mt-32">
          <TestimonialStack testimonials={testimonials as any} />
        </RevealWrapper>
      </div>
    </section>
  )
}
