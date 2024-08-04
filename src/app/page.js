import AboutSection from "@/components/about/AboutSection";
import AchievementsSection from "@/components/achievements/Achievements";
import NavSection from "@/components/nav/NavSection";
import PersonalSection from "@/components/presonalInfo/PersonalSection";
import ProjectsSection from "@/components/projects/ProjectsSection";

export default function Home() {
  return (
    <main className="min-h-screen max-w-screen-2xl m-auto relative pt-32">
      <NavSection />
      <PersonalSection />
      <AchievementsSection />
      <AboutSection />
      <ProjectsSection />
    </main>
  );
}
