import { useState } from 'react';
import Arrow from './arrow';
import styles from './slide-show.module.css';
import Pagination from './pagination';
import Img from 'react-cool-img';

/**
 * @todo - Make slide transition animations
 * Slide Show Component
 * @param {*} props
 * @param {Array} slides - An array of slides
 */
const SlideShow = ({ slides = [] }) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  const selectSlide = (i) => {
    setCurrent(i);
  };

  return (
    <div className={styles.container}>
      <Arrow direction="left" handleClick={prevSlide} />
      <Arrow direction="right" handleClick={nextSlide} />
      <Pagination current={current} slides={slides} selectSlide={selectSlide} />
      <div className={styles.viewport}>
        <div style={{ transform: `translate3d(-${current * 100}%, 0px, 0px)` }} className={styles.slideContainer}>
          {slides.map(({ src, alt }, i) => (
            <div key={`slideShowImage${i}`} className={styles.slide}>
              <div className={styles.slideInner}>
                <picture className={styles.imageWrap}>
                  <source srcSet={src} type="image/webp" />
                  <Img
                    alt={alt}
                    src={src}
                    debounce={0}
                    style={{
                      position: 'absolute',
                      inset: '0px',
                      boxSizing: 'border-box',
                      padding: '0px',
                      border: 'none',
                      margin: 'auto',
                      display: 'block',
                      width: '0px',
                      height: '0px',
                      minWidth: '100%',
                      maxWidth: '100%',
                      minHeight: '100%',
                      maxHeight: '100%',
                      objectFit: 'cover',
                    }}
                  />
                </picture>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SlideShow;
