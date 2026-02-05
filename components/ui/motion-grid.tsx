"use client";

import React from "react";

import { motion } from "motion/react";

import { cn } from "@/lib/utils";

interface MotionGridProps {
  speed?: number; // seconds
  opacity?: number;
  direction?: "left" | "right";
  lineColor?: string; // "20, 184, 166"
  lineWidth?: string;
  gridSpacing?: string;
  backgroundColor?: string;
  enableGlow?: boolean;
  className?: string;
  children?: React.ReactNode;
}

export function MotionGrid({
  speed = 30,
  opacity = 0.15,
  direction = "right",
  lineColor = "20, 184, 166",
  lineWidth = "1px",
  gridSpacing = "20px",
  backgroundColor = "transparent",
  enableGlow = true,
  className,
  children,
}: MotionGridProps) {
  const move = direction === "right" ? 40 : -40;

  return (
    <div
      className={cn("relative overflow-hidden", className)}
      style={{ backgroundColor }}
    >
      {/* Glow layer */}
      {enableGlow && (
        <div className="absolute inset-0 z-0 bg-[radial-gradient(125%_125%_at_50%_10%,oklch(1_0_0)_40%,oklch(0.51_0.21_286.5/0.9)_100%)]" />
      )}

      {/* Animated grid */}
      <motion.div
        className="pointer-events-none absolute inset-0 z-10"
        initial={{ backgroundPosition: "0px 0px" }}
        animate={{
          backgroundPosition: `${move}px ${move}px`,
        }}
        transition={{
          duration: speed,
          repeat: Infinity,
          ease: "linear",
        }}
        style={{
          backgroundImage: `
            repeating-linear-gradient(
              45deg,
              rgba(${lineColor}, ${opacity}) 0,
              rgba(${lineColor}, ${opacity}) ${lineWidth},
              transparent ${lineWidth},
              transparent ${gridSpacing}
            ),
            repeating-linear-gradient(
              -45deg,
              rgba(${lineColor}, ${opacity}) 0,
              rgba(${lineColor}, ${opacity}) ${lineWidth},
              transparent ${lineWidth},
              transparent ${gridSpacing}
            )
          `,
          backgroundSize: "40px 40px",
        }}
      />

      {/* Content */}
      {children && <div className="relative z-20">{children}</div>}
    </div>
  );
}
