import CallToAction from "@/components/callToAction"
import Image from "next/image"

export const metadata = {
    title: "UI/UX Design Services | Your Company Name",
    description:
        "User-centered UI/UX design services focused on usability, accessibility, and business outcomes.",
}

export default function UIUXDesignPage() {
    return (
        <>
            <main className="px-6 md:px-16 py-20 max-w-7xl mx-auto">
                {/* Hero */}
                <section className="grid md:grid-cols-2 gap-16 items-center mb-28">
                    <div>
                        <h1 className="text-5xl font-extrabold leading-tight mb-8">
                            UI/UX Design <br />
                            <span className="text-primary">
                                Experiences Users Love & Trust
                            </span>
                        </h1>

                        <p className="text-lg text-foreground/70 leading-relaxed">
                            We design digital experiences that are intuitive, visually engaging,
                            and purpose-driven. Our UI/UX design process bridges user needs and
                            business goals to create products that convert, retain, and delight.
                        </p>
                    </div>

                    <div className="relative rounded-3xl overflow-hidden shadow-xl">
                        <Image
                            src="https://images.unsplash.com/photo-1586717791821-3f44a563fa4c"
                            alt="UI UX design process"
                            width={700}
                            height={500}
                            className="object-cover"
                        />
                    </div>
                </section>

                {/* Design Services */}
                <section className="mb-24">
                    <h2 className="text-4xl font-bold mb-10">
                        Our UI/UX Design Capabilities
                    </h2>

                    <div className="grid md:grid-cols-4 gap-8">
                        {[
                            "UX Research",
                            "Wireframing",
                            "Prototyping",
                            "User Testing",
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

                {/* Who Needs UI UX */}
                <section className="mb-24 grid md:grid-cols-2 gap-16 items-center">
                    <Image
                        src="https://images.unsplash.com/photo-1558655146-9f40138edfeb"
                        alt="UX design collaboration"
                        width={600}
                        height={420}
                        className="rounded-3xl shadow-xl"
                    />

                    <div>
                        <h2 className="text-4xl font-bold mb-8">
                            Who Needs Professional UI/UX Design?
                        </h2>

                        <ul className="space-y-4 text-lg text-foreground/75 leading-relaxed">
                            <li>• Startups building customer-facing products</li>
                            <li>• Businesses improving conversion rates</li>
                            <li>• Enterprises redesigning legacy applications</li>
                            <li>• Platforms focused on accessibility & usability</li>
                            <li>• Products targeting long-term user retention</li>
                        </ul>
                    </div>
                </section>

                {/* Before / After */}
                <section className="mb-24">
                    <h2 className="text-4xl font-bold mb-10">
                        User Experience: Before & After
                    </h2>

                    <div className="grid md:grid-cols-2 gap-12">
                        <div className="p-10 rounded-2xl bg-red-500/5 border border-red-500/20">
                            <h3 className="text-2xl font-semibold mb-4">Before</h3>
                            <p className="text-foreground/70 leading-relaxed">
                                Confusing navigation, poor usability, inconsistent interfaces,
                                high bounce rates, and low user engagement.
                            </p>
                        </div>

                        <div className="p-10 rounded-2xl bg-green-500/5 border border-green-500/20">
                            <h3 className="text-2xl font-semibold mb-4">After</h3>
                            <p className="text-foreground/70 leading-relaxed">
                                Intuitive flows, visually appealing interfaces, improved
                                accessibility, higher engagement, and better conversion rates.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Trust & Privacy */}
                <section className="mb-24 grid md:grid-cols-2 gap-16 items-center">
                    <div>
                        <h2 className="text-4xl font-bold mb-8">
                            Trust, Accessibility & Ethics
                        </h2>

                        <p className="text-lg text-foreground/75 leading-relaxed mb-6">
                            Our designs are ethical, inclusive, and user-first. We respect user
                            privacy, avoid manipulative patterns, and ensure accessibility
                            across devices and audiences.
                        </p>

                        <ul className="space-y-3 text-foreground/70">
                            <li>• WCAG accessibility standards</li>
                            <li>• Privacy-aware UX decisions</li>
                            <li>• No dark patterns</li>
                            <li>• Inclusive design principles</li>
                            <li>• Full design ownership</li>
                        </ul>
                    </div>

                    <Image
                        src="https://images.unsplash.com/photo-1529333166437-7750a6dd5a70"
                        alt="Accessible design"
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
