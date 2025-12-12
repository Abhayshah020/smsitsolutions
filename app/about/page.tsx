import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { CheckCircle2 } from "lucide-react"

export default function About() {
  const team = [
    { name: "Manish Kumar Shah", role: "Founder & CEO", image: "/manishkumarshah.jpg" },
  ]

  const awards = [
    "Best IT Solutions Provider 2024",
    "Innovation Excellence Award",
    "Customer Service Champion 2024",
    "Tech Company of the Year",
  ]

  return (
    <main>
      <Header />

      {/* Hero Section */}
      <section className="relative py-20 md:py-32 px-4 bg-gradient-to-br from-primary/10 to-accent/10">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">About SMS IT Solutions</h1>
          <p className="text-xl text-foreground/70 max-w-2xl">Smart Solutions for a Smarter Future</p>
        </div>
      </section>

      {/* Company Summary */}
      <section className="py-20 md:py-32 px-4 bg-background">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-8">Who We Are</h2>
          <p className="text-lg text-foreground/70 leading-relaxed mb-6">
            SMS IT Solutions is a professional IT company specializing in software development, IT consulting, system
            integration, and digital transformation. We help organizations adapt to rapidly changing technology using
            secure, scalable, and innovative solutions.
          </p>
          <p className="text-lg text-foreground/70 leading-relaxed">
            With over a decade of experience in the IT industry, we've successfully delivered hundreds of projects
            across various sectors, helping businesses achieve their digital goals.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 md:py-32 px-4 bg-card">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12">
          <div className="p-8 rounded-xl border border-border bg-background">
            <h3 className="text-2xl font-bold mb-4 gradient-text">Our Mission</h3>
            <p className="text-foreground/70">
              To empower businesses with innovative IT solutions that drive growth, enhance efficiency, and create
              lasting value in the digital age.
            </p>
          </div>
          <div className="p-8 rounded-xl border border-border bg-background">
            <h3 className="text-2xl font-bold mb-4 gradient-text">Our Vision</h3>
            <p className="text-foreground/70">
              To be the most trusted partner for digital transformation, delivering world-class IT solutions that
              inspire innovation and create competitive advantage.
            </p>
          </div>
        </div>
      </section>

      {/* Company Journey */}
      <section className="py-20 md:py-32 px-4 bg-background">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">Our Journey</h2>
          <div className="space-y-8">
            {[
              {
                year: "2012",
                title: "Founded",
                desc: "SMS IT Solutions established with a vision to transform IT industry",
              },
              { year: "2015", title: "Expansion", desc: "Opened operations in multiple cities and expanded our team" },
              {
                year: "2018",
                title: "Cloud Migration",
                desc: "Pioneered cloud solutions and DevOps practices in the region",
              },
              {
                year: "2024",
                title: "Industry Leader",
                desc: "Recognized as a top IT solutions provider with 500+ successful projects",
              },
            ].map((milestone, index) => (
              <div key={index} className="flex gap-6 items-start">
                <div className="w-20 h-20 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl font-bold text-white">{milestone.year}</span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-2">{milestone.title}</h3>
                  <p className="text-foreground/70">{milestone.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 md:py-32 px-4 bg-card">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">Our Team</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div key={index} className="text-center" >
                <img src={member.image} alt={member.name} className="w-full aspect-square rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mb-4 text-6xl" />
                <h3 className="font-bold text-lg">{member.name}</h3>
                <p className="text-foreground/60">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Awards */}
      <section className="py-20 md:py-32 px-4 bg-background">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">Awards & Recognition</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {awards.map((award, index) => (
              <div key={index} className="flex items-center gap-4 p-6 rounded-lg border border-border bg-card">
                <CheckCircle2 size={24} className="text-primary flex-shrink-0" />
                <p className="font-semibold">{award}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
