"use client"

import { Libre_Baskerville } from "next/font/google"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"
import ScrollReveal from "@/components/scroll-reveal"
import WhatsAppButton from "@/components/whatsapp-button"
import SimplePreloader from "@/components/simple-preloader"

const libreBaskerville = Libre_Baskerville({
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
  display: "swap",
})

export default function AboutPage() {
  const textShadowStyle = { textShadow: "0 0 20px rgba(201, 168, 106, 0.4), 0 0 40px rgba(201, 168, 106, 0.2)" };

  return (
    <>
      <SimplePreloader />
      <div className={`min-h-screen beige-bg text-elegant-blue ${libreBaskerville.className} overflow-x-hidden`}>
        
        {/* Floating Background Aesthetics */}
        <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
          <div className="absolute top-[10%] -left-[10%] w-[50%] h-[50%] bg-accent-gold/10 rounded-full blur-[140px] animate-pulse-slow" />
          <div className="absolute bottom-[20%] -right-[10%] w-[40%] h-[40%] bg-elegant-blue/5 rounded-full blur-[140px] animate-float" />
          <div className="absolute top-[40%] left-[60%] w-[30%] h-[30%] bg-accent-gold/5 rounded-full blur-[100px] animate-pulse-slow" />
        </div>

        {/* Hero Section */}
        <section className="relative px-6 md:px-12 py-24 md:py-40 z-10 text-center">
          <div className="max-w-5xl mx-auto">
            <ScrollReveal animation="fade">
              <h1 className="text-4xl md:text-6xl lg:text-7xl leading-tight text-elegant-blue font-bold">
                Story of a Soul journey from Corporate to the multi-dimensional world of <span className="text-accent-gold" style={textShadowStyle}>Energy Healing and Akashic Records!</span>
              </h1>
              <div className="w-24 h-1.5 bg-accent-gold mx-auto mt-12 rounded-full shadow-[0_0_20px_rgba(201,168,106,0.3)]" />
            </ScrollReveal>
          </div>
        </section>

        {/* Corporate & Book Section */}
        <section className="relative px-6 md:px-12 py-16 md:py-24 z-10">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
              <ScrollReveal animation="slide-left">
                <div className="relative group">
                  <div className="absolute -inset-8 rounded-[2rem] bg-accent-gold/10 blur-2xl opacity-60 group-hover:opacity-100 transition-opacity duration-700" />
                  <div className="relative hover-lift">
                    <Image
                      src="/images/ChatGPT Image Feb 17, 2026, 08_27_17 PM.png"
                      alt="Remya Krishnakripa"
                      width={600}
                      height={800}
                      className="relative z-10 rounded-2xl shadow-2xl border-2 border-accent-gold/30 w-full max-w-md mx-auto transition-all duration-500 hover:border-accent-gold/60"
                    />
                  </div>
                </div>
              </ScrollReveal>

              <ScrollReveal animation="slide-right" delay={200}>
                <div className="space-y-10 lg:pl-10">
                  <div className="space-y-8 bg-white/40 backdrop-blur-md p-8 md:p-12 rounded-[2.5rem] border border-white/50 shadow-xl">
                    <h2 className="text-3xl md:text-4xl font-bold text-elegant-blue">The Corporate Years & Stagnancy</h2>
                    <div className="space-y-6">
                      <p className="text-xl md:text-2xl leading-relaxed text-elegant-blue/90">
                        Over the years, I worked in IT Agile Leadership and Management areas with multiple MNCs. During my career journey, I faced a strong period of stagnancy—no salary hikes or promotions. It was a literally struggling phase.
                      </p>
                      <p className="text-xl md:text-2xl leading-relaxed text-elegant-blue/90 font-medium italic text-accent-gold">
                        "From there, I found the way out to my dream successful job roles, doubling my salary every year."
                      </p>
                    </div>
                  </div>

                  <div className="bg-elegant-blue p-10 md:p-12 rounded-[2.5rem] text-warm-beige shadow-2xl relative overflow-hidden group">
                    <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-accent-gold/10 rounded-full blur-[60px] group-hover:scale-150 transition-transform duration-700" />
                    <div className="relative z-10">
                      <p className="text-xl md:text-2xl leading-relaxed font-medium italic mb-10">
                        "Those strategies and secrets have been crafted into a book, and I am now a published author of the best-selling book 'Zero To Hero Career Growth Simplified', available globally through Amazon."
                      </p>
                      <a 
                        href="https://amzn.in/d/7TBBG7U" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 bg-accent-gold text-elegant-blue px-10 py-5 rounded-xl font-bold hover:scale-105 transition-all shadow-[0_0_20px_rgba(201,134,115,0.3)]"
                      >
                        Buy on Amazon
                      </a>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* Turning Point Section */}
        <section className="relative px-6 md:px-12 py-24 md:py-36 z-10 overflow-hidden">
          <div className="max-w-4xl mx-auto">
            <ScrollReveal animation="fade">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-elegant-blue">The Turning Point</h2>
                <div className="w-20 h-1.5 bg-accent-gold mt-6 mx-auto rounded-full" />
              </div>
            </ScrollReveal>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <ScrollReveal animation="slide-left" delay={200}>
                <div className="bg-white/60 backdrop-blur-xl p-10 rounded-[2rem] border border-white/60 shadow-lg h-full">
                  <p className="text-xl md:text-2xl leading-relaxed text-elegant-blue/90">
                    When I quit my job and started my coaching business, I helped many professionals land their dream careers and salaries within 90 days.
                  </p>
                </div>
              </ScrollReveal>
              
              <ScrollReveal animation="slide-right" delay={400}>
                <div className="bg-elegant-blue p-10 rounded-[2rem] text-warm-beige shadow-2xl h-full border-l-8 border-accent-gold">
                  <p className="text-xl md:text-2xl leading-relaxed italic font-medium">
                    While continuing as a mid-career accelerator coach, I entered into a self-healing journey. It was a true turning point. It guided me to my Soul purpose and Soul skills.
                  </p>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* Soul Purpose & Akashic Section */}
        <section className="relative px-6 md:px-12 py-24 md:py-40 z-10">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
              <ScrollReveal animation="fade">
                <div className="space-y-10">
                  <div className="inline-block px-6 py-2 bg-accent-gold/10 rounded-full border border-accent-gold/20">
                    <p className="text-sm font-bold text-accent-gold uppercase tracking-[0.2em]">Soul Purpose & Akashic Records</p>
                  </div>
                  <div className="space-y-8">
                    <p className="text-xl md:text-2xl leading-relaxed text-elegant-blue/80">
                      It opened up the path to 'Akashic'—the multi-dimensional energy world. I moved from my passion business of coaching to my soul purpose: <span className="text-accent-gold font-bold">Energy Healing and Akashic Record Reading.</span>
                    </p>
                    <p className="text-xl md:text-2xl leading-relaxed text-elegant-blue/80">
                      Through the Akashic Records, I am on a mission to help growth-driven individuals break subconscious patterns and gain clarity in career, wealth, and relationships.
                    </p>
                  </div>
                </div>
              </ScrollReveal>

              <ScrollReveal animation="scale" delay={300}>
                <div className="bg-white/40 backdrop-blur-2xl p-10 md:p-16 rounded-[3rem] border border-white/60 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] space-y-10">
                  <p className="text-xl md:text-2xl leading-relaxed text-elegant-blue/90 italic">
                    Using Akashic guidance, past-life healing, and inner child work, my clients experience deep, lasting transformation—sometimes within a single session.
                  </p>
                  <div className="w-full h-px bg-accent-gold/20" />
                  <p className="text-xl md:text-2xl leading-relaxed text-elegant-blue font-bold">
                    I also support high-ambition entrepreneurs with a deep thinking space supported by the Akashic Records, elevating financial targets from lakhs to multiple crores.
                  </p>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* Accomplishments Section */}
        <section className="relative px-6 md:px-12 py-24 md:py-36 bg-elegant-blue/5 backdrop-blur-md z-10">
          <div className="max-w-5xl mx-auto">
            <ScrollReveal animation="fade">
              <h2 className="text-4xl md:text-5xl font-bold text-center mb-20 text-elegant-blue flex flex-col items-center gap-4">
                Accomplishments
                <span className="w-24 h-1.5 bg-accent-gold rounded-full" />
              </h2>
            </ScrollReveal>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <ScrollReveal animation="scale" delay={100}>
                <div className="group h-full p-10 bg-white/80 rounded-[2.5rem] shadow-xl border-b-8 border-accent-gold hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 text-center">
                  <h4 className="font-bold text-2xl text-elegant-blue mb-4 tracking-tighter uppercase">IPHM, UK Certified</h4>
                  <p className="text-lg text-elegant-blue/70">International Practitioners of Holistic Medicine Akashic Record Reader</p>
                </div>
              </ScrollReveal>

              <ScrollReveal animation="scale" delay={200}>
                <div className="group h-full p-10 bg-white/80 rounded-[2.5rem] shadow-xl border-b-8 border-elegant-blue hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 text-center">
                  <h4 className="font-bold text-2xl text-elegant-blue mb-4 tracking-tighter uppercase">ICF Certified PCC Coach</h4>
                  <p className="text-lg text-elegant-blue/70">International Coaching Federation</p>
                </div>
              </ScrollReveal>

              <ScrollReveal animation="fade" delay={300}>
                <div className="md:col-span-2 p-10 bg-white/40 backdrop-blur-md rounded-[2.5rem] border border-elegant-blue/10 text-center shadow-inner">
                  <p className="text-xl md:text-2xl text-elegant-blue font-medium tracking-wide">
                    Lessons absorbed from <span className="text-accent-gold font-bold uppercase">PMP, ITIL, CSM, and ISTQB Advanced</span>.
                  </p>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="relative px-6 md:px-12 py-32 md:py-48 z-10 text-center">
          <div className="max-w-4xl mx-auto space-y-20">
            <ScrollReveal animation="fade">
              <div className="relative group">
                <div className="absolute -inset-10 bg-accent-gold/10 rounded-full blur-[100px] opacity-40 group-hover:opacity-100 transition-opacity" />
                <i className="relative text-3xl md:text-5xl text-elegant-blue font-medium leading-tight">
                  "Beyond professional details, I am a travel lover on a dream journey to see the beautiful world. I'm on it already!!"
                </i>
              </div>
            </ScrollReveal>

            <ScrollReveal animation="fade" delay={300}>
              <div className="space-y-16 pt-20 border-t border-accent-gold/20">
                <p className="text-xl md:text-3xl leading-relaxed text-elegant-blue/90 max-w-3xl mx-auto">
                  I offer various services on Energy Healing and provide integrated career solutions with strategy + energy. If you have a calling towards Akashic records, inner healing, the ascension journey, or elevating your soul evolution, I would love to support your journey.
                </p>
                <div className="space-y-8">
                  <div className="space-y-4">
                    <p className="text-2xl font-bold text-accent-gold italic uppercase tracking-[0.3em]">- with love,</p>
                    <p className="text-6xl md:text-8xl text-elegant-blue font-bold tracking-tighter">Remya</p>
                  </div>
                  <Link href="/contact">
                    <Button className="bg-accent-gold text-elegant-blue hover:bg-elegant-blue hover:text-warm-beige px-14 py-8 text-2xl font-bold rounded-2xl shadow-[0_0_30px_rgba(201,134,115,0.3)] transition-all duration-500 hover:scale-110">
                      Connect With Me
                    </Button>
                  </Link>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>

        <WhatsAppButton />
      </div>
    </>
  )
}
