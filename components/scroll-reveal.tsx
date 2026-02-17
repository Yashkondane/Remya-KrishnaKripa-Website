"use client"

import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import type { ReactNode } from "react"

interface ScrollRevealProps {
  children: ReactNode
  animation?: "fade" | "slide-left" | "slide-right" | "scale"
  delay?: number
  className?: string
}

export default function ScrollReveal({ children, animation = "fade", delay = 0, className = "" }: ScrollRevealProps) {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1, triggerOnce: true })

  const animationClass = {
    fade: "scroll-fade-in",
    "slide-left": "scroll-slide-left",
    "slide-right": "scroll-slide-right",
    scale: "scroll-scale-in",
  }[animation]

  const delayClass = delay > 0 ? `scroll-stagger-${Math.min(delay, 5)}` : ""

  return (
    <div ref={ref as any} className={`${animationClass} ${delayClass} ${isVisible ? "is-visible" : ""} ${className}`}>
      {children}
    </div>
  )
}
