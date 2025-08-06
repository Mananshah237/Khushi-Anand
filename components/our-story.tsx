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
     <div className="absolute inset-0 bg-paper pointer-events-none"></div>

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
              <p className="text-gray-700 leading-relaxed text-base sm:text-lg">
  In a world full of swipes and DMs, theirs is a story written the old-fashioned way — not by chance, but by choice.  
  <br /><br />
  Khushi and Anand met through their families, introduced not by algorithms, but by well-intentioned elders who just knew. What began as a polite conversation over chai slowly turned into something deeper — an unspoken comfort, an effortless laughter, a sense of “this feels right.”
  <br /><br />
  What makes their story romantic isn’t how they met — it’s how they chose to stay. With every call, every shared smile, and every plan for the future, they discovered a bond built not on coincidence, but commitment.
  <br /><br />
  Two hearts, two families, and one beautiful beginning. This is not a love-at-first-sight story. This is a love-that-grew story. And they wouldn’t have it any other way.
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
                    src="/placeholder.jpg?height=600&width=800"
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
