import styles from './news.module.css';
import utilStyles from '../../styles/utils.module.css';
import GET_NEWS from '../../queries/get-news';
import { useQuery } from '@apollo/client';
import formatNewsData from '../../lib/format-news-data';
import NewsCard from '../../components/cards/news-card.js/';
import { useEffect } from 'react';

const News = () => {
  const { data, loading, error } = useQuery(GET_NEWS);

  return (
    <section className={styles.section}>
      <div className={styles.cardsContainer}>
        <h2 className={utilStyles.headingLg} style={{ color: '#000', textShadow: 'none' }}>
          News
        </h2>
        <ul className={styles.cards}>
          {data
            ? formatNewsData(data).map((data) => <NewsCard key={data.title} {...data} />)
            : new Array(3)
                .fill(null)
                .map((u, i) => <NewsCard key={`newsSkeletonCard${i}`} loading={loading} error={error} />)}
        </ul>
        <a href="https://dev-spitzer-arch.pantheonsite.io/blog/category/news/" className={styles.anchor}>
          More News
        </a>
      </div>
    </section>
  );
};

export default News;
