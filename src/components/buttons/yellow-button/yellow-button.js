import styles from './yellow-button.module.css';

/**
 * Yellow Button styled component
 * @param {*} props
 * @param {String} props.link - Link that you want the button direct to when pressed
 * @param {*} props.children - Any text or elements that you want rendered in the button
 */
const YellowButton = ({ link = '#', text = '', label = '', invert = false }) => (
  <div className={!invert ? styles.container : styles.containerInvert}>
    <a className={!invert ? styles.wrapper : styles.wrapperInvert} aria-label={label} href={link}>
      {text}
    </a>
  </div>
);

export default YellowButton;
