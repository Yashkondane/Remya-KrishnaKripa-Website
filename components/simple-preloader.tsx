"use client"

import { useEffect, useState } from "react"

export default function SimplePreloader() {
  const [isLoading, setIsLoading] = useState(true)
  const [isVisible, setIsVisible] = useState(true)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 92) { clearInterval(progressInterval); return 92 }
        return prev + Math.random() * 6
      })
    }, 150)

    const handleLoad = () => {
      clearInterval(progressInterval)
      setProgress(100)
      setTimeout(() => {
        setIsLoading(false)
        setTimeout(() => setIsVisible(false), 800)
      }, 500)
    }

    if (document.readyState === "complete") {
      handleLoad()
    } else {
      window.addEventListener("load", handleLoad)
    }

    return () => {
      window.removeEventListener("load", handleLoad)
      clearInterval(progressInterval)
    }
  }, [])

  if (!isVisible) return null

  return (
    <div
      className={`fixed inset-0 z-[9999] flex flex-col items-center justify-center transition-opacity duration-700 ease-in-out ${isLoading ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      style={{ backgroundColor: "#f4e3dd" }}
    >
      {/* Soft centered glow behind logo */}
      <div
        className="absolute"
        style={{
          width: "340px",
          height: "340px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(201,168,106,0.18) 0%, transparent 70%)",
          filter: "blur(30px)",
        }}
      />

      {/* Logo */}
      <div
        className="relative mb-7"
        style={{
          animation: "gentlePulse 3s ease-in-out infinite",
        }}
      >
        <img
          src="/images/download (18).png"
          alt="Rise with Remya"
          style={{
            width: "110px",
            height: "110px",
            objectFit: "contain",
            display: "block",
            filter: "drop-shadow(0 6px 20px rgba(201,168,106,0.35))",
            imageRendering: "auto",
          }}
        />
      </div>

      {/* Brand name */}
      <h1
        style={{
          fontFamily: "'Libre Baskerville', Georgia, serif",
          fontSize: "clamp(1.6rem, 4vw, 2rem)",
          fontWeight: 700,
          color: "#34426e",
          letterSpacing: "0.04em",
          marginBottom: "6px",
          lineHeight: 1.2,
        }}
      >
        Rise with Remya
      </h1>

      {/* Tagline */}
      <p
        style={{
          fontSize: "11px",
          fontWeight: 600,
          letterSpacing: "0.22em",
          textTransform: "uppercase",
          color: "rgba(201,168,106,0.85)",
          marginBottom: "44px",
        }}
      >
        Akashic Reader &amp; Energy Healer
      </p>

      {/* Progress bar — thin, gold */}
      <div
        style={{
          width: "160px",
          height: "2px",
          borderRadius: "100px",
          backgroundColor: "rgba(52,66,110,0.1)",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            height: "100%",
            borderRadius: "100px",
            width: `${Math.min(progress, 100)}%`,
            background: "linear-gradient(90deg, #c9a86a, #d4af6a)",
            transition: "width 0.3s ease-out",
          }}
        />
      </div>

      <style>{`
        @keyframes gentlePulse {
          0%, 100% { transform: scale(1); opacity: 1; }
          50% { transform: scale(1.04); opacity: 0.92; }
        }
      `}</style>
    </div>
  )
}
