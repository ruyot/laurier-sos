"use client"

import { Button } from "@/components/ui/button"
import { ExternalLink, ArrowDown } from "lucide-react"

export function HeroSection() {
  const scrollToSessions = () => {
    const element = document.getElementById("sessions")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Photo Background */}
      <div
        className="absolute inset-0 bg-center bg-cover"
        style={{ backgroundImage: "url('/sossession.jpg')" }}
      />
      {/* Blue-tinted overlay for contrast */}
      <div className="absolute inset-0 bg-brand-900/40" />
      <div className="absolute inset-0 bg-black/35" />

      {/* Decorative subtle crystals */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-8 w-3 h-3 bg-accent/70 rotate-45 rounded-[2px] animate-sparkle" />
        <div className="absolute top-36 right-16 w-3 h-3 bg-accent/60 rotate-45 rounded-[2px] animate-float" />
        <div className="absolute bottom-28 left-1/4 w-3 h-3 bg-accent/60 rotate-45 rounded-[2px] animate-sparkle" />
        <div className="absolute bottom-16 right-1/3 w-3.5 h-3.5 bg-accent/70 rotate-45 rounded-[2px] animate-float" />
        <div className="absolute top-1/3 left-1/2 w-3 h-3 bg-accent/60 rotate-45 rounded-[2px] animate-sparkle" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-white text-center px-4 max-w-5xl mx-auto">
        <h1 className="font-display font-bold text-4xl md:text-6xl mb-6 leading-tight">
          <span className="[text-shadow:_-1px_0_#1e90ff,1px_0_#1e90ff,0_-1px_#1e90ff,0_1px_#1e90ff]">S</span>
          <span className="pl-1">tudents </span>
          <span className="[text-shadow:_-1px_0_#1e90ff,1px_0_#1e90ff,0_-1px_#1e90ff,0_1px_#1e90ff]">O</span>
          <span className="pl-1">ffering </span>
          <span className="[text-shadow:_-1px_0_#1e90ff,1px_0_#1e90ff,0_-1px_#1e90ff,0_1px_#1e90ff]">S</span>
          <span className="pl-1 text-accent">upport</span>
        </h1>

        <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-3xl leading-relaxed">
          Review sessions that get you exam-ready.
          <br />
          Supporting Laurier students since 2004.
        </p>

        <div className="flex flex-col gap-4 md:flex-row md:items-center md:gap-3 justify-center">
          <Button
            onClick={scrollToSessions}
            size="lg"
            variant="secondary"
            className="bg-white text-brand-700 hover:bg-white/90 font-semibold px-8 py-3 text-lg"
          >
            View Sessions
            <ArrowDown className="ml-2 w-5 h-5" />
          </Button>

          <Button
            asChild
            size="lg"
            className="bg-brand-500 hover:bg-brand-600 text-white font-semibold px-8 py-3 text-lg"
          >
            <a
              href="https://linktr.ee/soslaurier"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2"
            >
              Get Tickets
              <ExternalLink className="w-5 h-5" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
