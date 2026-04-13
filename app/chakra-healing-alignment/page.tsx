"use client"

import { Libre_Baskerville } from "next/font/google"
import React from "react"
import SimplePreloader from "@/components/simple-preloader"
import Image from "next/image"
import { ArrowRight, CheckCircle2 } from "lucide-react"

const libreBaskerville = Libre_Baskerville({
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
  display: "swap",
})

export default function ChakraHealingAlignmentPage() {
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
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-elegant-blue">
                  Chakra Healing & Alignment
                  <div className="h-2 w-32 bg-elegant-blue mt-6 rounded-full mx-auto lg:mx-0"></div>
                </h1>
                <div className="text-xl md:text-2xl text-elegant-blue/80 italic space-y-2 font-medium">
                  <p>When your energy is out of balance…</p>
                  <p className="font-bold">your life starts reflecting it.</p>
                </div>
              </div>

              <div className="flex justify-center lg:justify-start">
                <button 
                  onClick={() => window.open(canvaLink, "_blank")}
                  className="bg-elegant-blue hover:bg-elegant-blue/90 text-warm-beige font-semibold py-4 px-8 rounded-full shadow-xl transition-all duration-300 flex items-center gap-3 text-lg group"
                >
                  Book your Session 
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>

            <div className="lg:w-2/5">
               <Image
                  src="/images/image copy 3.png"
                  alt="Chakra Healing & Alignment"
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
                You may not always see it...
              </h2>
              
              <div className="max-w-2xl mx-auto space-y-8">
                <div className="py-2 space-y-2 mb-8">
                  <p className="text-xl font-bold">But you can feel it.</p>
                </div>

                <div className="grid gap-2 border-l-4 border-elegant-blue/40 pl-6 py-2 text-xl text-elegant-blue/90">
                  <p>You feel anxious, heavy, or emotionally unstable</p>
                  <p>You overthink or feel mentally exhausted</p>
                  <p>You struggle with confidence or self-expression</p>
                  <p>You feel blocked in relationships, career, or money</p>
                  <p>You feel disconnected from yourself</p>
                </div>

                <div className="py-8 mt-4 text-center space-y-3 border-t border-elegant-blue/10 pt-16">
                  <p className="font-bold text-2xl text-elegant-blue mb-2">These are not random experiences.</p>
                  <p className="opacity-90 text-xl italic font-medium">“They are often connected to imbalances in your energy system.”</p>
                </div>
              </div>
            </section>

            {/* Section 2 */}
            <section className="space-y-10">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-elegant-blue text-center leading-tight mb-12">
                What this is?
              </h2>
              
              <div className="space-y-8 text-lg max-w-2xl mx-auto">
                <p className="text-xl">
                  Your body has energy centres, known as chakras.
                </p>

                <p className="text-xl font-bold">Each chakra is connected to different aspects of your life:</p>
                <div className="bg-white/40 p-6 rounded-xl shadow-sm text-xl border-l-4 border-accent-gold grid grid-cols-2 gap-4">
                  <p className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-elegant-blue rounded-full"></div> emotions</p>
                  <p className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-elegant-blue rounded-full"></div> thoughts</p>
                  <p className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-elegant-blue rounded-full"></div> confidence</p>
                  <p className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-elegant-blue rounded-full"></div> communication</p>
                  <p className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-elegant-blue rounded-full"></div> relationships</p>
                  <p className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-elegant-blue rounded-full"></div> stability and security</p>
                </div>

                <p className="text-xl font-bold pt-6">When these energy centres are:</p>
                <div className="flex gap-4 font-semibold text-elegant-blue/80 text-xl border-b border-elegant-blue/10 pb-8">
                  <span>blocked</span> <span className="opacity-40">•</span> <span>overactive</span> <span className="opacity-40">•</span> <span>or imbalanced</span>
                </div>
                
                <p className="text-xl italic pt-2">…it starts affecting how you feel, think, and live.</p>

                <div className="bg-elegant-blue text-warm-beige p-8 rounded-2xl shadow-lg mt-8 text-center space-y-4">
                  <p className="italic text-xl font-medium">Chakra Healing & Alignment helps restore balance in these centres—</p>
                  <p className="text-2xl font-bold italic text-accent-gold">so your inner state and outer life can shift.</p>
                </div>
              </div>
            </section>

            {/* Section 3 */}
            <section className="space-y-10">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-elegant-blue text-center leading-tight mb-12">
                How this shows up in real life
              </h2>
              
              <div className="max-w-2xl mx-auto space-y-8">
                <p className="text-xl text-center mb-8">You may experience chakra imbalances as:</p>

                <div className="space-y-6 text-xl text-elegant-blue/90 border-l-4 border-accent-gold pl-6 md:pl-8 py-2">
                  <p><span className="font-bold text-elegant-blue">Fear, insecurity, or instability</span> <span className="opacity-80 italic">(root imbalance)</span></p>
                  <p><span className="font-bold text-elegant-blue">Emotional overwhelm or relationship struggles</span> <span className="opacity-80 italic">(heart/sacral imbalance)</span></p>
                  <p><span className="font-bold text-elegant-blue">Lack of confidence or self-doubt</span> <span className="opacity-80 italic">(solar plexus imbalance)</span></p>
                  <p><span className="font-bold text-elegant-blue">Difficulty expressing yourself</span> <span className="opacity-80 italic">(throat imbalance)</span></p>
                  <p><span className="font-bold text-elegant-blue">Overthinking or lack of clarity</span> <span className="opacity-80 italic">(third eye imbalance)</span></p>
                  <p><span className="font-bold text-elegant-blue">Disconnection or lack of purpose</span> <span className="opacity-80 italic">(crown imbalance)</span></p>
                </div>

                <div className="text-center space-y-2 py-10 mt-4 border-b border-elegant-blue/10 pb-16">
                  <p className="text-2xl font-bold">Most people don’t realise this—</p>
                  <p className="text-xl italic text-elegant-blue opacity-80 mt-2 font-semibold">but these patterns are deeply connected to your energy system.</p>
                </div>
              </div>
            </section>

            {/* Section 4 */}
            <section className="space-y-10">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-elegant-blue text-center leading-tight mb-12">
                What happens in a session
              </h2>
              
              <div className="max-w-3xl mx-auto space-y-6 text-xl text-elegant-blue/90">
                <p className="text-center font-medium">
                  In this session, we assess your energy system based on what you are currently experiencing.
                </p>
                <p className="text-center">
                  Through energy healing techniques, we work on:
                </p>
                
                <div className="bg-white/40 p-8 rounded-2xl shadow-inner my-8">
                  <ul className="space-y-4 font-medium max-w-lg mx-auto">
                      <li className="flex items-start gap-4">
                        <div className="w-2 h-2 rounded-full bg-elegant-blue mt-2.5 flex-shrink-0"></div>
                        <span>clearing blockages in specific chakras</span>
                      </li>
                      <li className="flex items-start gap-4">
                        <div className="w-2 h-2 rounded-full bg-elegant-blue mt-2.5 flex-shrink-0"></div>
                        <span>balancing overactive or underactive energy centres</span>
                      </li>
                      <li className="flex items-start gap-4">
                        <div className="w-2 h-2 rounded-full bg-elegant-blue mt-2.5 flex-shrink-0"></div>
                        <span>restoring natural energy flow</span>
                      </li>
                      <li className="flex items-start gap-4">
                        <div className="w-2 h-2 rounded-full bg-elegant-blue mt-2.5 flex-shrink-0"></div>
                        <span>supporting emotional and mental stability</span>
                      </li>
                  </ul>
                </div>
                
                <p className="font-bold text-elegant-blue text-2xl text-center pt-4">The session is deeply effective.</p>
              </div>
            </section>

            {/* Section 5 */}
            <section className="space-y-8 bg-elegant-blue text-warm-beige p-10 md:p-14 rounded-[2.5rem] shadow-xl max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-warm-beige text-center leading-tight mb-12">What you may experience</h2>
              
              <ul className="space-y-6 max-w-lg mx-auto">
                {[
                  "Emotional balance and calm",
                  "Reduced anxiety and overthinking",
                  "Improved confidence and self-expression",
                  "Better clarity and focus",
                  "Feeling more grounded and stable",
                  "Deeper connection with yourself"
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
        
        {/* Section 6 Testimonials - Edge to Edge Background */}
        <section className="relative w-full bg-elegant-blue text-warm-beige py-24 shadow-inner">
          <div className="max-w-5xl mx-auto px-6 mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center leading-tight">What clients experience</h2>
            <div className="w-20 h-1 bg-accent-gold mx-auto mt-8"></div>
          </div>
          
          <div className="max-w-4xl mx-auto px-6">
              <div className="bg-white/5 border border-white/10 p-10 md:p-16 rounded-2xl shadow-lg shadow-black/20">
                <div className="space-y-4 text-lg md:text-2xl md:leading-relaxed opacity-90 italic">
                  <p>“I used to feel constantly anxious and unsure of myself. Even small decisions felt overwhelming.</p>
                  <p>During the session, I felt a deep sense of calm. Over the next few days, I noticed I wasn’t overthinking as much.</p>
                  <p className="font-semibold border-l-4 border-accent-gold pl-4 md:pl-6 mt-8 md:mt-10">I started feeling more stable, more confident… like I was finally coming back to myself.”</p>
                </div>
                <p className="pt-10 font-bold text-right opacity-90 text-accent-gold text-xl">— N., Founder Chairman</p>
              </div>
          </div>
        </section>

        <main className="max-w-3xl mx-auto px-6 space-y-24 text-[18px] leading-relaxed pb-32 pt-24">
          
          {/* Section 7 Who this is for */}
          <section className="space-y-8 text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-elegant-blue mb-6 leading-tight">Who this is for</h2>
            <p className="italic text-xl opacity-90 max-w-md mx-auto">This is for you if:</p>

            <ul className="space-y-5 pt-8 text-left max-w-md mx-auto">
              {[
                "You feel emotionally or mentally imbalanced",
                "You struggle with confidence, clarity, or expression",
                "You feel stuck in repeated emotional patterns",
                "You want to feel more grounded and centred",
                "You are open to energy-based healing"
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-4">
                  <div className="w-2 h-2 rounded-full bg-accent-gold mt-2.5 flex-shrink-0"></div>
                  <span className="text-lg">{item}</span>
                </li>
              ))}
            </ul>
          </section>
        </main>
        
        {/* Final Call to Action - Edge to Edge Golden Background */}
        <section className="w-full bg-accent-gold text-elegant-blue py-20 md:py-32 text-center px-6">
          <div className="max-w-3xl mx-auto space-y-8">
            <div className="space-y-6">
              <p className="text-2xl md:text-3xl italic opacity-90 font-medium">If you’re feeling out of balance—</p>
              <p className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight">and you’re ready to feel more stable, clear, and aligned</p>
            </div>

            <div className="pt-10 flex justify-center">
              <button 
                onClick={() => window.open(canvaLink, "_blank")}
                className="bg-elegant-blue hover:bg-elegant-blue/90 text-warm-beige font-bold py-5 px-10 md:px-14 rounded-full shadow-2xl transition-all duration-300 text-xl md:text-2xl w-full sm:w-auto hover:scale-[1.02]"
              >
                Book your Chakra Healing session
              </button>
            </div>
          </div>
        </section>
        
      </div>
    </>
  )
}
