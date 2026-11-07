"use client";

import Image from "next/image";
import Reveal from "../shared/Reveal";
import Button from "../shared/Button";
import { ArrowDown } from "lucide-react";
import { useTranslation } from "react-i18next";

function AboutSection() {
  const { t } = useTranslation();
  return (
    <main
      id="about"
      className="relative isolate flex min-h-screen w-full flex-col overflow-hidden bg-white lg:flex-row"
    >
      <div className="flex flex-1 flex-col justify-center px-6 py-24 sm:px-10 lg:px-20 lg:py-20">
        <Reveal animation="fade-left">
          <h1 className=" text-4xl font-bold tracking-tight text-black sm:text-5xl md:text-7xl">
            {t("about.title")}{" "}
            <span className="text-[#0368FD]">{t("about.accent")}</span>
          </h1>
        </Reveal>

        <Reveal animation="fade-up" delay={0.2}>
          <p className="mt-4 max-w-2xl text-lg text-black sm:text-xl md:text-2xl lg:text-xl">
            {t("about.text1")}
            <br />
            <br />
            {t("about.text2")}
          </p>
        </Reveal>

        <Reveal animation="fade-right" delay={0.4}>
          <div className="flex gap-5 mt-6 flex-wrap text-sm text-black sm:text-base md:text-lg">
            <Button
              color="blue"
              className="rounded-full"
              rightIcon={<ArrowDown size={16} />}
              rounded
            >
              {t("about.cv")}
            </Button>
          </div>
        </Reveal>
      </div>

      <div className="relative flex w-full flex-1 flex-col bg-white lg:w-auto">
        <Reveal animation="fade-right">
          <div className="relative mx-auto h-[28rem] w-full max-w-md sm:h-[36rem] lg:ml-auto lg:mr-0 lg:h-175 lg:w-125">
            <Image
              src="/images/about/mebgless.png"
              alt=""
              fill
              className="object-cover"
            />
          </div>
        </Reveal>
      </div>
    </main>
  );
}

export default AboutSection;
