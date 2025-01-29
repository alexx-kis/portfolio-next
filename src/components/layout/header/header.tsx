'use client';
import { MediaQuery } from '@/constants/viewport';
import { useMediaQuery } from '@/hooks/use-media-query';
import { isEscapeKey } from '@/utils/utils';
import React, { useEffect, useState } from 'react';
import Burger from '../burger/burger';
import HeaderInner from '../header-inner/header-inner';
import './header.scss';

// $======================== Header ========================$ //

function Header(): React.JSX.Element {
  const [isInnerOpen, setIsInnerOpen] = useState(false);
  const isMobileScreen = useMediaQuery(MediaQuery.MOBILE);

  const handleBurgerClick = () => {
    setIsInnerOpen(!isInnerOpen);
  };

  const handleHeaderMenuLinkClick = () => {
    setIsInnerOpen(false);
  };

  useEffect(() => {
    const handleKeyDown = (evt: KeyboardEvent) => {
      if (isEscapeKey(evt)) {
        setIsInnerOpen(false);
      }
    };

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return (
    <header className='header'>
      <div className='container'>

        <HeaderInner isOpen={isInnerOpen} onHeaderLinkClick={handleHeaderMenuLinkClick} />

        {isMobileScreen && (
          <Burger
            isActive={isInnerOpen}
            onBurgerClick={handleBurgerClick}
          />
        )}

      </div>
    </header>
  );
}
export default Header;