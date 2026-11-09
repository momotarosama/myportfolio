"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Reveal from "../shared/Reveal";
import ProjectCard from "../projects/ProjectCard";
import { projects } from "@/lib/projects";
import { localizeProject } from "@/lib/projects";
import { useTranslation } from "react-i18next";

export default function ProjectsSection() {
  const { t, i18n } = useTranslation();
  const featuredProjects = projects
    .filter((project) => project.featured)
    .map((project) => localizeProject(project, i18n.language));

  return (
    <section
      id="projects"
      className="relative isolate w-full overflow-hidden bg-white px-6 py-24 md:px-10 lg:px-20"
    >
      <div className="absolute inset-0 -z-10 bg-[url('/images/projects/projectsBg.png')] bg-cover bg-center" />
      <div className="relative z-10 mx-auto max-w-[1440px]">
        <Reveal animation="fade-right">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-[#0368FD]">
            {t("projects.eyebrow")}
          </p>
          <h2 className="text-4xl font-bold tracking-tight text-black sm:text-5xl md:text-6xl">
            {t("projects.title")}{" "}
            <span className="text-[#0368FD]">{t("projects.accent")}</span>
          </h2>
          <p className="mt-3 text-base text-gray-600 sm:text-lg">
            {t("projects.description")}
          </p>
        </Reveal>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {featuredProjects.map((project, index) => (
            <Reveal key={project.id} animation="fade-up" delay={index * 100}>
              <ProjectCard project={project} index={index} />
            </Reveal>
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <Link
            href="/projects"
            className="inline-flex items-center justify-center gap-2 rounded-lg border border-gray-300 bg-transparent px-6 py-3 text-sm font-medium text-black transition-colors hover:bg-gray-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-400 focus-visible:ring-offset-2"
          >
            {t("projects.all")} <ArrowRight size={17} />
          </Link>
        </div>
      </div>
    </section>
  );
}
