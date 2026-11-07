"use client";

import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";

function AnimatedValue({
  value,
  suffix,
  started,
}: {
  value: number;
  suffix: string;
  started: boolean;
}) {
  const [currentValue, setCurrentValue] = useState(0);

  useEffect(() => {
    if (!started) return;

    const duration = 1400;
    const startTime = performance.now();
    let animationFrame = 0;

    const animate = (currentTime: number) => {
      const progress = Math.min((currentTime - startTime) / duration, 1);
      const easedProgress = 1 - Math.pow(1 - progress, 3);

      setCurrentValue(Math.round(easedProgress * value));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrame);
  }, [started, value]);

  return (
    <span>
      {currentValue}
      {suffix}
    </span>
  );
}

export default function StatsSection() {
  const { t } = useTranslation();
  const stats = [
    { value: 4, suffix: "+", label: t("stats.experience") },
    { value: 15, suffix: "+", label: t("stats.contributions") },
    { value: 100, suffix: "%", label: t("stats.dedication") },
    { value: 100, suffix: "%", label: t("stats.feedback") },
  ];
  const sectionRef = useRef<HTMLElement>(null);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;

    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStarted(true);
          observer.disconnect();
        }
      },
      { threshold: 0.25 },
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      aria-label={t("stats.aria")}
      className="w-full border-y border-gray-100 bg-white px-6 py-12 md:px-10 lg:px-20"
    >
      <div className="mx-auto grid max-w-7xl grid-cols-2 divide-x divide-y divide-gray-200 md:grid-cols-4 md:divide-y-0">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="flex flex-col items-center justify-center px-4 py-6 text-center first:pl-0 last:pr-0"
          >
            <p className="text-4xl font-bold tracking-tight text-black sm:text-5xl">
              <AnimatedValue
                value={stat.value}
                suffix={stat.suffix}
                started={started}
              />
            </p>
            <p className="mt-2 text-xs font-medium uppercase tracking-wide text-gray-500 sm:text-sm">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
