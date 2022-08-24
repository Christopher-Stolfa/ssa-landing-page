import styles from './news-card.module.css';
import utilStyles from '../../../styles/utils.module.css';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

/**
 * Calendar Card component used by the Calendar component
 * @param {*} props
 * @param {Date} date - Date the article was published
 * @param {String} title - Title of the news article
 * @param {String} link - Link to the news article page
 * @param {String} excerpt - Brief excerpt of the article contents
 * @param {Boolean} loading - If data is loading, render a skeleton in place of a news card
 */
const NewsCard = ({ date = '', title = '', link = '', excerpt = '', loading = false, error = null }) => (
  <li className={styles.container}>
    <a href={link} className={styles.anchor}>
      <article className={styles.flexBox}>
        <span className={utilStyles.articleDate}>{loading || error ? <Skeleton /> : date}</span>
        <h3 className={styles.title}>{loading || error ? <Skeleton /> : title}</h3>
        <span className={styles.excerptWrapper}>
          <p className={styles.excerpt}>{loading || error ? <Skeleton count={4} /> : excerpt}</p>
        </span>
      </article>
    </a>
  </li>
);

export default NewsCard;
