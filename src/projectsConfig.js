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
  {
    id: 5,
    name: 'List Renderer',
    component: lazy(() => import('./projects/005-list-renderer/ListRenderer')),
  },
  {
    id: 6,
    name: 'Accordion',
    component: lazy(() => import('./projects/006-accordion/Accordion')),
  },
  {
    id: 7,
    name: 'Image Slider',
    component: lazy(() => import('./projects/007-image-slider/ImageSlider')),
  },
  {
    id: 8,
    name: 'Digital Clock',
    component: lazy(() => import('./projects/008-digital-clock/DigitalClock')),
  },
];

export default projects;
