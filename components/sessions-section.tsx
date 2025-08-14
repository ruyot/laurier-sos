"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { ExternalLink, Calendar, Clock, MapPin, Search } from "lucide-react"
import { sessions } from "@/data/sessions"

export function SessionsSection() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedFilter, setSelectedFilter] = useState<string>("All")

  const filters = ["All", "Midterm Review", "Final Review", "Online", "In-Person"]

  const filteredSessions = sessions.filter((session) => {
    const matchesSearch =
      session.courseCode.toLowerCase().includes(searchTerm.toLowerCase()) ||
      session.title.toLowerCase().includes(searchTerm.toLowerCase())

    const matchesFilter =
      selectedFilter === "All" || session.type === selectedFilter || session.format === selectedFilter

    return matchesSearch && matchesFilter
  })

  return (
    <section id="sessions" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-display font-bold text-4xl md:text-5xl text-brand-900 mb-4">Review Sessions</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Join our expert-led review sessions and boost your exam confidence
          </p>
        </div>

        {/* Search and Filters */}
        <div className="mb-8 space-y-4">
          <div className="relative max-w-md mx-auto">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <Input
              placeholder="Search by course code..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>

          <div className="flex flex-wrap justify-center gap-2">
            {filters.map((filter) => (
              <Button
                key={filter}
                variant={selectedFilter === filter ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedFilter(filter)}
                className={selectedFilter === filter ? "bg-brand-500 hover:bg-brand-600" : ""}
              >
                {filter}
              </Button>
            ))}
          </div>
        </div>

        {/* Sessions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSessions.map((session) => (
            <Card key={session.id} className="hover:shadow-lg transition-shadow duration-300 group">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="text-2xl font-display font-bold text-brand-900 group-hover:text-brand-700 transition-colors">
                      {session.courseCode}
                    </CardTitle>
                    <p className="text-gray-600 mt-1">{session.title}</p>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-brand-500">{session.price}</div>
                  </div>
                </div>
              </CardHeader>

              <CardContent className="space-y-4">
                <div className="space-y-2 text-sm text-gray-600">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    <span>{session.date}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    <span>{session.time}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4" />
                    <span>{session.location}</span>
                  </div>
                </div>

                <p className="text-gray-700 text-sm leading-relaxed">{session.description}</p>

                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary" className="bg-brand-100 text-brand-700">
                    {session.type}
                  </Badge>
                  <Badge
                    variant="outline"
                    className={
                      session.format === "Online" ? "border-green-200 text-green-700" : "border-blue-200 text-blue-700"
                    }
                  >
                    {session.format}
                  </Badge>
                </div>

                <div className="flex gap-2 pt-2">
                  <Button asChild className="flex-1 bg-brand-500 hover:bg-brand-600">
                    <a
                      href={session.ticketsLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2"
                    >
                      Get Tickets
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredSessions.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No sessions found matching your criteria.</p>
          </div>
        )}
      </div>
    </section>
  )
}
