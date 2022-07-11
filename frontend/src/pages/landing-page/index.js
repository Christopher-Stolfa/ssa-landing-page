import styles from './landing-page.module.css';
import Header from '../../components/headers/header';
import Hero from '../../components/hero/hero';
import Offers from './offers';

const LandingPage = () => (
  <>
    <Header />
    <main id="main" className={styles.container}>
      <Hero />
      <Offers />
    </main>
  </>
);

export default LandingPage;
