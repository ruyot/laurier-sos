"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu, ExternalLink } from "lucide-react"
import { cn } from "@/lib/utils"

const navItems = [
  { name: "Home", href: "#home" },
  { name: "Sessions", href: "#sessions" },
  { name: "History", href: "#history" },
  { name: "Announcements", href: "#announcements" },
  { name: "Team", href: "#team" },
  { name: "Tutors", href: "#tutors" },
]

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [scrollProgress, setScrollProgress] = useState(0)
  const [activeSection, setActiveSection] = useState("home")

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)

      const docHeight = document.documentElement.scrollHeight
      const winHeight = window.innerHeight
      const maxScroll = Math.max(docHeight - winHeight, 1)
      const percent = (window.scrollY / maxScroll) * 100
      setScrollProgress(Math.min(Math.max(percent, 0), 100))

      // Update active section based on scroll position
      const sections = navItems.map((item) => item.href.slice(1))
      const currentSection = sections.find((section) => {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          return rect.top <= 100 && rect.bottom >= 100
        }
        return false
      })

      if (currentSection) {
        setActiveSection(currentSection)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white/95 backdrop-blur-md shadow-lg"
      )}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <img src="/soslogo.png" alt="Laurier SOS" className="w-8 h-8 object-contain" />
            <span className={cn("font-display font-bold text-xl text-brand-900")}>Laurier SOS</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className={cn(
                  "text-sm font-medium transition-colors duration-200 hover:text-brand-500",
                  activeSection === item.href.slice(1) ? "text-brand-500" : "text-gray-700",
                )}
              >
                {item.name}
              </button>
            ))}

            <Button asChild className="bg-brand-500 hover:bg-brand-600 text-white">
              <a
                href="https://linktr.ee/soslaurier"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                Get Tickets
                <ExternalLink className="w-4 h-4" />
              </a>
            </Button>
          </div>

          {/* Mobile Navigation */}
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className={cn("text-gray-700") }>
                  <Menu className="w-6 h-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-80">
                <div className="flex flex-col space-y-6 mt-8">
                  {navItems.map((item) => (
                    <button
                      key={item.name}
                      onClick={() => scrollToSection(item.href)}
                      className={cn(
                        "text-left text-lg font-medium transition-colors duration-200 hover:text-brand-500",
                        activeSection === item.href.slice(1) ? "text-brand-500" : "text-gray-700",
                      )}
                    >
                      {item.name}
                    </button>
                  ))}

                  <Button asChild className="bg-brand-500 hover:bg-brand-600 text-white w-full">
                    <a
                      href="https://linktr.ee/soslaurier"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2"
                    >
                      Get Tickets
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
      {/* Scroll progress underline */}
      <div className="absolute left-0 bottom-0 h-0.5 bg-brand-500 transition-[width] duration-150" style={{ width: `${scrollProgress}%` }} />
    </nav>
  )
}
