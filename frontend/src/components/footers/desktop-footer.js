import styles from './desktop-footer.module.css';
import Img from 'react-cool-img';
import GraySocialButton from '../buttons/gray-social-button/gray-social-button';
import { socialMedia } from '../../../data/navigation-data';
import { socialMedia } from '../../data';
/**
 * The website footer component for desktop screen sizes
 */
const DesktopFooter = () => (
  <footer className={styles.container} role="contentinfo">
    <div className={styles.footerWrapper}>
      <p className={styles.copywrite}>
        © {new Date().getFullYear()} The Bernard and Anne Spitzer School of Architecture. All rights reserved.
      </p>
      <div className={styles.logosWrapper}>
        <a href="https://ssa.ccny.cuny.edu/">
          <Img
            className={styles.ssaLogoMedium}
            src="/images/ssa_small.svg"
            alt="The Bernard and Anne Spitzer School of Architecture"
            title="The Bernard and Anne Spitzer School of Architecture"
            width={447}
            height={60}
          />
        </a>
        <a className={styles.cunyLogo} href="https://www.cuny.edu/">
          <Img
            src="/images/cuny.svg"
            title="City University of New York"
            alt="City University of New York"
            width={31}
            height={30}
          />
        </a>
        <a className={styles.ssaLogoSmall} href="https://www.ccny.cuny.edu/">
          <Image
            src="/images/ccny.svg"
            alt="The City College of New York"
            title="The City College of New York"
            width={97}
            height={30}
          />
        </a>
      </div>
      <div className={styles.socialMedia}>
        <ul className={styles.socialMediaWrapper}>
          {socialMedia.map((props, i) => (
            <li key={`footer-social-media-${props.title}-${i}`}>
              <GraySocialButton {...props} />
            </li>
          ))}
        </ul>
        <div id="google_translate_element"></div>
      </div>
    </div>
  </footer>
);

export default DesktopFooter;
