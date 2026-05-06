"use client"

import { Facebook, Instagram, Linkedin, Youtube } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-elegant-blue px-6 md:px-12 py-16 md:py-24 pb-32 md:pb-24">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
          {/* Left Column - About */}
          <div className="space-y-6">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-20 h-20 flex-shrink-0">
                <img
                  src="/images/download (18).png"
                  alt="Rise with Remya Logo"
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="flex flex-col leading-tight">
                <h3 className="text-xl font-bold text-accent-gold">Rise with Remya</h3>
                <span className="text-xs text-white/60 font-medium tracking-wide">Akashic Reader &amp; Energy Healer</span>
              </div>
            </div>


            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com/coach.remyakrishnakripa/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-accent-gold/10 hover:bg-accent-gold/20 transition-colors duration-200"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5 text-accent-gold" />
              </a>
              <a
                href="https://www.instagram.com/remyakrishnakripa/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-accent-gold/10 hover:bg-accent-gold/20 transition-colors duration-200"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5 text-accent-gold" />
              </a>
              <a
                href="https://in.linkedin.com/in/remya-krishnakripa"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-accent-gold/10 hover:bg-accent-gold/20 transition-colors duration-200"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5 text-accent-gold" />
              </a>
              <a
                href="https://www.youtube.com/@remyakrishnakripa"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-accent-gold/10 hover:bg-accent-gold/20 transition-colors duration-200"
                aria-label="YouTube"
              >
                <Youtube className="w-5 h-5 text-accent-gold" />
              </a>
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-accent-gold">Site Links</h3>
            <nav className="space-y-3">
              <Link
                href="/"
                className="block text-base text-white/90 hover:text-accent-gold transition-colors duration-200"
              >
                Home
              </Link>
              <Link
                href="/about"
                className="block text-base text-white/90 hover:text-accent-gold transition-colors duration-200"
              >
                About
              </Link>
              <Link
                href="/services"
                className="block text-base text-white/90 hover:text-accent-gold transition-colors duration-200"
              >
                Services
              </Link>
              <Link
                href="/my-book"
                className="block text-base text-white/90 hover:text-accent-gold transition-colors duration-200"
              >
                My Book
              </Link>
              <Link
                href="/journal"
                className="block text-base text-white/90 hover:text-accent-gold transition-colors duration-200"
              >
                Journal
              </Link>
              <Link
                href="/contact"
                className="block text-base text-white/90 hover:text-accent-gold transition-colors duration-200"
              >
                Contact
              </Link>
            </nav>
          </div>

          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-accent-gold">Services</h3>
            <nav className="space-y-3">
              <Link
                href="/akashic-record-reading"
                className="block text-sm text-white/90 hover:text-accent-gold transition-colors duration-200"
              >
                Akashic Records Reading
              </Link>
              <Link
                href="/past-life-regression"
                className="block text-sm text-white/90 hover:text-accent-gold transition-colors duration-200"
              >
                Past Life Healing & Release
              </Link>
              <Link
                href="/inner-child-healing"
                className="block text-sm text-white/90 hover:text-accent-gold transition-colors duration-200"
              >
                Inner Child Healing
              </Link>
              <Link
                href="/career-wealth-alignment"
                className="block text-sm text-white/90 hover:text-accent-gold transition-colors duration-200"
              >
                Career & Wealth Alignment
              </Link>
              <Link
                href="/angel-healing-therapy"
                className="block text-sm text-white/90 hover:text-accent-gold transition-colors duration-200"
              >
                Angel Healing Therapy
              </Link>
              <Link
                href="/space-clearance"
                className="block text-sm text-white/90 hover:text-accent-gold transition-colors duration-200"
              >
                Space Clearance
              </Link>
              <Link
                href="/chakra-healing-alignment"
                className="block text-sm text-white/90 hover:text-accent-gold transition-colors duration-200"
              >
                Chakra Healing & Alignment
              </Link>
              <Link
                href="/relationship-healing"
                className="block text-sm text-white/90 hover:text-accent-gold transition-colors duration-200"
              >
                Relationship Healing
              </Link>
              <Link
                href="/deep-pattern-release"
                className="block text-sm text-white/90 hover:text-accent-gold transition-colors duration-200"
              >
                Deep Pattern Release
              </Link>
              <Link
                href="/confident-communication"
                className="block text-sm text-white/90 hover:text-accent-gold transition-colors duration-200"
              >
                Confident Communication
              </Link>
              <Link
                href="/career-accelerator"
                className="block text-sm text-white/90 hover:text-accent-gold transition-colors duration-200"
              >
                Career Accelerator
              </Link>
              <Link
                href="/become-a-healer"
                className="block text-sm text-white/90 hover:text-accent-gold transition-colors duration-200"
              >
                Become an Energy Healer
              </Link>
              <Link
                href="/self-healing-masterclass"
                className="block text-sm text-white/90 hover:text-accent-gold transition-colors duration-200"
              >
                Self-Healing Masterclass
              </Link>
            </nav>
          </div>
        </div>

        <div className="border-t border-accent-gold/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-white/70">© 2025 Rise with Remya. All rights reserved.</p>
            <div className="flex space-x-6">
              <a href="#" className="text-sm text-white/70 hover:text-accent-gold transition-colors duration-200">
                Privacy Policy
              </a>
              <a href="#" className="text-sm text-white/70 hover:text-accent-gold transition-colors duration-200">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
