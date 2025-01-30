import { PAGE_TRANSITION_TIME } from '@/constants/const';
import { executeTransition } from '@/utils/utils';
import { usePathname, useRouter } from 'next/navigation';

// %======================== useTransition ========================% //

export const useTransitionLink = () => {
  const router = useRouter();
  const pathname = usePathname();

  const handleTransition = async (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (pathname === href) {
      return;
    }
    e.preventDefault();
    document.body.classList.add('page-transition');
    await executeTransition(PAGE_TRANSITION_TIME);
    router.push(href);
    await executeTransition(PAGE_TRANSITION_TIME);
    document.body.classList.remove('page-transition');
  };
  return { handleTransition };
};