import Link from 'next/link'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-navy-d pt-[52px] pb-[32px] px-5 lg:px-8">
      <div className="max-w-[1140px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1.8fr_1fr_1fr_1fr] gap-[40px] pb-[40px] border-b border-white/10">
        <div>
          <div className="flex items-center gap-2 mb-[14px]">
            <svg width="26" height="26" viewBox="0 0 32 32" fill="none">
              <rect width="32" height="32" rx="8" fill="#2575FC" />
              <path d="M9 8v16M9 16l10-8M9 16l10 8" stroke="white" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M22 12l4 4-4 4" stroke="rgba(255,255,255,0.6)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <span className="font-sans font-bold text-[17px] text-white">KtizoTech</span>
          </div>
          <p className="font-sans text-[14px] text-white/45 leading-[1.7]">
            Creating and automating business processes one step at a time. Built for teams that want to work smarter without overhauling everything they already use.
          </p>
        </div>

        <div>
          <p className="font-sans text-[12px] font-bold text-white/35 tracking-[0.1em] uppercase mb-4">Services</p>
          <ul className="flex flex-col gap-[10px] list-none">
            <li><Link href="/#features" className="text-[14px] text-white/50 hover:text-white transition-colors">Cut Costs</Link></li>
            <li><Link href="/#features" className="text-[14px] text-white/50 hover:text-white transition-colors">Automate Workflows</Link></li>
            <li><Link href="/#features" className="text-[14px] text-white/50 hover:text-white transition-colors">Stay Secure</Link></li>
            <li><Link href="/#use-cases" className="text-[14px] text-white/50 hover:text-white transition-colors">Use Cases</Link></li>
          </ul>
        </div>

        <div>
          <p className="font-sans text-[12px] font-bold text-white/35 tracking-[0.1em] uppercase mb-4">Company</p>
          <ul className="flex flex-col gap-[10px] list-none">
            <li><Link href="/#process" className="text-[14px] text-white/50 hover:text-white transition-colors">How It Works</Link></li>
            <li><Link href="/#testimonials" className="text-[14px] text-white/50 hover:text-white transition-colors">Client Results</Link></li>
            <li><Link href="/#faq" className="text-[14px] text-white/50 hover:text-white transition-colors">FAQ</Link></li>
            <li><Link href="/#book" className="text-[14px] text-white/50 hover:text-white transition-colors">Book a Call</Link></li>
            <li><Link href="/case-studies" className="text-[14px] text-white/50 hover:text-white transition-colors">Case Studies</Link></li>
            <li><Link href="/contact" className="text-[14px] text-white/50 hover:text-white transition-colors">Contact</Link></li>
          </ul>
        </div>

        <div>
          <p className="font-sans text-[12px] font-bold text-white/35 tracking-[0.1em] uppercase mb-4">Contact</p>
          <ul className="flex flex-col gap-[10px] list-none">
            <li><a href="https://calendly.com/officialktizotech/new-meeting" target="_blank" rel="noopener noreferrer" className="text-[14px] text-white/50 hover:text-white transition-colors">Book on Calendly</a></li>
          </ul>
        </div>
      </div>

      <div className="max-w-[1140px] mx-auto mt-6 flex items-center justify-between flex-wrap gap-3">
        <p className="text-[13px] text-white/30">© {currentYear} KtizoTech — All rights reserved.</p>
        <p className="text-[13px] text-white/30">κτίζω · to create</p>
      </div>
    </footer>
  )
}
