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

export default function PastLifeRegressionPage() {
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
                  Past Life Healing & Release
                  <div className="h-2 w-32 bg-elegant-blue mt-6 rounded-full mx-auto lg:mx-0"></div>
                </h1>
                <p className="text-xl md:text-2xl text-elegant-blue/80 italic">
                  Some things in your life don't fully make sense… it feels deeper than just this life.
                </p>
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
                  src="/images/past-20life-20regression.jpeg"
                  alt="Past Life Healing"
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
                Some things in your life don’t fully make sense…
              </h2>
              
              <div className="max-w-2xl mx-auto space-y-8">
                <div className="grid gap-2 border-l-4 border-elegant-blue/40 pl-6 py-2">
                  <p>You feel a fear you can’t explain.</p>
                  <p>You keep attracting the same kind of relationships.</p>
                  <p>You feel blocked… even when everything looks fine on the outside.</p>
                </div>

                <p className="font-medium text-xl">You try to move forward— but something within doesn’t let you.</p>

                <div className="py-8 mt-4 text-center space-y-3">
                  <p className="opacity-80 text-lg">It starts to feel like—</p>
                  <p className="italic font-bold text-3xl text-elegant-blue">“It feels deeper than just this life.”</p>
                </div>
              </div>
            </section>

            {/* Section 2 */}
            <section className="space-y-10">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-elegant-blue text-center leading-tight mb-12">
                What this is
              </h2>
              
              <div className="space-y-6 text-lg max-w-2xl mx-auto">
                <p>
                  Past Life Healing & Release is a process where we access the deeper root of a pattern— which may not always come from your current life.
                </p>

                <p className="text-2xl font-medium border-l-4 border-elegant-blue pl-6 py-4 my-8">
                  Instead of you reliving or recalling a past life,<br/>
                  I access the relevant past life pattern through your records...
                </p>

                <p>
                  ...understand what is unresolved, and bring healing to it.
                </p>

                <p className="font-semibold text-xl">
                  This includes emotional release, closure, and energetic clearing—
                </p>

                <div className="bg-elegant-blue text-warm-beige p-8 rounded-2xl shadow-lg mt-8">
                  <p className="italic text-center text-xl leading-relaxed">
                    so the pattern no longer holds the same intensity in your present life.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 3 */}
            <section className="space-y-10">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-elegant-blue text-center leading-tight mb-12">
                How this shows up in real life
              </h2>
              
              <div className="max-w-2xl mx-auto">
                <div className="space-y-2 mb-8">
                  <p className="text-xl">You may experience it like this:</p>
                </div>

                <div className="py-4 px-4 sm:px-8 max-w-2xl mx-auto">
                  <ul className="space-y-6 text-xl text-elegant-blue/90">
                    {[
                      "A fear or anxiety that has no clear origin",
                      "Repeating relationship patterns you can’t break",
                      "Feeling emotionally triggered beyond the situation",
                      "A sense of heaviness or inner block you can’t explain",
                      "Difficulty moving forward despite clarity and effort",
                      "Feeling “stuck” in a way that logic cannot solve"
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-start gap-4">
                        <div className="w-2 h-2 rounded-full bg-elegant-blue mt-2.5 flex-shrink-0"></div>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="text-center space-y-2 py-10 mt-4 border-b border-elegant-blue/10 pb-16">
                  <p className="text-2xl font-bold">These patterns often have deeper roots.</p>
                </div>
              </div>
            </section>

            {/* Section 4 */}
            <section className="space-y-10">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-elegant-blue text-center leading-tight mb-12">
                What happens in a session
              </h2>
              
              <div className="max-w-3xl mx-auto border-l-4 border-accent-gold pl-6 md:pl-10 space-y-6 text-xl text-elegant-blue/90">
                <p>
                  In this session, we focus on what you are currently experiencing— your challenges, emotional patterns, or specific situations.
                </p>
                <p>
                  In your presence (online), I access the relevant past life connected to this pattern and work on healing it at the root. This may include:
                </p>
                <ul className="space-y-3 font-semibold pl-4">
                    <li>• Bringing closure to unresolved experiences</li>
                    <li>• Releasing emotional imprints</li>
                    <li>• Cord cutting or energetic disconnection</li>
                    <li>• Understanding the soul lesson behind the experience</li>
                </ul>
                <p className="font-bold pt-4 text-elegant-blue text-2xl">
                  You don’t have to relive the pain or experience— the process is gentle yet deep and focused on healing the root cause of problems.
                </p>
              </div>
            </section>

            {/* Section 5 */}
            <section className="space-y-8 bg-elegant-blue text-warm-beige p-10 md:p-14 rounded-[2.5rem] shadow-xl max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-warm-beige text-center leading-tight mb-12">What you may gain</h2>
              
              <ul className="space-y-6">
                {[
                  "Release from emotional patterns that feel unexplainable",
                  "Freedom from fears or heaviness you’ve been carrying",
                  "Clarity on why certain experiences keep repeating",
                  "A deeper sense of emotional lightness and relief",
                  "The ability to move forward without the same inner resistance"
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
                  <p>“I had a pattern of feeling emotionally overwhelmed in situations that didn’t seem that serious. I couldn’t understand why I was reacting that way.</p>
                  <p>During this session, something deeper was uncovered and healed. It wasn’t something I could have figured out on my own.</p>
                  <p>After that, I felt noticeably lighter. The same triggers didn’t affect me the way they used to.</p>
                  <p className="font-semibold border-l-4 border-accent-gold pl-4 md:pl-6 mt-8 md:mt-10">It felt like something had finally been released.”</p>
                </div>
                <p className="pt-10 font-bold text-right opacity-90 text-accent-gold text-xl">— N., Business Owner</p>
              </div>
          </div>
        </section>

        <main className="max-w-3xl mx-auto px-6 space-y-32 text-[18px] leading-relaxed pb-32 pt-16">
          {/* Section 7 Who this is for */}
          <section className="space-y-8 text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-elegant-blue mb-6 leading-tight">Who this is for</h2>
            <p className="italic text-xl opacity-90 max-w-md mx-auto">This is for you if:</p>

            <ul className="space-y-5 pt-8 text-left max-w-md mx-auto">
              {[
                "You feel something is unresolved at a deeper level",
                "You experience patterns or emotions that don’t fully make sense",
                "You’ve tried to work on yourself, but something still remains",
                "You’re ready to release what you’ve been carrying—at the root"
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
              <p className="text-2xl md:text-3xl italic opacity-90 font-medium">If you feel there is something deeper influencing your life… and you’re ready to release it—</p>
              <p className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight">maybe it’s time to understand what’s happening within.</p>
            </div>

            <div className="pt-10 flex justify-center">
              <button 
                onClick={() => window.open(canvaLink, "_blank")}
                className="bg-elegant-blue hover:bg-elegant-blue/90 text-warm-beige font-bold py-5 px-10 md:px-14 rounded-full shadow-2xl transition-all duration-300 text-xl md:text-2xl w-full sm:w-auto hover:scale-[1.02]"
              >
                Book Your Past Life Healing & Release session
              </button>
            </div>
          </div>
        </section>
        
      </div>
    </>
  )
}
