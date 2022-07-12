import styles from './tablet-hero.module.css';
import utilStyles from '../../styles/utils.module.css';
import SlideShow from '../slide-show/slide-show';
import YellowButton from '../buttons/yellow-button/yellow-button';
import { welcomeLink } from '../../data';
import { slideImages } from '../../imageData';

/**
 * Hero component optimized for tablet window dimensions
 */
const TabletHero = () => (
  <section className={styles.container}>
    <div style={{ height: '3.5rem' }} />
    <div className={styles.headingWrap}>
      <h1 className={utilStyles.headingXl}>
        <span className={styles.yellowText}>{"new york city's "}</span>
        <span>{'flagship public school for '}</span>
        <span className={styles.yellowText}>{'architecture'}</span>
      </h1>
    </div>
    <SlideShow slides={slideImages} />
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

export default TabletHero;
