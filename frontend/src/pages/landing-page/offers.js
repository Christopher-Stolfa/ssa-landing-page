import styles from './offers.module.css';
import utilStyles from '../../../styles/utils.module.css';
import useTheme from '../../../hooks/useTheme';
import YellowButton from '../../buttons/yellow-button/yellow-button';
import { welcomeLink } from '../../../data/navigation-data';
import TransparentCard from '../../cards/transparent-card/transparent-card';
import columnsData from './columns-data';
import Img from 'react-cool-img';

const Offers = () => {
  const { device, deviceTypes } = useTheme();
  return (
    <section>
      <div className={styles.container}>
        <div className={styles.backgroundImage}>
          <Img
            className={styles.img}
            alt="The Bernard and Anne Spitzer School of Architecture"
            src="/wp-content/themes/ssa/landing-page-assets/images/fav-bySirinSamman-1448-X3.jpg"
          />
        </div>
        <div className={styles[device]}>
          <h2 className={utilStyles.heading2Xl}>What We Offer</h2>
          <ul className={styles.listWrapper}>
            {columnsData.map(({ row1, row2 }, i) => (
              <li className={styles.row} key={`offers-row-${i}`}>
                <TransparentCard title={row1.title} subTitle={row1.subTitle} />
                {device !== deviceTypes.mobile && <TransparentCard title={row2.title} subTitle={row2.subTitle} />}
              </li>
            ))}
          </ul>
          <div className={styles.buttonWrap}>
            <YellowButton
              link={welcomeLink}
              text="learn more"
              label="learn more about the bernard and anne spitzer school of architecture"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Offers;
