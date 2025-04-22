"use client"

import type React from "react"

import { useInView } from "react-intersection-observer"
import { motion } from "framer-motion"

export default function SectionTitle({ children }: { children: React.ReactNode }) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.8 }}
      className="text-center mb-12 relative"
    >
      <h2 className="font-serif text-3xl md:text-4xl text-dark-gold inline-block relative">
        {children}
        <span className="absolute -bottom-3 left-0 right-0 h-0.5 bg-gold/30"></span>
      </h2>
      <div className="absolute left-1/2 -translate-x-1/2 -bottom-6 w-24 h-4 bg-[url('/floral-divider.svg')] bg-contain bg-no-repeat bg-center opacity-70"></div>
    </motion.div>
  )
}
