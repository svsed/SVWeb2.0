import { Hero } from '../components/Hero';
import { TheShift } from '../components/TheShift';
import { NewSystemsValley } from '../components/NewSystemsValley';
import { WhatWeEngineer } from '../components/WhatWeEngineer';
import { Approach } from '../components/Approach';
import { ExecutionLayer } from '../components/ExecutionLayer';
import { Philosophy } from '../components/Philosophy';
import { WhySystemsValley } from '../components/WhySystemsValley';
import { FutureVision } from '../components/FutureVision';
import { FinalCTA } from '../components/FinalCTA';

export function Home() {
  return (
    <>
      <Hero />
      <TheShift />
      <NewSystemsValley />
      <WhatWeEngineer />
      <Approach />
      <ExecutionLayer />
      <Philosophy />
      <WhySystemsValley />
      <FutureVision />
      <FinalCTA />
    </>
  );
}
