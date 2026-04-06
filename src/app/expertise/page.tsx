"use client";

import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import AnimatedSection, {
  HorizontalLine,
  StaggerContainer,
  StaggerItem,
} from "@/components/AnimatedSection";
import TextReveal, { RevealLine } from "@/components/TextReveal";
import MagneticButton from "@/components/MagneticButton";
import GlassCard from "@/components/GlassCard";
import { servicesData } from "@/lib/services";
import AuroraBackground from "@/components/AuroraBackground";

type Category = "all" | "Advisory" | "Operations" | "Growth";

const industries = [
  "Construction", "Real Estate", "Manufacturing", "FMCG",
  "Technology", "Agriculture", "Textiles", "Healthcare",
  "Education", "Media & Advertising", "Interior Design", "Furniture",
  "Dairy & Food", "Logistics", "Retail", "Legal Services",
];

const filters: { label: string; value: Category }[] = [
  { label: "All Services", value: "all" },
  { label: "Advisory", value: "Advisory" },
  { label: "Operations", value: "Operations" },
  { label: "Growth", value: "Growth" },
];

export default function ExpertisePage() {
  const [activeFilter, setActiveFilter] = useState<Category>("all");

  const filtered =
    activeFilter === "all"
      ? servicesData
      : servicesData.filter((s) => s.category === activeFilter);

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
              Expertise
            </motion.p>
            <TextReveal
              text="Integrated services, singular results"
              as="h1"
              mode="line"
              className="heading-luxury text-5xl md:text-7xl text-foreground leading-[1.08] max-w-4xl"
              delay={0.3}
            />
            <RevealLine delay={0.6}>
              <p className="text-lg text-muted max-w-2xl mt-8 leading-relaxed">
                Six core disciplines. Fifteen industries. One cohesive advisory
                practice designed for the complexities of Central Asian markets.
              </p>
            </RevealLine>
          </div>
        </section>
      </AuroraBackground>

      {/* Filter + Services */}
      <section className="py-24 md:py-32 bg-surface border-y border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          {/* Filter bar */}
          <AnimatedSection>
            <div className="flex flex-wrap gap-3 mb-16">
              {filters.map((f) => (
                <button
                  key={f.value}
                  onClick={() => setActiveFilter(f.value)}
                  className={`px-5 py-2.5 text-xs uppercase tracking-[0.15em] font-medium border transition-all duration-300 cursor-pointer ${
                    activeFilter === f.value
                      ? "border-primary bg-primary text-foreground"
                      : "border-white/[0.08] text-muted hover:text-foreground hover:border-white/[0.2]"
                  }`}
                >
                  {f.label}
                </button>
              ))}
            </div>
          </AnimatedSection>

          {/* Service cards */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeFilter}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.4 }}
              className="grid md:grid-cols-2 gap-6"
            >
              {filtered.map((service) => (
                <Link key={service.num} href={`/expertise/${service.slug}`} className="block group cursor-pointer">
                  <GlassCard className="p-8 md:p-10 h-full">
                    <div className="flex items-center gap-4 mb-6">
                      <span className="text-xs font-mono text-muted-dark">
                        {service.num}
                      </span>
                      <span className="tracking-luxury text-primary">
                        {service.category}
                      </span>
                    </div>
                    <h3 className="font-serif text-2xl md:text-3xl text-foreground mb-4 tracking-wide group-hover:text-primary-light transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-muted leading-relaxed mb-6">
                      {service.description[0]}
                    </p>
                    <div className="flex items-center gap-2 text-sm text-muted-dark group-hover:text-foreground transition-colors">
                      <span className="uppercase tracking-wider text-xs">Explore</span>
                      <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </div>
                  </GlassCard>
                </Link>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* Industries */}
      <section className="py-24 md:py-32 bg-background">
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

          <StaggerContainer className="grid grid-cols-2 md:grid-cols-4 gap-0">
            {industries.map((ind) => (
              <StaggerItem key={ind}>
                <div className="py-6 px-4 border-b border-r border-white/[0.06] hover:bg-surface transition-colors group cursor-default">
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
      <section className="py-24 md:py-32 bg-surface border-t border-white/[0.06] relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-primary/[0.05] rounded-full blur-[180px]" />
        <div className="relative max-w-3xl mx-auto px-6 lg:px-8 text-center">
          <AnimatedSection>
            <TextReveal
              text="Discuss your requirements"
              as="h2"
              className="heading-luxury text-3xl md:text-5xl text-foreground mb-6"
            />
            <RevealLine delay={0.2}>
              <p className="text-muted leading-relaxed mb-10 max-w-lg mx-auto">
                Every engagement begins with a conversation. Let us understand
                your business before we propose solutions.
              </p>
            </RevealLine>
            <MagneticButton variant="primary" as="a" href="/contact">
              Get in touch
              <ArrowRight className="w-4 h-4" />
            </MagneticButton>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
