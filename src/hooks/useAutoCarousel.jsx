import { useCallback, useEffect, useState } from "react";

export default function useAutoCarousel(length, intervalMs = 4200) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const goTo = useCallback(
    (index) => {
      if (!length) return;

      setActiveIndex(() => {
        if (index < 0) return length - 1;
        if (index >= length) return 0;
        return index;
      });
    },
    [length]
  );

  const next = useCallback(() => {
    if (!length) return;
    setActiveIndex((current) => (current + 1) % length);
  }, [length]);

  const previous = useCallback(() => {
    if (!length) return;
    setActiveIndex((current) => (current - 1 + length) % length);
  }, [length]);

  useEffect(() => {
    if (!length || length <= 1 || isPaused) return undefined;

    const interval = window.setInterval(() => {
      next();
    }, intervalMs);

    return () => window.clearInterval(interval);
  }, [intervalMs, isPaused, length, next]);

  useEffect(() => {
    if (!length) return;
    if (activeIndex > length - 1) setActiveIndex(0);
  }, [activeIndex, length]);

  return {
    activeIndex,
    isPaused,
    setIsPaused,
    goTo,
    next,
    previous
  };
}