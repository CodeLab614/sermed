"use client";

import { useRef } from "react";
import { ReactLenis } from "lenis/react";
import {
  motion,
  useMotionTemplate,
  useScroll,
  useTransform,
} from "framer-motion";

export const SmoothScrollHero = () => {
  return (
    <div className="bg-zinc-950 relative">
      <ReactLenis
        root
        options={{
          // Learn more -> https://github.com/darkroomengineering/lenis?tab=readme-ov-file#instance-settings
          lerp: 0.05,
          //   infinite: true,
          //   syncTouch: true,
        }}
      >
        <Hero />
        <Schedule />
      </ReactLenis>
    </div>
  );
};

const SECTION_HEIGHT = 1500;

const Hero = () => {
  return (
    <div
      style={{ height: `calc(${SECTION_HEIGHT}px + 100vh)` }}
      className="relative w-full"
    >
      <CenterImage />
      <ParallaxImages />
      <div className="absolute bottom-0 left-0 right-0 h-96 bg-gradient-to-b from-zinc-950/0 to-zinc-950" />
    </div>
  );
};

const CenterImage = () => {
  const { scrollY } = useScroll();

  const clip1 = useTransform(scrollY, [0, 1500], [25, 0]);
  const clip2 = useTransform(scrollY, [0, 1500], [75, 100]);

  const clipPath = useMotionTemplate`polygon(${clip1}% ${clip1}%, ${clip2}% ${clip1}%, ${clip2}% ${clip2}%, ${clip1}% ${clip2}%)`;

  const backgroundSize = useTransform(
    scrollY,
    [0, SECTION_HEIGHT + 500],
    ["170%", "100%"]
  );
  const opacity = useTransform(
    scrollY,
    [SECTION_HEIGHT, SECTION_HEIGHT + 500],
    [1, 0]
  );

  return (
    <motion.div
      className="sticky top-0 h-screen w-full"
      style={{
        clipPath,
        backgroundSize,
        opacity,
        backgroundImage: "url(/images/wallpaper-home.webp)",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    />
  );
};

const ParallaxImages = () => {
  return (
    <div className="mx-auto max-w-5xl px-4 pt-[200px]">
      <ParallaxImg
        src="https://img.freepik.com/foto-gratis/primer-medico-smartphone_23-2148504612.jpg?t=st=1724488702~exp=1724492302~hmac=20c3c9cd90d5d554079b46a864e4c096468392f8b891e8562956fcd03a7dc697&w=1380"
        alt="SERMED"
        start={-200}
        end={200}
        className="w-1/3"
      />
      <ParallaxImg
        src="https://img.freepik.com/foto-gratis/banner-medico-medico-paciente_23-2149611238.jpg?t=st=1724488597~exp=1724492197~hmac=f7a31e3f36b524c3a8a4bceb02f7e9e88e7d8a79019d56976b1d0fcf3eefc397&w=2000"
        alt="SERMED"
        start={200}
        end={-250}
        className="mx-auto w-2/3"
      />
      <ParallaxImg
        src="https://img.freepik.com/foto-gratis/doctora-trabajando-especialista-medicina_144627-30293.jpg?t=st=1724488666~exp=1724492266~hmac=dee891d65916b8b72b9a8737a1aae4270c4bd311e36e9d3e95a45fd4806f3591&w=1380"
        alt="SERMED"
        start={-200}
        end={-100}
        className="ml-auto w-1/3"
      />
      <ParallaxImg
        src="https://img.freepik.com/foto-gratis/doctor-comprobando-condicion-medica-paciente_23-2148728404.jpg?t=st=1724488951~exp=1724492551~hmac=2599702e207398d043722fe8d4bb70edf04a7e746786a052a97c08dc1d6da3da&w=2000"
        alt="SERMED"
        start={-300}
        end={-700}
        className="ml-24 w-5/12"
      />
    </div>
  );
};

const ParallaxImg = ({
  className,
  alt,
  src,
  start,
  end,
}: {
  className?: string;
  alt: string;
  src: string;
  start: number;
  end: number;
}) => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    // @ts-ignore
    offset: [`${start}px end`, `end ${end * -1}px`],
  });

  const opacity = useTransform(scrollYProgress, [0.75, 1], [1, 0]);
  const scale = useTransform(scrollYProgress, [0.75, 1], [1, 0.85]);

  const y = useTransform(scrollYProgress, [0, 1], [start, end]);
  const transform = useMotionTemplate`translateY(${y}px) scale(${scale})`;

  return (
    <motion.img
      src={src}
      alt={alt}
      className={className}
      ref={ref}
      style={{ transform, opacity }}
    />
  );
};

const Schedule = () => {
  return (
    <section
      id="launch-schedule"
      className="mx-auto max-w-5xl px-4 py-48 text-white"
    >
      <motion.h1
        initial={{ y: 48, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ ease: "easeInOut", duration: 0.75 }}
        className="mb-20 text-4xl font-black uppercase text-zinc-50"
      >
        Quienes somos
      </motion.h1>
      <ScheduleItem
        title="Sobre nosotros"
        date="Somos una empresa 100% Juarense creada con el propósito de brindar atención médica de calidad y de manera oportuna a nuestra comunidad ofreciendo un trato cálido y humano a todos nuestros pacientes"
      />
      <ScheduleItem
        title="Área de servicio"
        date="En SERMED ofrecemos el servicio de médicos a domicilio, ideal para personas que no puedas por algún motivo trasladarse en ese momento a recibir atención médica, les sea físicamente imposible salir de su domicilio o simplemente prefieren ser atendidos en la comodidad de su hogar."
      />
    </section>
  );
};

const ScheduleItem = ({ title, date }: { title: string; date: string }) => {
  return (
    <motion.div
      initial={{ y: 48, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ ease: "easeInOut", duration: 0.75 }}
      className="mb-9 flex items-center justify-between border-b border-zinc-800 px-3 pb-9"
    >
      <div>
        <h5 className="mb-1.5 text-xl text-zinc-50">{title}</h5>
        <p className="text-sm text-zinc-500">{date}</p>
      </div>
    </motion.div>
  );
};
