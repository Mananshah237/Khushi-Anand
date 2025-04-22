"use client"

import { useInView } from "react-intersection-observer"
import { motion } from "framer-motion"
import Image from "next/image"
import SectionTitle from "./section-title"

export default function Gallery() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const images = [
    { src: "/placeholder.svg?height=400&width=300", width: 300, height: 400 },
    { src: "/placeholder.svg?height=300&width=400", width: 400, height: 300 },
    { src: "/placeholder.svg?height=400&width=300", width: 300, height: 400 },
    { src: "/placeholder.svg?height=300&width=400", width: 400, height: 300 },
    { src: "/placeholder.svg?height=400&width=300", width: 300, height: 400 },
    { src: "/placeholder.svg?height=300&width=400", width: 400, height: 300 },
  ]

  return (
    <section id="gallery" ref={ref} className="py-20 bg-blush/10 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('/floral-pattern.svg')] bg-repeat opacity-5"></div>

      <div className="container mx-auto px-4">
        <SectionTitle>Gallery</SectionTitle>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {images.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative group"
              >
                <div className="overflow-hidden rounded-lg shadow-md">
                  <div className="relative aspect-[3/4] sm:aspect-auto sm:h-64 lg:h-72">
                    <Image
                      src={image.src || "/placeholder.svg"}
                      alt={`Gallery image ${index + 1}`}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                </div>
                <div className="absolute inset-0 bg-gold/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg flex items-center justify-center">
                  <div className="text-white text-center p-4">
                    <span className="font-serif text-lg">Our Memories</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
