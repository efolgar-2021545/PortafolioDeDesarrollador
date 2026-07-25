import { BriefcaseBusiness, Github, Linkedin, Mail } from "lucide-react";
import StatusDot from "../common/StatusDot.jsx";
import socialLinks from "../../data/socialLinks.json";

const links = [
  {
    label: "GitHub",
    href: socialLinks.github,
    icon: Github
  },
  {
    label: "LinkedIn",
    href: socialLinks.linkedin,
    icon: Linkedin
  },
  {
    label: "CompuTrabajo",
    href: socialLinks.computrabajo,
    icon: BriefcaseBusiness
  },
  {
    label: "Correo",
    href: socialLinks.email,
    icon: Mail
  }
];

export default function BottomAvailabilityBanner() {
  return (
    <aside className="fixed bottom-0 left-0 z-50 w-full border-t border-white/10 bg-portfolio-black/85 px-4 py-3 backdrop-blur-xl">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-center gap-3 text-center sm:flex-row sm:text-left">
        <div className="flex items-center gap-2 text-sm text-portfolio-muted">
          <StatusDot />
          <span>
            <strong className="font-semibold text-white">
              Disponible para propuestas.
            </strong>{" "}
            Conéctame en:
          </span>
        </div>

        <div className="flex items-center gap-2">
          {links.map((item) => {
            const Icon = item.icon;

            return (
              <a
                key={item.label}
                href={item.href}
                target={item.href.startsWith("mailto:") ? undefined : "_blank"}
                rel={item.href.startsWith("mailto:") ? undefined : "noreferrer"}
                aria-label={`Abrir ${item.label}`}
                className="group flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3 py-2 text-xs text-portfolio-muted transition hover:border-portfolio-blue/50 hover:bg-portfolio-blue/10 hover:text-portfolio-softBlue"
              >
                <Icon size={15} />
                <span className="hidden sm:inline">{item.label}</span>
              </a>
            );
          })}
        </div>
      </div>
    </aside>
  );
}