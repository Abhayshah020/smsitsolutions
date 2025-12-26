import Link from "next/link"

export default function CallToAction() {
    return (
        <section className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary to-accent text-white px-10 py-16 mt-24">
            <div className="max-w-4xl">
                <h2 className="text-4xl font-bold mb-6">
                    Let’s Build Something Powerful Together
                </h2>

                <p className="text-lg opacity-90 mb-10 leading-relaxed">
                    Whether you are a startup, enterprise, or growing business, our team
                    is ready to turn your ideas into secure, scalable, and high-performance
                    solutions tailored exactly to your needs.
                </p>

                <Link
                    href="/contact"
                    className="inline-flex items-center justify-center rounded-xl bg-white text-primary px-8 py-4 font-semibold hover:bg-white/90 transition"
                >
                    Contact Our Experts
                </Link>
            </div>
        </section>
    )
}
