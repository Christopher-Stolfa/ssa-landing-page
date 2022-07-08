import styles from './top-menu.module.css';
import Image from 'next/image';
import SearchBar from './search-bar';

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
            <Image src="/images/logo-ccny-horz-w.svg" alt="city college of new york" width={180} height={16.83} />
          </a>
        </div>
      </div>
      <SearchBar />
    </nav>
  );
};

export default TopMenu;
