import styles from './news-card.module.css';

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
