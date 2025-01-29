import { AppRoute } from './const';

type HeaderMenuItem = {
  link: AppRoute | string;
  name: string;
};

export const HEADER_MENU_ITEMS: HeaderMenuItem[] = [
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