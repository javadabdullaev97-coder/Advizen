import Link from "next/link";
import { Phone, Mail, MapPin } from "lucide-react";

const footerLinks = {
  Services: [
    { label: "Tax Consulting", href: "/services" },
    { label: "Legal Advisory", href: "/services" },
    { label: "Finance & Accounting", href: "/services" },
    { label: "HR Services", href: "/hr-services" },
    { label: "Marketing", href: "/services" },
  ],
  Company: [
    { label: "About Us", href: "/about" },
    { label: "Our Team", href: "/about" },
    { label: "Careers", href: "/contact" },
    { label: "Contact", href: "/contact" },
  ],
};

export default function Footer() {
  return (
    <footer className="relative bg-black border-t border-white/5">
      {/* Red accent line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary to-transparent" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center text-white font-bold text-lg">
                A
              </div>
              <div>
                <span className="text-xl font-bold tracking-tight text-white">ADVIZEN</span>
                <span className="block text-[10px] uppercase tracking-[0.25em] text-white/30 -mt-1">
                  Consulting
                </span>
              </div>
            </div>
            <p className="text-white/40 text-sm leading-relaxed mb-6">
              Your trusted partner for expert business consulting in Uzbekistan.
              One-stop shop for all your business needs in Central Asia.
            </p>
            <div className="space-y-3">
              <a
                href="tel:+998334884888"
                className="flex items-center gap-3 text-sm text-white/40 hover:text-primary transition-colors"
              >
                <Phone className="w-4 h-4 text-primary" />
                +998 (33) 488 48 88
              </a>
              <a
                href="mailto:info@advizenco.com"
                className="flex items-center gap-3 text-sm text-white/40 hover:text-primary transition-colors"
              >
                <Mail className="w-4 h-4 text-primary" />
                info@advizenco.com
              </a>
              <div className="flex items-center gap-3 text-sm text-white/40">
                <MapPin className="w-4 h-4 text-primary shrink-0" />
                Tashkent, Uzbekistan
              </div>
            </div>
          </div>

          {/* Link Columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h3 className="font-semibold text-sm uppercase tracking-wider mb-6 text-white/60">
                {title}
              </h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-white/30 hover:text-primary transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Newsletter */}
          <div>
            <h3 className="font-semibold text-sm uppercase tracking-wider mb-6 text-white/60">
              Stay Updated
            </h3>
            <p className="text-sm text-white/30 mb-4">
              Get the latest insights on business consulting in Uzbekistan.
            </p>
            <form className="flex gap-2">
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 px-4 py-2.5 bg-white/5 border border-white/10 rounded-lg text-sm text-white placeholder:text-white/20 focus:outline-none focus:border-primary/50 focus:shadow-[0_0_15px_rgba(220,38,38,0.1)] transition-all"
              />
              <button
                type="submit"
                className="px-4 py-2.5 bg-primary text-white text-sm font-semibold rounded-lg hover:bg-primary-light transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-white/20">
            &copy; {new Date().getFullYear()} Advizen Consulting. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link href="#" className="text-sm text-white/20 hover:text-primary transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="text-sm text-white/20 hover:text-primary transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
