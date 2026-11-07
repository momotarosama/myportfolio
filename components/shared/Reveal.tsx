"use client";

import React, { useEffect, useRef, useState } from "react";

type AnimationType =
  | "fade"
  | "fade-up"
  | "fade-down"
  | "fade-left"
  | "fade-right"
  | "zoom";

interface RevealProps {
  children: React.ReactNode;
  animation?: AnimationType;
  duration?: number;
  delay?: number;
  distance?: number;
  threshold?: number;
}

export default function Reveal({
  children,
  animation = "fade-up",
  duration = 700,
  delay = 0,
  distance = 50,
  threshold = 0.15,
}: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const lastScrollY = useRef(0);

  const [visible, setVisible] = useState(false);
  const [direction, setDirection] = useState<"up" | "down">("down");

  /*
   * Détection de la direction du scroll
   */
  useEffect(() => {
    lastScrollY.current = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY.current) {
        setDirection("down");
      } else if (currentScrollY < lastScrollY.current) {
        setDirection("up");
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  /*
   * Détection de l'entrée / sortie de l'écran
   */
  useEffect(() => {
    const element = ref.current;

    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setVisible(entry.isIntersecting);
      },
      {
        threshold: threshold,
      },
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [threshold]);

  return (
    <div
      ref={ref}
      className={`w-full reveal reveal-${animation} ${visible ? "is-visible" : ""}`}
      data-direction={direction}
      style={
        {
          "--reveal-duration": `${duration}ms`,
          "--reveal-delay": `${delay}ms`,
          "--reveal-distance": `${distance}px`,
        } as React.CSSProperties
      }
    >
      {children}
    </div>
  );
}
