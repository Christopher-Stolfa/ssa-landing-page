import styles from './news.module.css';
import utilStyles from '../../styles/utils.module.css';
import { useState, useEffect } from 'react';
import GET_NEWS from '../../queries/get-news';
import { useQuery } from '@apollo/client';
import formatNewsData from '../../lib/format-news-data';
import NewsCard from '../../components/cards/news-card.js/';
import YellowButton from '../../components/buttons/yellow-button';

const News = () => {
  const { loading, error, data } = useQuery(GET_NEWS);

  if (loading) {
    console.log('loading');
  }
  if (error) {
    console.log(error);
  }
  if (data) {
    console.log('Retrieved news data');
    const newsData = formatNewsData(data);
    return (
      <section className={styles.section}>
        <div className={styles.cardsContainer}>
          <h2 className={utilStyles.headingLg} style={{ color: '#000', textShadow: 'none' }}>
            News
          </h2>
          <ul className={styles.cards}>
            {newsData.map((data) => (
              <NewsCard key={data.title} {...data} />
            ))}
          </ul>
          <a href="https://dev-spitzer-arch.pantheonsite.io/blog/category/news/" className={styles.anchor}>
            More News
          </a>
        </div>
      </section>
    );
  }

  return <section className={styles.container}></section>;
};

export default News;
