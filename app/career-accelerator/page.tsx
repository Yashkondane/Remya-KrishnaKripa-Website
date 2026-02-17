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

export default function CareerAcceleratorPage() {
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

          <Button className="bg-elegant-blue text-warm-beige hover:bg-deep-blue px-6 py-2 rounded-lg shadow-md transition-all duration-300 hover:scale-105 btn-hover-effect w-full md:w-auto">
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
                    <p className="text-lg md:text-xl text-accent-gold animate-fadeInUp">Career Mentorship</p>

                    <h1 className="text-4xl md:text-5xl lg:text-6xl leading-tight text-elegant-blue animate-fadeInUp text-balance">
                      Career Accelerator Mentorship
                    </h1>

                    <p className="text-2xl md:text-3xl text-accent-gold/90 font-semibold animate-fadeInUp text-balance">
                      Break Patterns. Rise in Your Purpose. Build a Career That Matches Your Soul.
                    </p>

                    <div className="space-y-4 text-lg md:text-xl leading-relaxed text-elegant-blue/80 animate-fadeInUp">
                      <p>You've worked hard. You've achieved so much.</p>
                      <p className="text-xl font-semibold text-elegant-blue">
                        But somewhere… there's a voice inside whispering: "I'm meant for more."
                      </p>
                      <p>
                        This offering is for corporate professionals who feel stuck, drained, or lost in their career
                        path. Whether you are a corporate professional or senior leader or aiming to be one, your career
                        growth is not just about Job application or resume.
                      </p>
                      <p className="text-accent-gold font-semibold">It is about Clarity + Strategy.</p>
                    </div>
                  </div>

                  <div className="space-y-4 animate-fadeInUp">
                    <Link href="/contact">
                      <Button className="bg-accent-gold text-elegant-blue hover:bg-accent-gold/90 px-8 py-4 text-lg font-semibold rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-105 btn-hover-effect">
                        Book Discovery Call
                      </Button>
                    </Link>

                    <p className="text-sm text-elegant-blue/60">90-Day Transformation | Online & In-Person</p>
                  </div>
                </div>

                {/* Right Column - Image */}
                <div className="space-y-6 animate-scaleIn">
                  <div className="relative hover-lift">
                    <Image
                      src="/images/carrer-20accelerator.jpeg"
                      alt="Career Accelerator Mentorship - Professional leadership and growth"
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

        {/* What Is Soul-Aligned Career Coaching Section */}
        <ScrollReveal animation="slide-up" delay={100}>
          <section className="px-6 md:px-12 py-16 md:py-20 bg-white/50">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl lg:text-5xl leading-tight mb-6 text-elegant-blue">
                What Is Soul-Aligned Career Coaching?
              </h2>

              <p className="text-xl md:text-2xl text-elegant-blue/90 mb-8 leading-relaxed">
                A unique blend of inner healing and strategic career coaching
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left mt-12">
                <div className="flex items-start space-x-3">
                  <span className="text-accent-gold text-xl mt-1">•</span>
                  <p className="text-lg text-elegant-blue/80">Career Clarity</p>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-accent-gold text-xl mt-1">•</span>
                  <p className="text-lg text-elegant-blue/80">Mindset & Identity Shifts</p>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-accent-gold text-xl mt-1">•</span>
                  <p className="text-lg text-elegant-blue/80">Career Strategy</p>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-accent-gold text-xl mt-1">•</span>
                  <p className="text-lg text-elegant-blue/80">Leadership & Communication Strengthening</p>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-accent-gold text-xl mt-1">•</span>
                  <p className="text-lg text-elegant-blue/80">
                    Visibility, Impactful Resume and Impressive Interview skills
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-accent-gold text-xl mt-1">•</span>
                  <p className="text-lg text-elegant-blue/80">Networking and job application strategies</p>
                </div>
              </div>

              <div className="mt-12 bg-accent-gold/10 p-8 rounded-xl border-2 border-accent-gold/30">
                <p className="text-xl text-elegant-blue leading-relaxed">
                  This is not regular coaching — this is{" "}
                  <span className="text-accent-gold font-semibold">root-cause transformation</span> that aligns your
                  soul with your success.
                </p>
              </div>
            </div>
          </section>
        </ScrollReveal>

        {/* Why High-Achievers Get Stuck Section */}
        <ScrollReveal animation="slide-up" delay={200}>
          <section className="bg-elegant-blue/5 backdrop-blur-sm px-6 md:px-12 py-16 md:py-24">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl lg:text-5xl leading-tight mb-4 text-elegant-blue">
                  Why High-Achievers Get Stuck in Their Career
                </h2>
                <p className="text-lg text-elegant-blue/80 max-w-3xl mx-auto">
                  It's almost never because of skills. It's because of the{" "}
                  <span className="text-accent-gold font-semibold">lack of strategy and inner patterns</span> they
                  carry.
                </p>
              </div>

              <div className="bg-white/80 p-8 md:p-10 rounded-xl border-2 border-accent-gold/20">
                <h3 className="text-2xl md:text-3xl font-semibold text-accent-gold mb-6 text-center">
                  Inner Child Patterns
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {[
                    "Fear of visibility",
                    "Self-doubt despite achievements",
                    "Difficulty asking for opportunities",
                    "People-pleasing at work",
                    "Imposter syndrome",
                    "Not feeling worthy of leadership",
                    "Overworking to prove your value",
                    "Shrinking your voice",
                    "Suppressing intuition",
                    "Avoiding conflict or negotiation",
                    "Women not allowed to dream big",
                    "Playing small",
                    "Carrying guilt for wanting success",
                    "Fear of surpassing family/partner",
                  ].map((pattern, index) => (
                    <div
                      key={index}
                      className="flex items-start space-x-2 bg-gradient-to-r from-accent-gold/5 to-transparent p-3 rounded-lg"
                    >
                      <span className="text-accent-gold mt-1">•</span>
                      <span className="text-elegant-blue/80">{pattern}</span>
                    </div>
                  ))}
                </div>
              </div>

              <p className="text-center text-lg md:text-xl text-accent-gold font-semibold mt-10">
                All these create unconscious blocks that slow you down professionally.
                <br />
                <span className="text-elegant-blue">We help them break all of it.</span>
              </p>
            </div>
          </section>
        </ScrollReveal>

        <ScrollReveal animation="fade" delay={250}>
          <section className="px-6 md:px-12 py-16 md:py-20 bg-white/40">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl md:text-4xl lg:text-5xl leading-tight mb-4 text-center text-elegant-blue">
                Understanding Career Blocks
              </h2>
              <p className="text-lg text-center text-elegant-blue/80 mb-12">
                Watch these insights on career transformation and growth
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white/70 rounded-xl overflow-hidden shadow-lg border-2 border-accent-gold/20 hover:border-accent-gold/40 transition-all duration-300">
                  <div className="aspect-[9/16] relative">
                    <iframe
                      src="https://www.youtube.com/embed/GNPqGTSWLbs"
                      title="Career Growth Insights"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="absolute inset-0 w-full h-full"
                    ></iframe>
                  </div>
                </div>

                <div className="bg-white/70 rounded-xl overflow-hidden shadow-lg border-2 border-accent-gold/20 hover:border-accent-gold/40 transition-all duration-300">
                  <div className="aspect-[9/16] relative">
                    <iframe
                      src="https://www.youtube.com/embed/b_jxs4uNp7Q"
                      title="Career Transformation"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="absolute inset-0 w-full h-full"
                    ></iframe>
                  </div>
                </div>

                <div className="bg-white/70 rounded-xl overflow-hidden shadow-lg border-2 border-accent-gold/20 hover:border-accent-gold/40 transition-all duration-300">
                  <div className="aspect-[9/16] relative">
                    <iframe
                      src="https://www.youtube.com/embed/T_tAy2QEjhI"
                      title="Professional Growth"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="absolute inset-0 w-full h-full"
                    ></iframe>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </ScrollReveal>

        {/* Who This Is For Section */}
        <ScrollReveal animation="fade" delay={300}>
          <section className="px-6 md:px-12 py-16 md:py-20 bg-gradient-to-b from-white/30 to-accent-gold/10">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl lg:text-5xl leading-tight mb-12 text-center text-elegant-blue">
                Who This Is For
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white/70 p-6 rounded-xl border border-accent-gold/30 hover:shadow-lg transition-all duration-300 text-center">
                  <h3 className="text-xl font-semibold text-accent-gold mb-3">Corporate Professionals</h3>
                  <p className="text-elegant-blue/80">Ready for promotions, role clarity, visibility, and leadership</p>
                </div>

                <div className="bg-white/70 p-6 rounded-xl border border-accent-gold/30 hover:shadow-lg transition-all duration-300 text-center">
                  <h3 className="text-xl font-semibold text-accent-gold mb-3">Mothers Returning</h3>
                  <p className="text-elegant-blue/80">To the workforce with confidence and clarity</p>
                </div>

                <div className="bg-white/70 p-6 rounded-xl border border-accent-gold/30 hover:shadow-lg transition-all duration-300 text-center">
                  <h3 className="text-xl font-semibold text-accent-gold mb-3">Anyone Feeling Stuck</h3>
                  <p className="text-elegant-blue/80">Burnt out, confused, or underutilized in career</p>
                </div>
              </div>
            </div>
          </section>
        </ScrollReveal>

        {/* What You Will Gain Section */}
        <ScrollReveal animation="slide-up" delay={350}>
          <section className="px-6 md:px-12 py-16 md:py-20 bg-elegant-blue/5">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl lg:text-5xl leading-tight mb-4 text-elegant-blue">
                  What You Will Gain
                </h2>
                <p className="text-lg text-elegant-blue/80">
                  Inside this 90 days coaching journey, clients experience:
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  "Crystal clarity on their career purpose",
                  "Freedom from subconscious blocks",
                  "Confidence in decision-making",
                  "Strong communication & leadership presence",
                  "Better boundaries at work",
                  "Promotion, salary growth, and new opportunities",
                  "A career path aligned with their soul",
                  "Enhanced professional visibility",
                ].map((gain, index) => (
                  <div
                    key={index}
                    className="bg-white/80 p-6 rounded-xl border-l-4 border-accent-gold hover:shadow-lg transition-all duration-300"
                  >
                    <div className="flex items-start space-x-3">
                      <span className="text-accent-gold text-xl mt-1">•</span>
                      <p className="text-lg text-elegant-blue/90 leading-relaxed">{gain}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-12 text-center">
                <p className="text-xl md:text-2xl text-accent-gold font-semibold italic">
                  Your career shifts when your inner identity shifts.
                </p>
              </div>
            </div>
          </section>
        </ScrollReveal>

        {/* What We Work On Section */}
        <ScrollReveal animation="fade" delay={400}>
          <section className="px-6 md:px-12 py-16 md:py-20 bg-white/40">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-3xl md:text-4xl lg:text-5xl leading-tight mb-6 text-center text-elegant-blue">
                What We Work On
              </h2>
              <p className="text-lg text-center text-elegant-blue/80 mb-12">
                Each client's plan is personalised, but generally includes:
              </p>

              <div className="space-y-6">
                <div className="bg-gradient-to-r from-accent-gold/10 to-accent-gold/5 p-6 rounded-xl border-l-4 border-accent-gold">
                  <h3 className="text-xl font-semibold text-elegant-blue mb-2">
                    <span className="text-accent-gold mr-2">1.</span>
                    Career Clarity & Roadmap
                  </h3>
                  <p className="text-elegant-blue/80 ml-7">
                    Understanding your aligned path, strengths, and growth milestones.
                  </p>
                </div>

                <div className="bg-gradient-to-r from-accent-gold/10 to-accent-gold/5 p-6 rounded-xl border-l-4 border-accent-gold">
                  <h3 className="text-xl font-semibold text-elegant-blue mb-2">
                    <span className="text-accent-gold mr-2">2.</span>
                    Inner Healing & Subconscious Work
                  </h3>
                  <p className="text-elegant-blue/80 ml-7">
                    <span className="italic">(Optional)</span> Removing childhood patterns, fears, and emotional blocks
                    affecting performance.
                  </p>
                </div>

                <div className="bg-gradient-to-r from-accent-gold/10 to-accent-gold/5 p-6 rounded-xl border-l-4 border-accent-gold">
                  <h3 className="text-xl font-semibold text-elegant-blue mb-2">
                    <span className="text-accent-gold mr-2">3.</span>
                    Akashic Record Reading
                  </h3>
                  <p className="text-elegant-blue/80 ml-7">
                    <span className="italic">(Optional)</span> Releasing past-life and karmic blockages around success,
                    leadership, and visibility.
                  </p>
                </div>

                <div className="bg-gradient-to-r from-accent-gold/10 to-accent-gold/5 p-6 rounded-xl border-l-4 border-accent-gold">
                  <h3 className="text-xl font-semibold text-elegant-blue mb-2">
                    <span className="text-accent-gold mr-2">4.</span>
                    Leadership Energy Activation
                  </h3>
                  <p className="text-elegant-blue/80 ml-7">
                    Confident communication, decision-making, presentation clarity.
                  </p>
                </div>

                <div className="bg-gradient-to-r from-accent-gold/10 to-accent-gold/5 p-6 rounded-xl border-l-4 border-accent-gold">
                  <h3 className="text-xl font-semibold text-elegant-blue mb-2">
                    <span className="text-accent-gold mr-2">5.</span>
                    Nervous System Regulation
                  </h3>
                  <p className="text-elegant-blue/80 ml-7">Handling stress, pressure, and high-responsibility roles.</p>
                </div>

                <div className="bg-gradient-to-r from-accent-gold/10 to-accent-gold/5 p-6 rounded-xl border-l-4 border-accent-gold">
                  <h3 className="text-xl font-semibold text-elegant-blue mb-2">
                    <span className="text-accent-gold mr-2">6.</span>
                    Aligned Action Strategy
                  </h3>
                  <p className="text-elegant-blue/80 ml-7">Step-by-step career plan with practical actions.</p>
                </div>
              </div>
            </div>
          </section>
        </ScrollReveal>

        {/* Transformations Section */}
        <ScrollReveal animation="slide-up" delay={450}>
          <section className="px-6 md:px-12 py-16 md:py-20 bg-gradient-to-b from-accent-gold/10 to-white/50">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl lg:text-5xl leading-tight mb-4 text-elegant-blue">
                  Typical Transformations
                </h2>
                <p className="text-lg text-elegant-blue/80">Clients usually experience:</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  "Promotion within months",
                  "Salary increases",
                  "Strong leadership presence",
                  "New job offers",
                  "Recognition from management",
                  "Confidence in public speaking",
                  "Boundaries & clarity at workplace",
                  "Emotional peace and direction",
                  "Strategic career planning",
                ].map((transformation, index) => (
                  <div
                    key={index}
                    className="bg-white/90 p-6 rounded-xl border border-accent-gold/30 hover:border-accent-gold hover:shadow-lg transition-all duration-300 text-center"
                  >
                    <p className="text-elegant-blue font-semibold">{transformation}</p>
                  </div>
                ))}
              </div>

              <div className="mt-12 bg-elegant-blue/10 p-8 rounded-xl border-2 border-elegant-blue/20 text-center">
                <p className="text-xl md:text-2xl text-elegant-blue leading-relaxed">
                  Most importantly…
                  <br />
                  <span className="text-accent-gold font-semibold text-2xl md:text-3xl">
                    They become the Person they always knew they could be.
                  </span>
                </p>
              </div>
            </div>
          </section>
        </ScrollReveal>

        {/* CTA Section */}
        <ScrollReveal animation="fade" delay={500}>
          <section className="px-6 md:px-12 py-16 md:py-20 bg-elegant-blue/5">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl leading-tight mb-6 text-elegant-blue">
                If you're ready to grow with clarity, confidence, and soul alignment…
              </h2>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-8">
                <Link href="/contact">
                  <Button className="bg-accent-gold text-elegant-blue hover:bg-accent-gold/90 px-8 py-4 text-lg font-semibold rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-105 btn-hover-effect">
                    Book Discovery Call
                  </Button>
                </Link>

                <a
                  href="https://wa.me/918547009801?text=Hello!%20I'm%20interested%20in%20learning%20more%20about%20your%20Career%20Accelerator%20program."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block"
                >
                  <Button className="bg-elegant-blue text-warm-beige hover:bg-deep-blue px-8 py-4 text-lg font-semibold rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-105 btn-hover-effect">
                    Connect on WhatsApp
                  </Button>
                </a>
              </div>

              <p className="text-sm text-elegant-blue/60 mt-8">
                90-Day Transformational Journey | Personalized Coaching | Inner Work + Strategic Action
              </p>
            </div>
          </section>
        </ScrollReveal>

        {/* Footer */}
        <Footer />
        <WhatsAppButton />
      </div>
    </>
  )
}
