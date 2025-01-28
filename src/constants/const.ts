export const basePath = process.env.NODE_ENV === 'production'
  ? '/portfolio-next'
  : '';

export enum AppRoute {
  Main = '/',
  About = '/about'
}