import { lazy } from 'react';

import { RouteType } from './types';

const APP_ROUTES: RouteType[] = [
  {
    path: '/',
    component: lazy(() => import('pages/Home')),
    title: 'Home',
    isNavLinked: false,
  },
  {
    path: '#about',
    component: undefined,
    title: 'About',
    isNavLinked: true,
  },
  {
    path: '#burn',
    component: undefined,
    title: 'Burn',
    isNavLinked: true,
  },
  {
    path: '#whitepaper',
    component: undefined,
    title: 'Whitepaper',
    isNavLinked: true,
  },
  {
    path: '#roadmap',
    component: undefined,
    title: 'Roadmap',
    isNavLinked: true,
  },
  {
    path: '#faq',
    component: undefined,
    title: 'FAQ',
    isNavLinked: true,
  },
  {
    path: '#team',
    component: undefined,
    title: 'Team',
    isNavLinked: true,
  },
];

export default APP_ROUTES;
