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
      date: "Nov 2024",
      title: "A Match Arranged",
      description:
        "In the presence of both families, Khushi and Anand were introduced — not by chance, but by intention. What began as a traditional meeting quickly turned into something quietly meaningful.",
      icon: <Users className="h-6 w-6 text-primary" />,
    },
    {
      date: "March 2024",
      title: "Growing Closer",
      description:
        "Through calls, conversations, and shared values, Khushi and Anand began discovering the beauty of a bond rooted in understanding — a friendship gently unfolding into something more.",
      icon: <Heart className="h-6 w-6 text-primary" />,
    },
    {
      date: "June 2024",
      title: "Gol Dhana",
      description:
        "Surrounded by loved ones, Khushi and Anand received blessings in an elegant engagement celebration — the beginning of a journey written with sincerity and excitement.",
      icon: <Diamond className="h-6 w-6 text-primary" />,
    },
    {
      date: "Jan 2025",
      title: "Ready Set Go",
      description:
        "Both the Families came together to decide the auspicious day for the wedding, the hardest task ever, but with excellent matureness, a date was decided.",
      icon: <Music className="h-6 w-6 text-primary" />,
    },
    {
      date: "January 23, 2026",
      title: "Wedding Ceremony",
      description:
        "Under the warmth of rituals and blessings, Khushi and Anand tied the knot — surrounded by everyone who shaped their lives. A day that marked the start of their forever.",
      icon: <Sparkles className="h-6 w-6 text-primary" />,
    },
    {
      date: "Forever Bonded — No Returns",
      title: "Happily Ever After",
      description:
        "This isn’t the end of a story — it’s just the beginning. With love, patience, and purpose, Khushi & Anand walk into a future hand in hand, heart with heart.",
      icon: <Calendar className="h-6 w-6 text-primary" />,
    },
  ]

  return (
    <section
      id="timeline"
      ref={ref}
      className="py-20 bg-paper relative overflow-hidden text-foreground font-serif"
    >
      <div className="absolute inset-0 bg-paper pointer-events-none"></div>

      <div className="container mx-auto px-4 relative z-10">
        <SectionTitle>Our Journey</SectionTitle>

        <div className="text-center max-w-2xl mx-auto mb-12 text-muted-foreground text-base sm:text-lg leading-relaxed">
          Every love story unfolds differently — some fast, some slow, some arranged.
          <br />
          <br />
          Khushi & Anand’s journey began with tradition and blossomed into something deeply
          romantic — a connection nurtured with intention, warmth, and grace.
        </div>

        <div className="max-w-4xl mx-auto relative">
          {/* Vertical Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-border z-0"></div>

          {timelineEvents.map((event, index) => {
            const isEven = index % 2 === 0

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className={`relative mb-16 z-10 ${isEven
                    ? "md:pr-10 md:text-right md:ml-auto md:mr-1/2"
                    : "md:pl-10 md:ml-1/2"
                  } md:w-1/2`}
              >
                {/* Date Badge */}
                <div
                  className={`flex ${isEven ? "md:justify-end" : ""} items-center mb-2`}
                >
                  <div className="bg-accent/10 px-3 py-1 rounded-full">
                    <span className="text-sm font-medium text-primary">
                      {event.date}
                    </span>
                  </div>
                </div>

                {/* Content Card */}
                <div
                  className={`bg-white p-5 rounded-lg border border-border ${isEven ? "md:mr-6" : "md:ml-6"
                    }`}
                >
                  <div className="flex items-center gap-2 mb-2">
                    {event.icon}
                    <h3 className="text-xl text-primary">{event.title}</h3>
                  </div>
                  <p className="text-muted-foreground">{event.description}</p>
                </div>

                {/* Center Pin (adjusted to avoid overlap) */}
                <div className="absolute top-3 left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full bg-white border-2 border-primary flex items-center justify-center z-20">
                  <div className="w-2 h-2 rounded-full bg-primary"></div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
