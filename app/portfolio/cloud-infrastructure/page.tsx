"use client";

import {
    ArrowRight,
    CheckCircle,
    Clock,
    Cloud,
    Server,
    ShieldCheck,
    Zap,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
export default function CloudMigrationCaseStudy() {
    return (
        <>
            <main className="bg-background text-foreground">
                {/* Hero Section */}
                <section className="relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-accent/10 to-background" />
                    <div className="relative max-w-7xl mx-auto px-6 py-24 grid lg:grid-cols-2 gap-14 items-center">
                        <div>
                            <span className="inline-block mb-4 px-4 py-1 text-sm rounded-full bg-primary/10 text-primary font-medium">
                                Portfolio Case Study · Cloud Infrastructure
                            </span>
                            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-6">
                                Cloud Migration & Modernization
                            </h1>
                            <p className="text-lg text-foreground/70 mb-8">
                                Seamlessly moving on-premises infrastructure to the cloud, ensuring high
                                availability, scalability, and security — all with zero downtime and
                                optimized costs.
                            </p>
                            <div className="flex flex-wrap gap-4">
                                <Link
                                    href="/contact"
                                    className="inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-3 text-white font-semibold hover:bg-primary/90 transition"
                                >
                                    Start Cloud Migration <ArrowRight size={18} />
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
                                src="/cloud-infrastructure.png"
                                alt="Cloud Migration Architecture"
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
                        <p className="text-foreground/70">Enterprise IT & Cloud</p>
                    </div>
                    <div className="p-8 rounded-2xl bg-card border border-border">
                        <h3 className="text-xl font-bold mb-3">Technology Stack</h3>
                        <p className="text-foreground/70">AWS, Docker, Kubernetes, Terraform</p>
                    </div>
                    <div className="p-8 rounded-2xl bg-card border border-border">
                        <h3 className="text-xl font-bold mb-3">Deployment Type</h3>
                        <p className="text-foreground/70">Cloud-native, Highly Available</p>
                    </div>
                </section>

                {/* Problem & Solution */}
                <section className="bg-muted/40">
                    <div className="max-w-7xl mx-auto px-6 py-24 grid lg:grid-cols-2 gap-16">
                        <div>
                            <h2 className="text-3xl font-bold mb-6">The Problem</h2>
                            <p className="text-foreground/70 leading-relaxed mb-6">
                                The client’s on-premises systems were difficult to scale, maintain, and monitor,
                                resulting in high operational costs, frequent downtime, and limited agility.
                            </p>
                            <ul className="space-y-4">
                                {[
                                    "Complex and expensive infrastructure maintenance",
                                    "Downtime during peak usage",
                                    "Limited scalability for business growth",
                                    "Inefficient resource utilization",
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
                                We migrated the entire infrastructure to AWS, leveraging Docker containers,
                                Kubernetes orchestration, and Terraform for infrastructure as code, achieving
                                zero downtime and optimal performance.
                            </p>
                            <ul className="space-y-4">
                                {[
                                    "Automated containerized deployment",
                                    "Scalable and resilient cloud architecture",
                                    "Zero downtime migration strategy",
                                    "Infrastructure as code with Terraform",
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
                    <h2 className="text-3xl font-bold text-center mb-14">Security, Compliance & Reliability</h2>
                    <div className="grid md:grid-cols-3 gap-10">
                        <div className="p-8 rounded-2xl bg-card border border-border text-center">
                            <ShieldCheck className="mx-auto mb-4 text-primary" size={36} />
                            <h3 className="text-xl font-bold mb-2">Data Security</h3>
                            <p className="text-foreground/70">
                                End-to-end encryption and IAM policies ensured strict access control and
                                protection of critical data.
                            </p>
                        </div>
                        <div className="p-8 rounded-2xl bg-card border border-border text-center">
                            <Zap className="mx-auto mb-4 text-primary" size={36} />
                            <h3 className="text-xl font-bold mb-2">High Availability</h3>
                            <p className="text-foreground/70">
                                Cloud-native architecture ensures zero downtime and seamless scaling
                                during peak load.
                            </p>
                        </div>
                        <div className="p-8 rounded-2xl bg-card border border-border text-center">
                            <Server className="mx-auto mb-4 text-primary" size={36} />
                            <h3 className="text-xl font-bold mb-2">Simplified Management</h3>
                            <p className="text-foreground/70">
                                Monitoring, automated deployments, and IaC made ongoing management efficient
                                and predictable.
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
                                <h3 className="text-xl font-bold mb-2">100% Uptime</h3>
                                <p className="text-foreground/70">
                                    Achieved uninterrupted operations during migration and subsequent scaling.
                                </p>
                            </div>
                            <div className="p-8 rounded-2xl bg-card border border-border text-center">
                                <Cloud className="mx-auto mb-4 text-primary" size={36} />
                                <h3 className="text-xl font-bold mb-2">Scalable Cloud Architecture</h3>
                                <p className="text-foreground/70">
                                    On-demand resource scaling supports business growth without manual intervention.
                                </p>
                            </div>
                            <div className="p-8 rounded-2xl bg-card border border-border text-center">
                                <ShieldCheck className="mx-auto mb-4 text-primary" size={36} />
                                <h3 className="text-xl font-bold mb-2">Cost Efficiency</h3>
                                <p className="text-foreground/70">
                                    Optimized cloud usage reduced operational and maintenance costs significantly.
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
                            Ready to Move Your Infrastructure to the Cloud?
                        </h2>
                        <p className="text-lg text-foreground/70 mb-10">
                            We help organizations migrate to the cloud securely, efficiently, and with zero downtime.
                        </p>
                        <Link
                            href="/contact"
                            className="inline-flex items-center gap-2 rounded-xl bg-primary px-8 py-4 text-white font-semibold hover:bg-primary/90 transition"
                        >
                            Talk to Our Cloud Experts <ArrowRight size={20} />
                        </Link>
                    </div>
                </section>
            </main>
        </>
    );
}