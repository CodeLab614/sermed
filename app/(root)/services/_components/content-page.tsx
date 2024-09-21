"use client";

import { ReactLenis } from "lenis/react";
import { motion } from "framer-motion";

import { TitlePage } from "@/components/ui/title-page";
import { TitleParallax } from "@/components/ui/title-parallax";
import {
  dataServicesLaboratory,
  dataServicesRadiografias,
  dataServicesUltrasound,
} from "@/assets/data";
import { Services } from "./services";

export const Content = () => {
  return (
    <ReactLenis
      root
      options={{
        lerp: 0.05,
      }}
    >
      <TitlePage title={["S", "e", "r", "v", "i", "c", "i", "o", "s"]} />
      <TitleParallax
        imageWallpaper="https://img.freepik.com/foto-gratis/autenticacion-pie-medico-elegantes-iconos_1134-904.jpg?t=st=1726725906~exp=1726729506~hmac=eb0520fc2a3d41a199f47aa3960d6f46a15687429191c5f9eeb1cd39be81641a&w=2000"
        subTitle="SERMED fue creado con el propósito de brindar atención médica de calidad y de manera oportuna a nuestra comunidad, ofreciendo un trato calido y humano a todos nuestros pacientes."
        title="Servicios de consulta"
      />
      <TitleParallax
        imageWallpaper="https://img.freepik.com/foto-gratis/primer-plano-kit-agua-salada_53876-33648.jpg?t=st=1726727009~exp=1726730609~hmac=11fb9a4b45fc9b950a4b7685c4084b3cf71993be7537cecfa0f096b1c278bb4c&w=2000"
        subTitle="Contamos con aplicacion de sueros de Inmuno boost, energy blast, detox, beauty boost entre otros."
        title="Aplicación de sueros"
      />
      <TitleParallax
        imageWallpaper="/images/bg-laboratorios.jpg"
        subTitle="01"
        title="Laboratorios"
      >
        <Services data={dataServicesLaboratory} />
        <motion.ul
          initial={{ y: 48, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ ease: "easeInOut", duration: 0.75 }}
          className="space-y-5 mb-10"
        >
          <li className="text-center text-lg">
            Perfil sano o SMAC 24,30,40 elementos.
          </li>
          <li className="text-center text-lg">Perfil tiroideo, reumático.</li>
          <li className="text-center text-lg"> Biometría hematica</li>
          <li className="text-center text-lg"> Química sanguinea</li>
          <li className="text-center text-lg">
            Hemoglobina glicosilada (HgA1c)
          </li>
          <li className="text-center text-lg"> Examen general de orina</li>
          <li className="text-center text-lg"> Pruebas especiales</li>
          <li className="text-center text-lg">Y mucho más...</li>
        </motion.ul>
      </TitleParallax>
      <TitleParallax
        imageWallpaper="/images/bg-ultrasonidos.jpg"
        subTitle="02"
        title="Ultrasonidos"
      >
        <Services data={dataServicesUltrasound} />
        <motion.ul
          initial={{ y: 48, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ ease: "easeInOut", duration: 0.75 }}
          className="space-y-5 mb-10"
        >
          <li className="text-center text-lg">
            US de abdomen, superior e inferior
          </li>
          <li className="text-center text-lg">
            US de partes blandas de rodilla, hombro.
          </li>
          <li className="text-center text-lg"> US renal</li>
          <li className="text-center text-lg"> US hepatobiliar </li>
          <li className="text-center text-lg">Y mucho más...</li>
        </motion.ul>
      </TitleParallax>
      <TitleParallax
        imageWallpaper="/images/bg-radiografias.jpg"
        subTitle="03"
        title="Radiografías"
      >
        <Services data={dataServicesRadiografias} />
        <motion.ul
          initial={{ y: 48, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ ease: "easeInOut", duration: 0.75 }}
          className="space-y-5 mb-10"
        >
          <li className="text-center text-lg">RX de abdomen, tórax</li>
          <li className="text-center text-lg">RX de cráneo</li>
          <li className="text-center text-lg"> RX de extremidades</li>
          <li className="text-center text-lg">RX columna</li>
          <li className="text-center text-lg">Y mucho más...</li>
        </motion.ul>
      </TitleParallax>
    </ReactLenis>
  );
};
