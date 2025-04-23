"use client"

import { useInView } from "react-intersection-observer"
import { motion } from "framer-motion"
import SectionTitle from "./section-title"
import { Calendar, Heart, Users, Music, Diamond, Sparkles } from "lucide-react"

export default function Timeline() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const timelineEvents = [
    {
      date: "Jan 2024",
      title: "A Match Arranged",
      description:
        "In the presence of both families, Khushi and Anand were introduced — not by chance, but by intention. What began as a traditional meeting quickly turned into something quietly meaningful.",
      icon: <Users className="h-6 w-6 text-gold" />,
    },
    {
      date: "March 2024",
      title: "Growing Closer",
      description:
        "Through calls, conversations, and shared values, Khushi and Anand began discovering the beauty of a bond rooted in understanding — a friendship gently unfolding into something more.",
      icon: <Heart className="h-6 w-6 text-gold" />,
    },
    {
      date: "June 2024",
      title: "Gol Dhana",
      description:
        "Surrounded by loved ones, Khushi and Anand received blessings in an elegant engagement celebration — the beginning of a journey written with sincerity and excitement.",
      icon: <Diamond className="h-6 w-6 text-gold" />,
    },
    {
      date: "Jan 2025",
      title: "Ready Set Go",
      description:
        "Both the Families came together to decide the auspicious day for the wedding, the hardest task ever, but with excellent matureness, A date was decided.",
      icon: <Music className="h-6 w-6 text-gold" />,
    },
    {
      date: "January 23, 2026",
      title: "Wedding Ceremony",
      description:
        "Under the warmth of rituals and blessings, Khushi and Anand tied the knot — surrounded by everyone who shaped their lives. A day that marked the start of their forever.",
      icon: <Sparkles className="h-6 w-6 text-gold" />,
    },
    {
      date: "Forever Bonded - No returns",
      title: "Happily ever After",
      description:
        "This isn’t the end of a story — it’s just the beginning. With love, patience, and purpose, Khushi & Anand walk into a future hand in hand, heart with heart.",
      icon: <Calendar className="h-6 w-6 text-gold" />,
    },
  ]

  return (
    <section id="timeline" ref={ref} className="py-20 bg-blush/10 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('/floral-pattern.svg')] bg-repeat opacity-5"></div>

      <div className="container mx-auto px-4">
        <SectionTitle>Our Journey</SectionTitle>

        <div className="text-center max-w-2xl mx-auto mb-12 text-gray-700 text-base sm:text-lg leading-relaxed">
          Every love story unfolds differently — some fast, some slow, some arranged.  
          <br /><br />
          Khushi & Anand’s journey began with tradition and blossomed into something deeply romantic — a connection nurtured with intention, warmth, and grace.
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gold/30"></div>

            {timelineEvents.map((event, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className={`relative mb-12 ${index % 2 === 0 ? "md:pr-10 md:text-right md:ml-auto md:mr-1/2" : "md:pl-10 md:ml-1/2"} md:w-1/2 z-10`}
              >
                <div className={`flex ${index % 2 === 0 ? "md:justify-end" : ""} items-center mb-2`}>
                  <div className="bg-gold/10 px-3 py-1 rounded-full">
                    <span className="text-sm font-medium text-dark-gold">{event.date}</span>
                  </div>
                </div>

                <div
                  className={`bg-white p-5 rounded-lg shadow-md border border-gold/20 ${index % 2 === 0 ? "md:mr-6" : "md:ml-6"}`}
                >
                  <div className="flex items-center gap-2 mb-2">
                    {event.icon}
                    <h3 className="font-serif text-xl text-dark-gold">{event.title}</h3>
                  </div>
                  <p className="text-gray-700">{event.description}</p>
                </div>

                <div className="absolute top-2 left-1/2 transform -translate-x-1/2 md:translate-y-1 w-6 h-6 rounded-full bg-white border-2 border-gold flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-gold"></div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
