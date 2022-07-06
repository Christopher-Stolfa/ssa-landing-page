import styles from './yellow-button.module.css';

/**
 * Yellow Button styled component
 * @param {*} props
 * @param {String} props.link - Link that you want the button direct to when pressed
 * @param {*} props.children - Any text or elements that you want rendered in the button
 */
const YellowButton = ({ link = '#', text = '', label = '' }) => (
  <a aria-label={label} href={link} className={styles.container}>
    <span className={styles.wrapper}>{text}</span>
  </a>
);

export default YellowButton;
