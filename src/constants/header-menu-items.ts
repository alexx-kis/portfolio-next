import { AppRoute } from './const';

type HeaderMenuItem = {
  link: AppRoute | string;
  name: string;
};

export const HEADER_MENU_ITEMS: HeaderMenuItem[] = [
  {
    link: AppRoute.MAIN,
    name: 'Home',
  },
  {
    link: AppRoute.ABOUT,
    name: 'About me',
  },
  {
    link: AppRoute.WORKS,
    name: 'My works',
  },
  {
    link: '#contact',
    name: 'Contact',
  },
];