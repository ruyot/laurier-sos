import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { StatsSection } from "@/components/stats-section"
import { SessionsSection } from "@/components/sessions-section"
import { HistorySection } from "@/components/history-section"
import { AnnouncementsSection } from "@/components/announcements-section"
import { TeamSection } from "@/components/team-section"
import { TutorsSection } from "@/components/tutors-section"
import { FAQSection } from "@/components/faq-section"
import { Footer } from "@/components/footer"
import { ScrollToTop } from "@/components/scroll-to-top"

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroSection />
      <StatsSection />
      <SessionsSection />
      <HistorySection />
      <AnnouncementsSection />
      <TeamSection />
      <TutorsSection />
      <FAQSection />
      <Footer />
      <ScrollToTop />
    </main>
  )
}
