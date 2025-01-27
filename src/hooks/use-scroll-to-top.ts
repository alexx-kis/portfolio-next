import { useEffect } from 'react';

// %======================== useScrollToTop ========================% //

export const useScrollToTop = () => {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      if ('scrollRestoration' in window.history) {
        window.history.scrollRestoration = 'manual';
      }

      window.scrollTo(0, 0);
    }

    return () => {
      if (typeof window !== 'undefined' && 'scrollRestoration' in window.history) {
        window.history.scrollRestoration = 'auto';
      }
    };
  }, []);

  return null;
};
