"use client"

import type React from "react"
import { useState } from "react"
import { Header } from "@/components/header"
import { AnimatedBackground } from "@/components/animated-background"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MapPin, Clock, Send } from "lucide-react"
import {HeroSection} from "@/components/hero-section";
import {Footer} from "@/components/footer";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const message = `*Contact Form Submission*\n\nName: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nSubject: ${formData.subject}\n\nMessage:\n${formData.message}`
    const encodedMessage = encodeURIComponent(message)
    const whatsappUrl = `https://wa.me/919559545103?text=${encodedMessage}`
    window.open(whatsappUrl, "_blank")

    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  return (
      <div className="min-h-screen bg-baby-powder transition-colors duration-300">
        <AnimatedBackground />
        <Header />

        {/* Hero Section */}
        <HeroSection
            title="Get In Touch"
            subtitle="We&#39;d love to hear from you. Send us a message and we&#39;ll respond as soon as possible."
            backgroundImage="/placeholder.svg?height=400&width=1200"
        />

        {/* Contact Section */}
        <section className="py-16 bg-jet">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

              {/* Contact Info */}
              <div className="animate-in fade-in slide-in-from-left duration-700">
                <h2 className="text-3xl font-mono font-bold text-baby-powder mb-8">Contact Information</h2>

                <div className="space-y-6">
                  {/* Phone */}
                  <div className="flex items-start space-x-4 p-4 rounded-lg bg-baby-powder text-jet shadow-sm hover:shadow-md transition-shadow duration-300">
                    <div className="bg-moss-green/10 p-3 rounded-full">
                      <Phone className="h-6 w-6 text-moss-green" />
                    </div>
                    <div>
                      <h3 className="font-semibold font-mono text-jet">Phone</h3>
                      <p className="font-mono">+91 95595 45103</p>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex items-start space-x-4 p-4 rounded-lg bg-baby-powder text-jet shadow-sm hover:shadow-md transition-shadow duration-300">
                    <div className="bg-sage/10 p-3 rounded-full">
                      <Mail className="h-6 w-6 text-moss-green" />
                    </div>
                    <div>
                      <h3 className="font-semibold font-mono text-jet">Email</h3>
                      <p className="font-mono">hello@juiandco.com</p>
                    </div>
                  </div>

                  {/* Address */}
                  <div className="flex items-start space-x-4 p-4 rounded-lg bg-baby-powder text-jet shadow-sm hover:shadow-md transition-shadow duration-300">
                    <div className="bg-moss-green/10 p-3 rounded-full">
                      <MapPin className="h-6 w-6 text-moss-green" />
                    </div>
                    <div>
                      <h3 className="font-semibold font-mono text-jet">Address</h3>
                      <p className="font-mono">
                        123 Fashion Street<br />
                        Mumbai, Maharashtra 400001<br />
                        India
                      </p>
                    </div>
                  </div>

                  {/* Hours */}
                  <div className="flex items-start space-x-4 p-4 rounded-lg bg-baby-powder text-jet shadow-sm hover:shadow-md transition-shadow duration-300">
                    <div className="bg-sage/10 p-3 rounded-full">
                      <Clock className="h-6 w-6 text-moss-green" />
                    </div>
                    <div>
                      <h3 className="font-semibold font-mono text-jet">Business Hours</h3>
                      <p className="font-mono">
                        Monday - Saturday: 10:00 AM - 8:00 PM<br />
                        Sunday: 11:00 AM - 6:00 PM
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div className="animate-in fade-in slide-in-from-right duration-700">
                <div className="bg-transparent border-2 border-baby-powder text-black rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
                  <h2 className="text-3xl font-mono font-bold text-baby-powder mb-8">Send us a Message</h2>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <Label htmlFor="name" className="text-moss-green font-mono">Name *</Label>
                        <Input
                            id="name"
                            name="name"
                            type="text"
                            required
                            value={formData.name}
                            onChange={handleChange}
                            className="mt-1 transition-all duration-300 focus:ring-2 focus:ring-moss-green"
                        />
                      </div>
                      <div>
                        <Label htmlFor="email" className="text-moss-green font-mono">Email *</Label>
                        <Input
                            id="email"
                            name="email"
                            type="email"
                            required
                            value={formData.email}
                            onChange={handleChange}
                            className="mt-1 transition-all duration-300 focus:ring-2 focus:ring-moss-green"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <Label htmlFor="phone" className="text-moss-green font-mono">Phone</Label>
                        <Input
                            id="phone"
                            name="phone"
                            type="tel"
                            value={formData.phone}
                            onChange={handleChange}
                            className="mt-1 transition-all duration-300 focus:ring-2 focus:ring-moss-green"
                        />
                      </div>
                      <div>
                        <Label htmlFor="subject" className="text-moss-green font-mono">Subject *</Label>
                        <Input
                            id="subject"
                            name="subject"
                            type="text"
                            required
                            value={formData.subject}
                            onChange={handleChange}
                            className="mt-1 transition-all duration-300 focus:ring-2 focus:ring-moss-green"
                        />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="message" className="text-moss-green font-mono">Message *</Label>
                      <Textarea
                          id="message"
                          name="message"
                          rows={6}
                          required
                          value={formData.message}
                          onChange={handleChange}
                          className="mt-1 transition-all duration-300 focus:ring-2 focus:ring-moss-green"
                          placeholder="Tell us how we can help you..."
                      />
                    </div>

                    <Button
                        type="submit"
                        className="w-full bg-moss-green hover:bg-moss-green-2 text-white transition-all duration-300 hover:scale-105"
                    >
                      <Send className="h-4 w-4 mr-2" />
                      Send Message
                    </Button>
                  </form>
                </div>
              </div>

            </div>
          </div>
        </section>
        <Footer/>
      </div>
  )
}
