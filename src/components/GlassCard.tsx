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
          ? { y: -4, boxShadow: "0 8px 40px rgba(99, 13, 13, 0.08)" }
          : undefined
      }
      transition={{ duration: 0.3 }}
      className={`relative bg-[#1A1A1A]/60 backdrop-blur-xl border border-white/[0.06] overflow-hidden ${className}`}
    >
      {/* Top highlight gradient */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/[0.08] to-transparent" />
      {children}
    </motion.div>
  );
}
