"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

if (typeof window !== "undefined") gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function Reveal({ children }: { children: React.ReactNode }) {
  const root = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches || !root.current) return;

    const items = root.current.querySelectorAll<HTMLElement>("[data-reveal]");
    items.forEach((item) => {
      gsap.fromTo(item, { autoAlpha: 0, y: 18 }, {
        autoAlpha: 1,
        y: 0,
        duration: 0.65,
        ease: "power2.out",
        scrollTrigger: { trigger: item, start: "top 90%", once: true },
      });
    });
  }, { scope: root });

  return <div className="motion-root" ref={root}>{children}</div>;
}
