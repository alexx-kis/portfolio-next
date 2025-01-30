import { HEADER_MENU_ITEMS } from '@/constants/const';
import { MediaQuery } from '@/constants/viewport';
import { useMediaQuery } from '@/hooks/use-media-query';
import { useTransitionLink } from '@/hooks/use-transition-link';
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
  const { handleTransition } = useTransitionLink();

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
              <Link
                href={link}
                className={clsx(
                  'header-inner__menu-link',
                  { '_active': pathname === link }
                )}
                onClick={(e) => {
                  onHeaderLinkClick(e);
                  if (name !== 'Contact') {
                    handleTransition(e, link);
                  }
                }}
              >
                {name}
              </Link>
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