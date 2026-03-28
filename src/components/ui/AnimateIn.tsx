"use client";

import { type ReactNode } from "react";
import { motion, type Variants, useReducedMotion } from "framer-motion";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.92 },
  visible: { opacity: 1, scale: 1 },
};

const slideRight: Variants = {
  hidden: { opacity: 0, x: -24 },
  visible: { opacity: 1, x: 0 },
};

const slideLeft: Variants = {
  hidden: { opacity: 0, x: 24 },
  visible: { opacity: 1, x: 0 },
};

interface AnimateInProps {
  children: ReactNode;
  variant?: "fadeUp" | "fadeIn" | "scaleIn" | "slideRight" | "slideLeft";
  delay?: number;
  duration?: number;
  className?: string;
  once?: boolean;
  as?: "div" | "section" | "article" | "aside" | "li" | "ul";
}

const variantMap = {
  fadeUp,
  fadeIn,
  scaleIn,
  slideRight,
  slideLeft,
};

const motionElements = {
  div: motion.div,
  section: motion.section,
  article: motion.article,
  aside: motion.aside,
  li: motion.li,
  ul: motion.ul,
};

export function AnimateIn({
  children,
  variant = "fadeUp",
  delay = 0,
  duration = 0.5,
  className,
  once = true,
  as = "div",
}: AnimateInProps) {
  const reduceMotion = useReducedMotion();
  const Component = motionElements[as];

  return (
    <Component
      variants={variantMap[variant]}
      initial={reduceMotion ? false : "hidden"}
      whileInView={reduceMotion ? undefined : "visible"}
      viewport={{ once, margin: "-60px" }}
      transition={{
        duration: reduceMotion ? 0 : duration,
        delay: reduceMotion ? 0 : delay,
        ease: [0.25, 0.1, 0.25, 1],
      }}
      className={className}
    >
      {children}
    </Component>
  );
}

interface StaggerContainerProps {
  children: ReactNode;
  className?: string;
  staggerDelay?: number;
  as?: "div" | "section" | "ul";
}

export function StaggerContainer({
  children,
  className,
  staggerDelay = 0.08,
  as = "div",
}: StaggerContainerProps) {
  const reduceMotion = useReducedMotion();
  const Component = motionElements[as];

  return (
    <Component
      initial={reduceMotion ? false : "hidden"}
      whileInView={reduceMotion ? undefined : "visible"}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ staggerChildren: reduceMotion ? 0 : staggerDelay }}
      className={className}
    >
      {children}
    </Component>
  );
}

export function StaggerItem({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      variants={fadeUp}
      transition={{
        duration: reduceMotion ? 0 : 0.45,
        ease: [0.25, 0.1, 0.25, 1],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
