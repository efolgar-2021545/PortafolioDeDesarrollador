import { useEffect } from "react";
import {
  ArrowLeft,
  BookOpenCheck,
  CheckCircle2,
  ExternalLink,
  Github,
  Layers3,
  Lightbulb,
  Target,
  UserRound,
  Wrench
} from "lucide-react";
import { Link, useParams } from "react-router-dom";
import NotFoundPage from "./NotFoundPage.jsx";
import ProjectImageLens from "../components/projects/ProjectImageLens.jsx";
import projects from "../data/projects.json";

export default function ProjectDetailPage() {
  const { slug } = useParams();
  const project = projects.find((item) => item.slug === slug);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [slug]);

  if (!project) {
    return <NotFoundPage />;
  }

  return (
    <section className="section-container pt-32 sm:pt-40">
      <Link
        to="/#proyectos"
        className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm text-portfolio-muted transition hover:border-portfolio-blue/50 hover:text-portfolio-softBlue focus:outline-none focus:ring-2 focus:ring-portfolio-softBlue focus:ring-offset-2 focus:ring-offset-portfolio-black"
      >
        <ArrowLeft size={17} />
        Volver al portafolio
      </Link>

      <div className="mt-10 grid gap-10 lg:grid-cols-[1fr_0.75fr] lg:items-start">
        <div>
          <div className="flex flex-wrap gap-2">
            <span className="rounded-full border border-portfolio-blue/30 bg-portfolio-blue/10 px-3 py-1 text-xs font-medium text-portfolio-softBlue">
              {project.category}
            </span>

            <span className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs text-portfolio-muted">
              {project.status}
            </span>

            <span className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs text-portfolio-muted">
              {project.year}
            </span>
          </div>

          <p className="mt-6 font-mono text-sm uppercase tracking-[0.3em] text-portfolio-softBlue">
            Detalle de proyecto
          </p>

          <h1 className="mt-5 text-4xl font-semibold tracking-tight text-white sm:text-6xl">
            {project.title}
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-9 text-portfolio-muted">
            {project.overview}
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-portfolio-blue px-5 py-3 text-sm font-semibold text-portfolio-black transition hover:bg-portfolio-softBlue focus:outline-none focus:ring-2 focus:ring-portfolio-softBlue focus:ring-offset-2 focus:ring-offset-portfolio-black"
            >
              <Github size={18} />
              Ver GitHub
            </a>

            <a
              href={project.deployUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-5 py-3 text-sm font-semibold text-white transition hover:border-portfolio-blue/50 hover:bg-portfolio-blue/10 focus:outline-none focus:ring-2 focus:ring-portfolio-softBlue focus:ring-offset-2 focus:ring-offset-portfolio-black"
            >
              <ExternalLink size={18} />
              Ver despliegue
            </a>
          </div>
        </div>

        <aside className="rounded-[2rem] border border-white/10 bg-white/[0.035] p-6 shadow-card">
          <div className="flex items-start gap-4">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-portfolio-blue/30 bg-portfolio-blue/10 text-portfolio-softBlue">
              <UserRound size={23} />
            </div>

            <div>
              <p className="text-sm text-portfolio-muted">Rol trabajado</p>
              <p className="mt-2 font-semibold leading-7 text-white">
                {project.role}
              </p>
            </div>
          </div>

          <div className="mt-6 border-t border-white/10 pt-6">
            <p className="flex items-center gap-2 text-sm text-portfolio-muted">
              <Layers3 size={16} className="text-portfolio-softBlue" />
              Tecnologías
            </p>

            <div className="mt-4 flex flex-wrap gap-2">
              {project.technologies.map((technology) => (
                <span
                  key={technology}
                  className="rounded-full border border-white/10 bg-white/[0.05] px-3 py-1 text-sm text-slate-300"
                >
                  {technology}
                </span>
              ))}
            </div>
          </div>
        </aside>
      </div>

      <div className="mt-14">
        <ProjectImageLens
          src={project.images[0]}
          alt={`${project.title} - captura principal`}
          projectTitle={project.title}
          captureIndex={1}
        />
      </div>

      <div className="mt-14 grid gap-6 md:grid-cols-3">
        {project.metrics.map((metric) => (
          <article
            key={`${metric.label}-${metric.value}`}
            className="rounded-[2rem] border border-white/10 bg-white/[0.035] p-6 shadow-card"
          >
            <p className="text-sm text-portfolio-muted">{metric.label}</p>
            <p className="mt-2 text-2xl font-semibold text-white">
              {metric.value}
            </p>
          </article>
        ))}
      </div>

      <div className="mt-6 grid gap-6 lg:grid-cols-2">
        <article className="rounded-[2rem] border border-white/10 bg-white/[0.035] p-6 shadow-card">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-portfolio-blue/30 bg-portfolio-blue/10 text-portfolio-softBlue">
            <Target size={23} />
          </div>

          <p className="mt-6 font-mono text-sm uppercase tracking-[0.25em] text-portfolio-softBlue">
            Problema
          </p>

          <h2 className="mt-4 text-2xl font-semibold text-white">
            Punto de partida
          </h2>

          <p className="mt-4 leading-8 text-portfolio-muted">
            {project.problem}
          </p>
        </article>

        <article className="rounded-[2rem] border border-white/10 bg-white/[0.035] p-6 shadow-card">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-portfolio-blue/30 bg-portfolio-blue/10 text-portfolio-softBlue">
            <Lightbulb size={23} />
          </div>

          <p className="mt-6 font-mono text-sm uppercase tracking-[0.25em] text-portfolio-softBlue">
            Solución
          </p>

          <h2 className="mt-4 text-2xl font-semibold text-white">
            Propuesta desarrollada
          </h2>

          <p className="mt-4 leading-8 text-portfolio-muted">
            {project.solution}
          </p>
        </article>
      </div>

      <div className="mt-6 grid gap-6 lg:grid-cols-2">
        <article className="rounded-[2rem] border border-white/10 bg-white/[0.035] p-6 shadow-card">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-portfolio-blue/30 bg-portfolio-blue/10 text-portfolio-softBlue">
            <Wrench size={23} />
          </div>

          <p className="mt-6 font-mono text-sm uppercase tracking-[0.25em] text-portfolio-softBlue">
            Funcionalidades
          </p>

          <h2 className="mt-4 text-2xl font-semibold text-white">
            Características principales
          </h2>

          <ul className="mt-5 space-y-3">
            {project.features.map((feature) => (
              <li
                key={feature}
                className="flex gap-3 rounded-2xl border border-white/10 bg-white/[0.03] p-4 leading-7 text-portfolio-muted"
              >
                <CheckCircle2
                  size={18}
                  className="mt-1 shrink-0 text-portfolio-softBlue"
                />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </article>

        <article className="rounded-[2rem] border border-white/10 bg-white/[0.035] p-6 shadow-card">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-portfolio-blue/30 bg-portfolio-blue/10 text-portfolio-softBlue">
            <BookOpenCheck size={23} />
          </div>

          <p className="mt-6 font-mono text-sm uppercase tracking-[0.25em] text-portfolio-softBlue">
            Aprendizajes
          </p>

          <h2 className="mt-4 text-2xl font-semibold text-white">
            Habilidades desarrolladas
          </h2>

          <div className="mt-5 space-y-3">
            {project.learned.map((item) => (
              <div
                key={item}
                className="flex gap-3 rounded-2xl border border-white/10 bg-white/[0.03] p-4 leading-7 text-portfolio-muted"
              >
                <CheckCircle2
                  size={18}
                  className="mt-1 shrink-0 text-portfolio-softBlue"
                />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </article>
      </div>

      <div className="mt-14 pb-24">
        <div className="mb-6">
          <p className="font-mono text-sm uppercase tracking-[0.25em] text-portfolio-softBlue">
            Galería
          </p>

          <h2 className="mt-4 text-2xl font-semibold text-white">
            Capturas del proyecto
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {project.images.map((image, index) => (
            <ProjectImageLens
              key={image}
              src={image}
              alt={`${project.title} - captura ${index + 1}`}
              projectTitle={project.title}
              captureIndex={index + 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}