import styles from './mobile-hero.module.css';
import utilStyles from '../../styles/utils.module.css';
import SlideShow from '../slide-show/slide-show';
import YellowButton from '../buttons/yellow-button/yellow-button';
import { welcomeLink } from '../../data';
import { slideImages } from '../../imageData';

/**
 * Hero component for mobile window dimensions
 */
const MobileHero = () => (
  <section className={styles.container}>
    <div className={styles.padding}>
      <h1 className={utilStyles.headingMdLg}>
        <span className={styles.yellowText}>{"new york city's "}</span>
        <span>{'flagship public school for '}</span>
        <span className={styles.yellowText}>{'architecture'}</span>
      </h1>
    </div>
    <SlideShow slides={slideImages} />
    <div className={styles.padding}>
      <p className={styles.text}>
        {
          'Creating a just, sustainable, and imaginative future for a rapidly urbanizing planet through innovative research and interdisciplinary collaboration.'
        }
      </p>
    </div>
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
