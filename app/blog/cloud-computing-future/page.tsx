import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function BlogCloudComputing2025() {
    return (
        <main className="bg-background text-foreground">
            {/* Hero Section */}
            <section className="relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-accent/10 to-background" />
                <div className="relative max-w-4xl mx-auto px-6 py-24">
                    <span className="inline-block mb-4 px-4 py-1 text-sm rounded-full bg-primary/10 text-primary font-medium">
                        Cloud Insights · Dec 10, 2025
                    </span>
                    <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-6">
                        The Future of Cloud Computing in 2025
                    </h1>
                    <p className="text-lg text-foreground/70 mb-8">
                        Exploring emerging trends and technologies shaping the cloud landscape, including serverless computing,
                        AI integration, and enhanced security protocols.
                    </p>
                    <div className="flex items-center gap-4">
                        <Image
                            src="/3.jpeg"
                            alt="Author Abhay Shah"
                            width={50}
                            height={50}
                            className="rounded-full"
                        />
                        <span className="text-foreground/70 font-medium">By Abhay Shah</span>
                    </div>
                </div>
            </section>

            {/* Blog Image */}
            <section className="max-w-4xl mx-auto px-6 mb-16">
                <Image
                    src="/cloud-computing-future.jpg"
                    alt="Cloud Computing Future"
                    width={960}
                    height={500}
                    className="rounded-2xl shadow-2xl border border-border"
                />
            </section>

            {/* Blog Content */}
            <section className="max-w-4xl mx-auto px-6 pb-24">
                <article className="prose prose-lg prose-primary mx-auto text-foreground leading-relaxed max-w-none">
                    <p className="mb-6 text-justify text-foreground/80 text-lg">
                        Cloud computing has rapidly evolved, transforming the way businesses operate and deploy
                        applications. In 2025, cloud adoption is expected to reach unprecedented levels, driven
                        by advancements in AI, edge computing, and serverless architectures.
                    </p>


                    <h2 className="text-3xl font-bold mb-4 mt-12">Emerging Trends in Cloud Technology</h2>
                    <p className="mb-6 text-foreground/80 text-lg">
                        Organizations are increasingly leveraging AI-powered cloud solutions to automate
                        workloads, enhance analytics, and improve decision-making processes. Serverless
                        computing is becoming mainstream, allowing developers to focus on building applications
                        without managing infrastructure.
                    </p>
                    <p className="mb-6 text-foreground/80 text-lg">
                        Edge computing complements cloud services by bringing computation closer to the data source,
                        reducing latency, and supporting real-time applications such as IoT and AR/VR systems.
                    </p>


                    <h2 className="text-3xl font-bold mb-4 mt-12">Security and Compliance</h2>
                    <p className="mb-6 text-foreground/80 text-lg">
                        As cloud adoption grows, ensuring robust security and compliance remains critical. In 2025,
                        organizations are expected to implement advanced encryption methods, automated compliance
                        checks, and zero-trust architectures to safeguard sensitive data across hybrid environments.
                    </p>


                    <h2 className="text-3xl font-bold mb-4 mt-12">Business Impacts and Benefits</h2>
                    <p className="mb-6 text-foreground/80 text-lg">
                        Cloud computing offers scalable, cost-effective solutions that enable faster time-to-market
                        and improved operational efficiency. By leveraging cloud-native services, companies can
                        innovate rapidly while maintaining high availability and reliability.
                    </p>


                    <h2 className="text-3xl font-bold mb-4 mt-12">Preparing for the Cloud-First Era</h2>
                    <p className="mb-6 text-foreground/80 text-lg">
                        Companies planning for 2025 and beyond should focus on strategic cloud migration, adopting
                        multi-cloud strategies, and continuous monitoring to optimize performance and minimize risks.
                        Staying updated with emerging trends ensures businesses remain competitive and future-ready.
                    </p>


                    <div className="mt-16 text-center">
                        <Link
                            href="/contact"
                            className="inline-flex items-center gap-2 rounded-xl bg-primary px-8 py-4 text-white text-lg font-semibold shadow-lg hover:bg-primary/90 transition-transform hover:scale-105"
                        >
                            Consult Our Cloud Experts <ArrowRight size={20} />
                        </Link>
                    </div>
                </article>
            </section>
        </main>
    );
}
