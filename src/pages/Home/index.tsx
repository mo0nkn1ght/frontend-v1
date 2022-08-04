import React from 'react';
import AboutSector from 'sectors/home/AboutSector';
import RoadmapSector from 'sectors/home/RoadmapSector';
import WhitepaperSector from 'sectors/home/WhitepaperSector';
import WelcomeSector from 'sectors/home/WelcomeSector';
import TeamSector from 'sectors/home/TeamSector';
import BurnBotSector from 'sectors/home/BurnBotSector';
import FaqSector from 'sectors/home/FaqSector';

import styles from './index.module.scss';

const HomePage = () => {
  return (
    <div className={styles.home}>
      <div className={styles.inner}>
        <WelcomeSector />
        <AboutSector />
        <BurnBotSector />
        <WhitepaperSector />
        <RoadmapSector />
        <FaqSector />
        <TeamSector />
      </div>
    </div>
  );
};

export default HomePage;
