import styles from './nav-link.module.css';
/**
 * Custom link component
 */
const NavLink = ({ children, link = '#', altLink = false }) => (
  <a href={link} className={altLink ? styles.altLink : styles.link}>
    {children}
  </a>
);

export default NavLink;
