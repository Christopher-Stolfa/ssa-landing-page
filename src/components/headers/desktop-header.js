import styles from './desktop-header.module.css';
import TopMenu from './top-menu';
import Branding from './branding';
import MenuBar from '../navigation/menu-bar/menu-bar';
import HeaderBackground from './header-background';

/**
 * This header is used if the window width is greater than 1024px
 */
const DesktopHeader = () => (
  <div className={styles.container}>
    <HeaderBackground />
    <div className={styles.wrapper} role="banner">
      <TopMenu />
      <Branding />
      <MenuBar />
    </div>
  </div>
);

export default DesktopHeader;
