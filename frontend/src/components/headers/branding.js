import Image from 'next/image';
import styles from './branding.module.css';

/**
 * Branding that contains the large site logo
 */
const Branding = () => (
  <section id="branding" className={styles.branding}>
    <div id="siteTitle">
      <a href="https://ssa.ccny.cuny.edu/" className={styles.a}>
        <Image
          src="/images/spitzer_logo.svg"
          alt="The Bernard and Anne Spitzer School of Architecture"
          height={65}
          width={479}
        />
      </a>
    </div>
  </section>
);

export default Branding;
