"use client"

import { useEffect, useState } from "react"

export default function SimplePreloader() {
  const [isLoading, setIsLoading] = useState(true)
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    // Hide preloader after page loads
    const handleLoad = () => {
      setTimeout(() => {
        setIsLoading(false)
        // Add fade out animation delay
        setTimeout(() => {
          setIsVisible(false)
        }, 500)
      }, 1000)
    }

    // Check if page is already loaded
    if (document.readyState === "complete") {
      handleLoad()
    } else {
      window.addEventListener("load", handleLoad)
    }

    return () => {
      window.removeEventListener("load", handleLoad)
    }
  }, [])

  if (!isVisible) return null

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center beige-bg transition-opacity duration-500 ${isLoading ? "opacity-100" : "opacity-0"
        }`}
    >
      <div className="text-center animate-fadeInUp">
        <div className="relative mb-8 w-64 h-64 mx-auto">
          {/* Outer glow ring */}
          <div className="absolute inset-0 rounded-full border-4 border-accent-gold/20 animate-pulse"></div>
          <div className="absolute inset-2 rounded-full border-2 border-elegant-blue/30 animate-ping" style={{ animationDuration: '2s' }}></div>

          {/* Logo container with rotation */}
          <div className="absolute inset-0 flex items-center justify-center animate-spin-slow">
            <div className="w-56 h-56 relative">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/download%20%2816%29-Bq0ym2jz0FUwgvr4Y9rgEyxlX6Kkrz.png"
                alt="AkashicReading Logo"
                className="w-full h-full object-contain drop-shadow-2xl"
              />
            </div>
          </div>

          {/* Inner glow effect */}
          <div className="absolute inset-8 bg-gradient-to-r from-elegant-blue/10 to-accent-gold/10 rounded-full blur-xl"></div>
        </div>

        <h1 className="text-2xl md:text-3xl text-elegant-blue font-serif mb-4 font-bold">AkashicReading.</h1>

        <div className="flex justify-center space-x-1">
          {[0, 1, 2, 3, 4].map((index) => (
            <div
              key={index}
              className="w-1 h-6 bg-elegant-blue rounded-full"
              style={{
                animation: `wave 1.5s ease-in-out infinite`,
                animationDelay: `${index * 0.1}s`,
              }}
            />
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes wave {
          0%, 100% { 
            transform: scaleY(0.3);
            opacity: 0.5;
          }
          50% { 
            transform: scaleY(1);
            opacity: 1;
          }
        }
      `}</style>
    </div>
  )
}
