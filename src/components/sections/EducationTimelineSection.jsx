import { BookOpenCheck, CircleDotDashed } from "lucide-react";
import SectionHeader from "../common/SectionHeader.jsx";
import ScrollReveal from "../animation/ScrollReveal.jsx";
import education from "../../data/education.json";

export default function EducationTimelineSection() {
  return (
    <section id="educacion" className="section-container py-24 sm:py-32">
      <ScrollReveal>
        <SectionHeader
          eyebrow="Currículum virtual"
          title="Educación y formación técnica"
        />
      </ScrollReveal>

      <ScrollReveal delay={0.1}>
        <div className="mt-14 rounded-[2rem] border border-white/10 bg-white/[0.03] p-6 shadow-card sm:p-8">
          <div className="mb-10 flex items-start gap-4">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-portfolio-blue/25 bg-portfolio-blue/10 text-portfolio-softBlue">
              <BookOpenCheck size={24} />
            </div>

            <div>
              <h3 className="text-xl font-semibold text-white">
                Fundación Kinal
              </h3>

              <p className="mt-2 max-w-3xl leading-7 text-portfolio-muted">
                Formación enfocada en programación, desarrollo web, bases de
                datos y proyectos integradores.
              </p>
            </div>
          </div>

          <div className="hidden md:block">
            <div className="relative grid grid-cols-3 gap-6">
              <div className="absolute left-0 right-0 top-6 h-px bg-gradient-to-r from-transparent via-portfolio-blue/60 to-transparent" />

              {education.map((item, index) => (
                <article key={item.period} className="relative pt-14">
                  <div className="absolute left-0 top-0 flex h-12 w-12 items-center justify-center rounded-full border border-portfolio-blue/35 bg-portfolio-dark text-portfolio-softBlue shadow-glow">
                    <CircleDotDashed size={20} />
                  </div>

                  <div className="rounded-3xl border border-white/10 bg-portfolio-black/40 p-6 transition hover:border-portfolio-blue/40 hover:bg-portfolio-blue/5">
                    <p className="font-mono text-sm text-portfolio-softBlue">
                      0{index + 1} / {item.period}
                    </p>

                    <h4 className="mt-4 text-xl font-semibold text-white">
                      {item.title}
                    </h4>

                    <p className="mt-4 leading-7 text-portfolio-muted">
                      {item.description}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>

          <div className="space-y-6 md:hidden">
            {education.map((item, index) => (
              <article
                key={item.period}
                className="relative border-l border-portfolio-blue/35 pl-7"
              >
                <div className="absolute -left-[10px] top-0 h-5 w-5 rounded-full border border-portfolio-blue bg-portfolio-black" />

                <p className="font-mono text-sm text-portfolio-softBlue">
                  0{index + 1} / {item.period}
                </p>

                <h4 className="mt-3 text-xl font-semibold text-white">
                  {item.title}
                </h4>

                <p className="mt-3 leading-7 text-portfolio-muted">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
}