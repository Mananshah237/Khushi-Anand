import Hero from "@/components/hero"
import OurStory from "@/components/our-story"
import Events from "@/components/events"
import VenueAndStay from "@/components/venue-and-stay"
import Timeline from "@/components/timeline"
import RsvpForm from "@/components/rsvp-form"
import Footer from "@/components/footer"
import FloatingNav from '@/components/floating-nav'


export default function Home() {
  return (
    <main className="min-h-screen bg-ivory">
      <FloatingNav />
      <Hero />
      <OurStory />
      <Events />
      <VenueAndStay />
      <Timeline />
      <RsvpForm />
      <Footer />
    </main>
  )
}
