import { BriefcaseBusiness, Github, Linkedin, Mail } from "lucide-react";
import SectionHeader from "../common/SectionHeader.jsx";
import ScrollReveal from "../animation/ScrollReveal.jsx";
import profile from "../../data/profile.json";
import socialLinks from "../../data/socialLinks.json";

const contactLinks = [
  {
    label: "GitHub",
    description: "Repositorios y proyectos",
    href: socialLinks.github,
    icon: Github
  },
  {
    label: "LinkedIn",
    description: "Perfil profesional",
    href: socialLinks.linkedin,
    icon: Linkedin
  },
  {
    label: "CompuTrabajo",
    description: "Perfil laboral",
    href: socialLinks.computrabajo,
    icon: BriefcaseBusiness
  },
  {
    label: "Correo",
    description: profile.email,
    href: socialLinks.email,
    icon: Mail
  }
];

export default function ContactSection() {
  return (
    <section id="contacto" className="section-container py-24 sm:py-32">
      <ScrollReveal>
        <div className="rounded-[2rem] border border-white/10 bg-white/[0.035] p-6 shadow-card sm:p-8 lg:p-10">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <SectionHeader
              eyebrow="Contacto"
              title="Conexión profesional"
              description="Disponible para propuestas, prácticas y oportunidades de crecimiento en desarrollo de software."
            />

            <div className="grid gap-4 sm:grid-cols-2">
              {contactLinks.map((item) => {
                const Icon = item.icon;

                return (
                  <a
                    key={item.label}
                    href={item.href}
                    target={item.href.startsWith("mailto:") ? undefined : "_blank"}
                    rel={item.href.startsWith("mailto:") ? undefined : "noreferrer"}
                    aria-label={`Abrir ${item.label}`}
                    className="group rounded-3xl border border-white/10 bg-portfolio-black/35 p-5 transition hover:-translate-y-1 hover:border-portfolio-blue/45 hover:bg-portfolio-blue/10"
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-portfolio-blue/30 bg-portfolio-blue/10 text-portfolio-softBlue transition group-hover:scale-105">
                      <Icon size={23} />
                    </div>

                    <h3 className="mt-5 font-semibold text-white">
                      {item.label}
                    </h3>

                    <p className="mt-2 text-sm leading-6 text-portfolio-muted">
                      {item.description}
                    </p>
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
}