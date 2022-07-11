import styles from './mobile-header.module.css';
import Img from 'react-cool-img';
import NavBar from '../navigation/nav-bar/nav-bar';
import { menuOptions } from './data';

/**
 * This header is used if the window width is less than 1024px
 * @returns
 */
const MobileHeader = () => (
  <div className={styles.wrapper}>
    <NavBar menuOptions={menuOptions}>
      <a className={styles.anchor} href="https://ssa.ccny.cuny.edu/">
        <Img
          src="/wp-content/themes/ssa/images/spitzer_logo.svg"
          alt="Bernard and Anne Spitzer School of Architecture website logo."
          className={styles.img}
        />
      </a>
    </NavBar>
  </div>
);

export default MobileHeader;
