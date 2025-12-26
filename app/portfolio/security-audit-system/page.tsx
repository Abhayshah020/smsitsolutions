"use client";

import {
    ArrowRight,
    CheckCircle,
    Shield,
    ShieldCheck,
    Zap,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
export default function SecurityAuditCaseStudy() {
    return (
        <>
            <main className="bg-background text-foreground">
                {/* Hero Section */}
                <section className="relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-accent/10 to-background" />
                    <div className="relative max-w-7xl mx-auto px-6 py-24 grid lg:grid-cols-2 gap-14 items-center">
                        <div>
                            <span className="inline-block mb-4 px-4 py-1 text-sm rounded-full bg-primary/10 text-primary font-medium">
                                Portfolio Case Study · Security & Compliance
                            </span>
                            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-6">
                                Security Audit System
                            </h1>
                            <p className="text-lg text-foreground/70 mb-8">
                                Comprehensive security auditing platform leveraging automation, AI, and industry best practices
                                to ensure enterprise systems are secure, compliant, and resilient.
                            </p>
                            <div className="flex flex-wrap gap-4">
                                <Link
                                    href="/contact"
                                    className="inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-3 text-white font-semibold hover:bg-primary/90 transition"
                                >
                                    Schedule Security Assessment <ArrowRight size={18} />
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
                                src="/security-audit-system.jpg"
                                alt="Security Audit System UI"
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
                        <p className="text-foreground/70">Enterprise Security & Compliance</p>
                    </div>
                    <div className="p-8 rounded-2xl bg-card border border-border">
                        <h3 className="text-xl font-bold mb-3">Technology Stack</h3>
                        <p className="text-foreground/70">Python, OWASP, Burp Suite, AI/ML</p>
                    </div>
                    <div className="p-8 rounded-2xl bg-card border border-border">
                        <h3 className="text-xl font-bold mb-3">Deployment Type</h3>
                        <p className="text-foreground/70">On-Premises & Cloud Hybrid</p>
                    </div>
                </section>

                {/* Problem & Solution */}
                <section className="bg-muted/40">
                    <div className="max-w-7xl mx-auto px-6 py-24 grid lg:grid-cols-2 gap-16">
                        <div>
                            <h2 className="text-3xl font-bold mb-6">The Problem</h2>
                            <p className="text-foreground/70 leading-relaxed mb-6">
                                The client required a thorough security assessment across multiple systems, applications,
                                and processes, aiming to uncover vulnerabilities, ensure regulatory compliance, and
                                prevent potential breaches.
                            </p>
                            <ul className="space-y-4">
                                {[
                                    "Dispersed security risks across apps and infrastructure",
                                    "Manual security assessment was time-consuming",
                                    "Compliance gaps with industry standards",
                                    "Limited visibility into potential vulnerabilities",
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
                                Implemented an automated security audit system combining Python scripts, AI-driven vulnerability detection,
                                and industry tools like OWASP and Burp Suite to continuously assess, report, and ensure compliance.
                            </p>
                            <ul className="space-y-4">
                                {[
                                    "Automated scanning and reporting",
                                    "AI-assisted risk prioritization",
                                    "Continuous compliance monitoring",
                                    "Remediation guidance and tracking",
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

                {/* Security & Impact */}
                <section className="max-w-7xl mx-auto px-6 py-24">
                    <h2 className="text-3xl font-bold text-center mb-14">Security, Compliance & Results</h2>
                    <div className="grid md:grid-cols-3 gap-10">
                        <div className="p-8 rounded-2xl bg-card border border-border text-center">
                            <Shield className="mx-auto mb-4 text-primary" size={36} />
                            <h3 className="text-xl font-bold mb-2">Enterprise Security</h3>
                            <p className="text-foreground/70">
                                Comprehensive assessment across all assets, applications, and infrastructure.
                            </p>
                        </div>
                        <div className="p-8 rounded-2xl bg-card border border-border text-center">
                            <ShieldCheck className="mx-auto mb-4 text-primary" size={36} />
                            <h3 className="text-xl font-bold mb-2">Compliance Assurance</h3>
                            <p className="text-foreground/70">
                                Meets industry security standards and regulatory requirements without manual overhead.
                            </p>
                        </div>
                        <div className="p-8 rounded-2xl bg-card border border-border text-center">
                            <Zap className="mx-auto mb-4 text-primary" size={36} />
                            <h3 className="text-xl font-bold mb-2">Efficiency & Automation</h3>
                            <p className="text-foreground/70">
                                Automated and continuous security checks save time and proactively reduce risk exposure.
                            </p>
                        </div>
                    </div>
                </section>

                {/* CTA */}
                <section className="relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-accent/20 to-background" />
                    <div className="relative max-w-4xl mx-auto px-6 py-24 text-center">
                        <h2 className="text-3xl md:text-4xl font-extrabold mb-6">
                            Want to Strengthen Your Security Posture?
                        </h2>
                        <p className="text-lg text-foreground/70 mb-10">
                            Schedule a security audit with our team to identify vulnerabilities, ensure compliance, and protect your critical systems.
                        </p>
                        <Link
                            href="/contact"
                            className="inline-flex items-center gap-2 rounded-xl bg-primary px-8 py-4 text-white font-semibold hover:bg-primary/90 transition"
                        >
                            Book Security Assessment <ArrowRight size={20} />
                        </Link>
                    </div>
                </section>
            </main>
        </>
    );
}
