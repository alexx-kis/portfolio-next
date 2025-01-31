'use client';

import MainButton from '@/components/ui/main-button/main-button';
import { basePath } from '@/constants/const';
import { useHeroAnimation } from '@/hooks/animation/use-hero-animation';
import './hero-section.scss';

// @======================== HeroSection ========================@ //

function HeroSection(): React.JSX.Element {
  useHeroAnimation();
  return (
    <section
      className='hero'
      style={{
        backgroundImage: `url(${basePath}/img/bg/hero-bg.jpg)`,
      }}
    >
      <div className='container'>
        <div className='hero__inner'>
          <h1 className='hero__heading heading _main'>Hi! I&apos;m Alex</h1>
          <p className='hero__text'>a frontend developer</p>
          <div className='hero__button-box'>
            <MainButton
              bemClassName='hero__button'
              href=''
              text='Download CV'
              iconPath={`${basePath}/img/icons/download-arrow.svg`}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
export default HeroSection;