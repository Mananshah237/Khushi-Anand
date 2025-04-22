"use client"

import { useInView } from "react-intersection-observer"
import { motion } from "framer-motion"
import SectionTitle from "./section-title"
import { Calendar, Heart, Coffee, Plane, BellRingIcon as Ring, Camera } from "lucide-react"

export default function Timeline() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const timelineEvents = [
    {
      date: "Summer 2020",
      title: "First Meeting",
      description:
        "We met at a mutual friend's wedding in Mumbai. Khushi was helping with decorations while Anand was the groom's childhood friend.",
      icon: <Heart className="h-6 w-6 text-gold" />,
    },
    {
      date: "October 2020",
      title: "First Date",
      description: "After weeks of calls, we finally had our first official date at a quaint café in Ahmedabad.",
      icon: <Coffee className="h-6 w-6 text-gold" />,
    },
    {
      date: "February 2021",
      title: "First Trip Together",
      description:
        "We took our first vacation together to Udaipur, exploring the city of lakes and making unforgettable memories.",
      icon: <Plane className="h-6 w-6 text-gold" />,
    },
    {
      date: "December 2022",
      title: "Moving In",
      description: "Khushi moved to Ahmedabad, and we began building our home together.",
      icon: <Calendar className="h-6 w-6 text-gold" />,
    },
    {
      date: "April 2025",
      title: "The Proposal",
      description:
        "During a surprise trip to Goa, Anand proposed at sunset on the beach with a ring that had been in his family for generations.",
      icon: <Ring className="h-6 w-6 text-gold" />,
    },
    {
      date: "June 2025",
      title: "Engagement",
      description: "We celebrated our engagement with a small ceremony surrounded by our closest family and friends.",
      icon: <Camera className="h-6 w-6 text-gold" />,
    },
  ]

  return (
    <section id="timeline" ref={ref} className="py-20 bg-blush/10 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('/floral-pattern.svg')] bg-repeat opacity-5"></div>

      <div className="container mx-auto px-4">
        <SectionTitle>Our Journey</SectionTitle>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Vertical line */}
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

                {/* Circle on timeline */}
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
