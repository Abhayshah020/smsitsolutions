"use client"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Search, ArrowRight } from "lucide-react"
import { useState } from "react"

export default function Blog() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("All")

  const posts = [
    {
      title: "The Future of Cloud Computing in 2025",
      excerpt: "Exploring emerging trends and technologies shaping the cloud landscape.",
      category: "Cloud",
      date: "Dec 10, 2025",
      author: "Sanjay Mishra",
      image: "/cloud-computing-future.jpg",
    },
    {
      title: "Cybersecurity Best Practices for Remote Teams",
      excerpt: "Essential security measures to protect your distributed workforce.",
      category: "Security",
      date: "Dec 8, 2025",
      author: "Maya Singh",
      image: "/cybersecurity-remote-work.png",
    },
    {
      title: "Scaling Your Application with Microservices",
      excerpt: "A guide to designing scalable microservices architecture.",
      category: "Software",
      date: "Dec 5, 2025",
      author: "Rohit Patel",
      image: "/microservices-architecture.png",
    },
    {
      title: "AI/ML Integration in Business Applications",
      excerpt: "How to leverage AI and machine learning for business growth.",
      category: "AI",
      date: "Dec 1, 2025",
      author: "Ananya Sharma",
      image: "/artificial-intelligence-machine-learning.png",
    },
    {
      title: "DevOps: From Theory to Practice",
      excerpt: "Implementing DevOps practices in your organization effectively.",
      category: "DevOps",
      date: "Nov 28, 2025",
      author: "Sanjay Mishra",
      image: "/devops-practices-implementation.jpg",
    },
    {
      title: "Mobile App Development: Native vs Cross-Platform",
      excerpt: "Choosing the right approach for your mobile application.",
      category: "Mobile",
      date: "Nov 25, 2025",
      author: "Maya Singh",
      image: "/mobile-app-development.png",
    },
  ]

  const categories = ["All", "Cloud", "Security", "Software", "AI", "DevOps", "Mobile"]

  const filtered = posts.filter((post) => {
    const matchesSearch =
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === "All" || post.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  return (
    <main>
      <Header />

      {/* Hero Section */}
      <section className="relative py-20 md:py-32 px-4 bg-gradient-to-br from-primary/10 to-accent/10">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Blog & Resources</h1>
          <p className="text-xl text-foreground/70 max-w-2xl">
            Stay updated with the latest insights and trends in IT solutions.
          </p>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="py-12 px-4 bg-background border-b border-border">
        <div className="max-w-7xl mx-auto">
          <div className="mb-8">
            <div className="relative">
              <Search size={20} className="absolute left-4 top-1/2 -translate-y-1/2 text-foreground/40" />
              <input
                type="search"
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-3 rounded-lg border border-input bg-card focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
          </div>

          <div className="flex flex-wrap gap-3">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-full text-sm font-semibold transition-all ${
                  selectedCategory === cat
                    ? "bg-primary text-primary-foreground"
                    : "bg-card border border-border text-foreground hover:border-primary/50"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-20 md:py-32 px-4 bg-background">
        <div className="max-w-7xl mx-auto">
          {filtered.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filtered.map((post, index) => (
                <article
                  key={index}
                  className="group rounded-xl overflow-hidden border border-border bg-card hover:shadow-lg transition-all duration-300"
                >
                  <div className="relative overflow-hidden h-48 bg-muted">
                    <img
                      src={post.image || "/placeholder.svg"}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-primary/10 text-primary">
                        {post.category}
                      </span>
                      <span className="text-xs text-foreground/60">{post.date}</span>
                    </div>
                    <h3 className="text-lg font-bold mb-2 line-clamp-2 group-hover:text-primary transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-foreground/60 text-sm mb-4 line-clamp-2">{post.excerpt}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-foreground/50">{post.author}</span>
                      <button className="text-primary hover:text-primary/80 transition-colors">
                        <ArrowRight size={16} />
                      </button>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <p className="text-foreground/60 text-lg">No posts found matching your search.</p>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-20 md:py-32 px-4 bg-card border-t border-border">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">Subscribe to Our Newsletter</h2>
          <p className="text-foreground/70 mb-8">Get the latest insights and updates delivered to your inbox.</p>
          <form className="flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <button
              type="submit"
              className="px-6 py-3 rounded-lg bg-primary text-primary-foreground font-semibold transition-all hover:bg-primary/90 flex items-center justify-center gap-2"
            >
              Subscribe <ArrowRight size={18} />
            </button>
          </form>
        </div>
      </section>

      <Footer />
    </main>
  )
}
