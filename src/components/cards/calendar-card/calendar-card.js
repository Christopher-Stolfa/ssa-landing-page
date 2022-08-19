import styles from './calendar-card.module.css';
import utilStyles from '../../../styles/utils.module.css';

/**
 * Calendar Card component used by the Calendar component
 * @param {*} props
 * @param {String} title - Title of the event
 * @param {String} link - Link to the event page
 * @param {String} eventDuration - The event date or duration between two dates.
 */
const CalendarCard = ({ title = '', link = '', eventDuration = '' }) => (
  <li className={styles.container}>
    <span className={utilStyles.articleDate}>{eventDuration}</span>
    <a className={styles.anchor} href={link}>
      <h3>{title}</h3>
    </a>
  </li>
);

export default CalendarCard;
