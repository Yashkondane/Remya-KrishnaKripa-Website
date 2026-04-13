"use client"

import { Libre_Baskerville } from "next/font/google"
import React from "react"
import SimplePreloader from "@/components/simple-preloader"
import Image from "next/image"
import { ArrowRight, CheckCircle2, AlertTriangle } from "lucide-react"

const libreBaskerville = Libre_Baskerville({
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
  display: "swap",
})

export default function AngelHealingTherapyPage() {
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
                  Angel Healing Therapy
                  <div className="h-2 w-32 bg-elegant-blue mt-6 rounded-full mx-auto lg:mx-0"></div>
                </h1>
                <div className="text-xl md:text-2xl text-elegant-blue/80 italic space-y-2 font-medium">
                  <p>When life feels heavy, blocked, or unclear…</p>
                  <p>sometimes you don’t need to push harder—</p>
                  <p className="font-bold">you need support beyond the logical mind.</p>
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
                  src="/images/image copy.png"
                  alt="Angel Healing Therapy"
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
                There are moments when...
              </h2>
              
              <div className="max-w-2xl mx-auto space-y-8">
                <div className="grid gap-2 border-l-4 border-elegant-blue/40 pl-6 py-2">
                  <p>nothing seems to move forward</p>
                  <p>emotions feel overwhelming or stuck</p>
                  <p>your body, mind, and energy feel out of balance</p>
                  <p>you feel disconnected from clarity, peace, or direction</p>
                </div>

                <div className="py-8 mt-4 text-center space-y-3">
                  <p className="opacity-80 text-xl">You may not always have answers.</p>
                  <p className="italic font-bold text-2xl md:text-3xl text-elegant-blue mt-4">“But you can receive guidance, healing, and support.”</p>
                </div>
              </div>
            </section>

            {/* Section 2 */}
            <section className="space-y-10">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-elegant-blue text-center leading-tight mb-12">
                What this is ?
              </h2>
              
              <div className="space-y-8 text-lg max-w-2xl mx-auto">
                <p>
                  Angel Healing Therapy is a high-frequency energy healing process where we work with angelic energies to support different areas of your life.
                </p>

                <p className="text-xl font-bold">This is not just emotional healing— it is a holistic energetic shift that can support:</p>

                <ul className="space-y-4 font-medium pl-2">
                    <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-accent-gold"/>relationships</li>
                    <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-accent-gold"/>physical and emotional well-being</li>
                    <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-accent-gold"/>clarity and life direction</li>
                    <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-accent-gold"/>abundance and financial flow</li>
                    <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-accent-gold"/>release of energetic and karmic blocks</li>
                    <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-accent-gold"/>spiritual growth and ascension</li>
                </ul>

                <div className="bg-elegant-blue text-warm-beige p-8 rounded-2xl shadow-lg mt-8">
                  <p className="italic text-center text-xl leading-relaxed">
                    The focus is not just on symptoms, but on restoring balance at a deeper level.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 3 */}
            <section className="space-y-10">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-elegant-blue text-center leading-tight mb-12">
                What you can work on in a session
              </h2>
              
              <div className="max-w-2xl mx-auto space-y-8">
                <p className="text-xl text-center mb-8">Each session is personalised based on your current need. This may include:</p>

                <div className="space-y-6 text-xl text-elegant-blue/90 border-l-4 border-accent-gold pl-6 py-2">
                  <p><span className="font-bold text-elegant-blue">Relationship healing</span> (conflicts, emotional pain, disconnection)</p>
                  <p><span className="font-bold text-elegant-blue">Emotional release</span> (trauma, grief, heaviness)</p>
                  <p><span className="font-bold text-elegant-blue">Clarity & guidance</span> (career, decisions, life direction)</p>
                  <p><span className="font-bold text-elegant-blue">Abundance blocks</span> (money flow, receiving, self-worth)</p>
                  <p><span className="font-bold text-elegant-blue">Physical & feminine support</span> (like PCOD, fertility-related stress, body-related concerns)</p>
                  <p><span className="font-bold text-elegant-blue">Energy clearing</span> (removing blocks, heaviness, stagnation)</p>
                  <p><span className="font-bold text-elegant-blue">Spiritual growth</span> (alignment, inner connection, ascension support)</p>
                </div>

                <div className="text-center space-y-2 py-10 mt-4 border-b border-elegant-blue/10 pb-16">
                  <p className="text-2xl font-bold">This is a supportive healing space—</p>
                  <p className="text-xl italic text-elegant-blue opacity-80 mt-2 font-semibold">not something you need to “figure out” alone.</p>
                </div>
              </div>
            </section>

            {/* Section 4 */}
            <section className="space-y-10">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-elegant-blue text-center leading-tight mb-12">
                What happens in a session
              </h2>
              
              <div className="max-w-3xl mx-auto space-y-6 text-xl text-elegant-blue/90">
                <p className="text-center">
                  In this session, we begin with your current concern— what you are experiencing or seeking clarity on.
                </p>
                <p className="text-center">
                  Through angelic healing energies, we work on your energetic system to bring balance and release. This may include:
                </p>
                
                <div className="bg-white/40 p-8 rounded-2xl shadow-inner my-8">
                  <ul className="space-y-4 font-medium max-w-lg mx-auto">
                      <li className="flex items-start gap-4">
                        <div className="w-2 h-2 rounded-full bg-elegant-blue mt-2.5 flex-shrink-0"></div>
                        <span>clearing energetic blocks</span>
                      </li>
                      <li className="flex items-start gap-4">
                        <div className="w-2 h-2 rounded-full bg-elegant-blue mt-2.5 flex-shrink-0"></div>
                        <span>releasing emotional or karmic imprints</span>
                      </li>
                      <li className="flex items-start gap-4">
                        <div className="w-2 h-2 rounded-full bg-elegant-blue mt-2.5 flex-shrink-0"></div>
                        <span>bringing clarity and intuitive guidance</span>
                      </li>
                      <li className="flex items-start gap-4">
                        <div className="w-2 h-2 rounded-full bg-elegant-blue mt-2.5 flex-shrink-0"></div>
                        <span>restoring flow in areas that feel stuck</span>
                      </li>
                  </ul>
                </div>
                
                <p className="font-bold pt-4 text-elegant-blue text-2xl text-center">
                  You don’t need to do anything— just be open to receiving.
                </p>
              </div>
            </section>

            {/* Section 5 */}
            <section className="space-y-8 bg-elegant-blue text-warm-beige p-10 md:p-14 rounded-[2.5rem] shadow-xl max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-warm-beige text-center leading-tight mb-12">What you may experience</h2>
              
              <ul className="space-y-6 max-w-lg mx-auto">
                {[
                  "emotional lightness and calm",
                  "clarity in confusing situations",
                  "relief from internal heaviness",
                  "improved sense of balance and flow",
                  "deeper connection with yourself",
                  "a feeling of being supported and guided"
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
                  <p>“I came in feeling completely stuck—emotionally and mentally. There were issues in my relationship and also confusion in my career.</p>
                  <p>During the session, I felt a deep sense of calm. Things I was overthinking started becoming clearer.</p>
                  <p className="font-semibold border-l-4 border-accent-gold pl-4 md:pl-6 mt-8 md:mt-10">Over the next few weeks, I noticed shifts— my reactions changed, my clarity improved, and things slowly started moving again.”</p>
                </div>
                <p className="pt-10 font-bold text-right opacity-90 text-accent-gold text-xl">— S., Business Owner</p>
              </div>
          </div>
        </section>

        <main className="max-w-3xl mx-auto px-6 space-y-24 text-[18px] leading-relaxed pb-32 pt-24">
          
          {/* Important Note */}
          <section className="bg-accent-gold/10 border-2 border-accent-gold/30 p-8 rounded-2xl flex gap-6 items-start shadow-md">
            <AlertTriangle className="w-8 h-8 text-accent-gold flex-shrink-0 mt-1" />
            <div className="space-y-3">
              <h3 className="font-bold text-2xl text-elegant-blue">Important Note</h3>
              <p className="text-elegant-blue/90">
                Angel Healing is a supportive energy healing practice. It works at an emotional, energetic, and spiritual level.
              </p>
              <p className="text-elegant-blue/90 font-medium">
                For physical or medical conditions, it is meant to complement—not replace—professional medical care.
              </p>
            </div>
          </section>

          {/* Section 7 Who this is for */}
          <section className="space-y-8 text-center pt-8">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-elegant-blue mb-6 leading-tight">Who this is for</h2>
            <p className="italic text-xl opacity-90 max-w-md mx-auto">This is for you if:</p>

            <ul className="space-y-5 pt-8 text-left max-w-md mx-auto">
              {[
                "You feel blocked in one or more areas of life",
                "You are emotionally overwhelmed or energetically drained",
                "You need clarity, support, or direction",
                "You are open to receiving healing beyond logic",
                "You want a gentle yet powerful shift"
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
              <p className="text-2xl md:text-3xl italic opacity-90 font-medium">If you’re feeling stuck, heavy, or unclear—</p>
              <p className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight">and you’re ready to receive support and healing</p>
            </div>

            <div className="pt-10 flex justify-center">
              <button 
                onClick={() => window.open(canvaLink, "_blank")}
                className="bg-elegant-blue hover:bg-elegant-blue/90 text-warm-beige font-bold py-5 px-10 md:px-14 rounded-full shadow-2xl transition-all duration-300 text-xl md:text-2xl w-full sm:w-auto hover:scale-[1.02]"
              >
                Book your Angel Healing session
              </button>
            </div>
          </div>
        </section>
        
      </div>
    </>
  )
}
