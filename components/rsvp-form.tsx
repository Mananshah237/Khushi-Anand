"use client"

import type React from "react"

import { useState } from "react"
import { useInView } from "react-intersection-observer"
import { motion } from "framer-motion"
import { Check } from "lucide-react"
import SectionTitle from "./section-title"

export default function RsvpForm() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const [formState, setFormState] = useState({
    name: "",
    attending: "yes",
    guests: "1",
    dietary: "",
  })

  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormState((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the form data to your backend
    console.log("Form submitted:", formState)

    // Show success message
    setIsSubmitted(true)

    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false)
      setFormState({
        name: "",
        attending: "yes",
        guests: "1",
        dietary: "",
      })
    }, 3000)
  }

  return (
    <section id="rsvp" ref={ref} className="py-20 bg-ivory relative overflow-hidden">
      <div className="container mx-auto px-4">
        <SectionTitle>RSVP</SectionTitle>

        <div className="max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-8"
          >
            <p className="text-gray-700">
              Please let us know if you'll be joining us on our special day. We look forward to celebrating with you!
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-white rounded-lg shadow-lg p-8 border border-gold/20 relative overflow-hidden"
          >
            {isSubmitted ? (
              <div className="flex flex-col items-center justify-center py-10">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                  <Check className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="font-serif text-2xl text-dark-gold mb-2">Thank You!</h3>
                <p className="text-gray-600 text-center">
                  Your RSVP has been submitted successfully. We're excited to celebrate with you!
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formState.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold/50"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label htmlFor="attending" className="block text-sm font-medium text-gray-700 mb-1">
                    Will You Attend?
                  </label>
                  <select
                    id="attending"
                    name="attending"
                    value={formState.attending}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold/50"
                  >
                    <option value="yes">Yes, I will attend</option>
                    <option value="no">No, I cannot attend</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="guests" className="block text-sm font-medium text-gray-700 mb-1">
                    Number of Guests
                  </label>
                  <select
                    id="guests"
                    name="guests"
                    value={formState.guests}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold/50"
                  >
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="dietary" className="block text-sm font-medium text-gray-700 mb-1">
                    Dietary Restrictions
                  </label>
                  <textarea
                    id="dietary"
                    name="dietary"
                    value={formState.dietary}
                    onChange={handleChange}
                    rows={3}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold/50"
                    placeholder="Please let us know if you have any dietary restrictions"
                  ></textarea>
                </div>

                <div>
                  <button
                    type="submit"
                    className="w-full bg-gold hover:bg-dark-gold text-white font-medium py-3 px-4 rounded-md shadow-md transition-colors duration-300"
                  >
                    Submit RSVP
                  </button>
                </div>
              </form>
            )}

            <div className="absolute top-0 right-0 w-32 h-32 -mt-8 -mr-8 bg-blush/10 rounded-full"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 -mb-6 -ml-6 bg-gold/5 rounded-full"></div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
