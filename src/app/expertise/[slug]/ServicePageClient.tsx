"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, ArrowLeft } from "lucide-react";
import TextReveal, { RevealLine } from "@/components/TextReveal";
import MagneticButton from "@/components/MagneticButton";
import AnimatedSection, {
  HorizontalLine,
  StaggerContainer,
  StaggerItem,
} from "@/components/AnimatedSection";
import { servicesData, getServiceBySlug } from "@/lib/services";

export default function ServicePageClient({ slug }: { slug: string }) {
  const service = getServiceBySlug(slug);

  if (!service) {
    return (
      <section className="min-h-screen flex items-center justify-center bg-background">
        <div className="text-center">
          <h1 className="heading-luxury text-4xl text-foreground mb-4">
            Service not found
          </h1>
          <Link href="/expertise" className="text-muted hover:text-foreground transition-colors cursor-pointer">
            Return to Expertise
          </Link>
        </div>
      </section>
    );
  }

  const currentIndex = servicesData.findIndex((s) => s.slug === slug);
  const prevService = currentIndex > 0 ? servicesData[currentIndex - 1] : null;
  const nextService =
    currentIndex < servicesData.length - 1 ? servicesData[currentIndex + 1] : null;

  return (
    <>
      {/* ── Hero ─────────────────────────────────────────────── */}
      <section className="relative pt-36 pb-20 md:pt-44 md:pb-28 overflow-hidden">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.05 }}
          transition={{ duration: 3 }}
          className="absolute top-0 right-[-10%] w-[600px] h-[600px] bg-primary rounded-full blur-[200px]"
        />

        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex items-center gap-3 mb-10"
          >
            <Link
              href="/expertise"
              className="group inline-flex items-center gap-2 text-sm text-muted hover:text-foreground transition-colors cursor-pointer"
            >
              <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-1 transition-transform" />
              Expertise
            </Link>
            <span className="text-white/[0.15]">/</span>
            <span className="tracking-luxury text-primary">{service.category}</span>
          </motion.div>

          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.08 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="block font-serif text-[8rem] md:text-[12rem] text-foreground absolute -top-8 right-8 leading-none select-none pointer-events-none"
          >
            {service.num}
          </motion.span>

          <TextReveal
            text={service.headline}
            as="h1"
            mode="line"
            className="heading-luxury text-5xl md:text-7xl lg:text-[5.5rem] text-foreground leading-[1.08] max-w-4xl"
            delay={0.4}
          />
        </div>
      </section>

      {/* ── Description ──────────────────────────────────────── */}
      <section className="py-24 md:py-32 bg-surface border-y border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-16">
            <AnimatedSection className="lg:col-span-2">
              <p className="tracking-luxury text-muted-dark mb-4">Overview</p>
              <h2 className="heading-luxury text-2xl md:text-3xl text-foreground leading-snug">
                {service.title}
              </h2>
            </AnimatedSection>

            <AnimatedSection delay={0.15} className="lg:col-span-3">
              <div className="space-y-6">
                {service.description.map((para, i) => (
                  <RevealLine key={i} delay={0.1 * i}>
                    <p className="text-muted leading-relaxed">{para}</p>
                  </RevealLine>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ── Capabilities ─────────────────────────────────────── */}
      <section className="py-24 md:py-32 bg-background">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <AnimatedSection>
            <p className="tracking-luxury text-muted-dark mb-4">Capabilities</p>
            <h2 className="heading-luxury text-3xl md:text-4xl text-foreground mb-16">
              What we deliver
            </h2>
          </AnimatedSection>

          <HorizontalLine className="mb-0" />

          <StaggerContainer className="grid md:grid-cols-2 gap-0">
            {service.capabilities.map((cap, i) => (
              <StaggerItem key={cap}>
                <div className="flex items-center gap-5 py-6 px-4 border-b border-white/[0.06] group hover:bg-surface/50 transition-colors duration-300">
                  <span className="text-xs font-mono text-primary">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="text-foreground/80 group-hover:text-foreground transition-colors">
                    {cap}
                  </span>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ── Adjacent Service Nav ─────────────────────────────── */}
      <section className="bg-surface border-y border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-0 divide-x divide-white/[0.06]">
            {prevService ? (
              <Link
                href={`/expertise/${prevService.slug}`}
                className="group py-10 px-6 flex items-center gap-4 hover:bg-white/[0.02] transition-colors cursor-pointer"
              >
                <ArrowLeft className="w-5 h-5 text-muted-dark group-hover:text-foreground group-hover:-translate-x-1 transition-all" />
                <div>
                  <p className="text-xs text-muted-dark uppercase tracking-wider mb-1">Previous</p>
                  <p className="text-foreground/80 group-hover:text-foreground transition-colors">
                    {prevService.title}
                  </p>
                </div>
              </Link>
            ) : (
              <div />
            )}
            {nextService ? (
              <Link
                href={`/expertise/${nextService.slug}`}
                className="group py-10 px-6 flex items-center justify-end gap-4 hover:bg-white/[0.02] transition-colors cursor-pointer"
              >
                <div className="text-right">
                  <p className="text-xs text-muted-dark uppercase tracking-wider mb-1">Next</p>
                  <p className="text-foreground/80 group-hover:text-foreground transition-colors">
                    {nextService.title}
                  </p>
                </div>
                <ArrowRight className="w-5 h-5 text-muted-dark group-hover:text-foreground group-hover:translate-x-1 transition-all" />
              </Link>
            ) : (
              <div />
            )}
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────── */}
      <section className="py-28 md:py-36 bg-background relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-primary/[0.05] rounded-full blur-[180px]" />
        <div className="relative max-w-3xl mx-auto px-6 lg:px-8 text-center">
          <AnimatedSection>
            <TextReveal
              text={`Discuss your ${service.title.toLowerCase()} requirements`}
              as="h2"
              className="heading-luxury text-3xl md:text-5xl text-foreground mb-8"
            />
            <RevealLine delay={0.2}>
              <p className="text-muted leading-relaxed mb-12 max-w-lg mx-auto">
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
