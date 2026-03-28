import RevealWrapper from '@/components/ui/RevealWrapper'
import SectionHead from '@/components/ui/SectionHead'
import { features } from '@/data/features'

function getIcon(name: string) {
  switch (name) {
    case 'dollar':
      return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <line x1="12" y1="1" x2="12" y2="23"/>
          <path d="M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6"/>
        </svg>
      )
    case 'lightning':
      return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>
        </svg>
      )
    case 'shield':
    default:
      return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22s8-4 8-10V5l-8-4-8 4v7c0 6 8 10 8 10z"/>
        </svg>
      )
  }
}

export default function Features() {
  return (
    <section id="features" className="py-[96px] px-5 lg:px-8 bg-white">
      <div className="max-w-[1140px] mx-auto">
        <RevealWrapper>
          <SectionHead
            badge="Core Services"
            title="Three principles. Every engagement."
            subtitle="From discovery call to live deployment — these are the outcomes we're accountable to."
          />
        </RevealWrapper>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-[480px] md:max-w-none mx-auto">
          {features.map((feature, i) => (
            <RevealWrapper key={feature.num} delay={0.1 * (i + 1)}>
              <div className="bg-white border border-border rounded-lg p-[36px_32px] transition-all duration-250 hover:-translate-y-1 hover:shadow-elevated relative overflow-hidden group">
                <div className="absolute top-0 left-0 right-0 h-[3px] bg-blue opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <span className="font-sans text-[11px] font-bold text-text3 tracking-[0.15em] uppercase mb-[10px] block">
                  {feature.num}
                </span>
                <div className="w-[50px] h-[50px] rounded-[12px] bg-blue-lt flex items-center justify-center mb-5 text-blue">
                  {getIcon(feature.icon)}
                </div>
                <h3 className="font-sans text-[21px] font-bold text-navy mb-3 leading-[1.2]">
                  {feature.title}
                </h3>
                <p className="font-sans text-[15px] text-text2 leading-[1.75]">
                  {feature.description}
                </p>
              </div>
            </RevealWrapper>
          ))}
        </div>
      </div>
    </section>
  )
}
