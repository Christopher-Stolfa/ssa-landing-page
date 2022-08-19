import styles from './transparent-card.module.css';

/**
 * Gray card with title and subtitle
 * @param {String} props.title
 * @param {String} props.subTitle
 * @returns
 */
const TransparentCard = ({ title = '', subTitle = '' }) => (
  <li className={styles.container}>
    <h3 className={styles.title}>{title}</h3>
    <p className={styles.subTitle}>{subTitle}</p>
  </li>
);
export default TransparentCard;
