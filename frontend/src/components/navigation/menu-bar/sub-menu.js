import styles from './sub-menu.module.css';
import SubMenuItem from './sub-menu-item';

/**
 * The Sub Menu that expands under each Menu Item listed in the Menu Bar.
 * @param {*} props
 * @param {Object} props.btnRef - Ref of the main menu button.
 * @param {String} props.subTitle - Title of the sub menu list.
 * @param {Array} props.items - List of sub menu items.
 * @param {Boolean} props.open - Represents whether or not the sub menus are expanded.
 * @param {Object} ref - Reference to the parent's main menu item.
 */
const SubMenu = ({ subTitle = '', items = [] }) => (
  <li role="presentation" className={styles.subMenu}>
    {subTitle && (
      <span aria-live="polite" role="menuitem" className={styles.subTitle}>
        {subTitle}
      </span>
    )}
    <ul role="menu" className={styles.subMenuList}>
      {items.map(({ name = '', link = '' }, i) => (
        <SubMenuItem name={name} link={link} key={name + i} />
      ))}
    </ul>
  </li>
);

export default SubMenu;
