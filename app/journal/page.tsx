"use client"

import { Libre_Baskerville } from "next/font/google"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Footer from "../../components/footer"
import SimplePreloader from "../../components/simple-preloader"
import ScrollReveal from "../../components/scroll-reveal"

const libreBaskerville = Libre_Baskerville({
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
  display: "swap",
})

const blogPosts = [
  {
    id: 1,
    category: "Akashic 101",
    title: "What Are the Akashic Records?",
    excerpt:
      "Discover what the Akashic Records truly are — the energetic archive of your soul's entire journey, and how they hold wisdom beyond time.",
    slug: "what-are-akashic-records",
  },
  {
    id: 2,
    category: "Personal Journey",
    title: "How an Akashic Reading Changed My Life",
    excerpt:
      "A personal story of transformation through an Akashic session, uncovering deep healing, soul truths, and renewed purpose.",
    slug: "akashic-reading-changed-my-life",
  },
  {
    id: 3,
    category: "Readiness",
    title: "Signs You're Ready for an Akashic Reading",
    excerpt:
      "Are you feeling stuck or questioning your path? Here are clear signals that your soul is ready for the wisdom of the Records.",
    slug: "signs-ready-for-akashic-reading",
  },
  {
    id: 4,
    category: "Past Lives",
    title: "Past Life Memories vs. Imagination – How to Tell",
    excerpt:
      "Is that vivid dream a memory or fantasy? Learn how to distinguish true past-life impressions from imagination.",
    slug: "past-life-memories-vs-imagination",
  },
  {
    id: 5,
    category: "Spirituality",
    title: "The Sacred Art of Soul Healing",
    excerpt:
      "Explore the profound practice of soul healing and how it can transform deep-seated patterns and emotional wounds.",
    slug: "sacred-art-soul-healing",
  },
  {
    id: 6,
    category: "Growth",
    title: "Navigating Your Spiritual Awakening",
    excerpt:
      "A guide to understanding and embracing the often challenging but transformative process of spiritual awakening.",
    slug: "navigating-spiritual-awakening",
  },
  {
    id: 7,
    category: "Energy Work",
    title: "Clearing Energetic Blockages for Success",
    excerpt:
      "Learn how energetic blockages can impact your professional life and discover techniques to clear them for greater success.",
    slug: "clearing-energetic-blockages",
  },
  {
    id: 8,
    category: "Meditation",
    title: "Daily Practices for Spiritual Connection",
    excerpt:
      "Simple yet powerful daily practices that can deepen your spiritual connection and enhance your intuitive abilities.",
    slug: "daily-spiritual-practices",
  },
  {
    id: 9,
    category: "Career",
    title: "Finding Your Soul's Purpose in Work",
    excerpt:
      "Discover how to align your career with your soul's purpose and create meaningful work that fulfills your deepest calling.",
    slug: "souls-purpose-in-work",
  },
]

export default function JournalPage() {
  return (
    <>
      <SimplePreloader />
      <div className={`min-h-screen beige-bg text-elegant-blue ${libreBaskerville.className}`}>
        {/* Navigation */}
        <nav className="flex items-center justify-between px-6 py-4 md:px-12 md:py-6 bg-elegant-blue/10 backdrop-blur-sm">
          <Link href="/" className="text-xl md:text-2xl text-accent-gold">
            AkashicReading.
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            <Link href="/about" className="hover:text-accent-gold transition-colors">
              About
            </Link>
            <Link href="/services" className="hover:text-accent-gold transition-colors">
              Services
            </Link>
            <Link href="/my-book" className="hover:text-accent-gold transition-colors">
              My Book
            </Link>
            <Link href="/journal" className="text-accent-gold font-semibold transition-colors">
              Journal
            </Link>
            <Link href="/contact" className="hover:text-accent-gold transition-colors">
              Contact
            </Link>
          </div>

          <Button className="bg-elegant-blue text-warm-beige hover:bg-deep-blue px-6 py-2 rounded-lg shadow-md transition-all duration-200">
            Book Now
          </Button>
        </nav>

        {/* Header Section */}
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
        <ScrollReveal animation="slide-up" delay={200}>
          <section className="bg-white px-6 md:px-12 py-16 md:py-24">
            <div className="max-w-7xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {blogPosts.map((post, index) => (
                  <Link key={post.id} href={`/blog/${post.slug}`}>
                    <article className="group bg-white backdrop-blur-sm p-8 rounded-xl hover:bg-elegant-blue/5 transition-all duration-500 cursor-pointer hover:shadow-2xl hover:shadow-accent-gold/20 hover:scale-105 border border-accent-gold/20 relative overflow-hidden">
                      <div className="absolute -top-4 -right-4 w-16 h-16 bg-accent-gold/10 rounded-full blur-xl group-hover:bg-accent-gold/20 transition-all duration-500"></div>
                      <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-elegant-blue/10 rounded-full blur-lg group-hover:bg-elegant-blue/20 transition-all duration-500"></div>

                      <div className="space-y-6 relative z-10">
                        <div className="w-full h-48 bg-gradient-to-br from-accent-gold/20 to-elegant-blue/20 rounded-lg mb-6 flex items-center justify-center group-hover:from-accent-gold/30 group-hover:to-elegant-blue/30 transition-all duration-500">
                          <div className="text-accent-gold/60 group-hover:text-accent-gold/80 transition-colors duration-500">
                            <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={1.5}
                                d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                              />
                            </svg>
                          </div>
                        </div>

                        {/* Category and Date */}
                        <div className="flex items-center justify-between">
                          <span className="text-sm font-semibold text-accent-gold group-hover:text-elegant-blue transition-colors duration-500 uppercase tracking-wider">
                            {post.category}
                          </span>
                          <div className="text-xs text-elegant-blue/50 group-hover:text-elegant-blue/70 transition-colors duration-500">
                            Dec {15 + index}, 2024 • 5 min read
                          </div>
                        </div>

                        {/* Title */}
                        <h3 className="text-xl font-bold text-elegant-blue group-hover:text-accent-gold transition-colors duration-500 leading-tight">
                          {post.title}
                        </h3>

                        {/* Excerpt */}
                        <p className="text-base leading-relaxed text-elegant-blue/70 group-hover:text-elegant-blue transition-colors duration-500">
                          {post.excerpt}
                        </p>

                        <div className="pt-2 flex items-center justify-between">
                          <span className="text-sm font-semibold text-accent-gold group-hover:text-elegant-blue transition-colors duration-500">
                            Read More
                          </span>
                          <div className="w-6 h-6 flex items-center justify-center">
                            <svg
                              className="w-4 h-4 text-accent-gold group-hover:text-elegant-blue group-hover:translate-x-1 transition-all duration-500"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M17 8l4 4m0 0l-4 4m4-4H3"
                              />
                            </svg>
                          </div>
                        </div>
                      </div>
                    </article>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        </ScrollReveal>

        {/* Newsletter Section */}
        <ScrollReveal animation="scale" delay={300}>
          <section className="beige-bg px-6 md:px-12 py-16 md:py-24">
            <div className="max-w-4xl mx-auto text-center bg-white/80 backdrop-blur-sm rounded-2xl p-8">
              <h2 className="text-3xl md:text-4xl font-bold text-accent-gold mb-6">Stay Connected</h2>

              <p className="text-lg leading-relaxed text-elegant-blue/80 mb-8 max-w-2xl mx-auto">
                Subscribe to receive the latest insights, spiritual guidance, and updates on new articles directly in
                your inbox.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="flex-1 px-4 py-3 rounded-lg border border-accent-gold/20 bg-white/60 backdrop-blur-sm text-elegant-blue placeholder:text-elegant-blue/50 focus:outline-none focus:ring-2 focus:ring-accent-gold focus:border-transparent"
                />
                <Button className="bg-accent-gold text-elegant-blue hover:bg-accent-gold/90 px-6 py-3 rounded-lg font-semibold transition-all duration-300">
                  Subscribe
                </Button>
              </div>
            </div>
          </section>
        </ScrollReveal>

        {/* Footer */}
        <Footer />

        {/* Mobile Navigation Menu */}
        <div className="md:hidden fixed bottom-6 left-6 right-6 z-[1000]">
          <div className="bg-white/90 backdrop-blur-sm rounded-lg p-4 shadow-lg border border-accent-gold/20">
            <div className="flex justify-around">
              <Link href="/about" className="text-sm text-elegant-blue hover:text-accent-gold transition-colors">
                About
              </Link>
              <Link href="/services" className="text-sm text-elegant-blue hover:text-accent-gold transition-colors">
                Services
              </Link>
              <Link href="/my-book" className="text-sm text-elegant-blue hover:text-accent-gold transition-colors">
                Book
              </Link>
              <Link href="/journal" className="text-sm text-accent-gold font-semibold transition-colors">
                Journal
              </Link>
              <Link href="/contact" className="text-sm text-elegant-blue hover:text-accent-gold transition-colors">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
