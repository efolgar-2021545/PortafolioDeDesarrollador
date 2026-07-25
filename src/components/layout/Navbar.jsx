import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { BriefcaseBusiness, Github, Linkedin, Mail, Menu, X } from "lucide-react";
import useScrollDirection from "../../hooks/useScrollDirection.jsx";
import profile from "../../data/profile.json";
import socialLinks from "../../data/socialLinks.json";

const navItems = [
  { label: "Inicio", href: "/#inicio" },
  { label: "Sobre mí", href: "/#sobre-mi" },
  { label: "Habilidades", href: "/#habilidades" },
  { label: "Educación", href: "/#educacion" },
  { label: "Vistas", href: "/#vistas-proyectos" },
  { label: "Proyectos", href: "/#proyectos" },
  { label: "Contacto", href: "/#contacto" }
];

export default function Navbar() {
  const location = useLocation();
  const { scrollDirection, isAtTop } = useScrollDirection();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const shouldHideNavbar = scrollDirection === "down" && !isAtTop && !isMenuOpen;

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  useEffect(() => {
    closeMenu();
  }, [location.pathname, location.hash]);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === "Escape") closeMenu();
    };

    window.addEventListener("keydown", handleEscape);

    return () => {
      window.removeEventListener("keydown", handleEscape);
    };
  }, []);

  return (
    <header
      className={`fixed left-0 top-0 z-50 w-full border-b transition duration-300 ${shouldHideNavbar ? "-translate-y-full" : "translate-y-0"
        } ${isAtTop
          ? "border-transparent bg-transparent"
          : "border-white/10 bg-portfolio-black/78 backdrop-blur-xl"
        }`}
    >
      <nav
        className="section-container flex h-20 items-center justify-between gap-6"
        aria-label="Navegación principal"
      >
        <Link to="/" className="group flex items-center gap-3" onClick={closeMenu}>
          <span className="flex h-10 w-10 items-center justify-center rounded-2xl border border-portfolio-blue/30 bg-white/5 font-mono text-sm font-bold text-portfolio-softBlue shadow-glow">
            EF
          </span>

          <span className="hidden leading-tight sm:block">
            <span className="block text-sm font-semibold tracking-wide text-white">
              {profile.displayName}
            </span>
            <span className="block text-xs text-portfolio-muted">
              {profile.title}
            </span>
          </span>
        </Link>

        <div className="hidden items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] p-1 xl:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-full px-4 py-2 text-sm text-portfolio-muted transition hover:bg-white/10 hover:text-white focus:outline-none focus:ring-2 focus:ring-portfolio-softBlue focus:ring-offset-2 focus:ring-offset-portfolio-black"
            >
              {item.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <a
            href={socialLinks.github}
            target="_blank"
            rel="noreferrer"
            aria-label="Abrir perfil de GitHub"
            className="hidden rounded-full border border-white/10 bg-white/[0.03] p-2 text-portfolio-muted transition hover:border-portfolio-blue/50 hover:text-portfolio-softBlue focus:outline-none focus:ring-2 focus:ring-portfolio-softBlue focus:ring-offset-2 focus:ring-offset-portfolio-black sm:inline-flex"
          >
            <Github size={18} />
          </a>

          <a
            href={socialLinks.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="Abrir perfil de LinkedIn"
            className="hidden rounded-full border border-white/10 bg-white/[0.03] p-2 text-portfolio-muted transition hover:border-portfolio-blue/50 hover:text-portfolio-softBlue focus:outline-none focus:ring-2 focus:ring-portfolio-softBlue focus:ring-offset-2 focus:ring-offset-portfolio-black sm:inline-flex"
          >
            <Linkedin size={18} />
          </a>

          <a
            href={socialLinks.computrabajo}
            target="_blank"
            rel="noreferrer"
            aria-label="Abrir perfil de CompuTrabajo"
            className="hidden rounded-full border border-white/10 bg-white/[0.03] p-2 text-portfolio-muted transition hover:border-portfolio-blue/50 hover:text-portfolio-softBlue focus:outline-none focus:ring-2 focus:ring-portfolio-softBlue focus:ring-offset-2 focus:ring-offset-portfolio-black sm:inline-flex"
          >
            <BriefcaseBusiness size={18} />
          </a>

          <a
            href={socialLinks.email}
            aria-label="Enviar correo"
            className="hidden rounded-full border border-white/10 bg-white/[0.03] p-2 text-portfolio-muted transition hover:border-portfolio-blue/50 hover:text-portfolio-softBlue focus:outline-none focus:ring-2 focus:ring-portfolio-softBlue focus:ring-offset-2 focus:ring-offset-portfolio-black sm:inline-flex"
          >
            <Mail size={18} />
          </a>

          <button
            type="button"
            onClick={() => setIsMenuOpen((current) => !current)}
            aria-label={isMenuOpen ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-navigation"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-portfolio-muted transition hover:border-portfolio-blue/50 hover:text-portfolio-softBlue focus:outline-none focus:ring-2 focus:ring-portfolio-softBlue focus:ring-offset-2 focus:ring-offset-portfolio-black xl:hidden"
          >
            {isMenuOpen ? <X size={21} /> : <Menu size={21} />}
          </button>
        </div>
      </nav>

      <div
        className={`fixed inset-0 top-20 z-40 bg-portfolio-black/70 backdrop-blur-md transition xl:hidden ${isMenuOpen
          ? "pointer-events-auto opacity-100"
          : "pointer-events-none opacity-0"
          }`}
        onClick={closeMenu}
        aria-hidden="true"
      />

      <div
        id="mobile-navigation"
        className={`fixed left-4 right-4 top-24 z-50 origin-top overflow-hidden rounded-[2rem] border border-white/10 bg-portfolio-dark/95 shadow-card backdrop-blur-xl transition duration-300 xl:hidden ${isMenuOpen
          ? "pointer-events-auto translate-y-0 scale-100 opacity-100"
          : "pointer-events-none -translate-y-4 scale-95 opacity-0"
          }`}
      >
        <div className="p-4">
          <div className="mb-4 rounded-3xl border border-white/10 bg-white/[0.03] p-4">
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-portfolio-softBlue">
              Navegación
            </p>

            <p className="mt-2 text-sm text-portfolio-muted">
              {profile.displayName} · {profile.title}
            </p>
          </div>

          <div className="grid gap-2">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={closeMenu}
                className="rounded-2xl px-4 py-3 text-sm font-medium text-portfolio-muted transition hover:bg-white/10 hover:text-white focus:outline-none focus:ring-2 focus:ring-portfolio-softBlue"
              >
                {item.label}
              </a>
            ))}
          </div>

          <div className="mt-4 grid grid-cols-3 gap-2 border-t border-white/10 pt-4">
            <a
              href={socialLinks.github}
              target="_blank"
              rel="noreferrer"
              aria-label="Abrir perfil de GitHub"
              onClick={closeMenu}
              className="flex items-center justify-center rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3 text-portfolio-muted transition hover:border-portfolio-blue/50 hover:text-portfolio-softBlue focus:outline-none focus:ring-2 focus:ring-portfolio-softBlue"
            >
              <Github size={19} />
            </a>

            <a
              href={socialLinks.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="Abrir perfil de LinkedIn"
              onClick={closeMenu}
              className="flex items-center justify-center rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3 text-portfolio-muted transition hover:border-portfolio-blue/50 hover:text-portfolio-softBlue focus:outline-none focus:ring-2 focus:ring-portfolio-softBlue"
            >
              <Linkedin size={19} />
            </a>

            <a
              href={socialLinks.computrabajo}
              target="_blank"
              rel="noreferrer"
              aria-label="Abrir perfil de CompuTrabajo"
              onClick={closeMenu}
              className="flex items-center justify-center rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3 text-portfolio-muted transition hover:border-portfolio-blue/50 hover:text-portfolio-softBlue focus:outline-none focus:ring-2 focus:ring-portfolio-softBlue"
            >
              <BriefcaseBusiness size={19} />
            </a>

            <a
              href={socialLinks.email}
              aria-label="Enviar correo"
              onClick={closeMenu}
              className="flex items-center justify-center rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3 text-portfolio-muted transition hover:border-portfolio-blue/50 hover:text-portfolio-softBlue focus:outline-none focus:ring-2 focus:ring-portfolio-softBlue"
            >
              <Mail size={19} />
            </a>
          </div>
        </div>
      </div>
    </header >
  );
}