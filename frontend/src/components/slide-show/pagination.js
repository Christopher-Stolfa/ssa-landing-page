import styles from './pagination.module.css';
import { BsCircle, BsCircleFill } from 'react-icons/bs';
/**
 * Pagination for the SlideShow
 * @param {*} props
 * @param {Number} props.current - Current index of the SlideShow
 * @param {Array} props.slides - Array of slides
 * @param {Function} props.selectSlide - Callback if pagination circle is clicked
 * @returns
 */
const Pagination = ({ current = 0, slides = [], selectSlide = () => {} }) => (
  <ul id="paginationCircleList" aria-label="slide show pagination" className={styles.container}>
    {slides.map(({}, i) => (
      <li key={`paginationCircle${i}`}>
        <button
          id={`paginationCircle${i}`}
          aria-label={`Pagination circle ${i}`}
          onClick={current === i ? null : () => selectSlide(i)}
          className={current === i ? styles.closedCircle : styles.openCircle}
        >
          <span>{current === i ? <BsCircleFill /> : <BsCircle />}</span>
        </button>
      </li>
    ))}
  </ul>
);
export default Pagination;
