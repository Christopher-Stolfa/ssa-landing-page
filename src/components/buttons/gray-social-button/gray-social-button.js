import styles from './gray-social-button.module.css';
/**
 * Gray social media icon button
 * @param {*} props
 * @param {String} title - Social media website title.
 * @param {String} link - The link to the social media website.
 * @param {Object} icon - Social media icons.
 */
const GraySocialButton = ({ title = '', link = '', Icon = null }) => (
  <a id={`graySocialButton${title}`} aria-label={title} className={styles.iconWrapper} href={link}>
    <Icon size={'36px'} />
  </a>
);

export default GraySocialButton;
