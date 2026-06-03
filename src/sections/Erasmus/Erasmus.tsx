'use client';

import '../../lib/registerGsap';

import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

export default function Erasmus() {
  const containerRef = useRef(null);

  useGSAP(() => {
    gsap.from(".stat-item", {
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 60%",
        end: "bottom 80%",
        scrub: 1,
      },
      opacity: 0,
      y: 100,
      stagger: 0.2,
      force3D: true,
    });
  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="min-h-screen bg-white text-black flex flex-col justify-center px-6 py-20">
      <div className="max-w-7xl mx-auto w-full">
        <h2 className="text-accent font-mono mb-4">EXPERIENCE ABROAD</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-12">
          <div className="stat-item">
            <span className="text-8xl md:text-9xl font-black block">30</span>
            <p className="text-2xl font-bold uppercase mt-4 italic">Days in Riga, Latvia</p>
          </div>
          <div className="stat-item">
            <span className="text-8xl md:text-9xl font-black block">1</span>
            <p className="text-2xl font-bold uppercase mt-4 italic">Country Discovered</p>
          </div>
          <div className="stat-item">
            <span className="text-8xl md:text-9xl font-black block">100</span>
            <p className="text-2xl font-bold uppercase mt-4 italic">Formation Hours</p>
          </div>
        </div>
      </div>
    </section>
  );
}