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
      {/* Dark overlay for contrast */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        <h1 className="font-display font-bold text-5xl md:text-7xl mb-6 leading-tight">
          Students Offering
          <br />
          <span className="text-accent">Support</span>
        </h1>

        <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-2xl mx-auto leading-relaxed">
          Review sessions that get you exam-ready.
          <br />
          Supporting Laurier students since 2004.
        </p>

        <div className="flex flex-col gap-4 justify-center items-center">
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
            className="bg-accent hover:bg-accent/90 text-brand-900 font-semibold px-8 py-3 text-lg"
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
