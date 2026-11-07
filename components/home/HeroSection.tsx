 "use client";

import HeroBg from "./HeroBg";
import Image from "next/image";
import Button from "../shared/Button";
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
    >
      <HeroBg />
      <div className="z-10 flex w-full items-center justify-between gap-3 px-6 py-20 md:px-10 lg:px-20">
        <div>
          <Reveal animation="fade-right">
            <h1 className=" text-4xl font-bold tracking-tight text-black sm:text-5xl md:text-8xl">
              {t("hero.title1")}
              <br />
              {t("hero.title2")}
              <br />
              <span className="text-[#0368FD]">{t("hero.title3")}</span>
            </h1>
          </Reveal>

          <Reveal animation="fade-up" delay={0.2}>
            <p className="mt-4 text-lg text-black sm:text-xl md:text-2xl lg:text-3xl">
              {t("hero.subtitle")}
            </p>

            <div className="flex gap-5 mt-6 flex-wrap text-sm text-black sm:text-base md:text-lg">
              <Button
                color="blue"
                className="rounded-full"
                rightIcon={<ArrowRight size={16} />}
                rounded
              >
                {t("hero.work")}
              </Button>

              <Button
                color="bgless"
                className="rounded-full"
                rightIcon={<ArrowRight size={16} />}
                rounded
              >
                {t("hero.talk")}
              </Button>
            </div>
          </Reveal>
        </div>

        <div className="mt-6 text-center text-lg text-black sm:text-xl md:text-2xl">
          <Reveal animation="fade-left">
            <Image
              src="/images/hero/cube.png"
              alt="cube"
              width={400}
              height={400}
              className={`h-auto w-14 md:w-100 lg:w-145`}
            />
          </Reveal>
        </div>
      </div>
      <div className="absolute inset-x-0 bottom-8 z-10">
        <TechnologyMarquee />
      </div>
    </main>
  );
}

export default HeroSection;
