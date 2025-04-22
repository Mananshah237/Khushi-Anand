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
      <div className="absolute inset-0 bg-[url('/floral-overlay.svg')] bg-repeat opacity-10"></div>

      <div className="container mx-auto px-4">
        <SectionTitle>Venue & Accommodations</SectionTitle>

        <div className="max-w-6xl mx-auto">
          <div className="relative">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12 max-w-3xl mx-auto"
            >
              <p className="text-gray-700 leading-relaxed text-lg">
                All wedding events will take place at the luxurious Taj Vivanta in Ahmedabad. We've arranged
                accommodations for our guests with shuttle service to all events.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="absolute -inset-4 border border-gold/10 rounded-xl"></div>
              <div className="relative overflow-hidden rounded-xl shadow-xl h-96">
                <Image
                  src="/placeholder.svg?height=800&width=1600"
                  alt="Taj Vivanta Ahmedabad"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>

                <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg border border-white/20">
                      <div className="flex items-center gap-2 mb-2">
                        <MapPin className="h-5 w-5 text-gold" />
                        <h4 className="font-serif text-xl">Location</h4>
                      </div>
                      <p className="text-white/90">
                        Taj Vivanta, Sindhubhavan Marg, Off SG Highway, Ahmedabad, Gujarat 380058
                      </p>
                    </div>

                    <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg border border-white/20">
                      <div className="flex items-center gap-2 mb-2">
                        <Bus className="h-5 w-5 text-gold" />
                        <h4 className="font-serif text-xl">Transportation</h4>
                      </div>
                      <p className="text-white/90">
                        Shuttles will be arranged from the hotel to all event venues. Schedule provided upon check-in.
                      </p>
                    </div>

                    <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg border border-white/20">
                      <div className="flex items-center gap-2 mb-2">
                        <Phone className="h-5 w-5 text-gold" />
                        <h4 className="font-serif text-xl">Contact</h4>
                      </div>
                      <p className="text-white/90">
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
