"use client"

import { useInView } from "react-intersection-observer"
import { motion } from "framer-motion"
import Image from "next/image"
import SectionTitle from "./section-title"
import { Calendar, MapPin, Clock } from "lucide-react"

export default function Events() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="events" ref={ref} className="py-20 bg-blush/10 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('/floral-pattern.svg')] bg-repeat opacity-5"></div>

      <div className="container mx-auto px-4">
        <SectionTitle>Wedding Events</SectionTitle>

        <div className="max-w-5xl mx-auto">
          <div className="grid gap-16">
            {/* Sangeet Event */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="relative">
                  <div className="absolute -inset-4 bg-gold/5 rounded-lg"></div>
                  <div className="relative overflow-hidden rounded-lg shadow-lg">
                    <Image
                      src="/placeholder.svg?height=400&width=600"
                      alt="Sangeet Celebration"
                      width={600}
                      height={400}
                      className="w-full h-auto object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <h3 className="font-serif text-3xl text-white mb-2">Sangeet</h3>
                      <div className="flex items-center gap-2 text-white/90 mb-1">
                        <Calendar className="h-4 w-4 text-gold" />
                        <span>January 21st, 2026</span>
                      </div>
                      <div className="flex items-center gap-2 text-white/90 mb-1">
                        <Clock className="h-4 w-4 text-gold" />
                        <span>7:00 PM onwards</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col">
                  <div className="bg-white p-6 rounded-lg shadow-md border border-gold/20">
                    <h4 className="font-serif text-2xl text-dark-gold mb-4">The Celebration</h4>
                    <p className="text-gray-700 mb-6">
                      Join us for a night of music, dance, and celebration as we kick off our wedding festivities with
                      traditional Sangeet ceremonies.
                    </p>

                    <div className="flex items-center gap-4 mb-6">
                      <MapPin className="h-5 w-5 text-gold" />
                      <div>
                        <h5 className="font-medium text-gray-800">Taj Vivanta</h5>
                        <p className="text-gray-600">Ahmedabad</p>
                      </div>
                    </div>

                    <div className="bg-gold/10 p-4 rounded-lg">
                      <h5 className="font-medium text-dark-gold mb-2">Dress Code</h5>
                      <p className="text-gray-700">Pastel Indian Ethnic</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Wedding Ceremony Event */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="order-2 md:order-1 flex flex-col">
                  <div className="bg-white p-6 rounded-lg shadow-md border border-gold/20">
                    <h4 className="font-serif text-2xl text-dark-gold mb-4">The Ceremony</h4>
                    <p className="text-gray-700 mb-6">
                      We invite you to witness our union as we exchange vows and begin our journey together in a
                      traditional wedding ceremony.
                    </p>

                    <div className="flex items-center gap-4 mb-6">
                      <MapPin className="h-5 w-5 text-gold" />
                      <div>
                        <h5 className="font-medium text-gray-800">Taj Vivanta</h5>
                        <p className="text-gray-600">Ahmedabad</p>
                      </div>
                    </div>

                    <div className="bg-gold/10 p-4 rounded-lg">
                      <h5 className="font-medium text-dark-gold mb-2">Dress Code</h5>
                      <p className="text-gray-700">Traditional Red & Gold</p>
                    </div>
                  </div>
                </div>

                <div className="order-1 md:order-2 relative">
                  <div className="absolute -inset-4 bg-gold/5 rounded-lg"></div>
                  <div className="relative overflow-hidden rounded-lg shadow-lg">
                    <Image
                      src="/placeholder.svg?height=400&width=600"
                      alt="Wedding Ceremony"
                      width={600}
                      height={400}
                      className="w-full h-auto object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <h3 className="font-serif text-3xl text-white mb-2">Wedding Ceremony</h3>
                      <div className="flex items-center gap-2 text-white/90 mb-1">
                        <Calendar className="h-4 w-4 text-gold" />
                        <span>January 23rd, 2026</span>
                      </div>
                      <div className="flex items-center gap-2 text-white/90 mb-1">
                        <Clock className="h-4 w-4 text-gold" />
                        <span>6:00 PM onwards</span>
                      </div>
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
