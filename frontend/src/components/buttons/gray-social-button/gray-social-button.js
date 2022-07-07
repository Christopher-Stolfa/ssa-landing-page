import styles from './gray-social-button.module.css';
// import * as icons from '@fortawesome/free-brands-svg-icons';
import * as icons from 'react-icons/fa';
/**
 * Gray social media icon button
 * @param {*} props
 * @param {String} title - Social media website title.
 * @param {String} link - The link to the social media website.
 * @param {Object} icon - Social media icons.
 */
const GraySocialButton = ({ title, link, icon }) => {
  const Icon = icons[icon] || <span>{title}</span>;
  return (
    <div className={styles.container}>
      <a id={`graySocialButton${title}`} aria-label={title} className={styles.iconWrapper} href={link}>
        <Icon size={'36px'} />
      </a>
    </div>
  );
};

export default GraySocialButton;
