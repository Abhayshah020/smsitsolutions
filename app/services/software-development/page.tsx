import CallToAction from "@/components/callToAction"
import Image from "next/image"

export const metadata = {
    title: "Custom Software Development | Your Company Name",
    description:
        "Enterprise-grade custom software development focused on security, scalability, and business growth.",
}

export default function SoftwareDevelopmentPage() {
    return (
        <>

            <main className="px-6 md:px-16 py-20 max-w-7xl mx-auto">
                {/* Hero Section */}
                <section className="grid md:grid-cols-2 gap-16 items-center mb-28">
                    <div>
                        <h1 className="text-5xl font-extrabold leading-tight mb-8">
                            Custom Software Development <br />
                            <span className="text-primary">
                                Built for Performance, Security & Growth
                            </span>
                        </h1>

                        <p className="text-lg text-foreground/70 leading-relaxed">
                            We design and build tailor-made software solutions that align
                            perfectly with your business processes, goals, and long-term vision.
                            From internal tools to large-scale enterprise platforms, our software
                            is engineered to scale, adapt, and perform.
                        </p>
                    </div>

                    <div className="relative rounded-3xl overflow-hidden shadow-xl">
                        <Image
                            src="https://images.unsplash.com/photo-1518770660439-4636190af475"
                            alt="Custom software development"
                            width={700}
                            height={500}
                            className="object-cover"
                        />
                    </div>
                </section>

                {/* Why This Service */}
                <section className="mb-24">
                    <h2 className="text-4xl font-bold mb-10">Why Custom Software?</h2>

                    <div className="grid md:grid-cols-3 gap-10">
                        {[
                            {
                                title: "Built Around Your Business",
                                desc: "Unlike off-the-shelf software, custom solutions are designed specifically around your workflows, reducing inefficiencies and manual work.",
                            },
                            {
                                title: "Scalable from Day One",
                                desc: "We architect systems that grow with your business, ensuring future expansion does not require complete rewrites.",
                            },
                            {
                                title: "Competitive Advantage",
                                desc: "Custom software enables unique features and automation that differentiate your business from competitors.",
                            },
                        ].map((item, i) => (
                            <div
                                key={i}
                                className="p-8 rounded-2xl bg-card border border-border hover:shadow-lg transition"
                            >
                                <h3 className="text-xl font-semibold mb-4">{item.title}</h3>
                                <p className="text-foreground/70 leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Who Needs This */}
                <section className="mb-24 grid md:grid-cols-2 gap-16 items-center">
                    <div>
                        <Image
                            src="https://images.unsplash.com/photo-1556761175-129418cb2dfe"
                            alt="Enterprise software solutions"
                            width={600}
                            height={400}
                            className="rounded-3xl shadow-lg"
                        />
                    </div>

                    <div>
                        <h2 className="text-4xl font-bold mb-8">
                            Who Is This Service Best For?
                        </h2>

                        <ul className="space-y-4 text-lg text-foreground/75 leading-relaxed">
                            <li>• Startups building MVPs or scalable platforms</li>
                            <li>• Enterprises modernizing legacy systems</li>
                            <li>• Organizations with complex internal workflows</li>
                            <li>• Businesses requiring high security & compliance</li>
                            <li>• Companies seeking automation & efficiency</li>
                        </ul>
                    </div>
                </section>

                {/* Time & Efficiency */}
                <section className="mb-24">
                    <h2 className="text-4xl font-bold mb-10">
                        Time Management: Before & After
                    </h2>

                    <div className="grid md:grid-cols-2 gap-12">
                        <div className="p-10 rounded-2xl bg-red-500/5 border border-red-500/20">
                            <h3 className="text-2xl font-semibold mb-4">Before</h3>
                            <p className="text-foreground/70 leading-relaxed">
                                Manual processes, disconnected tools, data duplication, frequent
                                errors, delayed decision-making, and high operational costs.
                            </p>
                        </div>

                        <div className="p-10 rounded-2xl bg-green-500/5 border border-green-500/20">
                            <h3 className="text-2xl font-semibold mb-4">After</h3>
                            <p className="text-foreground/70 leading-relaxed">
                                Automated workflows, centralized data, real-time reporting,
                                improved accuracy, faster operations, and measurable productivity
                                gains.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Security */}
                <section className="mb-24 grid md:grid-cols-2 gap-16 items-center">
                    <div>
                        <h2 className="text-4xl font-bold mb-8">
                            Security & Data Privacy First
                        </h2>

                        <p className="text-lg text-foreground/75 leading-relaxed mb-6">
                            Security is embedded into every layer of our development process.
                            We follow industry-standard secure coding practices and compliance
                            guidelines.
                        </p>

                        <ul className="space-y-3 text-foreground/70">
                            <li>• Secure authentication & authorization</li>
                            <li>• Encrypted data storage & transmission</li>
                            <li>• Regular security audits & testing</li>
                            <li>• No third-party data sharing without consent</li>
                            <li>• Full ownership of your data</li>
                        </ul>
                    </div>

                    <Image
                        src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b"
                        alt="Secure software architecture"
                        width={600}
                        height={450}
                        className="rounded-3xl shadow-xl"
                    />
                </section>

                {/* CTA */}
                <CallToAction />
            </main>

        </>
    )
}
