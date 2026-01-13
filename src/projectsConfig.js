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
  {
    id: 31,
    name: 'Modal / Popup',
    component: lazy(() => import('./projects/031-modal-popup/ModalPopup')),
  },
  {
    id: 32,
    name: 'Tabs System',
    component: lazy(() => import('./projects/032-tabs-system/TabsSystem')),
  },
  {
    id: 33,
    name: 'Sidebar Navigation',
    component: lazy(() =>
      import('./projects/033-sidebar-navigation/SidebarNavigation')
    ),
  },
  {
    id: 34,
    name: 'Pomodoro Timer',
    component: lazy(() =>
      import('./projects/034-pomodoro-timer/PomodoroTimer')
    ),
  },
  {
    id: 35,
    name: 'Infinite Scroll',
    component: lazy(() =>
      import('./projects/035-infinite-scroll/InfiniteScroll')
    ),
  },
  {
    id: 36,
    name: 'Date Picker',
    component: lazy(() => import('./projects/036-date-picker/DatePicker')),
  },
  {
    id: 37,
    name: 'Image Gallery',
    component: lazy(() => import('./projects/037-image-gallery/ImageGallery')),
  },
  {
    id: 38,
    name: 'Tip Calculator',
    component: lazy(() =>
      import('./projects/038-tip-calculator/TipCalculator')
    ),
  },
  {
    id: 39,
    name: 'Currency Converter',
    component: lazy(() =>
      import('./projects/039-currency-converter/CurrencyConverter')
    ),
  },
  {
    id: 40,
    name: 'Memory Game',
    component: lazy(() => import('./projects/040-memory-game/MemoryGame')),
  },
  {
    id: 41,
    name: 'Tic-Tac-Toe',
    component: lazy(() => import('./projects/041-tic-tac-toe/TicTacToe')),
  },
  {
    id: 42,
    name: 'Notes App',
    component: lazy(() => import('./projects/042-notes-app/NotesApp')),
  },
  {
    id: 43,
    name: 'Blog (Mock Data)',
    component: lazy(() => import('./projects/043-blog-mock/BlogMock')),
  },
  {
    id: 44,
    name: 'Dark/Light Mode',
    component: lazy(() =>
      import('./projects/044-dark-light-mode/DarkLightMode')
    ),
  },
  {
    id: 45,
    name: 'Multi-step Form',
    component: lazy(() =>
      import('./projects/045-multi-step-form/MultiStepForm')
    ),
  },
  {
    id: 46,
    name: 'Embed YouTube Player',
    component: lazy(() =>
      import('./projects/046-embed-youtube-player/EmbedYoutubePlayer')
    ),
  },
  {
    id: 47,
    name: 'Password Generator',
    component: lazy(() =>
      import('./projects/047-password-generator/PasswordGenerator')
    ),
  },
  {
    id: 48,
    name: 'Reading Progress Bar',
    component: lazy(() =>
      import('./projects/048-reading-progress-bar/ReadingProgressBar')
    ),
  },
  {
    id: 49,
    name: 'Skeleton Loader',
    component: lazy(() =>
      import('./projects/049-skeleton-loader/SkeletonLoader')
    ),
  },
  {
    id: 50,
    name: 'Drag and Drop (Basic)',
    component: lazy(() =>
      import('./projects/050-drag-and-drop-basic/DragAndDropBasic')
    ),
  },
  {
    id: 51,
    name: 'Kanban Board',
    component: lazy(() => import('./projects/051-kanban-board/KanbanBoard')),
  },
  {
    id: 52,
    name: 'Music Player',
    component: lazy(() => import('./projects/052-music-player/MusicPlayer')),
  },
  {
    id: 53,
    name: 'Chat App (UI)',
    component: lazy(() => import('./projects/053-chat-app-ui/ChatAppUI')),
  },
  {
    id: 54,
    name: 'E-commerce Product Page',
    component: lazy(() =>
      import('./projects/054-ecommerce-product-page/EcommerceProductPage')
    ),
  },
  {
    id: 55,
    name: 'Book Finder',
    component: lazy(() => import('./projects/055-book-finder/BookFinder')),
  },
  {
    id: 56,
    name: 'Crypto Tracker',
    component: lazy(() =>
      import('./projects/056-crypto-tracker/CryptoTracker')
    ),
  },
  {
    id: 57,
    name: 'File Uploader',
    component: lazy(() => import('./projects/057-file-uploader/FileUploader')),
  },
  {
    id: 58,
    name: 'Autocomplete / Typeahead',
    component: lazy(() =>
      import('./projects/058-autocomplete-typeahead/AutocompleteTypeahead')
    ),
  },
  {
    id: 59,
    name: 'Video Call Interface',
    component: lazy(() =>
      import('./projects/059-video-call-interface/VideoCallInterface')
    ),
  },
  {
    id: 60,
    name: 'Nested Comments',
    component: lazy(() =>
      import('./projects/060-nested-comments/NestedComments')
    ),
  },
];

export default projects;
