import Link from 'next/link'
import Badge from '@/components/ui/Badge'

type CaseStudyCardProps = {
  title: string
  client: string
  category: string
  result: string
  slug: string
  excerpt: string
}

export default function CaseStudyCard({
  title,
  client,
  category,
  result,
  slug,
  excerpt,
}: CaseStudyCardProps) {
  return (
    <div className="bg-white border border-border rounded-lg p-[36px_32px] transition-all duration-250 hover:-translate-y-1 hover:shadow-elevated flex flex-col h-full">
      <div className="mb-4">
        <Badge label={category} />
      </div>
      <h3 className="font-display text-[22px] font-normal text-navy leading-[1.25] mb-2">{title}</h3>
      <p className="font-sans text-[13px] font-semibold text-text3 mb-[16px]">{client}</p>
      <p className="font-sans text-[15px] text-text2 leading-[1.6] line-clamp-2 mb-6 flex-grow">{excerpt}</p>
      
      <div className="border-t border-border pt-5 mt-auto flex items-center justify-between">
        <div>
          <span className="block font-sans text-[11px] font-bold text-text3 tracking-[0.1em] uppercase mb-[2px]">Result</span>
          <span className="font-sans text-[15px] font-bold text-blue">{result}</span>
        </div>
        <Link href={`/case-studies/${slug}`} className="font-sans text-[14px] font-semibold text-navy hover:text-blue transition-colors">
          Read case study →
        </Link>
      </div>
    </div>
  )
}
