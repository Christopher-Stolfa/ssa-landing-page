import styles from './mobile-hero.module.css';
import utilStyles from '../../styles/utils.module.css';
import SlideShow from '../slide-show/slide-show';
import YellowButton from '../buttons/yellow-button/yellow-button';
import { welcomeLink, imageData } from './data';

/**
 * Hero component optimized for mobile window dimensions
 */
const MobileHero = () => (
  <section className={styles.container}>
    <div className={styles.headingWrap}>
      <h1 className={utilStyles.headingLg}>
        <span className={styles.yellowText}>{"new york city's "}</span>
        <span>{'flagship public school for '}</span>
        <span className={styles.yellowText}>{'architecture'}</span>
      </h1>
    </div>
    <SlideShow slides={imageData} />
    <p className={styles.subHeading}>
      {
        'Students engage with faculty, alumni, and the profession at large as we begin to reevaluate and reinvent the built environment for the next generation.'
      }
    </p>
    <span className={styles.buttonWrap}>
      <YellowButton
        link={welcomeLink}
        text="learn more"
        label="learn more about the bernard and anne spitzer school of architecture"
      />
    </span>
  </section>
);

export default MobileHero;
