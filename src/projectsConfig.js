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
  {
    id: 9,
    name: 'Stopwatch',
    component: lazy(() => import('./projects/009-stopwatch/Stopwatch')),
  },
  {
    id: 10,
    name: 'Random Quote Generator',
    component: lazy(() =>
      import('./projects/010-random-quote-generator/RandomQuoteGenerator')
    ),
  },
  {
    id: 11,
    name: 'BMI Calculator',
    component: lazy(() =>
      import('./projects/011-bmi-calculator/BmiCalculator')
    ),
  },
  {
    id: 12,
    name: 'Temperature Control',
    component: lazy(() =>
      import('./projects/012-temperature-control/TemperatureControl')
    ),
  },
  {
    id: 13,
    name: 'Character Counter',
    component: lazy(() =>
      import('./projects/013-character-counter/CharacterCounter')
    ),
  },
  {
    id: 14,
    name: 'ToDo List (Basic)',
    component: lazy(() =>
      import('./projects/014-todo-list-basic/TodoListBasic')
    ),
  },
  {
    id: 15,
    name: 'Hex Color Generator',
    component: lazy(() =>
      import('./projects/015-hex-color-generator/HexColorGenerator')
    ),
  },
  {
    id: 16,
    name: 'Search Filter',
    component: lazy(() => import('./projects/016-search-filter/SearchFilter')),
  },
  {
    id: 17,
    name: 'Simple Registration Form',
    component: lazy(() =>
      import('./projects/017-simple-registration-form/SimpleRegistrationForm')
    ),
  },
  {
    id: 18,
    name: 'Accordion (Multi-select)',
    component: lazy(() =>
      import('./projects/018-accordion-multiselect/AccordionMultiselect')
    ),
  },
  {
    id: 19,
    name: 'Star Rating',
    component: lazy(() => import('./projects/019-star-rating/StarRating')),
  },
  {
    id: 20,
    name: 'Dice Roller',
    component: lazy(() => import('./projects/020-dice-roller/DiceRoller')),
  },
  {
    id: 21,
    name: 'ToDo List (LocalStorage)',
    component: lazy(() =>
      import('./projects/021-todo-list-localstorage/TodoListLocalstorage')
    ),
  },
  {
    id: 22,
    name: 'Weather App',
    component: lazy(() => import('./projects/022-weather-app/WeatherApp')),
  },
  {
    id: 23,
    name: 'Movie Search',
    component: lazy(() => import('./projects/023-movie-search/MovieSearch')),
  },
  {
    id: 24,
    name: 'Markdown Editor',
    component: lazy(() =>
      import('./projects/024-markdown-editor/MarkdownEditor')
    ),
  },
  {
    id: 25,
    name: 'Form Validation',
    component: lazy(() =>
      import('./projects/025-form-validation/FormValidation')
    ),
  },
  {
    id: 26,
    name: 'Quiz App',
    component: lazy(() => import('./projects/026-quiz-app/QuizApp')),
  },
  {
    id: 27,
    name: 'Shopping Cart (Simple)',
    component: lazy(() =>
      import('./projects/027-shopping-cart-simple/ShoppingCartSimple')
    ),
  },
  {
    id: 28,
    name: 'Recipe App',
    component: lazy(() => import('./projects/028-recipe-app/RecipeApp')),
  },
  {
    id: 29,
    name: 'GitHub User Finder',
    component: lazy(() =>
      import('./projects/029-github-user-finder/GithubUserFinder')
    ),
  },
  {
    id: 30,
    name: 'Expense Tracker',
    component: lazy(() =>
      import('./projects/030-expense-tracker/ExpenseTracker')
    ),
  },
];

export default projects;
