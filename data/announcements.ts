export interface Announcement {
  id: string
  title: string
  date: string
  summary: string
  content?: string
  link?: string
  isPinned: boolean
  type: "info" | "important" | "event"
}

export const announcements: Announcement[] = [
  {
    id: "1",
    title: "Final Review Sessions Now Available",
    date: "2024-11-15",
    summary: "Book your spots for December final review sessions. Limited seats available!",
    content:
      "Our final review sessions are now open for registration. These intensive 3-hour sessions cover all major topics and include practice exams. Early bird pricing ends November 30th.",
    link: "https://linktr.ee/soslaurier",
    isPinned: true,
    type: "important",
  },
  {
    id: "2",
    title: "New Online Format Available",
    date: "2024-10-20",
    summary: "We now offer hybrid sessions - join us online or in-person for maximum flexibility.",
    content:
      "Based on student feedback, we're excited to offer both online and in-person options for all our review sessions. Online sessions include interactive whiteboards and breakout rooms.",
    isPinned: false,
    type: "info",
  },
  {
    id: "3",
    title: "Hiring: Tutors & Course Liaisons 2024/25",
    date: "2024-09-01",
    summary: "Join our team! We're looking for passionate students to help their peers succeed.",
    content:
      "Applications are now open for tutor and course liaison positions. Great opportunity to gain leadership experience while helping fellow students.",
    link: "https://linktr.ee/soslaurier",
    isPinned: false,
    type: "event",
  },
]
