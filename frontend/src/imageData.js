/**
 * This path only uses wordpress path to image assets in production build.
 */
const path = process.env.NODE_ENV !== 'production' ? '' : '/wp-content/themes/ssa/landing-page-assets/';

/**
 * ssa logo
 */
const ssaLogoSrc = path + 'images/spitzer_logo.svg';

/**
 * ccny logo
 */
const ccnyLogoSrc = path + 'images/logo-ccny-horz-w.svg';
/**
 * cuny logo
 */
const cunyLogoSrc = path + 'images/cuny.svg';
/**
 * Digital tour thumbnail
 */
const digitourSrc = path + 'images/digitour-thumbnail.jpg';
/**
 * ssa small logl
 */
const ssaSmallLogoSrc = path + 'images/ssa_small.svg';
/**
 * Image data used header backdrop
 */
const backgroundImages = [
  { src: path + 'background-images/image-1.jpg' },
  { src: path + 'background-images/image-2.jpg' },
  { src: path + 'background-images/image-3.jpg' },
  { src: path + 'background-images/image-4.jpg' },
  { src: path + 'background-images/image-5.jpg' },
  { src: path + 'background-images/image-6.jpg' },
];
/**
 * Offers page background image
 */
const offersBackgroundSrc = path + 'images/fav-bySirinSamman-1448-X3.jpg';
/**
 * Image data used for slide show
 */
const slideImages = [
  {
    src: path + 'slideshow-images/fav-bySirinSamman-0256.jpg',
    alt: 'SSA students working on projects. Photo taken by Sirin Samman.',
  },
  { src: path + 'slideshow-images/image_19.jpg', alt: 'ssa campus image' },
  {
    src: path + 'slideshow-images/fav-bySirinSamman-0074.jpg',
    alt: 'SSA student presentations. Photo taken by Sirin Samman.',
  },
  {
    src: path + 'slideshow-images/fav-bySirinSamman-0230.jpg',
    alt: 'SSA students having a discussion with a professor. Photo taken by Sirin Samman.',
  },
];

export {
  cunyLogoSrc,
  ssaSmallLogoSrc,
  ssaLogoSrc,
  ccnyLogoSrc,
  offersBackgroundSrc,
  backgroundImages,
  slideImages,
  digitourSrc,
};
