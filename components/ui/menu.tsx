"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";

import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

import { constant } from "@/constants";

import { FlipLink } from "@/components/ui/flip-link";
import { Button } from "@/components/ui/button";

export const Menu = () => {
  const container = useRef(null);
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const tl = useRef<gsap.core.Timeline>();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useGSAP(
    () => {
      gsap.set(".menu-link-item-holder", { y: 95 });
      gsap.set(".link-social-media", { y: 25 });

      tl.current = gsap
        .timeline({ paused: true })
        .to(".menu-overlay", {
          duration: 1.25,
          clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
          ease: "power4.inOut",
        })
        .to(".menu-link-item-holder", {
          y: 0,
          duration: 1,
          stagger: 0.1,
          ease: "power4.inOut",
          delay: -0.75,
        })
        .to(".link-social-media", {
          y: 0,
          duration: 1,
          stagger: 0.1,
          ease: "power4.inOut",
          delay: -0.75,
        });
    },
    { scope: container }
  );

  useEffect(() => {
    if (tl.current) {
      if (isMenuOpen) {
        tl.current.play();
      } else {
        tl.current.reverse();
      }
    }
  }, [isMenuOpen]);

  return (
    <div className="menu-container" ref={container}>
      <div className="menu-bar fixed top-0 left-0 w-screen p-5 lg:p-8 flex items-center justify-between z-10">
        <div className="menu-logo">
          <Link href="/">
            <Image
              src="/images/logo.png"
              alt="CERMED"
              width={50}
              height={50}
              className="object-contain"
            />
          </Link>
        </div>
        <Button
          onClick={toggleMenu}
          className="font-black text-primary uppercase text-base md:text-base lg:text-base"
        >
          MENU
        </Button>
      </div>
      <div
        className="menu-overlay fixed top-0 left-0 w-screen h-[100dvh] flex flex-col xl:flex-row gap-y-10 z-50 p-5 xl:p-10 bg-gray-100"
        style={{ clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)" }}
      >
        <div className="flex xl:flex-col items-center justify-between">
          <div className="menu-overlay-bar">
            <Link href="/">
              <Image
                src="/images/logo.png"
                alt="CERMED"
                width={50}
                height={50}
                className="object-contain"
              />
            </Link>
          </div>
          <Button
            type="button"
            onClick={toggleMenu}
            className="xl:text-8xl leading-none"
            icon
          >
            <i className="fi fi-rr-cross"></i>
          </Button>
        </div>
        <div className="xl:flex-[4] flex flex-col justify-between xl:ml-40">
          <div>
            {constant.MENU.map((link, index) => (
              <div
                key={index}
                className="menu-link-item w-max mb-8 xl:mb-3"
                style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)" }}
              >
                <div
                  className="menu-link-item-holder relative"
                  onClick={toggleMenu}
                >
                  <FlipLink href={link.path} className="tracking-[10px]">
                    {link.label}
                  </FlipLink>
                </div>
              </div>
            ))}
          </div>
          <div className="flex flex-col xl:flex-row mt-10 xl:mt-0">
            <div className="flex flex-col gap-y-2 flex-1 justify-end">
              <div
                style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)" }}
              >
                {constant.SOCIAL_MEDIA.map((socialMedia, index) => (
                  <div
                    key={index}
                    className="mb-2"
                    style={{
                      clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
                    }}
                  >
                    <div className="link-social-media relative">
                      <Link
                        href={socialMedia.href}
                        target="_blank"
                        className="leading-[1.2em] flex items-center gap-x-2"
                      >
                        {socialMedia.label}{" "}
                        <i className="fi fi-rr-arrow-up-right"></i>
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex flex-col flex-1 justify-end">
              <div
                style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)" }}
              >
                <p className="link-social-media relative">
                  genesisquintero@sermed24.com
                </p>
              </div>
              <div
                style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)" }}
              >
                <p className="link-social-media relative">
                  <i className="fi fi-brands-whatsapp mr-2"></i>
                  +52 656 6 27 86 71
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="menu-preview flex-[4] flex items-end xl:justify-end">
          <div style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)" }}>
            <div className="link-social-media relative">
              <Link href="https://jotre.dev" target="_blank">
                &copy; jotredev
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
