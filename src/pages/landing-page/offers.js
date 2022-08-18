import styles from './offers.module.css';
import utilStyles from '../../styles/utils.module.css';
import useTheme from '../../hooks/useTheme';
import YellowButton from '../../components/buttons/yellow-button/';
import { welcomeLink } from '../../data';
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
          {offersData.map(({ row1, row2 }, i) => (
            <li className={styles.row} key={`offers-row-${i}`}>
              <TransparentCard title={row1.title} subTitle={row1.subTitle} />
              {device !== deviceTypes.mobile && <TransparentCard title={row2.title} subTitle={row2.subTitle} />}
            </li>
          ))}
        </ul>
        <YellowButton
          link={welcomeLink}
          text="learn more"
          label="learn more about the bernard and anne spitzer school of architecture"
        />
      </div>
    </section>
  );
};

export default Offers;
