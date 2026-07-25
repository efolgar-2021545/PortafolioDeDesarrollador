import HeroSection from "../components/sections/HeroSection.jsx";
import AboutSection from "../components/sections/AboutSection.jsx";
import SkillsSection from "../components/sections/SkillsSection.jsx";
import EducationTimelineSection from "../components/sections/EducationTimelineSection.jsx";
import ProjectPreviewSection from "../components/sections/ProjectPreviewSection.jsx";
import ProjectsSection from "../components/sections/ProjectsSection.jsx";
import ContactSection from "../components/sections/ContactSection.jsx";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <EducationTimelineSection />
      <ProjectPreviewSection />
      <ProjectsSection />
      <ContactSection />
    </>
  );
}