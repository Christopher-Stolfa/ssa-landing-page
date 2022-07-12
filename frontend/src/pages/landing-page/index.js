import styles from './landing-page.module.css';
import Header from '../../components/headers/header';
import Hero from '../../components/hero/hero';
import Offers from './offers';
import useTheme from '../../hooks/useTheme';
import VideoContainer from '../../components/video-container/video-container';

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
        <VideoContainer />
      </main>
    </>
  );
};

export default LandingPage;
