import { useState, useEffect, createContext } from 'react';
import { useQuery } from '@apollo/client';
import GET_MENU from '../queries/query';
import formatMenuData from './format-menu-data';
import { menuOptions } from '../data';
import debounce from '../lib/debounce';

const ThemeContext = createContext([{}, () => {}]);

/**
 * The theme Provider for maintaining theme state
 */
const ThemeProvider = ({ children }) => {
  const [state, setState] = useState({
    dimensions: { height: undefined, width: undefined },
    device: undefined,
    menuOptions: menuOptions,
  });

  const { loading, error, data } = useQuery(GET_MENU);

  useEffect(() => {
    if (loading) {
      console.log('loading');
    }
    if (error) {
      console.log(error);
    }
    if (data) {
      console.log('Retrieved menu data');
      const formattedData = formatMenuData(data);
      setState((state) => ({ ...state, menuOptions: formattedData }));
    }
  }, [loading, error, data]);

  useEffect(() => {
    const handleDimensions = () => {
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

      setState((state) => ({ ...state, dimensions, device }));
    };
    handleDimensions();
    // Debouncer to handle web page resizing without re-rendering too quickly
    const debouncedHandleResize = debounce(() => {
      handleDimensions();
    }, 25);
    window.addEventListener('resize', debouncedHandleResize);
    return () => {
      window.removeEventListener('resize', debouncedHandleResize);
    };
  }, []);

  return <ThemeContext.Provider value={[state, setState]}>{children}</ThemeContext.Provider>;
};

export { ThemeContext, ThemeProvider };
