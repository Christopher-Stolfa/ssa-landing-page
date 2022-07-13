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

  // If app is loading or there graphql error use static menu options as a fallback.
  if (loading || error) {
    error && console.log('There has been a graphQL error with the menu.');

    return (
      <header id="header">
        {device === deviceTypes.desktop ? (
          <DesktopHeader menuOptions={menuOptions} />
        ) : (
          <MobileHeader menuOptions={menuOptions} />
        )}
      </header>
    );
  }
  // If the data has been received
  if (data) {
    const gqlMenuOptions = parser(data);
    return (
      <header id="header">
        {device === deviceTypes.desktop ? (
          <DesktopHeader menuOptions={gqlMenuOptions} />
        ) : (
          <MobileHeader menuOptions={gqlMenuOptions} />
        )}
      </header>
    );
  }
  return <header id="header" />;
};

export default Header;
