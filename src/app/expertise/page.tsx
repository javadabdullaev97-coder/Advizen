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

type Category = "all" | "advisory" | "operations" | "growth";

interface Service {
  num: string;
  title: string;
  category: Category;
  description: string;
  capabilities: string[];
}

const services: Service[] = [
  {
    num: "01",
    title: "Tax Consulting",
    category: "advisory",
    description:
      "Strategic tax planning, optimization, and full compliance management. We navigate Uzbekistan's evolving tax code so you maintain efficiency and integrity.",
    capabilities: [
      "Tax planning & optimization",
      "Compliance & filing",
      "Transfer pricing",
      "Tax audit support",
      "International tax advisory",
      "VAT consulting",
    ],
  },
  {
    num: "02",
    title: "Legal Advisory",
    category: "advisory",
    description:
      "Full-spectrum legal counsel — from entity formation and contracts to regulatory compliance and dispute resolution.",
    capabilities: [
      "Business registration & licensing",
      "Contract drafting & review",
      "Corporate governance",
      "Regulatory compliance",
      "Dispute resolution",
      "Intellectual property",
    ],
  },
  {
    num: "03",
    title: "Finance & Accounting",
    category: "operations",
    description:
      "End-to-end financial management. We ensure your books are precise, your reporting is transparent, and your strategy is data-informed.",
    capabilities: [
      "Bookkeeping & accounting",
      "IFRS / NAS reporting",
      "Audit preparation",
      "Budgeting & forecasting",
      "Cash flow management",
      "Financial advisory",
    ],
  },
  {
    num: "04",
    title: "Human Resources",
    category: "operations",
    description:
      "Complete HR infrastructure — recruitment, payroll, compliance, outsourcing, and Employer of Record for foreign entrants.",
    capabilities: [
      "Recruitment & staffing",
      "Payroll management",
      "HR outsourcing",
      "Employer of Record (EOR)",
      "HR audits & compliance",
      "Training & development",
    ],
  },
  {
    num: "05",
    title: "Marketing & SMM",
    category: "growth",
    description:
      "Strategic brand positioning and digital presence across Central Asian markets. From strategy to execution.",
    capabilities: [
      "Digital strategy",
      "Social media management",
      "Content & brand development",
      "SEO & performance marketing",
      "Market research",
      "Campaign management",
    ],
  },
  {
    num: "06",
    title: "Funding & Grants",
    category: "growth",
    description:
      "Guidance on securing capital — grant applications, investment readiness, financial modelling, and donor engagement.",
    capabilities: [
      "Grant applications",
      "Investment readiness",
      "Business plan development",
      "Donor & investor matching",
      "Financial modelling",
      "Due diligence support",
    ],
  },
];

const industries = [
  "Construction",
  "Real Estate",
  "Manufacturing",
  "FMCG",
  "Technology",
  "Agriculture",
  "Textiles",
  "Healthcare",
  "Education",
  "Media & Advertising",
  "Interior Design",
  "Furniture",
  "Dairy & Food",
  "Logistics",
  "Retail",
  "Legal Services",
];

const filters: { label: string; value: Category }[] = [
  { label: "All Services", value: "all" },
  { label: "Advisory", value: "advisory" },
  { label: "Operations", value: "operations" },
  { label: "Growth", value: "growth" },
];

export default function ExpertisePage() {
  const [activeFilter, setActiveFilter] = useState<Category>("all");

  const filtered =
    activeFilter === "all"
      ? services
      : services.filter((s) => s.category === activeFilter);

  return (
    <>
      {/* Hero */}
      <section className="relative pt-36 pb-24 md:pt-44 md:pb-32 bg-background overflow-hidden">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.05 }}
          transition={{ duration: 3 }}
          className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-primary rounded-full blur-[200px]"
        />
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
          <AnimatedSection>
            <p className="tracking-luxury text-muted-dark mb-6">
              Expertise
            </p>
            <h1 className="heading-luxury text-5xl md:text-7xl text-foreground leading-[1.08] max-w-4xl">
              Integrated services,
              <br />
              <span className="text-primary-light">singular results</span>
            </h1>
            <p className="text-lg text-muted max-w-2xl mt-8 leading-relaxed">
              Six core disciplines. Fifteen industries. One cohesive advisory
              practice designed for the complexities of Central Asian markets.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Filter + Services */}
      <section className="py-24 md:py-32 bg-surface border-y border-border">
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
                      : "border-border text-muted hover:text-foreground hover:border-foreground/30"
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
              className="space-y-6"
            >
              {filtered.map((service) => (
                <article
                  key={service.num}
                  className="border border-border p-8 md:p-12 hover:border-primary/20 transition-all duration-500 group"
                >
                  <div className="grid lg:grid-cols-2 gap-10">
                    <div>
                      <div className="flex items-center gap-4 mb-6">
                        <span className="text-xs font-mono text-muted-dark">
                          {service.num}
                        </span>
                        <span className="tracking-luxury text-primary">
                          {service.category}
                        </span>
                      </div>
                      <h3 className="font-serif text-2xl md:text-3xl text-foreground mb-4 tracking-wide">
                        {service.title}
                      </h3>
                      <p className="text-muted leading-relaxed">
                        {service.description}
                      </p>
                    </div>
                    <div>
                      <p className="tracking-luxury text-muted-dark mb-4">
                        Capabilities
                      </p>
                      <div className="grid grid-cols-2 gap-x-8 gap-y-3">
                        {service.capabilities.map((cap) => (
                          <div
                            key={cap}
                            className="flex items-start gap-2 group/cap"
                          >
                            <span className="w-1 h-1 bg-primary rounded-full mt-2 shrink-0" />
                            <span className="text-sm text-muted group-hover/cap:text-foreground transition-colors">
                              {cap}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* Industries */}
      <section className="py-24 md:py-32 bg-background">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <AnimatedSection>
            <p className="tracking-luxury text-muted-dark mb-4">
              Industries Served
            </p>
            <h2 className="heading-luxury text-3xl md:text-4xl text-foreground mb-16">
              15+ sectors, one standard of excellence
            </h2>
          </AnimatedSection>

          <HorizontalLine className="mb-0" />

          <StaggerContainer className="grid grid-cols-2 md:grid-cols-4 gap-0">
            {industries.map((ind) => (
              <StaggerItem key={ind}>
                <div className="py-6 px-4 border-b border-r border-border hover:bg-surface transition-colors group cursor-default">
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
      <section className="py-24 md:py-32 bg-surface border-t border-border relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-primary/6 rounded-full blur-[180px]" />
        <div className="relative max-w-3xl mx-auto px-6 lg:px-8 text-center">
          <AnimatedSection>
            <h2 className="heading-luxury text-3xl md:text-5xl text-foreground mb-6">
              Discuss your requirements
            </h2>
            <p className="text-muted leading-relaxed mb-10 max-w-lg mx-auto">
              Every engagement begins with a conversation. Let us understand
              your business before we propose solutions.
            </p>
            <Link
              href="/contact"
              className="group inline-flex items-center gap-3 px-10 py-4 bg-primary text-foreground text-sm uppercase tracking-[0.12em] font-medium hover:bg-primary-light transition-all duration-300 cursor-pointer"
            >
              Get in touch
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
