import { CheckCircle2, Terminal } from "lucide-react";
import profile from "../../data/profile.json";

const codeLines = [
  {
    key: "name",
    left: "const nombre",
    right: `"${profile.fullName}";`
  },
  {
    key: "role",
    left: "const perfil",
    right: `"${profile.profile}";`
  },
  {
    key: "focus",
    left: "const enfoque",
    right: `"Código limpio";`
  }
];

export default function HeroCodePanel() {
  return (
    <aside className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-[#050b14]/90 p-5 shadow-card backdrop-blur-xl sm:p-6">
      <div className="pointer-events-none absolute -right-20 -top-20 h-52 w-52 rounded-full bg-portfolio-blue/20 blur-[80px]" />

      <div className="relative">
        <div className="mb-6 flex items-center justify-between gap-4 border-b border-white/10 pb-4">
          <div className="flex items-center gap-2">
            <span className="h-3 w-3 rounded-full bg-red-400" />
            <span className="h-3 w-3 rounded-full bg-yellow-400" />
            <span className="h-3 w-3 rounded-full bg-emerald-400" />
          </div>

          <div className="flex items-center gap-2 font-mono text-xs text-portfolio-muted">
            <Terminal size={15} />
            profile.jsx
          </div>
        </div>

        <div className="space-y-4 font-mono text-sm leading-7">
          {codeLines.map((line) => (
            <p key={line.key}>
              <span className="text-purple-300">const</span>{" "}
              <span className="text-portfolio-softBlue">
                {line.left.replace("const ", "")}
              </span>{" "}
              <span className="text-slate-500">=</span>{" "}
              <span className="text-emerald-300">{line.right}</span>
            </p>
          ))}

          <p>
            <span className="text-purple-300">export default</span>{" "}
            <span className="text-portfolio-softBlue">soluciones</span>
            <span className="text-slate-500">;</span>
          </p>
        </div>

        <div className="mt-7 grid gap-3">
          {profile.heroHighlights.map((item) => (
            <div
              key={item.label}
              className="flex items-center justify-between gap-4 rounded-2xl border border-white/10 bg-white/[0.035] px-4 py-3"
            >
              <span className="flex items-center gap-2 text-sm text-portfolio-muted">
                <CheckCircle2 size={16} className="text-portfolio-softBlue" />
                {item.label}
              </span>

              <span className="text-right text-sm font-semibold text-white">
                {item.value}
              </span>
            </div>
          ))}
        </div>
      </div>
    </aside>
  );
}