import CallToAction from "@/components/callToAction"
import Image from "next/image"

export const metadata = {
    title: "Web & Mobile App Development | Your Company Name",
    description:
        "High-performance web and mobile application development using modern frameworks with a focus on scalability, UX, and security.",
}

export default function WebMobileDevelopmentPage() {
    return (
        <>
            <main className="px-6 md:px-16 py-20 max-w-7xl mx-auto">
                {/* Hero */}
                <section className="grid md:grid-cols-2 gap-16 items-center mb-28">
                    <div>
                        <h1 className="text-5xl font-extrabold leading-tight mb-8">
                            Web & Mobile App Development <br />
                            <span className="text-primary">
                                Fast, Scalable & User-Centric Applications
                            </span>
                        </h1>

                        <p className="text-lg text-foreground/70 leading-relaxed">
                            We build modern web and mobile applications that deliver seamless
                            user experiences, high performance, and long-term scalability.
                            Whether it’s a startup MVP or an enterprise-grade platform, our apps
                            are designed to engage users and drive measurable business results.
                        </p>
                    </div>

                    <div className="relative rounded-3xl overflow-hidden shadow-xl">
                        <Image
                            src="https://images.unsplash.com/photo-1519389950473-47ba0277781c"
                            alt="Web and mobile app development"
                            width={700}
                            height={500}
                            className="object-cover"
                        />
                    </div>
                </section>

                {/* What We Build */}
                <section className="mb-24">
                    <h2 className="text-4xl font-bold mb-10">What We Build</h2>

                    <div className="grid md:grid-cols-4 gap-8">
                        {[
                            "Modern Web Applications",
                            "Cross-Platform Mobile Apps",
                            "Progressive Web Apps (PWA)",
                            "Responsive & Accessible UI",
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
                        src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d"
                        alt="Mobile app users"
                        width={600}
                        height={420}
                        className="rounded-3xl shadow-xl"
                    />

                    <div>
                        <h2 className="text-4xl font-bold mb-8">
                            Who Is This Service Ideal For?
                        </h2>

                        <ul className="space-y-4 text-lg text-foreground/75 leading-relaxed">
                            <li>• Startups launching digital products</li>
                            <li>• Businesses expanding to mobile platforms</li>
                            <li>• Enterprises modernizing legacy web apps</li>
                            <li>• Companies focusing on customer engagement</li>
                            <li>• Products requiring high UI/UX standards</li>
                        </ul>
                    </div>
                </section>

                {/* Time Impact */}
                <section className="mb-24">
                    <h2 className="text-4xl font-bold mb-10">
                        Time Efficiency & Productivity Impact
                    </h2>

                    <div className="grid md:grid-cols-2 gap-12">
                        <div className="p-10 rounded-2xl bg-red-500/5 border border-red-500/20">
                            <h3 className="text-2xl font-semibold mb-4">Before</h3>
                            <p className="text-foreground/70 leading-relaxed">
                                Disconnected platforms, inconsistent user experiences, slow load
                                times, high bounce rates, and frequent maintenance issues.
                            </p>
                        </div>

                        <div className="p-10 rounded-2xl bg-green-500/5 border border-green-500/20">
                            <h3 className="text-2xl font-semibold mb-4">After</h3>
                            <p className="text-foreground/70 leading-relaxed">
                                Unified experiences across devices, faster releases, reduced
                                maintenance effort, improved user retention, and smoother
                                scalability.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Security */}
                <section className="mb-24 grid md:grid-cols-2 gap-16 items-center">
                    <div>
                        <h2 className="text-4xl font-bold mb-8">
                            Secure by Design
                        </h2>

                        <p className="text-lg text-foreground/75 leading-relaxed mb-6">
                            Our applications are built with security-first principles, ensuring
                            data protection, privacy, and compliance without compromising user
                            experience.
                        </p>

                        <ul className="space-y-3 text-foreground/70">
                            <li>• Secure APIs & authentication</li>
                            <li>• Encrypted data transmission</li>
                            <li>• No third-party data sharing</li>
                            <li>• Compliance-ready architecture</li>
                            <li>• Regular security testing</li>
                        </ul>
                    </div>

                    <Image
                        src="https://images.unsplash.com/photo-1563986768609-322da13575f3"
                        alt="Application security"
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
