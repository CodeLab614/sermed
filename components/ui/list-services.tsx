"use client";

import React from "react";
import { motion } from "framer-motion";

import { ImagesSlider } from "@/components/ui/images-slider";
import { useRouter } from "next/navigation";

export function ListServices() {
  const router = useRouter();

  const images = [
    "https://res.cloudinary.com/jotredev/image/upload/v1725423274/SERMED/slider-1_gzgfnw.webp",
    "https://res.cloudinary.com/jotredev/image/upload/v1725423337/SERMED/slider-2_no8kqy.webp",
    "https://res.cloudinary.com/jotredev/image/upload/v1725423353/SERMED/slider-3_up57a1.webp",
    "https://res.cloudinary.com/jotredev/image/upload/v1725423370/SERMED/slider-4_c0tbbc.webp",
  ];
  return (
    <ImagesSlider className="h-[100dvh] bg-black" images={images}>
      <motion.div
        initial={{
          opacity: 0,
          y: -80,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.6,
        }}
        className="z-50 flex flex-col justify-center items-center"
      >
        <motion.p className="font-bold text-xl md:text-6xl text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 py-4">
          ¡Tu bienestar es nuestra prioridad! <br /> Servicios médicos de
          excelencia
        </motion.p>
        <button
          onClick={() => router.push("/services")}
          className="px-4 py-2 backdrop-blur-sm border bg-primary/10 border-primary/20 text-white mx-auto text-center rounded-full relative mt-4"
        >
          <span>Ver todos los servicios →</span>
          <div className="absolute inset-x-0  h-px -bottom-px bg-gradient-to-r w-3/4 mx-auto from-transparent via-primary to-transparent" />
        </button>
      </motion.div>
    </ImagesSlider>
  );
}
