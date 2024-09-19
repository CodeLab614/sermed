"use client";

import { ReactLenis } from "lenis/react";

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
        imageWallpaper="https://img.freepik.com/foto-gratis/cerca-escritorio-laboratorio-equipo-investigacion-profesional-bandeja-vacutainer-sangre-examen-microscopico-micro-pipeta-microscopio-herramientas-desarrollo-ciencia_482257-26481.jpg?t=st=1726704882~exp=1726708482~hmac=c6682cdebc7ac1480a5001e4ec974ed4a0179991918b9c321bce764923b12fba&w=2000"
        subTitle="01"
        title="Laboratorios"
      >
        <Services data={dataServicesLaboratory} />
      </TitleParallax>
      <TitleParallax
        imageWallpaper="https://img.freepik.com/foto-gratis/escaner-ultrasonido-moderno-clinica_7502-8375.jpg?t=st=1726707334~exp=1726710934~hmac=2bb5de13404ecbccc4d020579eee709bf42a0ac71b2b6ca83208441a0bb23e4b&w=2000"
        subTitle="02"
        title="Ultrasonidos"
      >
        <Services data={dataServicesUltrasound} />
      </TitleParallax>
      <TitleParallax
        imageWallpaper="https://res.cloudinary.com/jotredev/image/upload/v1725423254/SERMED/wallpaper-x-ray_flmvei.webp"
        subTitle="03"
        title="Radiografías"
      >
        <Services data={dataServicesRadiografias} />
      </TitleParallax>
    </ReactLenis>
  );
};
