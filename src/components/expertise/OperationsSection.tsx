"use client";

import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Plus, Minus } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import { operationsServices } from "@/lib/services";
import { cn } from "@/lib/utils";

export default function OperationsSection() {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  return (
    <section className="py-24 md:py-32 bg-black relative overflow-hidden border-t border-white/[0.06]">
      <div className="ambient-glow ambient-glow-warm w-[700px] h-[700px] top-1/4 right-0 translate-x-1/2 opacity-[0.06]" />
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">

        <AnimatedSection className="mb-14 md:mb-16">
          <p className="tracking-luxury text-white/50 mb-4">Operations</p>
          <h2 className="heading-luxury text-3xl md:text-4xl text-foreground">
            You delegate &mdash; we execute
          </h2>
          <p className="mt-4 text-white/45 max-w-xl leading-relaxed text-sm">
            Fully managed services where we handle execution on your behalf &mdash; from entity
            management and payroll to immigration and compliance monitoring.
          </p>
        </AnimatedSection>

        <div className="border-t border-white/[0.07]">
          {operationsServices.map((service, i) => {
            const isOpen = activeIndex === i;
            return (
              <motion.div
                key={service.slug}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.4, delay: i * 0.04, ease: [0.16, 1, 0.3, 1] }}
                className="relative border-b border-white/[0.06] group/row"
              >
                {/* Left active bar */}
                <span
                  className={cn(
                    "absolute left-0 top-0 bottom-0 w-[2px] transition-all duration-300",
                    isOpen ? "bg-primary opacity-100" : "opacity-0"
                  )}
                />

                {/* Row header */}
                <button
                  type="button"
                  onClick={() => setActiveIndex(isOpen ? null : i)}
                  className="w-full flex items-center gap-5 md:gap-8 py-5 md:py-6 pl-5 pr-0 text-left"
                >
                  <span className="font-serif text-xs tabular-nums text-white/18 w-5 shrink-0">
                    {service.num}
                  </span>

                  <span
                    className={cn(
                      "heading-luxury text-lg md:text-[1.35rem] flex-1 transition-colors duration-200",
                      isOpen
                        ? "text-foreground"
                        : "text-white/55 group-hover/row:text-white/85"
                    )}
                  >
                    {service.title}
                  </span>

                  <span className="hidden lg:block text-[12px] text-white/20 max-w-[260px] text-right leading-snug shrink-0 group-hover/row:text-white/35 transition-colors duration-200">
                    {service.headline.replace("\n", " ")}
                  </span>

                  <span
                    className={cn(
                      "w-7 h-7 rounded-full border flex items-center justify-center shrink-0 transition-all duration-250 ml-4",
                      isOpen
                        ? "border-primary/30 bg-primary/[0.07]"
                        : "border-white/[0.10] group-hover/row:border-white/[0.22]"
                    )}
                  >
                    {isOpen ? (
                      <Minus className="w-3 h-3 text-primary" />
                    ) : (
                      <Plus className="w-3 h-3 text-white/35 group-hover/row:text-white/60" />
                    )}
                  </span>
                </button>

                {/* Expanded content */}
                {isOpen && (
                  <div className="pb-8 pl-10 pr-4 md:pr-2 grid md:grid-cols-[1fr_auto] gap-8 items-start">
                    <div>
                      <p className="text-[14px] text-white/52 leading-relaxed mb-5">
                        {service.description[0]}
                      </p>
                      <div className="flex flex-wrap gap-1.5">
                        {service.capabilities.map((cap) => (
                          <span
                            key={cap}
                            className="text-[11px] text-white/35 border border-white/[0.07] px-3 py-1.5 hover:border-white/[0.14] hover:text-white/55 transition-all duration-200 cursor-default"
                          >
                            {cap}
                          </span>
                        ))}
                      </div>
                    </div>
                    <Link
                      href={`/expertise/${service.slug}`}
                      className="hidden md:inline-flex items-center gap-2 text-[11px] tracking-[0.14em] uppercase text-white/32 hover:text-white/70 transition-colors duration-200 whitespace-nowrap self-start pt-0.5"
                    >
                      Full overview
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
