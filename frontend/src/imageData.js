/**
 * This path only uses wordpress path to image assets in production build.
 */

/**
 * ssa logo
 */
const ssaLogoSrc = process.env.PUBLIC_URL + '/images/spitzer_logo.svg';

/**
 * ccny logo
 */
const ccnyLogoSrc = process.env.PUBLIC_URL + '/images/logo-ccny-horz-w.svg';
/**
 * ccny logo 2
 */
const ccnyLogo2Src = process.env.PUBLIC_URL + '/images/ccny.svg';
/**
 * cuny logo
 */
const cunyLogoSrc = process.env.PUBLIC_URL + '/images/cuny.svg';
/**
 * Digital tour thumbnail
 */
const digitourSrc = process.env.PUBLIC_URL + '/images/digitour-thumbnail.jpg';
/**
 * ssa small logo
 */
const ssaSmallLogoSrc = process.env.PUBLIC_URL + '/images/ssa_small.svg';
/**
 * Search icon
 */
const searchIconSrc = process.env.PUBLIC_URL + '/images/search-icon.svg';
/**
 * Image data used header backdrop
 */
const backgroundImages = [
  { src: process.env.PUBLIC_URL + '/background-images/image-1.jpg' },
  { src: process.env.PUBLIC_URL + '/background-images/image-2.jpg' },
  { src: process.env.PUBLIC_URL + '/background-images/image-3.jpg' },
  { src: process.env.PUBLIC_URL + '/background-images/image-4.jpg' },
  { src: process.env.PUBLIC_URL + '/background-images/image-5.jpg' },
  { src: process.env.PUBLIC_URL + '/background-images/image-6.jpg' },
];
/**
 * Offers page background image
 */
const offersBackgroundSrc = process.env.PUBLIC_URL + '/images/fav-bySirinSamman-1448-X3.jpg';
/**
 * Image data used for slide show
 */
const slideImages = [
  {
    src: process.env.PUBLIC_URL + '/slideshow-images/fav-bySirinSamman-0256.jpg',
    alt: 'SSA students working on projects. Photo taken by Sirin Samman.',
  },
  { src: process.env.PUBLIC_URL + '/slideshow-images/image_19.jpg', alt: 'ssa campus image' },
  {
    src: process.env.PUBLIC_URL + '/slideshow-images/fav-bySirinSamman-0074.jpg',
    alt: 'SSA student presentations. Photo taken by Sirin Samman.',
  },
  {
    src: process.env.PUBLIC_URL + '/slideshow-images/fav-bySirinSamman-0230.jpg',
    alt: 'SSA students having a discussion with a professor. Photo taken by Sirin Samman.',
  },
];

export {
  cunyLogoSrc,
  ssaSmallLogoSrc,
  ssaLogoSrc,
  ccnyLogoSrc,
  ccnyLogo2Src,
  offersBackgroundSrc,
  backgroundImages,
  slideImages,
  digitourSrc,
  searchIconSrc,
};
