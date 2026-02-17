"use client"

import { Libre_Baskerville } from "next/font/google"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"
import Footer from "@/components/footer"
import SimplePreloader from "@/components/simple-preloader"
import WhatsAppButton from "@/components/whatsapp-button"
import ScrollReveal from "@/components/scroll-reveal"
import { ArrowRight, Heart, Sparkles, Brain, TrendingUp, Shield } from "lucide-react"

const libreBaskerville = Libre_Baskerville({
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
  display: "swap",
})

const services = [
  {
    id: "01",
    title: "Akashic Record Reading",
    description:
      "Access your soul's eternal records to understand your life purpose, past experiences, and spiritual contracts. Gain clarity on recurring patterns and unlock your divine blueprint.",
    image: "/images/akashic-reading.jpeg",
    link: "/akashic-record-reading",
    icon: Sparkles,
    tagline: "Unlock Your Soul's Blueprint",
  },
  {
    id: "02",
    title: "Past Life Regression",
    description:
      "Journey into your past lives to heal karmic patterns, understand soul contracts, and release deep-rooted fears. Discover the wisdom your soul carries across lifetimes.",
    image: "/images/past-20life-20regression.jpeg",
    link: "/past-life-regression",
    icon: Brain,
    tagline: "Heal Across Lifetimes",
  },
  {
    id: "03",
    title: "Inner Child Healing",
    description:
      "Reconnect with your wounded inner child to heal childhood trauma, break emotional patterns, and reclaim your authentic self. Experience profound emotional liberation.",
    image: "/images/inner-20child.jpeg",
    link: "/inner-child-healing",
    icon: Heart,
    tagline: "Embrace Your True Self",
  },
  {
    id: "04",
    title: "Confident Communication",
    description:
      "Break free from communication blocks rooted in inner child wounds. Learn to speak your truth with confidence, set boundaries, and express yourself authentically in all relationships.",
    image: "/images/confidence-20communication.jpeg",
    link: "/confident-communication",
    icon: Shield,
    tagline: "Speak Your Truth Boldly",
  },
  {
    id: "05",
    title: "Career Accelerator Mentorship",
    description:
      "Transform your career through soul-aligned coaching. Address the 14 inner child patterns that block success and step into leadership with confidence and clarity.",
    image: "/images/carrer-20accelerator.jpeg",
    link: "/career-accelerator",
    icon: TrendingUp,
    tagline: "Lead with Authenticity",
  },
]

export default function ServicesPage() {
  return (
    <>
      <SimplePreloader />
      <div className={`min-h-screen beige-bg text-elegant-blue ${libreBaskerville.className}`}>
        {/* Navigation */}
        <nav className="flex items-center justify-between px-6 py-4 md:px-12 md:py-6 bg-white/60 backdrop-blur-sm animate-fadeInDown border-b border-elegant-blue/10">
          <Link
            href="/"
            className="text-xl md:text-2xl text-elegant-blue font-bold hover:text-accent-gold transition-colors duration-300 animate-pulse-slow"
          >
            AkashicReading.
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            <Link
              href="/about"
              className="text-elegant-blue hover:text-accent-gold transition-all duration-300 hover:scale-105"
            >
              About
            </Link>
            <Link
              href="/my-book"
              className="text-elegant-blue hover:text-accent-gold transition-all duration-300 hover:scale-105"
            >
              My Book
            </Link>
            <Link
              href="/journal"
              className="text-elegant-blue hover:text-accent-gold transition-all duration-300 hover:scale-105"
            >
              Journal
            </Link>
            <Link
              href="/contact"
              className="text-elegant-blue hover:text-accent-gold transition-all duration-300 hover:scale-105"
            >
              Contact
            </Link>
          </div>

          <Button className="bg-elegant-blue text-warm-beige hover:bg-deep-blue px-6 py-2 rounded-lg shadow-md transition-all duration-300 hover:scale-105 btn-hover-effect">
            Book Now
          </Button>
        </nav>

        {/* Hero Section */}
        <ScrollReveal animation="fade">
          <section className="px-6 md:px-12 py-16 md:py-24">
            <div className="max-w-7xl mx-auto text-center">
              <div className="space-y-6 max-w-3xl mx-auto">
                <p className="text-lg md:text-xl text-accent-gold animate-fadeInUp">
                  Transformational Healing Services
                </p>

                <h1 className="text-4xl md:text-5xl lg:text-6xl leading-tight text-elegant-blue animate-fadeInUp">
                  Journey to Your <span className="text-accent-gold text-glow">Authentic Self</span>
                </h1>

                <p className="text-lg md:text-xl leading-relaxed text-elegant-blue/80 animate-fadeInUp">
                  Explore soul-aligned healing modalities designed to help you break free from limiting patterns, heal
                  deep wounds, and step into your power.
                </p>
              </div>
            </div>
          </section>
        </ScrollReveal>

        {/* Services Grid */}
        <section className="px-6 md:px-12 py-8 md:py-16">
          <div className="max-w-7xl mx-auto">
            <div className="space-y-12">
              {services.map((service, index) => {
                const Icon = service.icon
                return (
                  <ScrollReveal key={service.id} animation="slide-up" delay={index * 100}>
                    <Link href={service.link}>
                      <div
                        className={`group bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border-2 border-elegant-blue/10 hover:border-accent-gold/50 ${
                          index % 2 === 0 ? "" : ""
                        }`}
                      >
                        <div
                          className={`grid grid-cols-1 ${service.comingSoon ? "lg:grid-cols-1" : "lg:grid-cols-2"} gap-0`}
                        >
                          {/* Image Section */}
                          {!service.comingSoon && (
                            <div className={`relative h-72 lg:h-auto ${index % 2 === 0 ? "lg:order-1" : "lg:order-2"}`}>
                              <Image
                                src={service.image || "/placeholder.svg"}
                                alt={service.title}
                                fill
                                className="object-cover group-hover:scale-105 transition-transform duration-700"
                              />
                              <div className="absolute inset-0 bg-gradient-to-t from-elegant-blue/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                            </div>
                          )}

                          {/* Content Section */}
                          <div
                            className={`p-8 md:p-12 flex flex-col justify-center ${
                              index % 2 === 0 ? "lg:order-2" : "lg:order-1"
                            } ${service.comingSoon ? "text-center" : ""}`}
                          >
                            <div className="flex items-center gap-4 mb-4">
                              <div className="p-3 bg-accent-gold/10 rounded-full group-hover:bg-accent-gold/20 transition-colors duration-300">
                                <Icon className="w-6 h-6 text-accent-gold" />
                              </div>
                              <span className="text-sm font-semibold text-accent-gold tracking-wider">
                                SERVICE {service.id}
                              </span>
                            </div>

                            <h2 className="text-3xl md:text-4xl font-bold text-elegant-blue mb-4 group-hover:text-accent-gold transition-colors duration-300">
                              {service.title}
                            </h2>

                            <p className="text-lg text-accent-gold/90 mb-4 font-semibold italic">{service.tagline}</p>

                            <p className="text-base md:text-lg leading-relaxed text-elegant-blue/80 mb-6">
                              {service.description}
                            </p>

                            {service.comingSoon ? (
                              <div className="inline-flex items-center gap-2 px-6 py-3 bg-elegant-blue/10 text-elegant-blue rounded-full font-semibold mx-auto lg:mx-0">
                                <Sparkles className="w-4 h-4" />
                                Coming Soon
                              </div>
                            ) : (
                              <div className="flex items-center gap-2 text-accent-gold font-semibold group-hover:gap-4 transition-all duration-300">
                                Learn More
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    </Link>
                  </ScrollReveal>
                )
              })}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <ScrollReveal animation="scale" delay={200}>
          <section className="bg-elegant-blue px-6 md:px-12 py-16 md:py-24">
            <div className="max-w-4xl mx-auto text-center space-y-8">
              <h2 className="text-3xl md:text-4xl lg:text-5xl leading-tight text-accent-gold">
                Ready to Begin Your Transformation?
              </h2>

              <p className="text-lg md:text-xl leading-relaxed text-white/90 max-w-2xl mx-auto">
                Book a session today and take the first step toward healing, clarity, and authentic self-expression.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Link href="/contact">
                  <Button className="bg-accent-gold text-elegant-blue hover:bg-accent-gold/90 px-8 py-4 text-lg font-semibold rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-105 btn-hover-effect">
                    Book Your Session
                  </Button>
                </Link>

                <Link href="/about">
                  <Button className="border-2 border-accent-gold bg-transparent text-accent-gold hover:bg-accent-gold hover:text-elegant-blue px-8 py-4 text-lg font-semibold rounded-lg transition-all duration-300 hover:scale-105">
                    Learn About Remya
                  </Button>
                </Link>
              </div>
            </div>
          </section>
        </ScrollReveal>

        <WhatsAppButton />
        <Footer />
      </div>
    </>
  )
}
