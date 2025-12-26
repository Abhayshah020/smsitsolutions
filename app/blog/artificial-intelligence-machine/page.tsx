import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Brain, Cpu, LineChart } from "lucide-react";

export default function BlogAiMlIntegration() {
  return (
    <main className="bg-background text-foreground antialiased">
      {/* ================= HERO ================= */}
      <section className="relative overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/20 via-purple-500/10 to-background" />
        <div className="absolute -top-24 -left-24 h-96 w-96 rounded-full bg-indigo-500/20 blur-3xl" />

        <div className="relative mx-auto max-w-4xl px-6 py-28 text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-5 py-1.5 text-xs font-semibold uppercase tracking-widest text-primary">
            Artificial Intelligence · Dec 1, 2025
          </span>

          <h1 className="mt-8 text-4xl md:text-6xl font-extrabold tracking-tight leading-[1.1]">
            AI/ML Integration in{" "}
            <span className="bg-gradient-to-r from-primary via-purple-500 to-indigo-500 bg-clip-text text-transparent">
              Business Applications
            </span>
          </h1>

          <p className="mt-6 max-w-3xl mx-auto text-lg md:text-xl text-foreground/70 leading-relaxed">
            Learn how artificial intelligence and machine learning empower
            businesses with automation, predictive insights, and smarter
            decision-making.
          </p>

          <div className="mt-8 flex items-center justify-center gap-3 text-sm text-foreground/60">
            <span>Abhay Shah</span>
            <span>•</span>
            <span>AI Strategy & Data Science</span>
          </div>
        </div>
      </section>

      {/* ================= FEATURE IMAGE ================= */}
      <section className="mx-auto max-w-5xl px-6 -mt-16 mb-20">
        <Image
          src="/artificial-intelligence-machine-learning.png"
          alt="AI and Machine Learning Concept"
          width={1200}
          height={600}
          className="rounded-3xl border border-border shadow-2xl"
        />
      </section>

      {/* ================= CONTENT ================= */}
      <section className="mx-auto max-w-4xl px-6 pb-28">
        <article
          className="
    prose prose-lg prose-primary max-w-none
    prose-headings:font-extrabold
    prose-headings:tracking-tight
    prose-h2:text-4xl
    prose-h2:mt-20
    prose-h2:mb-6
    prose-p:text-[1.08rem]
    prose-p:leading-relaxed
    prose-p:text-foreground/85
    prose-strong:text-foreground
    prose-ul:mt-6
    prose-ul:space-y-2
    prose-blockquote:border-l-4
    prose-blockquote:border-l-primary
    prose-blockquote:bg-gradient-to-br
    prose-blockquote:from-primary/10
    prose-blockquote:to-purple-500/5
    prose-blockquote:rounded-r-2xl
    prose-blockquote:px-8
    prose-blockquote:py-6
    prose-blockquote:text-lg
    prose-blockquote:font-medium
  "
        >
          {/* Lead Paragraph */}
          <p className="text-justify text-xl font-medium text-foreground/90">
            Artificial Intelligence (AI) and Machine Learning (ML) are no longer
            experimental technologies — they are
            <span className="font-semibold text-primary"> foundational pillars </span>
            of modern digital products. From intelligent automation to real-time
            insights, AI-powered systems enable organizations to operate
            <strong> faster</strong>, <strong> smarter</strong>, and
            <strong> at scale</strong>.
          </p> <br />

          <h2 className="text-justify font-semibold text-xl font-medium text-foreground/90">Why AI/ML Matters for Modern Businesses?</h2><br />
          <p className="text-justify text-xl  text-foreground/90">
            Today’s businesses generate massive volumes of data. AI and ML transform
            this raw data into actionable intelligence, empowering organizations to
            make smarter decisions, automate workflows, and deliver deeply
            personalized customer experiences.
          </p>

          {/* Feature Cards */}
          <div className="not-prose my-24 grid gap-8 sm:grid-cols-3">
            {[
              {
                icon: Brain,
                title: "Intelligent Automation",
                desc: "Eliminate repetitive tasks and increase accuracy using AI-driven workflows.",
              },
              {
                icon: Cpu,
                title: "Smart Personalization",
                desc: "Deliver contextual experiences through behavioral and predictive analysis.",
              },
              {
                icon: LineChart,
                title: "Predictive Insights",
                desc: "Anticipate trends, risks, and opportunities with data intelligence.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="
          group relative overflow-hidden rounded-3xl
          border border-border
          bg-gradient-to-br from-card to-card/70
          p-9 shadow-md backdrop-blur
          transition-all duration-300
          hover:-translate-y-1 hover:shadow-2xl
        "
              >
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition bg-gradient-to-br from-primary/10 to-purple-500/10" />

                <item.icon
                  size={38}
                  className="relative mb-5 text-primary transition-transform duration-300 group-hover:scale-110"
                />

                <h3 className="relative text-xl font-bold">
                  {item.title}
                </h3>

                <p className="relative mt-3 text-sm text-foreground/65">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

          <section className="mt-16">
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-6 text-foreground">
              Key Use Cases of AI/ML Integration
            </h2>

            <ul className="grid gap-4 md:grid-cols-2 lg:grid-cols-2 mt-6">
              {[
                "Customer behavior analysis and churn prediction",
                "Fraud detection and financial risk assessment",
                "Demand forecasting and inventory optimization",
                "Chatbots and intelligent virtual assistants",
              ].map((item, i) => (
                <li
                  key={i}
                  className="flex items-start gap-3 text-lg text-foreground/85 leading-relaxed"
                >
                  <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-primary/20 text-primary font-bold">
                    {i + 1}
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* Elegant Blockquote */}
          <blockquote className="mt-12 border-l-4 border-primary bg-gradient-to-r from-primary/10 to-purple-500/5 rounded-r-2xl px-8 py-6 text-lg font-medium text-foreground/90 italic shadow-sm">
            “Organizations that successfully integrate AI into their applications
            gain a sustainable competitive advantage through efficiency, adaptability,
            and continuous innovation.”
          </blockquote>

          {/* Challenges and Best Practices */}
          <section className="mt-16">
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-6 text-foreground">
              Challenges and Best Practices
            </h2>
            <p className="text-lg text-foreground/85 leading-relaxed mb-4">
              Successful AI/ML implementation requires high-quality data, scalable
              infrastructure, and responsible governance. Transparency, privacy, and
              continuous model monitoring are critical to long-term success.
            </p>
            <p className="text-lg text-foreground/85 leading-relaxed">
              A phased adoption strategy — starting with pilot projects and scaling
              incrementally — helps maximize ROI while minimizing operational and
              business risks.
            </p>
          </section>

          {/* Preparing for AI-Driven Future */}
          <section className="mt-16">
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-6 text-foreground">
              Preparing for an AI-Driven Future
            </h2>
            <p className="text-lg text-foreground/85 leading-relaxed">
              AI is not merely a technical upgrade — it is a strategic shift. Businesses
              that embed intelligence into their applications today will build more
              resilient, adaptive, and future-ready digital ecosystems.
            </p>
          </section>

          {/* CTA */}
          <div className="not-prose mt-28 text-center">
            <Link
              href="/contact"
              className="
        inline-flex items-center gap-3 rounded-2xl
        bg-gradient-to-r from-primary via-purple-500 to-indigo-600
        px-14 py-6 text-lg font-semibold text-white
        shadow-2xl transition-all duration-300
        hover:scale-105 hover:shadow-3xl
      "
            >
              Talk to Our AI Experts <ArrowRight size={22} />
            </Link>
          </div>
        </article>

      </section>
    </main>
  );
}
