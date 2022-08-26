import React, { useEffect } from 'react';
import AboutSector from 'sectors/home/AboutSector';
import RoadmapSector from 'sectors/home/RoadmapSector';
import WhitepaperSector from 'sectors/home/WhitepaperSector';
import WelcomeSector from 'sectors/home/WelcomeSector';
import TeamSector from 'sectors/home/TeamSector';
import FaqSector from 'sectors/home/FaqSector';
import TokenomicsSector from 'sectors/home/TokenomicsSector';
import MultiChainSector from 'sectors/home/MultiChainSector';
import { useLocation } from 'react-router-dom';

import styles from './index.module.scss';

const HomePage = () => {
  const { pathname, hash, key } = useLocation();

  useEffect(() => {
    if (hash === '') {
      window.scrollTo(0, 0);
    } else {
      setTimeout(() => {
        const id = hash.replace('#', '');
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView();
        }
      }, 0);
    }
  }, [pathname, hash, key]);

  return (
    <div className={styles.home}>
      <div className={styles.inner}>
        <WelcomeSector />
        <AboutSector />
        <TokenomicsSector />
        <WhitepaperSector />
        <MultiChainSector />
        <RoadmapSector />
        <FaqSector />
        <TeamSector />
      </div>
    </div>
  );
};

export default HomePage;
