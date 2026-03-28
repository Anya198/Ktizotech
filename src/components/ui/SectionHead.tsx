import Badge from './Badge'
import clsx from 'clsx'

type SectionHeadProps = {
  badge?: string
  title: React.ReactNode
  subtitle?: React.ReactNode
  align?: 'center' | 'left'
  className?: string
}

export default function SectionHead({ badge, title, subtitle, align = 'center', className }: SectionHeadProps) {
  return (
    <div className={clsx("mb-[60px] max-w-[640px]", align === 'center' ? "mx-auto text-center" : "", className)}>
      {badge && <Badge label={badge} />}
      <h2 className="font-display font-normal text-navy text-[clamp(30px,3.8vw,46px)] leading-[1.12] tracking-tight mb-[14px]">
        {title}
      </h2>
      {subtitle && (
        <p className="font-sans text-[17px] text-text2 leading-[1.75]">
          {subtitle}
        </p>
      )}
    </div>
  )
}
