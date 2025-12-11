import Link from "next/link"
import { Github, Linkedin, Twitter, Mail } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t border-border bg-card text-card-foreground">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="font-bold text-lg mb-4 gradient-text">SMS IT Solutions</h3>
            <p className="text-foreground/60 text-sm">Smart Solutions for a Smarter Future</p>
          </div>
          <div>
            <h4 className="font-semibold mb-4 text-foreground">Company</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="text-foreground/60 hover:text-primary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-foreground/60 hover:text-primary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/portfolio" className="text-foreground/60 hover:text-primary transition-colors">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-foreground/60 hover:text-primary transition-colors">
                  Blog
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4 text-foreground">Services</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="/services#software" className="text-foreground/60 hover:text-primary transition-colors">
                  Software Dev
                </a>
              </li>
              <li>
                <a href="/services#cloud" className="text-foreground/60 hover:text-primary transition-colors">
                  Cloud Solutions
                </a>
              </li>
              <li>
                <a href="/services#security" className="text-foreground/60 hover:text-primary transition-colors">
                  Cybersecurity
                </a>
              </li>
              <li>
                <a href="/services#devops" className="text-foreground/60 hover:text-primary transition-colors">
                  DevOps
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4 text-foreground">Contact</h4>
            <p className="text-foreground/60 text-sm mb-3">Kathmandu, Nepal</p>
            <p className="text-foreground/60 text-sm mb-3">info@smsitsolutions.com.au</p>
            <div className="flex gap-3">
              {/* <a href="#" className="text-foreground/60 hover:text-primary transition-colors">
                <Github size={18} />
              </a> */}
              <a href="#" className="text-foreground/60 hover:text-primary transition-colors">
                <Linkedin size={18} />
              </a>
              <a href="#" className="text-foreground/60 hover:text-primary transition-colors">
                <Twitter size={18} />
              </a>
              <a href="#" className="text-foreground/60 hover:text-primary transition-colors">
                <Mail size={18} />
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-foreground/60">
          <p>&copy; 2025 SMS IT Solutions. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <Link href="#" className="hover:text-primary transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="hover:text-primary transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
