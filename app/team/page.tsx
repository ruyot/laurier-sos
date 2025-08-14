import { Navbar } from "@/components/navbar"
import { TeamSection } from "@/components/team-section"
import { Footer } from "@/components/footer"

export default function TeamPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <div className="pt-16">
        <TeamSection />
      </div>
      <Footer />
    </main>
  )
}
