import { motion } from "framer-motion";
import { ArrowRight, Mail } from "lucide-react";
import HeroNameAnimation from "../animation/HeroNameAnimation.jsx";
import MagneticButton from "../common/MagneticButton.jsx";
import HeroCodePanel from "../hero/HeroCodePanel.jsx";
import HeroScrollIndicator from "../hero/HeroScrollIndicator.jsx";
import HeroTechStack from "../hero/HeroTechStack.jsx";
import profile from "../../data/profile.json";

export default function HeroSection() {
  return (
    <section
      id="inicio"
      className="hero-grid-bg relative flex min-h-screen items-center overflow-hidden pt-28"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-16 h-[32rem] w-[32rem] -translate-x-1/2 rounded-full bg-portfolio-blue/20 blur-[150px]" />
        <div className="absolute bottom-10 right-0 h-96 w-96 rounded-full bg-blue-950/60 blur-[120px]" />
        <div className="absolute -bottom-40 -left-24 h-96 w-96 rounded-full bg-portfolio-blue/10 blur-[130px]" />
      </div>

      <div className="section-container relative z-10">
        <div className="grid min-h-[calc(100vh-7rem)] items-center gap-12 py-12 lg:grid-cols-[1.08fr_0.92fr]">
          <div>
            <motion.div
              className="mb-7 inline-flex items-center gap-3 rounded-full border border-portfolio-blue/25 bg-portfolio-blue/10 px-4 py-2 text-sm text-portfolio-softBlue shadow-glow"
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              <span className="h-2 w-2 rounded-full bg-emerald-400" />
              {profile.title}
            </motion.div>

            <HeroNameAnimation className="max-w-5xl" />

            <motion.p
              className="mt-8 max-w-2xl text-balance text-xl leading-9 text-portfolio-muted sm:text-2xl"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.65 }}
            >
              {profile.subtitle}
            </motion.p>

            <motion.div
              className="mt-8"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.78 }}
            >
              <HeroTechStack />
            </motion.div>

            <motion.div
              className="mt-10 flex flex-col gap-4 sm:flex-row"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.92 }}
            >
              <MagneticButton href="#sobre-mi" className="gap-2">
                Ver portafolio
                <ArrowRight size={18} />
              </MagneticButton>

              <MagneticButton
                href={profile.emailLink}
                variant="secondary"
                className="gap-2"
              >
                <Mail size={18} />
                Contactar
              </MagneticButton>
            </motion.div>
          </div>

          <motion.div
            className="lg:pt-16"
            initial={{ opacity: 0, x: 38, filter: "blur(8px)" }}
            animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.9, delay: 0.55, ease: [0.22, 1, 0.36, 1] }}
          >
            <HeroCodePanel />
          </motion.div>
        </div>

        <div className="absolute bottom-8 right-0 hidden lg:block">
          <HeroScrollIndicator />
        </div>
      </div>
    </section>
  );
}