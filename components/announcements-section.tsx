"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { ExternalLink, Instagram, Calendar } from "lucide-react"
import { announcements } from "@/data/announcements"

export function AnnouncementsSection() {
  const pinnedAnnouncements = announcements.filter((a) => a.isPinned)
  const regularAnnouncements = announcements.filter((a) => !a.isPinned)

  const getBadgeVariant = (type: string) => {
    switch (type) {
      case "important":
        return "destructive"
      case "event":
        return "default"
      default:
        return "secondary"
    }
  }

  return (
    <section id="announcements" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-display font-bold text-4xl md:text-5xl text-brand-900 mb-4">Latest Updates</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Stay informed about our latest sessions, events, and opportunities
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          {/* Pinned Announcements */}
          {pinnedAnnouncements.length > 0 && (
            <div className="space-y-4">
              <h3 className="font-display font-semibold text-2xl text-brand-900 flex items-center gap-2">
                📌 Pinned Announcements
              </h3>
              <div className="grid gap-4">
                {pinnedAnnouncements.map((announcement) => (
                  <Card key={announcement.id} className="border-l-4 border-l-brand-500 shadow-md">
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <div className="space-y-2">
                          <CardTitle className="text-xl font-display text-brand-900">{announcement.title}</CardTitle>
                          <div className="flex items-center gap-2 text-sm text-gray-500">
                            <Calendar className="w-4 h-4" />
                            <span>{new Date(announcement.date).toLocaleDateString()}</span>
                            <Badge variant={getBadgeVariant(announcement.type)}>{announcement.type}</Badge>
                          </div>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-700 mb-4">{announcement.summary}</p>
                      {announcement.content && <p className="text-gray-600 text-sm mb-4">{announcement.content}</p>}
                      {announcement.link && (
                        <Button asChild size="sm" className="bg-brand-500 hover:bg-brand-600">
                          <a
                            href={announcement.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2"
                          >
                            Learn More
                            <ExternalLink className="w-4 h-4" />
                          </a>
                        </Button>
                      )}
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          )}

          {/* Regular Announcements */}
          {regularAnnouncements.length > 0 && (
            <div className="space-y-4">
              <h3 className="font-display font-semibold text-2xl text-brand-900">Recent Announcements</h3>
              <Accordion type="single" collapsible className="space-y-2">
                {regularAnnouncements.map((announcement) => (
                  <AccordionItem key={announcement.id} value={announcement.id} className="border rounded-lg px-4">
                    <AccordionTrigger className="hover:no-underline">
                      <div className="flex items-center justify-between w-full pr-4">
                        <div className="text-left">
                          <h4 className="font-semibold text-brand-900">{announcement.title}</h4>
                          <p className="text-sm text-gray-500 mt-1">
                            {new Date(announcement.date).toLocaleDateString()}
                          </p>
                        </div>
                        <Badge variant={getBadgeVariant(announcement.type)} className="ml-2">
                          {announcement.type}
                        </Badge>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="pt-4">
                      <p className="text-gray-700 mb-4">{announcement.summary}</p>
                      {announcement.content && <p className="text-gray-600 text-sm mb-4">{announcement.content}</p>}
                      {announcement.link && (
                        <Button asChild size="sm" className="bg-brand-500 hover:bg-brand-600">
                          <a
                            href={announcement.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2"
                          >
                            Learn More
                            <ExternalLink className="w-4 h-4" />
                          </a>
                        </Button>
                      )}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          )}

          {/* Instagram Follow Card */}
          <Card className="bg-gradient-to-r from-pink-50 to-purple-50 border-pink-200">
            <CardContent className="p-6 text-center">
              <Instagram className="w-12 h-12 text-pink-500 mx-auto mb-4" />
              <h3 className="font-display font-semibold text-xl text-gray-900 mb-2">Follow us on Instagram</h3>
              <p className="text-gray-600 mb-4">
                Stay updated with the latest announcements, behind-the-scenes content, and student success stories.
              </p>
              <Button asChild className="bg-pink-500 hover:bg-pink-600">
                <a
                  href="https://instagram.com/lauriersos"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  @lauriersos
                  <ExternalLink className="w-4 h-4" />
                </a>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
