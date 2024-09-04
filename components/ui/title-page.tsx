"use client";

import { useEffect, useRef } from "react";

import gsap from "gsap";
import { CustomEase } from "gsap/dist/CustomEase";

gsap.registerPlugin(CustomEase);
CustomEase.create("cubic-text", "0.76, 0, 0.24, 1");

interface TitleProps {
  title: string[];
}

export const TitlePage = ({ title }: TitleProps) => {
  const infiniteRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const titles = document.querySelectorAll(".h_title");
    const tl = gsap.timeline({ defaults: { duration: 1 } });

    titles.forEach((title, index) => {
      const el = title.querySelectorAll("span span");
      const pointRef = title.querySelector(".point-ref");
      const delay = index * 0.08;

      tl.to(
        pointRef,
        {
          width: "100%",
          duration: 1,
          ease: "cubic-text",
          delay: 1.3,
        },
        delay
      );

      tl.to(
        pointRef,
        {
          width: 0,
          duration: 1,
          ease: "cubic-text",
          delay: 4,
        },
        delay
      );

      tl.to(
        el,
        {
          y: 0,
          duration: 1.5,
          ease: "cubic-text",
          delay: 2,
        },
        delay
      );
    });

    tl.to(
      infiniteRef.current,
      {
        marginLeft: 0,
        marginRight: 0,
        opacity: 1,
        ease: "power1.out",
      },
      2
    );
  }, []);

  return (
    <div className="h-[50dvh] xl:h-[100dvh] flex items-center justify-center p-8 xl:p-40 relative">
      {title.map((t, i) => (
        <h1
          key={i}
          className="h_title relative w-full text-center text-[10vw] font-medium uppercase leading-[90%] pointer-events-none"
        >
          <span className="-mb-1.5 overflow-hidden -mt-6 inline-block align-bottom">
            <span className="inline-block translate-y-full pb-1.5 will-change-transform">
              {t}
            </span>
          </span>
          <div className="point-ref -bottom-4 absolute bg-primary rounded-full h-0.5" />
        </h1>
      ))}
      <div
        ref={infiniteRef}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce opacity-0"
      >
        <i className="fi fi-rr-chevron-double-down text-2xl"></i>
      </div>
    </div>
  );
};
