'use client';

import '../../lib/registerGsap';

import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { timelineData } from './timelineData';

export default function Timeline() {
  const containerRef = useRef(null);
  const lineRef = useRef(null);

  useGSAP(() => {
    // Animazione linea verticale
    gsap.fromTo(lineRef.current, 
      { scaleY: 0 },
      {
        scaleY: 1,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 20%",
          end: "bottom 80%",
          scrub: true,
        }
      }
    );

    // Animazione singoli elementi
    const items = gsap.utils.toArray('.timeline-item');
    items.forEach((item) => {
      const element = item as HTMLElement;
      gsap.from(element, {
        opacity: 0,
        x: element.dataset.side === 'left' ? -50 : 50,
        scrollTrigger: {
          trigger: element,
          start: "top 80%",
          end: "top 50%",
          scrub: true,
        }
      });
    });
  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="relative min-h-screen py-40 bg-black overflow-hidden">
      <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-[2px] bg-white/10 -translate-x-1/2" />
      <div ref={lineRef} className="hidden md:block absolute left-1/2 top-0 bottom-0 w-[2px] bg-accent -translate-x-1/2 origin-top" />

      <div className="container mx-auto px-6 relative">
        {timelineData.map((item, index) => (
          <div 
            key={index}
            data-side={index % 2 === 0 ? 'left' : 'right'}
            className={`timeline-item mb-16 flex flex-col items-center w-full md:justify-between md:items-center md:flex-row ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
          >
            <div className="hidden md:block md:w-5/12" />
            <div className="z-20 w-4 h-4 rounded-full bg-accent border-4 border-black my-4 md:my-0" />
            <div className="w-full max-w-xl md:w-5/12 bg-surface p-6 md:p-8 border border-border rounded-2xl hover:border-accent/50 transition-colors">
              <span className="text-accent font-mono mb-2 block">{item.year}</span>
              <h3 className="text-lg md:text-2xl mb-3 md:mb-4">{item.title}</h3>
              <p className="text-text-muted text-sm md:text-base">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}