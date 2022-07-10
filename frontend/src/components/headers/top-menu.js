import styles from './top-menu.module.css';
import Img from 'react-cool-img';
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
          <a href="http://www.ccny.cuny.edu/">
            <Img
              src="/wp-content/themes/ssa/images/logo-ccny-horz-w.svg"
              alt="city college of new york logo"
              style={{ width: '180px', height: '16.83px' }}
            />
          </a>
        </div>
      </div>
      {/* <SearchBar /> */}
    </nav>
  );
};

export default TopMenu;
