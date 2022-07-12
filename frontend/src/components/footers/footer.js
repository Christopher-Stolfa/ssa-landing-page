import useTheme from '../../hooks/useTheme';
import DesktopFooter from './desktop-footer';
import MobileFooter from './mobile-footer';
import TabletFooter from './tablet-footer';

/**
 * Main footer component - Renders the footer component according to window size
 */
const Footer = () => {
  const { device, deviceTypes } = useTheme();

  if (device === deviceTypes.mobile) {
    return <MobileFooter />;
  } else if (device === deviceTypes.tablet) {
    return <TabletFooter />;
  }
  // Default device type is desktop - This is subject to change
  return <DesktopFooter />;
};

export default Footer;
