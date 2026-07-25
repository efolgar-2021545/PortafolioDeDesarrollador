import { useEffect, useState } from "react";

export default function useScrollDirection() {
  const [scrollDirection, setScrollDirection] = useState("up");
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    let lastScrollY = window.scrollY;
    let ticking = false;

    const updateScrollDirection = () => {
      const currentScrollY = window.scrollY;
      const difference = currentScrollY - lastScrollY;

      if (Math.abs(difference) < 8) {
        ticking = false;
        return;
      }

      setScrollDirection(difference > 0 ? "down" : "up");
      setScrollY(currentScrollY);

      lastScrollY = currentScrollY > 0 ? currentScrollY : 0;
      ticking = false;
    };

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateScrollDirection);
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return {
    scrollDirection,
    scrollY,
    isAtTop: scrollY < 24
  };
}