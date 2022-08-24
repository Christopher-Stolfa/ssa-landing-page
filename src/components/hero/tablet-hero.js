import styles from './tablet-hero.module.css';
import utilStyles from '../../styles/utils.module.css';
import SlideShow from '../slide-show/';
import YellowButton from '../buttons/yellow-button/';
import { baPortfolio, welcomeLink } from '../../data';

/**
 * Hero component for tablet window dimensions
 */
const TabletHero = () => (
  <section className={styles.container}>
    <div className={styles.flexMargin}>
      <h1 className={utilStyles.headingXl}>
        <span className={styles.yellowText}>{"new york city's "}</span>
        <span>{'flagship public school for '}</span>
        <span className={styles.yellowText}>{'architecture'}</span>
      </h1>
    </div>
    <SlideShow />
    <div className={styles.flexMargin}>
      <p className={styles.text}>
        {
          'Creating a just, sustainable, and imaginative future for a rapidly urbanizing planet through innovative research and interdisciplinary collaboration.'
        }
      </p>
      <div className={styles.flexButtonsRow}>
        <YellowButton
          link={welcomeLink}
          text="learn more"
          label="learn more about the bernard and anne spitzer school of architecture"
        />
        <YellowButton link={baPortfolio} text="view student work" label="view undergraduate student projects" invert />
      </div>
    </div>
  </section>
);

export default TabletHero;
