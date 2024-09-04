"use client";

import Link, { LinkProps } from "next/link";
import { Variants, motion } from "framer-motion";
import { cn } from "@/lib/utils";

const DURATION = 0.25;
const STAGGER = 0.025;

const variants: Variants = {
  initial: {
    y: 0,
  },
  hovered: {
    y: "-100%",
  },
};

const variantsHover: Variants = {
  initial: {
    y: "100%",
  },
  hovered: {
    y: 0,
  },
};

interface FlipLinkProps extends LinkProps {
  href: string;
  children: String;
  className?: string;
  blank?: boolean;
}

export const FlipLink = ({
  href,
  children,
  className,
  blank,
}: FlipLinkProps) => {
  return (
    <motion.div
      initial="initial"
      whileHover="hovered"
      className={cn(
        "relative block w-min overflow-hidden whitespace-nowrap text-4xl sm:text-7xl md:text-8xl font-bold uppercase",
        className
      )}
    >
      <Link href={href} target={blank ? "_blank" : ""}>
        {children.split("").map((letter, index) => (
          <motion.span
            key={index}
            variants={variants}
            transition={{
              duration: DURATION,
              ease: "easeInOut",
              delay: STAGGER * index,
            }}
            className="inline-block"
          >
            {letter}
          </motion.span>
        ))}
      </Link>
      <Link
        href={href}
        className="absolute inset-0 text-primary"
        target={blank ? "_blank" : ""}
      >
        {children.split("").map((letter, index) => (
          <motion.span
            key={index}
            variants={variantsHover}
            transition={{
              duration: DURATION,
              ease: "easeInOut",
              delay: STAGGER * index,
            }}
            className="inline-block"
          >
            {letter}
          </motion.span>
        ))}
      </Link>
    </motion.div>
  );
};
