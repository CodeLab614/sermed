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
        imageWallpaper="https://res.cloudinary.com/jotredev/image/upload/v1725423144/SERMED/wallpaper-services_pxkq0r.webp"
        subTitle="01"
        title="Laboratorios"
      >
        <Services data={dataServicesLaboratory} />
      </TitleParallax>
      <TitleParallax
        imageWallpaper="https://res.cloudinary.com/jotredev/image/upload/v1725423274/SERMED/slider-1_gzgfnw.webp"
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
