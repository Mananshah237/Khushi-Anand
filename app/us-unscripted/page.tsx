"use client"

import { motion } from "framer-motion"
import { ArrowRight, Heart, Star, Coffee, Zap, Camera, MapPin, Music } from "lucide-react"
import Link from "next/link"
import { useState } from "react"
import FloatingNav from "@/components/floating-nav"
import Footer from "@/components/footer"

// --- Content Configuration ---
const CONTENT = {
    hero: {
        title: "Us, Unscripted",
        subtitle: "The little things that make us… us.",
        tag: "fun facts • quirks • chaos (controlled)",
    },
    editorNote: "Proceed with caution: mild teasing and high affection ahead.",
    profiles: {
        khushi: {
            name: "Khushi",
            sub: "in her own way",
            quirks: [
                "Will notice the one crooked frame in a room of 200.",
                "Believes snacks are a love language.",
                "Will eat anything as long as it's spicy.",
                "Professional over-thinker (and proud of it).",
                "Her playlist mood swings: 90s Bollywood -> Techno -> Ghazals.",
                "Says 'five more minutes' (means 45).",
            ],
        },
        anand: {
            name: "Anand",
            sub: "in his own way",
            quirks: [
                "Says 'just 5 minutes' and then plans the entire wedding timeline.",
                "Can sleep through an earthquake but wakes up if the WiFi drops.",
                "Can have a 2 hour long breakfast.",
                "Uses excel sheets for fun.",
                "Never bored of Paneer Tikka Masala( instead falls in love with it)",
                "Firm believer that 'we'll figure it out' is a strategy.",
            ],
        },
    },
    comparison: {
        same: [
            "family-first",
            "food-driven decisions",
            "soft spot for old memories",
            "sunset chasers",
            "competitive about silly games",
        ],
        different: [
            "planner vs go-with-the-flow",
            "early bird vs night owl",
            "Badminton vs Pickleball",
            "spicy vs sweet",
            "Netflix vs Youtube",
        ],
    },
    thisOrThat: [
        { label: "Tea vs Coffee", khushi: "Tea", anand: "Coffee", icon: Coffee },
        { label: "Emotional vs Logical", khushi: "Emotional", anand: "Logical", icon: MapPin },
        { label: "Sweet vs Spicy", khushi: "Spicy", anand: "Sweet", icon: Zap },
        { label: "Morning vs Night", khushi: "Night", anand: "Morning", icon: Star },
        { label: "Photos vs Moment", khushi: "Photos", anand: "Moment", icon: Camera },
        { label: "Loud vs Quiet", khushi: "Loud", anand: "Quiet", icon: Music },
        { label: "Driving vs Passenger", khushi: "Passenger", anand: "Driving", icon: ArrowRight },
        { label: "Millenial vs Genz", khushi: "Genz", anand: "Millenial", icon: Heart },
    ],
    timeline: [
        { title: "First meeting", desc: "polite smiles & nervousness" },
        { title: "First inside joke", desc: "unlocked level 1 friendship" },
        { title: "Realization", desc: "wait, we're actually best friends" },
        { title: "The 'Yes'", desc: "no hesitation, just certainty" },
        { title: "Now", desc: "planning a forever together" },
    ],
    closing: {
        text: "We are different in the ways that matter, and the same in the ways that count. Here’s to a lifetime of figuring it out, one snack at a time.",
    },
}

export default function UsUnscripted() {
    return (
        <main className="min-h-screen bg-[#fbf7f1] text-neutral-800 font-sans selection:bg-gold/20">
            <FloatingNav />
            {/* Subtle Grain Overlay */}
            <div className="fixed inset-0 pointer-events-none opacity-[0.03] z-50 bg-[url('/noise.png')] mix-blend-multiply"></div>

            {/* Hero Section */}
            <section className="relative pt-32 pb-16 px-4 text-center overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-white to-transparent"></div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="relative z-10 max-w-4xl mx-auto"
                >
                    <div className="inline-block bg-gold/10 text-dark-gold px-4 py-1.5 rounded-full text-sm font-medium tracking-wide mb-6 border border-gold/20">
                        {CONTENT.hero.tag}
                    </div>
                    <h1 className="font-serif text-5xl md:text-7xl mb-6 text-neutral-900 tracking-tight">
                        {CONTENT.hero.title}
                    </h1>
                    <p className="text-xl md:text-2xl text-neutral-600 font-light max-w-2xl mx-auto">
                        {CONTENT.hero.subtitle}
                    </p>
                </motion.div>
            </section>

            {/* Editor's Note */}
            <div className="container mx-auto px-4 mb-16">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="max-w-xl mx-auto bg-white border border-dashed border-neutral-300 p-6 rounded-lg text-center relative"
                >
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#fbf7f1] px-3 text-sm font-serif text-neutral-500 italic">
                        Editor’s Note
                    </div>
                    <p className="font-serif italic text-neutral-700">{CONTENT.editorNote}</p>
                </motion.div>
            </div>

            {/* Profiles Section */}
            <section className="container mx-auto px-4 mb-24">
                <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                    <ProfileCard profile={CONTENT.profiles.khushi} delay={0.1} />
                    <ProfileCard profile={CONTENT.profiles.anand} delay={0.2} />
                </div>
            </section>

            {/* Similarities vs Differences */}
            <section className="bg-white py-20 border-y border-neutral-200 mb-24">
                <div className="container mx-auto px-4">
                    <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
                        {/* Same */}
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <h3 className="font-serif text-3xl mb-8 text-center md:text-left text-neutral-800">
                                Where we’re the <span className="italic text-dark-gold">same</span>
                            </h3>
                            <div className="flex flex-wrap gap-3 justify-center md:justify-start">
                                {CONTENT.comparison.same.map((item, i) => (
                                    <Chip key={i} text={item} variant="gold" />
                                ))}
                            </div>
                        </motion.div>

                        {/* Different */}
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <h3 className="font-serif text-3xl mb-8 text-center md:text-left text-neutral-800">
                                Where we’re perfectly <span className="italic text-neutral-500">different</span>
                            </h3>
                            <div className="flex flex-wrap gap-3 justify-center md:justify-start">
                                {CONTENT.comparison.different.map((item, i) => (
                                    <Chip key={i} text={item} variant="neutral" />
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Quickfire Widget */}
            <section className="container mx-auto px-4 mb-24">
                <div className="text-center mb-12">
                    <h2 className="font-serif text-4xl mb-4">Quickfire: This or That</h2>
                    <p className="text-neutral-500">Click to reveal who chose what!</p>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
                    {CONTENT.thisOrThat.map((item, i) => (
                        <FlipCard key={i} item={item} index={i} />
                    ))}
                </div>
            </section>

            {/* Chaotic Neutral Timeline */}
            <section className="container mx-auto px-4 mb-24">
                <h2 className="font-serif text-3xl text-center mb-12">Our Chaotic Neutral Timeline</h2>
                <div className="max-w-2xl mx-auto relative border-l border-neutral-300 ml-4 md:ml-auto">
                    {CONTENT.timeline.map((event, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="mb-10 pl-8 relative"
                        >
                            <div className="absolute -left-[5px] top-2 w-2.5 h-2.5 rounded-full bg-gold ring-4 ring-[#fbf7f1]"></div>
                            <h4 className="font-serif text-xl text-neutral-800">{event.title}</h4>
                            <p className="text-neutral-600 italic">{event.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Closing & CTA */}
            <section className="container mx-auto px-4 pb-24 text-center">
                <div className="max-w-2xl mx-auto mb-12">
                    <p className="font-serif text-2xl italic leading-relaxed text-neutral-700">
                        “{CONTENT.closing.text}”
                    </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                    <Link href="/#events" className="bg-neutral-900 text-white px-8 py-3 rounded-full font-medium hover:bg-neutral-700 transition w-full sm:w-auto">
                        See Events
                    </Link>
                    <Link href="/#rsvp" className="bg-gold text-white px-8 py-3 rounded-full font-medium hover:bg-dark-gold transition w-full sm:w-auto">
                        RSVP
                    </Link>
                    <Link href="/" className="text-neutral-600 hover:text-neutral-900 px-8 py-3 font-medium transition w-full sm:w-auto">
                        Back to Home
                    </Link>
                </div>
            </section>

            <Footer />
        </main>
    )
}

// --- Subcomponents ---

function ProfileCard({ profile, delay }: { profile: any, delay: number }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay }}
            className="bg-white p-8 rounded-2xl border border-neutral-200 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden"
        >
            <div className="absolute top-0 right-0 w-24 h-24 bg-neutral-50 rounded-bl-full -mr-4 -mt-4 z-0"></div>

            <div className="relative z-10">
                <h2 className="font-serif text-4xl mb-1 text-neutral-800">{profile.name}</h2>
                <p className="text-neutral-500 italic mb-6 border-b border-neutral-100 pb-4 inline-block">{profile.sub}</p>

                <ul className="space-y-3">
                    {profile.quirks.map((quirk: string, i: number) => (
                        <li key={i} className="flex items-start gap-3 text-neutral-700 group">
                            <span className="text-gold mt-1.5 opacity-60 group-hover:opacity-100 transition">•</span>
                            <span className="leading-relaxed">{quirk}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </motion.div>
    )
}

function Chip({ text, variant }: { text: string, variant: 'gold' | 'neutral' }) {
    const bgClass = variant === 'gold' ? 'bg-gold/10 text-dark-gold border-gold/20' : 'bg-neutral-100 text-neutral-600 border-neutral-200';

    return (
        <span className={`px-4 py-2 rounded-full text-sm font-medium border ${bgClass} hover:scale-105 transition-transform cursor-default`}>
            {text}
        </span>
    )
}

function FlipCard({ item, index }: { item: any, index: number }) {
    const [flipped, setFlipped] = useState(false);
    const Icon = item.icon;

    return (
        <div
            className="h-32 perspective-1000 cursor-pointer"
            onClick={() => setFlipped(!flipped)}
        >
            <motion.div
                className="w-full h-full relative preserve-3d transition-all duration-500"
                animate={{ rotateY: flipped ? 180 : 0 }}
            >
                {/* Front */}
                <div className="absolute w-full h-full backface-hidden bg-white border border-neutral-200 rounded-xl shadow-sm flex flex-col items-center justify-center p-4 hover:border-gold/50 transition-colors">
                    <Icon className="w-6 h-6 text-neutral-400 mb-2" />
                    <span className="font-serif font-medium text-neutral-800 text-center">{item.label}</span>
                    <span className="text-[10px] uppercase tracking-widest text-neutral-400 mt-2">Tap to reveal</span>
                </div>

                {/* Back */}
                <div className="absolute w-full h-full backface-hidden bg-neutral-900 text-white rounded-xl shadow-md flex flex-col items-center justify-center p-4 rotate-y-180">
                    <div className="grid grid-cols-2 w-full text-center gap-2">
                        <div className="flex flex-col">
                            <span className="text-[10px] text-neutral-400 uppercase">Khushi</span>
                            <span className="font-serif text-gold">{item.khushi}</span>
                        </div>
                        <div className="flex flex-col border-l border-neutral-700">
                            <span className="text-[10px] text-neutral-400 uppercase">Anand</span>
                            <span className="font-serif text-gold">{item.anand}</span>
                        </div>
                    </div>
                </div>
            </motion.div>
        </div>
    )
}
