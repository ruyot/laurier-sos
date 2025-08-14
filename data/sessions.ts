export interface Session {
  id: string
  courseCode: string
  title: string
  date: string
  time: string
  location: string
  type: "Midterm Review" | "Final Review" | "Workshop"
  format: "Online" | "In-Person"
  price: string
  description: string
  ticketsLink: string
  tags: string[]
}

export const sessions: Session[] = [
  {
    id: "1",
    courseCode: "BU111",
    title: "Final Review Session",
    date: "Tuesday, Dec 3rd",
    time: "9PM to 12AM",
    location: "LH1001",
    type: "Final Review",
    format: "In-Person",
    price: "$20",
    description: "Comprehensive final exam review covering all major topics from the semester.",
    ticketsLink: "https://linktr.ee/soslaurier",
    tags: ["Final Review", "In-Person", "Business"],
  },
  {
    id: "2",
    courseCode: "BU127",
    title: "Midterm Review Session",
    date: "March 18th",
    time: "7PM",
    location: "Online",
    type: "Midterm Review",
    format: "Online",
    price: "$15",
    description: "Interactive midterm review session with practice problems and Q&A.",
    ticketsLink: "https://linktr.ee/soslaurier",
    tags: ["Midterm Review", "Online", "Business"],
  },
  {
    id: "3",
    courseCode: "BU231",
    title: "Midterm Review Session",
    date: "October 31st",
    time: "7PM",
    location: "BA201",
    type: "Midterm Review",
    format: "In-Person",
    price: "$15",
    description: "Focused review of key concepts with practice questions and study tips.",
    ticketsLink: "https://linktr.ee/soslaurier",
    tags: ["Midterm Review", "In-Person", "Business"],
  },
  {
    id: "4",
    courseCode: "BU247",
    title: "Midterm Review Session",
    date: "October 30th",
    time: "7PM",
    location: "Online",
    type: "Midterm Review",
    format: "Online",
    price: "$15",
    description: "Comprehensive review session covering all midterm material.",
    ticketsLink: "https://linktr.ee/soslaurier",
    tags: ["Midterm Review", "Online", "Business"],
  },
]
