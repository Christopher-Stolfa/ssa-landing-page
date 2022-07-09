import styles from './menu-item.module.css';
import utilStyles from '../../../styles/utils.module.css';
/**
 * Navbar Menu Item.
 * @param
 * @returns
 */
const MenuItem = ({ title = '', subMenu = [] }) => (
  <section role="menu" className={styles.navMenuItem}>
    <h3 className={utilStyles.headingSm}>{title}</h3>
    <div className={styles.subMenu}>
      {subMenu.map(({ subTitle = '', items = [] }, i) => (
        <div className={styles.subMenuItem} key={`navBarSubMenuItem${i}`} role="presentation">
          {subTitle && <h4 className={utilStyles.headingXs}>{subTitle}</h4>}
          <ul className={styles.subMenuList}>
            {items.map(({ name = '', link = '' }, i) => (
              <li role="menuitem" key={`navBarSubMenu${name}${i}`}>
                <a className={utilStyles.navLink} href={link}>
                  {name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  </section>
);

export default MenuItem;
