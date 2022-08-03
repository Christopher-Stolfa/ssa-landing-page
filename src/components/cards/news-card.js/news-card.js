import styles from './news-card.module.css';

const NewsCard = ({ date, title, link, excerpt }) => {
  const dateObj = new Date(date);
  const dateStr = `${dateObj.getMonth()}. ${dateObj.getDate()}. ${dateObj.getFullYear()}`;
  return (
    <li className={styles.container}>
      <a href={link} className={styles.anchor}>
        <div className={styles.flexBox}>
          <span>{dateStr}</span>
          <h3>{title}</h3>
          <p className={styles.excerpt}>{excerpt}</p>
        </div>
      </a>
    </li>
  );
};

export default NewsCard;
