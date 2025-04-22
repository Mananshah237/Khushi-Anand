"use client"

import { useInView } from "react-intersection-observer"
import { motion } from "framer-motion"
import Image from "next/image"
import SectionTitle from "./section-title"

export default function OurStory() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="our-story" ref={ref} className="py-20 bg-ivory relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-white/50 to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-white/50 to-transparent"></div>
      <div className="absolute inset-0 bg-[url('/floral-overlay.svg')] bg-repeat opacity-10"></div>

      <div className="container mx-auto px-4">
        <SectionTitle>Our Story</SectionTitle>

        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
              transition={{ duration: 0.8 }}
              className="order-2 md:order-1"
            >
              <div className="prose prose-lg">
                <p className="text-gray-700 leading-relaxed">
                  Our story began in the summer of 2020, when fate brought us together at a mutual friend's wedding in
                  Mumbai. What started as casual conversations over wedding preparations blossomed into something
                  beautiful.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Despite the distance between us, we found ourselves drawn to each other's worlds. Through countless
                  video calls, surprise visits, and shared dreams, our love grew stronger with each passing day.
                </p>
                <p className="text-gray-700 leading-relaxed font-medium">
                  Now, after five years of cherishing each moment together, we're ready to begin our forever.
                </p>
                <div className="mt-6">
                  <div className="inline-block bg-gold/10 px-4 py-2 rounded-lg border border-gold/20">
                    <p className="font-dancing-script text-2xl text-dark-gold m-0">Khushi & Anand</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="order-1 md:order-2"
            >
              <div className="relative">
                <div className="absolute -inset-4 border border-gold/20 rounded-lg transform rotate-3"></div>
                <div className="absolute -inset-4 border border-gold/20 rounded-lg transform -rotate-2"></div>
                <div className="relative overflow-hidden rounded-lg shadow-xl">
                  <Image
                    src="/placeholder.svg?height=600&width=800"
                    alt="Khushi and Anand together"
                    width={800}
                    height={600}
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
