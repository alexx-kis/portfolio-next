export const basePath = process.env.NODE_ENV === 'production'
  ? '/portfolio-next'
  : '';

export enum AppRoute {
  Main = '/',
  About = '/about',
  Works = '/works'
}

export const HEADER_MENU_ITEMS = [
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

export const PAGE_TRANSITION_TIME = 125;