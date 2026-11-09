"use client";
import ProjectCard from "@/components/projects/ProjectCard";
import { localizeProject, projects } from "@/lib/projects";
import { useTranslation } from "react-i18next";

export default function ProjectsPage() {
  const { t, i18n } = useTranslation();
  const localizedProjects = projects.map((project) =>
    localizeProject(project, i18n.language),
  );

  return (
    <main className="min-h-screen bg-white px-6 pb-24 pt-36 md:px-10 lg:px-20">
      <div className="mx-auto max-w-[1440px]">
        <header className="max-w-3xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-[#0368FD]">
            {t("projects.selectedWork")}
          </p>
          <h1 className="text-4xl font-bold tracking-tight text-black sm:text-5xl md:text-6xl">
            {t("projects.allTitle")}{" "}
            <span className="text-[#0368FD]">{t("projects.accent")}</span>
          </h1>
          <p className="mt-4 text-base leading-7 text-gray-600 sm:text-lg">
            {t("projects.allDescription")}
          </p>
        </header>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {localizedProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </main>
  );
}
