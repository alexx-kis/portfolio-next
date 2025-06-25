export const basePath = process.env.NODE_ENV === 'production'
  ? '/portfolio-next'
  : '';

export enum AppRoute {
  MAIN = '/',
  ABOUT = '/about',
  WORKS = '/works'
}

export const HEADER_MENU_ITEMS = [
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

export const PAGE_TRANSITION_TIME = 180;