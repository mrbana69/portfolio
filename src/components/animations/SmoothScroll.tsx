'use client';

import { ReactLenis, useLenis } from '@studio-freight/react-lenis';
import { useEffect, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

function LenisScrollBridge() {
  const lenis = useLenis(() => ScrollTrigger.update());

  useEffect(() => {
    if (!lenis) return;

    const handleAnchorClick = (event: MouseEvent) => {
      if (event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
      if (!(event.target instanceof Element)) return;

      const link = event.target.closest<HTMLAnchorElement>('a[href^="#"]');
      if (!link) return;

      const id = decodeURIComponent(link.hash.slice(1));
      const destination = document.getElementById(id);
      if (!destination) return;

      event.preventDefault();
      window.history.pushState(null, '', `#${id}`);
      lenis.scrollTo(destination, { offset: -80 });
    };

    document.addEventListener('click', handleAnchorClick);
    return () => document.removeEventListener('click', handleAnchorClick);
  }, [lenis]);

  return null;
}

export default function SmoothScroll({ children }: { children: React.ReactNode }) {
  const [reducedMotion, setReducedMotion] = useState<boolean | null>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const preference = window.matchMedia('(prefers-reduced-motion: reduce)');
    const updatePreference = () => setReducedMotion(preference.matches);
    const refresh = () => ScrollTrigger.refresh();
    updatePreference();
    preference.addEventListener('change', updatePreference);
    window.addEventListener('resize', refresh);

    return () => {
      preference.removeEventListener('change', updatePreference);
      window.removeEventListener('resize', refresh);
    };
  }, []);

  if (reducedMotion !== false) return <>{children}</>;

  return (
    <ReactLenis root options={{ lerp: 0.12, smoothWheel: true, syncTouch: false }}>
      <LenisScrollBridge />
      {children}
    </ReactLenis>
  );
}