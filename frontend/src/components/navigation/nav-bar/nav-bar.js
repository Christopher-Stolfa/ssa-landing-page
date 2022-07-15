import styles from './nav-bar.module.css';
import { FaBars } from 'react-icons/fa';
import { AiOutlineClose } from 'react-icons/ai';
import { useState, useEffect, useRef } from 'react';
import MenuItem from './menu-item';
import useTheme from '../../../hooks/useTheme';

const NavBar = ({ children }) => {
  const ref = useRef(null);
  const [toggle, setToggle] = useState(false);
  const { menuOptions } = useTheme();

  // When the side menu opens,
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
        {menuOptions.map(({ title = '', subMenu = [] }, i) => (
          <MenuItem key={`navBarMenuItem${i}`} title={title} subMenu={subMenu} index={i} />
        ))}
      </nav>
    </div>
  );
};

export default NavBar;
