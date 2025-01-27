import { ViewportWidth } from '@/constants/viewport';
import { useMediaQuery } from '@/hooks/use-media-query';
import Image from 'next/image';
import { useState } from 'react';
import './work.scss';

// ^======================== Work ========================^ //
type WorkProps = {
  className: string;
  href: string;
  label: string;
  imgSrc: string;
  gifSrc: string;
  gifMobSrc: string;
};

function Work(workProps: WorkProps): React.JSX.Element {
  const { className, href, label, imgSrc, gifSrc, gifMobSrc } = workProps;
  const [isHovered, setIsHovered] = useState(false);
  const isMobileScreen = useMediaQuery(ViewportWidth.MOBILE);

  return (
    <li
      className={`${className} work`}
      onMouseEnter={() => {
        setIsHovered(true);
      }}
      onMouseLeave={() => {
        setIsHovered(false);
      }}
    >
      <a href={href} className='work__link' aria-label={label}>
        <Image
          className='work__image'
          src={!isMobileScreen ? (isHovered ? gifSrc : imgSrc) : gifMobSrc}
          alt=''
          width={417}
          height={234}
        />
      </a>
    </li>
  );
}
export default Work;