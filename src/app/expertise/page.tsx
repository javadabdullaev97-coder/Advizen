"use client";

import Link from "next/link";
import { useState, useEffect, type ComponentType, type SVGProps } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  Briefcase,
  Calculator,
  Landmark,
  LayoutDashboard,
  LineChart,
  Scale,
  Users,
} from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import TextReveal, { RevealLine } from "@/components/TextReveal";
import MagneticButton from "@/components/MagneticButton";
import { servicesData } from "@/lib/services";
import { industryGroups, allEngagements, heroStats, type IndustryGroup } from "@/lib/industries";
import AuroraBackground from "@/components/AuroraBackground";
import { cn } from "@/lib/utils";

type LucideIcon = ComponentType<SVGProps<SVGSVGElement>>;

const serviceIcons: Record<string, LucideIcon> = {
  tax: Calculator,
  legal: Scale,
  finance: LineChart,
  hr: Users,
  funding: Landmark,
  corporate: Briefcase,
  "entity-management": LayoutDashboard,
};

function ServicesSection() {
  const [expandedSlug, setExpandedSlug] = useState<string | null>(null);

  return (
    <section className="py-24 md:py-32 bg-black relative overflow-hidden">
      <div className="ambient-glow ambient-glow-oxblood w-[500px] h-[500px] -top-32 -left-32 opacity-[0.18]" />
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
        <AnimatedSection className="mb-14 md:mb-16">
          <p className="tracking-luxury text-white/50 mb-4">Practice Areas</p>
          <h2 className="heading-luxury text-3xl md:text-4xl text-foreground">
            Seven disciplines, one team
          </h2>
          <p className="mt-5 text-white/45 max-w-2xl leading-relaxed">
            From regulatory compliance to strategic growth — integrated advisory
            built for the complexities of Central Asian markets.
          </p>
        </AnimatedSection>

        <div className="border-t border-white/[0.08]">
          {servicesData.map((service, i) => {
            const isExpanded = expandedSlug === service.slug;
            const Icon = serviceIcons[service.slug] ?? ArrowUpRight;
            return (
              <motion.div
                key={service.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: i * 0.06, ease: [0.16, 1, 0.3, 1] }}
                className={cn(
                  "border-b border-white/[0.08] transition-colors duration-500",
                  isExpanded && "bg-white/[0.015]"
                )}
              >
                <button
                  type="button"
                  onClick={() => setExpandedSlug(isExpanded ? null : service.slug)}
                  className="w-full flex items-center gap-5 md:gap-8 py-6 md:py-7 text-left group cursor-pointer"
                >
                  <span
                    className={cn(
                      "font-serif text-3xl md:text-4xl tabular-nums w-12 md:w-14 shrink-0 text-right transition-colors duration-300",
                      isExpanded ? "text-primary" : "text-white/10 group-hover:text-white/22"
                    )}
                  >
                    {service.num}
                  </span>

                  <span
                    className={cn(
                      "w-9 h-9 rounded-md flex items-center justify-center shrink-0 border transition-all duration-300",
                      isExpanded
                        ? "bg-primary/10 border-primary/25"
                        : "bg-white/[0.02] border-white/[0.06] group-hover:border-white/[0.14] group-hover:bg-white/[0.04]"
                    )}
                  >
                    <Icon
                      className={cn(
                        "w-4 h-4 transition-colors duration-300",
                        isExpanded ? "text-primary" : "text-white/28 group-hover:text-white/50"
                      )}
                      strokeWidth={1.5}
                    />
                  </span>

                  <h3
                    className={cn(
                      "font-serif text-xl md:text-2xl flex-1 tracking-wide transition-colors duration-300",
                      isExpanded ? "text-foreground" : "text-white/45 group-hover:text-white/78"
                    )}
                  >
                    {service.title}
                  </h3>
                </button>

                <AnimatePresence initial={false}>
                  {isExpanded && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="pl-[4.25rem] md:pl-[5.5rem] pb-8 md:pb-10 pt-2 pr-4 md:pr-8">
                        <div className="grid md:grid-cols-[3fr_2fr] gap-8 md:gap-12">
                          <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.08, duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                          >
                            <p className="text-[14px] text-white/52 leading-relaxed mb-3">
                              {service.description[0]}
                            </p>
                            <p className="text-[13px] text-white/32 leading-relaxed">
                              {service.description[1]}
                            </p>
                          </motion.div>

                          <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.16, duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                          >
                            <p className="text-[10px] tracking-[0.18em] uppercase text-white/30 mb-4">
                              Capabilities
                            </p>
                            <div className="space-y-2.5">
                              {service.capabilities.map((cap, ci) => (
                                <motion.div
                                  key={cap}
                                  initial={{ opacity: 0, x: 8 }}
                                  animate={{ opacity: 1, x: 0 }}
                                  transition={{
                                    delay: 0.2 + ci * 0.04,
                                    duration: 0.3,
                                    ease: [0.16, 1, 0.3, 1],
                                  }}
                                  className="flex items-center gap-2.5 text-[13px] text-white/65"
                                >
                                  <span className="w-[5px] h-[5px] rounded-full bg-primary/60 shrink-0" />
                                  {cap}
                                </motion.div>
                              ))}
                            </div>
                          </motion.div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function IndustriesSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = industryGroups[activeIndex];

  useEffect(() => {
    industryGroups.forEach(({ image }) => {
      if (image) new window.Image().src = image;
    });
  }, []);

  return (
    <section className="py-20 md:py-28 bg-black relative overflow-hidden border-y border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
        <AnimatedSection className="mb-10 md:mb-12">
          <p className="tracking-luxury text-white/50 mb-3">Sector Experience</p>
          <h2 className="heading-luxury text-2xl md:text-3xl text-foreground">
            Sectors we serve
          </h2>
        </AnimatedSection>

        <div className="grid md:grid-cols-[5fr_7fr] border border-white/[0.07] overflow-hidden md:h-[760px]">
          <div className="border-r border-white/[0.07] divide-y divide-white/[0.04] flex flex-col h-full">
            {industryGroups.map((ind, i) => {
              const IconComp = ind.icon;
              const isActive = i === activeIndex;
              return (
                <button
                  key={ind.name}
                  type="button"
                  onClick={() => setActiveIndex(i)}
                  className={cn(
                    "relative w-full flex flex-1 items-center gap-4 px-6 text-left transition-all duration-250 group outline-none",
                    isActive
                      ? "bg-white/[0.04] text-foreground"
                      : "text-white/45 hover:text-white/75 hover:bg-white/[0.02]"
                  )}
                >
                  <span
                    className={cn(
                      "absolute left-0 top-0 bottom-0 w-[2px] transition-all duration-300",
                      isActive ? "bg-primary opacity-100" : "opacity-0"
                    )}
                  />
                  <span
                    className={cn(
                      "w-9 h-9 rounded flex items-center justify-center shrink-0 transition-all duration-250",
                      isActive ? "bg-primary/10" : "bg-white/[0.03] group-hover:bg-white/[0.06]"
                    )}
                  >
                    <IconComp
                      className={cn("w-[18px] h-[18px] shrink-0 transition-colors duration-250",
                        isActive ? "text-primary" : "text-white/40 group-hover:text-white/65"
                      )}
                      strokeWidth={1.5}
                    />
                  </span>
                  <span className={cn("text-[13px] tracking-[0.07em] uppercase transition-all duration-250", isActive ? "font-semibold" : "font-medium")}>
                    {ind.name}
                  </span>
                  <ArrowRight
                    className={cn(
                      "ml-auto w-4 h-4 shrink-0 transition-all duration-250",
                      isActive ? "text-primary opacity-100 translate-x-0" : "opacity-0 -translate-x-1"
                    )}
                  />
                </button>
              );
            })}
          </div>

          <div className="relative bg-[#080808] h-full overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={active.name}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="absolute inset-0 p-6 md:p-8 overflow-y-auto"
              >
                <motion.div
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  className="relative w-full h-44 md:h-52 rounded-xl overflow-hidden mb-6"
                  style={{
                    background: `linear-gradient(145deg, rgba(${active.accent},0.2) 0%, #0d0d0d 55%, rgba(${active.accent},0.06) 100%)`,
                  }}
                >
                  {active.image && (
                    <img
                      src={active.image}
                      alt={active.name}
                      className="absolute inset-0 w-full h-full object-cover"
                      fetchPriority="high"
                      onError={(e) => { (e.target as HTMLImageElement).style.display = "none"; }}
                    />
                  )}
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <active.icon className="w-14 h-14 text-white/[0.06]" strokeWidth={0.6} />
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.07, ease: [0.16, 1, 0.3, 1] }}
                  className="flex items-center gap-3 mb-3"
                >
                  <active.icon className="w-5 h-5 text-primary shrink-0" strokeWidth={1.25} />
                  <h3 className="font-serif text-2xl md:text-3xl text-foreground tracking-wide leading-tight">
                    {active.name}
                  </h3>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.35, delay: 0.13, ease: [0.16, 1, 0.3, 1] }}
                  className="flex flex-wrap gap-1.5 mb-5"
                >
                  {active.sectors.map((s) => (
                    <span
                      key={s}
                      className="text-[10px] tracking-[0.1em] uppercase text-white/40 border border-white/[0.07] px-2.5 py-1"
                    >
                      {s}
                    </span>
                  ))}
                </motion.div>

                <motion.p
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.35, delay: 0.19, ease: [0.16, 1, 0.3, 1] }}
                  className="text-[14px] text-white/52 leading-relaxed mb-6"
                >
                  {active.description}
                </motion.p>

                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3, delay: 0.25 }}
                  className="text-[10px] tracking-[0.18em] uppercase text-white/25 mb-3.5"
                >
                  What we offer
                </motion.p>
                <div className="flex flex-wrap gap-2">
                  {active.offerings.map((item, oi) => (
                    <motion.span
                      key={item}
                      initial={{ opacity: 0, scale: 0.94 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.28, delay: 0.28 + oi * 0.04, ease: [0.16, 1, 0.3, 1] }}
                      className="flex items-center gap-2 px-3 py-2 border border-white/[0.07] bg-white/[0.02] text-[12px] text-white/52 hover:border-primary/30 hover:bg-primary/[0.04] hover:text-white/80 transition-all duration-250 cursor-default"
                    >
                      <span className="w-[5px] h-[5px] rounded-full bg-primary/50 shrink-0" />
                      {item}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function ExpertisePage() {

  return (
    <>
      <AuroraBackground>
        <section className="relative pt-36 pb-24 md:pt-44 md:pb-32">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="tracking-luxury text-white/50 mb-6"
            >
              Our Expertise
            </motion.p>

            <TextReveal
              text="Integrated services, singular results"
              as="h1"
              mode="line"
              className="heading-luxury text-4xl md:text-6xl lg:text-7xl text-foreground leading-[1.05] max-w-4xl"
              delay={0.2}
            />

            <RevealLine delay={0.5}>
              <p className="text-lg text-white/50 max-w-2xl mt-8 leading-relaxed">
                Seven advisory disciplines. Seven managed operations services. One integrated practice built for the complexities of Central Asian markets.
              </p>
            </RevealLine>

            <div className="mt-12 pt-10 border-t border-white/[0.08] flex flex-wrap gap-x-12 gap-y-6">
              {heroStats.map((s, i) => (
                <motion.div
                  key={s.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.65 + i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                  className="flex flex-col gap-1.5"
                >
                  <span className="font-serif text-4xl md:text-5xl text-foreground font-light tabular-nums leading-none">
                    {s.value}
                  </span>
                  <span className="text-[10px] tracking-[0.2em] uppercase text-white/45">
                    {s.label}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </AuroraBackground>

      <ServicesSection />

      <IndustriesSection />

      <section className="py-24 md:py-32 bg-black relative overflow-hidden">
        <div className="ambient-glow ambient-glow-oxblood w-[700px] h-[700px] top-1/2 right-0 translate-x-1/3 -translate-y-1/2 opacity-[0.18]" />
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
          <AnimatedSection className="mb-14 md:mb-16">
            <div>
              <p className="tracking-luxury text-white/50 mb-4">Track Record</p>
              <h2 className="heading-luxury text-3xl md:text-5xl text-foreground">
                Selected engagements of our team members
              </h2>
            </div>
          </AnimatedSection>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {allEngagements.map((deal, i) => (
              <motion.div
                key={deal.headline}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: (i % 3) * 0.07, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ y: -4 }}
                className="glow-card"
              >
                <div className="glow-card-spinner" />
                <div className="glow-card-backdrop" />
                <div className="glow-card-content p-7 md:p-8 flex flex-col h-full">
                  <div className="glow-card-glow" />
                  <div className="mb-6">
                    <span className="font-serif text-3xl md:text-4xl text-foreground/85 tracking-tight leading-none glow-card-title">
                      {deal.metric}
                    </span>
                    <p className="text-[10px] tracking-[0.16em] uppercase text-white/25 mt-2">
                      {deal.metricLabel}
                    </p>
                  </div>
                  <span className="inline-block text-xs tracking-[0.16em] uppercase text-red-400/70 mb-3">
                    {deal.sector}
                  </span>
                  <p className="text-[14px] text-foreground/60 leading-snug font-light mb-6 flex-1 glow-card-desc">
                    {deal.headline}
                  </p>
                  <div className="flex flex-wrap gap-1.5 pt-5 border-t border-white/[0.05]">
                    {deal.disciplines.map((d) => (
                      <span key={d} className="text-[10px] tracking-[0.12em] uppercase text-white/30 border border-white/[0.06] rounded-full px-2.5 py-0.5">
                        {d}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-28 md:py-36 bg-black relative overflow-hidden">
        <div className="ambient-glow ambient-glow-warm w-[900px] h-[900px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
        <div className="ambient-glow ambient-glow-oxblood w-[350px] h-[350px] bottom-0 right-0 translate-x-1/2 translate-y-1/2 opacity-[0.14]" />
        <div className="relative max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <AnimatedSection>
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 0.03 }}
              viewport={{ once: true }}
              transition={{ duration: 2 }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-serif text-[14rem] md:text-[20rem] text-foreground leading-none select-none pointer-events-none"
            >
              A
            </motion.span>
            <p className="tracking-luxury text-white/50 mb-6">Next Step</p>
            <TextReveal
              text="Ready to begin?"
              as="h2"
              className="heading-luxury text-3xl md:text-5xl text-foreground mb-6"
            />
            <RevealLine delay={0.2}>
              <p className="text-base md:text-lg text-white/50 max-w-xl mx-auto mb-12 leading-relaxed">
                Every engagement begins with a conversation. Let us understand
                your business before we propose solutions.
              </p>
            </RevealLine>
            <RevealLine delay={0.35}>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <MagneticButton variant="primary" as="a" href="/contact">
                  Schedule a consultation
                  <ArrowRight className="w-4 h-4" />
                </MagneticButton>
                <MagneticButton variant="outline" as="a" href="/about">
                  About the firm
                  <ArrowUpRight className="w-4 h-4" />
                </MagneticButton>
              </div>
            </RevealLine>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
