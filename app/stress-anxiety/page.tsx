"use client"

import { Libre_Baskerville } from "next/font/google"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"
import Footer from "../../components/footer"
import SimplePreloader from "../../components/simple-preloader"
import WhatsAppButton from "../../components/whatsapp-button"
import ScrollReveal from "../../components/scroll-reveal"

const libreBaskerville = Libre_Baskerville({
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
  display: "swap",
})

export default function StressAnxietyPage() {
  return (
    <>
      <SimplePreloader />
      <div className={`min-h-screen beige-bg text-elegant-blue ${libreBaskerville.className}`}>


        {/* Hero Section */}
        <ScrollReveal animation="fade">
          <section className="px-6 md:px-12 py-16 md:py-24">
            <div className="max-w-7xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                {/* Left Column - Content */}
                <div className="space-y-8">
                  <div className="space-y-6">
                    <p className="text-lg md:text-xl text-accent-gold animate-fadeInUp">Service 03</p>

                    <h1 className="text-4xl md:text-5xl lg:text-6xl leading-tight text-elegant-blue animate-fadeInUp">
                      Stress & <span className="text-accent-gold text-glow">Anxiety</span> Relief
                    </h1>

                    <p className="text-lg md:text-xl leading-relaxed text-elegant-blue/80 animate-fadeInUp">
                      Master the art of interviewing with confidence-building techniques and strategic preparation.
                      Develop healthy coping mechanisms and find inner peace through mindful stress management
                      techniques.
                    </p>
                  </div>

                  <div className="space-y-4 animate-fadeInUp">
                    <Button className="bg-accent-gold text-elegant-blue hover:bg-accent-gold/90 px-8 py-4 text-lg font-semibold rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-105 btn-hover-effect">
                      Find Your Peace
                    </Button>

                    <p className="text-sm text-elegant-blue/60">
                      Coming Soon | Comprehensive stress management program
                    </p>
                  </div>
                </div>

                {/* Right Column - Image */}
                <div className="space-y-6 animate-scaleIn">
                  <div className="relative hover-lift">
                    <Image
                      src="/stress-relief-meditation-peaceful-healing.jpg"
                      alt="Stress & Anxiety Relief"
                      width={500}
                      height={600}
                      className="w-full max-w-md mx-auto rounded-lg shadow-2xl object-cover border-2 border-accent-gold/30 transition-all duration-500 hover:border-accent-gold/60"
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>
        </ScrollReveal>

        {/* Coming Soon Section */}
        <ScrollReveal animation="scale" delay={200}>
          <section className="bg-elegant-blue/5 backdrop-blur-sm px-6 md:px-12 py-16 md:py-24">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl lg:text-5xl leading-tight mb-8 text-elegant-blue">Coming Soon</h2>

              <p className="text-lg md:text-xl leading-relaxed text-elegant-blue/80 mb-8 max-w-2xl mx-auto">
                We're developing a comprehensive stress and anxiety relief program that combines ancient wisdom with
                modern techniques for lasting peace and emotional balance.
              </p>

              <div className="bg-white/80 p-8 rounded-xl border border-accent-gold/20">
                <h3 className="text-xl font-semibold text-accent-gold mb-4">Get Notified</h3>
                <p className="text-elegant-blue/80 mb-6">
                  Be the first to know when our stress and anxiety relief program launches.
                </p>
                <Button className="border border-accent-gold bg-transparent text-accent-gold px-8 py-3 rounded-lg hover:bg-accent-gold hover:text-elegant-blue transition-all duration-300">
                  Join Waitlist
                </Button>
              </div>
            </div>
          </section>
        </ScrollReveal>

        <WhatsAppButton />

      </div>
    </>
  )
}
