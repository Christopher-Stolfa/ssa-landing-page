import styles from './arrow.module.css';
import useTheme from '../../hooks/useTheme';
import Img from 'react-cool-img';
/**
 * Arrow buttons for the SlideShow component
 * @param {*} props
 * @param {String} props.direction - Direction of the arrow yo uwant
 * @param {Function} props.handleClick - Callback that triggers when clicked
 */
const Arrow = ({ direction = 'left', handleClick = () => {} }) => {
  const { device } = useTheme();
  return (
    <button
      aria-label={`slide show ${direction} arrow`}
      id={`SlideShow${direction}Arrow`}
      className={styles[direction]}
      onClick={handleClick}
    >
      <Img
        src={direction === 'left' ? '/images/left-arrow.svg' : '/images/right-arrow.svg'}
        alt="SlideShow arrow button"
        style={{ width: device === 'mobile' ? 9 : 18, height: device === 'mobile' ? 15 : 30 }}
      />
    </button>
  );
};

export default Arrow;
