import styles from './hero.module.css';
import useTheme from '../../hooks/useTheme';
import DesktopHero from './desktop-hero';
import MobileHero from './mobile-hero';
import TabletHero from './tablet-hero';
import GET_NEWS from '../../queries/get-news';
import { useQuery } from '@apollo/client';
import { useState, useEffect } from 'react';

/**
 * Hero component
 */
const Hero = () => {
  const {
    device,
    deviceTypes: { desktop, tablet, mobile },
  } = useTheme();

  if (device === desktop) {
    return <DesktopHero />;
  } else if (device === tablet) {
    return <TabletHero />;
  } else if (device === mobile) {
    return <MobileHero />;
  }

  return <div className={styles.placeHolder} />;
};

export default Hero;
