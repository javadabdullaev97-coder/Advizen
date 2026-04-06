"use client";

import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react";
import AnimatedSection, {
  StaggerContainer,
  StaggerItem,
} from "@/components/AnimatedSection";
import TextReveal, { RevealLine } from "@/components/TextReveal";
import MagneticButton from "@/components/MagneticButton";
import GlassCard from "@/components/GlassCard";
import AuroraBackground from "@/components/AuroraBackground";

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
      <AuroraBackground>
        <section className="relative pt-36 pb-24 md:pt-44 md:pb-32">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="tracking-luxury text-muted-dark mb-6"
            >
              Contact
            </motion.p>
            <TextReveal
              text="Begin a conversation"
              as="h1"
              mode="line"
              className="heading-luxury text-5xl md:text-7xl text-foreground leading-[1.08] max-w-3xl"
              delay={0.3}
            />
            <RevealLine delay={0.6}>
              <p className="text-lg text-muted max-w-2xl mt-8 leading-relaxed">
                Every engagement starts with understanding. Reach out and our team
                will respond within 24 hours.
              </p>
            </RevealLine>
          </div>
        </section>
      </AuroraBackground>

      {/* Contact Info Bar */}
      <section className="bg-surface border-y border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <StaggerContainer className="grid grid-cols-2 md:grid-cols-4 gap-0 divide-x divide-white/[0.06]">
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
              <TextReveal
                text="Send us a message"
                as="h2"
                className="heading-luxury text-3xl md:text-4xl text-foreground mb-10"
              />

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
                      className="w-full px-0 py-3 bg-transparent border-b border-white/[0.08] text-foreground placeholder:text-muted-dark focus:outline-none focus:border-primary transition-colors"
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
                      className="w-full px-0 py-3 bg-transparent border-b border-white/[0.08] text-foreground placeholder:text-muted-dark focus:outline-none focus:border-primary transition-colors"
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
                    className="w-full px-0 py-3 bg-transparent border-b border-white/[0.08] text-foreground placeholder:text-muted-dark focus:outline-none focus:border-primary transition-colors"
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
                    className="w-full px-0 py-3 bg-transparent border-b border-white/[0.08] text-foreground placeholder:text-muted-dark focus:outline-none focus:border-primary transition-colors"
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
                    className="w-full px-0 py-3 bg-transparent border-b border-white/[0.08] text-foreground focus:outline-none focus:border-primary transition-colors cursor-pointer"
                  >
                    <option value="" className="bg-surface">Select a service</option>
                    <option value="tax" className="bg-surface">Tax Consulting</option>
                    <option value="legal" className="bg-surface">Legal Advisory</option>
                    <option value="finance" className="bg-surface">Finance &amp; Accounting</option>
                    <option value="hr" className="bg-surface">Human Resources</option>
                    <option value="marketing" className="bg-surface">Strategic Marketing</option>
                    <option value="funding" className="bg-surface">Funding &amp; Grants</option>
                    <option value="other" className="bg-surface">Other</option>
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
                    className="w-full px-0 py-3 bg-transparent border-b border-white/[0.08] text-foreground placeholder:text-muted-dark focus:outline-none focus:border-primary transition-colors resize-none"
                    placeholder="Tell us about your project or question..."
                  />
                </div>

                <div className="mt-4">
                  <MagneticButton variant="primary" type="submit">
                    <Send className="w-4 h-4" />
                    Send message
                  </MagneticButton>
                </div>
              </form>
            </AnimatedSection>

            {/* Sidebar */}
            <AnimatedSection delay={0.2} className="lg:col-span-5">
              <GlassCard className="p-10 md:p-12 mb-8" hover={false}>
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
                      className="flex gap-4 pb-6 border-b border-white/[0.06] last:border-0 last:pb-0"
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
              </GlassCard>

              {/* Location card */}
              <GlassCard className="p-10" hover={false}>
                <div className="flex items-center gap-3 mb-6">
                  <MapPin className="w-5 h-5 text-primary" />
                  <p className="tracking-luxury text-muted-dark">Our Office</p>
                </div>
                <p className="text-foreground mb-2">Tashkent, Uzbekistan</p>
                <p className="text-sm text-muted leading-relaxed">
                  Located in the heart of Tashkent, serving businesses across
                  Uzbekistan and the broader Central Asian region.
                </p>
              </GlassCard>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </>
  );
}
