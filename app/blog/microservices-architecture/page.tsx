    import Image from "next/image";
    import Link from "next/link";
    import { ArrowRight, Layers, Cpu, GitBranch } from "lucide-react";

    export default function BlogScalingMicroservices() {
        return (
            <main className="bg-background text-foreground">
                {/* Hero Section */}
                <section className="relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-accent/10 to-background" />
                    <div className="relative max-w-4xl mx-auto px-6 py-24">
                        <span className="inline-block mb-4 px-4 py-1 text-sm rounded-full bg-primary/10 text-primary font-medium">
                            Software Architecture · Dec 5, 2025
                        </span>
                        <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-6 tracking-tight">
                            Scaling Your Application with Microservices
                        </h1>
                        <p className="text-lg text-foreground/70 mb-8 leading-relaxed">
                            A practical guide to designing, deploying, and scaling microservices architecture
                            for modern, high-growth applications.
                        </p>
                        <div className="flex items-center gap-4">
                            <Image
                                src="/3.jpeg"
                                alt="Author Abhay Shah"
                                width={50}
                                height={50}
                                className="rounded-full border-2 border-primary"
                            />
                            <span className="text-foreground/70 font-medium">By Abhay Shah</span>
                        </div>
                    </div>
                </section>

                {/* Blog Image */}
                <section className="max-w-4xl mx-auto px-6 mb-16">
                    <Image
                        src="/microservices-architecture.png"
                        alt="Microservices Architecture Diagram"
                        width={960}
                        height={500}
                        className="rounded-3xl shadow-2xl border border-border"
                    />
                </section>

                {/* Blog Content */}
                <section className="max-w-4xl mx-auto px-6 pb-24">
                    <article className="prose prose-lg prose-primary mx-auto max-w-none text-foreground leading-relaxed">
                        <p className="mb-6 text-foreground/80 text-lg text-justify">
                            As applications grow in complexity and user base, traditional monolithic architectures
                            often struggle to scale efficiently. Microservices architecture addresses these challenges
                            by breaking applications into independently deployable, loosely coupled services.
                        </p>

                        <h2 className="text-3xl font-bold mt-12 mb-4">What Are Microservices?</h2>
                        <p className="mb-6 text-foreground/80 text-lg">
                            Microservices are small, autonomous services designed around specific business capabilities.
                            Each service runs independently, communicates via APIs, and can be scaled without affecting
                            the entire system.
                        </p>

                        <div className="grid md:grid-cols-3 gap-6 my-12">
                            <div className="p-6 rounded-2xl bg-card border border-border text-center">
                                <Layers className="mx-auto mb-3 text-primary" size={32} />
                                <p className="font-semibold">Service Isolation</p>
                            </div>
                            <div className="p-6 rounded-2xl bg-card border border-border text-center">
                                <Cpu className="mx-auto mb-3 text-primary" size={32} />
                                <p className="font-semibold">Independent Scaling</p>
                            </div>
                            <div className="p-6 rounded-2xl bg-card border border-border text-center">
                                <GitBranch className="mx-auto mb-3 text-primary" size={32} />
                                <p className="font-semibold">Decentralized Development</p>
                            </div>
                        </div>

                        <h2 className="text-3xl font-bold mt-12 mb-4">Designing for Scalability</h2>
                        <p className="mb-6 text-foreground/80 text-lg">
                            Successful microservices architectures rely on clear service boundaries, stateless design,
                            and efficient inter-service communication. Using asynchronous messaging and API gateways
                            ensures resilience and flexibility at scale.
                        </p>

                        <h2 className="text-3xl font-bold mt-12 mb-4">Deployment & Orchestration</h2>
                        <p className="mb-6 text-foreground/80 text-lg">
                            Containerization and orchestration platforms like Docker and Kubernetes simplify deployment,
                            scaling, and management of microservices. Automated CI/CD pipelines enable rapid releases
                            while maintaining reliability.
                        </p>

                        <h2 className="text-3xl font-bold mt-12 mb-4">Monitoring & Fault Tolerance</h2>
                        <p className="mb-6 text-foreground/80 text-lg">
                            Observability is critical in distributed systems. Centralized logging, metrics, and
                            distributed tracing help teams detect failures early and maintain system health.
                            Circuit breakers and retries further enhance fault tolerance.
                        </p>

                        <div className="mt-16 text-center">
                            <Link
                                href="/contact"
                                className="inline-flex items-center gap-2 rounded-xl bg-primary px-8 py-4 text-white text-lg font-semibold shadow-lg hover:bg-primary/90 transition-transform hover:scale-105"
                            >
                                Design a Scalable Architecture <ArrowRight size={20} />
                            </Link>
                        </div>
                    </article>
                </section>
            </main>
        );
    }