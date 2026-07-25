import {
  Code2,
  Database,
  LayoutDashboard,
  LogOut,
  ShieldCheck,
  TerminalSquare
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import useProtectedAccess from "../hooks/useProtectedAccess.jsx";

const studioCards = [
  {
    title: "Arquitectura modular",
    description:
      "Separación clara entre páginas, rutas, componentes, hooks y datos.",
    icon: LayoutDashboard
  },
  {
    title: "Datos editables",
    description:
      "La información principal vive en archivos JSON para facilitar cambios.",
    icon: Database
  },
  {
    title: "Rutas con React Router",
    description:
      "Incluye rutas públicas, detalle de proyectos y acceso privado simulado.",
    icon: Code2
  },
  {
    title: "Acceso local",
    description:
      "Demostración frontend usando localStorage, sin datos sensibles.",
    icon: ShieldCheck
  }
];

export default function StudioPage() {
  const navigate = useNavigate();
  const { logout } = useProtectedAccess();

  const handleLogout = () => {
    logout();
    navigate("/login", { replace: true });
  };

  return (
    <section className="section-container min-h-screen pt-32 sm:pt-40">
      <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
        <div>
          <p className="font-mono text-sm uppercase tracking-[0.3em] text-portfolio-softBlue">
            Ruta protegida
          </p>

          <h1 className="mt-5 text-4xl font-semibold tracking-tight text-white sm:text-6xl">
            Studio privado
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-9 text-portfolio-muted">
            Demostración de navegación protegida en React.
          </p>

          <button
            type="button"
            onClick={handleLogout}
            className="mt-8 inline-flex items-center justify-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-5 py-3 text-sm font-semibold text-white transition hover:border-red-400/40 hover:bg-red-400/10 hover:text-red-200"
          >
            <LogOut size={18} />
            Cerrar acceso
          </button>
        </div>

        <div className="rounded-[2rem] border border-white/10 bg-white/[0.035] p-5 shadow-card sm:p-7">
          <div className="mb-6 flex items-center gap-2 border-b border-white/10 pb-4">
            <span className="h-3 w-3 rounded-full bg-red-400" />
            <span className="h-3 w-3 rounded-full bg-yellow-400" />
            <span className="h-3 w-3 rounded-full bg-emerald-400" />
            <span className="ml-3 font-mono text-xs text-portfolio-muted">
              protected-route.jsx
            </span>
          </div>

          <div className="rounded-3xl border border-white/10 bg-portfolio-black/50 p-5 font-mono text-sm leading-8">
            <p>
              <span className="text-purple-300">const</span>{" "}
              <span className="text-portfolio-softBlue">access</span>{" "}
              <span className="text-slate-500">=</span>{" "}
              <span className="text-emerald-300">"granted"</span>
              <span className="text-slate-500">;</span>
            </p>

            <p>
              <span className="text-purple-300">if</span>{" "}
              <span className="text-slate-400">(</span>
              <span className="text-portfolio-softBlue">access</span>{" "}
              <span className="text-slate-500">===</span>{" "}
              <span className="text-emerald-300">"granted"</span>
              <span className="text-slate-400">)</span>{" "}
              <span className="text-slate-400">{"{"}</span>
            </p>

            <p className="pl-5 text-slate-300">
              render<span className="text-slate-500">(</span>
              <span className="text-emerald-300">"StudioPage"</span>
              <span className="text-slate-500">)</span>
              <span className="text-slate-500">;</span>
            </p>

            <p className="text-slate-400">{"}"}</p>
          </div>
        </div>
      </div>

      <div className="mt-14 grid gap-5 pb-24 md:grid-cols-2">
        {studioCards.map((card) => {
          const Icon = card.icon;

          return (
            <article
              key={card.title}
              className="rounded-[2rem] border border-white/10 bg-white/[0.035] p-6 shadow-card transition hover:-translate-y-1 hover:border-portfolio-blue/40 hover:bg-portfolio-blue/5"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-portfolio-blue/30 bg-portfolio-blue/10 text-portfolio-softBlue">
                <Icon size={23} />
              </div>

              <h2 className="mt-5 text-xl font-semibold text-white">
                {card.title}
              </h2>

              <p className="mt-3 leading-7 text-portfolio-muted">
                {card.description}
              </p>
            </article>
          );
        })}
      </div>

      <div className="pb-24">
        <div className="rounded-[2rem] border border-white/10 bg-white/[0.035] p-6 shadow-card">
          <div className="flex items-start gap-4">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-portfolio-blue/30 bg-portfolio-blue/10 text-portfolio-softBlue">
              <TerminalSquare size={24} />
            </div>

            <div>
              <h2 className="text-xl font-semibold text-white">
                Nota técnica
              </h2>

              <p className="mt-3 leading-8 text-portfolio-muted">
                Para proteger datos reales se requiere autenticación desde
                backend y validación del lado del servidor.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}