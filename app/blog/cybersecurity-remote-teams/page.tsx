import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ShieldCheck, Lock, WifiOff } from "lucide-react";

export default function BlogCybersecurityRemoteTeams() {
    return (
        <main className="bg-background text-foreground">
            {/* Hero Section */}
            <section className="relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-accent/10 to-background" />
                <div className="relative max-w-4xl mx-auto px-6 py-24">
                    <span className="inline-block mb-4 px-4 py-1 text-sm rounded-full bg-primary/10 text-primary font-medium">
                        Security Insights · Dec 8, 2025
                    </span>
                    <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-6 tracking-tight">
                        Cybersecurity Best Practices for Remote Teams
                    </h1>
                    <p className="text-lg text-foreground/70 mb-8 leading-relaxed">
                        Essential security measures every organization must adopt to protect data, systems,
                        and employees in an increasingly remote-first work culture.
                    </p>
                    <div className="flex items-center gap-4">
                        <Image
                            src="/3.jpeg"
                            alt="Author Abhay Shah"
                            width={50}
                            height={50}
                            className="rounded-full border-2 border-primary"
                        />
                        <span className="text-foreground/70 font-medium">By Abhay Shah</span>
                    </div>
                </div>
            </section>

            {/* Blog Image */}
            <section className="max-w-4xl mx-auto px-6 mb-16">
                <Image
                    src="/cybersecurity-remote-work.png"
                    alt="Cybersecurity for Remote Teams"
                    width={960}
                    height={500}
                    className="rounded-3xl shadow-2xl border border-border"
                />
            </section>

            {/* Blog Content */}
            <section className="max-w-4xl mx-auto px-6 pb-24">
                <article className="prose prose-lg prose-primary mx-auto max-w-none text-foreground leading-relaxed">
                    <p className="mb-6 text-foreground/80 text-lg text-justify">
                        The shift to remote work has unlocked flexibility and productivity, but it has also
                        expanded the attack surface for cyber threats. Distributed teams rely on home networks,
                        personal devices, and cloud-based collaboration tools, making cybersecurity a top
                        priority for modern organizations.
                    </p>

                    <h2 className="text-3xl font-bold mt-12 mb-4">Secure Access & Identity Management</h2>
                    <p className="mb-6 text-foreground/80 text-lg">
                        Strong identity and access management is the foundation of remote security. Organizations
                        should enforce multi-factor authentication (MFA), role-based access controls, and
                        zero-trust principles to ensure only authorized users can access critical systems.
                    </p>

                    <div className="grid md:grid-cols-3 gap-6 my-12">
                        <div className="p-6 rounded-2xl bg-card border border-border text-center">
                            <ShieldCheck className="mx-auto mb-3 text-primary" size={32} />
                            <p className="font-semibold">Multi-Factor Authentication</p>
                        </div>
                        <div className="p-6 rounded-2xl bg-card border border-border text-center">
                            <Lock className="mx-auto mb-3 text-primary" size={32} />
                            <p className="font-semibold">Zero-Trust Access</p>
                        </div>
                        <div className="p-6 rounded-2xl bg-card border border-border text-center">
                            <WifiOff className="mx-auto mb-3 text-primary" size={32} />
                            <p className="font-semibold">Secure VPN Usage</p>
                        </div>
                    </div>

                    <h2 className="text-3xl font-bold mt-12 mb-4">Endpoint & Network Security</h2>
                    <p className="mb-6 text-foreground/80 text-lg">
                        Every remote device is a potential entry point for attackers. Companies must ensure
                        endpoints are protected with updated antivirus software, encrypted storage, and
                        automated patch management. Secure VPNs and encrypted connections are essential
                        when accessing corporate resources.
                    </p>

                    <h2 className="text-3xl font-bold mt-12 mb-4">Employee Awareness & Training</h2>
                    <p className="mb-6 text-foreground/80 text-lg">
                        Human error remains one of the biggest security risks. Regular cybersecurity awareness
                        training helps employees recognize phishing attempts, social engineering attacks,
                        and unsafe online behaviors before they become incidents.
                    </p>

                    <h2 className="text-3xl font-bold mt-12 mb-4">Monitoring, Response & Compliance</h2>
                    <p className="mb-6 text-foreground/80 text-lg">
                        Continuous monitoring and automated incident response enable organizations to detect
                        and contain threats early. Logging, real-time alerts, and compliance checks ensure
                        that security policies are enforced even in distributed environments.
                    </p>

                    <div className="mt-16 text-center">
                        <Link
                            href="/contact"
                            className="inline-flex items-center gap-2 rounded-xl bg-primary px-8 py-4 text-white text-lg font-semibold shadow-lg hover:bg-primary/90 transition-transform hover:scale-105"
                        >
                            Secure Your Remote Workforce <ArrowRight size={20} />
                        </Link>
                    </div>
                </article>
            </section>
        </main>
    );
}
