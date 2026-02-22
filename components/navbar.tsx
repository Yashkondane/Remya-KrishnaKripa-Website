"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ChevronDown } from "lucide-react"

const servicesList = [
    {
        title: "Akashic Record Reading",
        href: "/akashic-record-reading",
    },
    {
        title: "Past Life Regression",
        href: "/past-life-regression",
    },
    {
        title: "Inner Child Healing",
        href: "/inner-child-healing",
    },
    {
        title: "Confident Communication",
        href: "/confident-communication",
    },
    {
        title: "Career Accelerator",
        href: "/career-accelerator",
    },
]

export default function Navbar() {
    const [isServicesOpen, setIsServicesOpen] = useState(false)

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
                        className="text-elegant-blue hover:text-accent-gold transition-all duration-300 hover:scale-105"
                    >
                        About
                    </Link>

                    {/* Services Dropdown */}
                    <div
                        className="relative"
                        onMouseEnter={() => setIsServicesOpen(true)}
                        onMouseLeave={() => setIsServicesOpen(false)}
                    >
                        <Link
                            href="/services"
                            className="flex items-center gap-1 text-elegant-blue hover:text-accent-gold transition-all duration-300 hover:scale-105 py-2"
                        >
                            Services
                            <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${isServicesOpen ? "rotate-180" : ""}`} />
                        </Link>

                        {/* Dropdown Menu */}
                        <div
                            className={`absolute top-full left-1/2 -translate-x-1/2 w-64 bg-white/95 backdrop-blur-sm rounded-xl shadow-2xl border border-elegant-blue/10 p-2 transition-all duration-300 ${isServicesOpen ? "opacity-100 visible translate-y-0" : "opacity-0 invisible -translate-y-2"
                                }`}
                        >
                            <div className="grid grid-cols-1 gap-1">
                                {servicesList.map((service) => (
                                    <Link
                                        key={service.title}
                                        href={service.href}
                                        className="flex items-center px-4 py-3 rounded-lg hover:bg-elegant-blue/5 text-elegant-blue hover:text-accent-gold transition-all duration-200"
                                    >
                                        <span className="text-sm font-medium">{service.title}</span>
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>

                    <Link
                        href="/video-testimonials"
                        className="text-elegant-blue hover:text-accent-gold transition-all duration-300 hover:scale-105"
                    >
                        Video Testimonials
                    </Link>

                    <Link
                        href="/my-book"
                        className="text-elegant-blue hover:text-accent-gold transition-all duration-300 hover:scale-105"
                    >
                        My Book
                    </Link>
                    <Link
                        href="/journal"
                        className="text-elegant-blue hover:text-accent-gold transition-all duration-300 hover:scale-105"
                    >
                        Journal
                    </Link>
                    <Link
                        href="/contact"
                        className="text-elegant-blue hover:text-accent-gold transition-all duration-300 hover:scale-105"
                    >
                        Contact
                    </Link>
                </div>

                <div className="hidden md:block">
                    <Link href="/contact">
                        <Button className="bg-elegant-blue text-warm-beige hover:bg-deep-blue px-6 py-2 rounded-lg shadow-md transition-all duration-300 hover:scale-105 btn-hover-effect">
                            Book Now
                        </Button>
                    </Link>
                </div>
            </nav>

            {/* Mobile Navigation Menu */}
            <div className="md:hidden fixed bottom-6 left-6 right-6 z-[1000]">
                <div className="bg-white/90 backdrop-blur-sm rounded-lg p-4 shadow-lg border border-elegant-blue/20 animate-slideInUp overflow-x-auto">
                    <div className="flex justify-between items-center min-w-max space-x-6 px-2">
                        <Link
                            href="/about"
                            className="flex flex-col items-center gap-1 text-xs text-elegant-blue hover:text-accent-gold transition-all duration-300"
                        >
                            <div className="w-1 h-1 bg-accent-gold rounded-full opacity-0"></div>
                            <span>About</span>
                        </Link>
                        <Link
                            href="/services"
                            className="flex flex-col items-center gap-1 text-xs text-elegant-blue hover:text-accent-gold transition-all duration-300"
                        >
                            <div className="w-1 h-1 bg-accent-gold rounded-full opacity-0"></div>
                            <span>Services</span>
                        </Link>
                        <Link
                            href="/video-testimonials"
                            className="flex flex-col items-center gap-1 text-xs text-elegant-blue hover:text-accent-gold transition-all duration-300"
                        >
                            <div className="w-1 h-1 bg-accent-gold rounded-full opacity-0"></div>
                            <span>Videos</span>
                        </Link>
                        <Link
                            href="/my-book"
                            className="flex flex-col items-center gap-1 text-xs text-elegant-blue hover:text-accent-gold transition-all duration-300"
                        >
                            <div className="w-1 h-1 bg-accent-gold rounded-full opacity-0"></div>
                            <span>Book</span>
                        </Link>
                        <Link
                            href="/journal"
                            className="flex flex-col items-center gap-1 text-xs text-elegant-blue hover:text-accent-gold transition-all duration-300"
                        >
                            <div className="w-1 h-1 bg-accent-gold rounded-full opacity-0"></div>
                            <span>Journal</span>
                        </Link>
                        <Link
                            href="/contact"
                            className="flex flex-col items-center gap-1 text-xs text-elegant-blue hover:text-accent-gold transition-all duration-300"
                        >
                            <div className="w-1 h-1 bg-accent-gold rounded-full opacity-0"></div>
                            <span>Contact</span>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}
