'use client';

import { useRef, useState } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

export default function Loader({ onComplete }: { onComplete: () => void }) {
  const containerRef = useRef(null);
  const [progress, setProgress] = useState(0);

  useGSAP(() => {
    const tl = gsap.timeline({
      onComplete: () => onComplete(),
    });

    // Animazione della percentuale (finto caricamento per estetica)
    tl.to({}, {
      duration: 2.5,
      onUpdate: function () {
        setProgress(Math.round(this.progress() * 100));
      },
      ease: "power2.inOut",
    });

    // Uscita del loader
    tl.to(containerRef.current, {
      yPercent: -100,
      duration: 1.2,
      ease: "power4.inOut",
      delay: 0.2,
    });
  }, { scope: containerRef });

  return (
    <div 
      ref={containerRef} 
      className="fixed inset-0 z-[999] bg-black flex flex-col items-center justify-center pointer-events-none"
    >
      <div className="flex flex-col items-center">
        <span className="text-accent font-mono text-sm mb-4 uppercase tracking-[0.2em] opacity-50">
          System Initializing
        </span>
        <div className="text-white text-8xl md:text-9xl font-black italic tabular-nums">
          {progress}%
        </div>
        <div className="w-40 h-[2px] bg-white/10 mt-8 relative overflow-hidden">
          <div 
            className="absolute inset-0 bg-accent origin-left transition-transform duration-100 ease-out"
            style={{ transform: `scaleX(${progress / 100})` }}
          />
        </div>
      </div>
    </div>
  );
}