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
        'Creating a just, sustainable, and imaginative future for a rapidly urbanizing planet through innovative research and interdisciplinary collaboration.'
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
