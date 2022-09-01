import { lazy } from 'react';
import BurnBotSector from 'sectors/home/BurnBotSector';
import BuySector from 'sectors/home/BuySector';
import AboutSector from 'sectors/home/AboutSector';
import RoadmapSector from 'sectors/home/RoadmapSector';
import WhitepaperSector from 'sectors/home/WhitepaperSector';
import TeamSector from 'sectors/home/TeamSector';
import FaqSector from 'sectors/home/FaqSector';
import TokenomicsSector from 'sectors/home/TokenomicsSector';
import MultiChainSector from 'sectors/home/MultiChainSector';

import { RouteType } from './types';

const APP_ROUTES: RouteType[] = [
  {
    path: '/',
    component: lazy(() => import('pages/Home')),
    title: '',
    isNavLinked: false,
  },
  {
    path: '/#about',
    component: AboutSector,
    title: 'About',
    isNavLinked: true,
  },
  {
    path: '/burn',
    component: BurnBotSector,
    title: 'Burn',
    isNavLinked: true,
  },
  {
    path: '/#tokenomics',
    component: TokenomicsSector,
    title: 'Tokennomics',
    isNavLinked: true,
  },
  {
    path: '/buy',
    component: BuySector,
    title: 'Buy',
    isNavLinked: true,
  },
  {
    path: '/#whitepaper',
    component: WhitepaperSector,
    title: 'Whitepaper',
    isNavLinked: true,
  },
  {
    path: '/#multichain',
    component: MultiChainSector,
    title: 'MultiChain',
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
];

export default APP_ROUTES;
