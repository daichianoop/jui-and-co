"use client"

import { useEffect, useState } from "react"

export function AnimatedBackground() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      {/* Theme-responsive gradient background */}
      <div
        className={`absolute inset-0 transition-all duration-1000 bg-gradient-to-br from-baby-powder via-baby-powder to-sage/10`}
      />

      {/* Floating Geometric Shapes */}
      <div
        className={`absolute top-1/4 left-1/4 w-64 h-64 rounded-full transition-all duration-1000 animate-pulse bg-sage/15 shadow-xl shadow-sage/10`}
        style={{ animationDuration: "4s" }}
      ></div>

      <div
        className={`absolute top-3/4 right-1/4 w-48 h-48 rounded-full transition-all duration-1000 animate-pulse bg-moss-green/15 shadow-xl shadow-moss-green/10`}
        style={{ animationDuration: "6s", animationDelay: "1s" }}
      ></div>

      <div
        className={`absolute top-1/2 left-3/4 w-32 h-32 rounded-full transition-all duration-1000 animate-pulse bg-redwood/10 shadow-lg shadow-redwood/5`}
        style={{ animationDuration: "5s", animationDelay: "2s" }}
      ></div>

      {/* Floating Squares */}
      <div
        className={`absolute top-1/3 right-1/3 w-24 h-24 transform rotate-45 transition-all duration-1000 animate-bounce bg-sage/12 shadow-md shadow-sage/8`}
        style={{ animationDuration: "8s" }}
      ></div>

      <div
        className={`absolute bottom-1/4 left-1/3 w-16 h-16 transform rotate-12 transition-all duration-1000 animate-bounce bg-moss-green/12 shadow-md shadow-moss-green/8`}
        style={{ animationDuration: "7s", animationDelay: "1.5s" }}
      ></div>

      {/* Large Gradient Orbs */}
      <div
        className={`absolute top-0 left-0 w-96 h-96 rounded-full blur-3xl transition-all duration-1000 animate-pulse bg-gradient-to-br from-sage/25 via-sage/15 to-transparent`}
        style={{ animationDuration: "10s" }}
      ></div>

      <div
        className={`absolute bottom-0 right-0 w-80 h-80 rounded-full blur-3xl transition-all duration-1000 animate-pulse bg-gradient-to-tl from-moss-green/25 via-moss-green/15 to-transparent`}
        style={{ animationDuration: "12s", animationDelay: "3s" }}
      ></div>

      {/* Animated Lines */}
      <div
        className={`absolute top-1/2 left-0 w-full h-px transition-all duration-1000 animate-pulse bg-gradient-to-r from-transparent via-sage/40 to-transparent`}
        style={{ animationDuration: "6s" }}
      ></div>

      <div
        className={`absolute top-0 left-1/2 w-px h-full transition-all duration-1000 animate-pulse bg-gradient-to-b from-transparent via-moss-green/40 to-transparent`}
        style={{ animationDuration: "8s", animationDelay: "2s" }}
      ></div>

      {/* Floating Particles */}
      {[...Array(6)].map((_, i) => (
        <div
          key={i}
          className={`absolute w-2 h-2 rounded-full transition-all duration-1000 bg-sage/40`}
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animation: `float ${3 + Math.random() * 4}s ease-in-out infinite`,
            animationDelay: `${Math.random() * 2}s`,
          }}
        />
      ))}

      {/* CSS for floating animation */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
        }
      `}</style>

      {/* Mesh Gradient Overlay */}
      <div className={`absolute inset-0 transition-opacity duration-1000 opacity-15`}>
        <div
          className="absolute inset-0 bg-gradient-to-r from-sage/25 via-transparent to-moss-green/25 animate-pulse"
          style={{ animationDuration: "15s" }}
        ></div>
        <div
          className="absolute inset-0 bg-gradient-to-b from-transparent via-redwood/15 to-transparent animate-pulse"
          style={{ animationDuration: "20s", animationDelay: "5s" }}
        ></div>
      </div>
    </div>
  )
}
