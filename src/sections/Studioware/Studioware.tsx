'use client';

import '../../lib/registerGsap';

import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

export default function Studioware() {
  const sectionRef = useRef(null);
  const numberRef = useRef(null);
  const imageRef = useRef(null);

  useGSAP(() => {
    gsap.to(numberRef.current, {
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top top",
        end: "+=100%",
        scrub: true,
        pin: true,
      },
      opacity: 0,
      scale: 1.5,
      filter: "blur(30px)",
      force3D: true, // Usa la GPU
    });

    // Effetto Parallasse per l'immagine laterale
    gsap.to(imageRef.current, {
      yPercent: -20,
      ease: "none",
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top bottom",
        end: "bottom top",
        scrub: true,
      }
    });
  }, { scope: sectionRef });

  return (
    <section ref={sectionRef} className="h-screen bg-black flex items-center justify-center overflow-hidden">
      <div ref={numberRef} className="absolute inset-0 flex items-center justify-center pointer-events-none will-change-transform">
        <span className="text-[40vw] font-black text-white/[0.03] leading-none">80</span>
      </div>

      {/* Immagine con Parallasse */}
      <div className="absolute right-[10%] top-[20%] w-[300px] h-[450px] overflow-hidden rounded-2xl opacity-30 hidden lg:block border border-white/10">
        <img 
          ref={imageRef}
          src="/images/studioware/project.svg" 
          alt="Studioware Workflow" 
          className="w-full h-[140%] object-cover"
        />
      </div>
      
      <div className="relative z-10 text-center px-6 max-w-4xl">
        <h2 className="text-5xl md:text-7xl mb-8">STUDIOWARE</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {['Unit Testing', 'Middleware', 'UML', 'Team Development'].map((skill) => (
            <div key={skill} className="p-4 border border-border rounded-lg bg-surface/50 backdrop-blur-sm">
              <p className="font-mono text-sm uppercase tracking-widest text-accent">{skill}</p>
            </div>
          ))}
        </div>
        <p className="mt-12 text-xl text-text-muted">
          Ottanta ore di immersione totale nel workflow di sviluppo professionale.
        </p>
      </div>
    </section>
  );
}