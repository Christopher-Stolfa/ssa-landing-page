import styles from './arrow.module.css';
import useTheme from '../../hooks/useTheme';
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md';
import { IconContext } from 'react-icons';

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
      <IconContext.Provider value={{ style: { height: '2rem', width: '2rem' } }}>
        {direction === 'left' ? <MdKeyboardArrowLeft /> : <MdKeyboardArrowRight />}
      </IconContext.Provider>
    </button>
  );
};

export default Arrow;
