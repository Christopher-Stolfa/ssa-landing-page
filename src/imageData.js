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
 * Blur image
 */
const blurImgSrc = process.env.PUBLIC_URL + '/images/blur.webp';
/**
 * Images used in the header background
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
// const slideImages = [
//   {
//     src: process.env.PUBLIC_URL + '/slideshow-images/fav-bySirinSamman-0256.jpg',
//     alt: 'SSA students working on projects. Photo taken by Sirin Samman.',
//   },
//   { src: process.env.PUBLIC_URL + '/slideshow-images/image_19.jpg', alt: 'ssa campus image' },
//   {
//     src: process.env.PUBLIC_URL + '/slideshow-images/fav-bySirinSamman-0074.jpg',
//     alt: 'SSA student presentations. Photo taken by Sirin Samman.',
//   },
//   {
//     src: process.env.PUBLIC_URL + '/slideshow-images/fav-bySirinSamman-0230.jpg',
//     alt: 'SSA students having a discussion with a professor. Photo taken by Sirin Samman.',
//   },
// ];

const slideImagesPath = process.env.PUBLIC_URL + '/slideshow-images';
const slideImagesSizes = '' // '(max-width: 85rem) 85rem, 100vw';
const slideImages = [
  {
    src: slideImagesPath + '/SpitzerSideview_RafaelVinolyArchitects/SpitzerSideview_RafaelVinolyArchitects-medium.png',
    srcSet: [
      slideImagesPath +
        '/SpitzerSideview_RafaelVinolyArchitects/SpitzerSideview_RafaelVinolyArchitects-medium.png 1203w',
      slideImagesPath +
        '/SpitzerSideview_RafaelVinolyArchitects/SpitzerSideview_RafaelVinolyArchitects-large.png 1633w',
    ].toString(),
    alt: 'Exterior photo of The Bernard and Anne Spitzer School of Architecture. Photo by  Rafael Viñoly Architects, ©Bruce Damonte.',
    sizes: slideImagesSizes,
  },
  {
    src: slideImagesPath + '/fav-bySirinSamman-0256/fav-bySirinSamman-medium.png',
    srcSet: [
      slideImagesPath + '/fav-bySirinSamman-0256/fav-bySirinSamman-0256-medium.png 1074w',
      slideImagesPath + '/fav-bySirinSamman-0256/fav-bySirinSamman-0256-large.png 1400w',
    ].toString(),
    alt: 'Students collaborating during studio hours using digital and analog medium. Photo by Sirin Samman.',
    sizes: slideImagesSizes,
  },
  {
    src: slideImagesPath + '/139A6163-X3/139A6163-X3-medium.png',
    srcSet: [
      slideImagesPath + '/139A6163-X3/139A6163-X3-medium.png 1060w',
      slideImagesPath + '/139A6163-X3/139A6163-X3-large.png 1400w',
    ].toString(),
    alt: 'Students working on physical models in studio. Photo by Sirin Samman.',
    sizes: slideImagesSizes,
  },
  {
    src: slideImagesPath + '/fav-bySirinSamman-0230/fav-bySirinSamman-0230-medium.png',
    srcSet: [
      slideImagesPath + '/fav-bySirinSamman-0230/fav-bySirinSamman-0230-medium.png 1068w',
      slideImagesPath + '/fav-bySirinSamman-0230/fav-bySirinSamman-0230-large.png 1400w',
    ].toString(),
    alt: 'Students gather around a professor during a collective feedback session. Photo by Sirin Samman.',
    sizes: slideImagesSizes,
  },
  {
    src: slideImagesPath + '/fav-bySirinSamman-0074/fav-bySirinSamman-0074-medium.png',
    srcSet: [
      slideImagesPath + '/fav-bySirinSamman-0074/fav-bySirinSamman-0074-medium.png 1097w',
      slideImagesPath + '/fav-bySirinSamman-0074/fav-bySirinSamman-0074-large.png 1400w',
    ].toString(),
    alt: 'Professors and students listening in during a project presentation. Photo by Sirin Samman.',
    sizes: slideImagesSizes,
  },
  {
    src: slideImagesPath + '/fav-bySirinSamman-1448-X3/fav-bySirinSamman-1448-X3-medium.png',
    srcSet: [
      slideImagesPath + '/fav-bySirinSamman-1448-X3/fav-bySirinSamman-1448-X3-medium.png 1074w',
      slideImagesPath + '/fav-bySirinSamman-1448-X3/fav-bySirinSamman-1448-X3-large.png 1400w',
    ].toString(),
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
