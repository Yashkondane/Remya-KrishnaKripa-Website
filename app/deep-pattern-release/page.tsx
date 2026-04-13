"use client"

import { Libre_Baskerville } from "next/font/google"
import React from "react"
import SimplePreloader from "@/components/simple-preloader"
import Image from "next/image"
import { ArrowRight, CheckCircle2, AlertTriangle, BookOpen } from "lucide-react"

const libreBaskerville = Libre_Baskerville({
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
  display: "swap",
})

export default function DeepPatternReleasePage() {
  const canvaLink = "https://www.canva.com/design/placeholder" // Placeholder
  const learnLink = "/become-a-healer" // Placeholder for the next page link

  return (
    <>
      <SimplePreloader />
      <div className={`min-h-screen beige-bg text-elegant-blue ${libreBaskerville.className}`}>
        
        <main className="max-w-5xl mx-auto px-6 py-16 md:py-24 space-y-20 text-[18px] leading-relaxed overflow-hidden">
          
          {/* Hero Header Area */}
          <div className="flex flex-col lg:flex-row gap-16 items-center lg:items-start border-b border-elegant-blue/10 pb-16">
            <div className="lg:w-3/5 space-y-10">
              <div className="space-y-6 text-center lg:text-left">
                <h1 className="text-4xl md:text-5xl lg:text-5xl font-bold leading-tight text-elegant-blue">
                  Deep Pattern Release & Integrated Healing
                  <div className="h-2 w-32 bg-elegant-blue mt-6 rounded-full mx-auto lg:mx-0"></div>
                </h1>
                <div className="text-xl md:text-2xl text-elegant-blue/80 italic space-y-2 font-medium">
                  <p>You’ve tried to change your life…</p>
                  <p className="font-bold">but the same patterns keep coming back.</p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
                <button 
                  onClick={() => window.open(canvaLink, "_blank")}
                  className="bg-elegant-blue hover:bg-elegant-blue/90 text-warm-beige font-semibold py-4 px-8 rounded-full shadow-xl transition-all duration-300 flex items-center justify-center gap-3 text-lg group"
                >
                  Apply Here
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>

            <div className="lg:w-2/5">
               <Image
                  src="/images/image copy 5.png"
                  alt="Deep Pattern Release & Integrated Healing"
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
                You’ve worked on yourself.
              </h2>
              
              <div className="max-w-2xl mx-auto space-y-8">
                <div className="grid gap-2 border-l-4 border-elegant-blue/40 pl-6 py-2 text-xl text-elegant-blue/90">
                  <p>You’ve understood your problems.</p>
                </div>

                <div className="py-2 space-y-2 mb-4">
                  <p className="text-xl font-bold text-elegant-blue">And yet—</p>
                </div>

                <div className="space-y-4 pt-4">
                  {[
                    "The same emotional triggers keep repeating",
                    "The same relationship patterns show up again",
                    "You start something… but can’t sustain it",
                    "You feel stuck between knowing and doing",
                    "You feel like something deeper is holding you back"
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-start gap-4 text-xl">
                      <div className="w-2 h-2 rounded-full bg-accent-gold mt-2.5 flex-shrink-0"></div>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>

                <div className="py-8 mt-4 text-center space-y-3 border-t border-elegant-blue/10 pt-16">
                  <p className="opacity-90 text-2xl font-bold">It’s not because you’re not trying.</p>
                  <p className="text-xl italic text-elegant-blue mt-4">It’s because:</p>
                  <p className="font-bold text-2xl text-accent-gold italic">“you are trying to change the surface… while the root is still active.”</p>
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
                  Deep Pattern Release & Integrated Healing is a multi-layered healing process that works on the root cause of recurring patterns in your life.
                </p>

                <p className="text-xl font-bold mt-8">These patterns may come from:</p>
                <div className="bg-white/40 p-6 rounded-xl shadow-sm text-xl border-l-4 border-accent-gold space-y-2 font-medium">
                  <p>your current life experiences</p>
                  <p>emotional wounds <span className="italic opacity-80">(inner child)</span></p>
                  <p>subconscious beliefs</p>
                  <p>karmic imprints or past-life influences</p>
                </div>

                <p className="text-xl font-bold pt-6 italic text-elegant-blue text-center">This is not one technique.</p>
                <p className="text-center font-medium opacity-90 pb-8">It is an integrated approach that brings together:</p>
                
                <div className="flex flex-wrap justify-center gap-4 text-center">
                  {["Akashic insight", "inner child healing", "energy healing", "emotional release", "pattern re-alignment"].map((item, idx) => (
                    <div key={idx} className="bg-elegant-blue/5 border border-elegant-blue/20 rounded-full px-6 py-3 font-semibold text-elegant-blue">
                      {item}
                    </div>
                  ))}
                </div>

                <div className="bg-elegant-blue text-warm-beige p-8 rounded-2xl shadow-lg mt-8 text-center space-y-4">
                  <p className="italic text-xl font-medium">So the shift is not temporary—</p>
                  <p className="text-2xl font-bold italic text-accent-gold">it is deep and lasting.</p>
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
                  <p>Repeating relationship patterns</p>
                  <p>Career stagnation despite effort</p>
                  <p>Money blocks or inconsistency</p>
                  <p>Emotional triggers that don’t go away</p>
                  <p>Fear, self-doubt, or inner resistance</p>
                  <p>Cycles of starting and stopping</p>
                  <p>Feeling stuck, even after “doing the work”</p>
                </div>

                <div className="text-center space-y-2 py-10 mt-4 border-b border-elegant-blue/10 pb-16">
                  <p className="text-2xl font-bold">This is where most people feel frustrated—</p>
                  <p className="text-xl italic text-elegant-blue opacity-80 mt-2 font-semibold">because they’ve already tried so much.</p>
                </div>
              </div>
            </section>

            {/* Section 4 */}
            <section className="space-y-10">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-elegant-blue text-center leading-tight mb-12">
                What happens in this process
              </h2>
              
              <div className="max-w-3xl mx-auto space-y-6 text-xl text-elegant-blue/90">
                <p className="text-center font-bold text-2xl text-accent-gold">
                  This is not just a single session.
                </p>
                <p className="text-center italic opacity-90">
                  It is a deeper healing journey based on your needs.
                </p>
                
                <p className="text-center pt-8">
                  We work step by step to:
                </p>

                <div className="bg-white/40 p-8 rounded-2xl shadow-inner my-6 space-y-4">
                  <div className="space-y-4 font-medium pl-2 md:pl-8">
                      <p className="flex items-start gap-4">
                        <div className="w-2 h-2 rounded-full bg-elegant-blue mt-2.5 flex-shrink-0"></div>
                        <span>identify the root pattern behind your situation</span>
                      </p>
                      <p className="flex items-start gap-4">
                        <div className="w-2 h-2 rounded-full bg-elegant-blue mt-2.5 flex-shrink-0"></div>
                        <span>understand where it is coming from</span>
                      </p>
                      <p className="flex items-start gap-4">
                        <div className="w-2 h-2 rounded-full bg-elegant-blue mt-2.5 flex-shrink-0"></div>
                        <span>release emotional and energetic imprints</span>
                      </p>
                      <p className="flex items-start gap-4">
                        <div className="w-2 h-2 rounded-full bg-elegant-blue mt-2.5 flex-shrink-0"></div>
                        <span>clear subconscious resistance</span>
                      </p>
                      <p className="flex items-start gap-4">
                        <div className="w-2 h-2 rounded-full bg-elegant-blue mt-2.5 flex-shrink-0"></div>
                        <span>shift the internal pattern at its core</span>
                      </p>
                      <p className="flex items-start gap-4">
                        <div className="w-2 h-2 rounded-full bg-elegant-blue mt-2.5 flex-shrink-0"></div>
                        <span>support you in integrating the change into your life</span>
                      </p>
                  </div>
                </div>
                
                <div className="text-center space-y-4 pt-4 border-l-4 border-accent-gold pl-6 my-8 py-2 md:text-left">
                  <p className="font-bold text-elegant-blue text-2xl">Each session builds on the previous one—</p>
                  <p className="text-xl">so the transformation becomes stable and real.</p>
                </div>
              </div>
            </section>

            {/* Section 5 */}
            <section className="space-y-8 bg-elegant-blue text-warm-beige p-10 md:p-14 rounded-[2.5rem] shadow-xl max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-warm-beige text-center leading-tight mb-12">What you may experience</h2>
              
              <ul className="space-y-6 max-w-lg mx-auto">
                {[
                  "Breaking of long-standing patterns",
                  "Emotional freedom and stability",
                  "Clarity in decisions and direction",
                  "Confidence in taking action",
                  "Consistency in growth (career, money, relationships)",
                  "Feeling aligned, grounded, and in control"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-5 text-lg">
                    <CheckCircle2 className="w-6 h-6 text-accent-gold flex-shrink-0 opacity-100" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div className="pt-8 text-center mt-8 border-t border-white/10 space-y-2">
                <p className="text-xl font-bold">This is where your life starts moving differently—</p>
                <p className="text-xl opacity-90 italic">not because you are forcing it,</p>
                <p className="text-2xl font-bold italic text-accent-gold mt-2">“but because the pattern itself has shifted.”</p>
              </div>
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
                  <p>“I had been working on myself for years, but I kept falling back into the same patterns—especially in relationships and career decisions.</p>
                  <p>This process helped me see what I couldn’t see before. More importantly, it helped me release it.</p>
                  <p className="font-semibold border-l-4 border-accent-gold pl-4 md:pl-6 mt-8 md:mt-10">For the first time, I felt like something actually changed at the root. My reactions changed, my decisions changed… and my results started changing too.”</p>
                </div>
                <p className="pt-10 font-bold text-right opacity-90 text-accent-gold text-xl">— M., Founder</p>
              </div>
          </div>
        </section>

        <main className="max-w-3xl mx-auto px-6 space-y-24 text-[18px] leading-relaxed pb-32 pt-24">
          
          {/* Important Note */}
          <section className="bg-accent-gold/10 border-2 border-accent-gold/30 p-8 rounded-2xl flex gap-6 items-start shadow-md">
            <AlertTriangle className="w-8 h-8 text-accent-gold flex-shrink-0 mt-1" />
            <div className="space-y-3">
              <h3 className="font-bold text-2xl text-elegant-blue">Important</h3>
              <p className="text-elegant-blue/90 font-medium text-xl">
                This is not a quick fix.
              </p>
              <p className="text-elegant-blue/90">
                This process is for those who are ready for deeper transformation.
              </p>
            </div>
          </section>

          {/* Section 7 Who this is for */}
          <section className="space-y-8 text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-elegant-blue mb-6 leading-tight">Who this is for</h2>
            <p className="italic text-xl opacity-90 max-w-md mx-auto">This is for you if:</p>

            <ul className="space-y-5 pt-8 text-left max-w-md mx-auto">
              {[
                "You are tired of repeating the same patterns",
                "You’ve already tried different forms of healing or self-work",
                "You feel something deeper is holding you back",
                "You are ready for real, lasting change",
                "You are willing to go beyond surface-level solutions"
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-4">
                  <div className="w-2 h-2 rounded-full bg-accent-gold mt-2.5 flex-shrink-0"></div>
                  <span className="text-lg">{item}</span>
                </li>
              ))}
            </ul>
          </section>
        </main>
        
        {/* Final Call to Action & Learn Link - Edge to Edge Golden Background */}
        <section className="w-full bg-accent-gold text-elegant-blue py-20 md:py-32 text-center px-6">
          <div className="max-w-4xl mx-auto space-y-12">
            
            <div className="space-y-6">
              <p className="text-2xl md:text-3xl italic opacity-90 font-medium">If you’re ready to stop repeating the same cycles—</p>
              <p className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight">and finally shift what’s been holding you back at the root</p>
            </div>

            <div className="pt-6 pb-20 border-b border-elegant-blue/10 flex justify-center">
              <button 
                onClick={() => window.open(canvaLink, "_blank")}
                className="bg-elegant-blue hover:bg-elegant-blue/90 text-warm-beige font-bold py-5 px-10 md:px-14 rounded-full shadow-2xl transition-all duration-300 text-xl md:text-2xl w-full sm:w-auto hover:scale-[1.02]"
              >
                Apply for Deep Pattern Release
              </button>
            </div>

            {/* Become A Healer Block */}
            <div className="space-y-8 pt-8">
              <p className="text-xl md:text-2xl opacity-90 font-medium max-w-2xl mx-auto">
                If you feel called to go deeper—not just to heal, but to understand and work with these methods yourself— you can explore how to learn and become a healer.
              </p>
              
              <div className="flex justify-center">
                <a 
                  href={learnLink}
                  className="bg-transparent border-2 border-elegant-blue text-elegant-blue hover:bg-elegant-blue hover:text-warm-beige font-bold py-4 px-10 rounded-full shadow-md transition-all duration-300 text-xl flex items-center gap-3 group"
                >
                  Become an Energy Healer
                  <BookOpen className="w-5 h-5 group-hover:scale-110 transition-transform" />
                </a>
              </div>
            </div>

          </div>
        </section>
        
      </div>
    </>
  )
}
