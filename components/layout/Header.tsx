"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import Reveal from "@/components/shared/Reveal";
import Image from "next/image";
import Button from "../shared/Button";
import { ArrowRight, ChevronDown } from "lucide-react";
import { useTranslation } from "react-i18next";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [languageOpen, setLanguageOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const languageMenuRef = useRef<HTMLDivElement>(null);
  const { t, i18n } = useTranslation();

  const currentLanguage = i18n.language.startsWith("fr")
    ? "fr"
    : i18n.language.startsWith("es")
      ? "es"
      : "en";

  const changeLanguage = (language: "fr" | "en" | "es") => {
    void i18n.changeLanguage(language);
    window.localStorage.setItem("language", language);
    setLanguageOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const sectionIds = ["home", "about", "projects", "services", "contact"];
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter((section): section is HTMLElement => section !== null);

    const updateFromHash = () => {
      const hash = window.location.hash.slice(1);

      if (sectionIds.includes(hash)) {
        setActiveSection(hash);
      }
    };

    updateFromHash();

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSections = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visibleSections[0]) {
          setActiveSection(visibleSections[0].target.id);
        }
      },
      { rootMargin: "-35% 0px -55% 0px", threshold: [0, 0.25, 0.5, 0.75, 1] },
    );

    sections.forEach((section) => observer.observe(section));
    window.addEventListener("hashchange", updateFromHash);

    return () => {
      observer.disconnect();
      window.removeEventListener("hashchange", updateFromHash);
    };
  }, []);

  // Empêche le scroll derrière le menu
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        languageMenuRef.current &&
        !languageMenuRef.current.contains(event.target as Node)
      ) {
        setLanguageOpen(false);
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setLanguageOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const navLinkClass = (section: string, mobile = false) =>
    `${mobile ? "text-lg" : "text-sm"} transition-colors ${
      activeSection === section
        ? "font-semibold text-[#0368FD]"
        : "text-black hover:text-[#0368FD]"
    }`;

  return (
    <>
      {/* HEADER */}
      <header
        className={`fixed left-0 top-0 z-50 w-full transition-all duration-500 ${
          scrolled
            ? "bg-white text-black shadow-sm"
            : "bg-transparent text-black"
        }`}
      >
        <div className="mx-auto flex h-20 max-w-400 items-center justify-between px-4 sm:px-6 md:px-10 lg:px-20">
          {/* LOGO */}
          <Link
            href="/"
            onClick={closeMenu}
            className="text-xl font-medium tracking-[0.15em]"
          >
            <Image
              src="/darkLogo.svg"
              alt="Logo"
              width={70}
              height={70}
              className="h-auto w-40 md:w-50"
            />
          </Link>

          {/* DESKTOP NAV */}
          <nav className="hidden items-center gap-8 md:flex absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%]">
            <Link href="/#home" className={navLinkClass("home")}>
              {t("nav.home")}
            </Link>

            <Link href="/#about" className={navLinkClass("about")}>
              {t("nav.about")}
            </Link>

            <Link href="/#projects" className={navLinkClass("projects")}>
              {t("nav.projects")}
            </Link>

            <Link href="/#services" className={navLinkClass("services")}>
              {t("nav.services")}
            </Link>

            <Link href="/#contact" className={navLinkClass("contact")}>
              {t("nav.contact")}
            </Link>
          </nav>

          <div className="hidden items-center gap-3 md:flex">
            <Button
              type="button"
              color="black"
              rightIcon={<ArrowRight size={16} />}
            >
              {t("nav.talk")}
            </Button>

            <div ref={languageMenuRef} className="relative">
              <button
                type="button"
                onClick={() => setLanguageOpen((isOpen) => !isOpen)}
                className="inline-flex items-center gap-1.5 rounded-lg px-2 py-2 text-sm font-semibold transition-colors hover:bg-black/5"
                aria-label="Change language"
                aria-expanded={languageOpen}
                aria-haspopup="listbox"
              >
                {currentLanguage.toUpperCase()}
                <ChevronDown
                  size={16}
                  aria-hidden="true"
                  className={`transition-transform duration-300 ${
                    languageOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {languageOpen && (
                <div
                  className="absolute right-0 top-full z-50 mt-2 min-w-20 overflow-hidden rounded-lg border border-gray-200 bg-white p-1 text-black shadow-lg"
                  role="listbox"
                  aria-label="Languages"
                >
                  {(["fr", "en", "es"] as const).map((language) => (
                    <button
                      key={language}
                      type="button"
                      role="option"
                      aria-selected={currentLanguage === language}
                      onClick={() => changeLanguage(language)}
                      className={`block w-full rounded-md px-3 py-2 text-left text-sm font-semibold transition-colors ${
                        currentLanguage === language
                          ? "bg-blue-50 text-[#0368FD]"
                          : "text-gray-700 hover:bg-gray-50"
                      }`}
                    >
                      {language.toUpperCase()}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* MOBILE BURGER */}
          <button
            type="button"
            onClick={() => setMenuOpen(true)}
            className="flex flex-col gap-1.5 md:hidden"
            aria-label={t("nav.open")}
          >
            <span className="h-px w-6 bg-current" />
            <span className="h-px w-6 bg-current" />
            <span className="h-px w-6 bg-current" />
          </button>
        </div>
      </header>

      {/* MOBILE MENU */}
      {menuOpen && (
        <div className="fixed inset-0 z-60 md:hidden">
          {/* OVERLAY */}
          <div className="absolute inset-0 bg-black/40" onClick={closeMenu} />

          {/* MENU */}
          <Reveal animation="fade-right">
            <aside className="relative h-screen w-[min(82%,20rem)] max-w-sm bg-white px-6 py-8 text-black sm:px-8">
              {/* MENU HEADER */}
              <div className="flex items-center justify-between">
                <Link
                  href="/"
                  onClick={closeMenu}
                  className="text-xl font-medium tracking-[0.15em]"
                >
                  <Image
                    src="/darkLogo.svg"
                    alt="Logo"
                    width={70}
                    height={70}
                    className={`h-auto w-auto `}
                  />
                </Link>

                {/* CLOSE */}
                <button
                  type="button"
                  onClick={closeMenu}
                  className="flex h-10 w-10 items-center justify-center text-2xl font-light"
                  aria-label={t("nav.close")}
                >
                  ×
                </button>
              </div>

              {/* LINKS */}
              <nav className="mt-10 flex flex-col gap-8">
                <Link
                  href="/#home"
                  onClick={closeMenu}
                  className={navLinkClass("home", true)}
                >
                  {t("nav.home")}
                </Link>

                <Link
                  href="/#about"
                  onClick={closeMenu}
                  className={navLinkClass("about", true)}
                >
                  {t("nav.about")}
                </Link>

                <Link
                  href="/#projects"
                  onClick={closeMenu}
                  className={navLinkClass("projects", true)}
                >
                  {t("nav.projects")}
                </Link>

                <Link
                  href="/#services"
                  onClick={closeMenu}
                  className={navLinkClass("services", true)}
                >
                  {t("nav.services")}
                </Link>

                <Link
                  href="/#contact"
                  onClick={closeMenu}
                  className={navLinkClass("contact", true)}
                >
                  {t("nav.contact")}
                </Link>
              </nav>
            </aside>
          </Reveal>
        </div>
      )}
    </>
  );
}
