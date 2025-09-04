export interface TeamMember {
  id: string
  name: string
  role: string
  category: "Presidents" | "VPs" | "Directors" | "Tutors"
  image?: string
  linkedin?: string
  email?: string
  program?: string
  year?: string
}

export const team: TeamMember[] = [
  // Presidents
  {
    id: "1",
    name: "Alex Johnson",
    role: "Co-President",
    category: "Presidents",
    image: "/professional-headshot.png",
    program: "Business Administration",
    year: "4th Year",
  },
  {
    id: "2",
    name: "Sarah Chen",
    role: "Co-President",
    category: "Presidents",
    image: "/professional-headshot.png",
    program: "Economics",
    year: "4th Year",
  },

  // VPs
  {
    id: "3",
    name: "Michael Rodriguez",
    role: "VP of Operations",
    category: "VPs",
    image: "/professional-headshot.png",
    program: "Business Administration",
    year: "3rd Year",
  },
  {
    id: "4",
    name: "Emily Watson",
    role: "VP of Finance",
    category: "VPs",
    image: "/professional-headshot.png",
    program: "Accounting",
    year: "3rd Year",
  },
  {
    id: "5",
    name: "David Kim",
    role: "VP of Human Resources",
    category: "VPs",
    image: "/professional-headshot.png",
    program: "Psychology",
    year: "3rd Year",
  },

  // Directors
  {
    id: "6",
    name: "Jessica Liu",
    role: "Director of Marketing",
    category: "Directors",
    image: "/professional-headshot.png",
    program: "Communications",
    year: "2nd Year",
  },
  {
    id: "7",
    name: "Ryan Thompson",
    role: "Director of Strategic Initiatives",
    category: "Directors",
    image: "/professional-headshot.png",
    program: "Business Administration",
    year: "2nd Year",
  },
]
