"use client";

import HeroBg from "./HeroBg";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Reveal from "../shared/Reveal";
import TechnologyMarquee from "./TechnologyMarquee";
import { useTranslation } from "react-i18next";

function HeroSection() {
  const { t } = useTranslation();
  return (
    <main
      className="relative isolate w-full flex min-h-screen overflow-hidden bg-white"
      style={{}}
      id="home"
    >
      <HeroBg />
      <div className="z-10 mx-auto flex w-full max-w-400 flex-col items-center justify-center gap-5 px-4 pb-20 pt-24 text-center sm:gap-7 sm:px-6 sm:pb-24 md:flex-row md:justify-between md:gap-3 md:px-10 md:py-20 md:text-left lg:px-20">
        <div className="w-full max-w-4xl md:max-w-3xl md:flex-1">
          <Reveal animation="fade-right">
            <h1 className="text-5xl font-bold tracking-tight text-black sm:text-6xl md:text-8xl">
              {t("hero.title1")}
              <br />
              {t("hero.title2")}
              <br />
              <span className="text-[#0368FD]">{t("hero.title3")}</span>
            </h1>
          </Reveal>

          <Reveal animation="fade-up" delay={0.2}>
            <p className="mx-auto mt-5 max-w-3xl text-xl text-black sm:text-2xl md:mx-0 md:text-3xl lg:text-4xl">
              {t("hero.subtitle")}
            </p>

            <div className="mt-7 flex flex-wrap justify-center gap-4 text-base text-black sm:gap-5 sm:text-lg md:justify-start md:text-xl">
              <Link
                href="/#projects"
                className="inline-flex cursor-pointer items-center justify-center gap-2 rounded-full bg-[#0368FD] px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-[#0257d6] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0368FD] focus-visible:ring-offset-2 sm:text-base md:text-lg"
              >
                {t("hero.work")}
                <ArrowRight size={16} aria-hidden="true" />
              </Link>

              <Link
                href="/#contact"
                className="inline-flex cursor-pointer items-center justify-center gap-2 rounded-full border border-gray-300 bg-transparent px-6 py-3 text-sm font-medium text-black transition-colors hover:bg-gray-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-400 focus-visible:ring-offset-2 sm:text-base md:text-lg"
              >
                {t("hero.talk")}
                <ArrowRight size={16} aria-hidden="true" />
              </Link>
            </div>
          </Reveal>
        </div>

        <div className="text-center text-lg text-black sm:text-xl md:shrink-0 md:text-2xl">
          <Reveal animation="fade-left">
            <Image
              src="/images/hero/cube.png"
              alt="cube"
              width={400}
              height={400}
              className="mx-auto h-auto w-56 sm:w-72 md:mx-0 md:w-96 lg:w-[28rem]"
            />
          </Reveal>
        </div>
      </div>
      <div className="absolute inset-x-0 bottom-2 z-10 sm:bottom-4">
        <TechnologyMarquee />
      </div>
    </main>
  );
}

export default HeroSection;
