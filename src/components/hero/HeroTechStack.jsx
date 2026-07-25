import { Code2 } from "lucide-react";
import profile from "../../data/profile.json";

export default function HeroTechStack() {
  return (
    <div className="flex flex-wrap gap-2">
      {profile.heroStack.map((technology) => (
        <span
          key={technology}
          className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm text-portfolio-muted transition hover:border-portfolio-blue/45 hover:bg-portfolio-blue/10 hover:text-portfolio-softBlue"
        >
          <Code2 size={15} />
          {technology}
        </span>
      ))}
    </div>
  );
}