import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(useGSAP);

// %======================== useAboutAnimation ========================% //


export const useAboutAnimation = (() => {
  const windowHeight = window.innerHeight;

  useGSAP(() => {

    gsap.timeline({
      defaults: {
        opacity: 0,
        y: -0.25 * windowHeight,
      },
      scrollTrigger: {
        trigger: '.about',
        markers: false,
        start: '50% 50%',
        end: '100% 0%',
        scrub: 1,
      }
    })
      .to('.about__headings', {
      }, '<')
      .to('.about__image', {
      }, '<')
      .to('.about__info', {
      }, '<')
      .to('.about__button', {
      }, '<');
  });
});