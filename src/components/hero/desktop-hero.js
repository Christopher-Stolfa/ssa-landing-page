import styles from './desktop-hero.module.css';
import utilStyles from '../../styles/utils.module.css';
import { socialMedia, subscribeLink, welcomeLink } from '../../data';
import YellowButton from '../buttons/yellow-button/yellow-button';
import YellowSocialButton from '../buttons/yellow-social-button/yellow-social-button';
import SlideShow from '../slide-show/slide-show';
import { slideImages } from '../../imageData';

/**
 * Hero component for larger window dimensions
 */
const DesktopHero = () => (
  <section className={styles.container}>
    <div className={styles.leftHero}>
      <h1 className={utilStyles.heading2Xl}>
        <span className={styles.yellowText}>{"new york city's "}</span>
        <span>{'flagship public school '}</span>
        <span>{'for'}</span> <span className={styles.yellowText}>{'architecture'}</span>
      </h1>

      <p className={utilStyles.headingMd}>
        {
          'Creating a just, sustainable, and imaginative future for a rapidly urbanizing planet through innovative research and interdisciplinary collaboration.'
        }
      </p>
      <YellowButton
        link={welcomeLink}
        text="learn more"
        label="learn more about the bernard and anne spitzer school of architecture"
      />
      <p className={utilStyles.lightText}>{"Want to know what's on at Spitzer?"}</p>
      <nav>
        <ul className={styles.socialMediaList}>
          {socialMedia.map((props, i) => (
            <li key={`yellow-social-media-${props.title}-${i}`}>
              <YellowSocialButton {...props} />
            </li>
          ))}
        </ul>
      </nav>
      <a href={subscribeLink} className={styles.navLink}>
        {'Join our email list!'}
      </a>
    </div>
    <SlideShow slides={slideImages} />
  </section>
);

export default DesktopHero;
