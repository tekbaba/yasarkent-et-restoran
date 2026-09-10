"use client";

import { motion, useReducedMotion } from "framer-motion";
import { easePremium } from "@/lib/motion";

interface RevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

export function Reveal({ children, className, delay = 0 }: RevealProps) {
  const reduce = useReducedMotion();

  return (
    <motion.div
      className={className}
      initial={false}
      whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.85, delay, ease: easePremium }}
    >
      {children}
    </motion.div>
  );
}
