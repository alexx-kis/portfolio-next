import { PAGE_TRANSITION_TIME } from '@/constants/const';
import { executeTransition } from '@/utils/utils';
import { useRouter } from 'next/navigation';

// %======================== useTransition ========================% //

export const useTransitionLink = () => {
  const router = useRouter();

  const handleTransition = async (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    document.body.classList.add('page-transition');
    await executeTransition(PAGE_TRANSITION_TIME);
    router.push(href);
    await executeTransition(PAGE_TRANSITION_TIME);
    document.body.classList.remove('page-transition');
  };
  return { handleTransition };
};