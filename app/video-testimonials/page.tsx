"use client"

import { Libre_Baskerville } from "next/font/google"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import SimplePreloader from "@/components/simple-preloader"
import WhatsAppButton from "@/components/whatsapp-button"
import ScrollReveal from "@/components/scroll-reveal"
import { Play } from "lucide-react"

const libreBaskerville = Libre_Baskerville({
    subsets: ["latin"],
    weight: ["400", "700"],
    style: ["normal", "italic"],
    display: "swap",
})

const videoTestimonials = [
    {
        id: 1,
        title: "Transformation through Akashic Records",
        client: "Sarah Johnson",
        role: "Entrepreneur",
        thumbnail: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=800",
        videoUrl: "https://www.youtube.com/embed/z06U280X99U", // Peaceful Meditation Placeholder
    },
    {
        id: 2,
        title: "Healing Inner Child Wounds",
        client: "Michael Chen",
        role: "Artist",
        thumbnail: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=800",
        videoUrl: "https://www.youtube.com/embed/5qap5aO4i9A", // Nature Background Placeholder
    },
    {
        id: 3,
        title: "Career Breakthrough & Clarity",
        client: "Emma Williams",
        role: "Corporate Leader",
        thumbnail: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=800",
        videoUrl: "https://www.youtube.com/embed/7V2GzYnhhuQ", // Transformation Story Placeholder
    },
    {
        id: 4,
        title: "A Soul-Level Shift",
        client: "David Miller",
        role: "Practitioner",
        thumbnail: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=800",
        videoUrl: "https://www.youtube.com/embed/lFCIsLjPr94", // Spiritual Guidance Placeholder
    },
]

export default function VideoTestimonialsPage() {
    return (
        <>
            <SimplePreloader />
            <div className={`min-h-screen beige-bg text-elegant-blue ${libreBaskerville.className}`}>
                <main className="px-6 md:px-12 py-12 md:py-24">
                    <ScrollReveal animation="fade">
                        <header className="max-w-4xl mx-auto text-center mb-16 md:mb-24">
                            <span className="text-accent-gold font-bold tracking-widest uppercase text-sm mb-4 block">
                                Voices of Transformation
                            </span>
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-elegant-blue leading-tight mb-6">
                                Video <span className="text-accent-gold">Testimonials</span>
                            </h1>
                            <p className="text-lg md:text-xl text-elegant-blue/80 leading-relaxed">
                                Hear directly from those who have experienced profound shifts and spiritual awakening through our sacred sessions.
                            </p>
                        </header>
                    </ScrollReveal>

                    <section className="max-w-7xl mx-auto">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
                            {videoTestimonials.map((testimonial, index) => (
                                <ScrollReveal key={testimonial.id} animation="fade" delay={index * 100}>
                                    <div className="group bg-white rounded-2xl overflow-hidden shadow-xl border border-elegant-blue/5 hover:border-accent-gold/30 transition-all duration-500 hover:-translate-y-2">
                                        <div className="relative aspect-video bg-elegant-blue/10">
                                            <iframe
                                                className="w-full h-full object-cover"
                                                src={testimonial.videoUrl}
                                                title={testimonial.title}
                                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                                allowFullScreen
                                            ></iframe>
                                        </div>
                                        <div className="p-8 space-y-4">
                                            <div className="flex items-center justify-between">
                                                <h3 className="text-xl md:text-2xl font-bold text-elegant-blue group-hover:text-accent-gold transition-colors duration-300">
                                                    {testimonial.title}
                                                </h3>
                                            </div>
                                            <div className="flex items-center gap-4 border-t border-elegant-blue/10 pt-4">
                                                <div className="space-y-1">
                                                    <p className="font-bold text-elegant-blue">{testimonial.client}</p>
                                                    <p className="text-sm text-elegant-blue/60 uppercase tracking-wider">{testimonial.role}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </ScrollReveal>
                            ))}
                        </div>
                    </section>

                    <ScrollReveal animation="fade" delay={400}>
                        <section className="mt-24 text-center bg-elegant-blue rounded-3xl p-12 md:p-20 text-warm-beige relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-accent-gold/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
                            <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent-gold/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

                            <div className="relative z-10 max-w-2xl mx-auto space-y-8">
                                <h2 className="text-3xl md:text-4xl font-bold text-accent-gold">Ready to Start Your Journey?</h2>
                                <p className="text-lg text-warm-beige/80">
                                    Join hundreds of others who have transformed their lives. Book your session today and discover your soul's blueprint.
                                </p>
                                <div className="flex flex-col sm:flex-row justify-center gap-4">
                                    <Link href="/contact">
                                        <Button className="bg-accent-gold text-elegant-blue hover:bg-accent-gold/90 px-8 py-6 text-lg rounded-full w-full sm:w-auto shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                                            Book a Session
                                        </Button>
                                    </Link>
                                    <Link href="/services">
                                        <Button className="bg-transparent border-2 border-warm-beige text-warm-beige hover:bg-warm-beige hover:text-elegant-blue px-8 py-6 text-lg rounded-full w-full sm:w-auto transition-all duration-300">
                                            Explore Services
                                        </Button>
                                    </Link>
                                </div>
                            </div>
                        </section>
                    </ScrollReveal>
                </main>
                <WhatsAppButton />
            </div>
        </>
    )
}
