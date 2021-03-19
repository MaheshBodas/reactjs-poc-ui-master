export default {
  items: [
    {
      name: 'Dashboard',
      url: '/dashboard',
      icon: 'icon-speedometer',
      badge: {
        variant: 'info'
      },
    },
    {
      divider: true,
    },    
    
    {
      name: 'View ',
      url: '/view',
      icon: 'icon-star',
      children: [                                           
        {
          name: 'All Tracks',
          url: '/view/viewtrackgrid',
          icon: 'icon-bell',
        },    
      ],
    },       
    {
      name: 'About Me',
      url: '/aboutme',
      icon: 'icon-speedometer',
      badge: {
        variant: 'info'
      },
    },  
  ],
};
