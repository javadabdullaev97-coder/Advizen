"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import AnimatedSection, {
  HorizontalLine,
  StaggerContainer,
  StaggerItem,
} from "@/components/AnimatedSection";
import TextReveal, { RevealLine } from "@/components/TextReveal";
import MagneticButton from "@/components/MagneticButton";
import AuroraBackground from "@/components/AuroraBackground";

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

const industries = [
  "Construction", "Real Estate", "Manufacturing", "FMCG",
  "Technology", "Agriculture", "Textiles", "Healthcare",
  "Education", "Media & Advertising", "Interior Design",
  "Dairy & Food", "Logistics", "Retail", "Legal Services",
];

export default function AboutPage() {
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
              About the Firm
            </motion.p>
            <TextReveal
              text="Built on expertise, sustained by trust"
              as="h1"
              mode="line"
              className="heading-luxury text-5xl md:text-7xl text-foreground leading-[1.08] max-w-3xl"
              delay={0.3}
            />
          </div>
        </section>
      </AuroraBackground>

      {/* Institutional Overview */}
      <section className="py-24 md:py-32 bg-surface border-y border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-16">
            <AnimatedSection className="lg:col-span-2">
              <p className="tracking-luxury text-muted-dark mb-4">Who We Are</p>
              <TextReveal
                text="A single point of counsel"
                as="h2"
                className="heading-luxury text-3xl md:text-4xl text-foreground leading-tight"
              />
            </AnimatedSection>

            <AnimatedSection delay={0.15} className="lg:col-span-3">
              <div className="space-y-6">
                <RevealLine>
                  <p className="text-muted leading-relaxed">
                    Advizen Consulting is Uzbekistan&apos;s integrated advisory
                    practice. We provide the full spectrum of business services —
                    tax, legal, finance, accounting, HR, and marketing — under one
                    institutional roof.
                  </p>
                </RevealLine>
                <RevealLine delay={0.1}>
                  <p className="text-muted leading-relaxed">
                    Our firm was established in 2016 with a clear thesis: businesses
                    operating in Central Asia deserve the calibre of advisory
                    typically reserved for mature markets. We bring that standard to
                    every engagement, across every discipline.
                  </p>
                </RevealLine>
                <RevealLine delay={0.2}>
                  <p className="text-muted leading-relaxed">
                    With over 500 hours of monthly consultation, we serve as the
                    go-to team for companies navigating Uzbekistan&apos;s dynamic
                    regulatory and commercial environment — from multinational
                    market entrants to established local enterprises.
                  </p>
                </RevealLine>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Principles */}
      <section className="py-24 md:py-32 bg-background">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <AnimatedSection>
            <p className="tracking-luxury text-muted-dark mb-4">Our Principles</p>
            <TextReveal
              text="What guides every engagement"
              as="h2"
              className="heading-luxury text-3xl md:text-4xl text-foreground mb-16"
            />
          </AnimatedSection>

          <HorizontalLine className="mb-0" />

          {principles.map((p) => (
            <AnimatedSection key={p.num}>
              <div className="grid md:grid-cols-12 gap-6 py-10 border-b border-white/[0.06]">
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

      {/* Industries */}
      <section className="py-24 md:py-32 bg-surface border-y border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <AnimatedSection>
            <p className="tracking-luxury text-muted-dark mb-4">Industries Served</p>
            <TextReveal
              text="15+ sectors, one standard of excellence"
              as="h2"
              className="heading-luxury text-3xl md:text-4xl text-foreground mb-16"
            />
          </AnimatedSection>

          <HorizontalLine className="mb-0" />

          <StaggerContainer className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-0">
            {industries.map((ind) => (
              <StaggerItem key={ind}>
                <div className="py-6 px-4 border-b border-r border-white/[0.06] hover:bg-background transition-colors group cursor-default">
                  <span className="text-sm text-muted group-hover:text-foreground transition-colors">
                    {ind}
                  </span>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 md:py-32 bg-background relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-primary/[0.05] rounded-full blur-[180px]" />
        <div className="relative max-w-3xl mx-auto px-6 lg:px-8 text-center">
          <AnimatedSection>
            <TextReveal
              text="Work with us"
              as="h2"
              className="heading-luxury text-3xl md:text-5xl text-foreground mb-6"
            />
            <RevealLine delay={0.2}>
              <p className="text-muted leading-relaxed mb-10 max-w-lg mx-auto">
                Whether you are entering the market or scaling existing operations,
                our firm is prepared to advise.
              </p>
            </RevealLine>
            <MagneticButton variant="primary" as="a" href="/contact">
              Contact us
              <ArrowRight className="w-4 h-4" />
            </MagneticButton>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
