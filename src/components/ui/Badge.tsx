import clsx from 'clsx'

type BadgeProps = {
  label: string
  className?: string
}

export default function Badge({ label, className }: BadgeProps) {
  return (
    <div className={clsx("inline-flex items-center gap-[6px] bg-blue-lt text-blue px-[13px] py-[5px] rounded-pill font-sans text-[12px] font-bold tracking-[0.06em] uppercase mb-4", className)}>
      <span className="w-[6px] h-[6px] rounded-full bg-blue shrink-0"></span>
      {label}
    </div>
  )
}
