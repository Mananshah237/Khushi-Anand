"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"

export default function Hero() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })

  useEffect(() => {
    const calculateTimeLeft = () => {
      const weddingDate = new Date("January 23, 2026 00:00:00").getTime()
      const now = new Date().getTime()
      const difference = weddingDate - now

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        })
      }
    }

    calculateTimeLeft()
    const timer = setInterval(calculateTimeLeft, 1000)
    return () => clearInterval(timer)
  }, [])

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden bg-ivory text-foreground font-serif">
      <div className="absolute inset-0 z-0">
        <Image
          src="/heropic.jpg?height=1080&width=1920"
          alt="Wedding background"
          fill
          className="object-cover opacity-40 grayscale"
          priority
          style={{ objectPosition: "center 80%" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white/10 to-ivory/95"></div>

      </div>

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-6"
        >
          <h2 className="text-lg md:text-xl text-accent italic tracking-wide mb-2">23rd January 2026</h2>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-editorial text-primary mb-4">
            Khushi <span className="italic font-normal">&</span> Anand
          </h1>
          <p className="text-md md:text-xl text-muted-foreground italic">
            Join us in celebrating our journey of love
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="flex justify-center gap-4 md:gap-8 my-10"
        >
          {["Days", "Hours", "Minutes", "Seconds"].map((label, i) => {
            const value = [timeLeft.days, timeLeft.hours, timeLeft.minutes, timeLeft.seconds][i]
            return (
              <div key={label} className="flex flex-col items-center">
                <div className="w-16 md:w-20 h-16 md:h-20 flex items-center justify-center border border-border rounded-full bg-white/70">
                  <span className="text-2xl md:text-3xl text-primary">{value}</span>
                </div>
                <span className="text-xs md:text-sm mt-2 text-muted-foreground">{label}</span>
              </div>
            )
          })}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="mt-8"
        >
          <a
            href="#rsvp"
            className="inline-block bg-primary text-white font-medium py-3 px-8 rounded-full transition-all duration-300 border border-primary hover:bg-white hover:text-primary"
          >
            RSVP Now
          </a>
        </motion.div>
      </div>

      <div className="absolute bottom-8 left-0 right-0 flex justify-center animate-bounce-slow">
        <a href="#our-story" className="text-primary">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M12 5v14M5 12l7 7 7-7" />
          </svg>
        </a>
      </div>
    </section>
  )
}
