"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import AnimatedSection, {
  HorizontalLine,
  StaggerContainer,
  StaggerItem,
} from "@/components/AnimatedSection";

const principles = [
  {
    num: "01",
    title: "Integration",
    text: "Every discipline — legal, tax, HR, finance, marketing — works in concert. No silos, no gaps.",
  },
  {
    num: "02",
    title: "Precision",
    text: "We operate with meticulous attention to regulatory detail and market nuance.",
  },
  {
    num: "03",
    title: "Partnership",
    text: "We embed within your operations. Your challenges are ours to solve.",
  },
  {
    num: "04",
    title: "Local Mastery",
    text: "Deep, first-hand understanding of Uzbekistan's regulatory landscape and business culture.",
  },
];

const milestones = [
  { year: "2016", text: "Founded in Tashkent with a mandate to bring integrated advisory to Uzbekistan" },
  { year: "2018", text: "Expanded into full-spectrum HR and digital marketing services" },
  { year: "2020", text: "Surpassed 30 active institutional clients across multiple sectors" },
  { year: "2022", text: "Launched Employer of Record services for international market entrants" },
  { year: "2024", text: "Completed 70+ engagements, serving 15+ industries across Central Asia" },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-36 pb-24 md:pt-44 md:pb-32 bg-background overflow-hidden">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.06 }}
          transition={{ duration: 3 }}
          className="absolute top-20 right-0 w-[500px] h-[500px] bg-primary rounded-full blur-[200px]"
        />
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
          <AnimatedSection>
            <p className="tracking-luxury text-muted-dark mb-6">About the Firm</p>
            <h1 className="heading-luxury text-5xl md:text-7xl text-foreground leading-[1.08] max-w-3xl">
              Built on expertise,
              <br />
              <span className="text-primary-light">sustained by trust</span>
            </h1>
          </AnimatedSection>
        </div>
      </section>

      {/* Institutional Overview */}
      <section className="py-24 md:py-32 bg-surface border-y border-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-16">
            <AnimatedSection className="lg:col-span-2">
              <p className="tracking-luxury text-muted-dark mb-4">Who We Are</p>
              <h2 className="heading-luxury text-3xl md:text-4xl text-foreground leading-tight">
                A single point of counsel
              </h2>
            </AnimatedSection>

            <AnimatedSection delay={0.15} className="lg:col-span-3">
              <div className="space-y-6 text-muted leading-relaxed">
                <p>
                  Advizen Consulting is Uzbekistan&apos;s integrated advisory
                  practice. We provide the full spectrum of business services —
                  tax, legal, finance, accounting, HR, and marketing — under one
                  institutional roof.
                </p>
                <p>
                  Our firm was established in 2016 with a clear thesis: businesses
                  operating in Central Asia deserve the calibre of advisory
                  typically reserved for mature markets. We bring that standard to
                  every engagement, across every discipline.
                </p>
                <p>
                  With over 500 hours of monthly consultation, we serve as the
                  go-to team for companies navigating Uzbekistan&apos;s dynamic
                  regulatory and commercial environment — from multinational
                  market entrants to established local enterprises.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Principles */}
      <section className="py-24 md:py-32 bg-background">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <AnimatedSection>
            <p className="tracking-luxury text-muted-dark mb-4">
              Our Principles
            </p>
            <h2 className="heading-luxury text-3xl md:text-4xl text-foreground mb-16">
              What guides every engagement
            </h2>
          </AnimatedSection>

          <HorizontalLine className="mb-0" />

          {principles.map((p) => (
            <AnimatedSection key={p.num}>
              <div className="grid md:grid-cols-12 gap-6 py-10 border-b border-border">
                <div className="md:col-span-1">
                  <span className="text-xs font-mono text-muted-dark">{p.num}</span>
                </div>
                <div className="md:col-span-3">
                  <h3 className="font-serif text-xl text-foreground tracking-wide">
                    {p.title}
                  </h3>
                </div>
                <div className="md:col-span-8">
                  <p className="text-muted leading-relaxed">{p.text}</p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 md:py-32 bg-surface border-y border-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <AnimatedSection>
            <p className="tracking-luxury text-muted-dark mb-4">History</p>
            <h2 className="heading-luxury text-3xl md:text-4xl text-foreground mb-16">
              Milestones
            </h2>
          </AnimatedSection>

          <StaggerContainer className="space-y-0">
            {milestones.map((m, i) => (
              <StaggerItem key={m.year}>
                <div className="grid md:grid-cols-12 gap-6 py-8 border-b border-border">
                  <div className="md:col-span-2">
                    <span className="font-serif text-2xl text-primary-light">
                      {m.year}
                    </span>
                  </div>
                  <div className="md:col-span-10">
                    <p className="text-foreground/80 leading-relaxed">{m.text}</p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 md:py-32 bg-background relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-primary/6 rounded-full blur-[180px]" />
        <div className="relative max-w-3xl mx-auto px-6 lg:px-8 text-center">
          <AnimatedSection>
            <h2 className="heading-luxury text-3xl md:text-5xl text-foreground mb-6">
              Work with us
            </h2>
            <p className="text-muted leading-relaxed mb-10 max-w-lg mx-auto">
              Whether you are entering the market or scaling existing operations,
              our firm is prepared to advise.
            </p>
            <Link
              href="/contact"
              className="group inline-flex items-center gap-3 px-10 py-4 bg-primary text-foreground text-sm uppercase tracking-[0.12em] font-medium hover:bg-primary-light transition-all duration-300 cursor-pointer"
            >
              Contact us
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
