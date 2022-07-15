import styles from './desktop-header.module.css';
import TopMenu from './top-menu';
import Branding from './branding';
import MenuBar from '../navigation/menu-bar/menu-bar';
import Img from 'react-cool-img';
import { useEffect, useState } from 'react';
import { backgroundImages } from '../../imageData';

/**
 * This header is used if the window width is greater than 1024px
 */
const DesktopHeader = ({ menuOptions = [] }) => {
  const [currentIndex, setCurrentIndex] = useState(Math.floor(Math.random() * backgroundImages.length));

  /**
   * Every couple of seconds set a random index as the current index.
   * Background image of the current index will be the src used for the background image.
   */
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex(Math.floor(Math.random() * backgroundImages.length));
    }, 7000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className={styles.container}>
      {backgroundImages.map(({ src }, i) => (
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
