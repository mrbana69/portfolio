'use client';

import { useState } from 'react';
import SmoothScroll from "../components/animations/SmoothScroll";
import Hero from "../sections/Hero/Hero";
import Manifesto from "../sections/Manifesto/Manifesto";
import Timeline from "../sections/Timeline/Timeline";
import Studioware from "../sections/Studioware/Studioware";
import Erasmus from "../sections/Erasmus/Erasmus";
import Reset from "../sections/Reset/Reset";
import Offly from "../sections/Offly/Offly";
import Future from "../sections/Future/Future";
import Loader from "./Loader";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      <Loader onComplete={() => setIsLoading(false)} />
      
      {/* Il contenuto viene montato ma tenuto nascosto finché il loader non ha finito */}
      <div className={isLoading ? "invisible h-screen overflow-hidden" : "visible"}>
        <SmoothScroll>
          <main>
            <Hero />
            <Manifesto />
            <Timeline />
            <Studioware />
            <Erasmus />
            <Reset />
            <Offly />
            <Future />
          </main>
        </SmoothScroll>
      </div>
    </>
  );
}