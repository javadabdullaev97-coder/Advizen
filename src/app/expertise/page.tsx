"use client";

import Link from "next/link";
import { useState, type ComponentType, type SVGProps } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  BedDouble,
  BookOpen,
  Building2,
  Cpu,
  Factory,
  Film,
  Flame,
  Gem,
  Globe,
  Landmark,
  Medal,
  Sprout,
  Stethoscope,
  Store,
  TrendingUp,
} from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import TextReveal, { RevealLine } from "@/components/TextReveal";
import MagneticButton from "@/components/MagneticButton";
import GlassCard from "@/components/GlassCard";
import { servicesData } from "@/lib/services";
import AuroraBackground from "@/components/AuroraBackground";

type Category = "all" | "Advisory" | "Operations" | "Growth";
type LucideIcon = ComponentType<SVGProps<SVGSVGElement>>;

/* Custom angular Bitcoin glyph */
function BitcoinSquare(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1}
      strokeLinecap="square"
      strokeLinejoin="miter"
      {...props}
    >
      <path d="M7 4 V20" />
      <path d="M7 4 H15 L17 6 V10 L15 12 H7" />
      <path d="M7 12 H16 L18 14 V18 L16 20 H7" />
      <path d="M10 2 V4" />
      <path d="M14 2 V4" />
      <path d="M10 20 V22" />
      <path d="M14 20 V22" />
    </svg>
  );
}

const industries: { name: string; icon: LucideIcon }[] = [
  { name: "Agriculture", icon: Sprout },
  { name: "Banking & Finance", icon: Landmark },
  { name: "Blockchain & Crypto", icon: BitcoinSquare },
  { name: "Commerce & Retail", icon: Store },
  { name: "Construction & Real Estate", icon: Building2 },
  { name: "Education", icon: BookOpen },
  { name: "Energy & Natural Resources", icon: Flame },
  { name: "Healthcare & Pharmaceuticals", icon: Stethoscope },
  { name: "Hospitality & Tourism", icon: BedDouble },
  { name: "Immigration", icon: Globe },
  { name: "IT, Fintech & Telecom", icon: Cpu },
  { name: "Investment & Venture Funds", icon: TrendingUp },
  { name: "Manufacture", icon: Factory },
  { name: "Media & Entertainment", icon: Film },
  { name: "Private Equity & Wealth", icon: Gem },
  { name: "Sports", icon: Medal },
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
      <section className="py-24 md:py-32 bg-black relative overflow-hidden border-y border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
          <AnimatedSection className="mb-14 md:mb-16 text-center">
            <p className="tracking-luxury text-white/50 mb-4">Sector Experience</p>
            <h2 className="heading-luxury text-3xl md:text-5xl text-foreground">
              Industries we serve
            </h2>
            <p className="mt-5 text-white/55 max-w-xl mx-auto leading-relaxed">
              From regulated heavyweights to fast-moving ventures across
              Central Asia.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 md:gap-5" role="list">
            {industries.map((ind, i) => {
              const IconComp = ind.icon;
              return (
                <motion.button
                  key={ind.name}
                  role="listitem"
                  tabIndex={0}
                  aria-label={ind.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{
                    duration: 0.5,
                    delay: (i % 4) * 0.04 + Math.floor(i / 4) * 0.03,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  whileHover={{ y: -4, scale: 1.03 }}
                  className="glow-card aspect-[5/4] cursor-default"
                >
                  <div className="glow-card-spinner" />
                  <div className="glow-card-backdrop" />
                  <div className="glow-card-content flex flex-col items-center justify-center gap-4 p-5 md:p-6">
                    <div className="glow-card-glow" />
                    <IconComp
                      className="relative w-9 h-9 md:w-10 md:h-10 text-white/60 transition-colors duration-500 glow-card-icon"
                      strokeWidth={1}
                    />
                    <span className="relative text-xs tracking-[0.14em] uppercase text-center leading-tight glow-card-title">
                      {ind.name}
                    </span>
                  </div>
                </motion.button>
              );
            })}
          </div>
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
