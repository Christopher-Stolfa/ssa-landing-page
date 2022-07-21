import { useState, useEffect, createContext, useCallback } from 'react';
import debounce from '../lib/debounce';

const ThemeContext = createContext([{}, () => {}]);

/**
 * The theme Provider for maintaining theme state
 */
const ThemeProvider = ({ children }) => {
  const [state, setState] = useState({
    dimensions: { height: undefined, width: undefined },
    device: undefined,
  });

  const handleDimensions = useCallback(() => {
    {
      let device = '';

      const dimensions = {
        width: window.innerWidth,
        height: window.innerHeight,
      };

      const breakPoints = {
        mobile: {
          width: 414,
          height: 896,
        },
        tablet: {
          width: 601,
          height: 962,
        },
        desktop: {
          width: 1024,
          height: 768,
        },
      };

      if (dimensions.width <= breakPoints.tablet.width) {
        device = 'mobile';
      } else if (dimensions.width <= breakPoints.desktop.width) {
        device = 'tablet';
      } else {
        device = 'desktop';
      }

      setState((state) => {
        return { ...state, dimensions, device };
      });
    }
  }, [state, setState]);

  useEffect(() => {
    // Debouncer to handle web page resizing without re-rendering too quickly
    handleDimensions();
    const debouncedHandleResize = debounce(() => {
      handleDimensions();
    }, 100);
    window.addEventListener('resize', debouncedHandleResize);
    return () => {
      window.removeEventListener('resize', debouncedHandleResize);
    };
  }, []);

  /**
   * When the device dimensions are recognized, render the children (the root app)
   */
  return <ThemeContext.Provider value={[state, setState]}>{state.device && children}</ThemeContext.Provider>;
};

export { ThemeContext, ThemeProvider };
