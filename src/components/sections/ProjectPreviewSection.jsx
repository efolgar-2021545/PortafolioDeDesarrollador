import SectionHeader from "../common/SectionHeader.jsx";
import ScrollReveal from "../animation/ScrollReveal.jsx";
import ProjectCarousel from "../projects/ProjectCarousel.jsx";
import projects from "../../data/projects.json";

export default function ProjectPreviewSection() {
  return (
    <section id="vistas-proyectos" className="section-container py-24 sm:py-32">
      <ScrollReveal>
        <SectionHeader
          eyebrow="Vistas de proyectos"
          title="Interfaces y capturas principales"
          align="center"
        />
      </ScrollReveal>

      <ScrollReveal className="mt-14" delay={0.1}>
        <ProjectCarousel projects={projects} />
      </ScrollReveal>
    </section>
  );
}