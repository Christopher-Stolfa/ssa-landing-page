import styles from './news-card.module.css';

const NewsCard = ({ date, title, link, excerpt }) => {
  const dateObj = new Date(date);
  const dateStr = `${dateObj.getMonth()}. ${dateObj.getDate()}. ${dateObj.getFullYear()}`;
  return (
    <li className={styles.container}>
      <a href={link} className={styles.anchor}>
        <span>{dateStr}</span>
        <h4>{title}</h4>
        <p className={styles.excerpt}>{excerpt}</p>
      </a>
    </li>
  );
};

export default NewsCard;
