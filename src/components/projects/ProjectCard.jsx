import {
  ArrowRight,
  CalendarDays,
  ExternalLink,
  Github,
  Layers3
} from "lucide-react";
import { Link } from "react-router-dom";
import ProjectImageLens from "./ProjectImageLens.jsx";

export default function ProjectCard({ project }) {
  const mainImage = project.images?.[0];
  const visibleTechnologies = project.technologies.slice(
    0,
    project.featured ? 6 : 4
  );
  const remainingTechnologies =
    project.technologies.length - visibleTechnologies.length;

  return (
    <article className="group overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.035] shadow-card transition hover:-translate-y-1 hover:border-portfolio-blue/40">
      <div className="grid gap-0 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <ProjectImageLens
          src={mainImage}
          alt={`${project.title} - captura principal`}
          projectTitle={project.title}
          captureIndex={1}
          frameClassName="aspect-[4/3]"
          className="rounded-none border-0"
        />

        <div className="flex h-full flex-col p-6 sm:p-7">
          <div className="flex flex-wrap items-center gap-3">
            <span className="rounded-full border border-portfolio-blue/30 bg-portfolio-blue/10 px-3 py-1 text-xs font-medium text-portfolio-softBlue">
              {project.status}
            </span>

            <span className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs text-portfolio-muted">
              <Layers3 size={13} />
              {project.category}
            </span>

            <span className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs text-portfolio-muted">
              <CalendarDays size={13} />
              {project.year}
            </span>
          </div>

          <h3 className="mt-5 text-2xl font-semibold tracking-tight text-white">
            {project.title}
          </h3>

          <p className="mt-4 leading-7 text-portfolio-muted">
            {project.shortDescription}
          </p>

          <div className="mt-5 rounded-3xl border border-white/10 bg-portfolio-black/35 p-4">
            <p className="font-mono text-xs uppercase tracking-[0.25em] text-portfolio-softBlue">
              Enfoque
            </p>

            <p className="mt-3 text-sm leading-7 text-portfolio-muted">
              {project.solution}
            </p>
          </div>

          <div className="mt-5 flex flex-wrap gap-2">
            {visibleTechnologies.map((technology) => (
              <span
                key={technology}
                className="rounded-full bg-white/[0.06] px-3 py-1 text-xs text-slate-300"
              >
                {technology}
              </span>
            ))}

            {remainingTechnologies > 0 ? (
              <span className="rounded-full bg-white/[0.06] px-3 py-1 text-xs text-slate-300">
                +{remainingTechnologies}
              </span>
            ) : null}
          </div>

          <div className="mt-7 flex flex-wrap gap-3">
            <Link
              to={`/projects/${project.slug}`}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-portfolio-blue px-5 py-3 text-sm font-semibold text-portfolio-black transition hover:bg-portfolio-softBlue focus:outline-none focus:ring-2 focus:ring-portfolio-softBlue focus:ring-offset-2 focus:ring-offset-portfolio-black"
            >
              Ver detalle
              <ArrowRight size={17} />
            </Link>

            <a
              href={project.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-5 py-3 text-sm font-semibold text-white transition hover:border-portfolio-blue/50 hover:bg-portfolio-blue/10 focus:outline-none focus:ring-2 focus:ring-portfolio-softBlue focus:ring-offset-2 focus:ring-offset-portfolio-black"
            >
              <Github size={17} />
              GitHub
            </a>

            <a
              href={project.deployUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-5 py-3 text-sm font-semibold text-white transition hover:border-portfolio-blue/50 hover:bg-portfolio-blue/10 focus:outline-none focus:ring-2 focus:ring-portfolio-softBlue focus:ring-offset-2 focus:ring-offset-portfolio-black"
            >
              <ExternalLink size={17} />
              Deploy
            </a>
          </div>
        </div>
      </div>
    </article>
  );
}