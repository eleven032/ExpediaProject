import React from 'react';

const InfoTable = React.lazy(() => import('../modules/InfoTable'));
const Home = React.lazy(() => import('../modules/Home'));

const routes = [
  { exact: true, path: '/', name: 'Home', component: Home },
  { exact: false, path: '/infoTable', name: 'Info Table', component: InfoTable },
];

export default routes;
