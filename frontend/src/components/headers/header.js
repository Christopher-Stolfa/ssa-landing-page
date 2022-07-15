import useTheme from '../../hooks/useTheme';
import MobileHeader from './mobile-header';
import DesktopHeader from './desktop-header';
/**
 * Returns the Header based on window dimensions
 */
const Header = () => {
  const { device, deviceTypes } = useTheme();

  // If app is loading or there graphql error use static menu options as a fallback.
  return <header id="header">{device === deviceTypes.desktop ? <DesktopHeader /> : <MobileHeader />}</header>;
};

export default Header;
