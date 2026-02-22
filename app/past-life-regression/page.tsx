"use client"

import { Libre_Baskerville } from "next/font/google"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"
import Footer from "@/components/footer"
import SimplePreloader from "@/components/simple-preloader"
import WhatsAppButton from "@/components/whatsapp-button"
import ScrollReveal from "@/components/scroll-reveal"
import React from "react"

const libreBaskerville = Libre_Baskerville({
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
  display: "swap",
})

const testimonials = [
  {
    text: "The past life regression revealed patterns I never understood - it was deeply healing.",
    name: "Vinod Kumar",
    country: "USA",
  },
  {
    text: "I finally understood why I had certain fears. The healing was profound.",
    name: "Priya Khanna",
    country: "India",
  },
  {
    text: "Discovering my past life connection with my partner brought so much clarity.",
    name: "Michael Ross",
    country: "UK",
  },
]

const faqs = [
  {
    q: "Is PLR safe?",
    a: "Yes. Remya is visiting the past life and doing the healing. You are always conscious, in control, and guided gently throughout.",
  },
  {
    q: "What if I can't see anything?",
    a: "You do not have to see. What has been shown to Remya will be shared with you, if you are open to listen.",
  },
  {
    q: "How many sessions do I need?",
    a: "It will be given by the Akashic book in first session. The root life time will be visited and healed in the same session itself. Further past lives will be visited in a gap of 10 days. Team will assist to book further sessions (separate payment for each session).",
  },
  {
    q: "What is the duration?",
    a: "Each session lasts 45-60 minutes, depending on your Soul guidance.",
  },
]

export default function PastLifeRegressionPage() {
  const [index, setIndex] = React.useState(0)
  const [fade, setFade] = React.useState(true)
  const [openIndex, setOpenIndex] = React.useState<number | null>(null)

  React.useEffect(() => {
    const interval = setInterval(() => {
      setFade(false)
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % testimonials.length)
        setFade(true)
      }, 400)
    }, 4500)

    return () => clearInterval(interval)
  }, [])

  return (
    <>
      <SimplePreloader />
      <div className={`min-h-screen beige-bg text-elegant-blue ${libreBaskerville.className}`}>


        {/* Hero Section */}
        <ScrollReveal animation="fade">
          <section className="px-6 md:px-12 py-16 md:py-24">
            <div className="max-w-7xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                {/* Left Column - Content */}
                <div className="space-y-8">
                  <div className="space-y-6">
                    <p className="text-lg md:text-xl text-accent-gold animate-fadeInUp">Service 02</p>

                    <h1 className="text-4xl md:text-5xl lg:text-6xl leading-tight text-elegant-blue animate-fadeInUp">
                      Past Life <span className="text-accent-gold text-glow">Regression</span>
                    </h1>

                    <div className="border-l-4 border-accent-gold pl-6 my-8 animate-fadeInUp">
                      <p className="text-xl md:text-2xl italic leading-relaxed text-elegant-blue/90">
                        "Heal the Unseen. Discover the Root of Your Patterns.
                        <br />
                        Remember Who You Truly Are."
                      </p>
                    </div>

                    <p className="text-lg md:text-xl leading-relaxed text-elegant-blue/80 animate-fadeInUp">
                      Past Life Regression (PLR) helps you uncover memories and experiences from your previous lifetimes
                      that shape your current fears, relationships, and soul purpose. When you revisit your past lives,
                      you unlock deep emotional healing, karmic completion, and soul freedom.
                    </p>
                  </div>

                  <div className="space-y-4 animate-fadeInUp">
                    <Button className="bg-accent-gold text-elegant-blue hover:bg-accent-gold/90 px-8 py-4 text-lg font-semibold rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-105 btn-hover-effect">
                      Book Your PLR Session
                    </Button>

                    <p className="text-sm text-elegant-blue/60">Energy exchange work • Available online</p>
                  </div>
                </div>

                {/* Right Column - Image */}
                <div className="space-y-6 animate-scaleIn">
                  <div className="relative hover-lift">
                    <Image
                      src="/images/past-20life-20regression.jpeg"
                      alt="Past Life Regression - Journey through time"
                      width={500}
                      height={600}
                      className="w-full max-w-md mx-auto rounded-lg shadow-2xl object-cover border-2 border-accent-gold/30 transition-all duration-500 hover:border-accent-gold/60"
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>
        </ScrollReveal>

        {/* Video Section – Client Stories */}
        <ScrollReveal animation="fade" delay={100}>
          <section className="px-6 md:px-12 py-16 md:py-24 bg-white/40 backdrop-blur-sm">
            <div className="max-w-6xl mx-auto">
              {/* Title */}
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl lg:text-5xl leading-tight mb-4 text-elegant-blue">
                  Watch My <span className="text-accent-gold">Client Stories</span>
                </h2>

                <p className="text-lg text-elegant-blue/70 max-w-2xl mx-auto">
                  Real experiences shared by clients who explored past-life memories and brought healing into their
                  present life.
                </p>

                <div className="h-1 w-24 bg-accent-gold mx-auto mt-6"></div>
              </div>

              {/* Video Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                {[
                  {
                    label: "Client Experience",
                    title: "Past Life Regression Story",
                    src: "https://www.youtube.com/embed/caDdwM8fAiE",
                  },
                  {
                    label: "Client Experience",
                    title: "Healing & Realisation",
                    src: "https://www.youtube.com/embed/yO8eKVq2A8w",
                  },
                  {
                    label: "Understanding the Process",
                    title: "What Is Past Life Regression?",
                    src: "https://www.youtube.com/embed/g0A2xVfH-EU",
                  },
                ].map((video, index) => (
                  <div
                    key={index}
                    className="group bg-white/85 p-4 md:p-5 rounded-2xl
                              border border-accent-gold/30
                              transition-all duration-300
                              hover:border-accent-gold/60
                              hover:shadow-xl"
                  >
                    {/* Label */}
                    <div className="flex items-center gap-3 mb-3">
                      <div className="h-1 w-8 bg-accent-gold"></div>
                      <p className="text-sm font-semibold text-elegant-blue/80 uppercase tracking-wide">
                        {video.label}
                      </p>
                    </div>

                    {/* Title */}
                    <h3 className="text-lg font-semibold text-elegant-blue mb-4">{video.title}</h3>

                    {/* Video */}
                    <div
                      className="relative w-full aspect-video rounded-xl overflow-hidden
                                    shadow-md border border-accent-gold/20
                                    transition-all duration-300
                                    group-hover:border-accent-gold/50"
                    >
                      <iframe
                        src={video.src}
                        title={video.title}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        className="absolute inset-0 w-full h-full"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </ScrollReveal>

        {/* What You'll Experience Section */}
        <ScrollReveal animation="fade" delay={150}>
          <section className="px-6 md:px-12 py-16 md:py-24">
            <div className="max-w-5xl mx-auto">
              {/* Title */}
              <div className="text-center mb-14">
                <h2 className="text-3xl md:text-4xl lg:text-5xl leading-tight mb-4 text-elegant-blue">
                  What You’ll <span className="text-accent-gold">Experience</span>
                </h2>
                <p className="text-lg text-elegant-blue/70 max-w-2xl mx-auto">
                  A guided session designed to bring understanding, release, and clarity.
                </p>
                <div className="h-1 w-24 bg-accent-gold mx-auto mt-6"></div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  "Access one significant past lifetime connected to your current challenges.",
                  "Understand how unresolved past-life experiences influence your present life.",
                  "Release emotional or energetic patterns carried forward unconsciously.",
                  "Gain clarity around relationships, fears, or repeating life situations.",
                  "Receive intuitive insights that support healing and self-awareness.",
                  "Integrate past-life wisdom into your current life with grounding and balance.",
                ].map((text, index) => (
                  <div
                    key={index}
                    className="group bg-white/80 p-6 md:p-8 rounded-xl
                              border border-accent-gold/30
                              transition-all duration-300
                              hover:border-accent-gold/70
                              hover:shadow-xl hover:-translate-y-1"
                  >
                    <div className="flex items-start gap-4">
                      {/* Number */}
                      <div
                        className="flex-shrink-0 w-8 h-8 rounded-full
                                  border border-accent-gold/60
                                  text-accent-gold font-semibold
                                  flex items-center justify-center
                                  transition-all duration-300
                                  group-hover:bg-accent-gold
                                  group-hover:text-elegant-blue"
                      >
                        {index + 1}
                      </div>

                      <p className="text-elegant-blue/80 leading-relaxed">{text}</p>
                    </div>

                    {/* Hover line */}
                    <div className="mt-4 h-0.5 w-0 bg-accent-gold transition-all duration-300 group-hover:w-16"></div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </ScrollReveal>

        {/* Who This Is For Section */}
        <ScrollReveal animation="fade" delay={200}>
          <section className="px-6 md:px-12 py-16 md:py-24 bg-elegant-blue/5 backdrop-blur-sm">
            <div className="max-w-5xl mx-auto">
              {/* Title */}
              <div className="text-center mb-14">
                <h2 className="text-3xl md:text-4xl lg:text-5xl leading-tight mb-4 text-elegant-blue">
                  Who This Is <span className="text-accent-gold">For</span>
                </h2>
                <p className="text-lg text-elegant-blue/70 max-w-2xl mx-auto">
                  This session may support you if any of the following resonate.
                </p>
                <div className="h-1 w-24 bg-accent-gold mx-auto mt-6"></div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  "You feel stuck in repeating emotional or life patterns despite inner work.",
                  "You experience fears, heaviness, or emotions without a clear origin.",
                  "You want clarity around a deep soul connection or unresolved relationship.",
                  "You feel drawn to explore your soul’s history beyond the present life.",
                  "You sense unresolved experiences influencing your choices or reactions.",
                  "You are ready to release karmic weight and move forward with awareness.",
                ].map((text, index) => (
                  <div
                    key={index}
                    className="group bg-white/80 p-6 md:p-8 rounded-xl
                              border border-accent-gold/30
                              transition-all duration-300
                              hover:border-accent-gold/70
                              hover:shadow-xl hover:-translate-y-1"
                  >
                    <div className="flex items-start gap-4">
                      {/* Number */}
                      <div
                        className="flex-shrink-0 w-8 h-8 rounded-full
                                  border border-accent-gold/60
                                  text-accent-gold font-semibold
                                  flex items-center justify-center
                                  transition-all duration-300
                                  group-hover:bg-accent-gold
                                  group-hover:text-elegant-blue"
                      >
                        {index + 1}
                      </div>

                      <p className="text-elegant-blue/80 leading-relaxed">{text}</p>
                    </div>

                    {/* Hover line */}
                    <div className="mt-4 h-0.5 w-0 bg-accent-gold transition-all duration-300 group-hover:w-16"></div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </ScrollReveal>

        {/* What Clients Say - Testimonials */}
        <ScrollReveal animation="fade" delay={250}>
          <section className="px-6 md:px-12 py-16 md:py-24">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl lg:text-5xl leading-tight mb-4 text-elegant-blue">
                  What Clients <span className="text-accent-gold">Say</span>
                </h2>
                <div className="h-1 w-24 bg-accent-gold mx-auto mt-6"></div>
              </div>

              <div className="bg-elegant-blue p-8 md:p-10 rounded-2xl shadow-xl">
                <div className={`text-center transition-opacity duration-500 ${fade ? "opacity-100" : "opacity-0"}`}>
                  <p className="text-lg md:text-xl text-warm-beige leading-relaxed italic max-w-3xl mx-auto">
                    "{testimonials[index].text}"
                  </p>
                  <p className="text-accent-gold mt-4 font-medium">
                    — {testimonials[index].name}, {testimonials[index].country}
                  </p>
                </div>
              </div>
            </div>
          </section>
        </ScrollReveal>

        {/* FAQ Section */}
        <ScrollReveal animation="fade" delay={300}>
          <section className="px-6 md:px-12 py-16 md:py-24 bg-white/40 backdrop-blur-sm">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-14">
                <h2 className="text-3xl md:text-4xl lg:text-5xl leading-tight mb-4 text-elegant-blue">
                  Frequently Asked <span className="text-accent-gold">Questions</span>
                </h2>
                <div className="h-1 w-24 bg-accent-gold mx-auto mt-6"></div>
              </div>

              <div className="space-y-4">
                {faqs.map((faq, idx) => {
                  const isOpen = openIndex === idx

                  return (
                    <div
                      key={idx}
                      className="bg-white/85 rounded-xl border border-accent-gold/30
                                transition-all duration-300
                                hover:border-accent-gold/50"
                    >
                      <button
                        onClick={() => setOpenIndex(isOpen ? null : idx)}
                        className="w-full flex items-center justify-between
                                  p-6 md:p-8 text-left"
                      >
                        <h3
                          className={`text-lg md:text-xl font-semibold transition-colors duration-300 ${isOpen ? "text-accent-gold" : "text-elegant-blue"
                            }`}
                        >
                          {faq.q}
                        </h3>
                        <span
                          className={`ml-4 block w-3 h-3 border-r-2 border-b-2
                                      transition-transform duration-300
                                      ${isOpen ? "rotate-45 border-accent-gold" : "-rotate-45 border-elegant-blue/60"}`}
                        />
                      </button>

                      <div
                        className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                          }`}
                      >
                        <div className="px-6 md:px-8 pb-6 md:pb-8">
                          <p className="text-elegant-blue/80 leading-relaxed">{faq.a}</p>
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          </section>
        </ScrollReveal>

        {/* Final CTA Section */}
        <ScrollReveal animation="scale" delay={350}>
          <section className="bg-gradient-to-br from-accent-gold via-accent-gold/95 to-accent-gold/90 px-6 md:px-12 py-20 md:py-28">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl lg:text-5xl leading-tight text-elegant-blue mb-6 font-bold">
                Unlock Your Soul's Hidden Stories
              </h2>

              <p className="text-lg md:text-xl leading-relaxed text-elegant-blue/90 mb-8 max-w-2xl mx-auto">
                When patterns repeat, when fears feel familiar, your Soul is calling you to remember. Release what no
                longer serves you and step into clarity, healing, and freedom.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Button className="bg-elegant-blue text-warm-beige hover:bg-deep-blue px-10 py-5 text-lg font-semibold rounded-lg shadow-xl transition-all duration-300 hover:shadow-2xl hover:scale-105 btn-hover-effect">
                  Book Your PLR Session Now
                </Button>
                <Button
                  variant="outline"
                  className="border-2 border-elegant-blue text-elegant-blue hover:bg-elegant-blue hover:text-warm-beige px-10 py-5 text-lg font-semibold rounded-lg shadow-lg transition-all duration-300 hover:scale-105 bg-transparent"
                >
                  Message for Guidance
                </Button>
              </div>
            </div>
          </section>
        </ScrollReveal>

        <WhatsAppButton />

      </div>
    </>
  )
}
