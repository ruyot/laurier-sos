"use client"

import { useEffect, useState, useRef } from "react"
import { stats } from "@/data/stats"

function useCountUp(end: number, duration = 2000) {
  const [count, setCount] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true)
        }
      },
      { threshold: 0.5 },
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [isVisible])

  useEffect(() => {
    if (!isVisible) return

    let startTime: number
    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime
      const progress = Math.min((currentTime - startTime) / duration, 1)

      setCount(Math.floor(progress * end))

      if (progress < 1) {
        requestAnimationFrame(animate)
      }
    }

    requestAnimationFrame(animate)
  }, [isVisible, end, duration])

  return { count, ref }
}

export function StatsSection() {
  return (
    <section className="py-16 ocean-gradient">
      {/* Animated white wave above stats */}
      <div className="-mt-16">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-16 animate-wave">
          <path d="M0,60 C300,120 900,0 1200,60 L1200,120 L0,120 Z" fill="white" />
        </svg>
      </div>
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-display font-bold text-3xl md:text-4xl text-white mb-4">Our 2024 Stats</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {stats.map((stat, index) => (
            <StatCard key={index} stat={stat} />
          ))}
        </div>
      </div>
    </section>
  )
}

function StatCard({ stat }: { stat: (typeof stats)[0] }) {
  const { count, ref } = useCountUp(stat.countUp || 0)

  const formatValue = (value: number, originalValue: string) => {
    if (originalValue.includes("K+")) {
      return `${Math.floor(value / 1000)}K+`
    }
    if (originalValue.includes("+")) {
      return `$${value.toLocaleString()}+`
    }
    return value.toString()
  }

  return (
    <div ref={ref} className="text-center text-white">
      <div className="text-4xl md:text-5xl font-display font-bold mb-2">
        {stat.countUp ? formatValue(count, stat.value) : stat.value}
      </div>
      <div className="text-lg text-white/90">{stat.label}</div>
    </div>
  )
}
