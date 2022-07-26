import styles from './menu-bar.module.css';
import MenuItem from './menu-item';
import { useQuery } from '@apollo/client';
import { menuOptions } from '../../../data';
import GET_MENU from '../../../queries/get-menu';
import formatMenuData from '../../../lib/format-menu-data';
import { useEffect, memo } from 'react';

/**
 * Menu bar component. Use the menu bar for screen widths above 1024px.
 * @param {*} props
 * @param {Array} props.menuOptions - Array of objects containing menu navigation options.
 */
const MenuBar = () => {
  const { loading, error, data } = useQuery(GET_MENU);

  useEffect(() => {
    console.log('Loaded menu bar');
  }, []);

  if (loading) {
    console.log('loading menu');
  }
  if (error) {
    console.log(error);
  }
  if (data) {
    console.log('received menu data');
  }

  /**
   * If data is received successfully map the formatted menu data.
   * If the data is loading or there's an error, map a hardcoded set of menu items from the date 7/20/2022.
   */
  return (
    <nav>
      <ul role="menubar" className={styles.menuBar}>
        {data
          ? formatMenuData(data).map((menuOption, i) => (
              <MenuItem key={`${menuOption.title}-${i}`} index={i} menuOption={menuOption} />
            ))
          : menuOptions.map((menuOption, i) => (
              <MenuItem key={`${menuOption.title}-${i}`} index={i} menuOption={menuOption} />
            ))}
      </ul>
    </nav>
  );
};
export default MenuBar;
