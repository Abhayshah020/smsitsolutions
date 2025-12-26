import CallToAction from "@/components/callToAction"
import Image from "next/image"

export const metadata = {
    title: "DevOps & CI/CD Implementation | Your Company Name",
    description:
        "DevOps and CI/CD solutions that automate deployments, improve reliability, and accelerate product delivery.",
}

export default function DevOpsPage() {
    return (
        <>
            <main className="px-6 md:px-16 py-20 max-w-7xl mx-auto">
                {/* Hero */}
                <section className="grid md:grid-cols-2 gap-16 items-center mb-28">
                    <div>
                        <h1 className="text-5xl font-extrabold leading-tight mb-8">
                            DevOps & CI/CD Implementation <br />
                            <span className="text-primary">
                                Faster Releases, Higher Reliability
                            </span>
                        </h1>

                        <p className="text-lg text-foreground/70 leading-relaxed">
                            We help teams deliver software faster and more reliably by
                            implementing modern DevOps practices and CI/CD pipelines. Our
                            approach reduces deployment risks, improves system stability, and
                            enables continuous innovation.
                        </p>
                    </div>

                    <div className="relative rounded-3xl overflow-hidden shadow-xl">
                        <Image
                            src="/1pipeline.webp"
                            alt="DevOps pipeline"
                            width={700}
                            height={500}
                            className="object-cover"
                        />
                    </div>
                </section>

                {/* Services */}
                <section className="mb-24">
                    <h2 className="text-4xl font-bold mb-10">
                        Our DevOps Capabilities
                    </h2>

                    <div className="grid md:grid-cols-4 gap-8">
                        {[
                            "CI/CD Pipelines",
                            "Infrastructure as Code",
                            "Monitoring & Logging",
                            "Performance Optimization",
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

                {/* Who Needs DevOps */}
                <section className="mb-24 grid md:grid-cols-2 gap-16 items-center">
                    <Image
                        src="https://images.unsplash.com/photo-1518779578993-ec3579fee39f"
                        alt="DevOps teams"
                        width={600}
                        height={420}
                        className="rounded-3xl shadow-xl"
                    />

                    <div>
                        <h2 className="text-4xl font-bold mb-8">
                            Who Benefits from DevOps & CI/CD?
                        </h2>

                        <ul className="space-y-4 text-lg text-foreground/75 leading-relaxed">
                            <li>• Software development teams</li>
                            <li>• SaaS & product-based companies</li>
                            <li>• Businesses requiring frequent releases</li>
                            <li>• Teams managing complex infrastructure</li>
                            <li>• Organizations aiming for high availability</li>
                        </ul>
                    </div>
                </section>

                {/* Before / After */}
                <section className="mb-24">
                    <h2 className="text-4xl font-bold mb-10">
                        Deployment Efficiency: Before & After
                    </h2>

                    <div className="grid md:grid-cols-2 gap-12">
                        <div className="p-10 rounded-2xl bg-red-500/5 border border-red-500/20">
                            <h3 className="text-2xl font-semibold mb-4">Before</h3>
                            <p className="text-foreground/70 leading-relaxed">
                                Manual deployments, frequent failures, rollback issues, slow
                                releases, and limited visibility into system health.
                            </p>
                        </div>

                        <div className="p-10 rounded-2xl bg-green-500/5 border border-green-500/20">
                            <h3 className="text-2xl font-semibold mb-4">After</h3>
                            <p className="text-foreground/70 leading-relaxed">
                                Automated pipelines, faster releases, improved reliability,
                                proactive monitoring, and scalable infrastructure.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Security */}
                <section className="mb-24 grid md:grid-cols-2 gap-16 items-center">
                    <div>
                        <h2 className="text-4xl font-bold mb-8">
                            Secure, Observable & Resilient Systems
                        </h2>

                        <p className="text-lg text-foreground/75 leading-relaxed mb-6">
                            Security and observability are integrated into our DevOps workflows.
                            We ensure safe deployments, controlled access, and continuous system
                            insights.
                        </p>

                        <ul className="space-y-3 text-foreground/70">
                            <li>• Secure pipeline credentials</li>
                            <li>• Infrastructure version control</li>
                            <li>• Continuous monitoring & alerts</li>
                            <li>• No third-party data sharing</li>
                            <li>• High availability architecture</li>
                        </ul>
                    </div>

                    <Image
                        src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b"
                        alt="DevOps monitoring"
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
