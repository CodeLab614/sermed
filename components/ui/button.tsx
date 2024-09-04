import { ReactNode, forwardRef } from "react";
import { motion } from "framer-motion";

import { cn } from "@/lib/utils";

import { variants, variantsHover } from "@/anmations/button";
import { constant } from "@/constants";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: string | ReactNode;
  icon?: boolean;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, children, icon, ...props }, ref) => {
    return (
      <motion.div
        initial="initial"
        whileHover="hovered"
        className={cn(
          "relative block w-min overflow-hidden whitespace-nowrap text-4xl sm:text-7xl md:text-4xl xl:text7xl font-bold uppercase",
          className
        )}
      >
        {!icon && typeof children === "string" ? (
          <>
            <button type="button" ref={ref} {...props}>
              {children.split("").map((letter, index) => (
                <motion.span
                  key={index}
                  variants={variants}
                  transition={{
                    duration: constant.DURATION,
                    ease: "easeInOut",
                    delay: constant.STAGGER * index,
                  }}
                  className="inline-block"
                >
                  {letter}
                </motion.span>
              ))}
            </button>
            <button
              type="button"
              ref={ref}
              {...props}
              className="absolute inset-0 text-primary"
            >
              {children.split("").map((letter, index) => (
                <motion.span
                  key={index}
                  variants={variantsHover}
                  transition={{
                    duration: constant.DURATION,
                    ease: "easeInOut",
                    delay: constant.STAGGER * index,
                  }}
                  className="inline-block"
                >
                  {letter}
                </motion.span>
              ))}
            </button>
          </>
        ) : (
          <>
            <button type="button" ref={ref} {...props}>
              <motion.span
                variants={variants}
                transition={{
                  duration: constant.DURATION,
                  ease: "easeInOut",
                  delay: constant.STAGGER,
                }}
                className="inline-block"
              >
                {children}
              </motion.span>
            </button>
            <button
              type="button"
              className="absolute inset-0 text-primary"
              ref={ref}
              {...props}
            >
              <motion.span
                variants={variantsHover}
                transition={{
                  duration: constant.DURATION,
                  ease: "easeInOut",
                  delay: constant.STAGGER,
                }}
                className="inline-block"
              >
                {children}
              </motion.span>
            </button>
          </>
        )}
      </motion.div>
    );
  }
);

Button.displayName = "Button";

export { Button };
