"use client"

import { useInView } from "react-intersection-observer"
import { motion } from "framer-motion"
import { Mail, Instagram } from "lucide-react"

export default function Footer() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <footer ref={ref} className="py-12 bg-blush/20 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('/floral-pattern.svg')] bg-repeat opacity-5"></div>

      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="font-serif text-3xl text-dark-gold mb-6">Khushi & Anand</h2>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
            <a
              href="mailto:khushiandanand2026@gmail.com"
              className="flex items-center gap-2 text-gray-700 hover:text-gold transition-colors duration-300"
            >
              <Mail className="h-5 w-5" />
              <span>khushiandanand2026@gmail.com</span>
            </a>

            <span className="hidden sm:inline text-gray-400">|</span>

            <a
              href="https://instagram.com/khushiandanand2026"
              className="flex items-center gap-2 text-gray-700 hover:text-gold transition-colors duration-300"
            >
              <Instagram className="h-5 w-5" />
              <span>@anandxkhushi</span>
            </a>
          </div>

          <div className="text-sm text-gray-600">
            <p>&copy; 2026 Khushi & Anand Wedding</p>
          </div>
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-16 bg-[url('/floral-footer.svg')] bg-repeat-x bg-bottom opacity-30"></div>
    </footer>
  )
}
