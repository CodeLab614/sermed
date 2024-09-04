"use client";

import { useEffect } from "react";

import { motion, useMotionValue, useSpring } from "framer-motion";

export const Cursor = () => {
  const cursorSize = 12;
  const mouse = {
    x: useMotionValue(0),
    y: useMotionValue(0),
  };

  const smoothOptions = { damping: 20, stiffness: 300, mass: 0.5 };
  const smoothMouse = {
    x: useSpring(mouse.x, smoothOptions),
    y: useSpring(mouse.y, smoothOptions),
  };

  const manageMouseMove = (e: MouseEvent) => {
    const { clientX, clientY } = e;
    mouse.x.set(clientX - cursorSize / 2);
    mouse.y.set(clientY - cursorSize / 2);
  };

  useEffect(() => {
    window.addEventListener("mousemove", manageMouseMove);
    return () => {
      window.removeEventListener("mousemove", manageMouseMove);
    };
  });

  return (
    <motion.div
      className="hidden xl:block fixed w-3 h-3 bg-primary rounded-full pointer-events-none z-[9999]"
      style={{ left: smoothMouse.x, top: smoothMouse.y }}
    ></motion.div>
  );
};
