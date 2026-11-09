export type ProjectStatus =
  | "live"
  | "development"
  | "prototype"
  | "private"
  | "archived"
  | "";

export type ProjectLink = string | null;

export interface ProjectTranslation {
  title: string;
  shortDescription: string;
  description: string;
  category: string;
  year: string;
  role: string;
  status: ProjectStatus;
  technologies: string[];
  challenge: string;
  solution: string;
  contribution: string;
  features: string[];
  result: string;
}

export interface Project {
  id: string;
  featured: boolean;
  translations: Record<string, ProjectTranslation>;
  images: {
    hero: string;
    screenshots: string[];
  };
  links: {
    live: ProjectLink;
    github: ProjectLink;
    figma: ProjectLink;
  };
}

export type LocalizedProject = Project & ProjectTranslation;
