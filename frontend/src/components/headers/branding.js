import Img from 'react-cool-img';
import styles from './branding.module.css';

/**
 * Branding that contains the large site logo
 */
const Branding = () => (
  <section id="branding" className={styles.branding}>
    <div id="siteTitle">
      <a href="https://ssa.ccny.cuny.edu/" className={styles.a}>
        <Img
          src="/wp-content/themes/ssa/images/spitzer_logo.svg"
          alt="The Bernard and Anne Spitzer School of Architecture logo."
          className={styles.img}
        />
      </a>
    </div>
  </section>
);

export default Branding;
