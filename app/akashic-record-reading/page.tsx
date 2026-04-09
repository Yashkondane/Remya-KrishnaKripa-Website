"use client"

import { Libre_Baskerville } from "next/font/google"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"
import Footer from "@/components/footer"
import SimplePreloader from "@/components/simple-preloader"
import WhatsAppButton from "@/components/whatsapp-button"
import ScrollReveal from "@/components/scroll-reveal"
import React from "react"
import { CheckCircle2, Info, ArrowRight, Star } from "lucide-react"

const libreBaskerville = Libre_Baskerville({
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
  display: "swap",
})

export default function AkashicRecordReadingPage() {
  const canvaLink = "https://www.canva.com/design/placeholder" // Placeholder as requested

  return (
    <>
      <SimplePreloader />
      <div className={`min-h-screen beige-bg text-elegant-blue ${libreBaskerville.className}`}>
        
        {/* Hero Section */}
        <section className="px-6 md:px-12 py-16 md:py-24 relative overflow-hidden">
          <div className="max-w-7xl mx-auto relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <div className="space-y-8">
                <ScrollReveal animation="fade">
                  <div className="space-y-4">
                    <p className="text-xl text-accent-gold font-semibold tracking-wide uppercase">✨ Akashic Record Reading</p>
                    <h1 className="text-4xl md:text-5xl lg:text-7xl leading-tight text-elegant-blue font-bold">
                      Why does your life feel <span className="text-accent-gold italic underline decoration-accent-gold/30">stuck</span>… even when you’re trying your best?
                    </h1>
                  </div>
                </ScrollReveal>

                <ScrollReveal animation="fade" delay={1}>
                  <p className="text-lg md:text-xl leading-relaxed text-elegant-blue/80 max-w-xl">
                    You work hard. You try to grow. You make better choices. Yet something doesn’t fully shift.
                  </p>
                </ScrollReveal>

                <ScrollReveal animation="fade" delay={2}>
                  <div className="flex flex-col gap-4">
                    <button 
                      onClick={() => window.open(canvaLink, "_blank")}
                      className="bg-elegant-blue text-warm-beige hover:bg-deep-blue px-8 py-4 text-lg font-semibold rounded-lg shadow-xl transition-all duration-300 hover:shadow-2xl hover:scale-105"
                    >
                      Book your Akashic Record Reading
                    </button>
                    <p className="text-sm text-elegant-blue/50 italic">Redirects to booking page</p>
                  </div>
                </ScrollReveal>
              </div>

              <ScrollReveal animation="scale" delay={1}>
                <div className="relative">
                  <div className="absolute -inset-4 bg-accent-gold/10 rounded-full blur-3xl animate-pulse"></div>
                  <Image
                    src="/images/akashic-reading.jpeg"
                    alt="Akashic Reading"
                    width={600}
                    height={700}
                    className="relative rounded-2xl shadow-2xl border-2 border-accent-gold/20 object-cover aspect-[4/5] mx-auto transition-all duration-500 hover:scale-[1.02]"
                    priority
                  />
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* The Patterns Section */}
        <section className="px-6 md:px-12 py-16 md:py-24 bg-elegant-blue text-warm-beige">
          <div className="max-w-4xl mx-auto space-y-12">
            <ScrollReveal animation="fade">
              <h2 className="text-3xl md:text-4xl font-bold text-accent-gold text-center mb-12">
                “Why does this keep happening to me?”
              </h2>
            </ScrollReveal>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                "Your career doesn’t move the way it should",
                "Money comes… but doesn’t stay or grow",
                "Relationships repeat the same emotional patterns",
                "You feel stuck, confused, or constantly overthinking",
              ].map((text, i) => (
                <ScrollReveal key={i} animation="fade" delay={i}>
                  <div className="flex items-start gap-4 p-6 bg-white/5 rounded-xl border border-white/10 hover:border-accent-gold/50 transition-all">
                    <CheckCircle2 className="w-6 h-6 text-accent-gold flex-shrink-0 mt-1" />
                    <p className="text-lg">{text}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* What is Akashic Records Section */}
        <section className="px-6 md:px-12 py-16 md:py-24 bg-white/30 backdrop-blur-sm">
          <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal animation="scale">
              <div className="p-8 md:p-12 bg-white rounded-3xl shadow-2xl border border-accent-gold/20 relative">
                <div className="absolute top-0 right-0 p-8 text-accent-gold/10">
                  <Info className="w-32 h-32" />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-elegant-blue mb-6">What is an Akashic Record Reading?</h3>
                <p className="text-elegant-blue/80 leading-[1.8] text-lg mb-6">
                  The Akashic Records can be understood as a space that holds the deeper imprint of your soul’s journey— your patterns, experiences, and lessons.
                </p>
                <div className="p-6 bg-accent-gold/10 rounded-xl border border-accent-gold/20">
                  <p className="text-elegant-blue font-medium italic">
                    An Akashic Record Reading helps you access this deeper layer to understand why certain things are happening in your life.
                  </p>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal animation="fade" delay={1}>
              <div className="space-y-8">
                <div className="space-y-4">
                  <p className="text-lg leading-relaxed text-elegant-blue/80">
                    The root of these patterns may come from your current life experiences— or from deeper layers of your soul’s journey.
                  </p>
                  <p className="text-xl font-bold text-elegant-blue">
                    What matters is understanding it… so it can finally shift.
                  </p>
                </div>
                
                <div className="bg-elegant-blue text-warm-beige p-8 rounded-2xl shadow-lg">
                  <p className="text-lg opacity-90 leading-relaxed italic">
                    "This is not about predicting your future. It is about bringing clarity to your present— so you can create a different future."
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Real Life Section */}
        <section className="px-6 md:px-12 py-16 md:py-24">
          <div className="max-w-5xl mx-auto">
            <ScrollReveal animation="fade">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-elegant-blue mb-4">How this shows up in real life</h2>
                <p className="text-accent-gold italic">You may not call it “patterns”… but it shows up like this:</p>
              </div>
            </ScrollReveal>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                "You keep working hard, but your growth feels slower than it should",
                "You earn well, but struggle to build or hold wealth",
                "You attract similar types of relationships again and again",
                "You feel blocked when trying to move to the next level",
                "You know you’re capable of more, but something holds you back",
                "You feel emotionally heavy without fully understanding why"
              ].map((text, i) => (
                <ScrollReveal key={i} animation="scale" delay={i}>
                  <div className="bg-white p-6 rounded-2xl shadow-md border border-elegant-blue/5 hover:border-accent-gold/40 transition-all duration-300 group">
                    <div className="w-10 h-10 rounded-full bg-accent-gold/10 flex items-center justify-center mb-4 group-hover:bg-accent-gold transition-colors">
                      <ArrowRight className="w-5 h-5 text-accent-gold group-hover:text-white" />
                    </div>
                    <p className="text-elegant-blue/80 group-hover:text-elegant-blue transition-colors font-medium">{text}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
            
            <ScrollReveal animation="fade" delay={6}>
              <div className="mt-16 text-center">
                <p className="text-2xl font-bold text-elegant-blue">These are not random.</p>
                <p className="text-xl text-accent-gold italic">There is always a deeper reason behind them.</p>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Case Studies / Testimonials Section */}
        <section className="px-6 md:px-12 py-16 md:py-28 bg-elegant-blue text-warm-beige overflow-hidden">
          <div className="max-w-6xl mx-auto">
            <ScrollReveal animation="fade">
              <h2 className="text-3xl md:text-5xl font-bold text-center mb-20 text-accent-gold">What clients experience</h2>
            </ScrollReveal>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <ScrollReveal animation="fade" delay={1}>
                <div className="bg-white/5 p-8 md:p-12 rounded-3xl border border-white/10 hover:border-accent-gold/30 transition-all relative group">
                  <Star className="absolute top-8 right-8 text-accent-gold/20 w-12 h-12" />
                  <div className="space-y-6 relative z-10">
                    <div className="flex items-baseline gap-2">
                       <h3 className="text-2xl font-bold text-accent-gold">Career + Money</h3>
                    </div>
                    <p className="text-lg leading-[1.8] italic opacity-90">
                      “I came to the session feeling completely stuck in my career. I had the skills, I was putting in the effort, but nothing was growing the way it should—especially my income. During the reading, I realised this wasn’t about strategy at all. There was a deeper pattern around how I was valuing myself and receiving opportunities. That clarity changed how I started showing up at work. Within a few weeks, I had a new opportunity come in—and for the first time, I negotiated confidently and got what I truly deserved.”
                    </p>
                    <div className="pt-4 border-t border-white/10">
                      <p className="font-bold text-accent-gold">— Pallavi</p>
                      <p className="text-sm opacity-60">Senior Corporate Director</p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>

              <ScrollReveal animation="fade" delay={2}>
                <div className="bg-white/5 p-8 md:p-12 rounded-3xl border border-white/10 hover:border-accent-gold/30 transition-all relative group h-full">
                  <Star className="absolute top-8 right-8 text-accent-gold/20 w-12 h-12" />
                  <div className="space-y-6 relative z-10">
                    <div className="flex items-baseline gap-2">
                       <h3 className="text-2xl font-bold text-accent-gold">Relationship + Emotional Pattern</h3>
                    </div>
                    <p className="text-lg leading-[1.8] italic opacity-90">
                      “I kept attracting the same kind of relationships—emotionally unavailable, confusing, and draining. Even when I tried to choose differently, it somehow ended the same way. This session helped me understand the deeper emotional pattern I was carrying. It was something I had never been able to see on my own. After the session, I didn’t just feel lighter—I started responding differently. For the first time, I was able to set boundaries without guilt. Everything didn’t magically change overnight… but I finally felt like I was no longer repeating the same cycle.”
                    </p>
                    <div className="pt-4 border-t border-white/10 mt-auto">
                      <p className="font-bold text-accent-gold">— Sush.</p>
                      <p className="text-sm opacity-60">Business owner</p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* Session Details */}
        <section className="px-6 md:px-12 py-16 md:py-24">
          <div className="max-w-4xl mx-auto">
             <ScrollReveal animation="fade">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-elegant-blue">What happens in a session</h2>
                <div className="h-1 w-20 bg-accent-gold mx-auto mt-4"></div>
              </div>
            </ScrollReveal>

            <div className="space-y-8">
              <ScrollReveal animation="fade" delay={1}>
                <div className="bg-white p-8 rounded-2xl shadow-lg border border-accent-gold/10">
                  <p className="text-lg leading-relaxed text-elegant-blue/80 italic">
                    In your session, we focus on what you are currently experiencing— your questions, your challenges, your confusion.
                  </p>
                </div>
              </ScrollReveal>

              <ScrollReveal animation="fade" delay={2}>
                <div className="bg-white p-8 rounded-2xl shadow-lg border border-accent-gold/10">
                  <p className="text-lg leading-relaxed text-elegant-blue/80 italic">
                    Through the Akashic Records, we access the deeper patterns behind these situations and bring clarity to what is really going on.
                  </p>
                </div>
              </ScrollReveal>

              <ScrollReveal animation="fade" delay={3}>
                <div className="bg-white p-8 rounded-2xl shadow-lg border border-accent-gold/10">
                  <p className="text-lg leading-relaxed text-elegant-blue/80 italic">
                    Where needed, the session may also include Akashic healing to address the root cause. This creates a shift in how you see your life— and how you move forward from it.
                  </p>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="px-6 md:px-12 py-16 md:py-24 bg-white/50 backdrop-blur-md">
          <div className="max-w-5xl mx-auto">
             <ScrollReveal animation="fade">
              <div className="text-center mb-16">
                <h2 className="text-3xl font-bold text-elegant-blue uppercase tracking-[0.2em]">What you may gain</h2>
              </div>
            </ScrollReveal>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-10">
              {[
                "Clarity on why your life feels stuck or repetitive",
                "Understanding of blocks in career, business, or finances",
                "Insight into relationship patterns and emotional cycles",
                "A deeper sense of direction and decision-making clarity",
                "The awareness needed to start creating real change"
              ].map((text, i) => (
                <ScrollReveal key={i} animation="fade" delay={i}>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-elegant-blue text-accent-gold flex items-center justify-center flex-shrink-0 shadow-lg">
                      <CheckCircle2 className="w-6 h-6" />
                    </div>
                    <p className="text-lg font-medium text-elegant-blue">{text}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Who This is For Section */}
        <section className="px-6 md:px-12 py-16 md:py-24">
          <div className="max-w-4xl mx-auto">
             <ScrollReveal animation="fade">
              <div className="text-center mb-16">
                <h2 className="text-3xl font-bold text-elegant-blue italic mb-4">Who this is for</h2>
                <p className="text-elegant-blue/60">This is for you if:</p>
              </div>
            </ScrollReveal>

            <div className="space-y-4 max-w-2xl mx-auto">
              {[
                "You feel stuck despite putting in effort",
                "You are experiencing repeated patterns in life",
                "You are seeking clarity beyond surface-level solutions",
                "You are ready to understand and shift things at a deeper level"
              ].map((text, i) => (
                <ScrollReveal key={i} animation="fade" delay={i}>
                  <div className="p-4 bg-white rounded-lg shadow-sm border-l-4 border-accent-gold">
                    <p className="text-lg text-elegant-blue/80">{text}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <ScrollReveal animation="scale">
          <section className="bg-elegant-blue text-warm-beige mx-6 md:mx-12 mb-24 rounded-3xl p-10 md:p-20 text-center relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-accent-gold/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent-gold/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

            <div className="max-w-3xl mx-auto space-y-10 relative z-10">
              <div className="space-y-4">
                <h2 className="text-2xl md:text-4xl font-bold text-accent-gold italic leading-tight">
                  If you’ve been trying to fix things from the outside… and it still doesn’t fully change—
                </h2>
                <p className="text-xl md:text-2xl font-bold opacity-90">
                  maybe it’s time to understand what’s happening within.
                </p>
              </div>
              
              <button 
                onClick={() => window.open(canvaLink, "_blank")}
                className="bg-accent-gold text-elegant-blue hover:bg-accent-gold/90 px-10 py-5 text-xl font-bold rounded-full shadow-2xl transition-all duration-300 hover:scale-105"
              >
                Book your Akashic Record Reading
              </button>
            </div>
          </section>
        </ScrollReveal>

        <Footer />
        <WhatsAppButton />
      </div>
    </>
  )
}
