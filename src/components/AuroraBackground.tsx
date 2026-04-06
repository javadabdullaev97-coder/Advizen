"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

interface AuroraBackgroundProps {
  children?: ReactNode;
  className?: string;
}

export default function AuroraBackground({
  children,
  className,
}: AuroraBackgroundProps) {
  return (
    <div
      className={cn(
        "relative w-full overflow-hidden",
        className,
      )}
    >
      {/* Aurora Gradient Background */}
      <div className="absolute inset-0 overflow-hidden opacity-15" aria-hidden="true">
        <motion.div
          className="absolute inset-[-100%]"
          style={{
            background: `
              repeating-linear-gradient(100deg,
                #4A0808 10%,
                #2D0404 15%,
                #630D0D 20%,
                #4A0808 25%,
                #1A0303 30%)
            `,
            backgroundSize: "300% 100%",
            filter: "blur(80px)",
          }}
          animate={{
            backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
        />
        <motion.div
          className="absolute inset-[-10px]"
          style={{
            background: `
              repeating-linear-gradient(100deg,
                rgba(74, 8, 8, 0.15) 0%,
                rgba(74, 8, 8, 0.15) 7%,
                transparent 10%,
                transparent 12%,
                rgba(74, 8, 8, 0.15) 16%),
              repeating-linear-gradient(100deg,
                #4A0808 10%,
                #2D0404 15%,
                #630D0D 20%,
                #4A0808 25%,
                #1A0303 30%)
            `,
            backgroundSize: "200%, 100%",
            backgroundPosition: "50% 50%, 50% 50%",
            mixBlendMode: "overlay",
          }}
          animate={{
            backgroundPosition: [
              "50% 50%, 50% 50%",
              "100% 50%, 150% 50%",
              "50% 50%, 50% 50%",
            ],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      </div>

      {/* Vignette Overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at center, transparent 0%, rgba(0, 0, 0, 0.7) 100%)",
        }}
        aria-hidden="true"
      />

      {/* Content */}
      <div className="relative z-10 w-full">{children}</div>
    </div>
  );
}
