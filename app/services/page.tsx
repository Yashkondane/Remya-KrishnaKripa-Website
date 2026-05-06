"use client"

import { Libre_Baskerville } from "next/font/google"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"
import SimplePreloader from "@/components/simple-preloader"
import WhatsAppButton from "@/components/whatsapp-button"
import ScrollReveal from "@/components/scroll-reveal"
import FAQAccordion from "@/components/faq-accordion"
import { ArrowRight, Heart, Sparkles, Brain, TrendingUp, Shield, BookOpen } from "lucide-react"

const libreBaskerville = Libre_Baskerville({
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
  display: "swap",
})

const services = [
  {
    id: "01",
    title: "Akashic Record Reading",
    description:
      "Access your soul's eternal records to understand your life purpose, past experiences, and spiritual contracts. Gain clarity on recurring patterns and unlock your divine blueprint.",
    image: "/images/akashic-reading.jpeg",
    link: "/akashic-record-reading",
    icon: Sparkles,
    tagline: "Unlock Your Soul's Blueprint",
  },
  {
    id: "02",
    title: "Past Life Regression",
    description:
      "Journey into your past lives to heal karmic patterns, understand soul contracts, and release deep-rooted fears. Discover the wisdom your soul carries across lifetimes.",
    image: "/images/past-20life-20regression.jpeg",
    link: "/past-life-regression",
    icon: Brain,
    tagline: "Heal Across Lifetimes",
  },
  {
    id: "03",
    title: "Inner Child Healing",
    description:
      "Reconnect with your wounded inner child to heal childhood trauma, break emotional patterns, and reclaim your authentic self. Experience profound emotional liberation.",
    image: "/images/inner-20child.jpeg",
    link: "/inner-child-healing",
    icon: Heart,
    tagline: "Embrace Your True Self",
  },
  {
    id: "04",
    title: "Career & Wealth Alignment",
    description:
      "Understand why your external growth is not matching your potential. Identify deeper blocks and shift them—so your outer reality can change.",
    image: "/images/image.png",
    link: "/career-wealth-alignment",
    icon: TrendingUp,
    tagline: "Align Your Career and Wealth",
  },
  {
    id: "05",
    title: "Angel Healing Therapy",
    description:
      "A high-frequency energy healing process where we work with angelic energies to support relationships, physical well-being, clarity, and abundance.",
    image: "/images/image copy.png",
    link: "/angel-healing-therapy",
    icon: Sparkles,
    tagline: "Support Beyond the Logical Mind",
  },
  {
    id: "06",
    title: "Space Clearance",
    description:
      "Clear and reset the energy of your home or office. Release stored emotional and energetic imprints to restore balance, lightness, and flow.",
    image: "/images/image copy 2.png",
    link: "/space-clearance",
    icon: Sparkles,
    tagline: "Reset Your Environment",
  },
  {
    id: "07",
    title: "Chakra Healing & Alignment",
    description:
      "Restore balance in your energy centres. Clear blockages and overactive states to support emotional stability, clarity, and deep inner connection.",
    image: "/images/image copy 3.png",
    link: "/chakra-healing-alignment",
    icon: Sparkles,
    tagline: "Realign Your Energy",
  },
  {
    id: "08",
    title: "Relationship Healing",
    description:
      "Understand the deeper patterns and soul-level connections behind your relationships. Heal hidden emotional wounds to create clarity and emotional relief.",
    image: "/images/image copy 4.png",
    link: "/relationship-healing",
    icon: Heart,
    tagline: "Heal Emotional & Soul Patterns",
  },
  {
    id: "09",
    title: "Deep Pattern Release & Integrated Healing",
    description:
      "A multi-layered healing journey targeting the root cause of repeating patterns. Clear subconscious resistance and integrate deep, lasting change across your life.",
    image: "/images/image copy 5.png",
    link: "/deep-pattern-release",
    icon: Sparkles,
    tagline: "Break Cycles at the Root",
  },
  {
    id: "10",
    title: "Confident Communication",
    description:
      "Break free from communication blocks rooted in inner child wounds. Learn to speak your truth with confidence, set boundaries, and express yourself authentically in all relationships.",
    image: "/images/confidence-20communication.jpeg",
    link: "/confident-communication",
    icon: Shield,
    tagline: "Speak Your Truth Boldly",
  },
  {
    id: "11",
    title: "Career Accelerator Mentorship",
    description:
      "Transform your career through soul-aligned coaching. Address the 14 inner child patterns that block success and step into leadership with confidence and clarity.",
    image: "/images/carrer-20accelerator.jpeg",
    link: "/career-accelerator",
    icon: TrendingUp,
    tagline: "Lead with Authenticity",
  },
  {
    id: "12",
    title: "Become an Energy Healer",
    description:
      "Feel called to go deeper? Learn the foundations of energy healing, develop your intuitive abilities, and become a certified healer through guided mentorship and hands-on training.",
    image: "/images/image copy 5.png",
    link: "/become-a-healer",
    icon: BookOpen,
    tagline: "Step Into Your Purpose",
  },
  {
    id: "13",
    title: "Self-Healing Masterclass",
    description:
      "A focused 2-day masterclass to understand internal patterns, release emotional and energetic blocks, and begin creating stability, clarity, growth, and abundance from within.",
    image: "/images/image copy 6.png",
    link: "/self-healing-masterclass",
    icon: Sparkles,
    tagline: "Welcome Abundance Through Self-Healing",
  },
]

export default function ServicesPage() {
  return (
    <>
      <SimplePreloader />
      <div className={`min-h-screen beige-bg text-elegant-blue ${libreBaskerville.className}`}>

        <main className="px-6 md:px-12 py-12 md:py-24">
          <ScrollReveal animation="fade">
            <section className="px-6 md:px-12 py-16 md:py-24">
              <div className="max-w-7xl mx-auto text-center">
                <div className="space-y-6 max-w-3xl mx-auto">
                  <p className="text-lg md:text-xl text-accent-gold animate-fadeInUp">
                    Transformational Healing Services
                  </p>

                  <h1 className="text-4xl md:text-5xl lg:text-6xl leading-tight text-elegant-blue animate-fadeInUp">
                    Journey to Your <span className="text-accent-gold text-glow">Authentic Self</span>
                  </h1>

                  <p className="text-lg md:text-xl leading-relaxed text-elegant-blue/80 animate-fadeInUp">
                    Explore soul-aligned healing modalities designed to help you break free from limiting patterns, heal deep
                    wounds, and step into your power.
                  </p>
                </div>
              </div>
            </section>
          </ScrollReveal>

          {/* Services Grid */}
          <section className="px-6 md:px-12 pb-24">
            <div className="max-w-7xl mx-auto space-y-24">
              {services.map((service, index) => (
                <ScrollReveal key={service.id} animation="fade">
                  <div
                    id={
                      service.title.toLowerCase().includes("akashic") ? "akashic" :
                        service.title.toLowerCase().includes("past life") ? "past-life" :
                          service.title.toLowerCase().includes("inner child") ? "inner-child" :
                            service.title.toLowerCase().includes("communication") ? "communication" :
                              service.title.toLowerCase().includes("career") ? "career" :
                                undefined
                    }
                    className={`flex flex-col lg:flex-row gap-12 lg:gap-16 items-center scroll-mt-24 ${index % 2 === 1 ? "lg:flex-row-reverse" : ""
                      }`}
                  >
                    {/* Image/Visual Side */}
                    <div className="w-full lg:w-1/2 relative group">
                      <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                        <Image
                          src={service.image || "/placeholder.svg"}
                          alt={service.title}
                          fill
                          className="object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-elegant-blue/10 group-hover:bg-transparent transition-colors duration-500" />
                      </div>
                      {/* Floating Icon */}
                      <div className="absolute -bottom-8 -right-8 w-24 h-24 bg-white rounded-full shadow-xl flex items-center justify-center p-5 z-10 border border-accent-gold/20 group-hover:scale-110 transition-transform duration-300">
                        <service.icon className="w-full h-full text-accent-gold stroke-1" />
                      </div>
                    </div>

                    {/* Content Side */}
                    <div className="w-full lg:w-1/2 space-y-6">
                      <div className="flex items-center gap-4 text-accent-gold font-medium">
                        <service.icon className="w-6 h-6" />
                        <span className="uppercase tracking-widest text-sm">{service.id}</span>
                      </div>

                      <h2 className="text-3xl md:text-4xl font-bold text-elegant-blue">{service.title}</h2>
                      <p className="text-xl font-medium text-accent-gold italic font-serif">
                        {service.tagline}
                      </p>
                      <p className="text-lg text-elegant-blue/80 leading-relaxed">
                        {service.description}
                      </p>

                      <div className="pt-4">
                        <Link href={service.link}>
                          <Button className="bg-transparent border-2 border-elegant-blue text-elegant-blue hover:bg-elegant-blue hover:text-warm-beige px-8 py-3 rounded-full transition-all duration-300 group">
                            Learn More
                            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                          </Button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </section>

          {/* FAQ Section */}
          <ScrollReveal animation="fade">
            <section className="bg-white/50 backdrop-blur-sm px-6 md:px-12 py-16 md:py-24">
              <div className="max-w-4xl mx-auto">
                <div className="text-center mb-12">
                  <h2 className="text-3xl md:text-4xl font-bold text-elegant-blue mb-4">Common Questions</h2>
                  <p className="text-elegant-blue/70">Everything you need to know about the healing sessions</p>
                </div>
                <FAQAccordion />
              </div>
            </section>
          </ScrollReveal>

          <WhatsAppButton />
        </main>
      </div>
    </>
  )
}
