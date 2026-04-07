"use client";

import { motion } from "framer-motion";
import { scaleReveal } from "@/lib/animations";
import type { ReactNode } from "react";

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}

export default function GlassCard({
  children,
  className = "",
  hover = true,
}: GlassCardProps) {
  return (
    <motion.div
      variants={scaleReveal}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-5%" }}
      whileHover={
        hover
          ? {
              y: -6,
              scale: 1.015,
              boxShadow: "0 12px 50px rgba(99, 13, 13, 0.12), 0 0 0 1px rgba(122, 26, 26, 0.15)",
            }
          : undefined
      }
      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
      className={`relative bg-[#1A1A1A]/60 backdrop-blur-xl border border-white/[0.06] overflow-hidden transition-colors duration-300 hover:border-white/[0.12] ${className}`}
    >
      {/* Top highlight gradient */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/[0.08] to-transparent" />
      {children}
    </motion.div>
  );
}
