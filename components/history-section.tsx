"use client"

import { useEffect, useRef, useState } from "react"
import { history } from "@/data/history"
import { cn } from "@/lib/utils"

export function HistorySection() {
  return (
    <section id="history" className="py-20 ocean-gradient">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-display font-bold text-4xl md:text-5xl text-white mb-4">Our Journey</h2>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Two decades of supporting Laurier students through their academic journey
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-white/40 transform md:-translate-x-0.5" />

            {history.map((item, index) => (
              <TimelineItem key={item.id} item={item} index={index} isLast={index === history.length - 1} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function TimelineItem({
  item,
  index,
  isLast,
}: {
  item: (typeof history)[0]
  index: number
  isLast: boolean
}) {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)
  const isEven = index % 2 === 0

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.3 },
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      className={cn(
        "relative flex items-center mb-12 transition-all duration-700",
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8",
        !isLast && "pb-8",
      )}
    >
      {/* Timeline Dot */}
      <div
        className={cn(
          "absolute left-8 md:left-1/2 w-4 h-4 rounded-full transform md:-translate-x-1/2 z-10 transition-all duration-500",
          item.milestone ? "bg-white ring-4 ring-white/30" : "bg-white/70 ring-2 ring-white/20",
          isVisible && "scale-110",
        )}
      />

      {/* Content */}
      <div
        className={cn("ml-16 md:ml-0 md:w-5/12", isEven ? "md:mr-auto md:pr-8 md:text-right" : "md:ml-auto md:pl-8")}
      >
        <div
          className={cn(
            "bg-white/10 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-white/20 hover:shadow-xl transition-shadow duration-300",
            item.milestone && "ring-2 ring-white/30",
          )}
        >
          <div className="flex items-center gap-3 mb-3">
            <span className="text-2xl font-display font-bold text-white">{item.year}</span>
            {item.milestone && <span className="text-xl">🌟</span>}
          </div>

          <h3 className="font-display font-semibold text-xl text-white mb-2">{item.title}</h3>

          <p className="text-white/90 leading-relaxed">{item.description}</p>
        </div>
      </div>
    </div>
  )
}
