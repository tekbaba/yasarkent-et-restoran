"use client";

import { motion, useReducedMotion } from "framer-motion";
import { easePremium } from "@/lib/motion";
import { cn } from "@/lib/utils";

interface ImageRevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

export function ImageReveal({ children, className, delay = 0 }: ImageRevealProps) {
  const reduce = useReducedMotion();

  return (
    <div className={cn("relative overflow-hidden", className)}>
      <motion.div
        className="absolute inset-0 h-full w-full"
        initial={false}
        whileInView={reduce ? undefined : { y: "0%", scale: 1, opacity: 1 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 1.15, delay, ease: easePremium }}
      >
        {children}
      </motion.div>
    </div>
  );
}
