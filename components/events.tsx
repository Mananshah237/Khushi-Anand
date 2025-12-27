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
    <section id="events" ref={ref} className="py-20 bg-ivory text-foreground">
      <div className="container mx-auto px-4">
        <SectionTitle>Wedding Events</SectionTitle>

        <div className="max-w-5xl mx-auto grid gap-24">

          {/* Sangeet */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8 }}
            className="grid md:grid-cols-2 gap-10"
          >
            <div className="relative aspect-[4/3] overflow-hidden rounded border border-border">
              <Image
                src="/Sangeet.jpg"
                alt="Sangeet Dress Code"
                fill
                className="object-cover grayscale-[25%] contrast-[90%]"
                style={{ objectPosition: "center 78%" }}
              />
            </div>

            <div className="space-y-4 font-serif">
              <h3 className="text-3xl font-bold">Sangeet</h3>
              <div className="flex items-center gap-2 text-sm">
                <Calendar className="h-4 w-4" />
                <span>January 22nd, 2026</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Clock className="h-4 w-4" />
                <span>6:00 PM onwards</span>
              </div>
              <div className="text-lg leading-relaxed">
                Join us for a night of music, dance, and celebration as we kick off our wedding festivities with a joyous Sangeet.
              </div>
              <div>
                <h4 className="text-base font-semibold">Venue</h4>
                <p>9 Brothers, Ahmedabad</p>
              </div>
              <div className="border-t border-border pt-2">
                <h4 className="text-base font-semibold">Dress Code</h4>
                <p>Formal Western for Men & Women</p>
              </div>
            </div>
          </motion.div>

          {/* Wedding */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid md:grid-cols-2 gap-10"
          >
            <div className="order-2 md:order-1 space-y-4 font-serif">
              <h3 className="text-3xl font-bold">Wedding Ceremony</h3>
              <div className="flex items-center gap-2 text-sm">
                <Calendar className="h-4 w-4" />
                <span>January 23rd, 2026</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Clock className="h-4 w-4" />
                <span>4:00 PM onwards</span>
              </div>
              <div className="text-lg leading-relaxed">
                We invite you to witness our union as we exchange vows in a traditional wedding ceremony surrounded by love and blessings.
              </div>
              <div>
                <h4 className="text-base font-semibold">Venue</h4>
                <p>Gravity Greens, Ahmedabad</p>
              </div>
              <div className="border-t border-border pt-2">
                <h4 className="text-base font-semibold">Dress Code</h4>
                <p>Pastel Traditional Indian</p>
              </div>
            </div>

            <div className="order-1 md:order-2 relative aspect-[4/3] overflow-hidden rounded border border-border">
              <Image
                src="/Wedding.jpg"
                alt="Wedding Dress Code"
                fill
                className="object-cover grayscale-[25%] contrast-[90%]"
                style={{ objectPosition: "center 78%" }}
              />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
