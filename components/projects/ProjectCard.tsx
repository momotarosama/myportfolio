import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ExternalLink } from "lucide-react";
import { getProjectImages } from "@/lib/projects";
import type { LocalizedProject } from "@/types/project";
import ProjectImageViewer from "./ProjectImageViewer";

export default function ProjectCard({
  project,
  index = 0,
}: {
  project: LocalizedProject;
  index?: number;
}) {
  const gradients = [
    "from-blue-600 to-blue-400",
    "from-sky-400 to-blue-300",
    "from-emerald-400 to-teal-300",
  ];
  const images = getProjectImages(project, project.title);

  return (
    <article className="overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-lg shadow-blue-900/5 transition-transform duration-300 hover:-translate-y-1">
      <div
        className={`relative h-44 overflow-hidden bg-gradient-to-br ${gradients[index % gradients.length]}`}
      >
        {project.images.hero ? (
          <ProjectImageViewer
            images={images}
            imageIndex={0}
            className="absolute inset-0"
          >
            <Image
              src={project.images.hero}
              alt={`${project.title} project preview`}
              fill
              sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
              className="object-cover transition duration-300 group-hover:scale-105 group-hover:brightness-75"
            />
          </ProjectImageViewer>
        ) : (
          <>
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
            <div className="absolute bottom-3 right-5 flex h-12 w-12 items-center justify-center rounded-full bg-white/90 text-sm font-bold text-gray-900 shadow-lg">
              {project.title.slice(0, 1)}
            </div>
          </>
        )}
      </div>
      <div className="p-6">
        <h2 className="text-xl font-bold text-black">{project.title}</h2>
        {project.shortDescription && (
          <p className="mt-2 min-h-12 text-sm leading-6 text-gray-600">
            {project.shortDescription}
          </p>
        )}
        {project.technologies.length > 0 && (
          <div className="mt-5 flex flex-wrap gap-2">
            {project.technologies.slice(0, 3).map((technology) => (
              <span
                key={technology}
                className="rounded-full bg-blue-50 px-3 py-1 text-xs font-medium text-[#0368FD]"
              >
                {technology}
              </span>
            ))}
          </div>
        )}
        <Link
          href={`/projects/${project.id}`}
          className="mt-6 flex items-center gap-2 border-t border-gray-100 pt-5 text-sm font-semibold text-black transition-colors hover:text-[#0368FD]"
        >
          View case study <ExternalLink size={16} />
        </Link>
      </div>
    </article>
  );
}

export function ProjectBackLink() {
  return (
    <Link
      href="/projects"
      className="inline-flex items-center gap-2 text-sm font-semibold text-black transition-colors hover:text-[#0368FD]"
    >
      <ArrowRight className="rotate-180" size={16} /> All projects
    </Link>
  );
}
