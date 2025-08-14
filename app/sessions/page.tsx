import { Navbar } from "@/components/navbar"
import { SessionsSection } from "@/components/sessions-section"
import { Footer } from "@/components/footer"

export default function SessionsPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <div className="pt-16">
        <SessionsSection />
      </div>
      <Footer />
    </main>
  )
}
