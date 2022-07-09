import styles from './menu-bar.module.css';
import MenuItem from './menu-item';

/**
 * Menu bar component. Use the menu bar for screen widths above 1024px.
 * @param {*} props
 * @param {Array} props.menuOptions - Array of objects containing menu navigation options.
 */
const MenuBar = ({ menuOptions = [] }) => (
  <nav>
    <ul role="menubar" className={styles.menuBar}>
      {menuOptions.map((menuOption, i) => (
        <MenuItem key={`${menuOption.title}-${i}`} index={i} menuOption={menuOption} />
      ))}
    </ul>
  </nav>
);

export default MenuBar;
