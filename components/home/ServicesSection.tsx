 "use client";

import {
  Code2,
  Database,
  Layers3,
  Smartphone,
} from "lucide-react";
import Reveal from "../shared/Reveal";
import { useTranslation } from "react-i18next";

const services = [
  {
    title: "Web Development",
    description: "Modern, fast and scalable web applications.",
    icon: Code2,
    color: "bg-blue-600 text-white",
  },
  {
    title: "Mobile Applications",
    description: "iOS and Android apps with React Native or Flutter.",
    icon: Smartphone,
    color: "bg-red-500 text-white",
  },
  {
    title: "API & Backend",
    description: "Robust and secure APIs and server architecture.",
    icon: Database,
    color: "bg-amber-300 text-amber-950",
  },
  {
    title: "UI Integration",
    description: "Pixel-perfect integration with modern UIs.",
    icon: Layers3,
    color: "bg-emerald-500 text-white",
  },
];

export default function ServicesSection() {
  const { t } = useTranslation();
  const translatedServices = [
    { ...services[0], title: t("services.web"), description: t("services.webText") },
    { ...services[1], title: t("services.mobile"), description: t("services.mobileText") },
    { ...services[2], title: t("services.api"), description: t("services.apiText") },
    { ...services[3], title: t("services.ui"), description: t("services.uiText") },
  ];
  return (
    <section
      id="services"
      className="relative isolate w-full overflow-hidden bg-white px-6 py-24 md:px-10 lg:px-20"
    >
      <div className="absolute inset-0 -z-10 bg-[url('/images/services/servicesBg.png')] bg-cover bg-center" />
      <div className="relative z-10 mx-auto max-w-7xl">
        <Reveal animation="fade-right">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-[#0368FD]">
            {t("services.eyebrow")}
          </p>
          <h2 className="text-4xl font-bold tracking-tight text-black sm:text-5xl md:text-6xl">
            {t("services.title")} <span className="text-[#0368FD]">{t("services.accent")}</span>
          </h2>
          <p className="mt-3 text-base text-gray-600 sm:text-lg">
            {t("services.description")}
          </p>
        </Reveal>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {translatedServices.map((service, index) => {
            const Icon = service.icon;

            return (
              <Reveal
                key={service.title}
                animation="fade-up"
                delay={index * 100}
              >
                <article className="h-full rounded-2xl border border-gray-100 bg-white/85 p-6 shadow-lg shadow-blue-900/5 backdrop-blur-sm transition-transform duration-300 hover:-translate-y-1">
                  <div
                    className={`flex h-14 w-14 items-center justify-center rounded-xl ${service.color}`}
                  >
                    <Icon size={28} strokeWidth={2.5} />
                  </div>
                  <h3 className="mt-6 text-xl font-bold text-black">
                    {service.title}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-gray-600">
                    {service.description}
                  </p>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
