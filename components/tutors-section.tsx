"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Mail, Search } from "lucide-react"
import { tutors } from "@/data/tutors"

export function TutorsSection() {
  const [searchTerm, setSearchTerm] = useState("")

  const filteredTutors = tutors.filter((tutor) => {
    const searchLower = searchTerm.toLowerCase()
    return (
      tutor.name.toLowerCase().includes(searchLower) ||
      tutor.program.toLowerCase().includes(searchLower) ||
      tutor.courses.some((course) => course.toLowerCase().includes(searchLower)) ||
      tutor.specialties?.some((specialty) => specialty.toLowerCase().includes(searchLower))
    )
  })

  return (
    <section id="tutors" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-display font-bold text-4xl md:text-5xl text-brand-900 mb-4">Our Tutors</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Connect with experienced student tutors who can help you succeed in your courses
          </p>
        </div>

        {/* Search */}
        <div className="mb-8">
          <div className="relative max-w-md mx-auto">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <Input
              placeholder="Search by name, course, or specialty..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
        </div>

        {/* Tutors Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {filteredTutors.map((tutor) => (
            <TutorCard key={tutor.id} tutor={tutor} />
          ))}
        </div>

        {filteredTutors.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No tutors found matching your search.</p>
          </div>
        )}

        {/* Join Our Team CTA */}
        <div className="mt-16 text-center">
          <Card className="max-w-2xl mx-auto bg-brand-50 border-brand-200">
            <CardContent className="p-8">
              <h3 className="font-display font-semibold text-2xl text-brand-900 mb-4">
                Want to Join Our Tutoring Team?
              </h3>
              <p className="text-gray-700 mb-6">
                We're always looking for passionate students to help their peers succeed. Gain valuable experience while
                making a difference in your fellow students' academic journey.
              </p>
              <Button asChild className="bg-brand-500 hover:bg-brand-600">
                <a href="https://linktr.ee/soslaurier" target="_blank" rel="noopener noreferrer">
                  Apply to be a Tutor
                </a>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

function TutorCard({ tutor }: { tutor: (typeof tutors)[0] }) {
  const getInitials = (name: string) => {
    return name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase()
  }

  return (
    <Card className="hover:shadow-lg transition-all duration-300 group">
      <CardContent className="p-6">
        <div className="flex items-start gap-4 mb-4">
          <Avatar className="w-16 h-16 group-hover:scale-105 transition-transform duration-300">
            <AvatarImage src={tutor.image || "/placeholder.svg"} alt={tutor.name} />
            <AvatarFallback className="bg-brand-100 text-brand-700 font-semibold">
              {getInitials(tutor.name)}
            </AvatarFallback>
          </Avatar>

          <div className="flex-1">
            <h4 className="font-display font-semibold text-lg text-brand-900 mb-1">{tutor.name}</h4>
            <p className="text-gray-600 text-sm">
              {tutor.program} • {tutor.year}
            </p>
          </div>
        </div>

        <div className="space-y-3">
          <div>
            <h5 className="font-medium text-gray-900 mb-2">Courses</h5>
            <div className="flex flex-wrap gap-1">
              {tutor.courses.map((course) => (
                <Badge key={course} variant="secondary" className="bg-brand-100 text-brand-700">
                  {course}
                </Badge>
              ))}
            </div>
          </div>

          {tutor.specialties && tutor.specialties.length > 0 && (
            <div>
              <h5 className="font-medium text-gray-900 mb-2">Specialties</h5>
              <div className="flex flex-wrap gap-1">
                {tutor.specialties.map((specialty) => (
                  <Badge key={specialty} variant="outline" className="text-xs">
                    {specialty}
                  </Badge>
                ))}
              </div>
            </div>
          )}

          <div className="pt-2">
            <Button size="sm" variant="outline" className="w-full bg-transparent" asChild>
              <a
                href={`mailto:${tutor.email || "tutoring@lauriersos.com"}`}
                className="flex items-center justify-center gap-2"
              >
                <Mail className="w-4 h-4" />
                Contact
              </a>
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
