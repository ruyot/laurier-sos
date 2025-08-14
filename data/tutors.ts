export interface Tutor {
  id: string
  name: string
  program: string
  year: string
  courses: string[]
  image?: string
  email?: string
  specialties?: string[]
}

export const tutors: Tutor[] = [
  {
    id: "1",
    name: "Amanda Foster",
    program: "Business Administration",
    year: "4th Year",
    courses: ["BU111", "BU121", "BU127"],
    image: "/student-tutor.png",
    specialties: ["Financial Accounting", "Business Fundamentals"],
  },
  {
    id: "2",
    name: "James Park",
    program: "Economics",
    year: "3rd Year",
    courses: ["BU231", "BU247", "EC140"],
    image: "/student-tutor.png",
    specialties: ["Microeconomics", "Statistics"],
  },
  {
    id: "3",
    name: "Maria Gonzalez",
    program: "Mathematics",
    year: "4th Year",
    courses: ["MA103", "MA104", "ST230"],
    image: "/student-tutor.png",
    specialties: ["Calculus", "Statistics", "Linear Algebra"],
  },
  {
    id: "4",
    name: "Kevin Zhang",
    program: "Computer Science",
    year: "3rd Year",
    courses: ["CP104", "CP164", "CP213"],
    image: "/student-tutor.png",
    specialties: ["Programming", "Data Structures", "Algorithms"],
  },
]
