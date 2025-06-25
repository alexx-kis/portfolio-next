'use client';

import Skills from '@/components/layout/skills/skills';
import MainButton from '@/components/ui/main-button/main-button';
import { AppRoute, basePath } from '@/constants/const';
import { ViewportWidth } from '@/constants/viewport';
import { aboutSectionText } from '@/data/about';
import { SKILLS_CONCISE } from '@/data/skills';
import { useAboutAnimation } from '@/hooks/animation/use-about-animation';
import { useTransitionLink } from '@/hooks/use-transition-link';
import { splitTextToParagraphs } from '@/utils/utils';
import Image from 'next/image';
import { useEffect, useRef } from 'react';
import './about-section.scss';

// @======================== AboutSection ========================@ //

type Element = HTMLDivElement | null;

function AboutSection(): React.JSX.Element {
  useAboutAnimation();

  const imageWrapperRef = useRef<Element>(null);
  const headingsRef = useRef<Element>(null);

  const adjustElementHeight = (reference: Element, element: Element) => {
    if (reference && element) {
      element.style.height = '0px';
      element.style.height = `${reference.clientHeight}px`;
    }
  };

  useEffect(() => {
    if (window.innerWidth > ViewportWidth.MOBILE) {
      adjustElementHeight(headingsRef.current, imageWrapperRef.current);
      window.addEventListener('resize', () => {
        adjustElementHeight(headingsRef.current, imageWrapperRef.current);
      });
    }
  });

  const { handleTransition } = useTransitionLink();

  return (
    <section className='main__about about' id='about'>
      <div className='container'>
        <div className='about__inner'>
          <div className='about__header'>
            <div className='about__headings' ref={headingsRef}>
              <h2 className='about__heading heading'>Hi!</h2>
              <h2 className='about__heading heading'>
                My name is Alex and I am a frontend developer
              </h2>
            </div>
            <div className='about__image-wrapper' ref={imageWrapperRef}>
              <Image
                src={`${basePath}/img/avatar-big.png`}
                alt=''
                width={1}
                height={1}
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
          <Skills data={SKILLS_CONCISE} />
          <MainButton
            bemClassName='about__button'
            href={AppRoute.ABOUT}
            text='Learn more'
            iconPath={`${basePath}/img/icons/go-to-arrow.svg`}
            onMainButtonClick={(e) => {
              handleTransition(e, AppRoute.ABOUT);
            }}
          />
        </div>
      </div>
    </section >
  );
}
export default AboutSection;