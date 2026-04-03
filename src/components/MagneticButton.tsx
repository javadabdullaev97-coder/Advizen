"use client";

import { useRef, useState, type ReactNode, type MouseEvent } from "react";
import { motion, useSpring } from "framer-motion";
import Link from "next/link";
import { cn } from "@/lib/utils";

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
  const btnRef = useRef<HTMLSpanElement>(null);
  const [hovered, setHovered] = useState(false);
  const [glowPos, setGlowPos] = useState({ x: 0, y: 0 });

  const mx = useSpring(0, { stiffness: 200, damping: 20 });
  const my = useSpring(0, { stiffness: 200, damping: 20 });
  const imx = useSpring(0, { stiffness: 300, damping: 25 });
  const imy = useSpring(0, { stiffness: 300, damping: 25 });

  function handleMouse(e: MouseEvent) {
    if (!ref.current || !btnRef.current) return;
    const rect = ref.current.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    const dx = e.clientX - cx;
    const dy = e.clientY - cy;
    mx.set(dx * 0.15);
    my.set(dy * 0.15);
    imx.set(dx * 0.08);
    imy.set(dy * 0.08);

    const btnRect = btnRef.current.getBoundingClientRect();
    setGlowPos({
      x: e.clientX - btnRect.left,
      y: e.clientY - btnRect.top,
    });
  }

  function handleLeave() {
    mx.set(0);
    my.set(0);
    imx.set(0);
    imy.set(0);
    setHovered(false);
  }

  const isPrimary = variant === "primary";

  const content = (
    <motion.div
      ref={ref}
      style={{ x: mx, y: my }}
      onMouseMove={handleMouse}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={handleLeave}
      className="inline-block"
    >
      <motion.span
        ref={btnRef}
        style={{ x: imx, y: imy }}
        className={cn(
          "relative inline-flex items-center gap-2 px-8 py-4 text-sm tracking-wider uppercase cursor-pointer overflow-hidden transition-all duration-300",
          isPrimary
            ? "bg-primary text-foreground border border-primary-light/40"
            : "bg-[#0D0D0D] text-foreground border border-white/[0.10]",
          hovered && isPrimary && "border-primary-light/80 shadow-[0_0_20px_rgba(122,26,26,0.4)]",
          hovered && !isPrimary && "border-primary/60 shadow-[0_0_20px_rgba(99,13,13,0.25)]",
          className,
        )}
      >
        {/* Cursor-following glow */}
        <span
          className={cn(
            "absolute w-[200px] h-[200px] rounded-full pointer-events-none -translate-x-1/2 -translate-y-1/2 opacity-50 transition-transform duration-300 ease-out",
            hovered ? "scale-125" : "scale-0",
          )}
          style={{
            left: glowPos.x,
            top: glowPos.y,
            background: isPrimary
              ? "radial-gradient(circle, #7A1A1A 10%, transparent 70%)"
              : "radial-gradient(circle, #630D0D 10%, transparent 70%)",
            zIndex: 0,
          }}
        />

        {/* Content */}
        <span
          className={cn(
            "relative z-10 inline-flex items-center gap-2 transition-colors duration-300",
            hovered && !isPrimary && "text-primary-light",
          )}
        >
          {children}
        </span>
      </motion.span>
    </motion.div>
  );

  if (as === "a" && href) {
    return <Link href={href}>{content}</Link>;
  }

  if (as === "button" && type === "submit") {
    return (
      <button
        type="submit"
        className="inline-block bg-transparent border-none p-0 m-0"
      >
        {content}
      </button>
    );
  }

  return content;
}
