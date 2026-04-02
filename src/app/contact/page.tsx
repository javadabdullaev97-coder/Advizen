"use client";

import { Phone, Mail, MapPin, Clock, Send, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import AnimatedSection, { StaggerContainer, StaggerItem } from "@/components/AnimatedSection";

const contactInfo = [
  {
    icon: Phone,
    title: "Phone",
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
    title: "Working Hours",
    value: "Mon - Fri, 9:00 - 18:00",
    href: undefined,
  },
];

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 bg-black overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-40" />
        <motion.div
          animate={{ scale: [1, 1.3, 1], opacity: [0.1, 0.2, 0.1] }}
          transition={{ duration: 10, repeat: Infinity }}
          className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-primary/20 rounded-full blur-[150px]"
        />
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
          <AnimatedSection>
            <span className="text-sm font-semibold text-primary uppercase tracking-widest">
              Get in Touch
            </span>
            <h1 className="text-5xl md:text-7xl font-bold text-white mt-4 mb-6 max-w-3xl leading-tight">
              Let&apos;s Start a
              <br />
              <span className="text-shimmer">Conversation</span>
            </h1>
            <p className="text-lg text-white/40 max-w-2xl leading-relaxed">
              Have a question or ready to get started? We&apos;d love to hear from
              you. Reach out and our team will respond within 24 hours.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Contact Cards */}
      <section className="relative -mt-12 z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <StaggerContainer className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {contactInfo.map((item) => (
            <StaggerItem key={item.title}>
              <div className="bg-card-bg rounded-2xl p-6 border border-white/5 text-center card-hover glow-border">
                <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-sm font-semibold text-white mb-1">
                  {item.title}
                </h3>
                {item.href ? (
                  <a
                    href={item.href}
                    className="text-sm text-white/40 hover:text-primary transition-colors"
                  >
                    {item.value}
                  </a>
                ) : (
                  <p className="text-sm text-white/40">{item.value}</p>
                )}
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </section>

      {/* Contact Form + Info */}
      <section className="py-24 md:py-32 bg-section-bg border-y border-white/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Form */}
            <AnimatedSection direction="left">
              <div className="bg-card-bg rounded-3xl border border-white/5 p-8 md:p-10 glow-border">
                <h2 className="text-2xl font-bold text-white mb-2">
                  Send Us a Message
                </h2>
                <p className="text-white/30 text-sm mb-8">
                  Fill out the form below and we&apos;ll get back to you as soon as
                  possible.
                </p>

                <form className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium text-white/60 mb-2">
                        First Name
                      </label>
                      <input
                        type="text"
                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-sm text-white placeholder:text-white/20 focus:outline-none focus:border-primary/50 focus:shadow-[0_0_20px_rgba(220,38,38,0.1)] transition-all"
                        placeholder="John"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-white/60 mb-2">
                        Last Name
                      </label>
                      <input
                        type="text"
                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-sm text-white placeholder:text-white/20 focus:outline-none focus:border-primary/50 focus:shadow-[0_0_20px_rgba(220,38,38,0.1)] transition-all"
                        placeholder="Doe"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-white/60 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-sm text-white placeholder:text-white/20 focus:outline-none focus:border-primary/50 focus:shadow-[0_0_20px_rgba(220,38,38,0.1)] transition-all"
                      placeholder="john@company.com"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-white/60 mb-2">
                      Company
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-sm text-white placeholder:text-white/20 focus:outline-none focus:border-primary/50 focus:shadow-[0_0_20px_rgba(220,38,38,0.1)] transition-all"
                      placeholder="Your company name"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-white/60 mb-2">
                      Service Interested In
                    </label>
                    <select className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-sm text-white/60 focus:outline-none focus:border-primary/50 focus:shadow-[0_0_20px_rgba(220,38,38,0.1)] transition-all">
                      <option value="" className="bg-[#1a1a1a]">Select a service</option>
                      <option value="legal" className="bg-[#1a1a1a]">Legal Advisory</option>
                      <option value="tax" className="bg-[#1a1a1a]">Tax Consulting</option>
                      <option value="finance" className="bg-[#1a1a1a]">Finance & Accounting</option>
                      <option value="hr" className="bg-[#1a1a1a]">HR Services</option>
                      <option value="marketing" className="bg-[#1a1a1a]">Marketing & SMM</option>
                      <option value="funding" className="bg-[#1a1a1a]">Funding & Grants</option>
                      <option value="other" className="bg-[#1a1a1a]">Other</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-white/60 mb-2">
                      Message
                    </label>
                    <textarea
                      rows={4}
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-sm text-white placeholder:text-white/20 focus:outline-none focus:border-primary/50 focus:shadow-[0_0_20px_rgba(220,38,38,0.1)] transition-all resize-none"
                      placeholder="Tell us about your project or question..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="group w-full inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary text-white font-semibold rounded-xl hover:bg-primary-light transition-all shadow-lg shadow-primary/20 hover:shadow-primary/40"
                  >
                    <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    Send Message
                  </button>
                </form>
              </div>
            </AnimatedSection>

            {/* Info Side */}
            <AnimatedSection delay={0.15} direction="right">
              <div className="space-y-8">
                {/* Why Contact Us */}
                <div className="relative bg-gradient-to-br from-[#1a1a1a] to-[#111] rounded-3xl p-8 md:p-10 border border-white/5 overflow-hidden">
                  <div className="absolute -top-1 -left-1 w-12 h-12 border-t-2 border-l-2 border-primary/30 rounded-tl-3xl" />
                  <div className="absolute -bottom-1 -right-1 w-12 h-12 border-b-2 border-r-2 border-primary/30 rounded-br-3xl" />
                  <motion.div
                    animate={{ opacity: [0.5, 1, 0.5] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="absolute top-6 right-6 w-2 h-2 bg-primary rounded-full"
                  />

                  <h3 className="text-xl font-bold text-white mb-6">
                    Why Work With Advizen?
                  </h3>
                  <div className="space-y-4">
                    {[
                      "Free initial consultation to understand your needs",
                      "Response within 24 hours guaranteed",
                      "Single point of contact for all services",
                      "8+ years of experience in the Uzbek market",
                      "Flexible engagement models",
                    ].map((item) => (
                      <div key={item} className="flex items-start gap-3 group">
                        <ArrowRight className="w-4 h-4 text-primary shrink-0 mt-1 group-hover:translate-x-1 transition-transform" />
                        <span className="text-sm text-white/50 group-hover:text-white/70 transition-colors">
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Map placeholder */}
                <div className="bg-card-bg rounded-3xl border border-white/5 overflow-hidden glow-border">
                  <div className="bg-black/40 h-64 flex items-center justify-center relative">
                    <div className="absolute inset-0 grid-bg opacity-60" />
                    <div className="relative text-center">
                      <motion.div
                        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
                        transition={{ duration: 3, repeat: Infinity }}
                        className="w-20 h-20 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center mx-auto mb-3"
                      >
                        <MapPin className="w-8 h-8 text-primary" />
                      </motion.div>
                      <p className="text-sm font-semibold text-white">
                        Tashkent, Uzbekistan
                      </p>
                      <p className="text-xs text-white/30 mt-1">Central Asia</p>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="font-semibold text-white mb-1">Our Office</h3>
                    <p className="text-sm text-white/30">
                      Located in the heart of Tashkent, serving businesses across
                      Uzbekistan and Central Asia.
                    </p>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </>
  );
}
