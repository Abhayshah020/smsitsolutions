import CallToAction from "@/components/callToAction"
import Image from "next/image"
export const metadata = {
    title: "Cloud Computing & Deployment | Your Company Name",
    description:
        "Secure, scalable cloud infrastructure and deployment solutions using AWS, Azure, Docker, and Kubernetes.",
}

export default function CloudComputingPage() {
    return (
        <>
            <main className="px-6 md:px-16 py-20 max-w-7xl mx-auto">
                {/* Hero */}
                <section className="grid md:grid-cols-2 gap-16 items-center mb-28">
                    <div>
                        <h1 className="text-5xl font-extrabold leading-tight mb-8">
                            Cloud Computing & Deployment <br />
                            <span className="text-primary">
                                Reliable, Scalable & Cost-Efficient Infrastructure
                            </span>
                        </h1>

                        <p className="text-lg text-foreground/70 leading-relaxed">
                            We design, deploy, and manage cloud infrastructure that ensures
                            high availability, security, and scalability. Our cloud solutions
                            help businesses reduce operational costs while improving performance
                            and reliability.
                        </p>
                    </div>

                    <div className="relative rounded-3xl overflow-hidden shadow-xl">
                        <Image
                            src="https://images.unsplash.com/photo-1451187580459-43490279c0fa"
                            alt="Cloud infrastructure"
                            width={700}
                            height={500}
                            className="object-cover"
                        />
                    </div>
                </section>

                {/* Services */}
                <section className="mb-24">
                    <h2 className="text-4xl font-bold mb-10">Our Cloud Capabilities</h2>

                    <div className="grid md:grid-cols-4 gap-8">
                        {[
                            "AWS & Azure Solutions",
                            "Docker & Kubernetes",
                            "Serverless Architecture",
                            "Cloud Migration",
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

                {/* Who Needs Cloud */}
                <section className="mb-24 grid md:grid-cols-2 gap-16 items-center">
                    <Image
                        src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d"
                        alt="Cloud team collaboration"
                        width={600}
                        height={420}
                        className="rounded-3xl shadow-xl"
                    />

                    <div>
                        <h2 className="text-4xl font-bold mb-8">
                            Who Benefits Most from Cloud?
                        </h2>

                        <ul className="space-y-4 text-lg text-foreground/75 leading-relaxed">
                            <li>• Fast-growing startups</li>
                            <li>• SaaS & digital platforms</li>
                            <li>• Enterprises with global users</li>
                            <li>• Businesses migrating from on-premise</li>
                            <li>• Companies prioritizing uptime & security</li>
                        </ul>
                    </div>
                </section>

                {/* Before / After */}
                <section className="mb-24">
                    <h2 className="text-4xl font-bold mb-10">
                        Infrastructure Before & After Cloud Adoption
                    </h2>

                    <div className="grid md:grid-cols-2 gap-12">
                        <div className="p-10 rounded-2xl bg-red-500/5 border border-red-500/20">
                            <h3 className="text-2xl font-semibold mb-4">Before</h3>
                            <p className="text-foreground/70 leading-relaxed">
                                High hardware costs, limited scalability, manual deployments,
                                downtime risks, and slow disaster recovery.
                            </p>
                        </div>

                        <div className="p-10 rounded-2xl bg-green-500/5 border border-green-500/20">
                            <h3 className="text-2xl font-semibold mb-4">After</h3>
                            <p className="text-foreground/70 leading-relaxed">
                                Auto-scaling infrastructure, rapid deployments, high availability,
                                automated backups, and cost-optimized resource usage.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Security */}
                <section className="mb-24 grid md:grid-cols-2 gap-16 items-center">
                    <div>
                        <h2 className="text-4xl font-bold mb-8">
                            Enterprise-Grade Cloud Security
                        </h2>

                        <p className="text-lg text-foreground/75 leading-relaxed mb-6">
                            Security is deeply integrated into our cloud architecture. We follow
                            best practices to ensure your infrastructure remains protected,
                            compliant, and resilient.
                        </p>

                        <ul className="space-y-3 text-foreground/70">
                            <li>• IAM & access control</li>
                            <li>• Network isolation & firewalls</li>
                            <li>• Encrypted storage & backups</li>
                            <li>• No third-party data exposure</li>
                            <li>• Continuous monitoring & alerts</li>
                        </ul>
                    </div>

                    <Image
                        src="https://images.unsplash.com/photo-1555949963-aa79dcee981c"
                        alt="Cloud security"
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
