import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

// %======================== useSkillsAnimation ========================% //

export const useSkillsAnimation = () => {
  useGSAP(() => {
    const skillsScrollAnimationOut = gsap.timeline({
      defaults: {
        opacity: 0,
      },
      scrollTrigger: {
        trigger: '.skills',
        markers: false,
        start: '100% 100%',
        end: '100% 0%',
        scrub: 1,
      }
    });

    skillsScrollAnimationOut
      .to('.skills__heading', {
        yPercent: -200,
      })
      .to('.skills__group', {
        yPercent: -200,
        stagger: 0.1,
      }, '<');
  });
};