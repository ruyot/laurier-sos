"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Linkedin, Mail } from "lucide-react"
import { team } from "@/data/team"

export function TeamSection() {
  const categories = ["Presidents", "VPs", "Directors"] as const

  const getTeamByCategory = (category: string) => {
    return team.filter((member) => member.category === category)
  }

  return (
    <section id="team" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-display font-bold text-4xl md:text-5xl text-brand-900 mb-4">Meet Our Team</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Dedicated students working together to support your academic success
          </p>
        </div>

        <div className="space-y-16">
          {categories.map((category) => {
            const members = getTeamByCategory(category)
            if (members.length === 0) return null

            return (
              <div key={category}>
                <h3 className="font-display font-semibold text-3xl text-brand-900 text-center mb-8">{category}</h3>

                <div className={`grid gap-6 max-w-6xl mx-auto ${
                  category === "Presidents" 
                    ? "grid-cols-1 md:grid-cols-2 justify-center" 
                    : "grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
                }`}>
                  {members.map((member) => (
                    <TeamMemberCard 
                      key={member.id} 
                      member={member} 
                      fixedWidth={category === "Presidents"}
                    />
                  ))}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

function TeamMemberCard({ member, fixedWidth = false }: { member: (typeof team)[0]; fixedWidth?: boolean }) {
  const getInitials = (name: string) => {
    return name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase()
  }

  return (
    <Card className={`hover:shadow-lg transition-all duration-300 group ${fixedWidth ? 'w-80' : ''}`}>
      <CardContent className="p-6 text-center">
        <Avatar className="w-24 h-24 mx-auto mb-4 group-hover:scale-105 transition-transform duration-300">
          <AvatarImage src={member.image || "/placeholder.svg"} alt={member.name} />
          <AvatarFallback className="bg-brand-100 text-brand-700 text-lg font-semibold">
            {getInitials(member.name)}
          </AvatarFallback>
        </Avatar>

        <h4 className="font-display font-semibold text-xl text-brand-900 mb-1">{member.name}</h4>

        <p className="text-brand-600 font-medium mb-2">{member.role}</p>

        {(member.program || member.year) && (
          <p className="text-gray-500 text-sm mb-4">
            {member.program} {member.year && `• ${member.year}`}
          </p>
        )}

        {(member.linkedin || member.email) && (
          <div className="flex justify-center gap-2">
            {member.linkedin && (
              <Button size="sm" variant="outline" asChild>
                <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1">
                  <Linkedin className="w-4 h-4" />
                </a>
              </Button>
            )}
            {member.email && (
              <Button size="sm" variant="outline" asChild>
                <a href={`mailto:${member.email}`} className="flex items-center gap-1">
                  <Mail className="w-4 h-4" />
                </a>
              </Button>
            )}
          </div>
        )}
      </CardContent>
    </Card>
  )
}
