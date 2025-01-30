import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(useGSAP);

// %======================== useAboutAnimation ========================% //

export const useAboutAnimation = (() => {
  useGSAP(() => {

    gsap.timeline({
      defaults: {
        opacity: 0,
        yPercent: -50,
      },
      scrollTrigger: {
        trigger: '.about',
        markers: true,
        start: '50% 50%',
        end: '100% 0%',
        scrub: 1,
      }
    })
      .to('.about__headings', {
      }, '<')
      .to('.about__image-wrapper', {
      }, '<')
      .to('.about__info', {
      }, '<')
      .to('.skills__heading', {
        yPercent: -50,
      }, '<')
      .to('.skills__group', {
        yPercent: -100,
        stagger: 0.1,
      }, '<')
      .to('.about__button', {
        delay: 0.5
      }, '');
  });
});