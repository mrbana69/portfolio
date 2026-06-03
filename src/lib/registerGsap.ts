import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

try {
  gsap.registerPlugin(ScrollTrigger);
} catch (e) {
  // ignore if already registered or if registration fails
}

export {};
