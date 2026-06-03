'use client';

import '../../lib/registerGsap';

import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

export default function Hero() {
  const containerRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);

  useGSAP(() => {
    const tl = gsap.timeline({ defaults: { ease: "power4.out", force3D: true } });

    tl.from(".char", {
      y: 200,
      skewY: 10,
      stagger: 0.05,
      duration: 1.2,
    })
    .from(subtitleRef.current, {
      opacity: 0,
      y: 20,
      duration: 1
    }, "-=0.8");
  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="relative min-h-screen flex flex-col justify-center px-6 pt-20">
      <div className="overflow-hidden">
        <h1 ref={titleRef} className="text-[clamp(4.25rem,11vw,8rem)] sm:text-huge flex flex-col">
          <span className="char inline-block">EMILIANO</span>
          <span className="char inline-block text-outline">BANA</span>
        </h1>
      </div>

      <div ref={subtitleRef} className="mt-12 max-w-xl">
        <p className="text-xl md:text-2xl text-text-muted leading-relaxed">
          Dalla formazione alle esperienze sul campo: <br />
          <span className="text-white">competenze tecniche, crescita personale, impatto reale.</span>
        </p>
        
        <div className="mt-8 inline-flex items-center gap-3 text-lg text-white/80">
          <span>Scorri per scoprire di più</span>
          <span className="animate-bounce text-2xl">↓</span>
        </div>
      </div>
    </section>
  );
}