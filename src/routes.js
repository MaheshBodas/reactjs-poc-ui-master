import React from 'react';

const Dashboard = React.lazy(() =>
  // import('./views/Dashboard/Dashboard').then(module => ({ default: module.Dashboard }))
  import('./views/Dashboard/Dashboard')
);

const ViewTrackGrid = React.lazy(() =>
  import('./_components/ViewTrackGrid/ViewTrackGrid').then(module => ({ default: module.ViewTrackGrid }))
);

const AboutMe = React.lazy(() =>
  import('./views/AboutMe/AboutMe')
);


// https://github.com/ReactTraining/react-router/tree/master/packages/react-router-config
const routes = [  
  { path: '/dashboard', name: 'Dashboard', component: Dashboard },    
  { path: '/view/viewtrackgrid', name: 'View Tracks', component: ViewTrackGrid },    
  { path: '/aboutme', name: 'AboutMe', component: AboutMe },  
  
];

export default routes;
