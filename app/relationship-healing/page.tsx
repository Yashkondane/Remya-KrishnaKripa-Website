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

export default function RelationshipHealingPage() {
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
                  Relationship Healing
                  <div className="h-2 w-32 bg-elegant-blue mt-6 rounded-full mx-auto lg:mx-0"></div>
                </h1>
                <div className="text-xl md:text-2xl text-elegant-blue/80 italic space-y-2 font-medium">
                  <p>You’re not just hurting because of the relationship…</p>
                  <p className="font-bold">you’re hurting because you don’t understand what’s happening.</p>
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
                  src="/images/image copy 4.png"
                  alt="Relationship Healing"
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
                You’ve tried to make it work.
              </h2>
              
              <div className="max-w-2xl mx-auto space-y-8">
                <div className="grid gap-2 border-l-4 border-elegant-blue/40 pl-6 py-2 text-xl text-elegant-blue/90">
                  <p>You’ve adjusted.</p>
                  <p>You’ve waited.</p>
                  <p>You’ve hoped.</p>
                </div>

                <div className="py-2 space-y-2 mb-4">
                  <p className="text-xl font-bold text-elegant-blue">But still…</p>
                </div>

                <div className="space-y-4 pt-4">
                  {[
                    "The same patterns keep repeating",
                    "There is distance, confusion, or silence",
                    "You feel emotionally drained or unfulfilled",
                    "You don’t know where you stand anymore",
                    "You feel deeply connected… yet deeply hurt"
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-start gap-4 text-xl">
                      <div className="w-2 h-2 rounded-full bg-accent-gold mt-2.5 flex-shrink-0"></div>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>

                <div className="py-8 mt-4 text-center space-y-3 border-t border-elegant-blue/10 pt-16">
                  <p className="opacity-90 text-xl font-medium">And somewhere within, you keep asking:</p>
                  <p className="font-bold text-2xl text-elegant-blue mt-2 italic">“Why this connection? Why this pain?”</p>
                </div>
              </div>
            </section>

            {/* Section 2 */}
            <section className="space-y-10">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-elegant-blue text-center leading-tight mb-12">
                What this is?
              </h2>
              
              <div className="space-y-8 text-lg max-w-2xl mx-auto">
                <p className="text-xl font-medium border-l-4 border-elegant-blue pl-6 py-2">
                  Relationship Healing is about understanding the deeper patterns and soul-level connections behind your relationships.
                </p>

                <p className="text-xl font-bold mt-8">Because relationships are not just about:</p>
                <div className="bg-white/40 p-6 rounded-xl shadow-sm text-xl border-l-4 border-accent-gold space-y-2 font-medium opacity-80">
                  <p>communication</p>
                  <p>compatibility</p>
                  <p>effort</p>
                </div>

                <p className="text-xl font-bold pt-6">They are also shaped by:</p>
                <div className="bg-white/40 p-6 rounded-xl shadow-sm text-xl border-l-4 border-accent-gold space-y-2 font-medium">
                  <p>past emotional wounds</p>
                  <p>subconscious patterns</p>
                  <p>karmic connections and soul contract lessons</p>
                </div>

                <div className="bg-elegant-blue text-warm-beige p-8 rounded-2xl shadow-lg mt-8 text-center space-y-4">
                  <p className="italic text-xl font-medium">When you understand this, the relationship stops feeling confusing…</p>
                  <p className="text-2xl font-bold italic text-accent-gold">and starts making sense.</p>
                </div>
              </div>
            </section>

            {/* Section 3 */}
            <section className="space-y-10">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-elegant-blue text-center leading-tight mb-12">
                How this shows up in real life
              </h2>
              
              <div className="max-w-2xl mx-auto space-y-8">
                <p className="text-xl text-center mb-8">You may be experiencing:</p>

                <div className="space-y-6 text-xl text-elegant-blue/90 border-l-4 border-accent-gold pl-6 md:pl-8 py-2">
                  <p>Repeating the same relationship patterns</p>
                  <p>Emotional attachment that feels hard to break</p>
                  <p>Fear of abandonment or rejection</p>
                  <p>On-and-off or confusing dynamics</p>
                  <p>Feeling triggered, hurt, or emotionally overwhelmed</p>
                  <p>Difficulty letting go—even when you know you should</p>
                </div>

                <div className="text-center space-y-2 py-10 mt-4 border-b border-elegant-blue/10 pb-16">
                  <p className="text-2xl font-bold">These are not random.</p>
                  <p className="text-xl italic text-elegant-blue opacity-80 mt-2 font-semibold">They are often connected to deeper emotional and soul-level patterns.</p>
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
                  In this session, we explore your relationship at a deeper level— not just what is happening, but why it is happening.
                </p>
                <p className="text-center">
                  Through insight and healing, we work on:
                </p>
                
                <div className="bg-white/40 p-8 rounded-2xl shadow-inner my-8 space-y-8">
                  <div className="space-y-2">
                    <p className="font-bold text-elegant-blue flex items-center gap-3"><div className="w-2 h-2 rounded-full bg-accent-gold flex-shrink-0"></div> understanding the soul contract behind the connection.</p>
                    <p className="pl-5 italic opacity-90 text-lg">The deeper agreements at a soul level that bring two people together for growth and learning.</p>
                  </div>

                  <div className="space-y-2">
                    <p className="font-bold text-elegant-blue flex items-center gap-3"><div className="w-2 h-2 rounded-full bg-accent-gold flex-shrink-0"></div> identifying what the relationship is mirroring back to you.</p>
                    <p className="pl-5 italic opacity-90 text-lg">How the other person reflects parts of you that need attention or healing.</p>
                  </div>

                  <div className="space-y-2">
                    <p className="font-bold text-elegant-blue flex items-center gap-3"><div className="w-2 h-2 rounded-full bg-accent-gold flex-shrink-0"></div> bringing awareness to your shadow patterns.</p>
                    <p className="pl-5 italic opacity-90 text-lg">Healing the hidden emotional wounds, fears, and patterns within you.</p>
                  </div>

                  <div className="space-y-2 pt-2">
                    <p className="flex items-center gap-3"><div className="w-2 h-2 rounded-full bg-accent-gold flex-shrink-0"></div> releasing emotional pain, attachment, or energetic cords</p>
                    <p className="flex items-center gap-3"><div className="w-2 h-2 rounded-full bg-accent-gold flex-shrink-0"></div> creating clarity on your next aligned step</p>
                  </div>
                </div>
                
                <div className="text-center space-y-4 pt-4 border-l-4 border-elegant-blue pl-6 my-8 py-2 md:text-left">
                  <p className="font-bold text-elegant-blue text-2xl">This is not about fixing the other person—</p>
                  <p className="text-xl">it’s about healing and empowering you, which in turn shifts the outer world.</p>
                </div>
              </div>
            </section>

            {/* Section 5 */}
            <section className="space-y-8 bg-elegant-blue text-warm-beige p-10 md:p-14 rounded-[2.5rem] shadow-xl max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-warm-beige text-center leading-tight mb-12">What you may gain</h2>
              
              <ul className="space-y-6 max-w-lg mx-auto">
                {[
                  "Deep clarity about your relationship",
                  "Emotional relief and inner peace",
                  "Ability to detach from unhealthy patterns",
                  "Awareness of your own emotional triggers and needs",
                  "Confidence to make aligned decisions",
                  "Freedom from confusion and emotional overwhelm"
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
                  <p>“I felt stuck in a relationship I couldn’t understand. It was intense, emotional, and confusing.</p>
                  <p>During the session, I realised this connection was reflecting parts of me I hadn’t seen before. That awareness itself was powerful.</p>
                  <p className="font-semibold border-l-4 border-accent-gold pl-4 md:pl-6 mt-8 md:mt-10">After that, I stopped reacting the same way. I felt calmer, clearer… and more in control of my decisions.”</p>
                </div>
                <p className="pt-10 font-bold text-right opacity-90 text-accent-gold text-xl">— P., Entrepreneur</p>
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
                "You feel confused or emotionally stuck in a relationship",
                "You keep repeating similar patterns",
                "You feel deeply attached but also hurt",
                "You want to understand the deeper meaning of your connection",
                "You are ready to heal—not just cope"
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
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="space-y-6">
              <p className="text-2xl md:text-3xl italic opacity-90 font-medium">If your relationship feels intense, confusing, or emotionally draining—</p>
              <p className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight">and you’re ready to understand, heal, and move forward</p>
            </div>

            <div className="pt-10 flex justify-center">
              <button 
                onClick={() => window.open(canvaLink, "_blank")}
                className="bg-elegant-blue hover:bg-elegant-blue/90 text-warm-beige font-bold py-5 px-10 md:px-14 rounded-full shadow-2xl transition-all duration-300 text-xl md:text-2xl w-full sm:w-auto hover:scale-[1.02]"
              >
                Book Your Relationship Healing session
              </button>
            </div>
          </div>
        </section>
        
      </div>
    </>
  )
}
