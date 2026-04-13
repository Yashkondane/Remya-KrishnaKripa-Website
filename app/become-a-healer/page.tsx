"use client"

import { Libre_Baskerville } from "next/font/google"
import React from "react"
import SimplePreloader from "@/components/simple-preloader"
import Image from "next/image"
import { ArrowRight, CheckCircle2, BookOpen, Sparkles } from "lucide-react"

const libreBaskerville = Libre_Baskerville({
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
  display: "swap",
})

export default function BecomeAHealerPage() {
  const canvaLink = "https://www.canva.com/design/placeholder" // Placeholder

  return (
    <>
      <SimplePreloader />
      <div className={`min-h-screen beige-bg text-elegant-blue ${libreBaskerville.className}`}>
        
        <main className="max-w-5xl mx-auto px-6 py-16 md:py-24 space-y-20 text-[18px] leading-relaxed overflow-hidden">
          
          {/* Hero Header Area */}
          <div className="flex flex-col lg:flex-row gap-16 items-center lg:items-start border-b border-elegant-blue/10 pb-16">
            <div className="lg:w-3/5 space-y-10">
              <div className="space-y-6 text-center lg:text-left">
                <div className="flex justify-center lg:justify-start mb-8">
                  <div className="bg-accent-gold/10 border border-accent-gold/30 rounded-full px-6 py-2 flex items-center gap-2">
                    <Sparkles className="w-5 h-5 text-accent-gold" />
                    <span className="text-accent-gold font-semibold text-sm uppercase tracking-widest">Training & Certification</span>
                  </div>
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-elegant-blue">
                  Become an Energy Healer
                  <div className="h-2 w-32 bg-elegant-blue mt-6 rounded-full mx-auto lg:mx-0"></div>
                </h1>
                <div className="text-xl md:text-2xl text-elegant-blue/80 italic space-y-2 font-medium">
                  <p>You've experienced the power of healing.</p>
                  <p>Now you feel called to learn it—</p>
                  <p className="font-bold">and hold space for others.</p>
                </div>
              </div>

              <div className="flex justify-center lg:justify-start">
                <button 
                  onClick={() => window.open(canvaLink, "_blank")}
                  className="bg-elegant-blue hover:bg-elegant-blue/90 text-warm-beige font-semibold py-4 px-8 rounded-full shadow-xl transition-all duration-300 flex items-center gap-3 text-lg group"
                >
                  Apply for the Program
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>

            <div className="lg:w-2/5">
               <Image
                  src="/images/image copy 6.png"
                  alt="Become an Energy Healer"
                  width={500}
                  height={600}
                  className="rounded-2xl shadow-xl object-cover aspect-[4/5] mx-auto border-4 border-white/40"
                  priority
                />
            </div>
          </div>

          <div className="max-w-4xl mx-auto space-y-32">
            
            {/* Section 1 */}
            <section className="space-y-10">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-elegant-blue text-center leading-tight mb-12">
                Is this calling you?
              </h2>
              
              <div className="max-w-2xl mx-auto space-y-8">
                <p className="text-xl text-center mb-8">You may be here because:</p>

                <div className="space-y-4 pt-4">
                  {[
                    "You've experienced your own healing—and something shifted deeply within you",
                    "You feel drawn to understanding energy, consciousness, and spiritual growth",
                    "People naturally come to you for support, guidance, or comfort",
                    "You want to do meaningful work that creates real impact in people's lives",
                    "You feel there is a deeper purpose you haven't fully stepped into yet",
                    "You want to learn how to channel healing for yourself and others"
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-start gap-4 text-xl">
                      <div className="w-2 h-2 rounded-full bg-accent-gold mt-2.5 flex-shrink-0"></div>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>

                <div className="py-8 mt-4 text-center space-y-3 border-t border-elegant-blue/10 pt-16">
                  <p className="italic font-bold text-2xl md:text-3xl text-elegant-blue">
                    "This isn't just about learning a skill. It's about stepping into your power."
                  </p>
                </div>
              </div>
            </section>

            {/* Section 2 */}
            <section className="space-y-10">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-elegant-blue text-center leading-tight mb-12">
                What you will learn
              </h2>
              
              <div className="space-y-6 text-lg max-w-2xl mx-auto">
                <p className="text-xl text-center">
                  This program is designed to give you a solid foundation in energy healing— both the techniques and the deeper understanding required to hold healing space.
                </p>

                <div className="space-y-6 text-xl text-elegant-blue/90 border-l-4 border-accent-gold pl-6 md:pl-8 py-4 mt-8">
                  <p><span className="font-bold text-elegant-blue">Energy Healing Fundamentals</span> — understanding energy, chakras, and the healing process</p>
                  <p><span className="font-bold text-elegant-blue">Channelling & Intuition</span> — developing your ability to sense, read, and work with energy</p>
                  <p><span className="font-bold text-elegant-blue">Akashic Records</span> — learning to access and interpret soul-level information</p>
                  <p><span className="font-bold text-elegant-blue">Inner Child & Emotional Release</span> — techniques for deep emotional healing</p>
                  <p><span className="font-bold text-elegant-blue">Holding Space</span> — how to create a safe, powerful healing environment for clients</p>
                  <p><span className="font-bold text-elegant-blue">Ethics & Practice</span> — professional standards, boundaries, and client care</p>
                </div>
              </div>
            </section>

            {/* Section 3 */}
            <section className="space-y-10">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-elegant-blue text-center leading-tight mb-12">
                How the program works
              </h2>
              
              <div className="max-w-3xl mx-auto space-y-6 text-xl text-elegant-blue/90">
                <p className="text-center font-medium">
                  This is a guided, mentorship-based program— not just a course.
                </p>
                
                <div className="bg-white/40 p-8 rounded-2xl shadow-inner my-8 space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-elegant-blue text-warm-beige flex items-center justify-center font-bold flex-shrink-0 text-sm">1</div>
                    <div>
                      <p className="font-bold text-elegant-blue">Foundation & Theory</p>
                      <p className="opacity-90 text-lg">Deep understanding of energy systems, the healing process, and your own alignment.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-elegant-blue text-warm-beige flex items-center justify-center font-bold flex-shrink-0 text-sm">2</div>
                    <div>
                      <p className="font-bold text-elegant-blue">Practical Training</p>
                      <p className="opacity-90 text-lg">Hands-on practice with healing techniques, guided by direct mentorship.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-elegant-blue text-warm-beige flex items-center justify-center font-bold flex-shrink-0 text-sm">3</div>
                    <div>
                      <p className="font-bold text-elegant-blue">Integration & Certification</p>
                      <p className="opacity-90 text-lg">Supervised sessions, feedback, and certification upon completion.</p>
                    </div>
                  </div>
                </div>
                
                <p className="font-bold pt-4 text-elegant-blue text-2xl text-center">
                  You will be guided every step of the way.
                </p>
              </div>
            </section>

            {/* Section 4 */}
            <section className="space-y-8 bg-elegant-blue text-warm-beige p-10 md:p-14 rounded-[2.5rem] shadow-xl max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-warm-beige text-center leading-tight mb-12">What you will gain</h2>
              
              <ul className="space-y-6 max-w-lg mx-auto">
                {[
                  "A deep understanding of energy healing principles",
                  "The ability to conduct healing sessions with confidence",
                  "Certification as an Energy Healer",
                  "Tools to support your own ongoing transformation",
                  "A new, purpose-driven skill set for your career",
                  "Connection to a community of healers and practitioners"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-5 text-lg">
                    <CheckCircle2 className="w-6 h-6 text-accent-gold flex-shrink-0 opacity-100" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </section>
          </div>
        </main>
        
        {/* Testimonial Section */}
        <section className="relative w-full bg-elegant-blue text-warm-beige py-24 shadow-inner">
          <div className="max-w-5xl mx-auto px-6 mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center leading-tight">What past students say</h2>
            <div className="w-20 h-1 bg-accent-gold mx-auto mt-8"></div>
          </div>
          
          <div className="max-w-4xl mx-auto px-6">
              <div className="bg-white/5 border border-white/10 p-10 md:p-16 rounded-2xl shadow-lg shadow-black/20">
                <div className="space-y-4 text-lg md:text-2xl md:leading-relaxed opacity-90 italic">
                  <p>"I always felt drawn to healing but didn't know where to start. This program gave me clarity, structure, and confidence.</p>
                  <p>The mentorship was incredibly supportive. I didn't just learn techniques—I transformed personally in the process.</p>
                  <p className="font-semibold border-l-4 border-accent-gold pl-4 md:pl-6 mt-8 md:mt-10">Today I work with clients and I know this is what I was meant to do."</p>
                </div>
                <p className="pt-10 font-bold text-right opacity-90 text-accent-gold text-xl">— A., Certified Healer</p>
              </div>
          </div>
        </section>

        <main className="max-w-3xl mx-auto px-6 space-y-24 text-[18px] leading-relaxed pb-32 pt-24">
          
          {/* Who this is for */}
          <section className="space-y-8 text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-elegant-blue mb-6 leading-tight">Who this is for</h2>
            <p className="italic text-xl opacity-90 max-w-md mx-auto">This is for you if:</p>

            <ul className="space-y-5 pt-8 text-left max-w-md mx-auto">
              {[
                "You feel a deep pull towards healing and helping others",
                "You've experienced your own healing journey and want to learn the process",
                "You want a meaningful, purpose-driven career or practice",
                "You are ready for deep personal transformation alongside professional training",
                "You are committed and willing to invest in your growth"
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-4">
                  <div className="w-2 h-2 rounded-full bg-accent-gold mt-2.5 flex-shrink-0"></div>
                  <span className="text-lg">{item}</span>
                </li>
              ))}
            </ul>
          </section>
        </main>
        
        {/* Final Call to Action */}
        <section className="w-full bg-accent-gold text-elegant-blue py-20 md:py-32 text-center px-6">
          <div className="max-w-3xl mx-auto space-y-8">
            <div className="space-y-4">
              <BookOpen className="w-12 h-12 mx-auto opacity-80" />
            </div>
            <div className="space-y-6">
              <p className="text-2xl md:text-3xl italic opacity-90 font-medium">If you feel called to go deeper—</p>
              <p className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight">Step into your purpose as an Energy Healer</p>
            </div>

            <div className="pt-10 flex justify-center">
              <button 
                onClick={() => window.open(canvaLink, "_blank")}
                className="bg-elegant-blue hover:bg-elegant-blue/90 text-warm-beige font-bold py-5 px-10 md:px-14 rounded-full shadow-2xl transition-all duration-300 text-xl md:text-2xl w-full sm:w-auto hover:scale-[1.02]"
              >
                Apply for the Healer Program
              </button>
            </div>
          </div>
        </section>
        
      </div>
    </>
  )
}
