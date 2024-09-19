"use client";

import React from "react";
import { motion } from "framer-motion";

import { ImagesSlider } from "@/components/ui/images-slider";
import { useRouter } from "next/navigation";

export function ListServices() {
  const router = useRouter();

  const images = [
    "https://img.freepik.com/foto-gratis/primer-plano-prueba-tubo-sangre_53876-32023.jpg?t=st=1726705024~exp=1726708624~hmac=600f6dfcb1365bd0330931d32d6f0d34fd446bfa280f412b4f79170fe040df3d&w=2000",
    "https://img.freepik.com/foto-gratis/vista-cercana-concepto-ciencia-espacio-copia_23-2148623730.jpg?t=st=1726705145~exp=1726708745~hmac=fc7a7993eff99455b53a4cb2a8843c73208edb64259d306039234cffbda6f41a&w=2000",
    "https://img.freepik.com/foto-gratis/dispositivo-medicion-temperatura-vista-superior-blanco_179666-609.jpg?t=st=1726705180~exp=1726708780~hmac=1ac87cf054812cb09623babc67b0c48ae32846c1ea55b1f6b3b2f72bcae21f86&w=2000",
    "https://img.freepik.com/foto-gratis/diagnostico-ultrasonido-estomago-cavidad-abdominal-hombre-vista-cierre-clinica-medico-ejecuta-sensor-ultrasonido-sobre-abdomen-masculino-paciente-diagnostico-organos-internos_657921-869.jpg?t=st=1726707381~exp=1726710981~hmac=03240fbbbf31f74e4d208f7f758f0357e7517aec848fbce611a91cd160dbb437&w=2000",
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
