import { Navbar } from "@/components/navbar"
import { TutorsSection } from "@/components/tutors-section"
import { Footer } from "@/components/footer"

export default function TutorsPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <div className="pt-16">
        <TutorsSection />
      </div>
      <Footer />
    </main>
  )
}
