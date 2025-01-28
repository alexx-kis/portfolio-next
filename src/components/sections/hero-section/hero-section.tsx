'use client';

import { useHeroAnimation } from '@/hooks/animation/use-hero-animation';
import './hero-section.scss';
import { basePath } from '@/constants/const';

// @======================== HeroSection ========================@ //

function HeroSection(): React.JSX.Element {
  useHeroAnimation();
  return (
    <section
      className='main__hero hero scroll'
      style={{
        backgroundImage: `url(${basePath}/img/bg/hero-bg.jpg)`,
      }}
    >
      <div className='container'>
        <div className='hero__inner'>
          <h1 className='hero__heading heading _main'>Hi! I&apos;m Alex</h1>
          <p className='hero__text'>a frontend developer</p>
          <div className='hero__heading main-heading loading'></div>
          <a className='hero__button loading' href='./docs/CV.pdf' target='_blank'>
            Download CV
          </a>
        </div>
      </div>
    </section>
  );
}
export default HeroSection;