import styles from './landing-page.module.css';
import Header from '../../components/headers/header';
import Hero from '../../components/hero/hero';
import Offers from './offers';
import useTheme from '../../hooks/useTheme';

const LandingPage = () => {
  const {
    device,
    deviceTypes: { desktop },
  } = useTheme();
  return (
    <>
      <Header />
      <main id="main" className={styles.container}>
        {device !== desktop && <div className={styles.pad} />}
        <Hero />
        <Offers />
      </main>
    </>
  );
};

export default LandingPage;
