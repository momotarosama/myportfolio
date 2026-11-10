import type { Metadata } from "next";
import { Suspense } from "react";
import { notFound } from "next/navigation";
import ProjectDetails from "@/components/projects/ProjectDetails";
import {
  getProjectById,
  getProjectTranslation,
  projects,
} from "@/lib/projects";

type ProjectPageProps = { params: Promise<{ id: string }> };

export function generateStaticParams() {
  return projects.map((project) => ({ id: project.id }));
}

const BASE_URL = "https://techyouverymuch.com";

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { id } = await params;
  const project = getProjectById(id);

  if (!project) {
    return {
      title: "Project not found",
      robots: {
        index: false,
        follow: false,
      },
    };
  }

  const localizedProject = getProjectTranslation(project, "fr");

  const title = `${localizedProject.title} | Techyouverymuch`;
  const description = localizedProject.description;
  const canonicalUrl = `${BASE_URL}/projects/${project.id}`;

  const image = project.images.hero
    ? `${BASE_URL}${project.images.hero}`
    : undefined;

  return {
    title,
    description,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title,
      description,
      url: canonicalUrl,
      siteName: "Techyouverymuch",
      type: "article",
      images: image ? [{ url: image }] : [],
    },
    twitter: {
      card: image ? "summary_large_image" : "summary",
      title,
      description,
      images: image ? [image] : [],
    },
  };
}

function ProjectDetailsFallback() {
  return (
    <main className="min-h-screen bg-white px-6 pb-24 pt-32 md:px-10 lg:px-20">
      <div className="mx-auto max-w-[1440px] animate-pulse">
        <div className="h-5 w-28 rounded bg-gray-200" />
        <section className="mt-10 grid items-center gap-12 lg:grid-cols-[1fr_0.9fr]">
          <div className="space-y-5">
            <div className="h-4 w-32 rounded bg-gray-200" />
            <div className="h-14 w-3/4 rounded bg-gray-200" />
            <div className="h-6 w-full max-w-2xl rounded bg-gray-200" />
            <div className="h-10 w-48 rounded-full bg-gray-200" />
            <div className="h-8 w-40 rounded-full bg-gray-200" />
          </div>
          <div className="min-h-64 rounded-2xl bg-gray-100" />
        </section>
        <div className="mt-16 max-w-4xl space-y-8">
          <div className="h-32 rounded border-t border-gray-200 bg-gray-50" />
          <div className="h-32 rounded border-t border-gray-200 bg-gray-50" />
        </div>
      </div>
    </main>
  );
}

async function ProjectPageContent({ params }: ProjectPageProps) {
  const { id } = await params;
  const project = getProjectById(id);
  if (!project) notFound();
  return <ProjectDetails project={project} />;
}

export default function ProjectPage({ params }: ProjectPageProps) {
  return (
    <Suspense fallback={<ProjectDetailsFallback />}>
      <ProjectPageContent params={params} />
    </Suspense>
  );
}
