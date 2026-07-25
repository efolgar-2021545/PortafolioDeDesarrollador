import { Image } from "lucide-react";

export default function ProjectPlaceholder({
  title = "Proyecto",
  captureLabel = "Vista de interfaz"
}) {
  return (
    <div className="flex h-full min-h-[220px] w-full items-center justify-center bg-[radial-gradient(circle_at_top,rgba(78,168,255,0.16),transparent_60%),linear-gradient(135deg,rgba(255,255,255,0.08),rgba(255,255,255,0.02))] p-6">
      <div className="w-full max-w-sm">
        <div className="rounded-[1.5rem] border border-white/10 bg-portfolio-black/55 p-4 shadow-glow">
          <div className="mb-4 flex items-center gap-2">
            <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
            <span className="h-2.5 w-2.5 rounded-full bg-yellow-400" />
            <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
          </div>

          <div className="space-y-3">
            <div className="h-4 w-3/4 rounded-full bg-white/15" />
            <div className="h-3 w-full rounded-full bg-white/10" />
            <div className="h-3 w-5/6 rounded-full bg-white/10" />

            <div className="grid grid-cols-3 gap-3 pt-3">
              <div className="h-16 rounded-2xl border border-portfolio-blue/20 bg-portfolio-blue/10" />
              <div className="h-16 rounded-2xl border border-white/10 bg-white/[0.06]" />
              <div className="h-16 rounded-2xl border border-white/10 bg-white/[0.06]" />
            </div>
          </div>
        </div>

        <div className="mt-5 text-center">
          <div className="mx-auto flex h-11 w-11 items-center justify-center rounded-2xl border border-portfolio-blue/30 bg-portfolio-blue/10 text-portfolio-softBlue">
            <Image size={20} />
          </div>

          <p className="mt-4 font-mono text-xs uppercase tracking-[0.28em] text-portfolio-softBlue">
            {captureLabel}
          </p>

          <h3 className="mt-2 text-lg font-semibold text-white">{title}</h3>
        </div>
      </div>
    </div>
  );
}