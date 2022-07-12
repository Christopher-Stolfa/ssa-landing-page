import useTheme from '../../hooks/useTheme';
import MobileHeader from './mobile-header';
import DesktopHeader from './desktop-header';
import { useQuery } from '@apollo/client';
import { useEffect } from 'react';
import GET_MENU from './query';

/**
 * Returns the Header based on window dimensions
 */
const Header = () => {
  const { device, deviceTypes } = useTheme();
  const { loading, error, data } = useQuery(GET_MENU);

  if (loading || error) return <header id="header" />;
  if (error) {
    console.log(error);
  }
  if (data) {
    console.log(data);
  }
  return <header id="header">{device === deviceTypes.desktop ? <DesktopHeader /> : <MobileHeader />}</header>;
};

export default Header;
