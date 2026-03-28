import Badge from '@/components/ui/Badge'
import RevealWrapper from '@/components/ui/RevealWrapper'

type CaseStudyHeroProps = {
  title: string
  client: string
  category: string
  result: string
}

export default function CaseStudyHero({ title, client, category, result }: CaseStudyHeroProps) {
  return (
    <section className="pt-[120px] pb-[80px] px-5 lg:px-8 bg-[linear-gradient(155deg,#fff_0%,#f3f7ff_100%)] border-b border-border">
      <div className="max-w-[800px] mx-auto text-center">
        <RevealWrapper>
          <Badge label={category} />
        </RevealWrapper>
        <RevealWrapper delay={0.1}>
          <h1 className="font-display font-normal text-navy text-[clamp(32px,4vw,48px)] leading-[1.15] mb-[20px] tracking-tight">
            {title}
          </h1>
        </RevealWrapper>
        <RevealWrapper delay={0.2} className="flex flex-col items-center gap-1 mb-[36px]">
          <span className="font-sans text-[15px] font-semibold text-text2">{client}</span>
        </RevealWrapper>
        <RevealWrapper delay={0.3} className="inline-flex flex-col items-center bg-white border border-border rounded-lg p-[16px_32px] shadow-standard">
          <span className="font-sans text-[12px] font-bold text-text3 tracking-[0.1em] uppercase mb-[4px]">Verified Result</span>
          <span className="font-sans text-[20px] font-bold text-blue">{result}</span>
        </RevealWrapper>
      </div>
    </section>
  )
}
