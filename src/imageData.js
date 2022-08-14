/**
 * Contains image data used across the entire application
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
const digitourSrc = process.env.PUBLIC_URL + '/images/digitour-thumbnail.webp';
/**
 * ssa small logo
 */
const ssaSmallLogoSrc = process.env.PUBLIC_URL + '/images/ssa_small.svg';
/**
 * Search icon
 */
const searchIconSrc = process.env.PUBLIC_URL + '/images/search-icon.svg';
/**
 * Blur image
 */
const blurImgSrc = process.env.PUBLIC_URL + '/images/blur.webp';
/**
 * Images used in the header background
 */
const backgroundImages = [
  { src: process.env.PUBLIC_URL + '/background-images/image-1.webp' },
  { src: process.env.PUBLIC_URL + '/background-images/image-2.webp' },
  { src: process.env.PUBLIC_URL + '/background-images/image-3.webp' },
  { src: process.env.PUBLIC_URL + '/background-images/image-4.webp' },
  { src: process.env.PUBLIC_URL + '/background-images/image-5.webp' },
  { src: process.env.PUBLIC_URL + '/background-images/image-6.webp' },
];
/**
 * Offers page background image
 */
const offersBackgroundSrc = process.env.PUBLIC_URL + '/images/fav-bySirinSamman-1448-X3.webp';
/**
 * Image data used for slide show
 */

const slideImagesPath = process.env.PUBLIC_URL + '/slideshow-images';
const slideImagesSizes = ''; // '(max-width: 85rem) 85rem, 100vw';
const slideImages = [
  {
    src: slideImagesPath + '/SpitzerSideview_RafaelVinolyArchitects.webp',
    fallbackSrc: slideImagesPath + '/SpitzerSideview_RafaelVinolyArchitects.jpg',
    alt: 'Exterior photo of The Bernard and Anne Spitzer School of Architecture. Photo by  Rafael Viñoly Architects, ©Bruce Damonte.',
    sizes: slideImagesSizes,
  },
  {
    src: slideImagesPath + '/fav-bySirinSamman-0256.webp',
    fallbackSrc: slideImagesPath + '/fav-bySirinSamman-0256.jpg',
    alt: 'Students collaborating during studio hours using digital and analog medium. Photo by Sirin Samman.',
    sizes: slideImagesSizes,
  },
  {
    src: slideImagesPath + '/139A6163-X3.webp',
    fallbackSrc: slideImagesPath + '/139A6163-X3.jpg',
    alt: 'Students working on physical models in studio. Photo by Sirin Samman.',
    sizes: slideImagesSizes,
  },
  {
    src: slideImagesPath + '/fav-bySirinSamman-0230.webp',
    fallbackSrc: slideImagesPath + '/fav-bySirinSamman-0230.jpg',
    alt: 'Students gather around a professor during a collective feedback session. Photo by Sirin Samman.',
    sizes: slideImagesSizes,
  },
  {
    src: slideImagesPath + '/fav-bySirinSamman-0074.webp',
    fallbackSrc: slideImagesPath + '/fav-bySirinSamman-0074.jpg',
    alt: 'Professors and students listening in during a project presentation. Photo by Sirin Samman.',
    sizes: slideImagesSizes,
  },
  {
    src: slideImagesPath + '/fav-bySirinSamman-1448-X3.webp',
    fallbackSrc: slideImagesPath + '/fav-bySirinSamman-1448-X3.jpg',
    alt: 'Exterior photo of The Bernard and Anne Spitzer School of Architecture. Photo by Sirin Samman.',
    sizes: slideImagesSizes,
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
  blurImgSrc,
};
