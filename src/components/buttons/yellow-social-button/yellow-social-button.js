import styles from './yellow-social-button.module.css';

/**
 * Yellow social media icon button
 * @param {*} props
 * @param {String} props.title - Social media website title
 * @param {String} props.link - The link to the social media website
 * @param {String} props.icon - Social media icons.
 * @param {String} props.altIcon - Alternative icon style.
 
*/
const YellowSocialButton = ({ title = '', link = '', Icon = null, AltIcon = null }) => (
  <div className={styles.container}>
    <a aria-label={title} className={styles.iconWrapper} href={link}>
      {AltIcon ? <AltIcon size={'36px'} /> : <Icon size={'36px'} />}
    </a>
  </div>
);

export default YellowSocialButton;
