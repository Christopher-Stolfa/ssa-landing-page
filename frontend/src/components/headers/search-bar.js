import styles from './search-bar.module.css';
import { useState } from 'react';
import Img from 'react-cool-img';
import { searchIconSrc } from '../../imageData';

/**
 * Search bar that queries your search term to the ssa search results page
 */
const SearchBar = () => {
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
    window.open(`https://ssa.ccny.cuny.edu/search-results/?q=${input}`);
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
        <Img src={searchIconSrc} width={'13px'} height={'13px'} alt="Search Icon" />
      </button>
    </form>
  );
};

export default SearchBar;
