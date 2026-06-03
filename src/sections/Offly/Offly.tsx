'use client';

import '../../lib/registerGsap';

import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { Smartphone } from 'lucide-react';

export default function Offly() {
  const containerRef = useRef(null);
  const imageRef = useRef(null);

  useGSAP(() => {
    gsap.from(".offly-reveal", {
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top center",
        end: "bottom center",
        toggleActions: "play none none reverse"
      },
      opacity: 0,
      scale: 0.9,
      duration: 1,
      stagger: 0.3,
      force3D: true,
    });

    // Effetto Parallasse per il mockup dell'app
    gsap.to(imageRef.current, {
      yPercent: -30,
      ease: "none",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top bottom",
        end: "bottom top",
        scrub: true,
      }
    });
  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="min-h-screen bg-black flex flex-col items-center justify-center px-6 relative overflow-hidden">
      {/* Immagine Mockup con Parallasse */}
      <div className="absolute left-[8%] top-[15%] w-[280px] h-[500px] overflow-hidden rounded-[3rem] border border-white/10 opacity-20 hidden lg:block">
        <img 
          ref={imageRef}
          src="/images/offly/mockup.svg" 
          alt="Offly App Interface" 
          className="w-full h-[150%] object-cover scale-110"
        />
      </div>

      <div className="offly-reveal mb-8 relative">
        <Smartphone size={80} className="text-accent" />
        {/* Linea diagonale per simulare il simbolo "OFF" se l'icona specifica non carica */}
        <div className="absolute top-1/2 left-0 w-full h-[2px] bg-accent -rotate-45" />
      </div>
      
      <h2 className="offly-reveal text-7xl md:text-9xl font-black mb-6">OFFLY</h2>
      
      <div className="offly-reveal text-center max-w-2xl">
        <p className="text-2xl md:text-3xl font-medium mb-12">
          The technology that helps people <span className="text-accent italic underline">disconnect.</span>
        </p>
        
        <div className="flex flex-wrap justify-center gap-4">
          {['iOS', 'Web Integration', 'Firebase'].map((tech) => (
            <span key={tech} className="px-6 py-2 border border-white/20 rounded-full text-sm uppercase tracking-widest">
              {tech}
            </span>
          ))}
        </div>
      </div>
      <div className="absolute bottom-10 text-white/10 font-black text-[20vw] select-none pointer-events-none">NO PHONE</div>
    </section>
  );
}