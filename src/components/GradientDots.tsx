"use client";

import { useRef, useCallback, useEffect, useState } from "react";
import { motion, useSpring, useMotionValue } from "framer-motion";

interface GradientDotsProps {
  dotSize?: number;
  spacing?: number;
  duration?: number;
  className?: string;
}

export default function GradientDots({
  dotSize = 8,
  spacing = 10,
  duration = 30,
  className = "",
}: GradientDotsProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const rawX = useMotionValue(50);
  const rawY = useMotionValue(50);
  const mx = useSpring(rawX, { stiffness: 30, damping: 20 });
  const my = useSpring(rawY, { stiffness: 30, damping: 20 });
  const [pos, setPos] = useState({ x: 50, y: 50 });

  const hexSpacing = spacing * 1.732;
  const bg = "#0D0D0D";

  const handleMouseMove = useCallback(
    (e: MouseEvent) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      rawX.set(((e.clientX - rect.left) / rect.width) * 100);
      rawY.set(((e.clientY - rect.top) / rect.height) * 100);
    },
    [rawX, rawY],
  );

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [handleMouseMove]);

  useEffect(() => {
    const unsub1 = mx.on("change", (v) =>
      setPos((p) => ({ ...p, x: v })),
    );
    const unsub2 = my.on("change", (v) =>
      setPos((p) => ({ ...p, y: v })),
    );
    return () => {
      unsub1();
      unsub2();
    };
  }, [mx, my]);

  return (
    <div
      ref={containerRef}
      className={`fixed inset-0 overflow-hidden pointer-events-none ${className}`}
      style={{ zIndex: 0 }}
    >
      {/* Layer 1: Animated dot pattern */}
      <motion.div
        className="absolute inset-0"
        style={{
          backgroundColor: bg,
          backgroundImage: `
            radial-gradient(circle at 50% 50%, transparent 1.5px, ${bg} 0 ${dotSize}px, transparent ${dotSize}px),
            radial-gradient(circle at 50% 50%, transparent 1.5px, ${bg} 0 ${dotSize}px, transparent ${dotSize}px),
            radial-gradient(circle at 50% 50%, #630D0D, transparent 55%),
            radial-gradient(circle at 50% 50%, #4A0808, transparent 55%),
            radial-gradient(circle at 50% 50%, #2A0808, transparent 60%),
            radial-gradient(ellipse at 50% 50%, #1A0505, transparent 60%)
          `,
          backgroundSize: `
            ${spacing}px ${hexSpacing}px,
            ${spacing}px ${hexSpacing}px,
            200% 200%,
            200% 200%,
            200% 200%,
            200% ${hexSpacing}px
          `,
          opacity: 0.4,
        }}
        animate={{
          backgroundPosition: [
            `0px 0px, ${spacing / 2}px ${hexSpacing / 2}px, 800% 400%, 1000% -400%, -1200% -600%, 400% ${hexSpacing}px`,
            `0px 0px, ${spacing / 2}px ${hexSpacing / 2}px, 0% 0%, 0% 0%, 0% 0%, 0% 0%`,
          ],
        }}
        transition={{
          backgroundPosition: {
            duration,
            ease: "linear",
            repeat: Infinity,
          },
        }}
      />

      {/* Layer 2: Mouse-following gradient glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `
            radial-gradient(
              600px circle at ${pos.x}% ${pos.y}%,
              rgba(99, 13, 13, 0.15),
              rgba(74, 8, 8, 0.06) 40%,
              transparent 70%
            )
          `,
          transition: "background 0.1s ease-out",
        }}
      />
    </div>
  );
}
