import { lazy } from 'react';
import BurnBotSector from 'sectors/home/BurnBotSector';
import BuySector from 'sectors/home/BuySector';
import AboutSector from 'sectors/home/AboutSector';
import RoadmapSector from 'sectors/home/RoadmapSector';
import WhitepaperSector from 'sectors/home/WhitepaperSector';
import TeamSector from 'sectors/home/TeamSector';
import FaqSector from 'sectors/home/FaqSector';
import TokenomicsSector from 'sectors/home/TokenomicsSector';
import JupiterSector from 'sectors/home/JupiterSector';

import { RouteType } from './types';

const APP_ROUTES: RouteType[] = [
  {
    path: '/',
    component: lazy(() => import('pages/Home')),
    title: 'Home',
    isNavLinked: false,
    subMenu: [],
  },
  {
    path: '#',
    component: AboutSector,
    title: 'About',
    isNavLinked: true,
    subMenu: [
      {
        path: '/#about',
        component: AboutSector,
        title: 'About',
        isNavLinked: true,
      },
      {
        path: '/#tokenomics',
        component: TokenomicsSector,
        title: 'Tokenomics',
        isNavLinked: true,
      },
      {
        path: '/#whitepaper',
        component: WhitepaperSector,
        title: 'Whitepaper',
        isNavLinked: true,
      },
      {
        path: '/#jupiter',
        component: JupiterSector,
        title: 'Jupiter UI',
        isNavLinked: true,
      },
      {
        path: '/#roadmap',
        component: RoadmapSector,
        title: 'Roadmap',
        isNavLinked: true,
      },
      {
        path: '/#faq',
        component: FaqSector,
        title: 'FAQ',
        isNavLinked: true,
      },
      {
        path: '/#team',
        component: TeamSector,
        title: 'Team',
        isNavLinked: true,
      },
    ],
  },
  {
    path: '/burn',
    component: BurnBotSector,
    title: 'Burn',
    isNavLinked: true,
    subMenu: [],
  },
  {
    path: '/buy',
    component: BuySector,
    title: 'Buy',
    isNavLinked: true,
    subMenu: [],
  },
];

export default APP_ROUTES;
