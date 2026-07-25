import SectionHeader from "../common/SectionHeader.jsx";
import ScrollReveal from "../animation/ScrollReveal.jsx";
import ProjectCard from "../projects/ProjectCard.jsx";
import projects from "../../data/projects.json";

export default function ProjectsSection() {
  return (
    <section id="proyectos" className="section-container py-24 sm:py-32">
      <ScrollReveal>
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeader
            eyebrow="Portafolio técnico"
            title="Proyectos destacados"
          />

          <div className="grid max-w-md grid-cols-3 gap-3">
            <div className="rounded-3xl border border-white/10 bg-white/[0.035] p-4 text-center">
              <p className="text-2xl font-semibold text-white">
                {projects.length}
              </p>
              <p className="mt-1 text-xs text-portfolio-muted">Proyectos</p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/[0.035] p-4 text-center">
              <p className="text-2xl font-semibold text-white">3</p>
              <p className="mt-1 text-xs text-portfolio-muted">Enfoques</p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/[0.035] p-4 text-center">
              <p className="text-2xl font-semibold text-white">Full</p>
              <p className="mt-1 text-xs text-portfolio-muted">Stack</p>
            </div>
          </div>
        </div>
      </ScrollReveal>

      <div className="mt-14 flex flex-col gap-6">
        {projects.map((project, index) => (
          <ScrollReveal key={project.slug} delay={index * 0.08}>
            <ProjectCard project={project} />
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}