import styles from './desktop-header.module.css';
import TopMenu from './top-menu';
import Branding from './branding';
import MenuBar from '../navigation/menu-bar/menu-bar';
import Img from 'react-cool-img';
import { menuOptions } from './navigation-data';
import { useEffect, useState } from 'react';
import images from './background-images';

/**
 * This header is used if the window width is greater than 1024px
 */
const DesktopHeader = () => {
  const [currentIndex, setCurrentIndex] = useState(Math.floor(Math.random() * images.length));

  /**
   * Every couple of seconds set a random index as the current index.
   * Background image of the current index will be the src used for the background image.
   */
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex(Math.floor(Math.random() * images.length));
    }, 7000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className={styles.container}>
      {images.map(({ src }, i) => (
        <Img
          key={`headerBackgroundImage${i}`}
          src={src}
          alt="Backdrop images"
          className={currentIndex === i ? styles.currentImage : styles.image}
        />
      ))}
      <div className={styles.wrapper} role="banner">
        <TopMenu />
        <Branding />
        <MenuBar menuOptions={menuOptions} />
      </div>
    </div>
  );
};

export default DesktopHeader;
