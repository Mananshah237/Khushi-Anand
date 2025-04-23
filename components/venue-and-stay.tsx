"use client"

import { useInView } from "react-intersection-observer"
import { motion } from "framer-motion"
import Image from "next/image"
import SectionTitle from "./section-title"
import { MapPin, Bus, Phone } from "lucide-react"

export default function VenueAndStay() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="venue" ref={ref} className="py-20 bg-ivory relative overflow-hidden">
      {/* Floral overlay background */}
      <div className="absolute inset-0 bg-[url('/floral-overlay.svg')] bg-repeat opacity-10"></div>

      <div className="container mx-auto px-4">
        <SectionTitle>Venue & Accommodations</SectionTitle>

        <div className="max-w-6xl mx-auto">
          <div className="relative">
            {/* Intro Text */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12 max-w-3xl mx-auto px-2"
            >
              <p className="text-gray-700 leading-relaxed text-base sm:text-lg">
                All wedding events will take place at the luxurious Taj Vivanta in Ahmedabad.
                We've arranged accommodations for our guests with shuttle service to all events.
              </p>
            </motion.div>

            {/* Image + Cards */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="absolute -inset-4 border border-gold/10 rounded-xl"></div>
              <div className="relative overflow-hidden rounded-xl shadow-xl h-auto md:h-96">
                <Image
                  src="/placeholder.svg?height=800&width=1600"
                  alt="Taj Vivanta Ahmedabad"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>

                {/* Cards Content */}
                <div className="relative md:absolute bottom-0 left-0 right-0 p-6 sm:p-8 text-white">
                  <div className="flex flex-col gap-4 md:grid md:grid-cols-3">
                    {/* Card 1 */}
                    <div className="bg-white/90 md:bg-white/10 text-gray-800 md:text-white backdrop-blur-sm p-4 rounded-lg border border-gold/20 shadow-md">
                      <div className="flex items-center gap-2 mb-2">
                        <MapPin className="h-5 w-5 text-gold" />
                        <h4 className="font-serif text-lg">Location</h4>
                      </div>
                      <p className="text-sm leading-relaxed">
                        Taj Vivanta, Sindhubhavan Marg, Off SG Highway, Ahmedabad, Gujarat 380058
                      </p>
                    </div>

                    {/* Card 2 */}
                    <div className="bg-white/90 md:bg-white/10 text-gray-800 md:text-white backdrop-blur-sm p-4 rounded-lg border border-gold/20 shadow-md">
                      <div className="flex items-center gap-2 mb-2">
                        <Bus className="h-5 w-5 text-gold" />
                        <h4 className="font-serif text-lg">Transportation</h4>
                      </div>
                      <p className="text-sm leading-relaxed">
                        Shuttles will be arranged from the hotel to all event venues. Schedule provided upon check-in.
                      </p>
                    </div>

                    {/* Card 3 */}
                    <div className="bg-white/90 md:bg-white/10 text-gray-800 md:text-white backdrop-blur-sm p-4 rounded-lg border border-gold/20 shadow-md">
                      <div className="flex items-center gap-2 mb-2">
                        <Phone className="h-5 w-5 text-gold" />
                        <h4 className="font-serif text-lg">Contact</h4>
                      </div>
                      <p className="text-sm leading-relaxed">
                        For accommodation queries, please contact our wedding coordinator at +91 98765 43210
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
