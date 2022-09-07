import styles from './calendar.module.css';
import utilStyles from './../../styles/utils.module.css';
import { useQuery } from '@apollo/client';
import formatEventsData from '../../lib/format-events-data';
import GET_EVENTS from '../../queries/get-events';
import CalendarCard from '../../components/cards/calendar-card';
import { calendarLink, eventsLink } from '../../data';

/**
 * Shows a box with a list of upcoming events
 */
const Calendar = () => {
  const { loading, error, data } = useQuery(GET_EVENTS);

  return (
    <section>
      <div className={styles.calendarContainer}>
        <h2 className={utilStyles.headingLg} style={{ color: '#000', textShadow: 'none' }}>
          Events
        </h2>
        <div className={styles.eventsContainer}>
          <ul className={styles.calendarCards}>
            {data
              ? formatEventsData(data).map((data, i) => <CalendarCard {...data} key={`calendarItem${i}`} />)
              : new Array(5)
                  .fill(null)
                  .map((u, i) => <CalendarCard key={`newsSkeletonCard${i}`} loading={loading} error={error} />)}
          </ul>
          <a className={styles.link} href={eventsLink}>
            VIEW FULL CALENDAR
          </a>
        </div>
        <a className={styles.link} href={calendarLink}>
          Academic Calendar
        </a>
      </div>
    </section>
  );
};

export default Calendar;
