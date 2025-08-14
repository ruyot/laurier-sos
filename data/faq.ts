export interface FAQ {
  id: string
  question: string
  answer: string
  category: "tickets" | "sessions" | "general"
}

export const faqs: FAQ[] = [
  {
    id: "1",
    question: "How do I purchase tickets for review sessions?",
    answer:
      'All tickets are sold through our Linktree page. Click any "Get Tickets" button on our website to be redirected to our ticket platform.',
    category: "tickets",
  },
  {
    id: "2",
    question: "What should I bring to a review session?",
    answer:
      "Bring your course materials, notes, calculator (if needed), and any specific questions you have. We'll provide practice problems and review materials.",
    category: "sessions",
  },
  {
    id: "3",
    question: "Can I get a refund if I can't attend?",
    answer:
      "Refunds are available up to 48 hours before the session. Contact us through our social media or email for refund requests.",
    category: "tickets",
  },
  {
    id: "4",
    question: "Are sessions recorded?",
    answer:
      "Online sessions are recorded and made available to ticket holders for 1 week after the session. In-person sessions are not recorded.",
    category: "sessions",
  },
  {
    id: "5",
    question: "How can I become a tutor?",
    answer:
      "We hire tutors at the beginning of each semester. Follow our Instagram @lauriersos for application announcements, or check our hiring posts.",
    category: "general",
  },
  {
    id: "6",
    question: "Do you offer sessions for graduate courses?",
    answer:
      "Currently, we focus on undergraduate courses. However, we're always looking to expand based on student demand.",
    category: "general",
  },
]
