'use client'

import { motion, useReducedMotion } from 'framer-motion'

type RevealWrapperProps = {
  children: React.ReactNode
  delay?: number
  className?: string
}

export default function RevealWrapper({ children, delay = 0, className }: RevealWrapperProps) {
  const shouldReduceMotion = useReducedMotion()

  return (
    <motion.div
      initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.65, ease: 'easeOut', delay }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
