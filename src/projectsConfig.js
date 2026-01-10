import { lazy } from 'react';

const projects = [
  {
    id: 1,
    name: 'Hello World',
    component: lazy(() => import('./projects/001-hello-world/HelloWorld')),
  },
  {
    id: 2,
    name: 'Simple Counter',
    component: lazy(() =>
      import('./projects/002-simple-counter/SimpleCounter')
    ),
  },
  {
    id: 3,
    name: 'User Profile Card',
    component: lazy(() =>
      import('./projects/003-user-profile-card/UserProfileCard')
    ),
    props: {
      name: 'Alex Morgan',
      role: 'Full Stack Developer',
      bio: 'Loves coding in React, Node.js, and TypeScript. Always learning something new!',
      image: 'https://ui-avatars.com/api/?name=Alex+Morgan&background=random',
    },
  },
  {
    id: 4,
    name: 'Color Toggler',
    component: lazy(() => import('./projects/004-color-toggler/ColorToggler')),
  },
];

export default projects;
