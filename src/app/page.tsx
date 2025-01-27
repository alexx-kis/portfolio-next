'use client';

import AboutSection from '@/components/sections/about-section/about-section';
import { useScrollToTop } from '@/hooks/use-scroll-to-top';
import HeroSection from '../components/sections/hero-section/hero-section';

export default function Home() {

  useScrollToTop();

  return (
    <main>
      <HeroSection />
      <section className='sections-wrapper'>
        <AboutSection />
      </section>
    </main>
  );
}
