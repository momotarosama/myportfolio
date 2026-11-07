"use client";

import Image from "next/image";
import Link from "next/link";
import { Suspense } from "react";
import { useTranslation } from "react-i18next";

function CurrentYear() {
  return <>{new Date().getFullYear()}</>;
}

export default function Footer() {
  const { t } = useTranslation();

  const navigationLinks = [
    { href: "/", label: t("nav.home") },
    { href: "/#about", label: t("nav.about") },
    { href: "/#projects", label: t("nav.projects") },
    { href: "/#contact", label: t("nav.contact") },
  ];

  const serviceLinks = [
    { href: "/#services", label: t("services.web") },
    { href: "/#services", label: t("services.mobile") },
    { href: "/#services", label: t("services.api") },
    { href: "/#services", label: t("services.ui") },
  ];

  return (
    <footer className="bg-[#111214] px-6 py-14 text-white sm:px-10 lg:px-20">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1.15fr] lg:gap-16">
          <div>
            <Link href="/" aria-label="Techyouverymuch - accueil">
              <Image
                src="/lightLogo.svg"
                alt="Techyouverymuch"
                width={435}
                height={63}
                className="h-auto w-56 max-w-full"
              />
            </Link>
            <p className="mt-7 max-w-xs text-sm leading-7 text-gray-400">
              Building with passion. Delivering with purpose. Des solutions web
              et mobiles pensées pour faire avancer vos projets.
            </p>
          </div>

          <div>
            <h2 className="text-sm font-semibold text-white">
              {t("nav.services")}
            </h2>
            <nav
              className="mt-5 flex flex-col items-start gap-3"
              aria-label="Services"
            >
              {serviceLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-sm text-gray-400 transition-colors hover:text-[#5d9bff]"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          <div>
            <h2 className="text-sm font-semibold text-white">
              {t("nav.about")}
            </h2>
            <nav
              className="mt-5 flex flex-col items-start gap-3"
              aria-label="Navigation"
            >
              {navigationLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-gray-400 transition-colors hover:text-[#5d9bff]"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          <div>
            <h2 className="text-sm font-semibold text-white">
              {t("nav.contact")}
            </h2>
            <div className="mt-5 space-y-3 text-sm text-gray-400">
              <a
                href="mailto:momotarosamaxx@gmail.com"
                className="block transition-colors hover:text-[#5d9bff]"
              >
                momotarosamaxx@gmail.com
              </a>
              <p>{t("contact.location")}</p>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-white/10 pt-6 text-sm text-gray-500 sm:flex-row sm:items-center sm:justify-between">
          <p>
            ©{" "}
            <Suspense fallback="----">
              <CurrentYear />
            </Suspense>{" "}
            Techyouverymuch. Tous droits réservés.
          </p>
          <Link href="/#contact" className="transition-colors hover:text-white">
            {t("nav.talk")} →
          </Link>
        </div>
      </div>
    </footer>
  );
}
