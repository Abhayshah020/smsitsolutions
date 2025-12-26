"use client";

import {
    ArrowRight,
    BarChart3,
    CheckCircle,
    Clock,
    Database,
    Layers,
    ShieldCheck,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
export default function AnalyticsDashboardCaseStudy() {
    return (
        <>
            <main className="bg-background text-foreground">
                {/* Hero Section */}
                <section className="relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-accent/10 to-background" />
                    <div className="relative max-w-7xl mx-auto px-6 py-24 grid lg:grid-cols-2 gap-14 items-center">
                        <div>
                            <span className="inline-block mb-4 px-4 py-1 text-sm rounded-full bg-primary/10 text-primary font-medium">
                                Portfolio Case Study · Enterprise Software
                            </span>
                            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-6">
                                Unified Analytics Dashboard
                            </h1>
                            <p className="text-lg text-foreground/70 mb-8">
                                A centralized analytics platform that transforms scattered data sources into
                                real-time, actionable insights — empowering leadership to make faster and smarter
                                decisions.
                            </p>
                            <div className="flex flex-wrap gap-4">
                                <Link
                                    href="/contact"
                                    className="inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-3 text-white font-semibold hover:bg-primary/90 transition"
                                >
                                    Build Analytics Platform <ArrowRight size={18} />
                                </Link>
                                <Link
                                    href="/portfolio"
                                    className="inline-flex items-center gap-2 rounded-xl border border-border px-6 py-3 font-semibold hover:border-primary/50 transition"
                                >
                                    View Portfolio
                                </Link>
                            </div>
                        </div>

                        <div className="relative">
                            <div className="absolute -top-12 -left-12 w-80 h-80 bg-primary/20 rounded-full blur-3xl" />
                            <Image
                                src="/analytics-dashboard.png"
                                alt="Analytics Dashboard UI"
                                width={640}
                                height={420}
                                className="relative rounded-2xl shadow-2xl border border-border"
                            />
                        </div>
                    </div>
                </section>

                {/* Overview */}
                <section className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-3 gap-10">
                    <div className="p-8 rounded-2xl bg-card border border-border">
                        <h3 className="text-xl font-bold mb-3">Industry</h3>
                        <p className="text-foreground/70">Enterprise Analytics & BI</p>
                    </div>
                    <div className="p-8 rounded-2xl bg-card border border-border">
                        <h3 className="text-xl font-bold mb-3">Technology Stack</h3>
                        <p className="text-foreground/70">Next.js, Python, PostgreSQL, Tableau</p>
                    </div>
                    <div className="p-8 rounded-2xl bg-card border border-border">
                        <h3 className="text-xl font-bold mb-3">Deployment Type</h3>
                        <p className="text-foreground/70">Secure Internal & Cloud Hybrid</p>
                    </div>
                </section>

                {/* Problem & Solution */}
                <section className="bg-muted/40">
                    <div className="max-w-7xl mx-auto px-6 py-24 grid lg:grid-cols-2 gap-16">
                        <div>
                            <h2 className="text-3xl font-bold mb-6">The Problem</h2>
                            <p className="text-foreground/70 leading-relaxed mb-6">
                                The organization’s data was distributed across multiple systems — spreadsheets,
                                internal tools, and databases — making reporting slow, inconsistent, and error-prone.
                                Leadership lacked real-time visibility into business performance.
                            </p>
                            <ul className="space-y-4">
                                {[
                                    "No single source of truth",
                                    "Manual reporting consuming valuable time",
                                    "Delayed decision-making",
                                    "High risk of data inconsistency",
                                ].map((item, i) => (
                                    <li key={i} className="flex items-start gap-3">
                                        <CheckCircle className="text-destructive mt-1" size={18} />
                                        <span className="text-foreground/70">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div>
                            <h2 className="text-3xl font-bold mb-6">Our Solution</h2>
                            <p className="text-foreground/70 leading-relaxed mb-6">
                                We designed and built a unified analytics dashboard that aggregates data from all
                                systems into a single, real-time interface with role-based access and interactive
                                visualizations.
                            </p>
                            <ul className="space-y-4">
                                {[
                                    "Centralized data warehouse",
                                    "Real-time dashboards and KPIs",
                                    "Interactive visualizations with Tableau",
                                    "Secure role-based access control",
                                ].map((item, i) => (
                                    <li key={i} className="flex items-start gap-3">
                                        <CheckCircle className="text-primary mt-1" size={18} />
                                        <span className="text-foreground/70">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </section>

                {/* Architecture & Data */}
                <section className="max-w-7xl mx-auto px-6 py-24">
                    <h2 className="text-3xl font-bold text-center mb-14">
                        Data Architecture & Governance
                    </h2>
                    <div className="grid md:grid-cols-3 gap-10">
                        <div className="p-8 rounded-2xl bg-card border border-border text-center">
                            <Database className="mx-auto mb-4 text-primary" size={36} />
                            <h3 className="text-xl font-bold mb-2">Unified Data Layer</h3>
                            <p className="text-foreground/70">
                                All business data is consolidated into PostgreSQL, ensuring consistency and
                                reliability.
                            </p>
                        </div>
                        <div className="p-8 rounded-2xl bg-card border border-border text-center">
                            <Layers className="mx-auto mb-4 text-primary" size={36} />
                            <h3 className="text-xl font-bold mb-2">Scalable Architecture</h3>
                            <p className="text-foreground/70">
                                Modular backend services built in Python enable easy scaling and future expansion.
                            </p>
                        </div>
                        <div className="p-8 rounded-2xl bg-card border border-border text-center">
                            <ShieldCheck className="mx-auto mb-4 text-primary" size={36} />
                            <h3 className="text-xl font-bold mb-2">Data Security & Privacy</h3>
                            <p className="text-foreground/70">
                                No third-party data sharing, strict access policies, and encrypted data pipelines.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Impact */}
                <section className="bg-muted/40">
                    <div className="max-w-7xl mx-auto px-6 py-24">
                        <h2 className="text-3xl font-bold text-center mb-14">Results & Business Impact</h2>
                        <div className="grid md:grid-cols-3 gap-10">
                            <div className="p-8 rounded-2xl bg-card border border-border text-center">
                                <Clock className="mx-auto mb-4 text-primary" size={36} />
                                <h3 className="text-xl font-bold mb-2">70% Time Saved</h3>
                                <p className="text-foreground/70">
                                    Automated reporting reduced manual data processing and analysis effort drastically.
                                </p>
                            </div>
                            <div className="p-8 rounded-2xl bg-card border border-border text-center">
                                <BarChart3 className="mx-auto mb-4 text-primary" size={36} />
                                <h3 className="text-xl font-bold mb-2">Real-Time Visibility</h3>
                                <p className="text-foreground/70">
                                    Leadership gained instant access to KPIs and trends across departments.
                                </p>
                            </div>
                            <div className="p-8 rounded-2xl bg-card border border-border text-center">
                                <ShieldCheck className="mx-auto mb-4 text-primary" size={36} />
                                <h3 className="text-xl font-bold mb-2">Governance Ready</h3>
                                <p className="text-foreground/70">
                                    Structured data access ensured audit readiness and compliance alignment.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* CTA */}
                <section className="relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-accent/20 to-background" />
                    <div className="relative max-w-4xl mx-auto px-6 py-24 text-center">
                        <h2 className="text-3xl md:text-4xl font-extrabold mb-6">
                            Need Clarity from Your Data?
                        </h2>
                        <p className="text-lg text-foreground/70 mb-10">
                            We help organizations unlock insights from complex data ecosystems through secure,
                            scalable analytics platforms.
                        </p>
                        <Link
                            href="/contact"
                            className="inline-flex items-center gap-2 rounded-xl bg-primary px-8 py-4 text-white font-semibold hover:bg-primary/90 transition"
                        >
                            Talk to Our Analytics Team <ArrowRight size={20} />
                        </Link>
                    </div>
                </section>
            </main>
        </>
    );
}
