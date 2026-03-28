import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { caseStudies } from '@/data/caseStudies'
import CaseStudyHero from '@/components/case-studies/CaseStudyHero'
import CtaBand from '@/components/home/CtaBand'
import RevealWrapper from '@/components/ui/RevealWrapper'

type Props = {
  params: { slug: string }
}

export function generateStaticParams() {
  return caseStudies.map((study) => ({
    slug: study.slug,
  }))
}

export function generateMetadata({ params }: Props): Metadata {
  const study = caseStudies.find((s) => s.slug === params.slug)
  if (!study) {
    return { title: 'Not Found' }
  }

  return {
    title: `${study.title} — KtizoTech Case Study`,
    description: study.excerpt,
    openGraph: {
      title: study.title,
      description: study.excerpt,
      images: [{ url: '/og-image.png', width: 1200, height: 630 }],
      type: 'article',
    },
  }
}

export default function CaseStudyPage({ params }: Props) {
  const study = caseStudies.find((s) => s.slug === params.slug)
  if (!study) notFound()

  return (
    <main>
      <div className="bg-[linear-gradient(155deg,#fff_0%,#f3f7ff_100%)] pt-[40px] px-5 lg:px-8">
        <div className="max-w-[800px] mx-auto">
          <Link href="/case-studies" className="font-sans text-[14px] font-semibold text-text2 hover:text-blue transition-colors">
            ← Back to Case Studies
          </Link>
        </div>
      </div>

      <CaseStudyHero
        title={study.title}
        client={study.client}
        category={study.category}
        result={study.result}
      />

      <section className="py-[80px] px-5 lg:px-8 bg-white">
        <div className="max-w-[800px] mx-auto">
          <RevealWrapper delay={0.2} className="prose prose-lg prose-blue max-w-none font-sans text-text2">
            <h2>The Challenge</h2>
            <p>{study.challenge}</p>

            <h2>The Solution</h2>
            <p>{study.solution}</p>

            <h2>The Outcome</h2>
            <ul>
              {study.outcome.map((point, index) => (
                <li key={index} className="text-[16px] leading-[1.7] text-text2 mb-2">{point}</li>
              ))}
            </ul>

            <h2>Tools Used</h2>
            <div className="flex flex-wrap gap-2 not-prose mt-6">
              {study.tools.map((tool) => (
                <span
                  key={tool}
                  className="bg-bg2 border border-border text-navy font-semibold text-[13px] px-4 py-2 rounded-lg"
                >
                  {tool}
                </span>
              ))}
            </div>
          </RevealWrapper>
        </div>
      </section>

      <CtaBand />
    </main>
  )
}
