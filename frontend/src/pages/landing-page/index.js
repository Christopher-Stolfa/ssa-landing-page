import Header from '../../components/headers/header';
import Hero from '../../components/hero/hero';
import Offers from './offers';

const LandingPage = () => (
  <>
    <Header />
    <main id="container-container">
      <Hero />
      <Offers />
    </main>
  </>
);

export default LandingPage;
