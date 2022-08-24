import styles from './landing-page.module.css';
import { lazy, Suspense, useEffect } from 'react';
import SkipLinks from '../../components/skip-links';

const Header = lazy(() => import('../../components/headers/'));
const Hero = lazy(() => import('../../components/hero/'));
const Offers = lazy(() => import('./offers'));
const News = lazy(() => import('./news'));
const Calendar = lazy(() => import('./calendar'));
const VideoContainer = lazy(() => import('../../components/video-container'));
const Footer = lazy(() => import('../../components/footers/'));

const LandingPage = () => (
  <>
    <SkipLinks />
    <Header />
    <main id="main-content" className={styles.container}>
      <div className={styles.pad} />
      <Hero />
      <Offers />
      <div className={styles.flexBackground}>
        <div className={styles.flexContainer}>
          <News />
          <Calendar />
        </div>
      </div>

      <VideoContainer />
    </main>
    <Footer />
  </>
);
export default LandingPage;
