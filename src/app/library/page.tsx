"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, ArrowUpRight, Download, BookOpen } from "lucide-react";
import AnimatedSection, {
  StaggerContainer,
  StaggerItem,
} from "@/components/AnimatedSection";
import TextReveal, { RevealLine } from "@/components/TextReveal";
import MagneticButton from "@/components/MagneticButton";
import GlassCard from "@/components/GlassCard";

const flagship = {
  tag: "Flagship Publication",
  title: "Doing Business in Uzbekistan",
  subtitle: "The Definitive Guide — 2024 Edition",
  description:
    "A comprehensive resource for international investors and companies entering the Uzbekistan market. Covers regulatory frameworks, tax structures, labour law, market entry strategies, and operational best practices.",
  chapters: [
    "Market Overview & Economic Landscape",
    "Legal Framework for Foreign Investment",
    "Tax System & Incentive Programs",
    "Labour Law & Employment Regulations",
    "Banking, Finance & Currency Controls",
    "Practical Guide to Company Registration",
  ],
};

const publications = [
  {
    tag: "Tax Briefing",
    title: "Uzbekistan Tax Landscape 2024–2025",
    description:
      "An analysis of recent tax reforms, key changes in legislation, and strategic implications for domestic and foreign-invested entities.",
    year: "2024",
  },
  {
    tag: "HR Insight",
    title: "Employer of Record in Central Asia",
    description:
      "How foreign companies can hire and manage talent in Uzbekistan without establishing a local legal entity.",
    year: "2024",
  },
  {
    tag: "Legal Brief",
    title: "Foreign Investment Protection in Uzbekistan",
    description:
      "An overview of legal guarantees, bilateral treaties, and dispute resolution mechanisms available to foreign investors.",
    year: "2023",
  },
  {
    tag: "Market Report",
    title: "Agriculture & Agribusiness Opportunities",
    description:
      "Sector analysis of Uzbekistan's agricultural market, export potential, and investment pathways.",
    year: "2023",
  },
  {
    tag: "Compliance Guide",
    title: "IFRS Adoption in Uzbekistan",
    description:
      "Practical guidance on transitioning from National Accounting Standards to International Financial Reporting Standards.",
    year: "2023",
  },
  {
    tag: "HR Guide",
    title: "Payroll & Social Contributions",
    description:
      "A detailed breakdown of payroll taxes, social contributions, and reporting obligations for employers in Uzbekistan.",
    year: "2022",
  },
];

export default function LibraryPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-36 pb-24 md:pt-44 md:pb-32 bg-background overflow-hidden">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.05 }}
          transition={{ duration: 3 }}
          className="absolute top-20 right-0 w-[500px] h-[500px] bg-primary rounded-full blur-[200px]"
        />
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="tracking-luxury text-muted-dark mb-6"
          >
            The Library
          </motion.p>
          <TextReveal
            text="Knowledge that empowers decisions"
            as="h1"
            mode="line"
            className="heading-luxury text-5xl md:text-7xl text-foreground leading-[1.08] max-w-3xl"
            delay={0.3}
          />
          <RevealLine delay={0.6}>
            <p className="text-lg text-muted max-w-2xl mt-8 leading-relaxed">
              Guides, briefings, and market intelligence from our practice.
              Rigorous, practical, and freely available.
            </p>
          </RevealLine>
        </div>
      </section>

      {/* Flagship Publication */}
      <section className="py-24 md:py-32 bg-surface border-y border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <AnimatedSection>
            <GlassCard className="p-10 md:p-16" hover={false}>
              <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
                <div>
                  <p className="tracking-luxury text-primary mb-6">
                    {flagship.tag}
                  </p>
                  <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-3 tracking-wide leading-snug">
                    {flagship.title}
                  </h2>
                  <p className="text-sm text-muted-dark mb-6">
                    {flagship.subtitle}
                  </p>
                  <p className="text-muted leading-relaxed mb-10">
                    {flagship.description}
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <MagneticButton variant="primary">
                      <Download className="w-4 h-4" />
                      Download PDF
                    </MagneticButton>
                    <MagneticButton variant="outline">
                      <BookOpen className="w-4 h-4" />
                      Read online
                    </MagneticButton>
                  </div>
                </div>

                <div>
                  <p className="tracking-luxury text-muted-dark mb-6">
                    Contents
                  </p>
                  <div className="space-y-0">
                    {flagship.chapters.map((chapter, i) => (
                      <div
                        key={chapter}
                        className="flex items-start gap-4 py-4 border-b border-white/[0.06]"
                      >
                        <span className="text-xs font-mono text-primary mt-0.5">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        <span className="text-sm text-foreground/80">
                          {chapter}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </GlassCard>
          </AnimatedSection>
        </div>
      </section>

      {/* Publications Grid */}
      <section className="py-24 md:py-32 bg-background">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <AnimatedSection>
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
              <div>
                <p className="tracking-luxury text-muted-dark mb-4">Publications</p>
                <TextReveal
                  text="Briefings & guides"
                  as="h2"
                  className="heading-luxury text-3xl md:text-4xl text-foreground"
                />
              </div>
            </div>
          </AnimatedSection>

          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {publications.map((pub) => (
              <StaggerItem key={pub.title}>
                <GlassCard className="p-8 h-full flex flex-col">
                  <div className="flex items-center justify-between mb-6">
                    <span className="tracking-luxury text-primary">
                      {pub.tag}
                    </span>
                    <span className="text-xs text-muted-dark font-mono">
                      {pub.year}
                    </span>
                  </div>
                  <h3 className="font-serif text-xl text-foreground mb-4 group-hover:text-primary-light transition-colors leading-snug">
                    {pub.title}
                  </h3>
                  <p className="text-sm text-muted leading-relaxed flex-1">
                    {pub.description}
                  </p>
                  <div className="mt-8 pt-6 border-t border-white/[0.06] flex items-center justify-between">
                    <span className="text-xs text-muted-dark uppercase tracking-wider">
                      Download
                    </span>
                    <ArrowUpRight className="w-4 h-4 text-muted-dark" />
                  </div>
                </GlassCard>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 md:py-32 bg-surface border-t border-white/[0.06] relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-primary/[0.05] rounded-full blur-[180px]" />
        <div className="relative max-w-3xl mx-auto px-6 lg:px-8 text-center">
          <AnimatedSection>
            <TextReveal
              text="Need tailored analysis?"
              as="h2"
              className="heading-luxury text-3xl md:text-5xl text-foreground mb-6"
            />
            <RevealLine delay={0.2}>
              <p className="text-muted leading-relaxed mb-10 max-w-lg mx-auto">
                Our advisory team produces bespoke reports and market studies.
                Contact us to discuss your requirements.
              </p>
            </RevealLine>
            <MagneticButton variant="primary" as="a" href="/contact">
              Commission a report
              <ArrowRight className="w-4 h-4" />
            </MagneticButton>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
