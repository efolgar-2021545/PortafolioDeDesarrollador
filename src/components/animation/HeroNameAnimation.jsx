import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import profile from "../../data/profile.json";

gsap.registerPlugin(ScrollTrigger);

export default function HeroNameAnimation({ className = "" }) {
  const containerRef = useRef(null);
  const lettersRef = useRef([]);

  const name = profile.displayName;

  useLayoutEffect(() => {
    const container = containerRef.current;

    if (!container) return undefined;

    const triggerElement = container.closest("section") || container;

    const context = gsap.context(() => {
      gsap.set(lettersRef.current, {
        opacity: 1,
        x: 0,
        y: 0,
        rotate: 0,
        rotateX: 0,
        filter: "blur(0px)"
      });

      gsap.fromTo(
        lettersRef.current,
        {
          opacity: 0,
          y: 42,
          rotateX: -24,
          filter: "blur(10px)"
        },
        {
          opacity: 1,
          y: 0,
          rotateX: 0,
          filter: "blur(0px)",
          duration: 1.1,
          stagger: 0.045,
          ease: "power4.out",
          clearProps: "rotateX"
        }
      );

      gsap.fromTo(
        lettersRef.current,
        {
          x: 0,
          y: 0,
          rotate: 0,
          opacity: 1,
          filter: "blur(0px)"
        },
        {
          y: (index) => (index % 2 === 0 ? -34 : 30),
          x: (index) => (index % 3 === 0 ? -18 : 18),
          rotate: (index) => (index % 2 === 0 ? -4 : 4),
          opacity: 0.34,
          filter: "blur(3px)",
          ease: "none",
          scrollTrigger: {
            trigger: triggerElement,
            start: "top top",
            end: "70% top",
            scrub: true,
            invalidateOnRefresh: true
          }
        }
      );

      window.setTimeout(() => {
        ScrollTrigger.refresh();
      }, 250);
    }, container);

    return () => context.revert();
  }, []);

  lettersRef.current = [];

  return (
    <h1
      ref={containerRef}
      className={`text-balance text-6xl font-semibold leading-[0.86] tracking-[-0.105em] text-white sm:text-8xl md:text-9xl lg:text-[10.5rem] ${className}`}
      aria-label={name}
    >
      {name.split("").map((letter, index) => (
        <span
          key={`${letter}-${index}`}
          ref={(element) => {
            if (element) lettersRef.current.push(element);
          }}
          className={`inline-block will-change-transform ${
            letter === " " ? "w-5 sm:w-8 lg:w-10" : ""
          }`}
          aria-hidden="true"
        >
          {letter === " " ? "\u00A0" : letter}
        </span>
      ))}
    </h1>
  );
}