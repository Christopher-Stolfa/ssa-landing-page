import styles from './search-bar.module.css';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

import Image from 'next/image';

/**
 * Search bar that queries your search term to the ssa search results page
 */
const SearchBar = () => {
  const router = useRouter();
  const [input, setInput] = useState('');
  /**
   * Handles search input
   * @param {e} param0
   */
  const handleInput = ({ target: { value } }) => {
    setInput(value);
  };

  /**
   * Submits search input using ssa search box query
   */
  const handleSubmit = (e) => {
    e.preventDefault();
    router.push(`https://ssa.ccny.cuny.edu/search-results/?q=${input}`);
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <input
        className={styles.input}
        aria-label="search bar"
        type="text"
        name="Search"
        placeholder="Search..."
        onChange={handleInput}
        value={input}
      />
      <button type="submit" aria-label="submit" className={styles.searchButton}>
        <Image src="/images/search-icon.svg" width={13} height={13} alt="Search Icon" />
      </button>
    </form>
  );
};

export default SearchBar;
