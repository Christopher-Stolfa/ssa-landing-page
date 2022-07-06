import styles from './yellow-social-button.module.css';
import * as icons from 'react-icons/fa';

/**
 * Yellow social media icon button
 * @param {*} props
 * @param {String} props.title - Social media website title
 * @param {String} props.link - The link to the social media website
 * @param {String} props.icon - Social media icons.
 * @param {String} props.altIcon - Alternative icon style.
 
*/
const YellowSocialButton = ({ title = '', link = '', icon = '', altIcon = '' }) => {
  const Icon = icons[altIcon] || icons[icon] || <span>{title}</span>;
  return (
    <div className={styles.container}>
      <a aria-label={title} className={styles.iconWrapper} href={link}>
        <Icon size={'36px'} />
      </a>
    </div>
  );
};

export default YellowSocialButton;
