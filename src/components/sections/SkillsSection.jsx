import {
  Braces,
  Code2,
  Database,
  FileCode2,
  GitBranch,
  Github,
  Layers3,
  Server,
  UsersRound
} from "lucide-react";
import SectionHeader from "../common/SectionHeader.jsx";
import ScrollReveal from "../animation/ScrollReveal.jsx";
import SkillsRadarChart from "../charts/SkillsRadarChart.jsx";

const technologies = [
  {
    name: "HTML",
    icon: FileCode2
  },
  {
    name: "CSS",
    icon: Layers3
  },
  {
    name: "JavaScript",
    icon: Braces
  },
  {
    name: "React",
    icon: Code2
  },
  {
    name: "Node.js",
    icon: Server
  },
  {
    name: "MongoDB",
    icon: Database
  },
  {
    name: "MySQL",
    icon: Database
  },
  {
    name: "Git",
    icon: GitBranch
  },
  {
    name: "GitHub",
    icon: Github
  },
  {
    name: ".NET",
    icon: UsersRound
  }
];

export default function SkillsSection() {
  return (
    <section id="habilidades" className="section-container py-24 sm:py-32">
      <ScrollReveal>
        <SectionHeader
          eyebrow="Habilidades"
          title="Lógica, desarrollo y trabajo en equipo"
          align="center"
        />
      </ScrollReveal>

      <div className="mt-14 grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
        <ScrollReveal delay={0.1}>
          <div className="rounded-[2rem] border border-white/10 bg-white/[0.035] p-4 shadow-card sm:p-8">
            <SkillsRadarChart />
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-2">
            {technologies.map((technology) => {
              const Icon = technology.icon;

              return (
                <article
                  key={technology.name}
                  className="group rounded-3xl border border-white/10 bg-white/[0.03] p-5 transition hover:-translate-y-1 hover:border-portfolio-blue/40 hover:bg-portfolio-blue/10"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-portfolio-blue/25 bg-portfolio-blue/10 text-portfolio-softBlue transition group-hover:scale-105">
                    <Icon size={21} />
                  </div>

                  <h3 className="mt-4 font-semibold text-white">
                    {technology.name}
                  </h3>
                </article>
              );
            })}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}