"use client"

import { ArrowRight } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState("All")

  const projects = [
    {
      title: "E-Commerce Platform",
      category: "Web",
      slug: "/portfolio/ecommerce-platform",
      image: "/ecommerce-platform-concept.png",
      problem: "Legacy system unable to handle peak traffic",
      solution: "Built scalable microservices architecture with cloud deployment",
      tech: "React, Node.js, MongoDB, AWS",
    },
    {
      title: "Mobile Banking App",
      category: "Mobile",
      slug: "/portfolio/banking-app-mobile",
      image: "/banking-app-mobile.jpg",
      problem: "Need secure mobile-first banking solution",
      solution: "Developed React Native app with end-to-end encryption",
      tech: "React Native, Firebase, Stripe",
    },
    {
      title: "Analytics Dashboard",
      category: "Software",
      image: "/analytics-dashboard.png",
      slug: "/portfolio/analytics-dashboard",
      problem: "Data scattered across multiple systems",
      solution: "Created unified analytics dashboard with real-time insights",
      tech: "Next.js, Python, PostgreSQL, Tableau",
    },
    {
      title: "Cloud Migration",
      category: "Cloud",
      slug: "/portfolio/cloud-infrastructure",
      image: "/cloud-infrastructure.png",
      problem: "On-premises infrastructure difficult to maintain",
      solution: "Migrated entire infrastructure to AWS with zero downtime",
      tech: "AWS, Docker, Kubernetes, Terraform",
    },
    {
      title: "Security Audit System",
      category: "Security",
      image: "/security-audit-system.jpg",
      slug: "/portfolio/security-audit-system",
      problem: "Need comprehensive security assessment",
      solution: "Implemented automated security scanning and compliance",
      tech: "Python, OWASP, Burp Suite, AI/ML",
    },
    {
      title: "Enterprise CRM",
      category: "Software",
      image: "/crm-enterprise-system.jpg",
      slug: "/portfolio/crm-enterprise-system",
      problem: "Manual customer management processes",
      solution: "Developed custom CRM with automation capabilities",
      tech: "Angular, .NET, SQL Server, Azure",
    },
  ]

  const filters = ["All", "Web", "Mobile", "Software", "Cloud", "Security"]

  const filtered = activeFilter === "All" ? projects : projects.filter((p) => p.category === activeFilter)

  return (
    <main>

      {/* Hero Section */}
      <section className="relative py-20 md:py-32 px-4 bg-gradient-to-br from-primary/10 to-accent/10">
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
        <div className="absolute inset-0 -z-10 bg-black/80" />
        <div className="max-w-7xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white">Our Portfolio</h1>
          <p className="text-xl text-foreground/70 max-w-2xl text-white/80">
            Explore our recent projects and see what we can do for you.
          </p>
        </div>
      </section>

      {/* Filter Buttons */}
      <section className="py-12 px-4 bg-background border-b border-border">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap gap-3 justify-center">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-6 py-2 rounded-full font-semibold transition-all ${activeFilter === filter
                    ? "bg-primary text-primary-foreground"
                    : "bg-card border border-border text-foreground hover:border-primary/50"
                  }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 md:py-32 px-4 bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filtered.map((project, index) => (
              <div
                key={index}
                className="group rounded-xl overflow-hidden border border-border bg-card hover:shadow-lg transition-all duration-300"
              >
                <div className="relative overflow-hidden h-48 bg-muted">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-primary/10 text-primary mb-3">
                    {project.category}
                  </span>
                  <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">{project.title}</h3>
                  <p className="text-foreground/60 text-sm mb-4">{project.solution}</p>
                  <a href={project.slug || "#"} className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all">
                    View Case Study <ArrowRight size={16} />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Study Modal Info */}
      <section className="py-20 md:py-32 px-4 bg-card border-t border-border">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">Project Details</h2>
          <div className="bg-background border border-border rounded-xl p-8">
            <h3 className="text-2xl font-bold mb-6">Each project includes:</h3>
            <ul className="space-y-4">
              <li className="flex gap-3 items-start">
                <span className="w-2 h-2 rounded-full bg-primary mt-2" />
                <div>
                  <p className="font-semibold">Problem Statement</p>
                  <p className="text-foreground/60">Clear understanding of the business challenge</p>
                </div>
              </li>
              <li className="flex gap-3 items-start">
                <span className="w-2 h-2 rounded-full bg-primary mt-2" />
                <div>
                  <p className="font-semibold">Our Solution</p>
                  <p className="text-foreground/60">Innovative approach tailored to requirements</p>
                </div>
              </li>
              <li className="flex gap-3 items-start">
                <span className="w-2 h-2 rounded-full bg-primary mt-2" />
                <div>
                  <p className="font-semibold">Technology Stack</p>
                  <p className="text-foreground/60">Latest technologies and best practices</p>
                </div>
              </li>
              <li className="flex gap-3 items-start">
                <span className="w-2 h-2 rounded-full bg-primary mt-2" />
                <div>
                  <p className="font-semibold">Measurable Outcomes</p>
                  <p className="text-foreground/60">Quantifiable business impact and results</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-32 px-4 bg-gradient-to-r from-primary/10 to-accent/10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Start Your Project?</h2>
          <p className="text-lg text-foreground/70 mb-8">Let's create something amazing together.</p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 rounded-lg bg-primary text-primary-foreground px-8 py-4 text-lg font-semibold transition-all hover:bg-primary/90"
          >
            Contact Us <ArrowRight size={20} />
          </Link>
        </div>
      </section>
    </main>
  )
}
