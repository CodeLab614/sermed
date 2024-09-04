"use client";

import { useState } from "react";
import { motion } from "framer-motion";

import { cn } from "@/lib/utils";

interface FaqProps {
  question: string;
  answer: string;
}

export const Faq = ({ question, answer }: FaqProps) => {
  const [accordionOpen, setAccordionOpen] = useState<boolean>(false);

  return (
    <motion.div
      initial={{ y: 48, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ ease: "easeInOut", duration: 0.75 }}
      className="bg-gray-100 rounded-xl max-w-3xl mx-auto"
    >
      <button
        onClick={() => setAccordionOpen(!accordionOpen)}
        type="button"
        className="flex items-center justify-between w-full p-5"
      >
        <span className="text-xl font-medium">{question}</span>
        <span
          className={cn(
            "transition-transform duration-300 ease-in-out",
            accordionOpen && "rotate-90"
          )}
        >
          <i className="fi fi-rr-angle-right"></i>
        </span>
      </button>
      <div
        className={cn(
          "grid overflow-hidden transition-all duration-300 ease-in-out text-sm px-5",
          accordionOpen
            ? "grid-rows-[1fr] opacity-100 mt-3 pb-5"
            : "grid-rows-[0fr] opacity-0"
        )}
      >
        <p className="overflow-hidden">{answer}</p>
      </div>
    </motion.div>
  );
};
