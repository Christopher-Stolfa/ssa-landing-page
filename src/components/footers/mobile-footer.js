import styles from './mobile-footer.module.css';
import YellowSocialButton from '../buttons/yellow-social-button/';
import YellowButton from '../buttons/yellow-button/';
import { socialMedia, subscribeLink } from '../../data';

/**
 * The website footer component for mobile screen sizes
 */
const MobileFooter = () => (
  <footer id="footer" className={styles.container}>
    <p className={styles.text}>{"Want to know what's on at Spitzer?"}</p>
    <ul className={styles.socialMediaList}>
      {socialMedia.map((props, i) => (
        <li key={`yellow-social-media-${props.title}-${i}`}>
          <YellowSocialButton {...props} />
        </li>
      ))}
    </ul>
    <p className={styles.subscribeText}>Join our email list!</p>
    <YellowButton
      link={subscribeLink}
      text="learn more"
      label="learn more about the bernard and anne spitzer school of architecture"
    >
      subscribe
    </YellowButton>
    <div id="google_translate_element"></div>
    <p className={styles.copywrite}>
      © {new Date().getFullYear()} The Bernard and Anne Spitzer School of Architecture. All rights reserved.
    </p>
  </footer>
);

export default MobileFooter;
