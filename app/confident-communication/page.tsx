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

export default function ConfidentCommunicationPage() {
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
                    <p className="text-lg md:text-xl text-accent-gold animate-fadeInUp">Heal Your Voice</p>

                    <h1 className="text-4xl md:text-5xl lg:text-6xl leading-tight text-elegant-blue animate-fadeInUp text-balance">
                      Confident Communication
                    </h1>

                    <p className="text-2xl md:text-3xl text-accent-gold/90 font-semibold animate-fadeInUp text-balance">
                      Speak Your Truth. Lead with Grace. Influence with Soul.
                    </p>

                    <p className="text-lg md:text-xl leading-relaxed text-elegant-blue/80 animate-fadeInUp">
                      Whether you are a woman entrepreneur, founder, leader, coach, healer, or mother — your voice is
                      your power. But so many women carry childhood wounds, conditioning, or subconscious fears that
                      block their natural ability to communicate confidently.
                    </p>
                  </div>

                  <div className="space-y-4 animate-fadeInUp">
                    <Link href="/contact">
                      <Button className="bg-accent-gold text-elegant-blue hover:bg-accent-gold/90 px-8 py-4 text-lg font-semibold rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-105 btn-hover-effect">
                        Book Discovery Call
                      </Button>
                    </Link>

                    <p className="text-sm text-elegant-blue/60">One-on-One Sessions | Online & In-Person</p>
                  </div>
                </div>

                {/* Right Column - Image */}
                <div className="space-y-6 animate-scaleIn">
                  <div className="relative hover-lift">
                    <Image
                      src="/images/confidence-20communication.jpeg"
                      alt="Confident Communication - Woman speaking with confidence and authenticity"
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

        {/* What Is Confident Communication Section */}
        <ScrollReveal animation="fade" delay={100}>
          <section className="px-6 md:px-12 py-16 md:py-20 bg-white/50">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl lg:text-5xl leading-tight mb-6 text-elegant-blue">
                What Is Confident Communication?
              </h2>

              <p className="text-xl md:text-2xl text-elegant-blue/90 mb-8 leading-relaxed">
                It is not just speaking well. It is speaking from your healed inner self — without fear, guilt, shame,
                or overthinking.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left mt-12">
                <div className="flex items-start space-x-3">
                  <span className="text-accent-gold text-xl mt-1">✓</span>
                  <p className="text-lg text-elegant-blue/80">You say what you truly feel</p>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-accent-gold text-xl mt-1">✓</span>
                  <p className="text-lg text-elegant-blue/80">You express your needs without apologizing</p>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-accent-gold text-xl mt-1">✓</span>
                  <p className="text-lg text-elegant-blue/80">You speak with clarity without feeling 'too much'</p>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-accent-gold text-xl mt-1">✓</span>
                  <p className="text-lg text-elegant-blue/80">
                    You stop shrinking, pleasing, or doubting your intuition
                  </p>
                </div>
                <div className="flex items-start space-x-3 md:col-span-2">
                  <span className="text-accent-gold text-xl mt-1">✓</span>
                  <p className="text-lg text-elegant-blue/80">You lead conversations with presence, power, and peace</p>
                </div>
              </div>

              <p className="text-lg text-accent-gold/90 mt-10 italic">
                This is communication that comes from a regulated nervous system, healed inner child, and aligned
                feminine energy.
              </p>
            </div>
          </section>
        </ScrollReveal>

        {/* Why Women Struggle Section */}
        <ScrollReveal animation="fade" delay={200}>
          <section className="bg-elegant-blue/5 backdrop-blur-sm px-6 md:px-12 py-16 md:py-24">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl lg:text-5xl leading-tight mb-4 text-elegant-blue">
                  Why Women Struggle With Communication
                </h2>
                <p className="text-lg text-elegant-blue/80 max-w-2xl mx-auto">
                  Most communication issues are NOT about vocabulary or language. They come from deeper wounds.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Inner Child Wounds */}
                <div className="space-y-4 bg-white/80 p-8 rounded-xl border-2 border-accent-gold/20 hover:border-accent-gold/40 transition-all duration-300">
                  <h3 className="text-2xl font-semibold text-accent-gold mb-4">Inner Child Wounds</h3>
                  <ul className="space-y-3 text-elegant-blue/80">
                    <li className="flex items-start">
                      <span className="mr-2">•</span>
                      <span>Fear of speaking up</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2">•</span>
                      <span>Fear of being judged</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2">•</span>
                      <span>Difficulty saying "No"</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2">•</span>
                      <span>Feeling invisible or misunderstood</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2">•</span>
                      <span>Overexplaining to avoid conflict</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2">•</span>
                      <span>Staying silent to keep peace</span>
                    </li>
                  </ul>
                </div>

                {/* Mother Wound Patterns */}
                <div className="space-y-4 bg-white/80 p-8 rounded-xl border-2 border-accent-gold/20 hover:border-accent-gold/40 transition-all duration-300">
                  <h3 className="text-2xl font-semibold text-accent-gold mb-4">Mother Wound Patterns</h3>
                  <ul className="space-y-3 text-elegant-blue/80">
                    <li className="flex items-start">
                      <span className="mr-2">•</span>
                      <span>You learnt to suppress emotions</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2">•</span>
                      <span>You were taught to 'not talk back'</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2">•</span>
                      <span>You fear being 'too emotional'</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2">•</span>
                      <span>You repeat your mother's patterns in relationships & business</span>
                    </li>
                  </ul>
                </div>

                {/* Father Wound Patterns */}
                <div className="space-y-4 bg-white/80 p-8 rounded-xl border-2 border-accent-gold/20 hover:border-accent-gold/40 transition-all duration-300">
                  <h3 className="text-2xl font-semibold text-accent-gold mb-4">Father Wound Patterns</h3>
                  <ul className="space-y-3 text-elegant-blue/80">
                    <li className="flex items-start">
                      <span className="mr-2">•</span>
                      <span>Fear of authority</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2">•</span>
                      <span>Fear of conflict</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2">•</span>
                      <span>Not trusting your own decisions</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2">•</span>
                      <span>Feeling unheard or dismissed</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2">•</span>
                      <span>Seeking validation from male figures or bosses</span>
                    </li>
                  </ul>
                </div>

                {/* Ancestral Patterns */}
                <div className="space-y-4 bg-white/80 p-8 rounded-xl border-2 border-accent-gold/20 hover:border-accent-gold/40 transition-all duration-300">
                  <h3 className="text-2xl font-semibold text-accent-gold mb-4">Ancestral / Generational Patterns</h3>
                  <ul className="space-y-3 text-elegant-blue/80">
                    <li className="flex items-start">
                      <span className="mr-2">•</span>
                      <span>Women not allowed to speak freely</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2">•</span>
                      <span>Patriarchal conditioning</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2">•</span>
                      <span>"Good girls don't question" beliefs</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2">•</span>
                      <span>Generational suppression of feminine wisdom</span>
                    </li>
                  </ul>
                </div>
              </div>

              <p className="text-center text-lg text-elegant-blue/80 mt-10 max-w-3xl mx-auto italic">
                All these sit in the subconscious mind and silently shape how you communicate today.
              </p>
            </div>
          </section>
        </ScrollReveal>

        {/* Who This Is For Section */}
        <ScrollReveal animation="fade" delay={250}>
          <section className="px-6 md:px-12 py-16 md:py-20 bg-gradient-to-b from-white/30 to-accent-gold/10">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl lg:text-5xl leading-tight mb-12 text-center text-elegant-blue">
                Who This Is For
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white/70 p-6 rounded-xl border border-accent-gold/30 hover:shadow-lg transition-all duration-300">
                  <h3 className="text-xl font-semibold text-accent-gold mb-3">Women Entrepreneurs</h3>
                  <p className="text-elegant-blue/80">
                    Who struggle to communicate boundaries, pitch confidently, negotiate, or express their value.
                  </p>
                </div>

                <div className="bg-white/70 p-6 rounded-xl border border-accent-gold/30 hover:shadow-lg transition-all duration-300">
                  <h3 className="text-xl font-semibold text-accent-gold mb-3">Women Leaders / Founders</h3>
                  <p className="text-elegant-blue/80">
                    Who are leading teams but feel unheard, overpowered, or doubted.
                  </p>
                </div>

                <div className="bg-white/70 p-6 rounded-xl border border-accent-gold/30 hover:shadow-lg transition-all duration-300">
                  <h3 className="text-xl font-semibold text-accent-gold mb-3">Mothers</h3>
                  <p className="text-elegant-blue/80">
                    Who wish to break patterns and raise emotionally secure children.
                  </p>
                </div>

                <div className="bg-white/70 p-6 rounded-xl border border-accent-gold/30 hover:shadow-lg transition-all duration-300">
                  <h3 className="text-xl font-semibold text-accent-gold mb-3">Coaches, Healers & Influencers</h3>
                  <p className="text-elegant-blue/80">Who want to speak with clarity, authority, and authenticity.</p>
                </div>
              </div>
            </div>
          </section>
        </ScrollReveal>

        {/* Video Insights Section */}
        <ScrollReveal animation="fade" delay={300}>
          <section className="px-6 md:px-12 py-16 md:py-20 bg-elegant-blue/5">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-3xl md:text-4xl lg:text-5xl leading-tight mb-12 text-center text-elegant-blue">
                Understanding Communication Blocks
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white/80 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="aspect-[9/16] relative">
                    <iframe
                      className="absolute inset-0 w-full h-full"
                      src="https://www.youtube.com/embed/rPmH6MUvxZk"
                      title="Communication Healing Insight 1"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </div>
                </div>

                <div className="bg-white/80 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="aspect-[9/16] relative">
                    <iframe
                      className="absolute inset-0 w-full h-full"
                      src="https://www.youtube.com/embed/GfxVJRDzBTY"
                      title="Communication Healing Insight 2"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </div>
                </div>

                <div className="bg-white/80 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="aspect-[9/16] relative">
                    <iframe
                      className="absolute inset-0 w-full h-full"
                      src="https://www.youtube.com/embed/xB5xFwSc74s"
                      title="Communication Healing Insight 3"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>
        </ScrollReveal>

        {/* What We Work On Section */}
        <ScrollReveal animation="fade" delay={350}>
          <section className="px-6 md:px-12 py-16 md:py-20 bg-white/40">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-3xl md:text-4xl lg:text-5xl leading-tight mb-6 text-center text-elegant-blue">
                What We Work On
              </h2>
              <p className="text-lg text-center text-elegant-blue/80 mb-12">
                During the Confident Communication healing & coaching
              </p>

              <div className="space-y-6">
                <div className="bg-gradient-to-r from-accent-gold/10 to-accent-gold/5 p-6 rounded-xl border-l-4 border-accent-gold">
                  <h3 className="text-xl font-semibold text-elegant-blue mb-2">
                    <span className="text-accent-gold mr-2">1.</span>
                    Inner Child Healing for the Voice
                  </h3>
                  <p className="text-elegant-blue/80 ml-7">Releasing shame, fear, self-doubt, emotional suppression.</p>
                </div>

                <div className="bg-gradient-to-r from-accent-gold/10 to-accent-gold/5 p-6 rounded-xl border-l-4 border-accent-gold">
                  <h3 className="text-xl font-semibold text-elegant-blue mb-2">
                    <span className="text-accent-gold mr-2">2.</span>
                    Nervous System Regulation
                  </h3>
                  <p className="text-elegant-blue/80 ml-7">Healing freeze-response that blocks expression.</p>
                </div>

                <div className="bg-gradient-to-r from-accent-gold/10 to-accent-gold/5 p-6 rounded-xl border-l-4 border-accent-gold">
                  <h3 className="text-xl font-semibold text-elegant-blue mb-2">
                    <span className="text-accent-gold mr-2">3.</span>
                    Feminine & Masculine Communication Balance
                  </h3>
                  <p className="text-elegant-blue/80 ml-7">
                    From over-giving to holding power. From people-pleasing to clarity.
                  </p>
                </div>

                <div className="bg-gradient-to-r from-accent-gold/10 to-accent-gold/5 p-6 rounded-xl border-l-4 border-accent-gold">
                  <h3 className="text-xl font-semibold text-elegant-blue mb-2">
                    <span className="text-accent-gold mr-2">4.</span>
                    Energetic Clearing
                  </h3>
                  <p className="text-elegant-blue/80 ml-7">Removing ancestral and past-life blocks around speaking.</p>
                </div>

                <div className="bg-gradient-to-r from-accent-gold/10 to-accent-gold/5 p-6 rounded-xl border-l-4 border-accent-gold">
                  <h3 className="text-xl font-semibold text-elegant-blue mb-2">
                    <span className="text-accent-gold mr-2">5.</span>
                    Soul Alignment
                  </h3>
                  <p className="text-elegant-blue/80 ml-7">Activating your authentic voice & leadership frequency.</p>
                </div>
              </div>
            </div>
          </section>
        </ScrollReveal>

        {/* What You Will Experience Section */}
        <ScrollReveal animation="fade" delay={400}>
          <section className="bg-elegant-blue/5 px-6 md:px-12 py-16 md:py-20">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl lg:text-5xl leading-tight mb-12 text-center text-elegant-blue">
                What You Will Experience
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  "Identify your communication blockages",
                  "Understand their root cause",
                  "Heal key inner child triggers",
                  "Release fear of judgment and rejection",
                  "Rebalance feminine–masculine communication patterns",
                  "Speak with calm confidence",
                  "Express needs and boundaries clearly",
                  "Show up as a powerful, authentic woman",
                ].map((item, index) => (
                  <div
                    key={index}
                    className="flex items-start space-x-3 bg-white/70 p-5 rounded-lg border border-accent-gold/20 hover:border-accent-gold/40 transition-all duration-300"
                  >
                    <div className="w-6 h-6 rounded-full bg-accent-gold/20 flex items-center justify-center flex-shrink-0">
                      <div className="w-2 h-2 rounded-full bg-accent-gold"></div>
                    </div>
                    <p className="text-lg text-elegant-blue/90">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </ScrollReveal>

        {/* Transformations Section */}
        <ScrollReveal animation="fade" delay={450}>
          <section className="px-6 md:px-12 py-16 md:py-20 bg-gradient-to-b from-white/30 to-accent-gold/10">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl lg:text-5xl leading-tight mb-6 text-center text-elegant-blue">
                Transformations You Can Expect
              </h2>
              <p className="text-lg text-center text-elegant-blue/80 mb-12">Clients often experience:</p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {[
                  "Clearer conversations with partners & family",
                  "Better decision-making",
                  "Improved leadership presence",
                  "Ability to say 'No' without guilt",
                  "Stronger boundaries",
                  "Speaking with emotional maturity",
                  "Confidence in meetings and stage presence",
                  "More respect professionally & personally",
                ].map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center space-x-3 bg-white/80 p-4 rounded-lg shadow-sm hover:shadow-md transition-all duration-300"
                  >
                    <div className="w-8 h-8 rounded-full bg-accent-gold/10 flex items-center justify-center flex-shrink-0">
                      <div className="w-2 h-2 rounded-full bg-accent-gold"></div>
                    </div>
                    <p className="text-elegant-blue/90">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </ScrollReveal>

        {/* CTA Section */}
        <ScrollReveal animation="scale" delay={500}>
          <section className="bg-accent-gold px-6 md:px-12 py-16 md:py-24">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl lg:text-5xl leading-tight text-elegant-blue mb-6 font-bold">
                Ready to Heal Your Voice and Rise Into Your Feminine Leadership?
              </h2>

              <p className="text-lg md:text-xl leading-relaxed text-elegant-blue/90 mb-8 max-w-2xl mx-auto">
                Transform your communication from the inside out. Speak with authenticity, power, and grace.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fadeInUp">
                <Link href="/contact">
                  <Button className="bg-elegant-blue text-warm-beige hover:bg-deep-blue px-8 py-4 text-lg font-semibold rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-105 btn-hover-effect">
                    Book Discovery Call
                  </Button>
                </Link>
                <a
                  href="https://wa.me/918547009801?text=Hello!%20I'm%20interested%20in%20learning%20more%20about%20your%20Confident%20Communication%20program."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block"
                >
                  <Button className="bg-white text-elegant-blue hover:bg-white/90 px-8 py-4 text-lg font-semibold rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-105 border-2 border-elegant-blue">
                    Connect on WhatsApp
                  </Button>
                </a>
              </div>
            </div>
          </section>
        </ScrollReveal>

        <WhatsAppButton />

      </div>
    </>
  )
}
