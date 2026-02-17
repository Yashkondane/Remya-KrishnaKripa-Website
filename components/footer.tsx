"use client"

import { Facebook, Instagram, Twitter, Dribbble } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-elegant-blue px-6 md:px-12 py-16 md:py-24 pb-32 md:pb-24">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16">
          {/* Left Column - About */}
          <div className="space-y-6">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-24 h-24 flex-shrink-0">
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/download%20%2816%29-Bq0ym2jz0FUwgvr4Y9rgEyxlX6Kkrz.png"
                  alt="AkashicReading Logo"
                  className="w-full h-full object-contain"
                />
              </div>
              <h3 className="text-2xl font-bold text-accent-gold">AkashicReading.</h3>
            </div>
            <p className="text-base leading-relaxed text-white/90">
              A dedicated spiritual guide helping souls connect with their divine wisdom through Akashic Records
              readings, energy healing, and transformative mentorship for over a decade.
            </p>

            <div className="flex space-x-4">
              <a
                href="#"
                className="p-2 rounded-lg bg-accent-gold/10 hover:bg-accent-gold/20 transition-colors duration-200"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5 text-accent-gold" />
              </a>
              <a
                href="#"
                className="p-2 rounded-lg bg-accent-gold/10 hover:bg-accent-gold/20 transition-colors duration-200"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5 text-accent-gold" />
              </a>
              <a
                href="#"
                className="p-2 rounded-lg bg-accent-gold/10 hover:bg-accent-gold/20 transition-colors duration-200"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5 text-accent-gold" />
              </a>
              <a
                href="#"
                className="p-2 rounded-lg bg-accent-gold/10 hover:bg-accent-gold/20 transition-colors duration-200"
                aria-label="Dribbble"
              >
                <Dribbble className="w-5 h-5 text-accent-gold" />
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
                className="block text-base text-white/90 hover:text-accent-gold transition-colors duration-200"
              >
                Akashic Records Reading
              </Link>
              <Link
                href="/past-life-regression"
                className="block text-base text-white/90 hover:text-accent-gold transition-colors duration-200"
              >
                Past Life Regression
              </Link>
              <Link
                href="/inner-child-healing"
                className="block text-base text-white/90 hover:text-accent-gold transition-colors duration-200"
              >
                Inner Child Healing
              </Link>
              <Link
                href="/confident-communication"
                className="block text-base text-white/90 hover:text-accent-gold transition-colors duration-200"
              >
                Confident Communication
              </Link>
              <Link
                href="/career-accelerator"
                className="block text-base text-white/90 hover:text-accent-gold transition-colors duration-200"
              >
                Career Accelerator
              </Link>
            </nav>
          </div>

          {/* Right Column - Newsletter */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-accent-gold">Newsletter</h3>
            <p className="text-base leading-relaxed text-white/90">
              Stay connected with spiritual insights, guidance, and updates on new offerings. Join our community of
              souls on the journey within.
            </p>

            <div className="space-y-4">
              <Input
                type="email"
                placeholder="Enter your email address"
                className="bg-white/10 border-accent-gold/30 text-white placeholder:text-white/60 focus:border-accent-gold focus:ring-accent-gold"
              />
              <Button className="w-full bg-accent-gold text-elegant-blue hover:bg-accent-gold/90 transition-all duration-300 font-semibold">
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        <div className="border-t border-accent-gold/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-white/70">© 2025 AkashicReading. All rights reserved.</p>
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
