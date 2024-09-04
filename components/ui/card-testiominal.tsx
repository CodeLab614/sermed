"use client";

import { motion } from "framer-motion";
import { BackgroundGradient } from "@/components/ui/background-gradient";

interface CardTestiomianlProps {
  testimonial: {
    name: string;
    comment: string;
  };
}

export const CardTestimonial = ({ testimonial }: CardTestiomianlProps) => {
  return (
    <motion.div
      initial={{ y: 48, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ ease: "easeInOut", duration: 0.75 }}
    >
      <BackgroundGradient className="rounded-[22px] max-w-sm p-4 sm:p-10 bg-white">
        <p className="text-base sm:text-xl text-black mt-4 mb-2">
          {testimonial.name}
        </p>
        <p className="text-sm mb-5 text-neutral-600">{testimonial.comment}</p>
      </BackgroundGradient>
    </motion.div>
  );
};
