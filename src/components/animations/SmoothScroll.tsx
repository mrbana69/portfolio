'use client';

import { ReactLenis } from '@studio-freight/react-lenis';
import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

export default function SmoothScroll({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    // Registriamo i plugin una volta sola all'avvio dell'app
    gsap.registerPlugin(ScrollTrigger);
    
    // Ottimizzazione: ricarica ScrollTrigger quando cambiano le dimensioni
    window.addEventListener('resize', () => ScrollTrigger.refresh());
    
    return () => window.removeEventListener('resize', () => ScrollTrigger.refresh());
  }, []);

  return (
    <ReactLenis root options={{ lerp: 0.1, duration: 1.2, smoothWheel: true, syncTouch: true }}>
      {children}
    </ReactLenis>
  );
}