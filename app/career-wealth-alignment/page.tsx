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

export default function CareerWealthAlignmentPage() {
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
                  Career & Wealth Alignment
                  <div className="h-2 w-32 bg-elegant-blue mt-6 rounded-full mx-auto lg:mx-0"></div>
                </h1>
                <p className="text-xl md:text-2xl text-elegant-blue/80 italic">
                  You’re doing everything right… so why isn’t it working the way it should?
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
                  src="/images/image.png"
                  alt="Career and Wealth Alignment"
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
                You’re doing everything right…
              </h2>
              
              <div className="max-w-2xl mx-auto space-y-8">
                <div className="grid gap-2 border-l-4 border-elegant-blue/40 pl-6 py-2">
                  <p>You’ve worked hard to build your career.</p>
                  <p>You’ve invested in learning, growth, and opportunities.</p>
                  <p>Yet something feels off.</p>
                </div>

                <div className="py-2">
                  <p className="font-medium text-xl">Your growth feels slower than it should be</p>
                  <p className="font-medium text-xl">Your income doesn’t reflect your effort or potential</p>
                  <p className="font-medium text-xl">You feel stuck, confused, or unsure about your next move</p>
                  <p className="font-medium text-xl">You know you’re capable of more—but you’re not there yet</p>
                </div>

                <div className="py-8 mt-4 text-center space-y-3">
                  <p className="opacity-80 text-lg">It’s frustrating… because on paper, everything looks fine.</p>
                  <p className="italic font-bold text-3xl text-elegant-blue">“But inside, you know something isn’t aligned.”</p>
                </div>
              </div>
            </section>

            {/* Section 2 */}
            <section className="space-y-10">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-elegant-blue text-center leading-tight mb-12">
                What this is ?
              </h2>
              
              <div className="space-y-6 text-lg max-w-2xl mx-auto">
                <p>
                  Career & Wealth Alignment is about understanding <strong>why your external growth is not matching your potential.</strong>
                </p>

                <p className="text-2xl font-medium border-l-4 border-elegant-blue pl-6 py-4 my-8">
                  Because career and money are not just about:<br/>
                  skills<br/>
                  strategy<br/>
                  hard work
                </p>

                <p>
                  They are deeply influenced by your internal patterns— how you see yourself, what you believe you deserve, and what you are subconsciously holding onto.
                </p>

                <div className="bg-elegant-blue text-warm-beige p-8 rounded-2xl shadow-lg mt-8">
                  <p className="italic text-center text-xl leading-relaxed">
                    This work helps you identify those deeper blocks and shift them—so your outer reality can change.
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
                      "You keep working hard, but your career doesn’t move forward",
                      "You struggle to increase your income despite effort",
                      "You feel undervalued, underpaid, or overlooked",
                      "You hesitate to take bigger opportunities",
                      "You fear visibility, growth, or responsibility",
                      "You start something… but can’t sustain or scale it",
                      "You feel stuck between comfort and growth"
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-start gap-4">
                        <div className="w-2 h-2 rounded-full bg-elegant-blue mt-2.5 flex-shrink-0"></div>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="text-center space-y-2 py-10 mt-4 border-b border-elegant-blue/10 pb-16">
                  <p className="text-2xl font-bold">These are not just external problems.</p>
                  <p className="text-xl italic text-elegant-blue opacity-80 font-bold">There is always a deeper pattern behind them.</p>
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
                  In this session, we focus on your current career or financial situation— your challenges, goals, and areas where you feel stuck.
                </p>
                <p>
                  Through Akashic insights and deep inner healing, we identify the patterns influencing your growth and decisions.
                </p>
                <p>This may include:</p>
                <ul className="space-y-3 font-semibold pl-4">
                    <li>• uncovering limiting patterns around money and success</li>
                    <li>• understanding blocks in career or business growth</li>
                    <li>• releasing internal resistance or fear</li>
                    <li>• bringing clarity to your next aligned steps</li>
                </ul>
                <p className="font-bold pt-4 text-elegant-blue text-2xl">
                  This is not just insight— it’s about creating a shift in how you show up and move forward.
                </p>
              </div>
            </section>

            {/* Section 5 */}
            <section className="space-y-8 bg-elegant-blue text-warm-beige p-10 md:p-14 rounded-[2.5rem] shadow-xl max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-warm-beige text-center leading-tight mb-12">What you may gain</h2>
              
              <ul className="space-y-6">
                {[
                  "Clarity on what is blocking your career or financial growth",
                  "Confidence in making aligned career or business decisions",
                  "A healthier relationship with money and self-worth",
                  "Ability to take bigger opportunities without fear",
                  "A sense of direction and forward movement",
                  "Alignment between your potential and your results"
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
                  <p>“I was working hard, but my career felt stuck and my income wasn’t growing. I kept thinking I needed a better strategy or more skills.</p>
                  <p>During this session, I realised there were deeper patterns affecting how I showed up—especially around visibility and self-worth.</p>
                  <p>After that, I started making different decisions. I spoke up more, took ownership, and stopped undervaluing myself.</p>
                  <p className="font-semibold border-l-4 border-accent-gold pl-4 md:pl-6 mt-8 md:mt-10">Within a few months, I saw a clear shift—not just in my role, but also in my income.”</p>
                </div>
                <p className="pt-10 font-bold text-right opacity-90 text-accent-gold text-xl">— K., Senior Professional</p>
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
                "You feel stuck or stagnant in your career or business",
                "Your income doesn’t reflect your effort or capability",
                "You are unsure about your next step or direction",
                "You feel there is more potential within you, but something is holding you back",
                "You’re ready to grow—but want to do it in alignment, not force"
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
              <p className="text-2xl md:text-3xl italic opacity-90 font-medium">If you’re ready to understand what’s really holding your growth back—</p>
              <p className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight">and align your career and wealth with your true potential</p>
            </div>

            <div className="pt-10 flex justify-center">
              <button 
                onClick={() => window.open(canvaLink, "_blank")}
                className="bg-elegant-blue hover:bg-elegant-blue/90 text-warm-beige font-bold py-5 px-10 md:px-14 rounded-full shadow-2xl transition-all duration-300 text-xl md:text-2xl w-full sm:w-auto hover:scale-[1.02]"
              >
                Book your Career & Wealth Alignment session
              </button>
            </div>
          </div>
        </section>
        
      </div>
    </>
  )
}
