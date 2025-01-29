import { MediaQuery } from '@/constants/viewport';
import { useMediaQuery } from '@/hooks/use-media-query';
import Image from 'next/image';
import { useState } from 'react';
import './work.scss';

// ^======================== Work ========================^ //
type WorkProps = {
  className: string;
  href: string;
  label: string;
  title: string;
  desc: string;
  technologies: string[],
  imgSrc: string;
  gifSrc: string;
  gifMobSrc: string;
};

function Work(workProps: WorkProps): React.JSX.Element {
  const { className, href, label, title, desc, technologies, imgSrc, gifSrc, gifMobSrc } = workProps;
  const [isHovered, setIsHovered] = useState(false);
  const isMobileScreen = useMediaQuery(MediaQuery.MOBILE);

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
        <div className='work__image-box'>
        <Image
          className='work__image'
          src={!isMobileScreen ? (isHovered ? gifSrc : imgSrc) : gifMobSrc}
          alt=''
          width={417}
          height={234}
        />
        </div>
        <div className='work__info'>
          <p className='work__title'>
            {title}
          </p>
          <p className='work__desc'>
            {desc}
          </p>
          <ul className='work__technologies'>
            {technologies.map((item) => (
              <li key={item} className='work__technology'>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </a>
    </li>
  );
}
export default Work;