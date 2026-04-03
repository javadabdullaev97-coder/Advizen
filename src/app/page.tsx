"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import AnimatedSection, {
  FadeIn,
  HorizontalLine,
  StaggerContainer,
  StaggerItem,
} from "@/components/AnimatedSection";

const services = [
  { title: "Tax Consulting", num: "01" },
  { title: "Legal Advisory", num: "02" },
  { title: "Finance & Accounting", num: "03" },
  { title: "Human Resources", num: "04" },
  { title: "Marketing & SMM", num: "05" },
  { title: "Funding & Grants", num: "06" },
];

const stats = [
  { value: "8+", label: "Years" },
  { value: "50+", label: "Clients" },
  { value: "70+", label: "Projects" },
  { value: "15+", label: "Industries" },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-screen flex items-end pb-24 md:pb-32 overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-[#0D0D0D]" />
        {/* Subtle geometric accent */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.04 }}
          transition={{ duration: 3 }}
          className="absolute top-0 right-0 w-[600px] h-[600px]"
        >
          <div className="absolute inset-0 border border-primary/20 rounded-full" />
          <div className="absolute inset-12 border border-primary/15 rounded-full" />
          <div className="absolute inset-24 border border-primary/10 rounded-full" />
        </motion.div>
        {/* Oxblood glow */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2, delay: 0.5 }}
          className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-primary/8 rounded-full blur-[200px]"
        />

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 w-full">
          <div className="max-w-4xl">
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="tracking-luxury text-muted mb-8"
            >
              Premier Advisory &middot; Uzbekistan
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="heading-luxury text-5xl md:text-7xl lg:text-[5.5rem] text-foreground leading-[1.08] mb-8"
            >
              Counsel for
              <br />
              businesses that
              <br />
              <span className="text-primary-light">shape markets</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="text-lg md:text-xl text-muted max-w-xl leading-relaxed mb-12"
            >
              Integrated tax, legal, finance, and human capital advisory.
              One firm, one point of contact, across Central Asia.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link
                href="/contact"
                className="group inline-flex items-center gap-3 px-8 py-4 bg-primary text-foreground text-sm uppercase tracking-[0.12em] font-medium hover:bg-primary-light transition-all duration-300 cursor-pointer"
              >
                Begin a conversation
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/expertise"
                className="inline-flex items-center gap-3 px-8 py-4 border border-border text-sm uppercase tracking-[0.12em] font-medium text-muted hover:text-foreground hover:border-foreground/30 transition-all duration-300 cursor-pointer"
              >
                View expertise
              </Link>
            </motion.div>
          </div>

          {/* Stats row */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.3 }}
            className="mt-20 pt-8 border-t border-border flex gap-12 md:gap-16"
          >
            {stats.map((stat) => (
              <div key={stat.label}>
                <span className="text-2xl md:text-3xl font-serif text-foreground">
                  {stat.value}
                </span>
                <span className="block text-xs text-muted-dark uppercase tracking-widest mt-1">
                  {stat.label}
                </span>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Expertise Preview */}
      <section className="py-28 md:py-36 bg-surface">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <AnimatedSection>
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
              <div>
                <p className="tracking-luxury text-muted-dark mb-4">Our Expertise</p>
                <h2 className="heading-luxury text-4xl md:text-5xl text-foreground">
                  Integrated counsel,
                  <br />
                  singular focus
                </h2>
              </div>
              <Link
                href="/expertise"
                className="group inline-flex items-center gap-2 text-sm text-muted hover:text-foreground transition-colors cursor-pointer"
              >
                View all services
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </Link>
            </div>
          </AnimatedSection>

          <HorizontalLine className="mb-0" />

          <div>
            {services.map((service) => (
              <AnimatedSection key={service.num}>
                <Link href="/expertise" className="group block cursor-pointer">
                  <div className="flex items-center justify-between py-7 border-b border-border hover:border-primary/30 transition-colors">
                    <div className="flex items-center gap-8">
                      <span className="text-xs text-muted-dark font-mono w-6">
                        {service.num}
                      </span>
                      <h3 className="text-xl md:text-2xl text-foreground/80 group-hover:text-foreground transition-colors tracking-wide">
                        {service.title}
                      </h3>
                    </div>
                    <ArrowUpRight className="w-5 h-5 text-muted-dark group-hover:text-primary transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>
                </Link>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-28 md:py-36 bg-background">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
            <AnimatedSection>
              <p className="tracking-luxury text-muted-dark mb-4">The Firm</p>
              <h2 className="heading-luxury text-4xl md:text-5xl text-foreground leading-tight mb-8">
                A tradition of
                <br />
                precision &amp; trust
              </h2>
              <p className="text-muted leading-relaxed mb-6">
                Founded in 2016, Advizen Consulting has grown into one of
                Uzbekistan&apos;s most trusted integrated advisory firms. We serve as
                the single point of contact for businesses navigating the
                complexities of Central Asian markets.
              </p>
              <p className="text-muted leading-relaxed mb-10">
                Our multidisciplinary approach ensures that every aspect of your
                business — from tax and compliance to talent and brand — receives
                coordinated, expert attention.
              </p>
              <Link
                href="/about"
                className="group inline-flex items-center gap-2 text-sm uppercase tracking-[0.12em] text-foreground hover:text-primary transition-colors cursor-pointer"
              >
                About the firm
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <div className="border border-border p-10 md:p-14">
                <blockquote className="font-serif text-2xl md:text-3xl text-foreground/90 leading-relaxed italic mb-8">
                  &ldquo;We don&apos;t just advise — we integrate into the fabric
                  of your operations.&rdquo;
                </blockquote>
                <div className="w-12 h-px bg-primary mb-4" />
                <p className="tracking-luxury text-muted-dark">
                  Advizen Consulting
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Library Preview */}
      <section className="py-28 md:py-36 bg-surface border-t border-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <AnimatedSection>
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
              <div>
                <p className="tracking-luxury text-muted-dark mb-4">
                  The Library
                </p>
                <h2 className="heading-luxury text-4xl md:text-5xl text-foreground">
                  Knowledge &amp; publications
                </h2>
              </div>
              <Link
                href="/library"
                className="group inline-flex items-center gap-2 text-sm text-muted hover:text-foreground transition-colors cursor-pointer"
              >
                Browse all
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </Link>
            </div>
          </AnimatedSection>

          <StaggerContainer className="grid md:grid-cols-3 gap-6">
            {[
              {
                tag: "Flagship Guide",
                title: "Doing Business in Uzbekistan",
                desc: "A comprehensive guide to market entry, regulatory frameworks, and operational best practices in Uzbekistan.",
              },
              {
                tag: "Tax Briefing",
                title: "Tax Landscape 2024–2025",
                desc: "Key changes in Uzbekistan's tax legislation and strategic implications for foreign investors.",
              },
              {
                tag: "HR Insight",
                title: "Employer of Record in Central Asia",
                desc: "How foreign companies can establish talent presence without a local legal entity.",
              },
            ].map((pub) => (
              <StaggerItem key={pub.title}>
                <Link href="/library" className="group block h-full cursor-pointer">
                  <article className="border border-border p-8 h-full flex flex-col hover:border-primary/30 transition-all duration-300">
                    <p className="tracking-luxury text-primary mb-4">{pub.tag}</p>
                    <h3 className="font-serif text-xl text-foreground mb-4 group-hover:text-primary-light transition-colors leading-snug">
                      {pub.title}
                    </h3>
                    <p className="text-sm text-muted leading-relaxed flex-1">
                      {pub.desc}
                    </p>
                    <div className="mt-6 pt-6 border-t border-border flex items-center justify-between">
                      <span className="text-xs text-muted-dark uppercase tracking-wider">
                        Read more
                      </span>
                      <ArrowUpRight className="w-4 h-4 text-muted-dark group-hover:text-primary transition-colors" />
                    </div>
                  </article>
                </Link>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* CTA */}
      <section className="py-28 md:py-36 bg-background relative overflow-hidden">
        {/* Oxblood glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-primary/6 rounded-full blur-[180px]" />

        <div className="relative max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <AnimatedSection>
            <p className="tracking-luxury text-muted-dark mb-6">
              Next Step
            </p>
            <h2 className="heading-luxury text-4xl md:text-6xl text-foreground mb-6">
              Ready to begin?
            </h2>
            <p className="text-lg text-muted max-w-xl mx-auto mb-12 leading-relaxed">
              Whether you are entering Uzbekistan or expanding operations across
              Central Asia, our team is prepared to advise.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="group inline-flex items-center justify-center gap-3 px-10 py-4 bg-primary text-foreground text-sm uppercase tracking-[0.12em] font-medium hover:bg-primary-light transition-all duration-300 cursor-pointer"
              >
                Schedule a consultation
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <a
                href="tel:+998334884888"
                className="inline-flex items-center justify-center gap-3 px-10 py-4 border border-border text-sm uppercase tracking-[0.12em] text-muted hover:text-foreground hover:border-foreground/30 transition-all duration-300 cursor-pointer"
              >
                +998 (33) 488 48 88
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
