import { HEADER_SOCIALS_ITEMS } from '@/constants/header-socials-items';
import useReplaceImgWithSvg from '@/hooks/use-replace-Img-with-svg';
import Image from 'next/image';
import './header-socials.scss';

// ^======================== HeaderSocials ========================^ //

function HeaderSocials(): React.JSX.Element {
  useReplaceImgWithSvg();
  return (
    <div className='header-socials'>
      <ul className='header-socials__list'>
        {HEADER_SOCIALS_ITEMS.map(({ href, label, icon }, index) => {
          return (
            <li key={index} className='header-socials__item'>
              <a
                href={href}
                className='header-socials__link'
                aria-label={label}
              >
                <Image
                  src={icon}
                  width={25}
                  height={25}
                  alt={label}
                  className='img-svg'
                />
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
export default HeaderSocials;