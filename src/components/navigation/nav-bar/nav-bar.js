import styles from './nav-bar.module.css';
import { FaBars } from '@react-icons/all-files/fa/FaBars';
import { AiOutlineClose } from '@react-icons/all-files/ai/AiOutlineClose';
import { useState, useEffect, useRef } from 'react';
import MenuItem from './menu-item';
import { menuOptions } from '../../../data';
import { useQuery } from '@apollo/client';
import formatMenuData from '../../../lib/format-menu-data';
import GET_MENU from '../../../queries/get-menu';

/**
 * Navbar for mobile and tablet devices.
 */
const NavBar = ({ children }) => {
  const ref = useRef(null);
  const [toggle, setToggle] = useState(false);

  const { loading, error, data } = useQuery(GET_MENU);

  if (loading) {
    console.log('loading menu');
  }
  if (error) {
    console.log(error);
  }
  if (data) {
    console.log('received menu data');
  }

  // When the side menu opens
  useEffect(() => {
    if (toggle) {
      document.body.style.overflow = 'hidden';
      document.body.style.position = 'fixed';
    }
    return () => {
      document.body.style.overflow = '';
      document.body.style.position = '';
    };
  }, [toggle]);

  const handleToggle = () => setToggle((prevState) => !prevState);

  return (
    <div className={styles.navBar}>
      <button
        id="navBarMenuButton"
        aria-haspopup="true"
        aria-expanded={toggle}
        aria-label="menu"
        aria-controls="navBarMenu"
        className={styles.icon}
        onClick={handleToggle}
        ref={ref}
      >
        {toggle ? <AiOutlineClose /> : <FaBars />}
      </button>
      {children}
      <nav id="navBarMenu" className={toggle ? styles.navMenuActive : styles.navMenu}>
        {data
          ? formatMenuData(data).map(({ title = '', subMenu = [] }, i) => (
              <MenuItem key={`navBarMenuItem${i}`} title={title} subMenu={subMenu} index={i} />
            ))
          : menuOptions.map(({ title = '', subMenu = [] }, i) => (
              <MenuItem key={`navBarMenuItem${i}`} title={title} subMenu={subMenu} index={i} />
            ))}
      </nav>
    </div>
  );
};

export default NavBar;
