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
        yPercent: -40,
      },
      scrollTrigger: {
        trigger: '.about',
        markers: false,
        start: '75% 50%',
        end: '100% 0%',
        scrub: 1,
      }
    })
      .to('.about__headings', {
      })
      .to('.about__image', {
      }, '<')
      .to('.about__info', {
      }, '<');
  });
});