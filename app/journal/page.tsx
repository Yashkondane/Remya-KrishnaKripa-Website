"use client"

import { Libre_Baskerville } from "next/font/google"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"
import SimplePreloader from "../../components/simple-preloader"
import WhatsAppButton from "../../components/whatsapp-button"
import ScrollReveal from "../../components/scroll-reveal"

const libreBaskerville = Libre_Baskerville({
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
  display: "swap",
})

export default function JournalPage() {
  return (
    <>
      <SimplePreloader />
      <div className={`min-h-screen beige-bg text-elegant-blue ${libreBaskerville.className}`}>

        <main className="px-6 md:px-12 py-12 md:py-24">
          <ScrollReveal animation="fade">
            <section className="px-6 md:px-12 py-16 md:py-24">
              <div className="max-w-4xl mx-auto text-center">
                <p className="text-sm md:text-base text-accent-gold uppercase tracking-wider font-semibold mb-6">
                  My Blog
                </p>

                <h1 className="text-4xl md:text-5xl lg:text-6xl leading-tight mb-8 text-elegant-blue">Recent Writings</h1>

                <p className="text-lg md:text-xl leading-relaxed text-elegant-blue/80 max-w-2xl mx-auto">
                  Insights, wisdom, and guidance from my journey as a spiritual guide and coach. Explore articles on
                  Akashic Records, personal transformation, and soul-level healing.
                </p>
              </div>
            </section>
          </ScrollReveal>

          {/* Blog Grid */}
          <section className="px-6 md:px-12 pb-24">
            <div className="max-w-7xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                  {
                    title: "The Power of Vulnerability in Healing",
                    category: "Healing",
                    date: "Feb 14, 2026",
                    excerpt: "Why embracing our shadows is the key to unlocking our true light and potential.",
                    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/download%20%2816%29-Bq0ym2jz0FUwgvr4Y9rgEyxlX6Kkrz.png"
                  },
                  {
                    title: "Listening to the Whispers of Your Soul",
                    category: "Spiritual Growth",
                    date: "Feb 08, 2026",
                    excerpt: "Practical ways to quiet the mind and tune into the subtle guidance of your intuition.",
                    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/download%20%2816%29-Bq0ym2jz0FUwgvr4Y9rgEyxlX6Kkrz.png"
                  },
                  {
                    title: "Understanding Your Akashic Records",
                    category: "Akashic Records",
                    date: "Jan 28, 2026",
                    excerpt: "A beginner's guide to accessing the library of your soul and finding clarity.",
                    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/download%20%2816%29-Bq0ym2jz0FUwgvr4Y9rgEyxlX6Kkrz.png"
                  }
                ].map((post, i) => (
                  <ScrollReveal key={i} animation="fade" delay={i}>
                    <div className="group bg-white rounded-2xl overflow-hidden shadow-lg border border-elegant-blue/5 hover:shadow-xl transition-all duration-300">
                      <div className="relative aspect-video overflow-hidden">
                        <Image
                          src={post.image}
                          alt={post.title}
                          fill
                          className="object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-elegant-blue/10 group-hover:bg-transparent transition-colors duration-500" />
                      </div>
                      <div className="p-6 space-y-4">
                        <div className="flex items-center justify-between text-xs text-elegant-blue/60 uppercase tracking-widest font-medium">
                          <span className="text-accent-gold">{post.category}</span>
                          <span>{post.date}</span>
                        </div>
                        <h3 className="text-xl font-bold text-elegant-blue group-hover:text-accent-gold transition-colors duration-300">
                          {post.title}
                        </h3>
                        <p className="text-elegant-blue/70">
                          {post.excerpt}
                        </p>
                        <div className="pt-4">
                          <Link href="#" className="inline-flex items-center text-accent-gold font-medium hover:underline">
                            Read Article <ArrowRight className="w-4 h-4 ml-1" />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </ScrollReveal>
                ))}
              </div>

              {/* Pagination / Load More */}
              <div className="text-center mt-16 animate-fadeInUp">
                <Button className="bg-transparent border-2 border-elegant-blue text-elegant-blue hover:bg-elegant-blue hover:text-warm-beige px-8 py-3 rounded-full transition-all duration-300">
                  Load More Articles
                </Button>
              </div>
            </div>
          </section>

          {/* Newsletter */}
          <ScrollReveal animation="fade">
            <section className="px-6 md:px-12 pb-16 md:pb-24">
              <div className="max-w-4xl mx-auto bg-elegant-blue rounded-3xl p-8 md:p-12 text-center text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-accent-gold/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent-gold/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

                <div className="relative z-10 space-y-6">
                  <h2 className="text-2xl md:text-3xl font-bold text-accent-gold">Subscribe to Soul Wisdom</h2>
                  <p className="text-white/80 max-w-xl mx-auto">
                    Join our community to receive weekly insights, healing affirmations, and exclusive updates on workshops.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                    <Input placeholder="Your email address" className="bg-white/10 border-white/20 text-white placeholder:text-white/50 h-12 rounded-full focus:border-accent-gold" />
                    <Button className="bg-accent-gold text-elegant-blue hover:bg-accent-gold/90 w-full sm:w-auto px-8 h-12 rounded-full font-medium">
                      Subscribe
                    </Button>
                  </div>
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
