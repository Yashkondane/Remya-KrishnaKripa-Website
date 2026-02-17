"use client"

import { Libre_Baskerville } from "next/font/google"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import { CheckCircle2, Star } from "lucide-react"
import SimplePreloader from "../../components/simple-preloader"
import WhatsAppButton from "../../components/whatsapp-button"
import ScrollReveal from "../../components/scroll-reveal"

const libreBaskerville = Libre_Baskerville({
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
  display: "swap",
})

export default function MyBookPage() {
  return (
    <>
      <SimplePreloader />
      <div className={`min-h-screen beige-bg text-elegant-blue ${libreBaskerville.className}`}>

        <main className="px-6 md:px-12 py-12 md:py-24">
          {/* Hero Section */}
          <ScrollReveal animation="fade">
            <section>
              <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                  {/* Left Column - Book Cover */}
                  <div className="order-1 flex justify-center lg:justify-end">
                    <div className="relative w-64 md:w-80 lg:w-96 aspect-[2/3] group perspective-1000">
                      <div className="relative w-full h-full preserve-3d transition-transform duration-700 group-hover:rotate-y-12 shadow-2xl rounded-tr-xl rounded-br-xl">
                        <Image
                          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/download%20%2816%29-Bq0ym2jz0FUwgvr4Y9rgEyxlX6Kkrz.png"
                          alt="Book Cover"
                          fill
                          className="object-cover rounded-tr-xl rounded-br-xl"
                        />
                        {/* Book spine effect */}
                        <div className="absolute left-0 top-0 bottom-0 w-4 bg-gradient-to-r from-gray-800 to-gray-600 rounded-l-sm" />
                      </div>
                      {/* Shadow */}
                      <div className="absolute -bottom-8 left-4 right-4 h-4 bg-black/20 blur-xl rounded-[100%]" />
                    </div>
                  </div>

                  {/* Right Column - Text */}
                  <div className="order-2 space-y-8">
                    <div>
                      <span className="text-accent-gold font-bold tracking-widest uppercase text-sm mb-2 block animate-fadeInUp">
                        Best Seller
                      </span>
                      <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-elegant-blue leading-tight mb-4 animate-fadeInUp stagger-1">
                        Awakening the <span className="text-accent-gold">Soul's Voice</span>
                      </h1>
                      <p className="text-lg md:text-xl text-elegant-blue/80 leading-relaxed animate-fadeInUp stagger-2">
                        A guide to rediscovering your inner wisdom and living an authentic life aligned with your highest purpose.
                      </p>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4 animate-fadeInUp stagger-3">
                      <Button className="bg-accent-gold text-elegant-blue hover:bg-accent-gold/90 px-8 py-6 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 btn-hover-effect">
                        Buy on Amazon
                      </Button>
                      <Button className="bg-transparent border-2 border-elegant-blue text-elegant-blue hover:bg-elegant-blue hover:text-warm-beige px-8 py-6 text-lg rounded-full transition-all duration-300">
                        Read Sample Chapter
                      </Button>
                    </div>

                    <div className="grid grid-cols-3 gap-6 pt-8 border-t border-elegant-blue/10 animate-fadeInUp stagger-4">
                      {[
                        { label: "Pages", value: "248" },
                        { label: "Rating", value: "4.9/5" },
                        { label: "Readers", value: "10k+" }
                      ].map((stat, i) => (
                        <div key={i} className="text-center">
                          <div className="text-2xl font-bold text-elegant-blue">{stat.value}</div>
                          <div className="text-sm text-elegant-blue/60 uppercase tracking-wider">{stat.label}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </ScrollReveal>

          {/* About the Book */}
          <ScrollReveal animation="slide-left" delay={200}>
            <section className="bg-white/50 backdrop-blur-sm px-6 md:px-12 py-16 md:py-24 mt-12 md:mt-24 rounded-3xl">
              <div className="max-w-4xl mx-auto space-y-8 text-center md:text-left">
                <h2 className="text-3xl md:text-4xl font-bold text-elegant-blue text-center">Inside the Book</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                  <div className="space-y-6">
                    <p className="text-lg text-elegant-blue/80 leading-relaxed">
                      This book is not just a collection of words; it is a journey. It invites you to explore the depths of your being, challenging the beliefs that hold you back and illuminating the path to true freedom.
                    </p>
                    <p className="text-lg text-elegant-blue/80 leading-relaxed">
                      Drawing from ancient wisdom and modern psychology, "Awakening the Soul's Voice" offers practical tools and transformative practices to help you navigate life's challenges with grace and resilience.
                    </p>
                  </div>
                  <div className="space-y-4">
                    <h3 className="text-xl font-bold text-elegant-blue mb-4">What You'll Discover:</h3>
                    <ul className="space-y-3">
                      {[
                        "How to silence the inner critic and listen to your intuition",
                        "Practical techniques for emotional healing and release",
                        "The art of setting boundaries and honoring your energy",
                        "Manifesting abundance through alignment, not just effort"
                      ].map((item, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <CheckCircle2 className="w-6 h-6 text-accent-gold flex-shrink-0" />
                          <span className="text-elegant-blue/80">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </section>
          </ScrollReveal>

          {/* Reviews */}
          <ScrollReveal animation="fade" delay={300}>
            <section className="px-6 md:px-12 py-16 md:py-24">
              <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold text-elegant-blue text-center mb-16">What Readers Are Saying</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {[
                    {
                      text: "This book changed my life. I finally feel understood and empowered to make changes.",
                      author: "Sarah J.",
                      role: "Artist"
                    },
                    {
                      text: "A beautiful masterpiece of wisdom. Every page holds a gem that speaks directly to the soul.",
                      author: "Michael T.",
                      role: "Entrepreneur"
                    },
                    {
                      text: "Practical, profound, and deeply moving. A must-read for anyone on a spiritual path.",
                      author: "Elena R.",
                      role: "Yoga Teacher"
                    }
                  ].map((review, i) => (
                    <div key={i} className="bg-white p-8 rounded-2xl shadow-lg border border-elegant-blue/5 hover:border-accent-gold/30 transition-all duration-300 hover:-translate-y-1">
                      <div className="flex gap-1 mb-4">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <Star key={star} className="w-4 h-4 text-accent-gold fill-current" />
                        ))}
                      </div>
                      <p className="text-elegant-blue/80 italic mb-6">"{review.text}"</p>
                      <div>
                        <div className="font-bold text-elegant-blue">{review.author}</div>
                        <div className="text-sm text-elegant-blue/50">{review.role}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          </ScrollReveal>

          {/* CTA Section */}
          <ScrollReveal animation="scale" delay={200}>
            <section className="bg-accent-gold px-6 md:px-12 py-16 md:py-24">
              <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl lg:text-5xl leading-tight text-elegant-blue mb-6 font-bold">
                  Be the First to Experience This Wisdom
                </h2>

                <p className="text-lg md:text-xl leading-relaxed text-elegant-blue/90 mb-8 max-w-2xl mx-auto">
                  Join our exclusive list to receive updates on the book's progress and be notified the moment it becomes
                  available.
                </p>

                <div className="space-y-4">
                  <Button className="bg-elegant-blue text-warm-beige hover:bg-deep-blue px-8 py-4 text-lg font-semibold rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-105 btn-hover-effect">
                    Join the Waitlist
                  </Button>

                  <p className="text-sm text-elegant-blue/70">Plus receive a free preview chapter when you sign up</p>
                </div>
              </div>
            </section>
          </ScrollReveal>

          <WhatsAppButton />
        </main>

      </div>
    </>
  )
}
