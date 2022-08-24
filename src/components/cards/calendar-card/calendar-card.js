import styles from './calendar-card.module.css';
import utilStyles from '../../../styles/utils.module.css';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

/**
 * Calendar Card component used by the Calendar component
 * @param {*} props
 * @param {String} title - Title of the event
 * @param {String} link - Link to the event page
 * @param {String} eventDuration - The event date or duration between two dates.
 */
const CalendarCard = ({ title = '', link = '', date = '', loading = false, error = null }) => (
  <li className={styles.container}>
    <span className={utilStyles.articleDate}>{loading || error ? <Skeleton /> : date}</span>
    <a className={styles.anchor} href={link}>
      <h3>{loading || error ? <Skeleton /> : title}</h3>
    </a>
  </li>
);

export default CalendarCard;
