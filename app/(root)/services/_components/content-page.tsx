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
        imageWallpaper="/images/wallpaper-services.webp"
        subTitle="01"
        title="Laboratorios"
      >
        <Services data={dataServicesLaboratory} />
      </TitleParallax>
      <TitleParallax
        imageWallpaper="/images/slider-1.webp"
        subTitle="02"
        title="Ultrasonidos"
      >
        <Services data={dataServicesUltrasound} />
      </TitleParallax>
      <TitleParallax
        imageWallpaper="/images/wallpaper-x-ray.webp"
        subTitle="03"
        title="Radiografías"
      >
        <Services data={dataServicesRadiografias} />
      </TitleParallax>
    </ReactLenis>
  );
};
