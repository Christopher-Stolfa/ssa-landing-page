import styles from './top-menu.module.css';
import Img from 'react-cool-img';
import { ccnyLogoSrc } from '../../imageData';
import { ccnyLink } from '../../data';
// import SearchBar from './search-bar';

/**
 * The top menu that contains the small ssa logo
 * @returns
 */
const TopMenu = () => {
  return (
    <nav id="topMenuNav" className={styles.nav}>
      <div className={styles.wrapper}>
        <div className={styles.logoWrapper}>
          <a href={ccnyLink}>
            <Img src={ccnyLogoSrc} alt="city college of new york logo" style={{ width: '180px', height: '16.83px' }} />
          </a>
        </div>
      </div>
      {/* <SearchBar /> */}
    </nav>
  );
};

export default TopMenu;
