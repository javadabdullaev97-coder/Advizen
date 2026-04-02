"use client";

import {
  Users,
  UserPlus,
  Wallet,
  ClipboardCheck,
  Building2,
  GraduationCap,
  ShieldCheck,
  ArrowRight,
  CheckCircle2,
  Globe,
} from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import AnimatedSection, { StaggerContainer, StaggerItem } from "@/components/AnimatedSection";

const hrServices = [
  {
    icon: UserPlus,
    title: "Recruitment & Staffing",
    description:
      "Find the right talent for your organization with our comprehensive recruitment solutions, from executive search to volume hiring.",
    features: [
      "Executive search",
      "Volume recruitment",
      "Candidate screening",
      "Interview coordination",
      "Background checks",
      "Onboarding support",
    ],
  },
  {
    icon: Wallet,
    title: "Payroll Management",
    description:
      "Accurate, timely payroll processing that ensures compliance with Uzbek labor laws and tax regulations.",
    features: [
      "Monthly payroll processing",
      "Tax withholding & reporting",
      "Social contributions",
      "Payslip generation",
      "Year-end reporting",
      "Payroll audits",
    ],
  },
  {
    icon: Users,
    title: "HR Outsourcing",
    description:
      "Outsource your entire HR function or specific processes to our expert team, freeing you to focus on your core business.",
    features: [
      "Full HR function management",
      "Employee administration",
      "Benefits management",
      "Policy development",
      "Employee relations",
      "HR technology setup",
    ],
  },
  {
    icon: Globe,
    title: "Employer of Record (EOR)",
    description:
      "Establish your presence in Uzbekistan without a local legal entity. We act as the legal employer, handling all local employment liabilities.",
    features: [
      "Legal employment setup",
      "Compliant contracts",
      "Payroll & benefits",
      "Tax compliance",
      "Work permit support",
      "Employee management",
    ],
  },
  {
    icon: ClipboardCheck,
    title: "HR Audits & Compliance",
    description:
      "Ensure your HR practices meet local regulations with thorough audits and ongoing compliance monitoring.",
    features: [
      "HR policy review",
      "Labor law compliance",
      "Documentation audit",
      "Risk assessment",
      "Remediation plans",
      "Ongoing monitoring",
    ],
  },
  {
    icon: GraduationCap,
    title: "Training & Development",
    description:
      "Invest in your team with customized training programs designed to build skills and drive performance.",
    features: [
      "Skills assessment",
      "Custom training programs",
      "Leadership development",
      "Team workshops",
      "Performance management",
      "Career path planning",
    ],
  },
];

export default function HRServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 bg-black overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-40" />
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.2, 0.1] }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute top-1/4 -right-32 w-96 h-96 bg-primary/20 rounded-full blur-[150px]"
        />
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
          <AnimatedSection>
            <div className="flex items-center gap-3 mb-6">
              <Link
                href="/services"
                className="text-sm text-white/30 hover:text-white/60 transition-colors"
              >
                Services
              </Link>
              <span className="text-white/20">/</span>
              <span className="text-sm text-primary">HR Services</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 max-w-3xl leading-tight">
              HR Services
              <br />
              <span className="text-white/30">&amp; Solutions</span>
            </h1>
            <p className="text-lg text-white/40 max-w-2xl leading-relaxed">
              A full spectrum of HR services designed to optimize your workforce,
              ensure compliance, and drive organizational success in Uzbekistan.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* EOR Highlight */}
      <section className="relative -mt-12 z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <AnimatedSection direction="scale">
          <div className="relative bg-gradient-to-r from-[#1a1a1a] to-[#111] rounded-3xl p-8 md:p-12 border border-white/5 overflow-hidden">
            {/* Corner accents */}
            <div className="absolute -top-1 -left-1 w-12 h-12 border-t-2 border-l-2 border-primary/40 rounded-tl-3xl" />
            <div className="absolute -bottom-1 -right-1 w-12 h-12 border-b-2 border-r-2 border-primary/40 rounded-br-3xl" />
            <motion.div
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="absolute top-6 right-6 w-2 h-2 bg-primary rounded-full"
            />

            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-primary/10 border border-primary/20 rounded-full text-sm text-primary mb-4">
                  <Building2 className="w-4 h-4" />
                  Featured Service
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                  Employer of Record (EOR)
                </h2>
                <p className="text-white/40 leading-relaxed">
                  For foreign companies establishing a presence in Uzbekistan without
                  a local legal entity. We handle all local employment liabilities,
                  so you can hire talent in Uzbekistan compliantly and quickly.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { label: "Setup Time", value: "2-4 wks" },
                  { label: "Compliance", value: "100%" },
                  { label: "Countries", value: "15+" },
                  { label: "Contracts", value: "50+" },
                ].map((stat) => (
                  <div
                    key={stat.label}
                    className="bg-white/5 rounded-xl p-5 border border-white/5 text-center hover:border-primary/20 transition-colors"
                  >
                    <div className="text-2xl font-bold text-primary counter-glow mb-1">
                      {stat.value}
                    </div>
                    <div className="text-xs text-white/30">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </AnimatedSection>
      </section>

      {/* All HR Services */}
      <section className="py-24 md:py-32 bg-section-bg border-y border-white/5 noise-overlay">
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="text-sm font-semibold text-primary uppercase tracking-widest">
                Full HR Suite
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-white mt-4 mb-4">
                Everything HR, <span className="text-white/30">Covered</span>
              </h2>
              <div className="w-20 h-0.5 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto mt-6" />
            </div>
          </AnimatedSection>

          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {hrServices.map((service) => (
              <StaggerItem key={service.title}>
                <div className="bg-card-bg rounded-2xl border border-white/5 p-8 card-hover glow-border h-full group">
                  <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center mb-5 group-hover:bg-primary/10 transition-colors">
                    <service.icon className="w-6 h-6 text-white/30 group-hover:text-primary transition-colors" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-3">
                    {service.title}
                  </h3>
                  <p className="text-white/30 text-sm leading-relaxed mb-5">
                    {service.description}
                  </p>
                  <div className="space-y-2">
                    {service.features.map((feature) => (
                      <div key={feature} className="flex items-center gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-primary/40 shrink-0" />
                        <span className="text-xs text-white/30">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-black relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/10 rounded-full blur-[150px]" />
        <div className="relative max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <AnimatedSection direction="scale">
            <div className="bg-card-bg rounded-3xl border border-white/5 p-12 glow-border">
              <ShieldCheck className="w-12 h-12 text-primary mx-auto mb-6" />
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Need HR Support in Uzbekistan?
              </h2>
              <p className="text-white/40 text-lg mb-8 max-w-xl mx-auto">
                Whether you&apos;re hiring your first employee or managing a full
                team, we have the expertise to help.
              </p>
              <Link
                href="/contact"
                className="group inline-flex items-center gap-2 px-8 py-4 bg-primary text-white font-semibold rounded-full hover:bg-primary-light transition-all shadow-lg shadow-primary/20 hover:scale-105"
              >
                Talk to an HR Expert
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
