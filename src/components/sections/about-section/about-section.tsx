'use client';

import { splitTextToParagraphs } from '@/app/utils/utils';
import MainButton from '@/components/ui/main-button/main-button';
import { AppRoute, basePath } from '@/constants/const';
import { aboutSectionText } from '@/data/about';
import Image from 'next/image';
import './about-section.scss';

// @======================== AboutSection ========================@ //

function AboutSection(): React.JSX.Element {

  // useAboutAnimation();

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
            {splitTextToParagraphs(aboutSectionText).map((paragraph, index) => (
              <p key={index} className='about__text'>
                {paragraph}
              </p>
            ))}
          </div>
          <div className='about__button-wrapper'>
            <MainButton
              bemClassName='about__button'
              href={AppRoute.About}
              text='Read more'
              iconPath={`${basePath}/img/icons/go-to-arrow.svg`}
            />
          </div>
        </div>
      </div>
    </section >
  );
}
export default AboutSection;