import Icon from '@/components/ui/icon/icon';
import { HEADER_SOCIALS_ITEMS } from '@/constants/header-socials-items';
import './header-socials.scss';

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
                <Icon className='header-socials__link' path={icon} width={10} height={10} />
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
export default HeaderSocials;