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
    text: "I felt a deep sense of clarity and emotional relief after the session.",
    name: "Ananya R.",
    country: "India",
  },
  {
    text: "The reading helped me understand patterns I had been struggling with for years.",
    name: "Rohit K.",
    country: "India",
  },
  {
    text: "I felt calmer, more grounded, and clearer about my next steps.",
    name: "Meera S.",
    country: "India",
  },
  {
    text: "It gave me insight without fear — I felt supported throughout the session.",
    name: "Emily W.",
    country: "USA",
  },
  {
    text: "I walked away feeling aligned and more at peace with myself.",
    name: "Daniel M.",
    country: "USA",
  },
]

const faqs = [
  {
    q: "What can I ask in a reading?",
    a: "You can ask about any area of your life — relationships, career, wealth, health, purpose, past-life influences, or emotional blocks. For the best experience, come with 3–5 heartfelt questions.",
  },
  {
    q: "Do I need to believe in past lives for this to work?",
    a: "No. Belief is not required. The reading works at an energetic level, connecting with your Soul. Many people come with curiosity rather than certainty and still experience clarity and insight.",
  },
  {
    q: "Will you tell me my future?",
    a: "No. The reading does not predict a fixed future. Instead, it helps you understand your current patterns, choices, and the most aligned direction available to you. Your free will always matters.",
  },
  {
    q: "How should I prepare for the session?",
    a: "There is no complex preparation needed. Simply come with an open mind and a few meaningful questions. Watching the introductory videos beforehand can help you feel more comfortable.",
  },
  {
    q: "Is the session conducted online?",
    a: "Yes. All sessions are held via Zoom in a private, calm, and respectful space. You can attend from wherever you feel most comfortable.",
  },
]

export default function AkashicRecordReadingPage() {
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
        {/* Navigation */}
        <nav className="flex items-center justify-between px-6 py-4 md:px-12 md:py-6 bg-elegant-blue/10 backdrop-blur-sm animate-fadeInDown">
          <Link href="/" className="text-xl md:text-2xl text-accent-gold text-glow animate-pulse-slow">
            AkashicReading.
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            <Link href="/about" className="hover:text-accent-gold transition-all duration-300 hover:scale-105">
              About
            </Link>
            <Link href="/my-book" className="hover:text-accent-gold transition-all duration-300 hover:scale-105">
              My Book
            </Link>
            <Link href="/journal" className="hover:text-accent-gold transition-all duration-300 hover:scale-105">
              Journal
            </Link>
            <Link href="/contact" className="hover:text-accent-gold transition-all duration-300 hover:scale-105">
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
            <div className="max-w-7xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                {/* Left Column - Content */}
                <div className="space-y-8">
                  <div className="space-y-6">
                    <p className="text-lg md:text-xl text-accent-gold animate-fadeInUp">Service 01</p>

                    <h1 className="text-4xl md:text-5xl lg:text-6xl leading-tight text-elegant-blue animate-fadeInUp">
                      Akashic Record <span className="text-accent-gold text-glow">Reading</span>
                    </h1>

                    <div className="border-l-4 border-accent-gold pl-6 my-8 animate-fadeInUp">
                      <p className="text-xl md:text-2xl italic leading-relaxed text-elegant-blue/90">
                        "When your heart whispers — listen.
                        <br />
                        Because that's your Soul trying to speak."
                      </p>
                    </div>

                    <p className="text-lg md:text-xl leading-relaxed text-elegant-blue/80 animate-fadeInUp">
                      Every challenge, every pattern, every heartbreak you face — it's not random. It's written in your
                      Soul's book — your Akashic Records. And when you access them, everything starts to make sense —
                      why things happened the way they did, what your Soul is learning, and how to finally shift your
                      reality.
                    </p>
                  </div>

                  <div className="space-y-4 animate-fadeInUp">
                    <Button className="bg-accent-gold text-elegant-blue hover:bg-accent-gold/90 px-8 py-4 text-lg font-semibold rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-105 btn-hover-effect">
                      Book Your Reading
                    </Button>

                    <p className="text-sm text-elegant-blue/60">Energy exchange work • Available online</p>
                  </div>
                </div>

                {/* Right Column - Image */}
                <div className="space-y-6 animate-scaleIn">
                  <div className="relative hover-lift">
                    <Image
                      src="/images/akashic-reading.jpeg"
                      alt="Akashic Records Reading - Ancient spiritual wisdom"
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

        {/* What an Akashic Reading Truly Is Section */}
        <ScrollReveal animation="slide-up" delay={100}>
          <section className="px-6 md:px-12 py-16 md:py-24 bg-white/40 backdrop-blur-sm">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl lg:text-5xl leading-tight mb-6 text-elegant-blue">
                  What an Akashic Reading <span className="text-accent-gold">Truly Is</span>
                </h2>
                <div className="h-1 w-24 bg-accent-gold mx-auto mb-8"></div>
              </div>

              <div className="bg-gradient-to-br from-accent-gold/10 via-white/80 to-accent-gold/5 p-8 md:p-12 rounded-2xl border-2 border-accent-gold/30 shadow-xl">
                <p className="text-lg md:text-xl leading-relaxed text-elegant-blue/90 mb-6 text-center italic">
                  This isn't just a reading. It's a sacred conversation between you and your Soul.
                </p>

                <p className="text-lg leading-relaxed text-elegant-blue/80 mb-6">
                  Through a channeled prayer, we open your Akashic Records — your Soul's energy library — to receive
                  guidance, healing, and direction for your current life.
                </p>

                <div className="space-y-4 mt-8">
                  <p className="text-lg font-semibold text-accent-gold mb-4">It shows:</p>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <span className="mt-1.5 h-2 w-2 rounded-full bg-accent-gold flex-shrink-0"></span>
                      <span className="text-elegant-blue/80">
                        Why certain patterns repeat in love, career, or money
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="mt-1.5 h-2 w-2 rounded-full bg-accent-gold flex-shrink-0"></span>
                      <span className="text-elegant-blue/80">
                        Which past or parallel lifetime energies are influencing you now
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="mt-1.5 h-2 w-2 rounded-full bg-accent-gold flex-shrink-0"></span>
                      <span className="text-elegant-blue/80">The karmic lessons your Soul came to master</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="mt-1.5 h-2 w-2 rounded-full bg-accent-gold flex-shrink-0"></span>
                      <span className="text-elegant-blue/80">
                        What you can do to move into alignment, peace, and abundance
                      </span>
                    </li>
                  </ul>

                  <p className="text-lg md:text-xl leading-relaxed text-elegant-blue/90 mt-8 text-center italic font-semibold">
                    You don't "get told" your destiny here. You remember it.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </ScrollReveal>

        {/* Who This Is For Section */}
        <ScrollReveal animation="slide-up" delay={150}>
          <section className="px-6 md:px-12 py-16 md:py-24">
            <div className="max-w-5xl mx-auto">
              {/* Title */}
              <div className="text-center mb-14">
                <h2 className="text-3xl md:text-4xl lg:text-5xl leading-tight mb-4 text-elegant-blue">
                  Who This Is <span className="text-accent-gold">For</span>
                </h2>

                <p className="text-lg text-elegant-blue/70 max-w-2xl mx-auto">
                  If any of these experiences feel familiar, this work may support you.
                </p>

                <div className="h-1 w-24 bg-accent-gold mx-auto mt-6"></div>
              </div>

              {/* Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  "You feel stuck or confused, even after doing inner work or healing practices",
                  "You notice the same emotional or life patterns repeating in relationships, career, or finances",
                  "You want clarity about your life direction or deeper Soul purpose",
                  "You feel an inner calling to heal, grow, and understand yourself more deeply",
                  "You feel ready to step into greater awareness, alignment, and inner stability",
                  "You feel drawn to understand yourself beyond surface-level answers",
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
                    This is not about predicting your future.
                    <br />
                    It is about understanding yourself clearly enough to move forward with confidence.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </ScrollReveal>

        {/* Video & Intention Section */}
        <ScrollReveal animation="slide-up" delay={200}>
          <section className="bg-elegant-blue/5 backdrop-blur-sm px-6 md:px-12 py-16 md:py-24">
            <div className="max-w-6xl mx-auto">
              {/* Title */}
              <div className="text-center mb-14">
                <h2 className="text-3xl md:text-4xl lg:text-5xl leading-tight mb-4 text-elegant-blue">
                  Before You <span className="text-accent-gold">Book</span>
                </h2>
                <p className="text-lg text-elegant-blue/80 leading-relaxed max-w-2xl mx-auto">
                  Understanding Akashic Records helps you approach the reading with the right intention.
                </p>
                <div className="h-1 w-24 bg-accent-gold mx-auto mt-6"></div>
              </div>

              <div className="space-y-14">
                {/* Watch & Understand */}
                <div className="bg-white/80 p-8 md:p-10 rounded-2xl border-2 border-accent-gold/30 shadow-lg">
                  <h3 className="text-2xl md:text-3xl font-semibold text-accent-gold mb-3">Watch & Understand</h3>

                  <p className="text-elegant-blue/80 leading-relaxed mb-10 max-w-3xl">
                    Before your reading, take a moment to understand what Akashic Records are. These videos will help
                    you feel more prepared, grounded, and open for the session.
                  </p>

                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                    {/* English Video */}
                    <div className="space-y-4">
                      <div className="flex items-center gap-3">
                        <div className="h-1 w-10 bg-accent-gold"></div>
                        <p className="text-lg font-semibold text-elegant-blue">English</p>
                      </div>

                      <div className="relative w-full aspect-video rounded-xl overflow-hidden shadow-lg border-2 border-accent-gold/20 hover:border-accent-gold/50 transition-all duration-300">
                        <iframe
                          src="https://www.youtube.com/embed/N7nRJhsseiY"
                          title="What is Akashic Records? (English)"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                          className="absolute inset-0 w-full h-full"
                        />
                      </div>
                    </div>

                    {/* Malayalam Video */}
                    <div className="space-y-4">
                      <div className="flex items-center gap-3">
                        <div className="h-1 w-10 bg-accent-gold"></div>
                        <p className="text-lg font-semibold text-elegant-blue">Malayalam</p>
                      </div>

                      <div className="relative w-full aspect-video rounded-xl overflow-hidden shadow-lg border-2 border-accent-gold/20 hover:border-accent-gold/50 transition-all duration-300">
                        <iframe
                          src="https://www.youtube.com/embed/YdWFtWlrT6g"
                          title="What is Akashic Records? (Malayalam)"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                          className="absolute inset-0 w-full h-full"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Share Your Intention – White / Dark Contrast Block */}
                <div
                  className="relative overflow-hidden
                            bg-elegant-blue text-warm-beige
                            p-8 md:p-12 rounded-2xl
                            shadow-xl"
                >
                  {/* Subtle glow */}
                  <div className="absolute -top-20 -right-20 h-48 w-48 bg-accent-gold/20 rounded-full blur-3xl"></div>

                  <h3 className="relative z-10 text-2xl md:text-3xl font-semibold text-accent-gold mb-5">
                    Share Your Intention
                  </h3>

                  <p className="relative z-10 text-warm-beige/90 leading-relaxed text-lg max-w-4xl">
                    As this is an energy exchange work, I want to ensure I am connecting with those who are truly meant
                    to receive guidance through an Akashic Reading.
                    <br />
                    <br />
                    Before proceeding to book your slot, please take a moment to reflect and share the reason you feel
                    called to receive this reading.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </ScrollReveal>

        {/* What Happens During the Session Section */}
        <ScrollReveal animation="slide-up" delay={250}>
          <section className="bg-elegant-blue/5 backdrop-blur-sm px-6 md:px-12 py-16 md:py-24">
            <div className="max-w-5xl mx-auto">
              {/* Title */}
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl lg:text-5xl leading-tight mb-4 text-elegant-blue">
                  What Happens During <span className="text-accent-gold">the Session</span>
                </h2>
                <p className="text-lg text-elegant-blue/70 max-w-2xl mx-auto">
                  A calm, guided process designed to help you feel safe, supported, and clear throughout.
                </p>
                <div className="h-1 w-24 bg-accent-gold mx-auto mt-6"></div>
              </div>

              {/* Steps */}
              <div className="space-y-8">
                {[
                  {
                    title: "Grounding & Energy Alignment",
                    desc: "We begin with a short grounding practice to help you settle, relax, and prepare for the session.",
                  },
                  {
                    title: "Opening Your Akashic Records",
                    desc: "Through a sacred prayer, your Akashic Records are opened with intention and respect.",
                  },
                  {
                    title: "Channeled Guidance",
                    desc: "You receive clear guidance related to your questions — relationships, career, life direction, or inner growth.",
                  },
                  {
                    title: "Energy Clearing & Healing",
                    desc: "If guided, emotional or energetic blocks are gently addressed to support release and balance.",
                  },
                  {
                    title: "Closing & Integration",
                    desc: "The session is closed with insights and simple guidance on how to integrate what came through.",
                  },
                ].map((step, index) => (
                  <div
                    key={index}
                    className="group flex items-start gap-6
                              bg-white/85 p-6 md:p-8 rounded-xl
                              border border-accent-gold/30
                              transition-all duration-300
                              hover:border-accent-gold/60 hover:shadow-lg"
                  >
                    {/* Step number – GOLD BG, WHITE TEXT */}
                    <div
                      className="flex-shrink-0 w-12 h-12 rounded-full
                                bg-accent-gold text-white
                                font-semibold text-lg
                                flex items-center justify-center
                                transition-transform duration-300
                                group-hover:scale-105"
                    >
                      {index + 1}
                    </div>

                    {/* Content */}
                    <div>
                      <h3 className="text-xl font-semibold text-elegant-blue mb-2">{step.title}</h3>
                      <p className="text-elegant-blue/80 leading-relaxed">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Closing Note – DARK / BLUE BACKGROUND */}
              <div
                className="mt-14
                          bg-elegant-blue
                          p-8 md:p-10 rounded-xl
                          shadow-xl"
              >
                <p className="text-center text-warm-beige leading-relaxed text-lg">
                  <span className="font-semibold text-accent-gold">
                    You’ll receive clear, compassionate guidance — aligned with your Soul.
                  </span>
                  <br />
                  <br />
                  All sessions are conducted online via Zoom, in a calm, private, and respectful space, allowing you to
                  be fully present from wherever you are.
                </p>
              </div>
            </div>
          </section>
        </ScrollReveal>

        {/* Reading Packages Section */}
        <ScrollReveal animation="slide-up" delay={300}>
          <section className="px-6 md:px-12 py-16 md:py-24">
            <div className="max-w-7xl mx-auto">
              {/* Title */}
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl lg:text-5xl leading-tight mb-4 text-elegant-blue">
                  Choose Your Reading
                </h2>
                <p className="text-lg text-elegant-blue/80 max-w-2xl mx-auto">
                  Three options, each designed for a different depth of clarity and healing.
                </p>
                <div className="h-1 w-24 bg-accent-gold mx-auto mt-6"></div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Mini Reading */}
                <div
                  className="flex flex-col bg-white p-8 rounded-2xl border border-accent-gold/30
                                transition-all duration-300 hover:border-accent-gold/60 hover:shadow-xl"
                >
                  <div className="space-y-2">
                    <h3 className="text-2xl font-semibold text-accent-gold">Mini Reading</h3>
                    <p className="text-elegant-blue/70">Quick clarity on one specific area</p>
                  </div>

                  <div className="mt-6 mb-6 bg-accent-gold/15 p-4 rounded-lg border border-accent-gold/30">
                    <p className="text-elegant-blue font-semibold text-lg">22 minutes</p>
                  </div>

                  <ul className="space-y-3 text-elegant-blue/80 flex-grow">
                    <li>• Identification of past-life influences related to your concern</li>
                    <li>• Past-life healing not included (can be booked separately)</li>
                    <li>• Any guidance or healing that comes through is shared</li>
                  </ul>

                  <Button
                    className="mt-8 w-full bg-accent-gold text-elegant-blue py-4 text-lg font-semibold rounded-lg
                                    hover:bg-accent-gold/90 transition-all"
                  >
                    Book Mini
                  </Button>
                </div>

                {/* Full Reading – WHITE & FEATURED */}
                <div
                  className="relative flex flex-col bg-white p-10 rounded-2xl
                                border-2 border-accent-gold shadow-2xl"
                >
                  {/* Badge */}
                  <div
                    className="absolute -top-4 left-1/2 -translate-x-1/2
                                  bg-elegant-blue text-warm-beige
                                  px-6 py-2 rounded-full text-sm font-semibold shadow-md"
                  >
                    Most Chosen
                  </div>

                  <div className="space-y-2 mt-2">
                    <h3 className="text-2xl font-semibold text-accent-gold">Full Reading</h3>
                    <p className="text-elegant-blue/70">Deep insight into key areas of your life</p>
                  </div>

                  <div className="mt-6 mb-6 bg-accent-gold/20 p-4 rounded-lg border border-accent-gold/40">
                    <p className="text-elegant-blue font-semibold text-lg">60 minutes</p>
                  </div>

                  <ul className="space-y-3 text-elegant-blue/80 flex-grow">
                    <li>• Covers two chosen areas (career, relationships, wealth, or self-growth)</li>
                    <li>• Identification of past-life influences connected to your questions</li>
                    <li className="font-semibold text-elegant-blue">• Healing of one past life included</li>
                    <li>• Any additional guidance or healing is shared during the session</li>
                  </ul>

                  <Button
                    className="mt-8 w-full bg-elegant-blue text-warm-beige py-4 text-lg font-semibold rounded-lg
                                    hover:bg-deep-blue transition-all"
                  >
                    Book Full
                  </Button>
                </div>

                {/* Premium Reading */}
                <div
                  className="flex flex-col bg-white p-8 rounded-2xl border border-accent-gold/30
                                transition-all duration-300 hover:border-accent-gold/60 hover:shadow-xl"
                >
                  <div className="space-y-2">
                    <h3 className="text-2xl font-semibold text-accent-gold">Premium Reading</h3>
                    <p className="text-elegant-blue/70">Deep karmic healing and future alignment</p>
                  </div>

                  <div className="mt-6 mb-6 bg-accent-gold/15 p-4 rounded-lg border border-accent-gold/30">
                    <p className="text-elegant-blue font-semibold text-lg">90 minutes</p>
                  </div>

                  <ul className="space-y-3 text-elegant-blue/80 flex-grow">
                    <li>• Covers all areas and open questions</li>
                    <li>• Past-life influences identified for each concern</li>
                    <li className="font-semibold text-elegant-blue">• Healing of one past life included</li>
                    <li>• Chakra overview (open / blocked states)</li>
                    <li>• Guidance on additional healing modalities</li>
                    <li>• Space or crystal guidance for energetic alignment</li>
                  </ul>

                  <Button
                    className="mt-8 w-full bg-accent-gold text-elegant-blue py-4 text-lg font-semibold rounded-lg
                                    hover:bg-accent-gold/90 transition-all"
                  >
                    Book Premium
                  </Button>
                </div>
              </div>
            </div>
          </section>
        </ScrollReveal>

        {/* What You'll Experience After Section */}
        <ScrollReveal animation="slide-up" delay={350}>
          <section className="px-6 md:px-12 py-16 md:py-24 bg-white/40 backdrop-blur-sm">
            <div className="max-w-5xl mx-auto">
              {/* Title */}
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl lg:text-5xl leading-tight mb-4 text-elegant-blue">
                  What You'll <span className="text-accent-gold">Experience After</span>
                </h2>
                <p className="text-lg text-elegant-blue/70 max-w-2xl mx-auto">
                  Subtle yet meaningful shifts that continue unfolding after your session.
                </p>
                <div className="h-1 w-24 bg-accent-gold mx-auto mt-6"></div>
              </div>

              {/* Experience Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                {[
                  { title: "Emotional Lightness", desc: "A sense of relief, calm, and emotional ease." },
                  { title: "Mental Clarity", desc: "Greater understanding and peace of mind." },
                  { title: "Deeper Awareness", desc: "Insight into repeating patterns and inner lessons." },
                  { title: "Inner Breakthroughs", desc: "Shifts in relationships, purpose, or direction." },
                  { title: "Soul Connection", desc: "A stronger sense of alignment with yourself." },
                  {
                    title: "Lasting Transformation",
                    desc: "A gentle but noticeable change in perspective and energy.",
                  },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="group bg-white/85 p-6 md:p-8 rounded-xl
                              border border-accent-gold/30
                              transition-all duration-300
                              hover:border-accent-gold/60
                              hover:shadow-xl hover:-translate-y-1"
                  >
                    <div className="h-1 w-10 bg-accent-gold mb-4 transition-all duration-300 group-hover:w-16"></div>
                    <h3 className="text-xl font-semibold text-elegant-blue mb-2">{item.title}</h3>
                    <p className="text-elegant-blue/80 leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>

              {/* Sliding Testimonials (Text + Names Rotate) */}
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
        <ScrollReveal animation="slide-up" delay={400}>
          <section className="px-6 md:px-12 py-16 md:py-24">
            <div className="max-w-4xl mx-auto">
              {/* Title */}
              <div className="text-center mb-14">
                <h2 className="text-3xl md:text-4xl lg:text-5xl leading-tight mb-4 text-elegant-blue">
                  Frequently Asked <span className="text-accent-gold">Questions</span>
                </h2>
                <div className="h-1 w-24 bg-accent-gold mx-auto mt-6"></div>
              </div>

              {/* Accordion */}
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
                      {/* Question */}
                      <button
                        onClick={() => setOpenIndex(isOpen ? null : idx)}
                        className="w-full flex items-center justify-between
                                  p-6 md:p-8 text-left"
                      >
                        <h3
                          className={`text-lg md:text-xl font-semibold transition-colors duration-300 ${
                            isOpen ? "text-accent-gold" : "text-elegant-blue"
                          }`}
                        >
                          {faq.q}
                        </h3>

                        {/* Arrow */}
                        <span
                          className={`ml-4 block w-3 h-3 border-r-2 border-b-2
                                      transition-transform duration-300
                                      ${isOpen ? "rotate-45 border-accent-gold" : "-rotate-45 border-elegant-blue/60"}`}
                        />
                      </button>

                      {/* Answer */}
                      <div
                        className={`overflow-hidden transition-all duration-300 ease-in-out ${
                          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
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

        {/* Enhanced final CTA section */}
        <ScrollReveal animation="scale" delay={450}>
          <section className="bg-gradient-to-br from-accent-gold via-accent-gold/95 to-accent-gold/90 px-6 md:px-12 py-20 md:py-28">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl lg:text-5xl leading-tight text-elegant-blue mb-6 font-bold">
                Your Soul Has Been Waiting for This Moment
              </h2>

              <p className="text-lg md:text-xl leading-relaxed text-elegant-blue/90 mb-8 max-w-2xl mx-auto">
                When you find your patterns repeating, when your inner voice whispers louder, it's not coincidence —
                it's your Soul saying, "It's time to remember who you are."
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Button className="bg-elegant-blue text-warm-beige hover:bg-deep-blue px-10 py-5 text-lg font-semibold rounded-lg shadow-xl transition-all duration-300 hover:shadow-2xl hover:scale-105 btn-hover-effect">
                  Book Your Reading Now
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
        <Footer />
      </div>
    </>
  )
}
