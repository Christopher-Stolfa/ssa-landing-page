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
  const {
    device,
    deviceTypes: { mobile, tablet, desktop },
  } = useTheme();

  const getStyle = () => {
    let remSize = '1rem';
    switch (device) {
      case mobile:
        remSize = '2rem';
        break;
      case tablet:
        remSize = '2.25rem';
        break;
      case desktop:
        remSize = '2.5rem';
        break;
      default:
        remSize = '1rem';
        break;
    }
    return {
      height: remSize,
      width: remSize,
    };
  };

  return (
    <button
      aria-label={`slide show ${direction} arrow`}
      id={`SlideShow${direction}Arrow`}
      className={styles[direction]}
      onClick={handleClick}
    >
      <IconContext.Provider
        value={{
          style: getStyle(),
        }}
      >
        {direction === 'left' ? <MdKeyboardArrowLeft /> : <MdKeyboardArrowRight />}
      </IconContext.Provider>
    </button>
  );
};

export default Arrow;
