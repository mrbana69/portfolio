'use client';

import '../../lib/registerGsap';

import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

export default function Manifesto() {
  const textRef = useRef(null);

  useGSAP(() => {
    const words = gsap.utils.toArray('.word');
    
    gsap.to(words, {
      scrollTrigger: {
        trigger: textRef.current,
        start: "top 80%",
        end: "bottom 20%",
        scrub: true,
      },
      color: "white",
      stagger: 0.1,
    });
  }, { scope: textRef });

  return (
    <section className="min-h-screen flex items-center px-6 bg-white text-black/20 py-40">
      <div ref={textRef} className="max-w-5xl mx-auto">
        <h2 className="text-6xl md:text-8xl font-black leading-tight">
          <span className="word">FORMARE.</span><br />
          <span className="word">FARE.</span><br />
          <span className="word">CRESCERE.</span>
        </h2>
        <p className="mt-20 text-2xl md:text-4xl text-black font-medium max-w-2xl">
          Ogni progetto è un passo avanti. Ogni ora spesa è una competenza acquisita.
        </p>
      </div>
    </section>
  );
}