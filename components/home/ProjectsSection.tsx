 "use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ExternalLink } from "lucide-react";
import Reveal from "../shared/Reveal";
import { technologies } from "./technologies";
import { useTranslation } from "react-i18next";

const projects = [
  {
    name: "Kajai Marketplace",
    description: "A modern marketplace app with live shopping.",
    className: "from-blue-600 to-blue-400",
    tags: ["React Native", "Node.js", "MongoDB"],
  },
  {
    name: "Teacheez",
    description: "A school management platform for students and teachers.",
    className: "from-sky-400 to-blue-300",
    tags: ["React", "Node.js", "PostgreSQL"],
  },
  {
    name: "WAALO Platform",
    description: "An Africa-Europe food logistics platform.",
    className: "from-emerald-400 to-teal-300",
    tags: ["React.js", "Docker", "PostgreSQL"],
  },
];

function ProjectPreview({ projectIndex }: { projectIndex: number }) {
  const previewTechnology = [
    technologies[2],
    technologies[7],
    technologies[3],
  ][projectIndex];

  return (
    <div
      className={`relative h-44 overflow-hidden bg-gradient-to-br ${projects[projectIndex].className}`}
    >
      <div className="absolute inset-x-8 bottom-0 top-7 rounded-t-xl border-4 border-gray-900/80 bg-gray-950/90 p-3 shadow-2xl">
        <div className="flex items-center gap-1.5 border-b border-white/10 pb-2">
          <span className="h-1.5 w-1.5 rounded-full bg-red-400" />
          <span className="h-1.5 w-1.5 rounded-full bg-yellow-300" />
          <span className="h-1.5 w-1.5 rounded-full bg-green-400" />
        </div>
        <div className="mt-4 flex gap-2">
          <div className="h-16 w-1/3 rounded bg-white/10" />
          <div className="flex flex-1 flex-col gap-2">
            <div className="h-3 w-3/4 rounded bg-white/70" />
            <div className="h-2 w-full rounded bg-white/20" />
            <div className="h-2 w-2/3 rounded bg-white/20" />
          </div>
        </div>
      </div>
      <div className="absolute bottom-3 right-5 flex h-12 w-12 items-center justify-center rounded-full bg-white/90 shadow-lg">
        <Image
          src={previewTechnology.icon}
          alt=""
          width={28}
          height={28}
          className="h-7 w-7 object-contain"
        />
      </div>
    </div>
  );
}

export default function ProjectsSection() {
  const { t } = useTranslation();
  const translatedProjects = [
    { ...projects[0], name: "Kajai Marketplace", description: t("projects.kajai") },
    { ...projects[1], name: "Teacheez", description: t("projects.teacheez") },
    { ...projects[2], name: "WAALO Platform", description: t("projects.waalo") },
  ];
  return (
    <section
      id="projects"
      className="relative isolate w-full overflow-hidden bg-white px-6 py-24 md:px-10 lg:px-20"
    >
      <div className="absolute inset-0 -z-10 bg-[url('/images/projects/projectsBg.png')] bg-cover bg-center" />
      <div className="relative z-10 mx-auto max-w-7xl">
        <Reveal animation="fade-right">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-[#0368FD]">
            {t("projects.eyebrow")}
          </p>
          <h2 className="text-4xl font-bold tracking-tight text-black sm:text-5xl md:text-6xl">
            {t("projects.title")} <span className="text-[#0368FD]">{t("projects.accent")}</span>
          </h2>
          <p className="mt-3 text-base text-gray-600 sm:text-lg">
            {t("projects.description")}
          </p>
        </Reveal>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {translatedProjects.map((project, index) => (
            <Reveal key={project.name} animation="fade-up" delay={index * 100}>
              <article className="overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-lg shadow-blue-900/5 transition-transform duration-300 hover:-translate-y-1">
                <ProjectPreview projectIndex={index} />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-black">
                    {project.name}
                  </h3>
                  <p className="mt-2 min-h-12 text-sm leading-6 text-gray-600">
                    {project.description}
                  </p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full bg-blue-50 px-3 py-1 text-xs font-medium text-[#0368FD]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <Link
                    href={`/projects/${project.name
                      .toLowerCase()
                      .replaceAll(" ", "-")}`}
                    className="mt-6 flex items-center gap-2 border-t border-gray-100 pt-5 text-sm font-semibold text-black transition-colors hover:text-[#0368FD]"
                  >
                    {t("projects.caseStudy")} <ExternalLink size={16} />
                  </Link>
                </div>
              </article>
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
