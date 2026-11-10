import AboutSection from "@/components/home/AboutSection";
import ContactSection from "@/components/home/ContactSection";
import HeroSection from "@/components/home/HeroSection";
import ProjectsSection from "@/components/home/ProjectsSection";
import SkillsSection from "@/components/home/SkillsSection";
import ServicesSection from "@/components/home/ServicesSection";
import StatsSection from "@/components/home/StatsSection";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Techyouverymuch | Web & Mobile Development",
  description:
    "Techyouverymuch is a digital development studio focused on creating modern web and mobile solutions, combining thoughtful design, solid engineering and a product-focused approach.",
  alternates: {
    canonical: "https://techyouverymuch.com/",
  },
  openGraph: {
    title: "Techyouverymuch | Web & Mobile Development",
    description:
      "Techyouverymuch is a digital development studio focused on creating modern web and mobile solutions, combining thoughtful design, solid engineering and a product-focused approach.",
    url: "https://techyouverymuch.com/",
    siteName: "Techyouverymuch",
    type: "website",
    images: [
      {
        url: "/images/og/techyouverymuch.png",
        width: 1200,
        height: 630,
        alt: "Techyouverymuch — Web & Mobile Development",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Techyouverymuch | Web & Mobile Development",
    description:
      "A digital development studio focused on modern web and mobile solutions.",
    images: ["/images/og/techyouverymuch.png"],
  },
};

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center font-sans bg-background relative overflow-hidden">
      <HeroSection />
      <AboutSection />
      <StatsSection />
      <SkillsSection />
      <ProjectsSection />
      <ServicesSection />
      <ContactSection />
    </div>
  );
}
