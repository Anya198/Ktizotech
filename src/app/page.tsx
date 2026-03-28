import Hero from '@/components/home/Hero'
import LogoStrip from '@/components/home/LogoStrip'
import AiStats from '@/components/home/AiStats'
import Features from '@/components/home/Features'
import UseCases from '@/components/home/UseCases'
import Process from '@/components/home/Process'
import Testimonials from '@/components/home/Testimonials'

import Faq from '@/components/home/Faq'
import CtaBand from '@/components/home/CtaBand'

export default function Home() {
  return (
    <main>
      <Hero />
      <LogoStrip />
      <AiStats />
      <Features />
      <UseCases />
      <Process />
      <Testimonials />

      <Faq />
      <CtaBand />
    </main>
  )
}
