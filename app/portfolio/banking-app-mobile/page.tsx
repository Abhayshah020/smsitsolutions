"use client";

import {
    ArrowRight,
    CheckCircle,
    Clock,
    Lock,
    ShieldCheck,
    Smartphone,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
export default function MobileBankingCaseStudy() {
    return (
        <>
            <main className="bg-background text-foreground">
                {/* Hero Section */}
                <section className="relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-accent/10 to-background" />
                    <div className="relative max-w-7xl mx-auto px-6 py-24 grid lg:grid-cols-2 gap-14 items-center">
                        <div>
                            <span className="inline-block mb-4 px-4 py-1 text-sm rounded-full bg-primary/10 text-primary font-medium">
                                Portfolio Case Study · Mobile Application
                            </span>
                            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-6">
                                Secure Mobile Banking Application
                            </h1>
                            <p className="text-lg text-foreground/70 mb-8">
                                A mobile-first banking solution designed for speed, trust, and security — enabling
                                users to manage finances, make payments, and monitor transactions safely from
                                anywhere.
                            </p>
                            <div className="flex flex-wrap gap-4">
                                <Link
                                    href="/contact"
                                    className="inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-3 text-white font-semibold hover:bg-primary/90 transition"
                                >
                                    Build Secure Banking App <ArrowRight size={18} />
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
                            <div className="absolute -top-12 -right-12 w-80 h-80 bg-primary/20 rounded-full blur-3xl" />
                            <Image
                                src="/banking-app-mobile.jpg"
                                alt="Mobile Banking App UI"
                                width={420}
                                height={760}
                                className="relative mx-auto rounded-3xl shadow-2xl border border-border"
                            />
                        </div>
                    </div>
                </section>

                {/* Overview */}
                <section className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-3 gap-10">
                    <div className="p-8 rounded-2xl bg-card border border-border">
                        <h3 className="text-xl font-bold mb-3">Industry</h3>
                        <p className="text-foreground/70">Digital Banking & FinTech</p>
                    </div>
                    <div className="p-8 rounded-2xl bg-card border border-border">
                        <h3 className="text-xl font-bold mb-3">Technology Stack</h3>
                        <p className="text-foreground/70">React Native, Firebase, Stripe</p>
                    </div>
                    <div className="p-8 rounded-2xl bg-card border border-border">
                        <h3 className="text-xl font-bold mb-3">Platform</h3>
                        <p className="text-foreground/70">iOS & Android (Single Codebase)</p>
                    </div>
                </section>

                {/* Problem & Solution */}
                <section className="bg-muted/40">
                    <div className="max-w-7xl mx-auto px-6 py-24 grid lg:grid-cols-2 gap-16">
                        <div>
                            <h2 className="text-3xl font-bold mb-6">The Problem</h2>
                            <p className="text-foreground/70 leading-relaxed mb-6">
                                The client required a mobile-first banking platform that could guarantee strong
                                security, regulatory readiness, and seamless user experience while supporting
                                real-time transactions and payments.
                            </p>
                            <ul className="space-y-4">
                                {[
                                    "High security and data privacy requirements",
                                    "Need for fast and reliable transactions",
                                    "Cross-platform support with consistent UX",
                                    "Zero tolerance for data leakage",
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
                                We developed a React Native-based mobile banking application with end-to-end encryption,
                                biometric authentication, and secure payment processing — ensuring trust at every
                                interaction.
                            </p>
                            <ul className="space-y-4">
                                {[
                                    "End-to-end encrypted data transmission",
                                    "Biometric authentication (Face ID / Fingerprint)",
                                    "Secure payment gateway integration",
                                    "Scalable backend with real-time monitoring",
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

                {/* Security & Compliance */}
                <section className="max-w-7xl mx-auto px-6 py-24">
                    <h2 className="text-3xl font-bold text-center mb-14">
                        Security, Privacy & Trust
                    </h2>
                    <div className="grid md:grid-cols-3 gap-10">
                        <div className="p-8 rounded-2xl bg-card border border-border text-center">
                            <ShieldCheck className="mx-auto mb-4 text-primary" size={36} />
                            <h3 className="text-xl font-bold mb-2">End-to-End Encryption</h3>
                            <p className="text-foreground/70">
                                All user data and transactions are encrypted in transit and at rest, ensuring maximum
                                protection.
                            </p>
                        </div>
                        <div className="p-8 rounded-2xl bg-card border border-border text-center">
                            <Lock className="mx-auto mb-4 text-primary" size={36} />
                            <h3 className="text-xl font-bold mb-2">No Third-Party Data Sharing</h3>
                            <p className="text-foreground/70">
                                User data remains fully owned by the client with strict access controls and zero
                                unauthorized sharing.
                            </p>
                        </div>
                        <div className="p-8 rounded-2xl bg-card border border-border text-center">
                            <Smartphone className="mx-auto mb-4 text-primary" size={36} />
                            <h3 className="text-xl font-bold mb-2">Mobile-First UX</h3>
                            <p className="text-foreground/70">
                                Designed for simplicity and speed, reducing friction in everyday banking tasks.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Impact */}
                <section className="bg-muted/40">
                    <div className="max-w-7xl mx-auto px-6 py-24">
                        <h2 className="text-3xl font-bold text-center mb-14">Results & Impact</h2>
                        <div className="grid md:grid-cols-3 gap-10">
                            <div className="p-8 rounded-2xl bg-card border border-border text-center">
                                <Clock className="mx-auto mb-4 text-primary" size={36} />
                                <h3 className="text-xl font-bold mb-2">40% Faster Transactions</h3>
                                <p className="text-foreground/70">
                                    Optimized APIs and lightweight mobile architecture reduced transaction time
                                    significantly.
                                </p>
                            </div>
                            <div className="p-8 rounded-2xl bg-card border border-border text-center">
                                <ShieldCheck className="mx-auto mb-4 text-primary" size={36} />
                                <h3 className="text-xl font-bold mb-2">Bank-Grade Security</h3>
                                <p className="text-foreground/70">
                                    Fully aligned with financial security best practices and compliance standards.
                                </p>
                            </div>
                            <div className="p-8 rounded-2xl bg-card border border-border text-center">
                                <Smartphone className="mx-auto mb-4 text-primary" size={36} />
                                <h3 className="text-xl font-bold mb-2">High User Adoption</h3>
                                <p className="text-foreground/70">
                                    Intuitive UI resulted in faster onboarding and improved customer engagement.
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
                            Planning a Secure FinTech or Banking App?
                        </h2>
                        <p className="text-lg text-foreground/70 mb-10">
                            We specialize in building secure, compliant, and scalable mobile banking solutions
                            tailored to modern financial institutions.
                        </p>
                        <Link
                            href="/contact"
                            className="inline-flex items-center gap-2 rounded-xl bg-primary px-8 py-4 text-white font-semibold hover:bg-primary/90 transition"
                        >
                            Talk to Our Experts <ArrowRight size={20} />
                        </Link>
                    </div>
                </section>
            </main>
        </>

    );
}
