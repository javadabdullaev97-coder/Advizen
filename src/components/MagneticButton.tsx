"use client";

import { useRef, useState, type ReactNode } from "react";
import { motion, useSpring } from "framer-motion";
import Link from "next/link";

interface MagneticButtonProps {
  children: ReactNode;
  variant?: "primary" | "outline";
  as?: "button" | "a";
  href?: string;
  className?: string;
  type?: "button" | "submit";
}

export default function MagneticButton({
  children,
  variant = "primary",
  as = "button",
  href,
  className = "",
  type = "button",
}: MagneticButtonProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [hovered, setHovered] = useState(false);

  const x = useSpring(0, { stiffness: 200, damping: 20 });
  const y = useSpring(0, { stiffness: 200, damping: 20 });
  const innerX = useSpring(0, { stiffness: 300, damping: 25 });
  const innerY = useSpring(0, { stiffness: 300, damping: 25 });

  function handleMouse(e: React.MouseEvent) {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    const dx = e.clientX - cx;
    const dy = e.clientY - cy;
    x.set(dx * 0.15);
    y.set(dy * 0.15);
    innerX.set(dx * 0.08);
    innerY.set(dy * 0.08);
  }

  function handleLeave() {
    x.set(0);
    y.set(0);
    innerX.set(0);
    innerY.set(0);
    setHovered(false);
  }

  const baseStyles =
    variant === "primary"
      ? "bg-primary text-foreground hover:bg-primary/90"
      : "border border-white/[0.12] text-foreground hover:border-white/[0.25]";

  const content = (
    <motion.div
      ref={ref}
      style={{ x, y }}
      onMouseMove={handleMouse}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={handleLeave}
      className="inline-block"
    >
      <motion.span
        style={{ x: innerX, y: innerY }}
        animate={{
          boxShadow: hovered
            ? "0 0 30px rgba(99, 13, 13, 0.3)"
            : "0 0 0px rgba(99, 13, 13, 0)",
        }}
        transition={{ duration: 0.3 }}
        className={`inline-flex items-center gap-2 px-8 py-4 text-sm tracking-wider uppercase transition-colors duration-300 cursor-pointer ${baseStyles} ${className}`}
      >
        {children}
      </motion.span>
    </motion.div>
  );

  if (as === "a" && href) {
    return <Link href={href}>{content}</Link>;
  }

  if (as === "button" && type === "submit") {
    return <button type="submit" className="inline-block bg-transparent border-none p-0 m-0">{content}</button>;
  }

  return content;
}
