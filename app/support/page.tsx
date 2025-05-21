"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export default function SupportPage() {
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    // TODO: Implement form submission
    setTimeout(() => setIsSubmitting(false), 1000)
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-foreground">Support Center</h1>
      
      <div className="grid md:grid-cols-2 gap-8">
        {/* Contact Form */}
        <div className="bg-card p-6 rounded-lg shadow-md border">
          <h2 className="text-2xl font-semibold mb-4 text-foreground">Contact Us</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-1 text-foreground">
                Name
              </label>
              <Input
                id="name"
                name="name"
                type="text"
                required
                placeholder="Your name"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-1 text-foreground">
                Email
              </label>
              <Input
                id="email"
                name="email"
                type="email"
                required
                placeholder="your.email@example.com"
              />
            </div>
            <div>
              <label htmlFor="subject" className="block text-sm font-medium mb-1 text-foreground">
                Subject
              </label>
              <Input
                id="subject"
                name="subject"
                type="text"
                required
                placeholder="What's this about?"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-1 text-foreground">
                Message
              </label>
              <Textarea
                id="message"
                name="message"
                required
                placeholder="How can we help you?"
                className="min-h-[150px]"
              />
            </div>
            <Button type="submit" className="w-full" disabled={isSubmitting}>
              {isSubmitting ? "Sending..." : "Send Message"}
            </Button>
          </form>
        </div>

        {/* FAQ Section */}
        <div className="bg-card p-6 rounded-lg shadow-md border">
          <h2 className="text-2xl font-semibold mb-4 text-foreground">Frequently Asked Questions</h2>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger className="text-foreground">How do I track my order?</AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                You can track your order by logging into your account and visiting the Orders section. 
                There you&apos;ll find detailed information about your order status and tracking number.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger className="text-foreground">What is your return policy?</AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                We offer a 30-day return policy for most items. Products must be unused and in their 
                original packaging. Please contact our support team to initiate a return.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger className="text-foreground">How can I change my delivery address?</AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                You can update your delivery address in your account settings. For orders that have 
                already been placed, please contact our support team immediately.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger className="text-foreground">What payment methods do you accept?</AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                We accept all major credit cards, PayPal, and bank transfers. All payments are 
                processed securely through our payment partners.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </div>
  )
} 