'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import clsx from 'clsx'
import StarButton from '@/components/ui/StarButton'

const navLinks = [
  { href: '/#features', label: 'Services' },
  { href: '/#use-cases', label: 'Use Cases' },
  { href: '/#process', label: 'How It Works' },
  { href: '/case-studies', label: 'Case Studies' },
  { href: '/#faq', label: 'FAQ' },
]

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  const toggleMob = () => setIsOpen(!isOpen)
  const closeMob = () => setIsOpen(false)

  return (
    <nav className="sticky top-0 z-[300] bg-white/94 backdrop-blur-md border-b border-border">
      <div className="max-w-[1140px] mx-auto flex items-center justify-between py-4 px-5 lg:px-8">
        <Link href="/" onClick={closeMob} className="flex items-center gap-[9px] text-navy no-underline">
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
            <rect width="32" height="32" rx="8" fill="#2575FC" />
            <path d="M9 8v16M9 16l10-8M9 16l10 8" stroke="white" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M22 12l4 4-4 4" stroke="rgba(255,255,255,0.6)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <span className="font-sans font-bold text-[18px] tracking-tight">KtizoTech</span>
        </Link>
        <div className="hidden lg:flex gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={clsx(
                'font-sans text-[15px] font-medium px-[14px] py-[7px] rounded-lg transition-all duration-150',
                pathname === link.href ? 'text-navy bg-bg2' : 'text-text2 hover:text-navy hover:bg-bg2'
              )}
            >
              {link.label}
            </Link>
          ))}
        </div>
        <div className="flex items-center gap-[10px]">
          <StarButton
            href="https://calendly.com/officialktizotech/new-meeting"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden lg:inline-flex h-10 px-5 text-[14px]"
          >
            book a call
          </StarButton>
          <button
            className="lg:hidden bg-transparent border-[1.5px] border-border text-text2 p-[8px] rounded-lg cursor-pointer"
            onClick={toggleMob}
            aria-label="Menu"
          >
            <svg width="18" height="14" viewBox="0 0 18 14" fill="none">
              <path d="M1 1h16M1 7h16M1 13h16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          </button>
        </div>
      </div>
      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden flex flex-col border-t border-border bg-bg">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={closeMob}
              className="py-[15px] px-8 text-text2 text-[15px] border-b border-border hover:text-navy hover:bg-bg2 transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <StarButton
            href="https://calendly.com/officialktizotech/new-meeting"
            target="_blank"
            rel="noopener noreferrer"
            onClick={closeMob}
            className="mx-8 my-5"
          >
            book a call
          </StarButton>
        </div>
      )}
    </nav>
  )
}
