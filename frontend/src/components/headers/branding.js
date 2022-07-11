import Img from 'react-cool-img';
import styles from './branding.module.css';
import { homeLink } from '../../data';
import { ssaLogoSrc } from '../../imageData';

/**
 * Branding that contains the large site logo
 */
const Branding = () => (
  <section id="branding" className={styles.branding}>
    <div id="siteTitle">
      <a href={homeLink} className={styles.a}>
        <Img
          src={ssaLogoSrc}
          alt="The Bernard and Anne Spitzer School of Architecture logo."
          style={{ width: '479px', height: '65px' }}
        />
      </a>
    </div>
  </section>
);

export default Branding;
