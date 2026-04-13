"use client"

import { Libre_Baskerville } from "next/font/google"
import React, { useState } from "react"
import SimplePreloader from "@/components/simple-preloader"
import Image from "next/image"
import { ArrowRight, CheckCircle2, ChevronLeft, ChevronRight } from "lucide-react"

const libreBaskerville = Libre_Baskerville({
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
  display: "swap",
})

export default function AkashicRecordReadingPage() {
  const canvaLink = "https://www.canva.com/design/placeholder" // Placeholder as requested
  const [activeTestimonial, setActiveTestimonial] = useState(0)

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
                  Akashic Record Reading
                  <div className="h-2 w-32 bg-elegant-blue mt-6 rounded-full mx-auto lg:mx-0"></div>
                </h1>
                <p className="text-xl md:text-2xl text-elegant-blue/80 italic">
                  Understand the deeper patterns of your life, so you can finally shift them.
                </p>
              </div>

              <div className="flex justify-center lg:justify-start">
                <button 
                  onClick={() => window.open(canvaLink, "_blank")}
                  className="bg-elegant-blue hover:bg-elegant-blue/90 text-warm-beige font-semibold py-4 px-8 rounded-full shadow-xl transition-all duration-300 flex items-center gap-3 text-lg group"
                >
                  Book your Reading 
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>

            <div className="lg:w-2/5">
               <Image
                  src="/images/akashic-reading.jpeg"
                  alt="Akashic Reading"
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
                Why does your life feel stuck... even when you’re trying your best?
              </h2>
              
              <div className="max-w-2xl mx-auto space-y-8">
                <div className="grid gap-2 border-l-4 border-elegant-blue/40 pl-6 py-2">
                  <p>You work hard.</p>
                  <p>You try to grow.</p>
                  <p>You make better choices.</p>
                </div>

                <p className="font-medium text-xl">Yet something doesn’t fully shift.</p>

                <ul className="space-y-4 pt-4">
                  {[
                    "Your career doesn’t move the way it should",
                    "Money comes... but doesn’t stay or grow",
                    "Relationships repeat the same emotional patterns",
                    "You feel stuck, confused, or constantly overthinking"
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-4">
                      <CheckCircle2 className="w-6 h-6 text-accent-gold flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="py-8 mt-4 text-center space-y-3">
                  <p className="opacity-80 text-lg">It starts to feel like—</p>
                  <p className="italic font-bold text-3xl text-elegant-blue">“Why does this keep happening to me?”</p>
                </div>
              </div>
            </section>

            {/* Section 2 */}
            <section className="space-y-10">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-elegant-blue text-center leading-tight mb-12">
                What is an Akashic Record Reading?
              </h2>
              
              <div className="space-y-6 text-lg max-w-2xl mx-auto">
                <p>
                  The Akashic Records can be understood as a space that holds the deeper imprint of your soul’s journey— your patterns, experiences, and lessons.
                </p>

                <p>
                  An Akashic Record Reading helps you access this deeper layer to understand <i className="font-semibold px-1">why certain things are happening in your life.</i>
                </p>

                <p className="text-2xl font-medium border-l-4 border-elegant-blue pl-6 py-4 my-8">
                  Not just what is happening—<br/>
                  but the <strong>root behind it.</strong>
                </p>

                <p>
                  The root of these patterns may come from your current life experiences— or from deeper layers of your soul’s journey.
                </p>

                <p className="font-semibold text-xl">What matters is understanding it... so it can finally shift.</p>

                <div className="bg-elegant-blue text-warm-beige p-8 rounded-2xl shadow-lg mt-8">
                  <p className="italic text-center text-xl leading-relaxed">
                    This is not about predicting your future.<br />
                    It is about bringing clarity to your present—<br />
                    so you can create a different future.
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
                  <p className="text-xl">You may not call it “patterns”... but it shows up like this:</p>
                </div>

                <div className="py-4 px-4 sm:px-8 max-w-2xl mx-auto">
                  <ul className="space-y-6 text-xl text-elegant-blue/90">
                    {[
                      "You keep working hard, but your growth feels slower than it should",
                      "You earn well, but struggle to build or hold wealth",
                      "You attract similar types of relationships again and again",
                      "You feel blocked when trying to move to the next level",
                      "You know you’re capable of more, but something holds you back",
                      "You feel emotionally heavy without fully understanding why"
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-start gap-4">
                        <div className="w-2 h-2 rounded-full bg-elegant-blue mt-2.5 flex-shrink-0"></div>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="text-center space-y-2 py-10 mt-4 border-b border-elegant-blue/10 pb-16">
                  <p className="text-2xl font-bold">These are not random.</p>
                  <p className="text-xl italic text-elegant-blue opacity-80">There is always a deeper reason behind them.</p>
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
                  In your session, we focus on what you are currently experiencing— your questions, your challenges, your confusion.
                </p>
                <p>
                  Through the Akashic Records, we access the deeper patterns behind these situations and bring clarity to what is really going on.
                </p>
                <p>
                  Where needed, the session may also include Akashic healing to address the root cause.
                </p>
                <p className="font-bold pt-4 text-elegant-blue text-2xl">
                  This creates a shift in how you see your life— and how you move forward from it.
                </p>
              </div>
            </section>

            {/* Section 5 */}
            <section className="space-y-8 bg-elegant-blue text-warm-beige p-10 md:p-14 rounded-[2.5rem] shadow-xl max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-warm-beige text-center leading-tight mb-12">What you may gain</h2>
              
              <ul className="space-y-6">
                {[
                  "Clarity on why your life feels stuck or repetitive",
                  "Understanding of blocks in career, business, or finances",
                  "Insight into relationship patterns and emotional cycles",
                  "A deeper sense of direction and decision-making clarity",
                  "The awareness needed to start creating real change"
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
          
          <div className="max-w-6xl mx-auto px-6">
            {/* Desktop View (Side by Side) */}
            <div className="hidden md:grid grid-cols-2 gap-8">
              {/* Review 1 */}
              <div className="bg-white/5 border border-white/10 p-10 rounded-2xl shadow-lg shadow-black/20">
                <h3 className="font-bold text-xl mb-6 uppercase tracking-wider text-sm opacity-90 text-accent-gold">Career + Money</h3>
                <div className="space-y-4 text-lg opacity-90 italic">
                  <p>“I came to the session feeling completely stuck in my career. I had the skills, I was putting in the effort, but nothing was growing the way it should—especially my income.</p>
                  <p>During the reading, I realised this wasn’t about strategy at all. There was a deeper pattern around how I was valuing myself and receiving opportunities.</p>
                  <p>That clarity changed how I started showing up at work. Within a few weeks, I had a new opportunity come in—and for the first time, I negotiated confidently and got what I truly deserved.</p>
                  <p className="font-semibold border-l-4 border-accent-gold pl-4 mt-6">It wasn’t just external change... something shifted within me.”</p>
                </div>
                <p className="pt-8 font-bold text-right opacity-90">— Pallavi, Senior Corporate Director</p>
              </div>

              {/* Review 2 */}
              <div className="bg-white/5 border border-white/10 p-10 rounded-2xl shadow-lg shadow-black/20">
                <h3 className="font-bold text-xl mb-6 uppercase tracking-wider text-sm opacity-90 text-accent-gold">Relationship + Emotional Pattern</h3>
                <div className="space-y-4 text-lg opacity-90 italic">
                  <p>“I kept attracting the same kind of relationships—emotionally unavailable, confusing, and draining. Even when I tried to choose differently, it somehow ended the same way.</p>
                  <p>This session helped me understand the deeper emotional pattern I was carrying. It was something I had never been able to see on my own.</p>
                  <p>After the session, I didn’t just feel lighter—I started responding differently. For the first time, I was able to set boundaries without guilt.</p>
                  <p className="font-semibold border-l-4 border-accent-gold pl-4 mt-6">Everything didn’t magically change overnight... but I finally felt like I was no longer repeating the same cycle.”</p>
                </div>
                <p className="pt-8 font-bold text-right opacity-90">— Sush., Business owner</p>
              </div>
            </div>

            {/* Mobile View (Carousel) */}
            <div className="md:hidden relative">
              <div className="bg-white/5 border border-white/10 p-8 rounded-2xl shadow-lg shadow-black/20 min-h-[450px] flex flex-col justify-between">
                {activeTestimonial === 0 ? (
                  <div>
                    <h3 className="font-bold text-xl mb-6 uppercase tracking-wider text-sm opacity-90 text-accent-gold">Career + Money</h3>
                    <div className="space-y-4 text-lg opacity-90 italic">
                      <p>“I came to the session feeling completely stuck in my career. I had the skills, I was putting in the effort, but nothing was growing the way it should—especially my income.</p>
                      <p>During the reading, I realised this wasn’t about strategy at all. There was a deeper pattern around how I was valuing myself and receiving opportunities.</p>
                      <p>That clarity changed how I started showing up at work. Within a few weeks, I had a new opportunity come in—and for the first time, I negotiated confidently and got what I truly deserved.</p>
                      <p className="font-semibold border-l-4 border-accent-gold pl-4 mt-6">It wasn’t just external change... something shifted within me.”</p>
                    </div>
                    <p className="pt-8 font-bold text-right opacity-90">— Pallavi</p>
                  </div>
                ) : (
                  <div>
                    <h3 className="font-bold text-xl mb-6 uppercase tracking-wider text-sm opacity-90 text-accent-gold">Relationship + Emotional Pattern</h3>
                    <div className="space-y-4 text-lg opacity-90 italic">
                      <p>“I kept attracting the same kind of relationships—emotionally unavailable, confusing, and draining. Even when I tried to choose differently, it somehow ended the same way.</p>
                      <p>This session helped me understand the deeper emotional pattern I was carrying. It was something I had never been able to see on my own.</p>
                      <p>After the session, I didn’t just feel lighter—I started responding differently. For the first time, I was able to set boundaries without guilt.</p>
                      <p className="font-semibold border-l-4 border-accent-gold pl-4 mt-6">Everything didn’t magically change overnight... but I finally felt like I was no longer repeating the same cycle.”</p>
                    </div>
                    <p className="pt-8 font-bold text-right opacity-90">— Sush.</p>
                  </div>
                )}
              </div>

              {/* Mobile Carousel Controls */}
              <div className="flex items-center justify-center gap-6 mt-8">
                <button 
                  onClick={() => setActiveTestimonial(0)}
                  className={`p-2 rounded-full transition-all border ${activeTestimonial === 0 ? 'border-accent-gold text-accent-gold' : 'border-white/20 text-white/50 hover:text-white hover:border-white/50'}`}
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
                <div className="flex gap-2">
                  <div className={`w-2 h-2 rounded-full transition-all ${activeTestimonial === 0 ? 'bg-accent-gold w-4' : 'bg-white/20'}`}></div>
                  <div className={`w-2 h-2 rounded-full transition-all ${activeTestimonial === 1 ? 'bg-accent-gold w-4' : 'bg-white/20'}`}></div>
                </div>
                <button 
                  onClick={() => setActiveTestimonial(1)}
                  className={`p-2 rounded-full transition-all border ${activeTestimonial === 1 ? 'border-accent-gold text-accent-gold' : 'border-white/20 text-white/50 hover:text-white hover:border-white/50'}`}
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              </div>
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
                "You feel stuck despite putting in effort",
                "You are experiencing repeated patterns in life",
                "You are seeking clarity beyond surface-level solutions",
                "You are ready to understand and shift things at a deeper level"
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
              <p className="text-2xl md:text-3xl italic opacity-90 font-medium">If you’ve been trying to fix things from the outside... and it still doesn’t fully change—</p>
              <p className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight">maybe it’s time to understand what’s happening within.</p>
            </div>

            <div className="pt-10 flex justify-center">
              <button 
                onClick={() => window.open(canvaLink, "_blank")}
                className="bg-elegant-blue hover:bg-elegant-blue/90 text-warm-beige font-bold py-5 px-10 md:px-14 rounded-full shadow-2xl transition-all duration-300 text-xl md:text-2xl w-full sm:w-auto hover:scale-[1.02]"
              >
                Book your Akashic Record Reading
              </button>
            </div>
          </div>
        </section>
        
      </div>
    </>
  )
}
