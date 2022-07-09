import styles from './sub-menu-item.module.css';

/**
 * Sub menu item listed in the Sub Menu.
 * @param {*} props
 * @param {String} props.name - Name of item.
 */
const SubMenuItem = ({ name = '', link = '' }) => (
  <li role="menuitem" className={styles.subMenuItem}>
    <a tabIndex="-1" href={link} className={styles.subMenuLink}>
      {name}
    </a>
  </li>
);

export default SubMenuItem;
