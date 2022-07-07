import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';

/**
 * Handles theme functionality and passes state of the Provider to the Consumer
 */
const useTheme = () => {
  const [state] = useContext(ThemeContext);

  const deviceTypes = {
    mobile: 'mobile',
    tablet: 'tablet',
    desktop: 'desktop',
  };

  return { ...state, deviceTypes };
};

export default useTheme;
