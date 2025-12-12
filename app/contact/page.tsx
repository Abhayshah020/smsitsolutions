"use client"

import type React from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Mail, Phone, MapPin, ArrowRight } from "lucide-react"
import { useState } from "react"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    // Simulate form submission
    console.log("Form submitted:", formData)
    setSubmitted(true)
    setTimeout(() => {
      setFormData({ name: "", email: "", phone: "", message: "" })
      setSubmitted(false)
    }, 3000)
  }

  return (
    <main>
      <Header />

      {/* Hero Section */}
      <section className="relative py-20 md:py-32 px-4 bg-gradient-to-br from-primary/10 to-accent/10">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Get in Touch</h1>
          <p className="text-xl text-foreground/70 max-w-2xl">
            Let's build something great together. Reach out to us today!
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-20 md:py-32 px-4 bg-background">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8 mb-16">
          <div className="p-8 rounded-xl bg-card border border-border text-center">
            <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center mx-auto mb-4">
              <Mail size={24} className="text-white" />
            </div>
            <h3 className="text-xl font-bold mb-2">Email</h3>
            <p className="text-foreground/70">info@smsitsolutions.com.au</p>
            <p className="text-foreground/70">contact@smsitsolutions.com.au</p>
          </div>
          <div className="p-8 rounded-xl bg-card border border-border text-center">
            <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center mx-auto mb-4">
              <Phone size={24} className="text-white" />
            </div>
            <h3 className="text-xl font-bold mb-2">Phone</h3>
            <p className="text-foreground/70">+977 980-3616675</p>
            <p className="text-foreground/70">+977 986-2017411</p>
            <p className="text-foreground/70">+61 450-366-703</p>
          </div>
          <div className="p-8 rounded-xl bg-card border border-border text-center">
            <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center mx-auto mb-4">
              <MapPin size={24} className="text-white" />
            </div>
            <h3 className="text-xl font-bold mb-2">Location</h3>
            <p className="text-foreground/70">SMS IT Solutions –</p>
            <p className="text-foreground/70">Koteshwor (Opp. Bhatbhateni)</p>
          </div>
        </div>

        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div>
            <h2 className="text-3xl font-bold mb-8">Send us a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 rounded-lg border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 rounded-lg border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium mb-2">
                  Phone
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-2 rounded-lg border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="+977-1-1234567"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-4 py-2 rounded-lg border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                  placeholder="Tell us about your project"
                />
              </div>
              <button
                type="submit"
                className="w-full rounded-lg bg-primary text-primary-foreground px-6 py-3 font-semibold transition-all hover:bg-primary/90 flex items-center justify-center gap-2"
              >
                Send Message <ArrowRight size={18} />
              </button>
              {submitted && (
                <p className="text-center text-primary font-semibold">
                  Thanks for reaching out! We'll get back to you soon.
                </p>
              )}
            </form>
          </div>

          {/* Map Placeholder */}
          <div>
            <h2 className="text-3xl font-bold mb-8">Find Us Here</h2>
            <div className="mt-8 p-6 rounded-lg bg-card border border-border">
              <h3 className="font-bold text-lg mb-2">SMS IT Solutions</h3>
              <p className="text-foreground/70 mb-4">Kathmandu, Koteshwor (Opp. Bhatbhateni), Nepal</p>
              <p className="text-foreground/60 text-sm">
                We're located in the heart of Kathmandu's tech hub, easily accessible and ready to serve you.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
