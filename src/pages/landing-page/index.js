import styles from './landing-page.module.css';
import Header from '../../components/headers/header';
import Hero from '../../components/hero/hero';
import Offers from './offers';
import useTheme from '../../hooks/useTheme';
import VideoContainer from '../../components/video-container/video-container';
import { digitalTourVideo } from '../../data';
import Footer from '../../components/footers/footer';
import SkipLinks from '../../components/skip-links/skip-links';
import News from './news';

const LandingPage = () => {
  const {
    device,
    deviceTypes: { desktop },
  } = useTheme();

  return (
    <>
      <SkipLinks />
      <Header />
      <main id="main-content" className={styles.container}>
        {device !== desktop && <div style={{ height: '3.5rem' }} />}
        <Hero />
        <Offers />
        <News />
        <VideoContainer url={digitalTourVideo} />
      </main>
      <Footer />
    </>
  );
};

export default LandingPage;
