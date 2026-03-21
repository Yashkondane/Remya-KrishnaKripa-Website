import { Libre_Baskerville } from "next/font/google"

import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"
import TestimonialSlider from "../components/testimonial-slider"
import FAQAccordion from "../components/faq-accordion"
import BlogSection from "../components/blog-section"

import SimplePreloader from "../components/simple-preloader"
import WhatsAppButton from "../components/whatsapp-button"
import ScrollReveal from "../components/scroll-reveal"
import { Instagram, Linkedin, Facebook, Youtube } from "lucide-react"

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
      "Access your soul's eternal records to understand your life purpose, past experiences, and spiritual contracts.",
    link: "/akashic-record-reading",
  },
  {
    id: "02",
    title: "Confident Communication",
    description:
      "Break free from communication blocks rooted in inner child wounds. Speak your truth with confidence and authenticity.",
    link: "/confident-communication",
  },
  {
    id: "03",
    title: "Career Accelerator",
    description:
      "Transform your career through soul-aligned coaching. Address inner child patterns that block success and step into leadership.",
    link: "/career-accelerator",
  },
  {
    id: "04",
    title: "Inner Child Healing",
    description:
      "Reconnect with your wounded inner child to heal childhood trauma, break emotional patterns, and reclaim your authentic self.",
    link: "/inner-child-healing",
  },
]

export default function HomePage() {
  return (
    <>
      <SimplePreloader />
      <div className={`min-h-screen beige-bg text-elegant-blue ${libreBaskerville.className}`}>

        {/* Hero Section */}
        <main className="px-6 md:px-12 py-10 md:py-20 relative overflow-hidden">
          {/* Subtle hero background glow */}
          <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full pointer-events-none"
            style={{
              background: "radial-gradient(circle, rgba(201,168,106,0.12) 0%, transparent 65%)",
              filter: "blur(60px)",
              transform: "translate(20%, -20%)",
            }}
          />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full pointer-events-none"
            style={{
              background: "radial-gradient(circle, rgba(52,66,110,0.08) 0%, transparent 65%)",
              filter: "blur(50px)",
              transform: "translate(-20%, 20%)",
            }}
          />
          <div className="max-w-7xl mx-auto relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              {/* Left Column - Image */}
              <div className="order-1 lg:order-1 animate-scaleIn stagger-2">
                <div className="relative hover-lift max-w-sm mx-auto">
                  {/* Outer decorative frame */}
                  <div className="absolute -inset-3 rounded-3xl opacity-40"
                    style={{
                      background: "linear-gradient(135deg, rgba(201,168,106,0.4), rgba(52,66,110,0.2), rgba(201,168,106,0.3))",
                      filter: "blur(16px)",
                    }}
                  />
                  <div className="relative w-full aspect-[3/4] rounded-3xl overflow-hidden shadow-2xl border-2 transition-all duration-500"
                    style={{ borderColor: "rgba(201,168,106,0.5)" }}
                  >
                    <Image
                      src="/images/IMG20250704090845.jpg"
                      alt="Remya - Spiritual Guide"
                      fill
                      className="object-cover object-top transition-transform duration-700 hover:scale-105"
                      priority
                    />
                    {/* Subtle vignette overlay */}
                    <div className="absolute inset-0 pointer-events-none"
                      style={{
                        background: "linear-gradient(to top, rgba(52,66,110,0.15) 0%, transparent 40%)",
                      }}
                    />
                  </div>
                  {/* Decorative glow blobs */}
                  <div className="absolute -top-4 -right-4 w-24 h-24 bg-accent-gold/20 rounded-full blur-xl animate-float stagger-1"></div>
                  <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-elegant-blue/15 rounded-full blur-2xl animate-float stagger-3"></div>
                </div>
              </div>

              {/* Right Column - Text */}
              <div className="space-y-8 order-2 lg:order-2">
                <div className="space-y-5">
                  <div className="flex items-center gap-3 animate-fadeInUp stagger-1">
                    <div className="w-8 h-[1.5px]" style={{ background: "linear-gradient(90deg, #c9a86a, transparent)" }} />
                    <p className="text-sm md:text-base uppercase tracking-[0.2em] font-semibold" style={{ color: "#c9a86a" }}>Hello, I'm Remya</p>
                  </div>

                  <h1 className="text-4xl md:text-5xl lg:text-6xl leading-[1.1] text-elegant-blue animate-fadeInUp stagger-2" style={{ fontFamily: "'Libre Baskerville', Georgia, serif" }}>
                    Who is{" "}
                    <span className="relative inline-block">
                      <span className="text-accent-gold">Remya Krishnakripa</span>
                    </span>
                    {" "}and How Can She Unlock Your{" "}
                    <em style={{ fontStyle: "italic", color: "rgba(52,66,110,0.7)" }}>Highest Potential?</em>
                  </h1>

                  <p className="text-base md:text-lg text-elegant-blue/65 leading-relaxed animate-fadeInUp stagger-3 max-w-lg">
                    A decade of guiding souls through Akashic wisdom, energy healing, and transformative spiritual coaching.
                  </p>

                  {/* Social Media Links */}
                  <div className="flex items-center gap-5 animate-fadeInUp stagger-4 pt-2">
                    <a href="https://www.instagram.com/remyakrishnakripa/" target="_blank" rel="noopener noreferrer" className="text-elegant-blue hover:text-[#E4405F] transition-all hover:scale-110">
                      <Instagram className="w-6 h-6" />
                    </a>
                    <a href="https://in.linkedin.com/in/remya-krishnakripa" target="_blank" rel="noopener noreferrer" className="text-elegant-blue hover:text-[#0A66C2] transition-all hover:scale-110">
                      <Linkedin className="w-6 h-6" />
                    </a>
                    <a href="https://www.facebook.com/coach.remyakrishnakripa/" target="_blank" rel="noopener noreferrer" className="text-elegant-blue hover:text-[#1877F2] transition-all hover:scale-110">
                      <Facebook className="w-6 h-6" />
                    </a>
                    <a href="https://www.youtube.com/@remyakrishnakripa" target="_blank" rel="noopener noreferrer" className="text-elegant-blue hover:text-[#FF0000] transition-all hover:scale-110">
                      <Youtube className="w-6 h-6" />
                    </a>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 animate-fadeInUp stagger-4">
                  <Link
                    href="/about"
                    className="group inline-flex items-center gap-3 px-6 py-3 rounded-xl font-semibold text-warm-beige transition-all duration-300 hover:scale-105"
                    style={{
                      background: "linear-gradient(135deg, #34426e, #2a3659)",
                      boxShadow: "0 4px 20px rgba(52,66,110,0.3)",
                    }}
                  >
                    <span>Know More</span>
                    <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                  <a
                    href="/contact"
                    className="group inline-flex items-center gap-3 px-6 py-3 rounded-xl font-semibold border-2 transition-all duration-300 hover:scale-105 text-elegant-blue"
                    style={{
                      borderColor: "rgba(201,168,106,0.5)",
                      background: "rgba(201,168,106,0.08)",
                    }}
                  >
                    <span>Book a Session</span>
                    <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </main>

        {/* Services Section */}
        <ScrollReveal animation="fade">
          <section className="bg-elegant-blue px-6 md:px-12 py-16 md:py-24 text-warm-beige">
            <div className="max-w-7xl mx-auto">
              <ScrollReveal animation="fade" delay={1}>
                <div className="text-center mb-12">
                  <h2 className="text-3xl md:text-4xl lg:text-5xl leading-tight mb-4 text-accent-gold text-glow">
                    My Services
                  </h2>
                </div>
              </ScrollReveal>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {services.map((service, index) => (
                  <ScrollReveal key={service.id} animation="scale" delay={index + 1}>
                    <Link href={service.link} className="block">
                      <div className="bg-white/10 p-8 rounded-xl border border-accent-gold/20 hover:bg-accent-gold/20 hover:scale-[1.02] transition-all duration-500 group cursor-pointer h-full hover:shadow-2xl hover:shadow-accent-gold/10">
                        <div className="space-y-4">
                          <span className="text-3xl font-bold text-accent-gold group-hover:scale-110 transition-transform duration-300">
                            {service.id}.
                          </span>
                          <div>
                            <h3 className="text-2xl font-semibold text-warm-beige mb-3 group-hover:text-accent-gold transition-colors duration-300">
                              {service.title}
                            </h3>
                            <p className="text-base leading-relaxed text-warm-beige/80 group-hover:text-warm-beige transition-colors duration-300">
                              {service.description}
                            </p>
                          </div>
                          <div className="flex justify-end">
                            <div className="text-accent-gold group-hover:translate-x-2 transition-transform duration-300">
                              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                              </svg>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </ScrollReveal>
                ))}
              </div>

              <ScrollReveal animation="fade" delay={5}>
                <div className="text-center mt-12">
                  <Link href="/services">
                    <Button className="bg-accent-gold text-elegant-blue hover:bg-accent-gold/90 px-8 py-4 text-lg font-semibold rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-105 btn-hover-effect">
                      View All Services
                    </Button>
                  </Link>
                </div>
              </ScrollReveal>
            </div>
          </section>
        </ScrollReveal>

        {/* Testimonials Section */}
        <ScrollReveal animation="scale">
          <section className="beige-bg px-6 md:px-12 py-16 md:py-24">
            <div className="max-w-4xl mx-auto bg-white/70 backdrop-blur-sm rounded-2xl p-8 animate-scaleIn border border-elegant-blue/10">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl lg:text-5xl leading-tight mb-4 text-elegant-blue">
                  Our Clients Say
                </h2>
              </div>

              <TestimonialSlider />
            </div>
          </section>
        </ScrollReveal>

        {/* CTA Section */}
        <ScrollReveal animation="fade">
          <section className="bg-elegant-blue px-6 md:px-12 py-16 md:py-24">
            <div className="max-w-4xl mx-auto text-center animate-fadeInUp">
              <h2 className="text-3xl md:text-4xl lg:text-5xl leading-tight text-white mb-6">
                Begin Your Journey Within — With Me as Your Guide
              </h2>

              <p className="text-lg md:text-xl leading-relaxed text-white/90 mb-8 max-w-2xl mx-auto">
                Discover the guidance and clarity your soul is seeking through a sacred Akashic connection. Each session
                is a step toward healing, understanding, and inner alignment.
              </p>

              <Button className="bg-accent-gold text-elegant-blue hover:bg-accent-gold/90 px-8 py-4 text-lg font-semibold rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-105 btn-hover-effect">
                Book Now
              </Button>
            </div>
          </section>
        </ScrollReveal>

        {/* FAQ Section */}
        <ScrollReveal animation="scale">
          <section className="beige-bg px-6 md:px-12 py-16 md:py-24">
            <div className="max-w-4xl mx-auto bg-white/70 backdrop-blur-sm rounded-2xl p-8 animate-scaleIn border border-elegant-blue/10">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl lg:text-5xl leading-tight mb-4 text-elegant-blue">
                  Frequently Asked Questions
                </h2>
              </div>

              <FAQAccordion />
            </div>
          </section>
        </ScrollReveal>

        {/* Blog Section */}
        <ScrollReveal animation="fade">
          <BlogSection />
        </ScrollReveal>

        {/* WhatsApp Button */}
        <WhatsAppButton />

      </div>
    </>
  )
}
