import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Smartphone, Layers, Code } from "lucide-react";

export default function BlogMobileNativeVsCross() {
    return (
        <main className="bg-background text-foreground antialiased">
            {/* ================= HERO ================= */}
            <section className="relative overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/20 via-blue-500/10 to-background" />
                <div className="absolute -top-24 -left-24 h-96 w-96 rounded-full bg-blue-500/20 blur-3xl" />

                <div className="relative mx-auto max-w-4xl px-6 py-28 text-center">
                    <span className="inline-flex rounded-full border border-primary/20 bg-primary/10 px-5 py-1.5 text-xs font-semibold uppercase tracking-widest text-primary">
                        Mobile Development · Nov 25, 2025
                    </span>

                    <h1 className="mt-8 text-4xl md:text-6xl font-extrabold tracking-tight leading-[1.1]">
                        Mobile App Development:{" "}
                        <span className="bg-gradient-to-r from-primary to-blue-500 bg-clip-text text-transparent">
                            Native vs Cross-Platform
                        </span>
                    </h1>

                    <p className="mt-6 max-w-3xl mx-auto text-lg md:text-xl text-foreground/70 leading-relaxed">
                        Choosing the right mobile development approach can significantly
                        impact performance, cost, and time-to-market.
                    </p>

                    <div className="mt-8 text-sm text-foreground/60">
                        By Abhay Shah · Mobile Solutions Architect
                    </div>
                </div>
            </section>

            {/* ================= IMAGE ================= */}
            <section className="mx-auto max-w-5xl px-6 -mt-16 mb-20">
                <Image
                    src="/mobile-app-development.png"
                    alt="Mobile App Development"
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
    prose-strong:text-foreground
  "
                >
                    {/* Lead Paragraph */}

                    <p className="text-justify text-xl md:text-2xl font-medium text-foreground/90 leading-relaxed mb-6">
                        Mobile applications are no longer optional — they are a core driver of
                        user engagement, retention, and digital growth. One of the most critical
                        technical decisions businesses face is choosing between{" "}
                        <span className="font-semibold text-primary bg-primary/10 px-1 rounded">native</span> and{" "}
                        <span className="font-semibold text-primary bg-primary/10 px-1 rounded">cross-platform</span> development.
                    </p>

                    <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-4 mt-12 text-foreground">
                        Native App Development
                    </h2>
                    <p className="text-lg md:text-xl text-foreground/85 leading-relaxed mb-6">
                        Native apps are built specifically for a single platform (iOS or Android),
                        delivering superior performance, tighter security, and seamless access to
                        device-level features such as cameras, sensors, and biometric
                        authentication.
                    </p>

                    <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-4 mt-12 text-foreground">
                        Cross-Platform Development
                    </h2>
                    <p className="text-lg md:text-xl text-foreground/85 leading-relaxed mb-6">
                        Cross-platform frameworks like{" "}
                        <span className="font-semibold text-primary">React Native</span> and{" "}
                        <span className="font-semibold text-primary">Flutter</span> allow teams to develop applications using a
                        shared codebase. This approach significantly reduces development cost,
                        accelerates delivery, and simplifies long-term maintenance.
                    </p>

                    <div className="not-prose my-20 grid gap-8 md:grid-cols-3">
                        {[
                            {
                                icon: Smartphone,
                                title: "Performance",
                                desc: "Native apps deliver the fastest load times and smoothest UX.",
                            },
                            {
                                icon: Layers,
                                title: "Development Speed",
                                desc: "Cross-platform development shortens build cycles dramatically.",
                            },
                            {
                                icon: Code,
                                title: "Code Reusability",
                                desc: "Reuse logic across platforms for efficiency and consistency.",
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
                        Which Approach Is Right for You?
                    </h2>
                    <p className="text-lg md:text-xl text-foreground/85 leading-relaxed mb-6">
                        The right choice depends on your business goals, timeline, and performance
                        expectations. Mission-critical, performance-heavy apps benefit from native
                        development, while startups and MVPs often thrive with cross-platform
                        solutions.
                    </p>


                    {/* CTA */}
                    <div className="not-prose mt-24 text-center">
                        <Link
                            href="/contact"
                            className="
        inline-flex items-center gap-3 rounded-2xl
        bg-gradient-to-r from-primary to-blue-500
        px-12 py-6 text-lg font-semibold text-white
        shadow-2xl transition hover:scale-105
      "
                        >
                            Build the Right Mobile App <ArrowRight size={22} />
                        </Link>
                    </div>
                </article>

            </section>
        </main>
    );
}
