// import { MOBILE } from '@/constants/viewport';
import { ViewportWidth } from '@/constants/viewport';
import { useMediaQuery } from '@/hooks/use-media-query';
import clsx from 'clsx';
import HeaderLang from '../header-lang/header-lang';
import HeaderMenu from '../header-menu/header-menu';
import HeaderSocials from '../header-socials/header-socials';
import './header-inner.scss';

// ^======================== HeaderInner ========================^ //
type HeaderInnerProps = {
  isOpen: boolean;
};

function HeaderInner(headerInnerProps: HeaderInnerProps): React.JSX.Element {
  const { isOpen } = headerInnerProps;
  const isMobileScreen = useMediaQuery(ViewportWidth.MOBILE);

  return (
    <div
      className={clsx(
        'header-inner',
        { '_open': isMobileScreen && isOpen }
      )}
    >
      <HeaderMenu />
      <HeaderLang />
      <HeaderSocials />
    </div>
  );
}
export default HeaderInner;