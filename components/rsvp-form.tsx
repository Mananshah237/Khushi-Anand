"use client"

import { useInView } from "react-intersection-observer"
import { motion } from "framer-motion"
import SectionTitle from "./section-title"

export default function RsvpForm() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="rsvp" ref={ref} className="py-20 bg-gradient-to-br from-ivory via-white to-blush relative overflow-hidden">
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
              We would be honored to have you celebrate with us!  
              Please take a moment to RSVP and let us know your plans.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-white rounded-lg shadow-lg p-8 border border-gold/20 relative overflow-hidden"
          >
           <form
  action="https://script.google.com/macros/s/AKfycbwHusN4LHRBAwShBNauXXX9roIjAC3-rBCdN-2LWQAHdlkWVa2HYzYlU13lAnAYP1w5pQ/exec"
  method="POST"
  className="space-y-6"
>
  <div>
    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
      Full Name
    </label>
    <input
      type="text"
      id="name"
      name="name"
      required
      className="w-full px-4 py-2 border border-gray-300 rounded-md"
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
      className="w-full px-4 py-2 border border-gray-300 rounded-md"
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
      className="w-full px-4 py-2 border border-gray-300 rounded-md"
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
      rows={3}
      className="w-full px-4 py-2 border border-gray-300 rounded-md"
      placeholder="Let us know if you have any dietary restrictions"
    ></textarea>
  </div>

  <div>
    <button
      type="submit"
      className="w-full bg-gold hover:bg-dark-gold text-white font-medium py-3 px-4 rounded-md transition-colors duration-300"
    >
      Submit RSVP
    </button>
  </div>
</form>

            {/* Decorative bubbles */}
            <div className="absolute top-0 right-0 w-32 h-32 -mt-8 -mr-8 bg-blush/10 rounded-full"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 -mb-6 -ml-6 bg-gold/5 rounded-full"></div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
