"use client"

import { ArrowUpRight, Calendar, Clock } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

const blogPosts = [
  {
    id: 1,
    category: "Akashic 101",
    title: "What Are the Akashic Records?",
    summary:
      "Discover what the Akashic Records truly are — the energetic archive of your soul's entire journey, and how they hold wisdom beyond time.",
    slug: "what-are-akashic-records",
    date: "Dec 15, 2024",
    readTime: "5 min read",
    image: "/images/akashic-reading.jpeg",
  },
  {
    id: 2,
    category: "Personal Journey",
    title: "How an Akashic Reading Changed My Life",
    summary:
      "A personal story of transformation through an Akashic session, uncovering deep healing, soul truths, and renewed purpose.",
    slug: "akashic-reading-changed-my-life",
    date: "Dec 10, 2024",
    readTime: "7 min read",
    image: "/images/inner-20child.jpeg",
  },
  {
    id: 3,
    category: "Readiness",
    title: "Signs You're Ready for an Akashic Reading",
    summary:
      "Are you feeling stuck or questioning your path? Here are clear signals that your soul is ready for the wisdom of the Records.",
    slug: "signs-ready-for-akashic-reading",
    date: "Dec 5, 2024",
    readTime: "4 min read",
    image: "/images/confidence-20communication.jpeg",
  },
  {
    id: 4,
    category: "Past Lives",
    title: "Past Life Memories vs. Imagination – How to Tell",
    summary:
      "Is that vivid dream a memory or fantasy? Learn how to distinguish true past-life impressions from imagination.",
    slug: "past-life-memories-vs-imagination",
    date: "Nov 28, 2024",
    readTime: "6 min read",
    image: "/images/past-20life-20regression.jpeg",
  },
]

export default function BlogSection() {
  return (
    <section className="beige-bg px-6 md:px-12 py-16 md:py-24 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-accent-gold/10 rounded-full blur-xl animate-float"></div>
        <div
          className="absolute bottom-20 right-10 w-24 h-24 bg-elegant-blue/20 rounded-full blur-lg animate-float"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute top-1/2 left-1/4 w-16 h-16 bg-accent-gold/5 rounded-full blur-md animate-float"
          style={{ animationDelay: "4s" }}
        ></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16 animate-fadeInUp">
          <div className="inline-block">
            <p className="text-sm md:text-base text-accent-gold uppercase tracking-wider font-semibold mb-4 animate-fadeInUp">
              Spiritual Insights
            </p>
            <h2
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-fadeInUp relative"
              style={{ animationDelay: "0.2s" }}
            >
              <span className="text-elegant-blue">Latest from the </span>
              <span className="text-accent-gold">Blog</span>
            </h2>
            <div
              className="w-24 h-1 bg-gradient-to-r from-transparent via-accent-gold to-transparent mx-auto animate-slideInLeft"
              style={{ animationDelay: "0.4s" }}
            ></div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {blogPosts.map((post, index) => (
            <Link key={post.id} href={`/blog/${post.slug}`}>
              <article
                className="group bg-white/70 backdrop-blur-md rounded-2xl overflow-hidden shadow-lg hover:shadow-accent-gold/20 transition-all duration-700 cursor-pointer hover:scale-105 border border-elegant-blue/20 hover:border-accent-gold/60 animate-fadeInUp hover-lift h-full flex flex-col"
                style={{ animationDelay: `${0.3 + index * 0.15}s` }}
              >
                {/* Image Container */}
                <div className="relative h-48 overflow-hidden flex-shrink-0">
                  <Image
                    src={post.image || "/placeholder.svg"}
                    alt={post.title}
                    width={400}
                    height={200}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-elegant-blue/80 via-transparent to-transparent"></div>

                  {/* Category Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="bg-accent-gold/90 text-elegant-blue px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wide">
                      {post.category}
                    </span>
                  </div>

                  {/* Arrow Icon */}
                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:scale-110">
                    <div className="bg-white/20 backdrop-blur-sm rounded-full p-2">
                      <ArrowUpRight className="w-4 h-4 text-elegant-blue" />
                    </div>
                  </div>
                </div>

                {/* Content Container */}
                <div className="p-6 space-y-4 flex flex-col flex-grow">
                  {/* Meta Information */}
                  <div className="flex items-center space-x-4 text-xs text-accent-gold/80">
                    <div className="flex items-center space-x-1">
                      <Calendar className="w-3 h-3" />
                      <span>{post.date}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="w-3 h-3" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl md:text-2xl font-bold text-elegant-blue group-hover:text-accent-gold transition-colors duration-300 leading-tight line-clamp-2">
                    {post.title}
                  </h3>

                  {/* Summary */}
                  <p className="text-sm text-elegant-blue/70 group-hover:text-elegant-blue/90 transition-colors duration-300 leading-relaxed line-clamp-3 flex-grow">
                    {post.summary}
                  </p>

                  {/* Read More Link */}
                  <div className="pt-2 flex items-center justify-between mt-auto">
                    <span className="text-sm font-semibold text-accent-gold group-hover:text-elegant-blue transition-colors duration-300 flex items-center space-x-2">
                      <span>Read Full Article</span>
                      <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                    </span>
                  </div>
                </div>
              </article>
            </Link>
          ))}
        </div>

        <div className="text-center mt-12 animate-fadeInUp" style={{ animationDelay: "0.8s" }}>
          <Link href="/journal">
            <button className="bg-elegant-blue text-warm-beige px-8 py-4 rounded-full font-semibold hover:bg-accent-gold hover:text-elegant-blue hover:shadow-lg hover:shadow-accent-gold/30 transition-all duration-300 hover:scale-105 btn-hover-effect">
              View All Articles
            </button>
          </Link>
        </div>
      </div>
    </section>
  )
}
