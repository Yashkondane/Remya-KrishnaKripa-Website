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
    text: "I finally understood why I react the way I do. This session helped me heal decades of pain.",
    name: "Divya M.",
    country: "India",
  },
  {
    text: "Meeting my inner child was the most profound healing experience of my life.",
    name: "Sarah T.",
    country: "USA",
  },
  {
    text: "I felt safe, supported, and finally free from patterns that held me back.",
    name: "Anjali R.",
    country: "India",
  },
]

const faqs = [
  {
    q: "Will it be emotional?",
    a: "Yes, gently. But you will feel lighter, safe and supported throughout the entire process.",
  },
  {
    q: "Is it like therapy?",
    a: "It goes deeper — into the subconscious and energetic layers where childhood wounds are stored.",
  },
  {
    q: "Will I remember painful memories?",
    a: "Only what you are ready for. Nothing harmful is opened. Your subconscious protects you.",
  },
  {
    q: "Is this safe for beginners?",
    a: "Absolutely. I guide you through every step with care and intention.",
  },
  {
    q: "Will this heal my relationship patterns?",
    a: "Yes — because those patterns originate in childhood. Healing the root transforms the present.",
  },
]

export default function InnerChildHealingPage() {
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
                    <p className="text-lg md:text-xl text-accent-gold animate-fadeInUp">Service 03</p>

                    <h1 className="text-4xl md:text-5xl lg:text-6xl leading-tight text-elegant-blue animate-fadeInUp">
                      Inner Child <span className="text-accent-gold text-glow">Healing</span>
                    </h1>

                    <div className="border-l-4 border-accent-gold pl-6 my-8 animate-fadeInUp">
                      <p className="text-xl md:text-2xl italic leading-relaxed text-elegant-blue/90">
                        "Heal the Child Within.
                        <br />
                        Transform the Woman You Are Becoming."
                      </p>
                    </div>

                    <p className="text-lg md:text-xl leading-relaxed text-elegant-blue/80 animate-fadeInUp">
                      A powerful 1:1 Inner Child Healing session to release emotional pain, subconscious blocks,
                      mother/father wounds, relationship patterns, and past traumas — so you can rise as the confident,
                      aligned, abundant version of yourself.
                    </p>
                  </div>

                  <div className="space-y-4 animate-fadeInUp">
                    <Button className="bg-accent-gold text-elegant-blue hover:bg-accent-gold/90 px-8 py-4 text-lg font-semibold rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-105 btn-hover-effect">
                      Book Your Inner Child Healing Session
                    </Button>

                    <p className="text-sm text-elegant-blue/60">Energy exchange work • Available online</p>
                  </div>
                </div>

                {/* Right Column - Image */}
                <div className="space-y-6 animate-scaleIn">
                  <div className="relative hover-lift">
                    <Image
                      src="/images/inner-20child.jpeg"
                      alt="Inner Child Healing - Peaceful woman reconnecting with her inner child"
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

        {/* Video Section – Understanding Inner Child */}
        <ScrollReveal animation="fade" delay={100}>
          <section className="px-6 md:px-12 py-16 md:py-24 bg-white/40 backdrop-blur-sm">
            <div className="max-w-6xl mx-auto">
              {/* Title */}
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl lg:text-5xl leading-tight mb-4 text-elegant-blue">
                  Understanding <span className="text-accent-gold">Inner Child Healing</span>
                </h2>

                <p className="text-lg text-elegant-blue/70 max-w-2xl mx-auto">
                  Watch these short videos to understand what inner child healing is and how it can transform your life.
                </p>

                <div className="h-1 w-24 bg-accent-gold mx-auto mt-6"></div>
              </div>

              {/* Video Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                {[
                  {
                    label: "Understanding Inner Child",
                    title: "What is Inner Child Healing?",
                    src: "https://www.youtube.com/embed/8qMVsuvdL0o",
                  },
                  {
                    label: "Healing Journey",
                    title: "The Power of Inner Child Work",
                    src: "https://www.youtube.com/embed/kMHWGXUeSZ4",
                  },
                ].map((video, idx) => (
                  <div
                    key={idx}
                    className="group bg-white/85 p-4 md:p-5 rounded-2xl
                              border border-accent-gold/30
                              transition-all duration-300
                              hover:border-accent-gold/50
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

        {/* What Inner Child Healing Is Section */}
        <ScrollReveal animation="fade" delay={150}>
          <section className="px-6 md:px-12 py-16 md:py-24">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl lg:text-5xl leading-tight mb-6 text-elegant-blue">
                  What Inner Child Healing <span className="text-accent-gold">Truly Is</span>
                </h2>
                <div className="h-1 w-24 bg-accent-gold mx-auto mb-8"></div>
              </div>

              <div className="bg-gradient-to-br from-accent-gold/10 via-white/80 to-accent-gold/5 p-8 md:p-12 rounded-2xl border-2 border-accent-gold/30 shadow-xl">
                <p className="text-lg md:text-xl leading-relaxed text-elegant-blue/90 mb-6 text-center italic">
                  Your inner child is not your past. It's a living part of you — carrying your wounds, your fears, and
                  your unmet needs.
                </p>

                <p className="text-lg leading-relaxed text-elegant-blue/80 mb-6">
                  When you were young, you learned how to survive — how to be loved, how to stay safe, how to be
                  accepted. But those survival patterns don't serve the woman you're becoming.
                </p>

                <div className="space-y-4 mt-8">
                  <p className="text-lg font-semibold text-accent-gold mb-4">Inner Child Healing helps you:</p>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <span className="mt-1.5 h-2 w-2 rounded-full bg-accent-gold flex-shrink-0"></span>
                      <span className="text-elegant-blue/80">
                        Release emotional pain from childhood that still affects you today
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="mt-1.5 h-2 w-2 rounded-full bg-accent-gold flex-shrink-0"></span>
                      <span className="text-elegant-blue/80">
                        Heal mother/father wounds that shape how you love and trust
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="mt-1.5 h-2 w-2 rounded-full bg-accent-gold flex-shrink-0"></span>
                      <span className="text-elegant-blue/80">
                        Break patterns of self-sabotage, people-pleasing, or fear of rejection
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="mt-1.5 h-2 w-2 rounded-full bg-accent-gold flex-shrink-0"></span>
                      <span className="text-elegant-blue/80">
                        Reclaim your voice, confidence, and sense of worthiness
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="mt-1.5 h-2 w-2 rounded-full bg-accent-gold flex-shrink-0"></span>
                      <span className="text-elegant-blue/80">
                        Transform how you show up in relationships, career, and life
                      </span>
                    </li>
                  </ul>

                  <p className="text-lg md:text-xl leading-relaxed text-elegant-blue/90 mt-8 text-center italic font-semibold">
                    When you heal your inner child, you don't just change your past.
                    <br />
                    You liberate your future.
                  </p>
                </div>
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
                  This session may support you if any of the following resonate deeply.
                </p>

                <div className="h-1 w-24 bg-accent-gold mx-auto mt-6"></div>
              </div>

              {/* Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  "You feel stuck in patterns you can't seem to break — self-sabotage, overthinking, fear of being seen",
                  "You struggle with people-pleasing, perfectionism, or feeling 'not good enough'",
                  "You have trouble setting boundaries or speaking up for yourself",
                  "You carry anger, shame, or sadness that feels older than your current life",
                  "You want to heal your relationship with your mother or father",
                  "You're ready to stop living small and step into your power",
                ].map((text, index) => (
                  <div
                    key={index}
                    className="group bg-white/80 p-6 md:p-8 rounded-xl border border-accent-gold/30
                              transition-all duration-300 hover:border-accent-gold/70
                              hover:shadow-xl hover:-translate-y-1"
                  >
                    <div className="flex items-start gap-4">
                      {/* Numbered Point */}
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

                    {/* Hover underline */}
                    <div className="mt-4 h-0.5 w-0 bg-accent-gold transition-all duration-300 group-hover:w-16"></div>
                  </div>
                ))}

                {/* Background for Statement */}
                <div
                  className="md:col-span-2
                            bg-gradient-to-br from-accent-gold/15 to-accent-gold/5
                            p-8 md:p-10 rounded-xl
                            border-2 border-accent-gold/40 shadow-lg"
                >
                  <p className="text-elegant-blue/95 leading-relaxed text-center text-lg md:text-xl font-semibold">
                    If you're here, it's because your Soul is ready.
                    <br />
                    Your inner child has been waiting for you to listen.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </ScrollReveal>

        {/* What Happens During the Session Section */}
        <ScrollReveal animation="fade" delay={250}>
          <section className="px-6 md:px-12 py-16 md:py-24">
            <div className="max-w-5xl mx-auto">
              {/* Title */}
              <div className="text-center mb-14">
                <h2 className="text-3xl md:text-4xl lg:text-5xl leading-tight mb-4 text-elegant-blue">
                  What Happens During <span className="text-accent-gold">the Session</span>
                </h2>
                <p className="text-lg text-elegant-blue/70 max-w-2xl mx-auto">
                  A gentle, guided process designed to help you feel safe, supported, and deeply heard.
                </p>
                <div className="h-1 w-24 bg-accent-gold mx-auto mt-6"></div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  "We begin with a grounding meditation to create a safe, sacred space",
                  "You are gently guided to connect with your inner child through visualization",
                  "We explore the emotions, memories, and unmet needs that surface",
                  "I help you offer the love, validation, and safety your inner child needed",
                  "We release old beliefs and patterns that no longer serve you",
                  "You integrate the healing and return feeling lighter, clearer, and empowered",
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
        <ScrollReveal animation="fade" delay={300}>
          <section className="px-6 md:px-12 py-16 md:py-24 bg-elegant-blue/5 backdrop-blur-sm">
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
        <ScrollReveal animation="fade" delay={350}>
          <section className="px-6 md:px-12 py-16 md:py-24">
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
        <ScrollReveal animation="scale" delay={400}>
          <section className="bg-gradient-to-br from-accent-gold via-accent-gold/95 to-accent-gold/90 px-6 md:px-12 py-20 md:py-28">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl lg:text-5xl leading-tight text-elegant-blue mb-6 font-bold">
                Are you ready to meet the child within…
                <br />
                and rise as the woman you were always meant to be?
              </h2>

              <p className="text-lg md:text-xl leading-relaxed text-elegant-blue/90 mb-8 max-w-2xl mx-auto">
                Your inner child has been waiting. This is your invitation to heal, transform, and finally step into the
                life you deserve.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Button className="bg-elegant-blue text-warm-beige hover:bg-deep-blue px-10 py-5 text-lg font-semibold rounded-lg shadow-xl transition-all duration-300 hover:shadow-2xl hover:scale-105 btn-hover-effect">
                  Book Your Inner Child Healing Session
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
