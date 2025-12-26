import Image from "next/image"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import CallToAction from "@/components/callToAction"

export const metadata = {
    title: "Annual Maintenance Contracts (AMC) | Your Company Name",
    description:
        "Reliable annual maintenance and support services ensuring system stability, security, and performance.",
}

export default function AMCPage() {
    return (
        <>
            <Header />
            <main className="px-6 md:px-16 py-20 max-w-7xl mx-auto">
                {/* Hero */}
                <section className="grid md:grid-cols-2 gap-16 items-center mb-28">
                    <div>
                        <h1 className="text-5xl font-extrabold leading-tight mb-8">
                            Annual Maintenance Contracts (AMC) <br />
                            <span className="text-primary">
                                Reliable Support. Predictable Costs. Peace of Mind.
                            </span>
                        </h1>

                        <p className="text-lg text-foreground/70 leading-relaxed">
                            Our AMC services ensure your systems run smoothly, securely, and
                            efficiently throughout the year. We proactively monitor, maintain,
                            and support your infrastructure so you can focus on your core
                            business.
                        </p>
                    </div>

                    <div className="relative rounded-3xl overflow-hidden shadow-xl">
                        <Image
                            src="https://images.unsplash.com/photo-1581092160562-40aa08e78837"
                            alt="IT maintenance support"
                            width={700}
                            height={500}
                            className="object-cover"
                        />
                    </div>
                </section>

                {/* AMC Services */}
                <section className="mb-24">
                    <h2 className="text-4xl font-bold mb-10">
                        What Our AMC Covers
                    </h2>

                    <div className="grid md:grid-cols-4 gap-8">
                        {[
                            "Technical Support",
                            "System Monitoring",
                            "Regular Updates",
                            "Bug Fixes",
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

                {/* Who Needs AMC */}
                <section className="mb-24 grid md:grid-cols-2 gap-16 items-center">
                    <Image
                        src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0"
                        alt="System monitoring"
                        width={600}
                        height={420}
                        className="rounded-3xl shadow-xl"
                    />

                    <div>
                        <h2 className="text-4xl font-bold mb-8">
                            Who Benefits from AMC?
                        </h2>

                        <ul className="space-y-4 text-lg text-foreground/75 leading-relaxed">
                            <li>• Businesses running mission-critical systems</li>
                            <li>• Organizations without in-house IT teams</li>
                            <li>• Enterprises requiring guaranteed uptime</li>
                            <li>• Companies seeking predictable maintenance costs</li>
                            <li>• Systems handling sensitive data</li>
                        </ul>
                    </div>
                </section>

                {/* Before / After */}
                <section className="mb-24">
                    <h2 className="text-4xl font-bold mb-10">
                        System Reliability: Before & After AMC
                    </h2>

                    <div className="grid md:grid-cols-2 gap-12">
                        <div className="p-10 rounded-2xl bg-red-500/5 border border-red-500/20">
                            <h3 className="text-2xl font-semibold mb-4">Before</h3>
                            <p className="text-foreground/70 leading-relaxed">
                                Unexpected downtime, delayed fixes, security patch delays,
                                unplanned costs, and operational disruptions.
                            </p>
                        </div>

                        <div className="p-10 rounded-2xl bg-green-500/5 border border-green-500/20">
                            <h3 className="text-2xl font-semibold mb-4">After</h3>
                            <p className="text-foreground/70 leading-relaxed">
                                Proactive maintenance, predictable costs, faster resolutions,
                                improved uptime, and long-term system stability.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Security & Trust */}
                <section className="mb-24 grid md:grid-cols-2 gap-16 items-center">
                    <div>
                        <h2 className="text-4xl font-bold mb-8">
                            Security, Accountability & Trust
                        </h2>

                        <p className="text-lg text-foreground/75 leading-relaxed mb-6">
                            Our AMC engagements are governed by clear SLAs, strict access
                            controls, and confidentiality agreements to ensure trust and
                            transparency.
                        </p>

                        <ul className="space-y-3 text-foreground/70">
                            <li>• SLA-backed support</li>
                            <li>• Controlled system access</li>
                            <li>• No third-party data sharing</li>
                            <li>• Regular maintenance reports</li>
                            <li>• Dedicated support channels</li>
                        </ul>
                    </div>

                    <Image
                        src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b"
                        alt="Secure IT support"
                        width={600}
                        height={450}
                        className="rounded-3xl shadow-xl"
                    />
                </section>

                <CallToAction />
            </main>
            <Footer />
        </>
    )
}
