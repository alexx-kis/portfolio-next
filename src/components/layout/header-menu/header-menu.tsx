import { AppRoute } from '@/constants/const';
import clsx from 'clsx';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import './header-menu.scss';

// ^======================== HeaderMenu ========================^ //
const HEADER_MENU_ITEMS = [
  {
    link: AppRoute.Main,
    name: 'Home',
  },
  {
    link: AppRoute.About,
    name: 'About me',
  },
  {
    link: AppRoute.Works,
    name: 'My works',
  },
  {
    link: '#contact',
    name: 'Contact',
  },
];

export default function HeaderMenu() {
  const pathname = usePathname();
  return (
    <ul className='header-menu'>
      {HEADER_MENU_ITEMS.map(({ link, name }, index) => {
        return (
          <li key={index} className='header-menu__item'>
            <Link
              href={link}
              className={clsx(
                'header-menu__link',
                { '_active': pathname === link }
              )}
            >
              {name}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
