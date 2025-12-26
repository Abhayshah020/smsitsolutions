import Image from "next/image";
import Link from "next/link";
import { ArrowRight, GitMerge, ServerCog, Gauge } from "lucide-react";

export default function BlogDevOpsPractice() {
    return (
        <main className="bg-background text-foreground antialiased">
            {/* ================= HERO ================= */}
            <section className="relative overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/20 via-emerald-500/10 to-background" />
                <div className="absolute -top-24 -right-24 h-96 w-96 rounded-full bg-emerald-500/20 blur-3xl" />

                <div className="relative mx-auto max-w-4xl px-6 py-28 text-center">
                    <span className="inline-flex rounded-full border border-primary/20 bg-primary/10 px-5 py-1.5 text-xs font-semibold uppercase tracking-widest text-primary">
                        DevOps · Nov 28, 2025
                    </span>

                    <h1 className="mt-8 text-4xl md:text-6xl font-extrabold tracking-tight leading-[1.1]">
                        DevOps:{" "}
                        <span className="bg-gradient-to-r from-primary to-emerald-500 bg-clip-text text-transparent">
                            From Theory to Practice
                        </span>
                    </h1>

                    <p className="mt-6 max-w-3xl mx-auto text-lg md:text-xl text-foreground/70 leading-relaxed">
                        Learn how to successfully implement DevOps practices to improve
                        deployment speed, reliability, and collaboration across teams.
                    </p>

                    <div className="mt-8 text-sm text-foreground/60">
                        By Abhay Shah · DevOps & Cloud Engineer
                    </div>
                </div>
            </section>

            {/* ================= IMAGE ================= */}
            <section className="mx-auto max-w-5xl px-6 -mt-16 mb-20">
                <Image
                    src="/devops-practices-implementation.jpg"
                    alt="DevOps Workflow"
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
    prose-p:text-foreground/85
    prose-p:leading-relaxed
    prose-blockquote:border-l-4
    prose-blockquote:border-l-primary
    prose-blockquote:bg-primary/5
    prose-blockquote:px-8
    prose-blockquote:py-6
    prose-blockquote:rounded-r-2xl
    prose-blockquote:text-lg
  "
                >

                    {/* Lead Paragraph */}
                    <p className="text-justify text-xl md:text-2xl font-medium text-foreground/90 leading-relaxed mb-6">
                        DevOps is not just a collection of tools — it is a{" "}
                        <span className="font-semibold text-primary bg-primary/10 px-1 rounded">cultural transformation</span>{" "}
                        that aligns development and operations teams around speed, reliability,
                        and shared ownership.
                    </p>

                    <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-4 mt-12 text-foreground">
                        Understanding the DevOps Mindset
                    </h2>
                    <p className="text-lg md:text-xl text-foreground/85 leading-relaxed mb-6">
                        DevOps emphasizes collaboration, automation, and continuous improvement.
                        By breaking down silos, teams gain faster feedback loops and can respond
                        confidently to change and failure.
                    </p>

                    <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-4 mt-12 text-foreground">
                        Challenges in Real-World Adoption
                    </h2>
                    <p className="text-lg md:text-xl text-foreground/85 leading-relaxed mb-6">
                        Common obstacles include tool sprawl, cultural resistance, and lack of
                        visibility across teams. Sustainable DevOps adoption requires leadership
                        buy-in, clear metrics, and gradual iteration.
                    </p>

                    <blockquote className="border-l-4 border-primary bg-primary/5 rounded-r-xl px-6 py-4 italic text-foreground/80 mb-6 shadow-sm">
                        “DevOps succeeds when people, processes, and technology evolve together — not independently.”
                    </blockquote>


                    {/* Feature Cards */}
                    <div className="not-prose my-20 grid gap-8 md:grid-cols-3">
                        {[
                            {
                                icon: GitMerge,
                                title: "CI/CD Automation",
                                desc: "Automated pipelines ensure fast and repeatable deployments.",
                            },
                            {
                                icon: ServerCog,
                                title: "Infrastructure as Code",
                                desc: "Provision and manage infrastructure through versioned code.",
                            },
                            {
                                icon: Gauge,
                                title: "Monitoring & Feedback",
                                desc: "Real-time insights to improve reliability and performance.",
                            },
                        ].map((item, i) => (
                            <div
                                key={i}
                                className="
          group rounded-3xl border border-border
          bg-gradient-to-br from-card to-card/70
          p-8 shadow-md transition
          hover:-translate-y-1 hover:shadow-xl
        "
                            >
                                <item.icon
                                    size={36}
                                    className="mb-5 text-primary transition group-hover:scale-110"
                                />
                                <h3 className="text-xl font-bold">{item.title}</h3>
                                <p className="mt-3 text-sm text-foreground/65">
                                    {item.desc}
                                </p>
                            </div>
                        ))}
                    </div>

                    <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-4 mt-12 text-foreground">
                        Measuring DevOps Success
                    </h2>
                    <p className="text-lg md:text-xl text-foreground/85 leading-relaxed mb-6">
                        Metrics such as deployment frequency, lead time, and mean time to recovery
                        (MTTR) offer actionable insight into operational maturity and delivery
                        effectiveness.
                    </p>



                    {/* CTA */}
                    <div className="not-prose mt-24 text-center">
                        <Link
                            href="/contact"
                            className="
        inline-flex items-center gap-3 rounded-2xl
        bg-gradient-to-r from-primary to-emerald-500
        px-12 py-6 text-lg font-semibold text-white
        shadow-2xl transition hover:scale-105
      "
                        >
                            Implement DevOps the Right Way <ArrowRight size={22} />
                        </Link>
                    </div>
                </article>

            </section>
        </main>
    );
}
