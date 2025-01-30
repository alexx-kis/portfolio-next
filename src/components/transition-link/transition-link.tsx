'use client';

import { PAGE_TRANSITION_TIME } from '@/constants/const';
import { executeTransition } from '@/utils/utils';
import Link, { LinkProps } from 'next/link';
import { useRouter } from 'next/navigation';
import { ReactNode } from 'react';

// ^======================== TransitionLink ========================^ //

type TransitionLinkProps = {
  children: ReactNode;
  href: string;
  className?: string;
  onTransitionLinkClick: (e: React.MouseEvent<HTMLAnchorElement>) => void;
} & LinkProps;

function TransitionLink(transitionLinkProps: TransitionLinkProps): React.JSX.Element {
  const { children, href, className, onTransitionLinkClick, ...props } = transitionLinkProps;
  const router = useRouter();

  const handleTransition = async (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    onTransitionLinkClick(e);
    document.body.classList.add('page-transition');
    await executeTransition(PAGE_TRANSITION_TIME);
    router.push(href);
    await executeTransition(PAGE_TRANSITION_TIME);
    document.body.classList.remove('page-transition');
  };

  return (
    <Link
      onClick={handleTransition}
      className={className}
      href={href}
      {...props}
    >
      {children}
    </Link>
  );
}
export default TransitionLink;