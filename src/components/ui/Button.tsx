import Link from 'next/link'
import clsx from 'clsx'

type ButtonProps = {
  href?: string
  variant: 'primary' | 'outline' | 'ghost' | 'white'
  children: React.ReactNode
  onClick?: () => void
  type?: 'button' | 'submit'
  disabled?: boolean
  className?: string
}

export default function Button({
  href,
  variant,
  children,
  onClick,
  type = 'button',
  disabled,
  className,
}: ButtonProps) {
  const baseClasses = 'inline-flex items-center justify-center gap-2 font-sans text-[15px] font-semibold transition-all duration-200 rounded-pill px-[26px] py-[13px]'
  
  const variantClasses = {
    primary: 'bg-blue text-white shadow-[0_4px_16px_rgba(37,117,252,0.3)] hover:bg-blue-d hover:-translate-y-[1px] hover:shadow-[0_8px_24px_rgba(37,117,252,0.4)]',
    outline: 'bg-transparent border-[1.5px] border-blue text-blue px-[24px] py-[12px] hover:bg-blue-lt',
    ghost: 'bg-transparent border border-white/30 text-white/75 hover:bg-white/10 hover:text-white',
    white: 'bg-white text-navy shadow-[0_4px_16px_rgba(0,0,0,0.15)] hover:bg-[#f0f4ff] hover:-translate-y-[1px]',
  }

  const classes = clsx(baseClasses, variantClasses[variant], className, disabled && 'opacity-50 cursor-not-allowed')

  if (href) {
    if (href.startsWith('http')) {
      return (
        <a href={href} target="_blank" rel="noopener noreferrer" className={classes}>
          {children}
        </a>
      )
    }
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    )
  }

  return (
    <button type={type} onClick={onClick} disabled={disabled} className={classes}>
      {children}
    </button>
  )
}
