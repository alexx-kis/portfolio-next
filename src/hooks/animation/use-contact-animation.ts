import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

// %======================== useContactAnimation ========================% //

export const useContactAnimation = () => {
  useGSAP(() => {
    const contactScrollAnimation = gsap.timeline({
      defaults: {
        opacity: 0,
        yPercent: 100
      },
      scrollTrigger: {
        trigger: '.contact',
        markers: false,
        start: '0% 100%',
        end: '100% 100%',
        scrub: 1,
      }
    });

    contactScrollAnimation
      .from('.contact__heading', {
      })
      .from('.contact__list', {
      }, '<');
  });
};
