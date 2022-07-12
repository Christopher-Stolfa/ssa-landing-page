import styles from './landing-page.module.css';
import Header from '../../components/headers/header';
import Hero from '../../components/hero/hero';
import Offers from './offers';
import useTheme from '../../hooks/useTheme';
import VideoContainer from '../../components/video-container/video-container';
import { digitalTourVideo } from '../../data';

const LandingPage = () => {
  const {
    device,
    deviceTypes: { desktop },
  } = useTheme();
  return (
    <>
      <Header />
      <main id="main" className={styles.container}>
        <Hero />
        <Offers />
        <VideoContainer url={digitalTourVideo} />
      </main>
    </>
  );
};

export default LandingPage;
