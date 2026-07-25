import { ArrowDown } from "lucide-react";
import { motion } from "framer-motion";

export default function HeroScrollIndicator() {
  return (
    <motion.a
      href="#sobre-mi"
      aria-label="Bajar a la sección sobre mí"
      className="hidden items-center gap-3 rounded-full border border-white/10 bg-white/[0.035] px-4 py-3 text-sm text-portfolio-muted backdrop-blur-xl transition hover:border-portfolio-blue/50 hover:bg-portfolio-blue/10 hover:text-portfolio-softBlue focus:outline-none focus:ring-2 focus:ring-portfolio-softBlue focus:ring-offset-2 focus:ring-offset-portfolio-black lg:inline-flex"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, y: [0, 8, 0] }}
      transition={{
        opacity: { duration: 0.7, delay: 1.15 },
        y: {
          duration: 1.8,
          repeat: Infinity,
          ease: "easeInOut"
        }
      }}
    >
      Scroll
      <ArrowDown size={16} />
    </motion.a>
  );
}