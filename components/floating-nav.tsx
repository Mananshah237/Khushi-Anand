'use client'

import { useEffect, useState } from 'react'
import { Heart } from 'lucide-react'

export default function FloatingNav() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 100)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const sections = [
    { id: 'our-story', label: 'Our Story' },
    { id: 'events', label: 'Events' },
    { id: 'venue', label: 'Venue' },
    { id: 'timeline', label: 'Timeline' },
    { id: 'rsvp', label: 'RSVP' },
  ]

  return (
    <>
      {/* Desktop Floating Nav */}
      <nav className="fixed top-6 right-6 z-50 hidden md:flex flex-col gap-3 items-end">
        {sections.map(({ id, label }) => (
          <a
            key={id}
            href={`#${id}`}
            className="bg-white/90 hover:bg-gold text-dark-gold hover:text-white px-4 py-2 rounded-full shadow-lg text-sm font-medium transition-colors duration-300"
          >
            {label}
          </a>
        ))}
      </nav>

      {/* Mobile Floating Heart FAB */}
      <div className="md:hidden fixed bottom-6 right-6 z-50">
        <details className="group relative">
          <summary className="list-none bg-gold text-white p-4 rounded-full shadow-lg cursor-pointer flex items-center justify-center">
            <Heart className="h-6 w-6" />
          </summary>
          <div className="absolute bottom-16 right-0 bg-white shadow-lg rounded-xl border border-gold/30 p-3 flex flex-col gap-2 text-sm w-40">
            {sections.map(({ id, label }) => (
              <a
                key={id}
                href={`#${id}`}
                className="hover:text-gold transition-colors duration-200 text-dark-gold"
              >
                {label}
              </a>
            ))}
          </div>
        </details>
      </div>

      {/* Scroll to Top */}
      {visible && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-6 left-6 z-50 bg-gold text-white p-3 rounded-full shadow-lg hover:bg-dark-gold transition"
          aria-label="Scroll to top"
        >
          ↑
        </button>
      )}
    </>
  )
}
