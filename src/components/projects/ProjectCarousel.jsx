import { ChevronLeft, ChevronRight } from "lucide-react";
import useAutoCarousel from "../../hooks/useAutoCarousel.jsx";
import ProjectImageLens from "./ProjectImageLens.jsx";

function buildSlides(projects) {
  return projects.flatMap((project) =>
    project.images.map((image, index) => ({
      projectTitle: project.title,
      projectSlug: project.slug,
      description: project.shortDescription,
      image,
      captureIndex: index + 1,
      category: project.category,
      status: project.status
    }))
  );
}

export default function ProjectCarousel({ projects }) {
  const slides = buildSlides(projects);

  const { activeIndex, setIsPaused, goTo, next, previous } = useAutoCarousel(
    slides.length
  );

  if (!slides.length) return null;

  const activeSlide = slides[activeIndex];

  return (
    <div
      className="rounded-[2rem] border border-white/10 bg-white/[0.035] p-4 shadow-card sm:p-6 lg:p-8"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="grid gap-8 lg:grid-cols-[1.25fr_0.75fr] lg:items-center">
        <ProjectImageLens
          src={activeSlide.image}
          alt={`${activeSlide.projectTitle} - captura ${activeSlide.captureIndex}`}
          projectTitle={activeSlide.projectTitle}
          captureIndex={activeSlide.captureIndex}
        />

        <div>
          <div className="flex flex-wrap gap-2">
            <span className="rounded-full border border-portfolio-blue/30 bg-portfolio-blue/10 px-3 py-1 text-xs font-medium text-portfolio-softBlue">
              {activeSlide.category}
            </span>

            <span className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs text-portfolio-muted">
              {activeSlide.status}
            </span>
          </div>

          <p className="mt-6 font-mono text-sm uppercase tracking-[0.3em] text-portfolio-softBlue">
            Vista 0{activeSlide.captureIndex}
          </p>

          <h3 className="mt-4 text-3xl font-semibold tracking-tight text-white">
            {activeSlide.projectTitle}
          </h3>

          <p className="mt-4 leading-8 text-portfolio-muted">
            {activeSlide.description}
          </p>

          <div className="mt-8 flex items-center gap-3">
            <button
              type="button"
              onClick={previous}
              aria-label="Ver captura anterior"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-portfolio-muted transition hover:border-portfolio-blue/50 hover:text-portfolio-softBlue focus:outline-none focus:ring-2 focus:ring-portfolio-softBlue"
            >
              <ChevronLeft size={20} />
            </button>

            <button
              type="button"
              onClick={next}
              aria-label="Ver captura siguiente"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-portfolio-muted transition hover:border-portfolio-blue/50 hover:text-portfolio-softBlue focus:outline-none focus:ring-2 focus:ring-portfolio-softBlue"
            >
              <ChevronRight size={20} />
            </button>
          </div>

          <div className="mt-8 grid grid-cols-3 gap-2 sm:grid-cols-6 lg:grid-cols-3">
            {slides.map((slide, index) => (
              <button
                key={`${slide.projectSlug}-${slide.captureIndex}`}
                type="button"
                onClick={() => goTo(index)}
                aria-label={`Ver ${slide.projectTitle}, captura ${slide.captureIndex}`}
                className={`h-2 rounded-full transition focus:outline-none focus:ring-2 focus:ring-portfolio-softBlue ${
                  activeIndex === index
                    ? "bg-portfolio-softBlue"
                    : "bg-white/15 hover:bg-white/35"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}