"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { faqs } from "@/data/faq"

export function FAQSection() {
  const categories = {
    tickets: "Tickets & Registration",
    sessions: "Review Sessions",
    general: "General Questions",
  }

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-display font-bold text-4xl md:text-5xl text-brand-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Find answers to common questions about our review sessions and services
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          {Object.entries(categories).map(([categoryKey, categoryName]) => {
            const categoryFAQs = faqs.filter((faq) => faq.category === categoryKey)

            if (categoryFAQs.length === 0) return null

            return (
              <div key={categoryKey}>
                <h3 className="font-display font-semibold text-2xl text-brand-900 mb-4">{categoryName}</h3>

                <Accordion type="single" collapsible className="space-y-2">
                  {categoryFAQs.map((faq) => (
                    <AccordionItem key={faq.id} value={faq.id} className="border rounded-xl px-4 bg-white shadow-sm">
                      <AccordionTrigger className="hover:no-underline text-left py-4">
                        <span className="font-medium text-brand-900">{faq.question}</span>
                      </AccordionTrigger>
                      <AccordionContent className="pt-0 pb-4 text-gray-700">
                        <div className="pt-2">
                          {faq.answer}
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            )
          })}
        </div>
        <div className="h-4" />
      </div>
    </section>
  )
}
