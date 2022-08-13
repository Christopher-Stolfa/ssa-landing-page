import styles from './calendar-card.module.css';

const CalendarCard = ({ title, link, eventDuration }) => (
  <li className={styles.container}>
    <span className={styles.eventDate}>{eventDuration}</span>
    <a className={styles.anchor} href={link}>
      <h3>{title}</h3>
    </a>
  </li>
);

export default CalendarCard;
