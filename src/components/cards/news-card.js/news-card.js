import styles from './news-card.module.css';

/**
 * Calendar Card component used by the Calendar component
 * @param {*} props
 * @param {Date} date - Date the article was published
 * @param {String} title - Title of the news article
 * @param {String} link - Link to the news article page
 * @param {String} excerpt - Brief excerpt of the article contents
 */
const NewsCard = ({ date, title, link, excerpt }) => {
  const dateObj = new Date(date);
  const dateStr = `${dateObj.getMonth()}. ${dateObj.getDate()}. ${dateObj.getFullYear()}`;
  return (
    <li className={styles.container}>
      <a href={link} className={styles.anchor}>
        <article className={styles.flexBox}>
          <span className={styles.date}>{dateStr}</span>
          <h3 className={styles.title}>{title}</h3>
          <span className={styles.excerptWrapper}>
            <p className={styles.excerpt}>{excerpt}</p>
          </span>
        </article>
      </a>
    </li>
  );
};

export default NewsCard;
