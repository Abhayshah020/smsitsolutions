"use client";

import {
    ArrowRight,
    CheckCircle,
    Server,
    Users,
    Zap,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
export default function EnterpriseCRMCaseStudy() {
    return (
        <>
            <main className="bg-background text-foreground">
                {/* Hero Section */}
                <section className="relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-accent/10 to-background" />
                    <div className="relative max-w-7xl mx-auto px-6 py-24 grid lg:grid-cols-2 gap-14 items-center">
                        <div>
                            <span className="inline-block mb-4 px-4 py-1 text-sm rounded-full bg-primary/10 text-primary font-medium">
                                Portfolio Case Study · CRM & Software
                            </span>
                            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-6">
                                Enterprise CRM Solution
                            </h1>
                            <p className="text-lg text-foreground/70 mb-8">
                                Transforming manual customer management into automated, intelligent workflows
                                that enhance sales efficiency, customer engagement, and operational visibility.
                            </p>
                            <div className="flex flex-wrap gap-4">
                                <Link
                                    href="/contact"
                                    className="inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-3 text-white font-semibold hover:bg-primary/90 transition"
                                >
                                    Request CRM Demo <ArrowRight size={18} />
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
                                src="/crm-enterprise-system.jpg"
                                alt="Enterprise CRM Dashboard"
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
                        <p className="text-foreground/70">Enterprise & Customer Management</p>
                    </div>
                    <div className="p-8 rounded-2xl bg-card border border-border">
                        <h3 className="text-xl font-bold mb-3">Technology Stack</h3>
                        <p className="text-foreground/70">Angular, .NET, SQL Server, Azure</p>
                    </div>
                    <div className="p-8 rounded-2xl bg-card border border-border">
                        <h3 className="text-xl font-bold mb-3">Deployment Type</h3>
                        <p className="text-foreground/70">Cloud-based Enterprise System</p>
                    </div>
                </section>

                {/* Problem & Solution */}
                <section className="bg-muted/40">
                    <div className="max-w-7xl mx-auto px-6 py-24 grid lg:grid-cols-2 gap-16">
                        <div>
                            <h2 className="text-3xl font-bold mb-6">The Problem</h2>
                            <p className="text-foreground/70 leading-relaxed mb-6">
                                The client struggled with manual customer management, scattered data,
                                and inefficient sales tracking, resulting in missed opportunities
                                and poor customer experience.
                            </p>
                            <ul className="space-y-4">
                                {[
                                    "Manual data entry and tracking",
                                    "No unified customer view",
                                    "Time-consuming reporting",
                                    "Limited automation for follow-ups",
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
                                Developed a custom CRM system that automates customer management,
                                tracks interactions, generates analytics, and enhances sales and marketing
                                workflows, all deployed securely on Azure cloud.
                            </p>
                            <ul className="space-y-4">
                                {[
                                    "Automated customer workflow",
                                    "Centralized customer database",
                                    "Real-time analytics & reporting",
                                    "Integration with sales & marketing tools",
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

                {/* Impact */}
                <section className="max-w-7xl mx-auto px-6 py-24">
                    <h2 className="text-3xl font-bold text-center mb-14">Results & Business Impact</h2>
                    <div className="grid md:grid-cols-3 gap-10">
                        <div className="p-8 rounded-2xl bg-card border border-border text-center">
                            <Users className="mx-auto mb-4 text-primary" size={36} />
                            <h3 className="text-xl font-bold mb-2">Enhanced Customer Experience</h3>
                            <p className="text-foreground/70">
                                Unified customer data and automated workflows improved satisfaction and retention.
                            </p>
                        </div>
                        <div className="p-8 rounded-2xl bg-card border border-border text-center">
                            <Zap className="mx-auto mb-4 text-primary" size={36} />
                            <h3 className="text-xl font-bold mb-2">Operational Efficiency</h3>
                            <p className="text-foreground/70">
                                Reduced manual work and accelerated reporting with automation.
                            </p>
                        </div>
                        <div className="p-8 rounded-2xl bg-card border border-border text-center">
                            <Server className="mx-auto mb-4 text-primary" size={36} />
                            <h3 className="text-xl font-bold mb-2">Scalable & Secure System</h3>
                            <p className="text-foreground/70">
                                Cloud deployment on Azure ensures scalability, reliability, and enterprise-grade security.
                            </p>
                        </div>
                    </div>
                </section>

                {/* CTA */}
                <section className="relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-accent/20 to-background" />
                    <div className="relative max-w-4xl mx-auto px-6 py-24 text-center">
                        <h2 className="text-3xl md:text-4xl font-extrabold mb-6">
                            Ready to Transform Your Customer Management?
                        </h2>
                        <p className="text-lg text-foreground/70 mb-10">
                            Let us design and implement a CRM that streamlines operations, improves engagement, and drives revenue.
                        </p>
                        <Link
                            href="/contact"
                            className="inline-flex items-center gap-2 rounded-xl bg-primary px-8 py-4 text-white font-semibold hover:bg-primary/90 transition"
                        >
                            Request CRM Demo <ArrowRight size={20} />
                        </Link>
                    </div>
                </section>
            </main>
        </>
    );
}
