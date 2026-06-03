'use client';

import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

export default function GsapProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    if ((gsap as any).utils && !(gsap as any)._plugins?.ScrollTrigger) {
      gsap.registerPlugin(ScrollTrigger);
    } else {
      // ensure plugin is registered even if internal checks differ
      try {
        gsap.registerPlugin(ScrollTrigger);
      } catch (e) {
        // ignore
      }
    }
  }, []);

  return <>{children}</>;
}
