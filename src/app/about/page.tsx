"use client";

import {
  Target,
  Eye,
  Heart,
  Users,
  Globe,
  Shield,
  Lightbulb,
  Handshake,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import AnimatedSection, { StaggerContainer, StaggerItem } from "@/components/AnimatedSection";

const values = [
  {
    icon: Shield,
    title: "Integrity",
    description: "We uphold the highest standards of honesty and transparency in every engagement.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description: "We bring modern, creative solutions to complex business challenges.",
  },
  {
    icon: Handshake,
    title: "Partnership",
    description: "We build lasting relationships and treat your business as our own.",
  },
  {
    icon: Users,
    title: "Expertise",
    description: "Our team of specialists brings deep knowledge across every business domain.",
  },
  {
    icon: Globe,
    title: "Local Insight",
    description: "Deep understanding of Uzbekistan's regulatory and business landscape.",
  },
  {
    icon: Heart,
    title: "Client First",
    description: "Every decision we make is guided by what's best for our clients.",
  },
];

const timeline = [
  { year: "2016", event: "Founded in Tashkent with a vision to simplify business consulting" },
  { year: "2018", event: "Expanded services to include full HR and marketing solutions" },
  { year: "2020", event: "Reached 30+ active clients across multiple industries" },
  { year: "2022", event: "Launched Employer of Record (EOR) services for foreign companies" },
  { year: "2024", event: "Surpassed 70+ completed projects and 50+ satisfied clients" },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 bg-black overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-40" />
        <motion.div
          animate={{ scale: [1, 1.3, 1], opacity: [0.1, 0.2, 0.1] }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute top-1/3 -right-32 w-96 h-96 bg-primary/20 rounded-full blur-[150px]"
        />
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
          <AnimatedSection>
            <span className="text-sm font-semibold text-primary uppercase tracking-widest">
              About Advizen
            </span>
            <h1 className="text-5xl md:text-7xl font-bold text-white mt-4 mb-6 max-w-3xl leading-tight">
              Your Go-To Team
              <br />
              <span className="text-white/30">in Central Asia</span>
            </h1>
            <p className="text-lg text-white/40 max-w-2xl leading-relaxed">
              We bring all our specialized services together, offering one point of
              contact and seamless support for everything your business needs.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 md:py-32 bg-section-bg border-y border-white/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            <AnimatedSection direction="left">
              <div className="bg-card-bg border border-white/5 rounded-3xl p-10 h-full card-hover glow-border">
                <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center mb-6">
                  <Target className="w-7 h-7 text-primary" />
                </div>
                <h2 className="text-2xl font-bold text-white mb-4">Our Mission</h2>
                <p className="text-white/40 leading-relaxed">
                  To be the most trusted one-stop business consulting partner in
                  Uzbekistan, empowering companies with integrated services that
                  simplify operations, ensure compliance, and drive sustainable
                  growth across Central Asia.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection direction="right">
              <div className="bg-card-bg border border-white/5 rounded-3xl p-10 h-full card-hover glow-border">
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                  <Eye className="w-7 h-7 text-primary" />
                </div>
                <h2 className="text-2xl font-bold text-white mb-4">Our Vision</h2>
                <p className="text-white/40 leading-relaxed">
                  To redefine business consulting in Central Asia by delivering
                  world-class, integrated solutions that help businesses of all sizes
                  thrive in Uzbekistan&apos;s dynamic and rapidly growing economy.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 md:py-32 bg-black relative overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-30" />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="text-sm font-semibold text-primary uppercase tracking-widest">
                Our Journey
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-white mt-4">
                Growing with Uzbekistan
              </h2>
              <div className="w-20 h-0.5 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto mt-6" />
            </div>
          </AnimatedSection>

          <div className="max-w-3xl mx-auto">
            {timeline.map((item, i) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="flex gap-6 mb-8 last:mb-0"
              >
                <div className="flex flex-col items-center">
                  <div className="w-14 h-14 rounded-full bg-primary/10 border border-primary/30 text-primary flex items-center justify-center font-bold text-sm shrink-0 counter-glow">
                    {item.year}
                  </div>
                  {i < timeline.length - 1 && (
                    <div className="w-px flex-1 bg-gradient-to-b from-primary/30 to-transparent mt-2" />
                  )}
                </div>
                <div className="bg-card-bg rounded-2xl p-6 border border-white/5 flex-1 card-hover">
                  <p className="text-white/60">{item.event}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 md:py-32 bg-section-bg border-y border-white/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="text-sm font-semibold text-primary uppercase tracking-widest">
                What Drives Us
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-white mt-4 mb-4">
                Our Core Values
              </h2>
              <div className="w-20 h-0.5 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto mt-6" />
            </div>
          </AnimatedSection>

          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((value) => (
              <StaggerItem key={value.title}>
                <div className="bg-card-bg rounded-2xl p-8 border border-white/5 card-hover glow-border h-full group">
                  <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center mb-5 group-hover:bg-primary/10 transition-colors">
                    <value.icon className="w-6 h-6 text-white/30 group-hover:text-primary transition-colors" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">
                    {value.title}
                  </h3>
                  <p className="text-white/30 text-sm leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-28 bg-black overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/10 rounded-full blur-[150px]" />
        <div className="relative max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <AnimatedSection direction="scale">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Let&apos;s Build Something
              <br />
              <span className="text-shimmer">Great Together</span>
            </h2>
            <p className="text-lg text-white/40 mb-10 max-w-2xl mx-auto">
              Whether you&apos;re entering the Uzbek market or scaling your existing
              operations, we&apos;re here to help.
            </p>
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 px-8 py-4 bg-primary text-white font-semibold rounded-full hover:bg-primary-light transition-all shadow-lg shadow-primary/25 hover:shadow-primary/40 hover:scale-105"
            >
              Contact Our Team
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
