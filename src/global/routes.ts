import { lazy } from 'react';
import BurnBotSector from 'sectors/home/BurnBotSector';
import BuySector from 'sectors/home/BuySector';

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
    component: undefined,
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
    component: undefined,
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
    component: undefined,
    title: 'Whitepaper',
    isNavLinked: true,
  },
  {
    path: '/#multichain',
    component: undefined,
    title: 'MultiChain',
    isNavLinked: true,
  },
  {
    path: '/#roadmap',
    component: undefined,
    title: 'Roadmap',
    isNavLinked: true,
  },
  {
    path: '/#faq',
    component: undefined,
    title: 'FAQ',
    isNavLinked: true,
  },
  {
    path: '/#team',
    component: undefined,
    title: 'Team',
    isNavLinked: true,
  },
];

export default APP_ROUTES;
