'use client'

import { aboutSectionText } from '@/data/about';
import { useAboutAnimation } from '@/hooks/animation/use-about-animation';
import Image from 'next/image';
import './about-section.scss';
import { basePath } from '@/constants/const';

// @======================== AboutSection ========================@ //

function AboutSection(): React.JSX.Element {

  useAboutAnimation();

  return (
    <section className='main__about about' id='about'>
      <div className='container'>
        <div className='about__inner'>
          <div className='about__header'>
            <div className='about__headings'>
              <h2 className='about__heading heading'>Hi!</h2>
              <h2 className='about__heading heading'>
                My name is Alex and I am a frontend developer
              </h2>
            </div>
            <div className='about__image'>
              <Image
                src={`${basePath}/img/avatar-small.png`}
                alt=''
                width={400}
                height={400}
              />
            </div>
          </div>
          <div className='about__info'>
            {aboutSectionText.split('\n').map((line, index) => (
              <p key={index} className='about__text'>
                {line}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section >
  );
}
export default AboutSection;