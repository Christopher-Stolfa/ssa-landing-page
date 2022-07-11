import styles from './mobile-header.module.css';
import Img from 'react-cool-img';
import NavBar from '../navigation/nav-bar/nav-bar';
import { homeLink, menuOptions } from './data';
import { ssaLogoSrc } from '../../imageData';

/**
 * This header is used if the window width is less than 1024px
 * @returns
 */
const MobileHeader = () => (
  <div className={styles.wrapper}>
    <NavBar menuOptions={menuOptions}>
      <a className={styles.anchor} href={homeLink}>
        <Img
          src={ssaLogoSrc}
          alt="Bernard and Anne Spitzer School of Architecture website logo."
          className={styles.img}
        />
      </a>
    </NavBar>
  </div>
);

export default MobileHeader;
