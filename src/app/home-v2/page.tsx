"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  Mail,
  Phone,
  Shield,
  Users,
  Lightbulb,
  Target,
  Handshake,
} from "lucide-react";
import Parallax from "@/components/Parallax";
import AnimatedSection, {
  StaggerContainer,
  StaggerItem,
} from "@/components/AnimatedSection";
import TextReveal, { RevealLine } from "@/components/TextReveal";
import MagneticButton from "@/components/MagneticButton";
import GlassCard from "@/components/GlassCard";
import CosmicParallaxBg from "@/components/CosmicParallaxBg";
import CategoryList from "@/components/CategoryList";
import ClientsBar from "@/components/ClientsBar";
import CountUp from "@/components/CountUp";
import AuroraBackground from "@/components/AuroraBackground";
import RadialOrbitalTimeline from "@/components/ui/radial-orbital-timeline";
import { servicesData } from "@/lib/services";

/* ── Data ──────────────────────────────────────────────── */

const firmValues = [
  {
    id: 1,
    title: "One-Stop Shop",
    date: "",
    content:
      "Tax, legal, finance, HR, and marketing — all under one roof. No need to juggle multiple firms. One partner, one point of contact, complete coverage.",
    category: "Core Value",
    icon: Target,
    relatedIds: [2, 3],
    status: "completed" as const,
    energy: 100,
  },
  {
    id: 2,
    title: "Client-First",
    date: "",
    content:
      "Every engagement is tailored to your business. We listen before we advise, and we measure our success by yours. Your goals become our mission.",
    category: "Philosophy",
    icon: Handshake,
    relatedIds: [1, 5],
    status: "completed" as const,
    energy: 95,
  },
  {
    id: 3,
    title: "Local Expertise",
    date: "",
    content:
      "Deep knowledge of Uzbekistan's regulatory landscape and Central Asian markets. We navigate the complexities so you can focus on growth.",
    category: "Advantage",
    icon: Lightbulb,
    relatedIds: [1, 4],
    status: "completed" as const,
    energy: 90,
  },
  {
    id: 4,
    title: "Trusted Team",
    date: "",
    content:
      "A multidisciplinary team of seasoned professionals across tax, law, finance, and consulting. Coordinated expertise, unified strategy.",
    category: "Strength",
    icon: Users,
    relatedIds: [3, 5],
    status: "completed" as const,
    energy: 85,
  },
  {
    id: 5,
    title: "Integrity",
    date: "",
    content:
      "Transparency and ethical standards are non-negotiable. We build relationships on trust, delivering honest counsel even when it&apos;s not the easiest path.",
    category: "Foundation",
    icon: Shield,
    relatedIds: [2, 4],
    status: "completed" as const,
    energy: 100,
  },
];

const stats = [
  { value: 8, suffix: "+", label: "Years in the Market" },
  { value: 6, suffix: "", label: "Practice Areas" },
  { value: 15, suffix: "+", label: "Industries Served" },
  { value: 3, suffix: "", label: "Languages" },
];

const disciplineNames = [
  "Tax Consulting",
  "Legal Advisory",
  "Finance & Accounting",
  "Human Resources",
  "Strategic Marketing",
  "Funding & Grants",
];

const publications = [
  {
    tag: "Tax Briefing",
    title: "Tax Landscape 2024\u20132025",
    desc: "Key changes in Uzbekistan's tax legislation and strategic implications for foreign investors.",
  },
  {
    tag: "HR Insight",
    title: "Employer of Record in Central Asia",
    desc: "How to establish talent presence without a local legal entity.",
  },
];

/* ── Helpers ────────────────────────────────────────────── */

function SectionDivider() {
  return (
    <div className="w-full max-w-7xl mx-auto h-px bg-gradient-to-r from-transparent via-white/15 to-transparent" />
  );
}

/* ── Page ───────────────────────────────────────────────── */

export default function HomeV2() {
  return (
    <>
      {/* ====== HERO ====== */}
      <CosmicParallaxBg className="relative h-screen">
        {/* Title */}
        <div className="absolute left-0 right-0 z-20 text-center top-[38%]">
          <h1 className="cosmic-title text-5xl md:text-7xl lg:text-8xl">
            ADVIZEN
          </h1>
        </div>

        {/* Subtitle + CTA */}
        <div className="absolute left-0 right-0 z-20 text-center px-6 top-[62%]">
          <p className="cosmic-subtitle text-base md:text-lg lg:text-xl mb-10">
            Strategic Advisory for Central Asia
          </p>
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <MagneticButton variant="primary" as="a" href="/contact">
              Schedule a consultation
              <ArrowRight className="w-4 h-4" />
            </MagneticButton>
            <MagneticButton variant="outline" as="a" href="/expertise">
              Our expertise
              <ArrowUpRight className="w-4 h-4" />
            </MagneticButton>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.5, duration: 1 }}
        >
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
            className="flex flex-col items-center gap-2"
          >
            <span className="text-[10px] uppercase tracking-[0.3em] text-white/25">
              Scroll
            </span>
            <div className="w-px h-6 bg-gradient-to-b from-white/25 to-transparent" />
          </motion.div>
        </motion.div>
      </CosmicParallaxBg>

      {/* ====== STATS — large format ====== */}
      <section className="py-16 md:py-20 bg-[#111111] border-y border-white/[0.06] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-white/[0.06]">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{
                  duration: 0.6,
                  delay: i * 0.1,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="text-center py-10 md:px-8 first:pt-10 last:pb-10"
              >
                <div className="font-serif text-5xl md:text-6xl lg:text-7xl font-extralight text-foreground tabular-nums leading-none">
                  <CountUp
                    target={stat.value}
                    suffix={stat.suffix}
                    triggerOnView
                    duration={1.6}
                  />
                </div>
                <p className="mt-4 text-[10px] md:text-xs uppercase tracking-[0.22em] text-white/40">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ====== CLIENTS ====== */}
      <ClientsBar />

      {/* ====== STATEMENT — large typography ====== */}
      <section className="py-28 md:py-40 bg-black relative overflow-hidden">
        <div className="ambient-glow ambient-glow-warm w-[900px] h-[900px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
        <div className="ambient-glow ambient-glow-oxblood w-[400px] h-[400px] -top-20 -left-10 opacity-25" />
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Large heading */}
            <AnimatedSection className="lg:col-span-8">
              <p className="tracking-luxury text-white/40 mb-8">The Firm</p>
              <TextReveal
                text="Built for Central Asia's most complex business environment"
                as="h2"
                mode="line"
                className="heading-luxury text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-foreground leading-[1.05]"
              />
            </AnimatedSection>

            {/* Right column */}
            <AnimatedSection delay={0.2} className="lg:col-span-4 lg:pt-24">
              <div className="space-y-6">
                <RevealLine>
                  <p className="text-white/55 leading-relaxed">
                    We combine deep local knowledge of Uzbekistan&apos;s
                    regulatory landscape with international professional
                    standards — delivering integrated advisory across tax,
                    legal, finance, HR, and marketing from a single point of
                    contact.
                  </p>
                </RevealLine>
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.3 }}
                >
                  <Link
                    href="/about"
                    className="group inline-flex items-center gap-2 text-sm text-white/50 hover:text-foreground transition-colors"
                  >
                    About the firm
                    <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </Link>
                </motion.div>
              </div>
            </AnimatedSection>
          </div>

          {/* Horizontal discipline groupings */}
          <AnimatedSection delay={0.3}>
            <div className="grid grid-cols-3 gap-px mt-20 pt-10 border-t border-white/[0.06]">
              {[
                {
                  num: "01 — 02",
                  label: "Advisory",
                  items: "Tax · Legal",
                },
                {
                  num: "03 — 04",
                  label: "Operations",
                  items: "Finance · HR",
                },
                {
                  num: "05 — 06",
                  label: "Growth",
                  items: "Marketing · Funding",
                },
              ].map((group) => (
                <div key={group.label} className="text-center px-4 py-4">
                  <span className="text-[10px] font-mono text-white/20 tracking-wider block mb-1">
                    {group.num}
                  </span>
                  <p className="text-[10px] uppercase tracking-[0.2em] text-white/35 mb-2">
                    {group.label}
                  </p>
                  <p className="text-sm text-white/55">{group.items}</p>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ====== DISCIPLINE MARQUEE BAND ====== */}
      <div
        className="py-4 bg-[#080808] border-y border-white/[0.04] overflow-hidden"
        aria-hidden="true"
      >
        <div className="relative flex overflow-hidden">
          {[0, 1].map((copy) => (
            <div
              key={copy}
              className="flex items-center gap-12 shrink-0 pr-12"
              style={{ animation: "marqueeScroll 24s linear infinite" }}
            >
              {disciplineNames.map((name) => (
                <span
                  key={name}
                  className="text-[10px] md:text-[11px] uppercase tracking-[0.35em] text-white/18 whitespace-nowrap"
                >
                  {name}
                  <span className="text-white/10 ml-12">·</span>
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* ====== EXPERTISE ====== */}
      <section className="py-28 md:py-36 bg-black relative overflow-hidden">
        <div className="ambient-glow ambient-glow-oxblood w-[500px] h-[500px] -top-20 -right-20 opacity-35" />
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
          <Parallax offset={20} fade>
            <AnimatedSection>
              <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
                <div>
                  <p className="tracking-luxury text-white/40 mb-4">
                    Our Expertise
                  </p>
                  <TextReveal
                    text="Integrated counsel, singular focus"
                    as="h2"
                    className="heading-luxury text-4xl md:text-5xl text-foreground"
                  />
                  <p className="mt-5 text-white/45 max-w-xl leading-relaxed">
                    Six disciplines working in concert &mdash; coordinated
                    around a shared view of your business.
                  </p>
                </div>
                <Link
                  href="/expertise"
                  className="group inline-flex items-center gap-2 text-sm text-white/50 hover:text-foreground transition-colors cursor-pointer"
                >
                  View all services
                  <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </Link>
              </div>
            </AnimatedSection>
          </Parallax>

          <CategoryList
            items={servicesData.map((s) => ({
              id: s.slug,
              title: s.title,
              subtitle: s.category,
              icon: <span className="text-xs font-mono">{s.num}</span>,
              href: `/expertise/${s.slug}`,
            }))}
          />
        </div>
      </section>

      <SectionDivider />

      {/* ====== VALUES — Orbital Timeline ====== */}
      <section className="py-20 md:py-28 bg-black relative overflow-hidden">
        <div className="ambient-glow ambient-glow-warm w-[800px] h-[800px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
        <div className="ambient-glow ambient-glow-oxblood w-[500px] h-[500px] -bottom-32 -left-32 opacity-40" />
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
            {/* Left — text */}
            <div>
              <AnimatedSection>
                <p className="tracking-luxury text-white/40 mb-4">The Firm</p>
                <TextReveal
                  text="What we stand for"
                  as="h2"
                  className="heading-luxury text-4xl md:text-5xl text-foreground leading-tight mb-6"
                />
              </AnimatedSection>
              <AnimatedSection delay={0.15}>
                <p className="text-white/50 leading-relaxed mb-4">
                  Advizen is a one-stop business advisory partner in
                  Uzbekistan &mdash; offering integrated consulting across
                  tax, legal, finance, HR, and marketing under a single point
                  of contact.
                </p>
                <p className="text-white/40 leading-relaxed mb-10">
                  We combine deep local expertise with international
                  standards, helping businesses navigate Central Asia&apos;s
                  regulatory landscape while focusing on growth.
                </p>
              </AnimatedSection>
              <AnimatedSection delay={0.3}>
                <p className="text-white/30 text-sm mb-8 italic">
                  Tap a node to explore our core values &rarr;
                </p>
                <MagneticButton variant="outline" as="a" href="/about">
                  About the firm
                  <ArrowRight className="w-4 h-4" />
                </MagneticButton>
              </AnimatedSection>
            </div>

            {/* Right — Orbital Timeline */}
            <div>
              <RadialOrbitalTimeline timelineData={firmValues} />
            </div>
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* ====== EDITORIAL QUOTE — dramatic ====== */}
      <section className="py-32 md:py-48 bg-black relative overflow-hidden">
        <div className="ambient-glow ambient-glow-warm w-[800px] h-[800px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
        <div className="ambient-glow ambient-glow-oxblood w-[400px] h-[400px] -top-16 -left-16 opacity-35" />
        <div className="max-w-5xl mx-auto px-6 lg:px-8 relative">
          <AnimatedSection>
            <div className="relative">
              {/* Enormous decorative opening mark */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 0.07 }}
                viewport={{ once: true }}
                transition={{ duration: 1.5 }}
                className="absolute -top-10 md:-top-16 -left-2 md:-left-6 font-serif leading-none text-foreground select-none pointer-events-none"
                style={{ fontSize: "clamp(8rem, 20vw, 22rem)" }}
                aria-hidden="true"
              >
                &ldquo;
              </motion.div>

              <blockquote className="relative pl-2">
                <p className="font-serif text-3xl md:text-5xl lg:text-6xl text-foreground leading-[1.18] font-light italic">
                  One partner, one point of contact&nbsp;&mdash; complete
                  coverage for your entire operation.
                </p>
                <cite className="block mt-10 tracking-luxury text-white/35 not-italic">
                  The Advizen Promise
                </cite>
              </blockquote>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <SectionDivider />

      {/* ====== LIBRARY — asymmetric layout ====== */}
      <section className="py-28 md:py-36 bg-black relative overflow-hidden">
        <div className="ambient-glow ambient-glow-oxblood w-[500px] h-[500px] -bottom-20 -right-20 opacity-35" />
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
          <Parallax offset={20} fade>
            <AnimatedSection>
              <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
                <div>
                  <p className="tracking-luxury text-white/40 mb-4">
                    The Library
                  </p>
                  <TextReveal
                    text="Knowledge & publications"
                    as="h2"
                    className="heading-luxury text-4xl md:text-5xl text-foreground"
                  />
                </div>
                <Link
                  href="/library"
                  className="group inline-flex items-center gap-2 text-sm text-white/50 hover:text-foreground transition-colors cursor-pointer"
                >
                  Browse all
                  <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </Link>
              </div>
            </AnimatedSection>
          </Parallax>

          {/* Asymmetric: featured large + 2 stacked */}
          <div className="grid lg:grid-cols-5 gap-6">
            <AnimatedSection className="lg:col-span-3">
              <Link
                href="/library"
                className="group block h-full cursor-pointer"
              >
                <GlassCard className="p-10 md:p-12 h-full flex flex-col">
                  <p className="tracking-luxury text-primary mb-6">
                    Flagship Guide
                  </p>
                  <h3 className="font-serif text-2xl md:text-3xl leading-snug glow-card-title mb-4">
                    Doing Business in Uzbekistan
                  </h3>
                  <p className="text-sm leading-relaxed flex-1 glow-card-desc max-w-lg">
                    A comprehensive guide to market entry, regulatory
                    frameworks, and operational best practices for companies
                    expanding into Uzbekistan and Central Asia.
                  </p>
                  <div className="mt-8 pt-6 border-t border-white/[0.06] flex items-center justify-between">
                    <span className="text-xs text-white/30 uppercase tracking-wider">
                      Read the guide
                    </span>
                    <ArrowUpRight className="w-4 h-4 text-white/30 group-hover:text-primary transition-colors" />
                  </div>
                </GlassCard>
              </Link>
            </AnimatedSection>

            <div className="lg:col-span-2 flex flex-col gap-6">
              {publications.map((pub, i) => (
                <AnimatedSection key={pub.title} delay={0.1 + i * 0.08}>
                  <Link
                    href="/library"
                    className="group block h-full cursor-pointer"
                  >
                    <GlassCard className="p-8 h-full flex flex-col">
                      <p className="tracking-luxury text-primary mb-4">
                        {pub.tag}
                      </p>
                      <h3 className="font-serif text-lg leading-snug glow-card-title mb-2">
                        {pub.title}
                      </h3>
                      <p className="text-sm leading-relaxed flex-1 glow-card-desc">
                        {pub.desc}
                      </p>
                      <div className="mt-6 pt-4 border-t border-white/[0.06] flex items-center justify-between">
                        <span className="text-xs text-white/30 uppercase tracking-wider">
                          Read more
                        </span>
                        <ArrowUpRight className="w-4 h-4 text-white/30 group-hover:text-primary transition-colors" />
                      </div>
                    </GlassCard>
                  </Link>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ====== CTA — Aurora for visual variety ====== */}
      <AuroraBackground>
        <section className="py-32 md:py-44 relative">
          <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center relative">
            <AnimatedSection>
              {/* Decorative watermark */}
              <motion.span
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 0.025 }}
                viewport={{ once: true }}
                transition={{ duration: 2 }}
                className="absolute -top-16 left-1/2 -translate-x-1/2 font-serif text-[18rem] md:text-[26rem] leading-none text-foreground select-none pointer-events-none"
                aria-hidden="true"
              >
                &#10022;
              </motion.span>

              <p className="tracking-luxury text-white/50 mb-6">Next Step</p>
              <TextReveal
                text="Begin your next chapter"
                as="h2"
                className="heading-luxury text-3xl md:text-5xl lg:text-6xl text-foreground mb-6"
              />
              <p className="text-lg text-white/55 max-w-xl mx-auto mb-12 leading-relaxed">
                Whether entering Uzbekistan or scaling existing operations,
                our team brings the integrated expertise your business needs.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <MagneticButton variant="primary" as="a" href="/contact">
                  Schedule a consultation
                  <ArrowRight className="w-4 h-4" />
                </MagneticButton>
                <MagneticButton variant="outline" as="a" href="/expertise">
                  Explore our expertise
                  <ArrowUpRight className="w-4 h-4" />
                </MagneticButton>
              </div>

              {/* Direct contact */}
              <div className="mt-14 pt-10 border-t border-white/[0.06] flex flex-col sm:flex-row items-center justify-center gap-8 sm:gap-12">
                <a
                  href="mailto:info@advizenco.com"
                  className="group inline-flex items-center gap-3 text-sm text-white/50 hover:text-foreground transition-colors"
                >
                  <Mail className="w-4 h-4 text-white/40 group-hover:text-primary-light transition-colors" />
                  info@advizenco.com
                </a>
                <a
                  href="tel:+998334884888"
                  className="group inline-flex items-center gap-3 text-sm text-white/50 hover:text-foreground transition-colors"
                >
                  <Phone className="w-4 h-4 text-white/40 group-hover:text-primary-light transition-colors" />
                  +998 33 488 4888
                </a>
              </div>
            </AnimatedSection>
          </div>
        </section>
      </AuroraBackground>
    </>
  );
}
