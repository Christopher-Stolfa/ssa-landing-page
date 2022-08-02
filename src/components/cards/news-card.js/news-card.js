import styles from './news-card.module.css';

const NewsCard = ({ date, title, link, excerpt }) => {
  const dateObj = new Date(date);
  const dateStr = `${dateObj.getMonth()}. ${dateObj.getDate()}. ${dateObj.getFullYear()}`;
  return (
    <li className={styles.container}>
      <a href={link} className={styles.anchor}>
        <div className={styles.flexBox}>
          <span>{dateStr}</span>
          <h4>{title}</h4>
          <p className={styles.excerpt}>{excerpt}</p>
        </div>
      </a>
    </li>
  );
};

export default NewsCard;
