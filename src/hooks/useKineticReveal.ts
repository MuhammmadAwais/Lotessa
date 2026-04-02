/**
 * useKineticReveal
 * Global GSAP ScrollTrigger animation suite for Lotessa sections.
 *
 * Provides three helpers:
 *   revealParagraphs(containerRef)   – y:20, opacity:0 batch reveal for <p> tags
 *   revealCards(containerRef)        – scale:0.95, opacity:0 stagger for article cards
 *   revealSection(ref, direction)    – x:±30 horizontal slide-in per section
 */
import { useEffect, RefObject } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/** Paragraph batch reveal */
export function useParaReveal(containerRef: RefObject<HTMLElement>) {
  useEffect(() => {
    if (!containerRef.current) return;
    const paras = containerRef.current.querySelectorAll("p");
    if (!paras.length) return;

    ScrollTrigger.batch(paras, {
      onEnter: (batch) =>
        gsap.fromTo(
          batch,
          { y: 20, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            stagger: 0.1,
            ease: "power2.out",
            overwrite: "auto",
          }
        ),
      start: "top 88%",
    });

    return () => ScrollTrigger.getAll().forEach((t) => t.kill());
  }, [containerRef]);
}

/** Card scale-and-fade stagger */
export function useCardReveal(containerRef: RefObject<HTMLElement>, selector = ".gsap-card") {
  useEffect(() => {
    if (!containerRef.current) return;
    const cards = containerRef.current.querySelectorAll(selector);
    if (!cards.length) return;

    ScrollTrigger.batch(cards, {
      onEnter: (batch) =>
        gsap.fromTo(
          batch,
          { scale: 0.95, opacity: 0 },
          {
            scale: 1,
            opacity: 1,
            duration: 0.65,
            stagger: 0.12,
            ease: "power2.out",
            overwrite: "auto",
          }
        ),
      start: "top 90%",
    });

    return () => ScrollTrigger.getAll().forEach((t) => t.kill());
  }, [containerRef, selector]);
}

/** Section horizontal weave slide-in */
export function useSectionReveal(
  ref: RefObject<HTMLElement>,
  direction: "left" | "right" = "left"
) {
  useEffect(() => {
    if (!ref.current) return;
    const el = ref.current;
    const xFrom = direction === "left" ? -30 : 30;

    gsap.fromTo(
      el,
      { x: xFrom, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 0.9,
        ease: "power2.out",
        scrollTrigger: {
          trigger: el,
          start: "top 85%",
          once: true,
        },
      }
    );

    return () => ScrollTrigger.getAll().forEach((t) => t.kill());
  }, [ref, direction]);
}
