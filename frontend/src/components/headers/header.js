import useTheme from '../../hooks/useTheme';
import MobileHeader from './mobile-header';
import DesktopHeader from './desktop-header';
import { useQuery } from '@apollo/client';
import { menuOptions } from '../../data';

import parser from './parser';
import GET_MENU from './query';

/**
 * Returns the Header based on window dimensions
 */
const Header = () => {
  const { device, deviceTypes } = useTheme();
  const { loading, error, data } = useQuery(GET_MENU);

  if (loading) {
    console.log('loading');
  }
  if (error) {
    console.log(error);
  }
  if (data) {
    console.log('Retrieved Data');
    console.log(data);
  }

  // If app is loading or there graphql error use static menu options as a fallback.
  return (
    <header id="header">
      {device === deviceTypes.desktop ? (
        <DesktopHeader menuOptions={data ? parser(data) : menuOptions} />
      ) : (
        <MobileHeader menuOptions={data ? parser(data) : menuOptions} />
      )}
    </header>
  );
};

export default Header;
