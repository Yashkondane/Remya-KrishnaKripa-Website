"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"

export default function Navbar() {
    return (
        <>
            <nav className="flex items-center justify-between px-6 py-4 md:px-12 md:py-6 bg-white/60 backdrop-blur-sm animate-fadeInDown border-b border-elegant-blue/10 sticky top-0 z-50">
                <Link href="/" className="flex items-center gap-3 group">
                    <div className="relative w-12 h-12 md:w-16 md:h-16 flex-shrink-0">
                        <Image
                            src="/images/logo-new.png"
                            alt="AkashicReading Logo"
                            width={64}
                            height={64}
                            className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-300"
                        />
                    </div>
                    <span className="text-lg md:text-xl text-elegant-blue font-bold group-hover:text-accent-gold transition-colors duration-300">
                        AkashicReading.
                    </span>
                </Link>

                <div className="hidden md:flex items-center space-x-8">
                    <Link
                        href="/about"
                        className="text-elegant-blue hover:text-accent-gold transition-all duration-300 hover:scale-105 animate-fadeInDown stagger-1"
                    >
                        About
                    </Link>
                    <Link
                        href="/services"
                        className="text-elegant-blue hover:text-accent-gold transition-all duration-300 hover:scale-105 animate-fadeInDown stagger-2"
                    >
                        Services
                    </Link>
                    <Link
                        href="/my-book"
                        className="text-elegant-blue hover:text-accent-gold transition-all duration-300 hover:scale-105 animate-fadeInDown stagger-3"
                    >
                        My Book
                    </Link>
                    <Link
                        href="/journal"
                        className="text-elegant-blue hover:text-accent-gold transition-all duration-300 hover:scale-105 animate-fadeInDown stagger-4"
                    >
                        Journal
                    </Link>
                    <Link
                        href="/contact"
                        className="text-elegant-blue hover:text-accent-gold transition-all duration-300 hover:scale-105 animate-fadeInDown stagger-5"
                    >
                        Contact
                    </Link>
                </div>

                <div className="hidden md:block">
                    <Button className="bg-elegant-blue text-warm-beige hover:bg-deep-blue px-6 py-2 rounded-lg shadow-md transition-all duration-300 hover:scale-105 btn-hover-effect animate-fadeInDown stagger-6">
                        Book Now
                    </Button>
                </div>
            </nav>

            {/* Mobile Navigation Menu */}
            <div className="md:hidden fixed bottom-6 left-6 right-6 z-[1000]">
                <div className="bg-white/90 backdrop-blur-sm rounded-lg p-4 shadow-lg border border-elegant-blue/20 animate-slideInUp">
                    <div className="flex justify-around">
                        <Link
                            href="/about"
                            className="text-sm text-elegant-blue hover:text-accent-gold transition-all duration-300 hover:scale-105"
                        >
                            About
                        </Link>
                        <Link
                            href="/services"
                            className="text-sm text-elegant-blue hover:text-accent-gold transition-all duration-300 hover:scale-105"
                        >
                            Services
                        </Link>
                        <Link
                            href="/my-book"
                            className="text-sm text-elegant-blue hover:text-accent-gold transition-all duration-300 hover:scale-105"
                        >
                            Book
                        </Link>
                        <Link
                            href="/journal"
                            className="text-sm text-elegant-blue hover:text-accent-gold transition-all duration-300 hover:scale-105"
                        >
                            Journal
                        </Link>
                        <Link
                            href="/contact"
                            className="text-sm text-elegant-blue hover:text-accent-gold transition-all duration-300 hover:scale-105"
                        >
                            Contact
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}
