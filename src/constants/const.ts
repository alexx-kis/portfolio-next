export const basePath = process.env.NODE_ENV === 'production'
  ? '/portfolio-next'
  : '';


console.log(basePath);