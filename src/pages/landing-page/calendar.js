import styles from './calendar.module.css';
import utilStyles from './../../styles/utils.module.css';
import { useQuery } from '@apollo/client';
import formatEventsData from '../../lib/format-events-data';
import GET_EVENTS from '../../queries/get-events';
import CalendarCard from '../../components/cards/calendar-card';
import { calendarLink, eventsLink } from '../../data';

const Events = () => {
  const { loading, error, data } = useQuery(GET_EVENTS);

  if (loading) {
    console.log('loading');
  }
  if (error) {
    console.log(error);
  }
  if (data) {
    const events = formatEventsData(data);
    return (
      <section>
        <div className={styles.calendarContainer}>
          <h2 className={utilStyles.headingLg} style={{ color: '#000', textShadow: 'none' }}>
            Events
          </h2>
          <div className={styles.eventsContainer}>
            <h3 style={{ borderBottom: '1px solid #ccc' }} className={utilStyles.headingSm}>
              Calendar
            </h3>
            <ul className={styles.calendarCards}>
              {events.map((data, i) => (
                <CalendarCard {...data} key={'calendarItem' + i} />
              ))}
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
  }

  return <div> </div>;
};

export default Events;
