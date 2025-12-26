import CallToAction from "@/components/callToAction"
import Image from "next/image"
export const metadata = {
    title: "IT Infrastructure Setup | Your Company Name",
    description:
        "End-to-end IT infrastructure setup including network design, server deployment, data centers, and backup solutions.",
}

export default function ITInfrastructurePage() {
    return (
        <>
            <main className="px-6 md:px-16 py-20 max-w-7xl mx-auto">
                {/* Hero */}
                <section className="grid md:grid-cols-2 gap-16 items-center mb-28">
                    <div>
                        <h1 className="text-5xl font-extrabold leading-tight mb-8">
                            IT Infrastructure Setup <br />
                            <span className="text-primary">
                                Strong Foundations for Reliable Operations
                            </span>
                        </h1>

                        <p className="text-lg text-foreground/70 leading-relaxed">
                            We design and implement robust IT infrastructure that ensures
                            reliability, scalability, and security. From startups to enterprises,
                            our infrastructure solutions support uninterrupted business growth.
                        </p>
                    </div>

                    <div className="relative rounded-3xl overflow-hidden shadow-xl">
                        <Image
                            src="https://images.unsplash.com/photo-1581090700227-1e37b190418e"
                            alt="IT infrastructure setup"
                            width={700}
                            height={500}
                            className="object-cover"
                        />
                    </div>
                </section>

                {/* Infrastructure Services */}
                <section className="mb-24">
                    <h2 className="text-4xl font-bold mb-10">
                        Infrastructure Services We Provide
                    </h2>

                    <div className="grid md:grid-cols-4 gap-8">
                        {[
                            "Network Design",
                            "Server Setup",
                            "Data Center Solutions",
                            "Backup & Recovery",
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
                        src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31"
                        alt="Server room infrastructure"
                        width={600}
                        height={420}
                        className="rounded-3xl shadow-xl"
                    />

                    <div>
                        <h2 className="text-4xl font-bold mb-8">
                            Who Needs Professional IT Infrastructure?
                        </h2>

                        <ul className="space-y-4 text-lg text-foreground/75 leading-relaxed">
                            <li>• Growing businesses & enterprises</li>
                            <li>• Data-driven organizations</li>
                            <li>• Companies with high uptime requirements</li>
                            <li>• Businesses migrating from ad-hoc setups</li>
                            <li>• Organizations requiring disaster recovery</li>
                        </ul>
                    </div>
                </section>

                {/* Before / After */}
                <section className="mb-24">
                    <h2 className="text-4xl font-bold mb-10">
                        Operational Stability: Before & After
                    </h2>

                    <div className="grid md:grid-cols-2 gap-12">
                        <div className="p-10 rounded-2xl bg-red-500/5 border border-red-500/20">
                            <h3 className="text-2xl font-semibold mb-4">Before</h3>
                            <p className="text-foreground/70 leading-relaxed">
                                Unplanned downtime, poor scalability, manual backups, hardware
                                failures, and limited monitoring.
                            </p>
                        </div>

                        <div className="p-10 rounded-2xl bg-green-500/5 border border-green-500/20">
                            <h3 className="text-2xl font-semibold mb-4">After</h3>
                            <p className="text-foreground/70 leading-relaxed">
                                Stable systems, automated backups, disaster recovery readiness,
                                proactive monitoring, and optimized performance.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Security & Reliability */}
                <section className="mb-24 grid md:grid-cols-2 gap-16 items-center">
                    <div>
                        <h2 className="text-4xl font-bold mb-8">
                            Security, Reliability & Control
                        </h2>

                        <p className="text-lg text-foreground/75 leading-relaxed mb-6">
                            Our infrastructure solutions are designed with security and
                            reliability at the core. You maintain full control over your data
                            and systems at all times.
                        </p>

                        <ul className="space-y-3 text-foreground/70">
                            <li>• Secure network segmentation</li>
                            <li>• Access-controlled server environments</li>
                            <li>• Regular backups & disaster recovery</li>
                            <li>• No third-party data sharing</li>
                            <li>• Continuous monitoring</li>
                        </ul>
                    </div>

                    <Image
                        src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b"
                        alt="Secure infrastructure"
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
