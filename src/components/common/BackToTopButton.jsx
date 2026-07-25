import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";
import { useLocation } from "react-router-dom";

export default function BackToTopButton() {
  const location = useLocation();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 620);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleClick = (event) => {
    if (location.pathname === "/") {
      event.preventDefault();

      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    }
  };

  return (
    <a
      href="/#inicio"
      onClick={handleClick}
      aria-label="Volver al inicio"
      className={`fixed bottom-28 right-4 z-40 flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-portfolio-black/80 text-portfolio-muted shadow-glow backdrop-blur-xl transition duration-300 hover:border-portfolio-blue/50 hover:bg-portfolio-blue/10 hover:text-portfolio-softBlue focus:outline-none focus:ring-2 focus:ring-portfolio-softBlue focus:ring-offset-2 focus:ring-offset-portfolio-black sm:bottom-24 sm:right-6 ${
        isVisible
          ? "translate-y-0 opacity-100"
          : "pointer-events-none translate-y-4 opacity-0"
      }`}
    >
      <ArrowUp size={20} />
    </a>
  );
}