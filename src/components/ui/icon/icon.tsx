import Image from 'next/image';
import { useEffect, useRef } from 'react';
import './icon.scss';

// ^======================== Icon ========================^ //

type IconProps = {
  path: string;
  width: number;
  height: number;
  className?: string;
};

function Icon({ path, width, height, className }: IconProps): React.JSX.Element {
  const imgRef = useRef<HTMLImageElement | null>(null);

  useEffect(() => {
    if (!imgRef.current) return;

    const replaceWithSvg = async () => {
      try {
        const response = await fetch(path);
        const data = await response.text();
        const parser = new DOMParser();
        const svg = parser.parseFromString(data, 'image/svg+xml').querySelector('svg');

        if (!svg) {
          console.error(`No SVG found in ${path}`);
          return;
        }

        svg.removeAttribute('xmlns:a');

        if (!svg.hasAttribute('viewBox') && svg.hasAttribute('height') && svg.hasAttribute('width')) {
          svg.setAttribute('viewBox', `0 0 ${svg.getAttribute('width')} ${svg.getAttribute('height')}`);
        }

        if (className) {
          svg.setAttribute('class', className);
        }

        imgRef.current?.replaceWith(svg);
      } catch (error) {
        console.error('Error fetching the SVG:', error);
      }
    };

    replaceWithSvg();
  }, [path, className]);

  return <Image ref={imgRef} src={path} alt='' width={width} height={height} />;
}

export default Icon;
