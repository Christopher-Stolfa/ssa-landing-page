import styles from './mobile-header.module.css';
import Img from 'react-cool-img';
import NavBar from '../navigation/nav-bar/nav-bar';
import { ssaLink } from '../../data';
import { ssaLogoSrc } from '../../imageData';
import useTheme from '../../hooks/useTheme';

/**
 * This header is used if the window width is less than 1024px
 * @returns
 */
const MobileHeader = () => {
  const { menuOptions } = useTheme();

  return (
    <NavBar>
      <a className={styles.anchor} href={ssaLink}>
        <Img
          src={ssaLogoSrc}
          alt="Bernard and Anne Spitzer School of Architecture website logo."
          className={styles.img}
        />
      </a>
    </NavBar>
  );
};

export default MobileHeader;
