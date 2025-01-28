import { HEADER_SOCIALS_ITEMS } from '@/constants/header-socials-items';
import Image from 'next/image';
import './header-socials.scss';
import { TelegramIcon } from '@/assets/icons';

// ^======================== HeaderSocials ========================^ //

function HeaderSocials(): React.JSX.Element {
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
                {icon}
                <icon/>
                {/* <TelegramIcon/> */}
                {/* <Image
                  src={icon}
                  width={25}
                  height={25}
                  alt={label}
                  className='img-svg'
                /> */}
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
export default HeaderSocials;