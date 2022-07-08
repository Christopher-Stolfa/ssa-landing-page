import styles from './mobile-header.module.css';
import Image from 'next/image';
import NavBar from '../navigation/nav-bar/nav-bar';
import { menuOptions } from '../../data/navigation-data';

/**
 * This header is used if the window width is less than 1024px
 * @returns
 */
const MobileHeader = () => (
  <div className={styles.wrapper}>
    <NavBar menuOptions={menuOptions}>
      <a className={styles.anchor} href="https://ssa.ccny.cuny.edu/">
        <Image
          src="/images/spitzer_logo.svg"
          alt="Banner that links to the Bernard and Anne Spitzer School of Architecture website"
          width={254}
          height={34.47}
        />
      </a>
    </NavBar>
  </div>
);

export default MobileHeader;
