"use client"

import { Button } from "@/components/ui/button"
import { Instagram, Mail, ExternalLink } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-brand-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <img src="/soslogo.png" alt="Laurier SOS" className="w-8 h-8 object-contain" />
              <span className="font-display font-bold text-xl">Laurier SOS</span>
            </div>
            <p className="text-white/80 leading-relaxed">
              Students Offering Support - helping Laurier students succeed academically through expert-led review
              sessions since 2004.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-4">Quick Links</h4>
            <div className="space-y-2">
              <button
                onClick={() => document.getElementById("sessions")?.scrollIntoView({ behavior: "smooth" })}
                className="block text-white/80 hover:text-white transition-colors"
              >
                Review Sessions
              </button>
              <button
                onClick={() => document.getElementById("team")?.scrollIntoView({ behavior: "smooth" })}
                className="block text-white/80 hover:text-white transition-colors"
              >
                Our Team
              </button>
              <button
                onClick={() => document.getElementById("tutors")?.scrollIntoView({ behavior: "smooth" })}
                className="block text-white/80 hover:text-white transition-colors"
              >
                Find a Tutor
              </button>
              <a
                href="https://linktr.ee/soslaurier"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-white/80 hover:text-white transition-colors flex items-center gap-1"
              >
                Get Tickets
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>

          {/* Contact & Social */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-4">Connect With Us</h4>
            <div className="space-y-3">
              <a
                href="mailto:info@lauriersos.com"
                className="flex items-center gap-2 text-white/80 hover:text-white transition-colors"
              >
                <Mail className="w-4 h-4" />
                info@lauriersos.com
              </a>

              <div className="flex gap-2 pt-2">
                <Button
                  size="sm"
                  variant="outline"
                  asChild
                  className="border-white/20 text-white hover:bg-white hover:text-brand-900 bg-transparent"
                >
                  <a
                    href="https://instagram.com/lauriersos"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2"
                  >
                    <Instagram className="w-4 h-4" />
                    @lauriersos
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 pt-8 text-center">
          <p className="text-white/60">© 2025 Laurier SOS (Students Offering Support). All rights reserved.</p>
          <p className="text-white/40 text-sm mt-2">
            Made with ❤️ by students, for students at Wilfrid Laurier University
          </p>
        </div>
      </div>
    </footer>
  )
}
