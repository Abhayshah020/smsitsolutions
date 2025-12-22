"use client"

import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ArrowRight, Code2, Cloud, Shield, Zap, BarChart3, Users } from "lucide-react"
import { useEffect, useState } from "react"

export default function Home() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const services = [
    {
      icon: Code2,
      title: "Software Development",
      description: "Custom software solutions tailored to your business needs with modern technologies.",
    },
    {
      icon: Cloud,
      title: "Cloud Solutions",
      description: "Scalable cloud infrastructure and deployment services for enterprise growth.",
    },
    {
      icon: Shield,
      title: "Cybersecurity",
      description: "Protect your business with comprehensive security audits and implementations.",
    },
    {
      icon: Zap,
      title: "DevOps & CI/CD",
      description: "Streamline your development pipeline with modern DevOps practices.",
    },
    {
      icon: BarChart3,
      title: "Data Analytics",
      description: "Turn data into actionable insights with advanced analytics solutions.",
    },
    {
      icon: Users,
      title: "IT Consulting",
      description: "Expert guidance for digital transformation and technology strategy.",
    },
  ]

  const testimonials = [
    {
      text: "SMS IT Solutions transformed our entire IT infrastructure. Their expertise and support are unmatched.",
      author: "Raj Kumar",
      role: "CEO, Tech Startup",
    },
    {
      text: "Working with their team was a game-changer for our cloud migration project. Highly professional!",
      author: "Priya Sharma",
      role: "CTO, E-commerce Platform",
    },
    {
      text: "Their cybersecurity solutions gave us peace of mind. Excellent service and support.",
      author: "Amit Patel",
      role: "IT Director, Finance Corp",
    },
  ]

  if (!mounted) return null

  return (
    <main>
      <Header />

      {/* Hero Section */}
      {/* <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-background to-accent/5 px-4">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-20 left-20 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
          <div className="absolute bottom-40 right-20 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
        </div>

        <div className="max-w-7xl mx-auto w-full grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className={`animate-fadeInUp ${mounted ? "opacity-100" : "opacity-0"}`}>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
              Empowering Businesses With
              <br />
              <span className="gradient-text">Smart IT Solutions</span>
            </h1>
            <p className="text-lg text-foreground/70 mb-8 leading-relaxed">
              SMS IT Solutions delivers reliable software, IT infrastructure, cloud solutions and digital transformation
              services tailored to modern businesses.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-primary text-primary-foreground px-8 py-4 text-lg font-semibold transition-all hover:bg-primary/90 hover:scale-105"
              >
                Get Started <ArrowRight size={20} />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-lg border-2 border-primary text-primary px-8 py-4 text-lg font-semibold transition-all hover:bg-primary/5"
              >
                Book Consultation
              </Link>
            </div>
          </div>

          <div className={`animate-slideInLeft ${mounted ? "opacity-100" : "opacity-0"}`}>
            <div className="relative h-96 md:h-full min-h-96 bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-6xl opacity-20">💻</div>
              </div>
              <img
                src="/modern-tech-office-workspace.jpg"
                alt="Tech workspace"
                className="w-full h-full object-cover mix-blend-overlay"
              />
            </div>
          </div>
        </div>
      </section> */}
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-4">

        {/* Background Video */}
        <div className="absolute inset-0 -z-20">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          >
            <source src="/heroBg.mp4" type="video/mp4" />
          </video>
        </div>

        {/* Dark overlay for readability */}
        <div className="absolute inset-0 -z-10 bg-black/80" />

        {/* Existing glowing gradient blobs */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-20 left-20 w-72 h-72 bg-primary/20 rounded-full blur-3xl" />
          <div className="absolute bottom-40 right-20 w-96 h-96 bg-accent/20 rounded-full blur-3xl" />
        </div>

        <div className="max-w-7xl mx-auto w-full grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className={`animate-fadeInUp ${mounted ? "opacity-100" : "opacity-0"}`}>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6 text-white">
              Empowering Businesses With
              <br />
              <span className="gradient-text">Smart IT Solutions</span>
            </h1>

            <p className="text-lg text-white/80 mb-8 leading-relaxed">
              SMS IT Solutions delivers reliable software, IT infrastructure, cloud solutions and digital transformation
              services tailored to modern businesses.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-primary text-primary-foreground px-8 py-4 text-lg font-semibold transition-all hover:bg-primary/90 hover:scale-105"
              >
                Get Started <ArrowRight size={20} />
              </Link>

              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-lg border-2 border-white text-white px-8 py-4 text-lg font-semibold transition-all hover:bg-white/10"
              >
                Book Consultation
              </Link>
            </div>
          </div>

          <div className={`animate-slideInLeft ${mounted ? "opacity-100" : "opacity-0"}`}>
            <div className="relative h-96 md:h-full min-h-96 bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl overflow-hidden backdrop-blur-sm">
              <img
                src="/modern-tech-office-workspace.jpg"
                alt="Tech workspace"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>


      {/* Services Overview */}
      <section className="py-20 md:py-32 px-4 bg-card">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Services</h2>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
              Comprehensive IT solutions designed to accelerate your business growth and digital transformation.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon
              return (
                <div
                  key={index}
                  className="p-8 rounded-xl border border-border bg-background hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 group"
                >
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Icon size={24} className="text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                  <p className="text-foreground/60 mb-4">{service.description}</p>
                  <Link
                    href="/services"
                    className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all"
                  >
                    Learn More <ArrowRight size={16} />
                  </Link>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 md:py-32 px-4 bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Why Choose Us</h2>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
              We combine innovation, reliability, and exceptional service to deliver results.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Innovation", desc: "Cutting-edge technologies and forward-thinking solutions" },
              { title: "Reliability", desc: "24/7 support with 99.9% uptime guarantee" },
              { title: "Expertise", desc: "Team of certified professionals with years of experience" },
            ].map((item, index) => (
              <div key={index} className="p-8 rounded-xl bg-card border border-border text-center">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mx-auto mb-4">
                  <div className="text-3xl">✨</div>
                </div>
                <h3 className="text-2xl font-bold mb-2">{item.title}</h3>
                <p className="text-foreground/60">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies */}
      <section className="py-20 md:py-32 px-4 bg-card">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">Technologies We Use</h2>
          <div className="grid md:grid-cols-5 gap-6">
            {["Cloud", "DevOps", "Security", "AI/ML", "Web & App"].map((tech, index) => (
              <div
                key={index}
                className="p-6 rounded-lg bg-background border border-border text-center hover:border-primary/50 transition-all"
              >
                <p className="font-semibold text-lg">{tech}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 md:py-32 px-4 bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">What Our Clients Say</h2>
            <p className="text-lg text-foreground/70">Trusted by leading businesses worldwide</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="p-8 rounded-xl bg-card border border-border hover:shadow-lg transition-all">
                <p className="text-foreground/70 mb-6 italic">"{testimonial.text}"</p>
                <div>
                  <p className="font-semibold">{testimonial.author}</p>
                  <p className="text-sm text-foreground/60">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-32 px-4 bg-gradient-to-r from-primary/10 via-background to-accent/10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Transform Your Business?</h2>
          <p className="text-lg text-foreground/70 mb-8">Let's build something great together with SMS IT Solutions.</p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 rounded-lg bg-primary text-primary-foreground px-8 py-4 text-lg font-semibold transition-all hover:bg-primary/90 hover:scale-105"
          >
            Start Your Journey <ArrowRight size={20} />
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  )
}
