import CallToAction from "@/components/callToAction"
import Image from "next/image"

export const metadata = {
    title: "Data Analytics & Automation | Your Company Name",
    description:
        "Advanced data analytics and automation solutions that transform raw data into actionable business intelligence.",
}

export default function DataAnalyticsPage() {
    return (
        <>
            <main className="px-6 md:px-16 py-20 max-w-7xl mx-auto">
                {/* Hero */}
                <section className="grid md:grid-cols-2 gap-16 items-center mb-28">
                    <div>
                        <h1 className="text-5xl font-extrabold leading-tight mb-8">
                            Data Analytics & Automation <br />
                            <span className="text-primary">
                                Turning Data into Decisions
                            </span>
                        </h1>

                        <p className="text-lg text-foreground/70 leading-relaxed">
                            We help organizations unlock the true value of their data by
                            transforming raw information into meaningful insights and automated
                            processes. Our solutions empower faster decision-making, reduce
                            manual effort, and drive measurable business growth.
                        </p>
                    </div>

                    <div className="relative rounded-3xl overflow-hidden shadow-xl">
                        <Image
                            src="https://images.unsplash.com/photo-1551288049-bebda4e38f71"
                            alt="Data analytics dashboard"
                            width={700}
                            height={500}
                            className="object-cover"
                        />
                    </div>
                </section>

                {/* Capabilities */}
                <section className="mb-24">
                    <h2 className="text-4xl font-bold mb-10">
                        Our Analytics & Automation Capabilities
                    </h2>

                    <div className="grid md:grid-cols-4 gap-8">
                        {[
                            "Business Intelligence",
                            "Data Warehousing",
                            "Process Automation",
                            "Predictive Analytics",
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
                        src="https://images.unsplash.com/photo-1526378722484-bd91ca387e72"
                        alt="Data driven teams"
                        width={600}
                        height={420}
                        className="rounded-3xl shadow-xl"
                    />

                    <div>
                        <h2 className="text-4xl font-bold mb-8">
                            Who Benefits Most from Data Analytics?
                        </h2>

                        <ul className="space-y-4 text-lg text-foreground/75 leading-relaxed">
                            <li>• Businesses with large volumes of data</li>
                            <li>• Organizations relying on reporting & forecasting</li>
                            <li>• Operations teams seeking efficiency</li>
                            <li>• Leadership teams requiring real-time insights</li>
                            <li>• Companies aiming to reduce manual processes</li>
                        </ul>
                    </div>
                </section>

                {/* Before / After */}
                <section className="mb-24">
                    <h2 className="text-4xl font-bold mb-10">
                        Operational Impact: Before & After
                    </h2>

                    <div className="grid md:grid-cols-2 gap-12">
                        <div className="p-10 rounded-2xl bg-red-500/5 border border-red-500/20">
                            <h3 className="text-2xl font-semibold mb-4">Before</h3>
                            <p className="text-foreground/70 leading-relaxed">
                                Manual reporting, delayed insights, fragmented data sources,
                                decision-making based on assumptions, and high operational effort.
                            </p>
                        </div>

                        <div className="p-10 rounded-2xl bg-green-500/5 border border-green-500/20">
                            <h3 className="text-2xl font-semibold mb-4">After</h3>
                            <p className="text-foreground/70 leading-relaxed">
                                Automated reports, real-time dashboards, centralized data,
                                predictive insights, and faster, data-backed decisions.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Security */}
                <section className="mb-24 grid md:grid-cols-2 gap-16 items-center">
                    <div>
                        <h2 className="text-4xl font-bold mb-8">
                            Data Security & Privacy Assurance
                        </h2>

                        <p className="text-lg text-foreground/75 leading-relaxed mb-6">
                            We treat your data as a critical asset. Our analytics solutions are
                            designed to ensure confidentiality, integrity, and compliance at
                            every stage.
                        </p>

                        <ul className="space-y-3 text-foreground/70">
                            <li>• Secure data pipelines</li>
                            <li>• Role-based access control</li>
                            <li>• Encrypted data storage</li>
                            <li>• No third-party data sharing</li>
                            <li>• Compliance-ready architectures</li>
                        </ul>
                    </div>

                    <Image
                        src="https://images.unsplash.com/photo-1563986768609-322da13575f3"
                        alt="Data security"
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
