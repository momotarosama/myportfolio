 "use client";

import { Mail, MapPin, Send } from "lucide-react";
import Reveal from "../shared/Reveal";
import Button from "../shared/Button";
import { useTranslation } from "react-i18next";

export default function ContactSection() {
  const { t } = useTranslation();
  return (
    <section
      id="contact"
      className="relative isolate w-full overflow-hidden bg-white px-6 py-24 md:px-10 lg:px-20"
    >
      <div className="absolute inset-0 -z-10 bg-[url('/images/contact/contactBg.png')] bg-cover bg-center" />
      <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
        <Reveal animation="fade-right">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-[#0368FD]">
            {t("contact.eyebrow")}
          </p>
          <h2 className="max-w-xl text-4xl font-bold leading-tight tracking-tight text-black sm:text-5xl md:text-6xl">
            {t("contact.title")}
            <br />
            <span className="text-[#0368FD]">{t("contact.accent")}</span>
          </h2>
          <p className="mt-5 max-w-lg text-base leading-7 text-gray-600 sm:text-lg">
            {t("contact.description")}
          </p>

          <div className="mt-8 space-y-4 text-sm font-semibold text-gray-800 sm:text-base">
            <a
              href="mailto:hello@techyouverymuch.dev"
              className="flex items-center gap-3 transition-colors hover:text-[#0368FD]"
            >
              <Mail size={20} className="text-[#0368FD]" />
              hello@techyouverymuch.dev
            </a>
            <p className="flex items-center gap-3">
              <MapPin size={20} className="text-[#0368FD]" />
              {t("contact.location")}
            </p>
          </div>
        </Reveal>

        <Reveal animation="fade-left" delay={150}>
          <form
            action="mailto:hello@techyouverymuch.dev"
            method="post"
            encType="text/plain"
            className="rounded-2xl border border-gray-100 bg-white/90 p-6 shadow-xl shadow-blue-900/5 backdrop-blur-sm sm:p-8"
          >
            <div className="space-y-4">
              <input
                required
                type="text"
                name="name"
                placeholder={t("contact.name")}
                aria-label={t("contact.name")}
                className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm text-black outline-none transition-colors placeholder:text-gray-400 focus:border-[#0368FD] focus:ring-2 focus:ring-blue-100"
              />
              <input
                required
                type="email"
                name="email"
                placeholder={t("contact.email")}
                aria-label={t("contact.email")}
                className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm text-black outline-none transition-colors placeholder:text-gray-400 focus:border-[#0368FD] focus:ring-2 focus:ring-blue-100"
              />
              <textarea
                required
                name="message"
                rows={5}
                placeholder={t("contact.message")}
                aria-label={t("contact.message")}
                className="w-full resize-none rounded-xl border border-gray-200 px-4 py-3 text-sm text-black outline-none transition-colors placeholder:text-gray-400 focus:border-[#0368FD] focus:ring-2 focus:ring-blue-100"
              />
            </div>
            <Button type="submit" className="mt-5" rightIcon={<Send size={16} />}>
              {t("contact.send")}
            </Button>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
