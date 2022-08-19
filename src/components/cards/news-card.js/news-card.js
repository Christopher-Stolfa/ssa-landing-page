import styles from './news-card.module.css';
import utilStyles from '../../../styles/utils.module.css';

/**
 * Calendar Card component used by the Calendar component
 * @param {*} props
 * @param {Date} date - Date the article was published
 * @param {String} title - Title of the news article
 * @param {String} link - Link to the news article page
 * @param {String} excerpt - Brief excerpt of the article contents
 */
const NewsCard = ({ date, title, link, excerpt }) => (
  <li className={styles.container}>
    <a href={link} className={styles.anchor}>
      <article className={styles.flexBox}>
        <span className={utilStyles.articleDate}>{date}</span>
        <h3 className={styles.title}>{title}</h3>
        <span className={styles.excerptWrapper}>
          <p className={styles.excerpt}>{excerpt}</p>
        </span>
      </article>
    </a>
  </li>
);

export default NewsCard;
