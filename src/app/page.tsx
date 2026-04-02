"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Scale,
  Calculator,
  Users,
  TrendingUp,
  Megaphone,
  FileText,
  ArrowRight,
  CheckCircle2,
  Building2,
  Clock,
  Award,
  Briefcase,
  GraduationCap,
  Globe,
  Phone,
  Sparkles,
} from "lucide-react";
import AnimatedSection, { StaggerContainer, StaggerItem } from "@/components/AnimatedSection";

const stats = [
  { value: "8+", label: "Years Experience", icon: Clock },
  { value: "500+", label: "Monthly Hours", icon: Briefcase },
  { value: "50+", label: "Clients", icon: Users },
  { value: "15+", label: "Industries", icon: Building2 },
  { value: "70+", label: "Projects", icon: Award },
  { value: "18+", label: "Trainings", icon: GraduationCap },
];

const services = [
  {
    icon: Scale,
    title: "Legal Advisory",
    description:
      "Comprehensive legal support for business registration, compliance, contracts, and regulatory matters in Uzbekistan.",
  },
  {
    icon: Calculator,
    title: "Tax Consulting",
    description:
      "Strategic tax planning, optimization, and compliance services to minimize your tax burden while staying fully compliant.",
  },
  {
    icon: TrendingUp,
    title: "Finance & Accounting",
    description:
      "Full-cycle accounting, financial reporting, auditing, and advisory services tailored to your business needs.",
  },
  {
    icon: Users,
    title: "HR Services",
    description:
      "End-to-end HR solutions including recruitment, payroll, compliance, outsourcing, and employer of record services.",
  },
  {
    icon: Megaphone,
    title: "Marketing & SMM",
    description:
      "Digital marketing strategy, social media management, and brand development to grow your presence in Central Asia.",
  },
  {
    icon: FileText,
    title: "Funding & Grants",
    description:
      "Expert guidance on securing funding, grants, and investment opportunities for your business growth.",
  },
];

const clients = [
  { name: "Residential Complex Developer", industry: "Real Estate" },
  { name: "Industrial Construction Company", industry: "Construction" },
  { name: "Building Materials Manufacturer", industry: "Manufacturing" },
  { name: "Interior & Facade Design Studio", industry: "Design" },
  { name: "International Freelance Platform", industry: "Technology" },
  { name: "Furniture Manufacturer", industry: "Manufacturing" },
  { name: "Dairy Products Producer", industry: "FMCG" },
  { name: "Media & Advertising Agency", industry: "Media" },
];

const whyUs = [
  "One-stop shop for all business services",
  "8+ years of experience in the Uzbek market",
  "Single point of contact for seamless support",
  "Experts across legal, tax, HR, finance & marketing",
  "Deep understanding of Central Asian markets",
  "Proven track record with 50+ satisfied clients",
];

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-black" />
        {/* Animated grid */}
        <div className="absolute inset-0 grid-bg opacity-60" />
        {/* Red accent glows */}
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.15, 0.25, 0.15] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 -right-48 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[150px]"
        />
        <motion.div
          animate={{ scale: [1.2, 1, 1.2], opacity: [0.1, 0.2, 0.1] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-1/4 -left-48 w-[400px] h-[400px] bg-primary/15 rounded-full blur-[150px]"
        />
        {/* Floating particles */}
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            animate={{
              y: [0, -30, 0],
              x: [0, 15, 0],
              opacity: [0.1, 0.3, 0.1],
            }}
            transition={{
              duration: 5 + i * 2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.8,
            }}
            className="absolute w-1 h-1 bg-primary rounded-full"
            style={{
              top: `${20 + i * 15}%`,
              left: `${10 + i * 18}%`,
            }}
          />
        ))}

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-32 md:py-40">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 backdrop-blur-sm rounded-full text-sm text-white/60 mb-8 border border-white/10">
                <Sparkles className="w-4 h-4 text-primary" />
                Trusted Business Partner in Central Asia
              </div>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="text-5xl md:text-7xl lg:text-8xl font-bold text-white leading-[1.05] tracking-tight mb-6"
            >
              Your One-Stop
              <br />
              <span className="text-shimmer">Business</span>
              <br />
              <span className="text-white/80">Consulting</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="text-lg md:text-xl text-white/40 max-w-xl mb-10 leading-relaxed"
            >
              Expert tax, legal, finance, accounting, HR, and marketing consulting
              under one roof. Focus on growing your business while we handle
              everything else.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link
                href="/contact"
                className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary text-white font-semibold rounded-full hover:bg-primary-light transition-all shadow-lg shadow-primary/25 hover:shadow-primary/40 hover:scale-105"
              >
                Book a Consultation
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/5 text-white font-semibold rounded-full hover:bg-white/10 transition-all backdrop-blur-sm border border-white/10 hover:border-white/20"
              >
                Explore Services
              </Link>
            </motion.div>
          </div>
        </div>

        {/* Scrolling indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-6 h-10 rounded-full border-2 border-white/20 flex items-start justify-center p-1.5"
          >
            <motion.div
              animate={{ opacity: [0, 1, 0], y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-1.5 h-1.5 bg-primary rounded-full"
            />
          </motion.div>
        </motion.div>
      </section>

      {/* Stats Section */}
      <section className="relative z-10 bg-black py-16 border-y border-white/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <StaggerContainer className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {stats.map((stat) => (
              <StaggerItem key={stat.label}>
                <div className="text-center group">
                  <stat.icon className="w-5 h-5 text-primary mx-auto mb-3 group-hover:scale-110 transition-transform" />
                  <div className="text-3xl md:text-4xl font-bold text-white counter-glow mb-1">
                    {stat.value}
                  </div>
                  <div className="text-xs text-white/30 uppercase tracking-wider">
                    {stat.label}
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Services Section */}
      <section className="relative py-28 md:py-36 bg-section-bg grid-bg noise-overlay overflow-hidden">
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center max-w-2xl mx-auto mb-20">
              <span className="text-sm font-semibold text-primary uppercase tracking-widest">
                What We Do
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-white mt-4 mb-4">
                Comprehensive Business
                <br />
                <span className="text-white/40">Services</span>
              </h2>
              <div className="w-20 h-0.5 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto mt-6" />
            </div>
          </AnimatedSection>

          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <StaggerItem key={service.title}>
                <div className="group relative bg-card-bg rounded-2xl p-8 border border-white/5 card-hover glow-border h-full">
                  <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center mb-5 group-hover:bg-primary/10 transition-colors">
                    <service.icon className="w-6 h-6 text-white/40 group-hover:text-primary transition-colors" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-3">
                    {service.title}
                  </h3>
                  <p className="text-white/30 text-sm leading-relaxed">
                    {service.description}
                  </p>
                  <Link
                    href="/services"
                    className="inline-flex items-center gap-1 text-sm font-medium text-primary hover:text-primary-light mt-5 transition-colors group/link"
                  >
                    Learn more{" "}
                    <ArrowRight className="w-3.5 h-3.5 group-hover/link:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="relative py-28 md:py-36 bg-black overflow-hidden">
        {/* Background accent */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[200px]" />

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection direction="left">
              <span className="text-sm font-semibold text-primary uppercase tracking-widest">
                Why Advizen
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-white mt-4 mb-6 leading-tight">
                All Your Business Needs,
                <br />
                <span className="text-white/40">One Expert Team</span>
              </h2>
              <p className="text-white/40 text-lg mb-10 leading-relaxed">
                We bring all our specialized services together, offering one point
                of contact and seamless support. Your go-to team for everything your
                business needs in Central Asia.
              </p>
              <div className="space-y-4">
                {whyUs.map((item, i) => (
                  <motion.div
                    key={item}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1, duration: 0.5 }}
                    className="flex items-start gap-3 group"
                  >
                    <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                    <span className="text-white/60 group-hover:text-white/80 transition-colors">
                      {item}
                    </span>
                  </motion.div>
                ))}
              </div>
              <Link
                href="/about"
                className="group inline-flex items-center gap-2 px-8 py-4 bg-white/5 text-white font-semibold rounded-full hover:bg-white/10 transition-all border border-white/10 hover:border-primary/30 mt-10"
              >
                About Our Team
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </AnimatedSection>

            <AnimatedSection delay={0.2} direction="right">
              <div className="relative">
                <div className="bg-gradient-to-br from-[#1a1a1a] to-[#111] rounded-3xl p-10 border border-white/5">
                  <motion.div
                    animate={{ opacity: [0.5, 1, 0.5] }}
                    transition={{ duration: 3, repeat: Infinity }}
                    className="absolute top-4 right-4 w-2 h-2 bg-primary rounded-full"
                  />
                  <h3 className="text-2xl font-bold text-white mb-4">
                    Save Time &amp; Resources
                  </h3>
                  <p className="text-white/40 mb-8 leading-relaxed">
                    Instead of managing multiple vendors and consultants, work with
                    one integrated team that understands your entire business.
                  </p>
                  <div className="grid grid-cols-2 gap-4">
                    {[
                      { value: "70+", label: "Projects Delivered" },
                      { value: "15+", label: "Industries Covered" },
                    ].map((stat) => (
                      <div
                        key={stat.label}
                        className="bg-white/5 rounded-xl p-5 border border-white/5 hover:border-primary/20 transition-colors"
                      >
                        <div className="text-3xl font-bold text-primary counter-glow mb-1">
                          {stat.value}
                        </div>
                        <div className="text-sm text-white/30">{stat.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
                {/* Decorative corner accents */}
                <div className="absolute -top-2 -left-2 w-8 h-8 border-t-2 border-l-2 border-primary/30 rounded-tl-lg" />
                <div className="absolute -bottom-2 -right-2 w-8 h-8 border-b-2 border-r-2 border-primary/30 rounded-br-lg" />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Clients Section */}
      <section className="relative py-28 md:py-36 bg-section-bg border-y border-white/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="text-sm font-semibold text-primary uppercase tracking-widest">
                Our Clients
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-white mt-4 mb-4">
                Trusted by Leaders
              </h2>
              <div className="w-20 h-0.5 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto mt-6" />
            </div>
          </AnimatedSection>

          <StaggerContainer className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {clients.map((client) => (
              <StaggerItem key={client.name}>
                <div className="bg-card-bg rounded-2xl p-6 border border-white/5 card-hover glow-border text-center group">
                  <div className="w-14 h-14 rounded-full bg-white/5 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/10 transition-colors">
                    <Building2 className="w-6 h-6 text-white/20 group-hover:text-primary transition-colors" />
                  </div>
                  <h4 className="text-sm font-semibold text-white/80 mb-1">
                    {client.name}
                  </h4>
                  <span className="text-xs text-white/30">{client.industry}</span>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-28 md:py-36 bg-black overflow-hidden">
        {/* Background effects */}
        <motion.div
          animate={{ rotate: [0, 360] }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-primary/5 rounded-full"
        />
        <motion.div
          animate={{ rotate: [360, 0] }}
          transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] border border-primary/5 rounded-full"
        />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/10 rounded-full blur-[150px]" />

        <div className="relative max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <AnimatedSection direction="scale">
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Ready to{" "}
              <span className="text-shimmer">Transform</span>
              <br />
              Your Business?
            </h2>
            <p className="text-lg text-white/40 mb-10 max-w-2xl mx-auto">
              Let us handle the complexities of tax, legal, HR, and more, so you can
              focus on what matters most — growing your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary text-white font-semibold rounded-full hover:bg-primary-light transition-all shadow-lg shadow-primary/25 hover:shadow-primary/40 hover:scale-105"
              >
                Schedule a Free Consultation
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <a
                href="tel:+998334884888"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/5 text-white font-semibold rounded-full hover:bg-white/10 transition-all backdrop-blur-sm border border-white/10"
              >
                <Phone className="w-4 h-4" />
                +998 (33) 488 48 88
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
