import TransitionLink from '@/components/transition-link/transition-link';
import { HEADER_MENU_ITEMS } from '@/constants/const';
import { MediaQuery } from '@/constants/viewport';
import { useMediaQuery } from '@/hooks/use-media-query';
import clsx from 'clsx';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import HeaderLang from '../header-lang/header-lang';
import HeaderSocials from '../header-socials/header-socials';
import './header-inner.scss';

// ^======================== HeaderInner ========================^ //
type HeaderInnerProps = {
  isOpen: boolean;
  onHeaderLinkClick: (e: React.MouseEvent<HTMLAnchorElement>) => void;
};

function HeaderInner(headerInnerProps: HeaderInnerProps): React.JSX.Element {
  const { isOpen, onHeaderLinkClick } = headerInnerProps;
  const isMobileScreen = useMediaQuery(MediaQuery.MOBILE);
  const pathname = usePathname();

  return (
    <div
      className={clsx(
        'header-inner',
        { '_open': isMobileScreen && isOpen }
      )}
    >
      <ul className='header-inner__menu'>
        {HEADER_MENU_ITEMS.map(({ link, name }, index) => {
          return (
            <li key={index} className='header-inner__menu-item'>
              {
                name === 'Contact' ? (
                  <Link
                    href={link}
                    className={clsx(
                      'header-inner__menu-link',
                      { '_active': pathname === link }
                    )}
                    onClick={onHeaderLinkClick}
                  >
                    {name}
                  </Link>
                )
                  :
                  <TransitionLink
                    href={link}
                    className={clsx(
                      'header-inner__menu-link',
                      { '_active': pathname === link }
                    )}
                    onTransitionLinkClick={onHeaderLinkClick}
                  >
                    {name}
                  </TransitionLink>
              }
            </li>
          );
        })}
      </ul>
      <HeaderLang />
      <HeaderSocials />
    </div>
  );
}
export default HeaderInner;