import Img from 'react-cool-img';
import { useCallback, useEffect, useState } from 'react';
import { backgroundImages } from '../../imageData';

const HeaderBackground = () => {
  const [currentIndex, setCurrentIndex] = useState(Math.floor(Math.random() * backgroundImages.length));

  /**
   * Every couple of seconds set a random index as the current index.
   * Background image of the current index will be the src used for the background image.
   */
  useEffect(() => {
    const intervalId = setInterval(() => {
      handleIndex();
    }, 7000);

    return () => clearInterval(intervalId);
  }, []);

  const handleIndex = useCallback(
    (e) => {
      setCurrentIndex(Math.floor(Math.random() * backgroundImages.length));
    },
    [currentIndex],
  );

  return backgroundImages.map(({ src }, i) => (
    <Img
      key={src}
      src={src}
      alt="Header background image"
      style={{
        position: 'absolute',
        backgroundSize: 'cover',
        objectFit: 'cover',
        opacity: currentIndex === i ? 0.3 : 0,
        transition: 'opacity 1000ms ease-in-out',
        width: '100%',
        height: '100%',
      }}
    />
  ));
};

export default HeaderBackground;
