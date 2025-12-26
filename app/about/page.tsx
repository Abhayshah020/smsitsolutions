import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ArrowRight, Award, CheckCircle2, Code2, Lightbulb, Quote, Target, Users, Zap } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function About() {
  const team = [
    { name: "Manish Kumar Shah", role: "Founder & CEO", image: "/manishKumarShah.jpeg" },
    { name: "Abhay Shah", role: "Director & CTO", image: "/3.jpeg" },
    { name: "Kripanand Sah", role: "Social Media Manager", image: "/2.jpeg" },
    { name: "Rajkumar Subedi", role: "Managing Director", image: "/4.jpeg" },
  ]

  const awards = [
    "Best IT Solutions Provider 2024",
    "Innovation Excellence Award",
    "Customer Service Champion 2024",
    "Tech Company of the Year",
  ]

  const values = [
    { icon: Zap, title: "Innovation", description: "Cutting-edge technology and creative solutions" },
    { icon: Users, title: "Collaboration", description: "Partnerships built on trust and transparency" },
    { icon: Target, title: "Excellence", description: "Commitment to delivering exceptional results" },
  ]

  const services = [
    { icon: Code2, title: "Custom Development", description: "Tailored software solutions for your unique needs" },
    { icon: Lightbulb, title: "Digital Strategy", description: "Transformative digital transformation consulting" },
  ]

  const stats = [
    { number: "50+", label: "Projects Delivered" },
    { number: "15+", label: "Team Members" },
    { number: "3+", label: "Years Experience" },
    { number: "98%", label: "Client Satisfaction" },
  ]

  const testimonials = [
    {
      name: "Manish Kumar Shah",
      role: "Founder & CEO",
      image: "/manishKumarShah.jpeg",
      message:
        "Our mission at SMS IT Solutions is to democratize advanced technology and make it accessible to businesses of all sizes. Every project we undertake is a testament to our commitment to excellence and our belief that technology should empower, not complicate. We're not just building software; we're building the future of digital innovation.",
    },
    {
      name: "Abhay Shah",
      role: "Director & CTO",
      image: "/3.jpeg",
      message:
        "Technology is ever-evolving, and staying ahead requires constant learning and innovation. At SMS, we cultivate a culture of technical excellence where our engineers are encouraged to explore cutting-edge solutions. Our architecture-first approach ensures that every solution we deliver is scalable, secure, and built to last.",
    },
    {
      name: "Kripanand Sah",
      role: "Social Media Manager",
      image: "/2.jpeg",
      message:
        "In today's digital-first world, community and engagement are paramount. Our role is to amplify the voice of SMS IT Solutions and connect with our audience authentically. Through strategic storytelling and genuine interactions, we're building a community of innovators, thought leaders, and partners who believe in the power of transformative technology.",
    },
    {
      name: "Rajkumar Subedi",
      role: "Managing Director",
      image: "/4.jpeg",
      message:
        "Business excellence is built on trust, integrity, and consistent delivery. As Managing Director, I'm committed to ensuring that every client partnership is characterized by transparency, accountability, and measurable results. We believe in long-term relationships over quick wins, and our track record speaks to this philosophy.",
    },
  ]

  return (
    <main>
      <Header />

      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 md:py-30 px-4 ">

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

        <div className="max-w-5xl mx-auto">
          <div className="text-center">
            <div className="inline-block">
              <span className="text-sm font-semibold text-blue-400 tracking-wider uppercase">
                Trusted By Industry Leaders
              </span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight text-balance">
              Building Tomorrow's Digital Solutions
            </h1>
            <p className="text-xl md:text-2xl text-white/60 max-w-3xl mx-auto text-balance leading-relaxed">
              We transform businesses through innovative technology, strategic consulting, and world-class software
              development
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 md:py-28 px-4 bg-white border-t border-gray-200">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            {stats.map((stat, idx) => (
              <div key={idx} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">{stat.number}</div>
                <p className="text-gray-600 font-medium">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-24 md:py-32 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 text-balance">SMS IT Solutions</h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                Since our founding in 2022, we've been at the forefront of digital innovation, partnering with
                forward-thinking organizations to achieve their most ambitious technology goals.
              </p>
            </div>
            <p className="text-lg text-gray-700 leading-relaxed">
              Our team of experienced professionals combines deep technical expertise with strategic business acumen,
              delivering solutions that don't just work—they drive measurable business impact and sustainable growth.
            </p>
            <div className="pt-4">
              <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-4">Core Expertise</h3>
              <div className="flex flex-wrap gap-3">
                {["Cloud Architecture", "DevOps", "Mobile Apps", "AI/ML", "Enterprise Solutions"].map((tag, idx) => (
                  <span
                    key={idx}
                    className="px-4 py-2 bg-blue-50 text-blue-700 rounded-full text-sm font-medium border border-blue-200"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-blue-50 rounded-2xl opacity-40" />
            <div className="relative bg-white rounded-2xl overflow-hidden border-2 border-gray-200 shadow-lg hover:shadow-xl transition-shadow">
              <img
                src="/modern-tech-office-workspace.jpg"
                alt="SMS IT Solutions Team"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 md:py-32 px-4 bg-white border-t border-gray-200">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-16 text-balance">
            Our Purpose & Direction
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="group relative">
              <div className="absolute inset-0 bg-blue-50 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative p-10 rounded-2xl border-2 border-gray-200 bg-white group-hover:border-blue-400 transition-colors duration-300">
                <Target className="w-12 h-12 text-blue-600 mb-4" />
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Our Mission</h3>
                <p className="text-gray-700 leading-relaxed text-lg">
                  To empower enterprises with transformative technology solutions that accelerate growth, unlock
                  innovation, and create lasting competitive advantage in an increasingly digital world.
                </p>
              </div>
            </div>

            <div className="group relative">
              <div className="absolute inset-0 bg-blue-50 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative p-10 rounded-2xl border-2 border-gray-200 bg-white group-hover:border-blue-400 transition-colors duration-300">
                <Lightbulb className="w-12 h-12 text-blue-600 mb-4" />
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Our Vision</h3>
                <p className="text-gray-700 leading-relaxed text-lg">
                  To be recognized globally as the most trusted partner for digital transformation, renowned for
                  delivering innovative solutions that solve complex challenges and inspire organizational excellence.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-24 md:py-32 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-16 text-balance">
            Our Core Values
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, idx) => {
              const Icon = value.icon
              return (
                <div key={idx} className="group text-center space-y-4">
                  <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-blue-600 group-hover:shadow-lg transition-all duration-300 transform group-hover:scale-110">
                    <Icon className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">{value.title}</h3>
                  <p className="text-gray-700 leading-relaxed">{value.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Timeline / Company Journey */}
      <section className="py-24 md:py-32 px-4 bg-white border-t border-gray-200">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-20 text-balance">
            Our Growth Journey
          </h2>

          <div className="space-y-12">
            {[
              {
                year: "2022",
                title: "Founded",
                desc: "SMS IT Solutions officially launched with a vision to revolutionize digital transformation across industries",
              },
              {
                year: "2023",
                title: "Rapid Expansion",
                desc: "Scaled operations across multiple cities, assembled elite team of 30+ technology experts and specialists",
              },
              {
                year: "2023",
                title: "Cloud & Innovation",
                desc: "Pioneered enterprise-grade cloud solutions and DevOps practices, becoming regional thought leaders",
              },
              {
                year: "2024",
                title: "Industry Recognition",
                desc: "Recognized as top IT solutions provider with 200+ successful projects and 98% client satisfaction rate",
              },
            ].map((milestone, index) => (
              <div key={index} className="flex gap-8 md:gap-16 items-start relative">
                {index < 3 && (
                  <div className="absolute left-12 top-24 w-1 h-24 bg-gradient-to-b from-blue-500 to-transparent -ml-4 hidden md:block" />
                )}
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-24 w-24 rounded-full bg-blue-600 shadow-md">
                    <span className="text-2xl font-bold text-white">{milestone.year}</span>
                  </div>
                </div>
                <div className="flex-grow pt-2">
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">{milestone.title}</h3>
                  <p className="text-lg text-gray-700 leading-relaxed">{milestone.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-24 md:py-32 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-16 text-balance">
            What We Deliver
          </h2>

          <div className="grid md:grid-cols-2 gap-10">
            {services.map((service, idx) => {
              const Icon = service.icon
              return (
                <div key={idx} className="group relative">
                  <div className="absolute inset-0 bg-blue-50 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="relative p-8 rounded-2xl border-2 border-gray-200 bg-white group-hover:border-blue-500 transition-all duration-300">
                    <Icon className="w-14 h-14 text-blue-600 mb-4" />
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">{service.title}</h3>
                    <p className="text-gray-700 text-lg leading-relaxed mb-4">{service.description}</p>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-blue-600 rounded-full" />
                        Enterprise Architecture
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-blue-600 rounded-full" />
                        Full-Stack Development
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-blue-600 rounded-full" />
                        Legacy System Modernization
                      </li>
                    </ul>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-24 md:py-32 px-4 bg-white border-t border-gray-200">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-4 text-balance">
            Our Leadership Team
          </h2>
          <p className="text-center text-lg text-gray-600 mb-16 max-w-2xl mx-auto">
            Industry veterans with decades of combined experience driving digital innovation
          </p>

          <div className="grid md:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div key={index} className="group text-center">
                <div className="relative mb-6 overflow-hidden rounded-2xl border-2 border-gray-300 group-hover:border-blue-500 transition-all duration-300">
                  <div className="aspect-square relative overflow-hidden bg-gray-100">
                    <Image
                      src={member.image || "/placeholder.svg"}
                      alt={member.name}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-300"
                      sizes="280px"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
                <p className="text-blue-600 font-semibold text-sm">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Messages Section */}
      <section className="py-24 md:py-32 px-4 bg-gray-50 border-t border-gray-200">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-4 text-balance">
            Messages from Our Leadership
          </h2>
          <p className="text-center text-lg text-gray-600 mb-16 max-w-2xl mx-auto">
            Insights and perspectives from the visionaries driving SMS IT Solutions forward
          </p>

          <div className="grid md:grid-cols-1 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="group relative">
                <div className="absolute inset-0 bg-blue-50 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative p-8 rounded-2xl border-2 border-gray-200 bg-white group-hover:border-blue-400 group-hover:shadow-lg transition-all duration-300 h-full flex flex-col">
                  {/* Quote Icon */}
                  <div className="mb-4">
                    <Quote className="w-8 h-8 text-blue-600 opacity-70" />
                  </div>

                  {/* Message */}
                  <p className="text-gray-700 text-lg leading-relaxed mb-8 flex-grow italic">"{testimonial.message}"</p>

                  {/* Author Info */}
                  <div className="flex items-center gap-4 pt-6 border-t border-gray-200">
                    <div className="relative w-16 h-16 rounded-full overflow-hidden flex-shrink-0 border-2 border-blue-200">
                      <Image
                        src={testimonial.image || "/placeholder.svg"}
                        alt={testimonial.name}
                        fill
                        className="object-cover"
                        sizes="64px"
                      />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 text-sm md:text-base">{testimonial.name}</h4>
                      <p className="text-blue-600 font-semibold text-xs md:text-sm">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Awards & Recognition */}
      <section className="py-24 md:py-32 px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-16 text-balance">
            Awards & Recognition
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              "Best IT Solutions Provider 2024",
              "Innovation Excellence Award",
              "Customer Service Champion 2024",
              "Tech Company of the Year",
            ].map((award, index) => (
              <div
                key={index}
                className="group flex items-center gap-4 p-6 rounded-xl border-2 border-gray-200 bg-white hover:border-blue-500 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center">
                  <Award size={24} className="text-white" />
                </div>
                <p className="font-semibold text-gray-900 text-lg">{award}</p>
              </div>
            ))}
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

      <Footer />
    </main>
  )
}
