"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ReactNode } from "react";
import {
  fadeInSlow,
  staggerContainer,
  staggerItem,
  lineExpand,
  luxuryEase,
} from "@/lib/animations";

interface Props {
  children: ReactNode;
  className?: string;
  delay?: number;
}

export default function AnimatedSection({
  children,
  className = "",
  delay = 0,
}: Props) {
  const shouldReduce = useReducedMotion();
  return (
    <motion.div
      initial={shouldReduce ? { opacity: 0 } : { opacity: 0, y: 24 }}
      whileInView={shouldReduce ? { opacity: 1 } : { opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{
        duration: shouldReduce ? 0.3 : 0.7,
        delay,
        ease: luxuryEase,
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function FadeIn({
  children,
  className = "",
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  return (
    <motion.div
      variants={fadeInSlow}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function StaggerContainer({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-40px" }}
      variants={staggerContainer}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <motion.div variants={staggerItem} className={className}>
      {children}
    </motion.div>
  );
}

export function HorizontalLine({ className = "" }: { className?: string }) {
  return (
    <motion.div
      variants={lineExpand}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className={`h-px bg-border origin-left ${className}`}
    />
  );
}
