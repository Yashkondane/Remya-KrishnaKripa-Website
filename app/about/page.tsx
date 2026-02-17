"use client"

import { Libre_Baskerville } from "next/font/google"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"
import Footer from "../../components/footer"
import SimplePreloader from "../../components/simple-preloader"
import WhatsAppButton from "../../components/whatsapp-button"
import ScrollReveal from "../../components/scroll-reveal"

const libreBaskerville = Libre_Baskerville({
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
  display: "swap",
})

export default function AboutPage() {
  return (
    <>
      <SimplePreloader />
      <div className={`min-h-screen beige-bg text-elegant-blue ${libreBaskerville.className}`}>
        {/* Navigation */}
        <nav className="flex items-center justify-between px-6 py-4 md:px-12 md:py-6 bg-elegant-blue/10 backdrop-blur-sm animate-fadeInDown">
          <Link href="/" className="text-xl md:text-2xl text-accent-gold animate-pulse-slow">
            AkashicReading.
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            <Link
              href="/about"
              className="text-accent-gold font-semibold transition-all duration-300 hover:scale-105 animate-fadeInDown stagger-1"
            >
              About
            </Link>
            <Link
              href="/services"
              className="hover:text-accent-gold transition-all duration-300 hover:scale-105 animate-fadeInDown stagger-2"
            >
              Services
            </Link>
            <Link
              href="/my-book"
              className="hover:text-accent-gold transition-all duration-300 hover:scale-105 animate-fadeInDown stagger-3"
            >
              My Book
            </Link>
            <Link
              href="/journal"
              className="hover:text-accent-gold transition-all duration-300 hover:scale-105 animate-fadeInDown stagger-4"
            >
              Journal
            </Link>
            <Link
              href="/contact"
              className="hover:text-accent-gold transition-all duration-300 hover:scale-105 animate-fadeInDown stagger-5"
            >
              Contact
            </Link>
          </div>

          <Button className="bg-elegant-blue text-warm-beige hover:bg-deep-blue px-6 py-2 rounded-lg shadow-md transition-all duration-300 hover:scale-105 btn-hover-effect animate-fadeInDown stagger-6">
            Book Now
          </Button>
        </nav>

        {/* Header Section with Photo */}
        <ScrollReveal animation="fade">
          <section className="px-6 md:px-12 py-16 md:py-24">
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                {/* Left Column - Text */}
                <div className="space-y-8 order-2 lg:order-1">
                  <p className="text-sm md:text-base text-accent-gold uppercase tracking-wider font-semibold animate-fadeInUp stagger-1">
                    About
                  </p>

                  <h1 className="text-4xl md:text-5xl lg:text-6xl leading-tight text-elegant-blue animate-fadeInUp stagger-2">
                    Hi, I'm <span className="text-accent-gold text-glow animate-float">Remya</span>
                  </h1>

                  <p className="text-lg md:text-xl italic text-elegant-blue/80 animate-fadeInUp stagger-3">
                    "Every soul carries within it the wisdom of ages. My purpose is to help you unlock that sacred
                    knowledge and step into your highest potential."
                  </p>
                </div>

                {/* Right Column - Photo */}
                <div className="order-1 lg:order-2 animate-scaleIn stagger-2">
                  <div className="relative max-w-md mx-auto hover-lift">
                    {/* Rounded Photo Container with 9:16 Aspect Ratio */}
                    <div className="relative w-full aspect-[9/16] rounded-3xl overflow-hidden shadow-2xl bg-accent-gold/20 backdrop-blur-sm border-4 border-accent-gold/50 transition-all duration-500 hover:border-accent-gold/80">
                      <Image
                        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ChatGPT%20Image%20Feb%2017%2C%202026%2C%2008_27_17%20PM_cropped_processed_by_imagy%20%281%29-Qz73h9cv36RYoBG7T5ve6o10Pe0v7B.png"
                        alt="Remya - Spiritual Guide"
                        fill
                        className="object-cover object-center"
                        priority
                      />
                    </div>

                    {/* Decorative Elements */}
                    <div className="absolute -top-4 -right-4 w-24 h-24 bg-accent-gold/20 rounded-full blur-xl animate-float stagger-1"></div>
                    <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-elegant-blue/20 rounded-full blur-2xl animate-float stagger-3"></div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </ScrollReveal>

        {/* Introduction Split Column */}
        <ScrollReveal animation="slide-up" delay={200}>
          <section className="px-6 md:px-12 py-16 md:py-24 bg-elegant-blue text-warm-beige backdrop-blur-sm">
            <div className="max-w-7xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
                {/* Left Column */}
                <div className="space-y-6 animate-slideInLeft">
                  <h2 className="text-2xl md:text-3xl font-bold text-accent-gold mb-6 animate-fadeInUp stagger-1">
                    How I Got Here
                  </h2>

                  <p className="text-lg leading-relaxed mb-6 text-warm-beige/90 animate-fadeInUp stagger-2">
                    My journey into spiritual guidance began with two powerful questions that changed everything:
                  </p>

                  <div className="bg-accent-gold/20 p-6 rounded-lg border-l-4 border-accent-gold backdrop-blur-sm hover-lift animate-fadeInUp stagger-3">
                    <p className="text-lg italic text-accent-gold font-semibold">
                      "Are you truly connected to your soul's purpose?"
                    </p>
                    <p className="text-lg italic text-accent-gold font-semibold mt-2">
                      "Do you feel aligned with your spiritual path?"
                    </p>
                  </div>
                </div>

                {/* Right Column */}
                <div className="space-y-6 animate-slideInRight">
                  <p className="text-lg leading-relaxed text-warm-beige/90 animate-fadeInUp stagger-1">
                    For years, I navigated the corporate world as an Agile IT Leader in multinational companies,
                    climbing the ladder of success yet feeling spiritually disconnected. Despite professional
                    achievements, I experienced a profound sense of stagnancy—a calling from within that couldn't be
                    ignored.
                  </p>

                  <p className="text-lg leading-relaxed text-warm-beige/90 animate-fadeInUp stagger-2">
                    This inner restlessness led me to discover my true passion: guiding souls through the sacred wisdom
                    of the Akashic Records. What began as personal spiritual exploration transformed into a decade-long
                    journey of helping others unlock their divine blueprint and heal their deepest wounds.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </ScrollReveal>

        {/* My Coaching Story */}
        <ScrollReveal animation="fade" delay={300}>
          <section className="beige-bg px-6 md:px-12 py-16 md:py-24">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-accent-gold mb-8 text-center animate-fadeInUp">
                My Spiritual Journey
              </h2>

              <div className="space-y-8">
                <p className="text-lg leading-relaxed text-elegant-blue animate-fadeInUp stagger-1">
                  My awakening began during a particularly challenging period in my corporate career. Despite external
                  success, I felt a profound emptiness—a soul-deep knowing that there was something more meaningful I
                  was meant to do. This spiritual crisis became my greatest gift.
                </p>

                <div className="bg-elegant-blue/10 p-8 rounded-lg backdrop-blur-sm hover-lift animate-scaleIn stagger-2 border border-accent-gold/30">
                  <p className="text-xl italic text-accent-gold font-semibold">
                    "The moment I first accessed the Akashic Records, I knew I had found my calling. The profound wisdom
                    and healing that flowed through was unlike anything I had ever experienced."
                  </p>
                </div>

                <p className="text-lg leading-relaxed text-elegant-blue animate-fadeInUp stagger-3">
                  Through years of dedicated study, meditation, and practice, I developed the ability to access the{" "}
                  <strong className="text-accent-gold">Akashic Records</strong>—the energetic archive of every soul's
                  journey. This sacred practice revealed not only my own life purpose but also my gift for helping
                  others navigate their spiritual path.
                </p>

                <p className="text-lg leading-relaxed text-elegant-blue animate-fadeInUp stagger-4">
                  What started as personal healing evolved into a profound calling to serve others. I discovered that my
                  corporate background, combined with spiritual wisdom, created a unique approach to{" "}
                  <strong className="text-accent-gold">soul-level transformation</strong>. Today, I guide individuals
                  through their own awakening, helping them release karmic patterns, heal soul wounds, and step into
                  their authentic power.
                </p>

                <p className="text-lg leading-relaxed text-elegant-blue animate-fadeInUp stagger-5">
                  Each session I facilitate is a sacred space where{" "}
                  <strong className="text-accent-gold">healing, clarity, and transformation</strong> naturally unfold.
                  My clients don't just receive guidance—they experience profound shifts that ripple through every
                  aspect of their lives, empowering them to live from their highest potential.
                </p>
              </div>
            </div>
          </section>
        </ScrollReveal>

        {/* My Story: From Corporate to Akashic Realms */}
        <ScrollReveal animation="fade" delay={200}>
          <section className="beige-bg px-6 md:px-12 py-16 md:py-24">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-accent-gold mb-8 text-center animate-fadeInUp">
                My Story: From Corporate Boardrooms to Akashic Realms
              </h2>

              <div className="space-y-6">
                <p className="text-lg leading-relaxed text-elegant-blue animate-fadeInUp stagger-1">
                  If you met me a few years ago, you would've seen a corporate professional who "had it all." A
                  high-paying corporate career, leadership roles in IT, and a life that looked successful from the
                  outside. But inside — I was exhausted. Tired of the stressful career, wanting to help others. My soul
                  kept whispering… "This isn't it."
                </p>

                <p className="text-lg leading-relaxed text-elegant-blue animate-fadeInUp stagger-2">
                  No matter how much I achieved, something deeper was missing — clarity, peace, fulfillment. It felt
                  like I was ticking boxes, but not living my soul purpose. That inner nudge turned into a loud call —
                  and I knew I couldn't ignore it anymore. So I took a leap of faith… I quit my corporate job, not
                  knowing where the road would lead — only trusting my inner voice and my mentor.
                </p>

                <div className="bg-accent-gold/20 p-8 rounded-lg backdrop-blur-sm hover-lift animate-fadeInUp stagger-3 border border-accent-gold/30">
                  <p className="text-lg italic text-accent-gold font-semibold">
                    "That journey led me to what I now know was my soul's calling. ✨ To help others reconnect with
                    their soul wisdom, heal what's unseen, and rise into their purpose."
                  </p>
                </div>
              </div>
            </div>
          </section>
        </ScrollReveal>

        {/* The Turning Point */}
        <ScrollReveal animation="slide-up" delay={200}>
          <section className="bg-elegant-blue text-warm-beige px-6 md:px-12 py-16 md:py-24">
            <div className="max-w-4xl mx-auto">
              <h3 className="text-2xl md:text-3xl font-bold text-accent-gold mb-8 animate-fadeInUp">
                🌌 The Turning Point
              </h3>

              <div className="space-y-6">
                <p className="text-lg leading-relaxed animate-fadeInUp stagger-1">
                  During my own spiritual awakening, I discovered the Akashic Records — the soul library that holds
                  every lifetime's memory, lesson, and gift. Through this divine tool, I began to understand the why
                  behind every struggle, pattern, and relationship. Why certain wounds repeat. Why we meet certain
                  people. Why our career or wealth feels stuck even when we're trying everything.
                </p>

                <p className="text-lg leading-relaxed animate-fadeInUp stagger-2">
                  The answers didn't just bring understanding — they brought healing. It was as if my soul handed me a
                  map that said, "Now that you remember who you are, go help others remember too." And that's exactly
                  what I've been doing since.
                </p>
              </div>
            </div>
          </section>
        </ScrollReveal>

        {/* My Work Today */}
        <ScrollReveal animation="fade" delay={200}>
          <section className="beige-bg px-6 md:px-12 py-16 md:py-24">
            <div className="max-w-4xl mx-auto">
              <h3 className="text-2xl md:text-3xl font-bold text-accent-gold mb-8 animate-fadeInUp">
                💖 My Work Today
              </h3>

              <div className="space-y-6">
                <p className="text-lg leading-relaxed text-elegant-blue animate-fadeInUp stagger-1">
                  Today, I blend spiritual wisdom and energy healing with real-world strategy and emotional intelligence
                  — guiding founders, professionals, and purpose-driven souls to heal, align, and grow. My sessions and
                  programs combine:
                </p>

                <ul className="space-y-3 ml-6 animate-fadeInUp stagger-2">
                  <li className="text-lg text-elegant-blue flex items-start">
                    <span className="text-accent-gold mr-4 font-bold">•</span>
                    <span>
                      <strong className="text-accent-gold">Akashic Record Readings</strong> – to access your soul's
                      truth and clear karmic patterns
                    </span>
                  </li>
                  <li className="text-lg text-elegant-blue flex items-start">
                    <span className="text-accent-gold mr-4 font-bold">•</span>
                    <span>
                      <strong className="text-accent-gold">Inner Child & Ancestral Healing</strong> – to release
                      subconscious blockages
                    </span>
                  </li>
                  <li className="text-lg text-elegant-blue flex items-start">
                    <span className="text-accent-gold mr-4 font-bold">•</span>
                    <span>
                      <strong className="text-accent-gold">Relationship Healing</strong> – to bring peace to emotional
                      connections
                    </span>
                  </li>
                  <li className="text-lg text-elegant-blue flex items-start">
                    <span className="text-accent-gold mr-4 font-bold">•</span>
                    <span>
                      <strong className="text-accent-gold">Twinflame Coaching</strong> - to navigate the intense
                      awakening journey through eternal soul love
                    </span>
                  </li>
                  <li className="text-lg text-elegant-blue flex items-start">
                    <span className="text-accent-gold mr-4 font-bold">•</span>
                    <span>
                      <strong className="text-accent-gold">Energy Work & Chakra Balancing</strong> – to restore flow in
                      your system
                    </span>
                  </li>
                  <li className="text-lg text-elegant-blue flex items-start">
                    <span className="text-accent-gold mr-4 font-bold">•</span>
                    <span>
                      <strong className="text-accent-gold">Career & Wealth Coaching</strong> – to create outer success
                      aligned with your inner truth
                    </span>
                  </li>
                  <li className="text-lg text-elegant-blue flex items-start">
                    <span className="text-accent-gold mr-4 font-bold">•</span>
                    <span>
                      <strong className="text-accent-gold">Confident Communication</strong> - to break your inner
                      barriers that block confidence
                    </span>
                  </li>
                </ul>

                <div className="bg-elegant-blue/10 p-6 rounded-lg mt-6 border-l-4 border-accent-gold animate-fadeInUp stagger-3">
                  <p className="text-lg text-elegant-blue italic font-semibold">
                    "I believe healing and growth are not two journeys — they are one. When you heal, you rise. When you
                    rise, abundance naturally follows."
                  </p>
                </div>
              </div>
            </div>
          </section>
        </ScrollReveal>

        {/* What We Offer - Services Cards */}
        <ScrollReveal animation="slide-up" delay={400}>
          <section className="beige-bg px-6 md:px-12 py-16 md:py-24">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-accent-gold mb-12 text-center animate-fadeInUp">
                What We Offer
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Service Card 1 */}
                <div className="group bg-white backdrop-blur-sm p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer hover:scale-105 border-2 border-elegant-blue/20 hover:border-accent-gold/70 animate-fadeInUp stagger-1">
                  <h3 className="text-2xl font-bold mb-4 text-accent-gold group-hover:text-accent-gold transition-colors duration-500">
                    Akashic Records Reading
                  </h3>
                  <p className="text-lg leading-relaxed text-elegant-blue group-hover:text-elegant-blue transition-colors duration-500">
                    Access your soul's eternal records to understand your life purpose, past experiences, and spiritual
                    contracts. Gain clarity on recurring patterns and unlock your divine blueprint.
                  </p>
                </div>

                {/* Service Card 2 */}
                <div className="group bg-white backdrop-blur-sm p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer hover:scale-105 border-2 border-elegant-blue/20 hover:border-accent-gold/70 animate-fadeInUp stagger-2">
                  <h3 className="text-2xl font-bold mb-4 text-accent-gold group-hover:text-accent-gold transition-colors duration-500">
                    Soul Healing Sessions
                  </h3>
                  <p className="text-lg leading-relaxed text-elegant-blue group-hover:text-elegant-blue transition-colors duration-500">
                    Deep energetic healing that addresses soul wounds, karmic patterns, and emotional blockages. Release
                    what no longer serves you and step into your authentic power.
                  </p>
                </div>

                {/* Service Card 3 */}
                <div className="group bg-white backdrop-blur-sm p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer hover:scale-105 border-2 border-elegant-blue/20 hover:border-accent-gold/70 animate-fadeInUp stagger-3">
                  <h3 className="text-2xl font-bold mb-4 text-accent-gold group-hover:text-accent-gold transition-colors duration-500">
                    Spiritual Mentorship
                  </h3>
                  <p className="text-lg leading-relaxed text-elegant-blue group-hover:text-elegant-blue transition-colors duration-500">
                    Ongoing guidance for your spiritual journey through personalized mentorship. Develop your intuitive
                    abilities and navigate your awakening with confidence.
                  </p>
                </div>

                {/* Service Card 4 */}
                <div className="group bg-white backdrop-blur-sm p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer hover:scale-105 border-2 border-elegant-blue/20 hover:border-accent-gold/70 animate-fadeInUp stagger-4">
                  <h3 className="text-2xl font-bold mb-4 text-accent-gold group-hover:text-accent-gold transition-colors duration-500">
                    Energy Clearing & Protection
                  </h3>
                  <p className="text-lg leading-relaxed text-elegant-blue group-hover:text-elegant-blue transition-colors duration-500">
                    Clear negative energies and psychic debris. Learn powerful protection techniques to maintain your
                    energetic sovereignty and spiritual clarity.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </ScrollReveal>

        {/* Credentials Section */}
        <ScrollReveal animation="fade" delay={200}>
          <section className="bg-elegant-blue px-6 md:px-12 py-16 md:py-24">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-accent-gold mb-8 text-center animate-fadeInUp">
                My Credentials
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Spiritual Credentials */}
                <div className="space-y-6 animate-slideInLeft">
                  <h3 className="text-xl font-semibold text-accent-gold mb-4">Spiritual Certifications</h3>
                  <ul className="space-y-3">
                    <li className="flex items-center space-x-3 animate-fadeInUp stagger-1">
                      <div className="w-2 h-2 bg-accent-gold rounded-full animate-pulse-slow"></div>
                      <span className="text-lg text-white">Certified Akashic Records Reader</span>
                    </li>
                    <li className="flex items-center space-x-3 animate-fadeInUp stagger-2">
                      <div className="w-2 h-2 bg-accent-gold rounded-full animate-pulse-slow"></div>
                      <span className="text-lg text-white">Energy Healing Practitioner</span>
                    </li>
                    <li className="flex items-center space-x-3 animate-fadeInUp stagger-3">
                      <div className="w-2 h-2 bg-accent-gold rounded-full animate-pulse-slow"></div>
                      <span className="text-lg text-white">Spiritual Mentorship Certification</span>
                    </li>
                  </ul>
                </div>

                {/* Professional Background */}
                <div className="space-y-6 animate-slideInRight">
                  <h3 className="text-xl font-semibold text-accent-gold mb-4">Professional Background</h3>
                  <ul className="space-y-3">
                    <li className="flex items-center space-x-3 animate-fadeInUp stagger-1">
                      <div className="w-2 h-2 bg-accent-gold rounded-full animate-pulse-slow"></div>
                      <span className="text-lg text-white">PMP® (Project Management Professional)</span>
                    </li>
                    <li className="flex items-center space-x-3 animate-fadeInUp stagger-2">
                      <div className="w-2 h-2 bg-accent-gold rounded-full animate-pulse-slow"></div>
                      <span className="text-lg text-white">CSM® (Certified Scrum Master)</span>
                    </li>
                    <li className="flex items-center space-x-3 animate-fadeInUp stagger-3">
                      <div className="w-2 h-2 bg-accent-gold rounded-full animate-pulse-slow"></div>
                      <span className="text-lg text-white">ITIL & ISTQB Certified</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
        </ScrollReveal>

        {/* Beyond the Coach */}
        <ScrollReveal animation="scale" delay={300}>
          <section className="bg-white px-6 md:px-12 py-16 md:py-24">
            <div className="max-w-4xl mx-auto text-center bg-elegant-blue/5 backdrop-blur-sm rounded-2xl p-8 border border-accent-gold/20 animate-scaleIn">
              <h2 className="text-3xl md:text-4xl font-bold text-accent-gold mb-8 animate-fadeInUp">
                Beyond the Coach
              </h2>

              <div className="space-y-6">
                <p className="text-lg leading-relaxed text-elegant-blue text-center animate-fadeInUp stagger-1">
                  I'm grateful to serve high-achievers, celebrities, business owners, and spiritually awakened souls
                  across the world — helping them:
                </p>

                <div className="bg-elegant-blue/5 p-8 rounded-lg border border-accent-gold/20 animate-fadeInUp stagger-2">
                  <div className="space-y-2 text-center">
                    <p className="text-lg text-elegant-blue">
                      <span className="text-accent-gold">✨</span> Heal karmic patterns
                    </p>
                    <p className="text-lg text-elegant-blue">
                      <span className="text-accent-gold">✨</span> Find peace in relationships
                    </p>
                    <p className="text-lg text-elegant-blue">
                      <span className="text-accent-gold">✨</span> Align with their purpose
                    </p>
                    <p className="text-lg text-elegant-blue">
                      <span className="text-accent-gold">✨</span> Activate wealth consciousness
                    </p>
                    <p className="text-lg text-elegant-blue">
                      <span className="text-accent-gold">✨</span> Step into their next level of freedom and fulfillment
                    </p>
                  </div>
                </div>

                <div className="bg-accent-gold/20 p-6 rounded-lg border-l-4 border-accent-gold text-center animate-fadeInUp stagger-3">
                  <p className="text-xl italic text-accent-gold font-semibold">
                    "Your soul already knows the way. You just need to listen."
                  </p>
                </div>
              </div>
            </div>
          </section>
        </ScrollReveal>

        {/* My Philosophy */}
        <ScrollReveal animation="scale" delay={200}>
          <section className="bg-elegant-blue px-6 md:px-12 py-16 md:py-24">
            <div className="max-w-4xl mx-auto">
              <h3 className="text-2xl md:text-3xl font-bold text-accent-gold mb-8 text-center animate-fadeInUp">
                🕊️ My Philosophy
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg border border-accent-gold/30 animate-fadeInUp stagger-1 hover-lift">
                  <p className="text-lg text-warm-beige leading-relaxed">
                    <span className="text-accent-gold font-bold">💫</span> I don't believe in quick fixes. I believe in
                    real transformation — the kind that touches your heart, rewires your energy, and shifts your entire
                    reality.
                  </p>
                </div>

                <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg border border-accent-gold/30 animate-fadeInUp stagger-2 hover-lift">
                  <p className="text-lg text-warm-beige leading-relaxed">
                    <span className="text-accent-gold font-bold">💫</span> I don't predict your future. I help you
                    co-create it consciously — by aligning with your soul's path.
                  </p>
                </div>

                <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg border border-accent-gold/30 animate-fadeInUp stagger-3 hover-lift">
                  <p className="text-lg text-warm-beige leading-relaxed">
                    <span className="text-accent-gold font-bold">💫</span> I don't just teach manifestation. I help you
                    heal the blocks that stop you from manifesting.
                  </p>
                </div>
              </div>

              <p className="text-lg text-warm-beige leading-relaxed text-center mt-8 animate-fadeInUp stagger-4">
                Everything I teach and channel comes from experience — from walking through the fire of transformation
                myself.
              </p>
            </div>
          </section>
        </ScrollReveal>

        {/* Today Section */}
        <ScrollReveal animation="slide-up" delay={200}>
          <section className="beige-bg px-6 md:px-12 py-16 md:py-24">
            <div className="max-w-4xl mx-auto">
              <h3 className="text-2xl md:text-3xl font-bold text-accent-gold mb-8 text-center animate-fadeInUp">
                👑 Today...
              </h3>

              <div className="space-y-6">
                <p className="text-lg leading-relaxed text-elegant-blue text-center animate-fadeInUp stagger-1">
                  I'm grateful to serve high-achievers, celebrities, business owners, and spiritually awakened souls
                  across the world — helping them:
                </p>

                <div className="bg-elegant-blue/5 p-8 rounded-lg border border-accent-gold/20 animate-fadeInUp stagger-2">
                  <div className="space-y-2 text-center">
                    <p className="text-lg text-elegant-blue">
                      <span className="text-accent-gold">✨</span> Heal karmic patterns
                    </p>
                    <p className="text-lg text-elegant-blue">
                      <span className="text-accent-gold">✨</span> Find peace in relationships
                    </p>
                    <p className="text-lg text-elegant-blue">
                      <span className="text-accent-gold">✨</span> Align with their purpose
                    </p>
                    <p className="text-lg text-elegant-blue">
                      <span className="text-accent-gold">✨</span> Activate wealth consciousness
                    </p>
                    <p className="text-lg text-elegant-blue">
                      <span className="text-accent-gold">✨</span> Step into their next level of freedom and fulfillment
                    </p>
                  </div>
                </div>

                <div className="bg-accent-gold/20 p-6 rounded-lg border-l-4 border-accent-gold text-center animate-fadeInUp stagger-3">
                  <p className="text-xl italic text-accent-gold font-semibold">
                    "Your soul already knows the way. You just need to listen."
                  </p>
                </div>
              </div>
            </div>
          </section>
        </ScrollReveal>

        {/* Final Message */}
        <ScrollReveal animation="fade" delay={200}>
          <section className="bg-elegant-blue px-6 md:px-12 py-16 md:py-24">
            <div className="max-w-4xl mx-auto text-center">
              <h3 className="text-2xl md:text-3xl font-bold text-accent-gold mb-8 animate-fadeInUp">
                💌 From My Heart to Yours
              </h3>

              <div className="space-y-6">
                <p className="text-lg leading-relaxed text-warm-beige animate-fadeInUp stagger-1">
                  Whether you're here for clarity, healing, or expansion — this space is for you. You are not behind.
                  You are exactly where your soul wants you to be.
                </p>

                <p className="text-lg leading-relaxed text-warm-beige animate-fadeInUp stagger-2">
                  If something within you is whispering "there's more for me," trust that nudge — it's your soul calling
                  you home.
                </p>

                <div className="bg-white/10 backdrop-blur-sm p-8 rounded-lg border border-accent-gold/40 animate-fadeInUp stagger-3">
                  <p className="text-lg italic text-accent-gold font-semibold">
                    ✨ Would you like to experience your Akashic Reading? DM me or click below to book your session
                    today.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </ScrollReveal>

        {/* Final CTA Section */}
        <ScrollReveal animation="slide-up" delay={200}>
          <section className="bg-accent-gold px-6 md:px-12 py-16 md:py-24">
            <div className="max-w-4xl mx-auto text-center animate-fadeInUp">
              <h2 className="text-3xl md:text-4xl lg:text-5xl leading-tight text-elegant-blue mb-6 font-bold">
                Begin Your Journey Within — With Me as Your Guide
              </h2>

              <p className="text-lg md:text-xl leading-relaxed text-elegant-blue/90 mb-8 max-w-2xl mx-auto">
                Discover the guidance and clarity your soul is seeking through a sacred Akashic connection. Each session
                is a step toward healing, understanding, and inner alignment.
              </p>

              <Button className="bg-elegant-blue text-warm-beige hover:bg-deep-blue px-8 py-4 text-lg font-semibold rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-105 btn-hover-effect">
                Book Now
              </Button>
            </div>
          </section>
        </ScrollReveal>

        <WhatsAppButton />
        <Footer />

        {/* Mobile Navigation Menu */}
        <div className="md:hidden fixed bottom-6 left-6 right-6 z-[1000] animate-slideInUp">
          <div className="bg-white/90 backdrop-blur-sm rounded-lg p-4 shadow-lg border border-elegant-blue/20">
            <div className="flex justify-around">
              <Link
                href="/about"
                className="text-sm text-elegant-blue hover:text-accent-gold transition-all duration-300 hover:scale-105"
              >
                About
              </Link>
              <Link
                href="/services"
                className="text-sm text-elegant-blue hover:text-accent-gold transition-all duration-300 hover:scale-105"
              >
                Services
              </Link>
              <Link
                href="/my-book"
                className="text-sm text-elegant-blue hover:text-accent-gold transition-all duration-300 hover:scale-105"
              >
                Book
              </Link>
              <Link
                href="/journal"
                className="text-sm text-elegant-blue hover:text-accent-gold transition-all duration-300 hover:scale-105"
              >
                Journal
              </Link>
              <Link
                href="/contact"
                className="text-sm text-elegant-blue hover:text-accent-gold transition-all duration-300 hover:scale-105"
              >
                Contact
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
