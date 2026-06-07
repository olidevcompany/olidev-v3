"use client";

import { motion, type Variants } from "framer-motion";
import type { ReactNode } from "react";

type AnimatedGroupProps = {
  children: ReactNode;
  className?: string;
  variants?: {
    container?: Variants;
    item?: Variants;
  };
};

export function AnimatedGroup({ children, className, variants }: AnimatedGroupProps) {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={variants?.container}
      className={className}
    >
      {Array.isArray(children)
        ? children.map((child, index) => (
            <motion.div key={index} variants={variants?.item}>
              {child}
            </motion.div>
          ))
        : <motion.div variants={variants?.item}>{children}</motion.div>}
    </motion.div>
  );
}