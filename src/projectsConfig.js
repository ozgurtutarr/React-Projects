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
  {
    id: 61,
    name: 'Notification System',
    component: lazy(() =>
      import('./projects/061-notification-system/NotificationSystem')
    ),
  },
  {
    id: 62,
    name: 'Dashboard Layout',
    component: lazy(() =>
      import('./projects/062-dashboard-layout/DashboardLayout')
    ),
  },
  {
    id: 63,
    name: 'Auth Flow (Mock)',
    component: lazy(() => import('./projects/063-auth-flow-mock/AuthFlowMock')),
  },
  {
    id: 64,
    name: 'Virtual List',
    component: lazy(() => import('./projects/064-virtual-list/VirtualList')),
  },
  {
    id: 65,
    name: 'Image Lazy Loading',
    component: lazy(() =>
      import('./projects/065-image-lazy-loading/ImageLazyLoading')
    ),
  },
  {
    id: 66,
    name: 'Rich Text Editor',
    component: lazy(() =>
      import('./projects/066-rich-text-editor/RichTextEditor')
    ),
  },
  {
    id: 67,
    name: 'Interactive Maps',
    component: lazy(() =>
      import('./projects/067-interactive-maps/InteractiveMaps')
    ),
  },
  {
    id: 68,
    name: 'Drawing App',
    component: lazy(() => import('./projects/068-drawing-app/DrawingApp')),
  },
  {
    id: 69,
    name: 'Code Snippet Manager',
    component: lazy(() =>
      import('./projects/069-code-snippet-manager/CodeSnippetManager')
    ),
  },
  {
    id: 70,
    name: 'Typing Speed Test',
    component: lazy(() =>
      import('./projects/070-typing-speed-test/TypingSpeedTest')
    ),
  },
  {
    id: 71,
    name: 'Undo/Redo Capability',
    component: lazy(() =>
      import('./projects/071-undo-redo-capability/UndoRedoCapability')
    ),
  },
  {
    id: 72,
    name: 'Sudoku Solver',
    component: lazy(() => import('./projects/072-sudoku-solver/SudokuSolver')),
  },
  {
    id: 73,
    name: '2048 Game',
    component: lazy(() => import('./projects/073-2048-game/Game2048')),
  },
  {
    id: 74,
    name: 'Sorting Visualizer',
    component: lazy(() =>
      import('./projects/074-sorting-visualizer/SortingVisualizer')
    ),
  },
  {
    id: 75,
    name: 'Pathfinding Visualizer',
    component: lazy(() =>
      import('./projects/075-pathfinding-visualizer/PathfindingVisualizer')
    ),
  },
  {
    id: 76,
    name: 'Form Builder',
    component: lazy(() => import('./projects/076-form-builder/FormBuilder')),
  },
  {
    id: 77,
    name: 'Spreadsheet (Mini)',
    component: lazy(() =>
      import('./projects/077-spreadsheet-mini/SpreadsheetMini')
    ),
  },
  {
    id: 78,
    name: 'Timeline Component',
    component: lazy(() =>
      import('./projects/078-timeline-component/TimelineComponent')
    ),
  },
  {
    id: 79,
    name: 'Calendar Scheduler',
    component: lazy(() =>
      import('./projects/079-calendar-scheduler/CalendarScheduler')
    ),
  },
  {
    id: 80,
    name: 'Redux Toolkit Shopping Cart',
    component: lazy(() =>
      import('./projects/080-redux-toolkit-shopping-cart/ReduxShoppingCart')
    ),
  },
];

export default projects;
