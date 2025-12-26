import { ArrowRight, BarChart3, Cloud, Code2, HardDrive, Palette, Shield, Wrench, Zap } from "lucide-react"
import Link from "next/link"

export default function Services() {
  const services = [
    {
      icon: Code2,
      title: "Software Development",
      slug: "/services/software-development",
      description: "Custom software solutions built with the latest technologies and best practices.",
      details: ["Web Applications", "Mobile Apps", "Enterprise Software", "API Development"],
    },
    {
      icon: Cloud,
      slug: "/services/web-mobile-development",
      title: "Web & Mobile App Development",
      description: "Full-stack development services for web and mobile platforms.",
      details: ["React & Next.js", "Flutter & React Native", "Progressive Web Apps", "Responsive Design"],
    },
    {
      icon: Cloud,
      slug: "/services/cloud-computing",
      title: "Cloud Computing & Deployment",
      description: "Scalable cloud infrastructure and managed deployment services.",
      details: ["AWS & Azure", "Kubernetes & Docker", "Serverless Architecture", "Cloud Migration"],
    },
    {
      icon: Shield,
      slug: "/services/cybersecurity",
      title: "Cybersecurity & IT Audit",
      description: "Comprehensive security solutions to protect your business assets.",
      details: ["Security Audits", "Penetration Testing", "Compliance Management", "Incident Response"],
    },
    {
      icon: HardDrive,
      slug: "/services/it-infrastructure",
      title: "IT Infrastructure Setup",
      description: "Robust infrastructure design and implementation for your organization.",
      details: ["Network Design", "Server Setup", "Data Center Solutions", "Backup & Recovery"],
    },
    {
      icon: BarChart3,
      slug: "/services/data-analytics",
      title: "Data Analytics & Automation",
      description: "Transform raw data into actionable insights with automation.",
      details: ["Business Intelligence", "Data Warehousing", "Process Automation", "Predictive Analytics"],
    },
    {
      icon: Zap,
      slug: "/services/devops",
      title: "DevOps & CI/CD Implementation",
      description: "Streamline your development pipeline with modern DevOps practices.",
      details: ["CI/CD Pipeline", "Infrastructure as Code", "Monitoring & Logging", "Performance Optimization"],
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      slug: "/services/ui-ux",
      description: "Beautiful and intuitive user interfaces that drive engagement.",
      details: ["UX Research", "Wireframing", "Prototyping", "User Testing"],
    },
    {
      icon: Wrench,
      slug: "/services/amc",
      title: "AMC (Annual Maintenance Contracts)",
      description: "24/7 support and maintenance services for your systems.",
      details: ["Technical Support", "System Monitoring", "Regular Updates", "Bug Fixes"],
    },
  ]

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
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white">Our Services</h1>
          <p className="text-xl text-foreground/70 max-w-2xl text-white/80">
            Comprehensive IT solutions designed to drive your business forward.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 md:py-32 px-4 bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon
              return (
                <div
                  key={index}
                  className="p-8 rounded-xl border border-border bg-card hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 group"
                >
                  <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Icon size={28} className="text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                  <p className="text-foreground/60 mb-6">{service.description}</p>
                  <ul className="space-y-2 mb-6">
                    {service.details.map((detail, idx) => (
                      <li key={idx} className="text-sm text-foreground/70 flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                        {detail}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href={service.slug || "#"}
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

      {/* CTA Section */}
      <section className="py-20 md:py-32 px-4 bg-gradient-to-r from-primary/10 to-accent/10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Need a Custom Solution?</h2>
          <p className="text-lg text-foreground/70 mb-8">
            Let's discuss how we can help you achieve your business goals.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 rounded-lg bg-primary text-primary-foreground px-8 py-4 text-lg font-semibold transition-all hover:bg-primary/90"
          >
            Get in Touch <ArrowRight size={20} />
          </Link>
        </div>
      </section>
    </main>
  )
}
