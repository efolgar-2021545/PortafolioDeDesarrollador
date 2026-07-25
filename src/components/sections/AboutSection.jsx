import { Code2, GraduationCap, MapPin, UserRound } from "lucide-react";
import SectionHeader from "../common/SectionHeader.jsx";
import ScrollReveal from "../animation/ScrollReveal.jsx";
import profile from "../../data/profile.json";

const detailIcons = {
  "Nombre completo": UserRound,
  País: MapPin,
  Formación: GraduationCap,
  Institución: GraduationCap,
  Contacto: Code2,
  Perfil: Code2
};

export default function AboutSection() {
  return (
    <section id="sobre-mi" className="section-container py-24 sm:py-32">
      <ScrollReveal>
        <SectionHeader
          eyebrow="Sobre mí"
          title="La línea de código del tiempo"
        />
      </ScrollReveal>

      <div className="mt-14 grid gap-10 lg:grid-cols-[0.9fr_1px_1.1fr] lg:gap-12">
        <ScrollReveal className="space-y-5" delay={0.1}>
          <div className="rounded-[2rem] border border-white/10 bg-white/[0.035] p-6 shadow-card sm:p-8">
            <p className="font-mono text-sm uppercase tracking-[0.25em] text-portfolio-softBlue">
              Perfil profesional
            </p>

            <h3 className="mt-4 text-2xl font-semibold text-white">
              {profile.title}
            </h3>

            <p className="mt-5 leading-8 text-portfolio-muted">
              {profile.about}
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {profile.details.map((detail) => {
              const Icon = detailIcons[detail.label] || Code2;

              return (
                <article
                  key={detail.label}
                  className="rounded-3xl border border-white/10 bg-white/[0.03] p-5 transition hover:border-portfolio-blue/40 hover:bg-portfolio-blue/5"
                >
                  <Icon className="text-portfolio-softBlue" size={20} />

                  <p className="mt-4 text-sm text-portfolio-muted">
                    {detail.label}
                  </p>

                  <p className="mt-2 text-sm font-semibold leading-6 text-white">
                    {detail.value}
                  </p>
                </article>
              );
            })}
          </div>
        </ScrollReveal>

        <div className="hidden bg-gradient-to-b from-transparent via-portfolio-blue/50 to-transparent lg:block" />

        <ScrollReveal delay={0.2}>
          <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-[#050b14] p-5 shadow-card sm:p-8">
            <div className="mb-6 flex items-center gap-2 border-b border-white/10 pb-4">
              <span className="h-3 w-3 rounded-full bg-red-400" />
              <span className="h-3 w-3 rounded-full bg-yellow-400" />
              <span className="h-3 w-3 rounded-full bg-emerald-400" />
              <span className="ml-3 font-mono text-xs text-portfolio-muted">
                aspiraciones.jsx
              </span>
            </div>

            <div className="space-y-5 font-mono text-sm leading-7">
              <p>
                <span className="text-purple-300">const</span>{" "}
                <span className="text-portfolio-softBlue">perfil</span>{" "}
                <span className="text-slate-500">=</span>{" "}
                <span className="text-emerald-300">
                  "{profile.profile}";
                </span>
              </p>

              {profile.goals.map((goal) => (
                <div
                  key={goal.period}
                  className="rounded-2xl border border-white/10 bg-white/[0.03] p-4"
                >
                  <p>
                    <span className="text-purple-300">const</span>{" "}
                    <span className="text-portfolio-softBlue">
                      {goal.codeName}
                    </span>{" "}
                    <span className="text-slate-500">=</span>{" "}
                    <span className="text-emerald-300">
                      "{goal.description}";
                    </span>
                  </p>

                  <p className="mt-2 text-xs uppercase tracking-[0.25em] text-portfolio-muted">
                    {goal.period}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}