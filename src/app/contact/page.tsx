"use client";

import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock, Send, ArrowRight } from "lucide-react";
import AnimatedSection, {
  StaggerContainer,
  StaggerItem,
} from "@/components/AnimatedSection";

const contactInfo = [
  {
    icon: Phone,
    title: "Telephone",
    value: "+998 (33) 488 48 88",
    href: "tel:+998334884888",
  },
  {
    icon: Mail,
    title: "Email",
    value: "info@advizenco.com",
    href: "mailto:info@advizenco.com",
  },
  {
    icon: MapPin,
    title: "Office",
    value: "Tashkent, Uzbekistan",
    href: undefined,
  },
  {
    icon: Clock,
    title: "Hours",
    value: "Mon – Fri, 9:00 – 18:00",
    href: undefined,
  },
];

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-36 pb-24 md:pt-44 md:pb-32 bg-background overflow-hidden">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.05 }}
          transition={{ duration: 3 }}
          className="absolute bottom-0 left-1/3 w-[500px] h-[500px] bg-primary rounded-full blur-[200px]"
        />
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
          <AnimatedSection>
            <p className="tracking-luxury text-muted-dark mb-6">Contact</p>
            <h1 className="heading-luxury text-5xl md:text-7xl text-foreground leading-[1.08] max-w-3xl">
              Begin a
              <br />
              <span className="text-primary-light">conversation</span>
            </h1>
            <p className="text-lg text-muted max-w-2xl mt-8 leading-relaxed">
              Every engagement starts with understanding. Reach out and our team
              will respond within 24 hours.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Contact Info Bar */}
      <section className="bg-surface border-y border-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <StaggerContainer className="grid grid-cols-2 md:grid-cols-4 gap-0 divide-x divide-border">
            {contactInfo.map((item) => (
              <StaggerItem key={item.title}>
                <div className="py-8 px-6 text-center">
                  <item.icon className="w-5 h-5 text-primary mx-auto mb-3" />
                  <p className="tracking-luxury text-muted-dark mb-2">
                    {item.title}
                  </p>
                  {item.href ? (
                    <a
                      href={item.href}
                      className="text-sm text-foreground/80 hover:text-primary transition-colors cursor-pointer"
                    >
                      {item.value}
                    </a>
                  ) : (
                    <p className="text-sm text-foreground/80">{item.value}</p>
                  )}
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Form + Sidebar */}
      <section className="py-24 md:py-32 bg-background">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-16">
            {/* Form */}
            <AnimatedSection className="lg:col-span-7">
              <p className="tracking-luxury text-muted-dark mb-4">Inquiry</p>
              <h2 className="heading-luxury text-3xl md:text-4xl text-foreground mb-10">
                Send us a message
              </h2>

              <form className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="firstName"
                      className="block text-xs uppercase tracking-widest text-muted-dark mb-3"
                    >
                      First Name
                    </label>
                    <input
                      id="firstName"
                      type="text"
                      className="w-full px-0 py-3 bg-transparent border-b border-border text-foreground placeholder:text-muted-dark focus:outline-none focus:border-primary transition-colors"
                      placeholder="John"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="lastName"
                      className="block text-xs uppercase tracking-widest text-muted-dark mb-3"
                    >
                      Last Name
                    </label>
                    <input
                      id="lastName"
                      type="text"
                      className="w-full px-0 py-3 bg-transparent border-b border-border text-foreground placeholder:text-muted-dark focus:outline-none focus:border-primary transition-colors"
                      placeholder="Doe"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-xs uppercase tracking-widest text-muted-dark mb-3"
                  >
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    className="w-full px-0 py-3 bg-transparent border-b border-border text-foreground placeholder:text-muted-dark focus:outline-none focus:border-primary transition-colors"
                    placeholder="john@company.com"
                  />
                </div>

                <div>
                  <label
                    htmlFor="company"
                    className="block text-xs uppercase tracking-widest text-muted-dark mb-3"
                  >
                    Company
                  </label>
                  <input
                    id="company"
                    type="text"
                    className="w-full px-0 py-3 bg-transparent border-b border-border text-foreground placeholder:text-muted-dark focus:outline-none focus:border-primary transition-colors"
                    placeholder="Company name"
                  />
                </div>

                <div>
                  <label
                    htmlFor="service"
                    className="block text-xs uppercase tracking-widest text-muted-dark mb-3"
                  >
                    Area of Interest
                  </label>
                  <select
                    id="service"
                    className="w-full px-0 py-3 bg-transparent border-b border-border text-foreground focus:outline-none focus:border-primary transition-colors cursor-pointer"
                  >
                    <option value="" className="bg-surface">
                      Select a service
                    </option>
                    <option value="tax" className="bg-surface">
                      Tax Consulting
                    </option>
                    <option value="legal" className="bg-surface">
                      Legal Advisory
                    </option>
                    <option value="finance" className="bg-surface">
                      Finance &amp; Accounting
                    </option>
                    <option value="hr" className="bg-surface">
                      Human Resources
                    </option>
                    <option value="marketing" className="bg-surface">
                      Marketing &amp; SMM
                    </option>
                    <option value="funding" className="bg-surface">
                      Funding &amp; Grants
                    </option>
                    <option value="other" className="bg-surface">
                      Other
                    </option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-xs uppercase tracking-widest text-muted-dark mb-3"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    className="w-full px-0 py-3 bg-transparent border-b border-border text-foreground placeholder:text-muted-dark focus:outline-none focus:border-primary transition-colors resize-none"
                    placeholder="Tell us about your project or question..."
                  />
                </div>

                <button
                  type="submit"
                  className="group inline-flex items-center gap-3 px-10 py-4 bg-primary text-foreground text-sm uppercase tracking-[0.12em] font-medium hover:bg-primary-light transition-all duration-300 mt-4 cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  Send message
                </button>
              </form>
            </AnimatedSection>

            {/* Sidebar */}
            <AnimatedSection delay={0.2} className="lg:col-span-5">
              <div className="border border-border p-10 md:p-12 mb-8">
                <p className="tracking-luxury text-muted-dark mb-6">
                  What to Expect
                </p>
                <div className="space-y-6">
                  {[
                    {
                      num: "01",
                      title: "Initial response",
                      text: "Within 24 hours of your inquiry.",
                    },
                    {
                      num: "02",
                      title: "Discovery call",
                      text: "A 30-minute consultation to understand your needs.",
                    },
                    {
                      num: "03",
                      title: "Tailored proposal",
                      text: "A detailed scope of work and engagement structure.",
                    },
                    {
                      num: "04",
                      title: "Engagement begins",
                      text: "Dedicated team assigned to your account.",
                    },
                  ].map((step) => (
                    <div
                      key={step.num}
                      className="flex gap-4 pb-6 border-b border-border last:border-0 last:pb-0"
                    >
                      <span className="text-xs font-mono text-primary mt-0.5">
                        {step.num}
                      </span>
                      <div>
                        <h4 className="text-sm font-medium text-foreground mb-1">
                          {step.title}
                        </h4>
                        <p className="text-sm text-muted">{step.text}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Location card */}
              <div className="border border-border p-10">
                <div className="flex items-center gap-3 mb-6">
                  <MapPin className="w-5 h-5 text-primary" />
                  <p className="tracking-luxury text-muted-dark">
                    Our Office
                  </p>
                </div>
                <p className="text-foreground mb-2">Tashkent, Uzbekistan</p>
                <p className="text-sm text-muted leading-relaxed">
                  Located in the heart of Tashkent, serving businesses across
                  Uzbekistan and the broader Central Asian region.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </>
  );
}
