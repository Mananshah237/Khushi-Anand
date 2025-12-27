"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export default function UsUnscriptedPeek() {
    return (
        <section className="py-16 bg-[#fbf7f1] border-y border-gold/10 relative overflow-hidden">
            <div className="container mx-auto px-4 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="inline-block bg-white border border-gold/20 px-3 py-1 rounded-full text-xs font-serif text-gold mb-4 uppercase tracking-wider">
                        Behind the Scenes
                    </div>
                    <h2 className="font-serif text-3xl md:text-4xl text-neutral-800 mb-6">
                        Us, Unscripted
                    </h2>
                    <p className="text-neutral-600 max-w-lg mx-auto mb-8 text-lg font-light leading-relaxed">
                        From our weirdest quirks to our shared chaos — see the side of us that doesn’t make it to the formal invites.
                    </p>
                    <Link
                        href="/us-unscripted"
                        className="inline-flex items-center gap-2 text-dark-gold border-b border-dark-gold/30 pb-0.5 hover:border-dark-gold transition-all group"
                    >
                        <span className="font-serif italic text-lg">Read the real stories</span>
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                </motion.div>
            </div>
        </section>
    )
}
