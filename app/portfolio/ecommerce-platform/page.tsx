"use client";

import { ArrowRight, CheckCircle, Clock, ShieldCheck, TrendingUp } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function EcommerceCaseStudy() {
    return (
        <>
            <main className="bg-background text-foreground">
                {/* Hero Section */}
                <section className="relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-accent/10 to-background" />
                    <div className="relative max-w-7xl mx-auto px-6 py-24 grid lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <span className="inline-block mb-4 px-4 py-1 text-sm rounded-full bg-primary/10 text-primary font-medium">
                                Portfolio Case Study · Web Platform
                            </span>
                            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-6">
                                Scalable E-Commerce Platform
                            </h1>
                            <p className="text-lg text-foreground/70 mb-8">
                                A modern, cloud-ready e-commerce solution designed to handle massive traffic spikes,
                                ensure data security, and deliver seamless shopping experiences across devices.
                            </p>
                            <div className="flex flex-wrap gap-4">
                                <Link
                                    href="/contact"
                                    className="inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-3 text-white font-semibold hover:bg-primary/90 transition"
                                >
                                    Start Your Project <ArrowRight size={18} />
                                </Link>
                                <Link
                                    href="/portfolio"
                                    className="inline-flex items-center gap-2 rounded-xl border border-border px-6 py-3 font-semibold hover:border-primary/50 transition"
                                >
                                    View More Work
                                </Link>
                            </div>
                        </div>
                        <div className="relative">
                            <div className="absolute -top-10 -left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl" />
                            <Image
                                src="/ecommerce-platform-concept.png"
                                alt="E-Commerce Platform Concept"
                                width={600}
                                height={400}
                                className="relative rounded-2xl shadow-2xl border border-border"
                            />
                        </div>
                    </div>
                </section>

                {/* Overview */}
                <section className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-3 gap-10">
                    <div className="p-8 rounded-2xl bg-card border border-border">
                        <h3 className="text-xl font-bold mb-3">Industry</h3>
                        <p className="text-foreground/70">Online Retail & E-Commerce</p>
                    </div>
                    <div className="p-8 rounded-2xl bg-card border border-border">
                        <h3 className="text-xl font-bold mb-3">Technology Stack</h3>
                        <p className="text-foreground/70">React, Node.js, MongoDB, AWS</p>
                    </div>
                    <div className="p-8 rounded-2xl bg-card border border-border">
                        <h3 className="text-xl font-bold mb-3">Project Type</h3>
                        <p className="text-foreground/70">High-Scalability Web Platform</p>
                    </div>
                </section>

                {/* Problem & Solution */}
                <section className="bg-muted/40">
                    <div className="max-w-7xl mx-auto px-6 py-24 grid lg:grid-cols-2 gap-16">
                        <div>
                            <h2 className="text-3xl font-bold mb-6">The Challenge</h2>
                            <p className="text-foreground/70 leading-relaxed mb-6">
                                The client was operating on a legacy monolithic system that frequently failed during
                                peak sales events. Slow page loads, downtime, and limited scalability resulted in lost
                                revenue and poor customer trust.
                            </p>
                            <ul className="space-y-4">
                                {[
                                    "System crashes during high traffic",
                                    "Poor mobile performance",
                                    "Limited scalability and high maintenance cost",
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
                                We engineered a microservices-based architecture deployed on AWS, enabling horizontal
                                scaling, fault tolerance, and consistent performance even during extreme traffic spikes.
                            </p>
                            <ul className="space-y-4">
                                {[
                                    "Cloud-native microservices architecture",
                                    "Auto-scaling with AWS",
                                    "Optimized frontend with React",
                                    "Secure APIs and role-based access",
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
                    <h2 className="text-3xl font-bold text-center mb-14">Impact & Results</h2>
                    <div className="grid md:grid-cols-3 gap-10">
                        <div className="p-8 rounded-2xl bg-card border border-border text-center">
                            <TrendingUp className="mx-auto mb-4 text-primary" size={36} />
                            <h3 className="text-xl font-bold mb-2">3× Traffic Handling</h3>
                            <p className="text-foreground/70">
                                Successfully handled peak traffic without downtime during major sales events.
                            </p>
                        </div>
                        <div className="p-8 rounded-2xl bg-card border border-border text-center">
                            <Clock className="mx-auto mb-4 text-primary" size={36} />
                            <h3 className="text-xl font-bold mb-2">60% Faster Load Time</h3>
                            <p className="text-foreground/70">
                                Optimized frontend and APIs significantly reduced page load times.
                            </p>
                        </div>
                        <div className="p-8 rounded-2xl bg-card border border-border text-center">
                            <ShieldCheck className="mx-auto mb-4 text-primary" size={36} />
                            <h3 className="text-xl font-bold mb-2">Enterprise-Grade Security</h3>
                            <p className="text-foreground/70">
                                Strong data protection with no third-party data sharing and full compliance readiness.
                            </p>
                        </div>
                    </div>
                </section>

                {/* CTA */}
                <section className="relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-accent/20 to-background" />
                    <div className="relative max-w-4xl mx-auto px-6 py-24 text-center">
                        <h2 className="text-3xl md:text-4xl font-extrabold mb-6">
                            Want a Scalable Platform Like This?
                        </h2>
                        <p className="text-lg text-foreground/70 mb-10">
                            We design and build secure, high-performance systems tailored to your business goals.
                            Let’s turn your idea into a powerful digital product.
                        </p>
                        <Link
                            href="/contact"
                            className="inline-flex items-center gap-2 rounded-xl bg-primary px-8 py-4 text-white font-semibold hover:bg-primary/90 transition"
                        >
                            Contact Us <ArrowRight size={20} />
                        </Link>
                    </div>
                </section>
            </main>
        </>

    );
}
