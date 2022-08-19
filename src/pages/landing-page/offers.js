import styles from './offers.module.css';
import utilStyles from '../../styles/utils.module.css';
import useTheme from '../../hooks/useTheme';
import YellowButton from '../../components/buttons/yellow-button/';
import { ourBuildingLink } from '../../data';
import TransparentCard from '../../components/cards/transparent-card/';
import { offersData } from '../../data';
import Img from 'react-cool-img';
import { offersBackgroundSrc } from '../../imageData';
import { useEffect } from 'react';

const Offers = () => {
  const { device, deviceTypes } = useTheme();

  useEffect(() => {
    console.log('rendered offers');
  }, []);

  return (
    <section className={styles.container}>
      <div className={styles.backgroundImage}>
        <Img
          style={{ height: '100%', width: '100%', backgroundSize: 'cover', objectFit: 'cover' }}
          alt="The Bernard and Anne Spitzer School of Architecture background image."
          src={offersBackgroundSrc}
        />
      </div>
      <div className={styles.content}>
        <h2 className={utilStyles.headingLg}>What We Offer</h2>
        <ul className={styles.listWrapper}>
          {offersData.map(({ title, subTitle }, i) => (
            <TransparentCard title={title} subTitle={subTitle} key={`offers${i}`} />
          ))}
        </ul>
        <YellowButton
          link={ourBuildingLink}
          text="learn more"
          label="learn more about the bernard and anne spitzer school of architecture"
        />
      </div>
    </section>
  );
};

export default Offers;
