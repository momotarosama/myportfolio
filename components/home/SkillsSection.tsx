"use client";

import Image from "next/image";
import AboutBg from "./AboutBg";
import Reveal from "../shared/Reveal";
import { technologies } from "./technologies";
import { useTranslation } from "react-i18next";

function SkillsSection() {
  const { t } = useTranslation();
  return (
    <section
      id="skills"
      className="relative isolate flex min-h-screen w-full items-center overflow-hidden bg-white px-6 py-24 md:px-10 lg:px-20"
    >
      <AboutBg />
      <div className="relative z-10 mx-auto w-full max-w-400">
        <Reveal animation="fade-up">
          <div className="mx-auto max-w-2xl text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-[#0368FD]">
              {t("skills.eyebrow")}
            </p>
            <h2 className="text-4xl font-bold tracking-tight text-black sm:text-5xl md:text-7xl">
              {t("skills.title")}{" "}
              <span className="text-[#0368FD]">{t("skills.accent")}</span>
            </h2>
            <p className="mt-5 text-base leading-7 text-gray-600 sm:text-lg">
              {t("skills.description")}
            </p>
          </div>
        </Reveal>

        <div className="mx-auto mt-14 grid max-w-400 grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
          {technologies.map((technology, index) => (
            <Reveal
              key={technology.name}
              animation="fade-up"
              delay={index * 0.05}
            >
              <article className="flex h-full min-h-32 flex-col items-center justify-center gap-3 rounded-2xl border border-white/80 bg-white/80 p-4 text-center shadow-lg shadow-blue-900/5 backdrop-blur-sm transition-transform duration-300 hover:-translate-y-1">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#0368FD]/10">
                  <Image
                    src={technology.icon}
                    alt=""
                    width={30}
                    height={30}
                    className="h-7 w-7 object-contain"
                  />
                </div>
                <h3 className="text-sm font-semibold text-black">
                  {technology.name}
                </h3>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export default SkillsSection;
