"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight, ExternalLink } from "lucide-react";
import { useTranslation } from "react-i18next";
import { getProjectImages, getProjectTranslation, projects } from "@/lib/projects";
import type { Project } from "@/types/project";
import { ProjectBackLink } from "./ProjectCard";
import ProjectImageViewer from "./ProjectImageViewer";

function DetailSection({ title, content }: { title: string; content: string }) {
  if (!content) return null;
  return (
    <section className="border-t border-gray-200 py-10">
      <h2 className="text-2xl font-bold text-black">{title}</h2>
      <p className="mt-4 max-w-3xl whitespace-pre-line text-base leading-8 text-gray-600">
        {content}
      </p>
    </section>
  );
}

export default function ProjectDetails({ project }: { project: Project }) {
  const { t, i18n } = useTranslation();
  const content = getProjectTranslation(project, i18n.language);
  const images = getProjectImages(project, content.title);
  const projectIndex = projects.findIndex((item) => item.id === project.id);
  const previousProject = projects[projectIndex - 1];
  const nextProject = projects[projectIndex + 1];

  return (
    <main className="min-h-screen bg-white px-6 pb-24 pt-32 md:px-10 lg:px-20">
      <div className="mx-auto max-w-[1440px]">
        <ProjectBackLink />
        <section className="mt-10 grid items-center gap-12 lg:grid-cols-[1fr_0.9fr]">
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-[#0368FD]">
              {content.category || t("projectDetails.project")}
            </p>
            <h1 className="text-5xl font-bold tracking-tight text-black sm:text-6xl">
              {content.title}
            </h1>
            {content.shortDescription && (
              <p className="mt-5 max-w-2xl text-xl leading-8 text-gray-600">
                {content.shortDescription}
              </p>
            )}
            <div className="mt-8 flex flex-wrap gap-3 text-sm text-gray-600">
              {[content.year, content.role, content.status].filter(Boolean).map((item) => (
                <span key={item} className="rounded-full bg-gray-100 px-4 py-2 capitalize">
                  {item}
                </span>
              ))}
            </div>
            {content.technologies.length > 0 && (
              <div className="mt-6 flex flex-wrap gap-2">
                {content.technologies.map((technology) => (
                  <span key={technology} className="rounded-full bg-blue-50 px-3 py-1 text-xs font-medium text-[#0368FD]">
                    {technology}
                  </span>
                ))}
              </div>
            )}
            <div className="mt-8 flex flex-wrap gap-3">
              {project.links.live &&               <Link href={project.links.live} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-lg bg-[#0368FD] px-5 py-3 text-sm font-medium text-white">{t("projectDetails.liveDemo")} <ExternalLink size={16} /></Link>}
              {project.links.github && <Link href={project.links.github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-lg border border-gray-300 px-5 py-3 text-sm font-medium text-black">GitHub <ExternalLink size={16} /></Link>}
              {project.links.figma && <Link href={project.links.figma} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-lg border border-gray-300 px-5 py-3 text-sm font-medium text-black">Figma <ExternalLink size={16} /></Link>}
            </div>
          </div>
          <div className="relative flex min-h-64 items-center justify-center overflow-hidden rounded-2xl bg-gradient-to-br from-blue-600 to-blue-400 p-8">
            {project.images.hero ? (
              <ProjectImageViewer
                images={images}
                imageIndex={0}
                className="absolute inset-0"
              >
                <Image
                  src={project.images.hero}
                  alt={`${content.title} project preview`}
                  fill
                  className="object-cover transition duration-300 group-hover:brightness-75"
                />
              </ProjectImageViewer>
            ) : (
              <span className="text-center text-4xl font-bold text-white/90">{content.title}</span>
            )}
          </div>
        </section>

        <div className="mt-16 max-w-4xl">
          <DetailSection title={t("projectDetails.overview")} content={content.description} />
          <DetailSection title={t("projectDetails.challenge")} content={content.challenge} />
          <DetailSection title={t("projectDetails.solution")} content={content.solution} />
          <DetailSection title={t("projectDetails.contribution")} content={content.contribution} />
          {content.features.length > 0 && (
            <section className="border-t border-gray-200 py-10">
              <h2 className="text-2xl font-bold text-black">{t("projectDetails.features")}</h2>
              <ul className="mt-4 grid gap-3 text-base leading-7 text-gray-600 sm:grid-cols-2">
                {content.features.map((feature) => <li key={feature} className="rounded-xl bg-gray-50 p-4">{feature}</li>)}
              </ul>
            </section>
          )}
          {content.technologies.length > 0 && (
            <section className="border-t border-gray-200 py-10">
              <h2 className="text-2xl font-bold text-black">{t("projectDetails.technologies")}</h2>
              <div className="mt-4 flex flex-wrap gap-2">{content.technologies.map((technology) => <span key={technology} className="rounded-full bg-blue-50 px-3 py-1 text-sm font-medium text-[#0368FD]">{technology}</span>)}</div>
            </section>
          )}
          {project.images.screenshots.length > 0 && (
            <section className="border-t border-gray-200 py-10">
              <h2 className="text-2xl font-bold text-black">{t("projectDetails.screenshots")}</h2>
              <div className="mt-5 grid gap-5 md:grid-cols-2">{project.images.screenshots.map((image, index) => <ProjectImageViewer key={image} images={images} imageIndex={index + (project.images.hero ? 1 : 0)} className="relative aspect-[3/2] w-full rounded-2xl border border-gray-100"><Image src={image} alt={`${content.title} screenshot ${index + 1}`} fill sizes="(min-width: 768px) 50vw, 100vw" className="object-cover transition duration-300 group-hover:scale-105 group-hover:brightness-75" /></ProjectImageViewer>)}</div>
            </section>
          )}
          <DetailSection title={t("projectDetails.result")} content={content.result} />
        </div>

        <nav className="mt-12 flex justify-between gap-6 border-t border-gray-200 pt-8">
          {previousProject ? <Link href={`/projects/${previousProject.id}`} className="inline-flex items-center gap-2 text-sm font-semibold text-black hover:text-[#0368FD]"><ArrowLeft size={16} /> {getProjectTranslation(previousProject, i18n.language).title}</Link> : <span />}
          {nextProject ? <Link href={`/projects/${nextProject.id}`} className="inline-flex items-center gap-2 text-right text-sm font-semibold text-black hover:text-[#0368FD]">{getProjectTranslation(nextProject, i18n.language).title} <ArrowRight size={16} /></Link> : null}
        </nav>
      </div>
    </main>
  );
}
