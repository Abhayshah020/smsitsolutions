import CallToAction from "@/components/callToAction"
import Image from "next/image"
export const metadata = {
    title: "Cybersecurity & IT Audit | Your Company Name",
    description:
        "End-to-end cybersecurity services including audits, penetration testing, compliance, and incident response.",
}

export default function CybersecurityPage() {
    return (
        <>

            <main className="px-6 md:px-16 py-20 max-w-7xl mx-auto">
                {/* Hero */}
                <section className="grid md:grid-cols-2 gap-16 items-center mb-28">
                    <div>
                        <h1 className="text-5xl font-extrabold leading-tight mb-8">
                            Cybersecurity & IT Audit <br />
                            <span className="text-primary">
                                Protecting Your Digital Assets with Confidence
                            </span>
                        </h1>

                        <p className="text-lg text-foreground/70 leading-relaxed">
                            We provide enterprise-grade cybersecurity solutions that identify,
                            assess, and eliminate security risks before they become threats.
                            Our proactive approach ensures your systems remain compliant,
                            resilient, and trustworthy.
                        </p>
                    </div>

                    <div className="relative rounded-3xl overflow-hidden shadow-xl">
                        <Image
                            src="https://images.unsplash.com/photo-1555949963-aa79dcee981c"
                            alt="Cybersecurity operations"
                            width={700}
                            height={500}
                            className="object-cover"
                        />
                    </div>
                </section>

                {/* Core Services */}
                <section className="mb-24">
                    <h2 className="text-4xl font-bold mb-10">
                        Our Cybersecurity Capabilities
                    </h2>

                    <div className="grid md:grid-cols-4 gap-8">
                        {[
                            "Security Audits",
                            "Penetration Testing",
                            "Compliance Management",
                            "Incident Response",
                        ].map((item, i) => (
                            <div
                                key={i}
                                className="p-8 rounded-2xl bg-card border border-border text-center hover:shadow-lg transition"
                            >
                                <p className="text-lg font-semibold">{item}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Who Needs This */}
                <section className="mb-24 grid md:grid-cols-2 gap-16 items-center">
                    <Image
                        src="https://images.unsplash.com/photo-1510511459019-5dda7724fd87"
                        alt="IT security team"
                        width={600}
                        height={420}
                        className="rounded-3xl shadow-xl"
                    />

                    <div>
                        <h2 className="text-4xl font-bold mb-8">
                            Who Needs Cybersecurity & IT Audits?
                        </h2>

                        <ul className="space-y-4 text-lg text-foreground/75 leading-relaxed">
                            <li>• Financial institutions & regulated industries</li>
                            <li>• SaaS & cloud-based platforms</li>
                            <li>• Healthcare & data-sensitive organizations</li>
                            <li>• Enterprises handling customer data</li>
                            <li>• Companies preparing for compliance audits</li>
                        </ul>
                    </div>
                </section>

                {/* Before / After */}
                <section className="mb-24">
                    <h2 className="text-4xl font-bold mb-10">
                        Security Posture: Before & After
                    </h2>

                    <div className="grid md:grid-cols-2 gap-12">
                        <div className="p-10 rounded-2xl bg-red-500/5 border border-red-500/20">
                            <h3 className="text-2xl font-semibold mb-4">Before</h3>
                            <p className="text-foreground/70 leading-relaxed">
                                Unknown vulnerabilities, unmonitored systems, compliance gaps,
                                delayed incident response, and high breach risk.
                            </p>
                        </div>

                        <div className="p-10 rounded-2xl bg-green-500/5 border border-green-500/20">
                            <h3 className="text-2xl font-semibold mb-4">After</h3>
                            <p className="text-foreground/70 leading-relaxed">
                                Clear risk visibility, hardened systems, compliance readiness,
                                rapid incident response, and reduced attack surface.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Security & Privacy */}
                <section className="mb-24 grid md:grid-cols-2 gap-16 items-center">
                    <div>
                        <h2 className="text-4xl font-bold mb-8">
                            Privacy, Compliance & Trust
                        </h2>

                        <p className="text-lg text-foreground/75 leading-relaxed mb-6">
                            We follow strict confidentiality policies. Your infrastructure,
                            vulnerabilities, and data remain fully private and are never shared
                            with third parties.
                        </p>

                        <ul className="space-y-3 text-foreground/70">
                            <li>• NDA-backed engagements</li>
                            <li>• Zero data sharing policy</li>
                            <li>• Compliance-ready reporting</li>
                            <li>• Secure audit documentation</li>
                            <li>• Industry best practices</li>
                        </ul>
                    </div>

                    <Image
                        src="https://images.unsplash.com/photo-1563986768609-322da13575f3"
                        alt="Security compliance"
                        width={600}
                        height={450}
                        className="rounded-3xl shadow-xl"
                    />
                </section>

                <CallToAction />
            </main>
        </>
    )
}
