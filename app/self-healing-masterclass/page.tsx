"use client"

import { Libre_Baskerville } from "next/font/google"
import Image from "next/image"
import SimplePreloader from "@/components/simple-preloader"
import ScrollReveal from "@/components/scroll-reveal"
import WhatsAppButton from "@/components/whatsapp-button"
import { Button } from "@/components/ui/button"
import {
  ArrowRight,
  BookOpen,
  CheckCircle2,
  HeartHandshake,
  Sparkles,
} from "lucide-react"

const libreBaskerville = Libre_Baskerville({
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
  display: "swap",
})

const painPoints = [
  "Money does not flow the way it should",
  "Career growth feels slow or inconsistent",
  "Relationships feel complicated or draining",
  "You feel stuck between effort and results",
]

const internalPatterns = [
  "Emotional imprints that keep repeating",
  "Subconscious conditioning around worth and receiving",
  "Old safety patterns that make growth feel difficult",
  "Energetic blocks that affect clarity, stability, and action",
]

const learningPoints = [
  "Why your life feels stuck despite effort",
  "How inner patterns affect money, career, and relationships",
  "What self-healing means in practical daily life",
  "How to start releasing emotional and energetic blocks",
  "How to return to clarity and stability when you feel triggered",
  "A guided healing experience to begin your shift",
]

const outcomes = [
  "Handle emotional triggers with more stability",
  "Reduce overthinking and confusion",
  "Understand your patterns more clearly",
  "Make better, aligned decisions",
  "Start shifting your inner state on your own",
  "Build a stronger foundation for growth and abundance",
]

const optionalPath = ["Akashic Records", "Inner child healing", "Past life healing", "Energy alignment"]
const registrationFormUrl =
  "https://docs.google.com/forms/d/e/1FAIpQLSetdMBZ-w2EySnU_aImumeT5v9T5jon0V6XhZQnGjI_gK1m6g/viewform?usp=header"

function RegisterButton({ className = "" }: { className?: string }) {
  return (
    <a href={registrationFormUrl} target="_blank" rel="noopener noreferrer" className={`inline-flex w-full sm:w-auto ${className}`}>
      <Button className="bg-elegant-blue hover:bg-elegant-blue/90 text-warm-beige font-semibold min-h-12 px-6 sm:px-8 rounded-full shadow-xl transition-all duration-300 flex items-center gap-3 text-base sm:text-lg group w-full sm:w-auto justify-center">
        Reserve Your Spot
        <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform flex-shrink-0" />
      </Button>
    </a>
  )
}

export default function SelfHealingMasterclassPage() {
  return (
    <>
      <SimplePreloader />
      <div className={`min-h-screen beige-bg text-elegant-blue ${libreBaskerville.className}`}>
        <main>
          <section className="px-5 sm:px-6 md:px-12 py-10 sm:py-14 md:py-24 overflow-hidden">
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[1.05fr_0.95fr] gap-10 lg:gap-16 items-center">
              <ScrollReveal animation="fade">
                <div className="space-y-7 text-center lg:text-left">
                  <div className="inline-flex max-w-full items-center gap-2 rounded-full border border-accent-gold/40 bg-white/50 px-4 sm:px-5 py-2 text-[11px] sm:text-sm uppercase tracking-[0.12em] sm:tracking-[0.18em] font-semibold text-accent-gold">
                    <Sparkles className="w-4 h-4 flex-shrink-0" />
                    2-Day Masterclass
                  </div>

                  <div className="space-y-5">
                    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight font-bold text-elegant-blue">
                      Welcome Abundance Through Self-Healing
                    </h1>
                    <p className="text-lg sm:text-xl md:text-2xl text-elegant-blue/80 italic leading-relaxed">
                      Become an energy healer by first learning how to work with your own inner patterns.
                    </p>
                    <p className="text-base sm:text-lg md:text-xl leading-relaxed text-elegant-blue/75 max-w-2xl mx-auto lg:mx-0">
                      You may be doing everything right - working hard, growing, planning, and pushing - yet life still
                      may not be opening fully. This masterclass helps you understand what is happening underneath.
                    </p>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start">
                    <RegisterButton />
                    <a href="#learn" className="inline-flex w-full sm:w-auto">
                      <Button className="w-full sm:w-auto bg-transparent border-2 border-elegant-blue text-elegant-blue hover:bg-elegant-blue hover:text-warm-beige min-h-12 px-6 sm:px-7 text-base sm:text-lg font-semibold rounded-full">
                        What You Will Learn
                      </Button>
                    </a>
                  </div>
                </div>
              </ScrollReveal>

              <ScrollReveal animation="scale" delay={1}>
                <div className="relative max-w-[280px] sm:max-w-sm md:max-w-md lg:max-w-none mx-auto w-full">
                  <div className="relative aspect-[4/5] rounded-xl sm:rounded-2xl overflow-hidden shadow-2xl border-4 border-white/50">
                    <Image
                      src="/images/ChatGPT Image Feb 17, 2026, 08_27_17 PM.png"
                      alt="Remya Krishnakripa"
                      fill
                      className="object-cover object-top"
                      priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-elegant-blue/25 via-transparent to-transparent" />
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </section>

          <section className="px-5 sm:px-6 md:px-12 py-12 sm:py-16 md:py-24">
            <div className="max-w-4xl mx-auto space-y-9 sm:space-y-10">
              <ScrollReveal animation="fade">
                <div className="space-y-5 sm:space-y-6 text-center">
                  <p className="text-accent-gold uppercase tracking-[0.14em] sm:tracking-[0.18em] text-xs sm:text-base font-semibold">The Real Question</p>
                  <h2 className="text-2xl sm:text-3xl md:text-5xl leading-tight font-bold text-elegant-blue">
                    You are doing everything right. So why is life not opening fully?
                  </h2>
                  <p className="text-base sm:text-lg md:text-xl text-elegant-blue/80 leading-relaxed max-w-3xl mx-auto">
                    Life does not respond only to effort, strategy, and action. It also responds to your inner state,
                    emotional patterns, and subconscious conditioning.
                  </p>
                </div>
              </ScrollReveal>

              <ScrollReveal animation="fade" delay={1}>
                <div className="max-w-2xl mx-auto space-y-4 sm:space-y-5 pt-2 sm:pt-4">
                  {painPoints.map((item) => (
                    <div key={item} className="flex items-start gap-3 sm:gap-4">
                      <div className="w-2 h-2 rounded-full bg-accent-gold mt-2 flex-shrink-0"></div>
                      <p className="text-base sm:text-lg leading-relaxed">{item}</p>
                    </div>
                  ))}
                </div>
              </ScrollReveal>

              <ScrollReveal animation="fade" delay={2}>
                <div className="flex justify-center pt-4">
                  <RegisterButton />
                </div>
              </ScrollReveal>
            </div>
          </section>

          <section className="px-5 sm:px-6 md:px-12 py-12 sm:py-16 md:py-24">
            <div className="max-w-6xl mx-auto space-y-10 sm:space-y-16">
              <ScrollReveal animation="fade">
                <div className="max-w-3xl mx-auto text-center space-y-5">
                  <p className="text-accent-gold uppercase tracking-[0.14em] sm:tracking-[0.18em] text-xs sm:text-base font-semibold">Why Abundance Feels Inconsistent</p>
                  <h2 className="text-2xl sm:text-3xl md:text-5xl leading-tight font-bold text-elegant-blue">
                    It is not lack of effort. It is the internal pattern running underneath.
                  </h2>
                </div>
              </ScrollReveal>

              <div className="max-w-3xl mx-auto border-l-4 border-accent-gold pl-4 sm:pl-6 md:pl-10 space-y-5 sm:space-y-6 text-base sm:text-lg md:text-xl leading-relaxed text-elegant-blue/90">
                {internalPatterns.map((item, index) => (
                  <ScrollReveal key={item} animation="fade" delay={index + 1}>
                    <p>
                      <span className="font-bold text-elegant-blue">{item.split(" that ")[0]}</span>
                      {item.includes(" that ") ? ` that ${item.split(" that ").slice(1).join(" that ")}` : ""}
                    </p>
                  </ScrollReveal>
                ))}
              </div>

              <div className="flex justify-center">
                <RegisterButton />
              </div>
            </div>
          </section>

          <section id="learn" className="px-5 sm:px-6 md:px-12 py-12 sm:py-16 md:py-24 bg-white/40">
            <div className="max-w-4xl mx-auto space-y-12 sm:space-y-16">
              <ScrollReveal animation="fade">
                <div className="space-y-7 sm:space-y-8">
                  <div className="space-y-5 text-center">
                    <p className="text-accent-gold uppercase tracking-[0.14em] sm:tracking-[0.18em] text-xs sm:text-base font-semibold">What You Will Learn</p>
                    <h2 className="text-2xl sm:text-3xl md:text-5xl leading-tight font-bold text-elegant-blue">
                      A practical start to working on your own patterns daily.
                    </h2>
                    <p className="text-base sm:text-lg text-elegant-blue/75 leading-relaxed max-w-3xl mx-auto">
                      This is not designed to overwhelm you with random techniques. It is a grounded starting point for
                      self-healing, stability, and abundance.
                    </p>
                  </div>

                  <div className="space-y-4 max-w-2xl mx-auto">
                    {learningPoints.map((item) => (
                      <div key={item} className="flex items-start gap-3 sm:gap-4">
                        <CheckCircle2 className="w-5 h-5 sm:w-6 sm:h-6 text-accent-gold flex-shrink-0 mt-1" />
                        <p className="text-base sm:text-lg leading-relaxed">{item}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </ScrollReveal>

              <ScrollReveal animation="fade" delay={1}>
                <div className="space-y-7 sm:space-y-8 border-t border-elegant-blue/10 pt-10 sm:pt-16">
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-center text-elegant-blue">After this, you will be able to</h3>

                  <div className="space-y-4 sm:space-y-5 max-w-2xl mx-auto">
                    {outcomes.map((item) => (
                      <div key={item} className="flex items-start gap-3 sm:gap-4">
                        <CheckCircle2 className="w-5 h-5 text-accent-gold flex-shrink-0 mt-1" />
                        <p className="text-base sm:text-lg text-elegant-blue/90 leading-relaxed">{item}</p>
                      </div>
                    ))}
                  </div>

                  <div className="flex justify-center">
                    <RegisterButton />
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </section>

          <section className="px-5 sm:px-6 md:px-12 py-12 sm:py-16 md:py-24">
            <div className="max-w-5xl mx-auto space-y-10 sm:space-y-16">
              <ScrollReveal animation="fade">
                <div className="text-center space-y-5">
                  <p className="text-accent-gold uppercase tracking-[0.14em] sm:tracking-[0.18em] text-xs sm:text-base font-semibold">Who This Is For</p>
                  <h2 className="text-2xl sm:text-3xl md:text-5xl leading-tight font-bold text-elegant-blue">
                    For people ready to take responsibility for their growth.
                  </h2>
                </div>
              </ScrollReveal>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
                <ScrollReveal animation="slide-left">
                  <div className="h-full">
                    <HeartHandshake className="w-8 h-8 sm:w-10 sm:h-10 text-accent-gold mb-5 sm:mb-6" />
                    <h3 className="text-xl sm:text-2xl font-bold mb-5 sm:mb-6">This is for you if</h3>
                    <ul className="space-y-4 text-base sm:text-lg">
                      {[
                        "You feel stuck in career, money, or relationships",
                        "You know you are capable of more, but are not reaching it",
                        "You feel something internal is holding you back",
                        "You want to stop depending on others for healing",
                        "You are ready for real inner work",
                      ].map((item) => (
                        <li key={item} className="flex items-start gap-3 leading-relaxed">
                          <div className="w-2 h-2 rounded-full bg-accent-gold mt-2 flex-shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </ScrollReveal>

                <ScrollReveal animation="slide-right">
                  <div className="h-full">
                    <BookOpen className="w-8 h-8 sm:w-10 sm:h-10 text-accent-gold mb-5 sm:mb-6" />
                    <h3 className="text-xl sm:text-2xl font-bold mb-5 sm:mb-6">This is not for you if</h3>
                    <ul className="space-y-4 text-base sm:text-lg">
                      {[
                        "You are looking for quick fixes",
                        "You want only external strategies",
                        "You are not open to inner work",
                      ].map((item) => (
                        <li key={item} className="flex items-start gap-3 leading-relaxed">
                          <div className="w-2 h-2 rounded-full bg-elegant-blue mt-2 flex-shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </ScrollReveal>
              </div>

              <div className="flex justify-center">
                <RegisterButton />
              </div>
            </div>
          </section>

          <section className="px-5 sm:px-6 md:px-12 py-12 sm:py-16 md:py-24 bg-elegant-blue text-warm-beige">
            <div className="max-w-5xl mx-auto text-center space-y-9 sm:space-y-10">
              <ScrollReveal animation="fade">
                <div className="space-y-5">
                  <p className="text-accent-gold uppercase tracking-[0.14em] sm:tracking-[0.18em] text-xs sm:text-base font-semibold">A Deeper Path</p>
                  <h2 className="text-2xl sm:text-3xl md:text-5xl leading-tight font-bold">
                    If this resonates deeply, you can go beyond self-healing.
                  </h2>
                  <p className="text-base sm:text-lg md:text-xl text-warm-beige/80 max-w-3xl mx-auto leading-relaxed">
                    You will also get the opportunity to learn how to become an energy healer using an integrated
                    approach.
                  </p>
                </div>
              </ScrollReveal>

              <div className="flex flex-col sm:flex-row sm:flex-wrap justify-center gap-x-10 gap-y-4 sm:gap-y-5 text-base sm:text-lg md:text-xl">
                {optionalPath.map((item, index) => (
                  <ScrollReveal key={item} animation="fade" delay={index + 1}>
                    <div className="flex items-center justify-center gap-3 font-semibold">
                      <div className="w-2 h-2 rounded-full bg-accent-gold flex-shrink-0"></div>
                      <span>{item}</span>
                    </div>
                  </ScrollReveal>
                ))}
              </div>

              <div className="flex justify-center">
                <a href={registrationFormUrl} target="_blank" rel="noopener noreferrer" className="inline-flex w-full sm:w-auto">
                  <Button className="bg-accent-gold text-elegant-blue hover:bg-accent-gold/90 font-bold min-h-12 sm:min-h-14 px-8 md:px-14 rounded-full shadow-2xl transition-all duration-300 text-lg md:text-2xl w-full sm:w-auto hover:scale-[1.02]">
                    Reserve Your Spot
                  </Button>
                </a>
              </div>
            </div>
          </section>

          <section id="reserve" className="px-5 sm:px-6 md:px-12 py-12 sm:py-16 md:py-24">
            <div className="max-w-4xl mx-auto">
              <ScrollReveal animation="fade">
                <div className="space-y-6 sm:space-y-7 text-center">
                  <p className="text-accent-gold uppercase tracking-[0.14em] sm:tracking-[0.18em] text-xs sm:text-base font-semibold">Reserve Your Spot</p>
                  <h2 className="text-2xl sm:text-3xl md:text-5xl leading-tight font-bold text-elegant-blue">
                    Start your journey towards self-healing and abundance.
                  </h2>
                  <p className="text-base sm:text-lg md:text-xl text-elegant-blue/75 leading-relaxed max-w-3xl mx-auto">
                    You can keep trying harder, pushing more, and figuring things out alone. Or you can learn how to
                    work on yourself properly.
                  </p>
                  <p className="text-lg sm:text-xl italic leading-relaxed text-elegant-blue/85 max-w-3xl mx-auto">
                    "Once I understood what was blocking me internally, everything started shifting - not just how I
                    felt, but how I showed up in my work and life."
                  </p>
                  <p className="font-bold text-accent-gold">- Participant</p>
                  <div className="pt-5">
                    <RegisterButton />
                  </div>
                </div>
              </ScrollReveal>   
            </div>
          </section>
        </main>

        <WhatsAppButton />
      </div>
    </>
  )
}
