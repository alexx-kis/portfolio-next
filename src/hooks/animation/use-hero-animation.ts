import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

// %======================== useHeroAnimation ========================% //

export const useHeroAnimation = () => {
  useGSAP(() => {
    const heroAnimation = gsap.timeline({
      defaults: {
        opacity: 0,
      },
    });
    heroAnimation
      .to(
        'body',
        {
          opacity: 1,
          function() {
            document.body.classList.add('no-scroll');
          },
        },
        '<'
      )
      .to('.preloader', {
        display: 'none',
      })
      .from('.hero', {
        duration: 1,
      }, '<')
      .from('.hero__heading', {
        xPercent: -100,
      })
      .from('.hero__text', {
        xPercent: -100,
      })
      .from('.hero__button', {
        xPercent: -100,
      })
      .from('.header', {
        yPercent: -100,
      })
      .to(
        'body',
        {
          opacity: 1,
          onComplete: () => {
            document.body.classList.remove('no-scroll');
            initializeHeroScrollAnimation();
          }
        },
        '<'
      );
  });
};

const initializeHeroScrollAnimation = () => {
  const heroScrollAnimation = gsap.timeline({
    scrollTrigger: {
      trigger: '.hero',
      markers: false,
      start: '0% 0%',
      end: '80% 0%',
      scrub: 1,
    },
  });

  heroScrollAnimation
    .to('.hero__heading', {
      yPercent: -300,
      opacity: 0,
    }, '<')
    .to('.hero__text', {
      yPercent: -300,
      opacity: 0,
    }, '<')
    .to('.hero__button', {
      yPercent: -300,
      opacity: 0,
    }, '<');
};
