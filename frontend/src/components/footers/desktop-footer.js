import styles from './desktop-footer.module.css';
import Img from 'react-cool-img';
import GraySocialButton from '../buttons/gray-social-button/gray-social-button';
import { ccnyLink, cunyLink, socialMedia, ssaLink } from '../../data';
import { ccnyLogo2Src, ccnyLogoSrc, cunyLogoSrc, ssaSmallLogoSrc } from '../../imageData';
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
        <a href={ssaLink}>
          <Img
            src={ssaSmallLogoSrc}
            alt="The Bernard and Anne Spitzer School of Architecture"
            title="The Bernard and Anne Spitzer School of Architecture"
            style={{
              width: '28rem',
              height: '3.75rem',
              float: 'right',
              marginRight: '1.75rem',
            }}
          />
        </a>
        <a className={styles.cunyLogo} href={cunyLink}>
          <Img
            src={cunyLogoSrc}
            title="City University of New York"
            alt="City University of New York"
            style={{
              width: '1.9rem',
              height: '1.9rem',
            }}
          />
        </a>
        <a className={styles.ssaLogoSmall} href={ccnyLink}>
          <Img
            src={ccnyLogo2Src}
            alt="The City College of New York"
            title="The City College of New York"
            style={{
              height: '1.9rem',
            }}
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
