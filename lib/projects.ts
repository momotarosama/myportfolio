import projectsData from "@/data/projects.json";
import type { LocalizedProject, Project, ProjectTranslation } from "@/types/project";

export const projects = projectsData as Project[];

export function getProjectById(id: string) {
  return projects.find((project) => project.id === id);
}

export function getProjectTranslation(
  project: Project,
  language: string,
): ProjectTranslation {
  return (
    project.translations[language] ??
    project.translations[language.split("-")[0]] ??
    project.translations.en ??
    Object.values(project.translations)[0]
  );
}

export function localizeProject(project: Project, language: string): LocalizedProject {
  return {
    ...project,
    ...getProjectTranslation(project, language),
  };
}

export function getProjectImages(project: Project, title: string) {
  return [project.images.hero, ...project.images.screenshots]
    .filter((src): src is string => Boolean(src))
    .map((src, index) => ({
      src,
      alt: `${title} image ${index + 1}`,
    }));
}
