import type { Question } from '@/shared/types/Question.type';

export const questionsMock: Question[] = [
  {
    id: 'q1',
    userId: 'user-1',
    askedAtUtc: '2024-03-18T14:30:00Z',
    questionText: 'What is the difference between useMemo and useCallback in React?',
    aiResponse: { text: 'useMemo caches a value, while useCallback caches a function definition...', durationMs: 1200 }
  },
  {
    id: 'q2',
    userId: 'user-2',
    askedAtUtc: '2024-03-18T14:25:00Z',
    questionText: 'How do I center a div using CSS Grid?',
    aiResponse: { text: 'You can use display: grid; place-items: center; on the parent container.', durationMs: 800 }
  },
  {
    id: 'q3',
    userId: 'user-3',
    askedAtUtc: '2024-03-18T14:15:00Z',
    questionText: 'Explain the concept of hoisting in JavaScript.',
    aiResponse: { text: 'Hoisting is a behavior where variable and function declarations are moved to the top of their scope...', durationMs: 1500 }
  },
  {
    id: 'q4',
    userId: 'user-1',
    askedAtUtc: '2024-03-18T13:50:00Z',
    questionText: 'Why is my useEffect running twice?',
    aiResponse: { text: 'In React Strict Mode (development only), effects run twice to help detect side effects.', durationMs: 950 }
  },
  {
    id: 'q5',
    userId: 'user-4',
    askedAtUtc: '2024-03-18T13:45:00Z',
    questionText: 'Best practices for securing a Node.js API?',
    aiResponse: { text: 'Use Helmet, rate limiting, validate inputs, and avoid exposing stack traces in production.', durationMs: 2100 }
  },
  {
    id: 'q6',
    userId: 'user-5',
    askedAtUtc: '2024-03-18T12:30:00Z',
    questionText: 'How to type a ref in TypeScript for an input element?',
    aiResponse: { text: 'Use useRef<HTMLInputElement>(null) to correctly type the ref.', durationMs: 600 }
  },
  {
    id: 'q7',
    userId: 'user-2',
    askedAtUtc: '2024-03-18T12:15:00Z',
    questionText: 'What is hydration error in Next.js?',
    aiResponse: { text: 'It happens when the initial UI rendered on the server does not match what was rendered on the client.', durationMs: 1800 }
  },
  {
    id: 'q8',
    userId: 'user-6',
    askedAtUtc: '2024-03-18T11:55:00Z',
    questionText: 'Difference between Interface and Type in TypeScript?',
    aiResponse: { text: 'Interfaces are better for objects and can be merged, Types are more flexible for unions and primitives.', durationMs: 1100 }
  },
  {
    id: 'q9',
    userId: 'user-7',
    askedAtUtc: '2024-03-18T11:40:00Z',
    questionText: 'How to reset local state in Redux?',
    aiResponse: { text: 'You can handle a specific logout action in your reducers to reset state to initial values.', durationMs: 1300 }
  },
  {
    id: 'q10',
    userId: 'user-8',
    askedAtUtc: '2024-03-18T10:30:00Z',
    questionText: 'How to make a responsive navbar with Tailwind CSS?',
    aiResponse: { text: 'Use the "hidden" and "block" classes combined with breakpoints like md: or lg:.', durationMs: 1600 }
  },
  {
    id: 'q11',
    userId: 'user-9',
    askedAtUtc: '2024-03-17T22:15:00Z',
    questionText: 'What does "key" prop do in React lists?',
    aiResponse: { text: 'Keys help React identify which items have changed, are added, or are removed.', durationMs: 750 }
  },
  {
    id: 'q12',
    userId: 'user-10',
    askedAtUtc: '2024-03-17T21:45:00Z',
    questionText: 'How to optimize images in Next.js?',
    aiResponse: { text: 'Use the <Image /> component which handles lazy loading and resizing automatically.', durationMs: 1450 }
  },
  {
    id: 'q13',
    userId: 'user-11',
    askedAtUtc: '2024-03-17T20:30:00Z',
    questionText: 'Explain Python decorators.',
    aiResponse: { text: 'Decorators provide a simple syntax for calling higher-order functions.', durationMs: 1900 }
  },
  {
    id: 'q14',
    userId: 'user-12',
    askedAtUtc: '2024-03-17T19:20:00Z',
    questionText: 'How to check if an array includes a value in JS?',
    aiResponse: { text: 'Use the array.includes(value) method which returns a boolean.', durationMs: 500 }
  },
  {
    id: 'q15',
    userId: 'user-3',
    askedAtUtc: '2024-03-17T18:10:00Z',
    questionText: 'What is Docker used for?',
    aiResponse: { text: 'Docker is a platform for developing, shipping, and running applications in containers.', durationMs: 2200 }
  },
  {
    id: 'q16',
    userId: 'user-13',
    askedAtUtc: '2024-03-17T17:55:00Z',
    questionText: 'Difference between SQL and NoSQL?',
    aiResponse: { text: 'SQL databases are relational and table-based, while NoSQL are document, key-value, or graph-based.', durationMs: 2500 }
  },
  {
    id: 'q17',
    userId: 'user-14',
    askedAtUtc: '2024-03-17T16:40:00Z',
    questionText: 'How to handle async errors in Express.js?',
    aiResponse: { text: 'You need to pass the error to the next() function or use a wrapper for async route handlers.', durationMs: 1750 }
  },
  {
    id: 'q18',
    userId: 'user-15',
    askedAtUtc: '2024-03-17T15:30:00Z',
    questionText: 'What is semantic HTML?',
    aiResponse: { text: 'It introduces meaning to the web page rather than just presentation (e.g., <article> vs <div>).', durationMs: 1100 }
  },
  {
    id: 'q19',
    userId: 'user-4',
    askedAtUtc: '2024-03-17T14:20:00Z',
    questionText: 'How to center text vertically in CSS?',
    aiResponse: { text: 'Flexbox is easiest: display: flex; align-items: center;', durationMs: 900 }
  },
  {
    id: 'q20',
    userId: 'user-16',
    askedAtUtc: '2024-03-17T13:10:00Z',
    questionText: 'What is the Virtual DOM?',
    aiResponse: { text: 'A lightweight copy of the real DOM that React uses to optimize updates.', durationMs: 1350 }
  },
  {
    id: 'q21',
    userId: 'user-17',
    askedAtUtc: '2024-03-16T12:00:00Z',
    questionText: 'How to merge two arrays in JavaScript?',
    aiResponse: { text: 'You can use the spread operator: [...arr1, ...arr2] or arr1.concat(arr2).', durationMs: 650 }
  },
  {
    id: 'q22',
    userId: 'user-18',
    askedAtUtc: '2024-03-16T11:45:00Z',
    questionText: 'What is a JWT?',
    aiResponse: { text: 'JSON Web Token is a compact way of securely transmitting information between parties.', durationMs: 1550 }
  },
  {
    id: 'q23',
    userId: 'user-19',
    askedAtUtc: '2024-03-16T10:30:00Z',
    questionText: 'Explain "this" keyword in JavaScript.',
    aiResponse: { text: 'The value of "this" is determined by how a function is called (execution context).', durationMs: 1950 }
  },
  {
    id: 'q24',
    userId: 'user-20',
    askedAtUtc: '2024-03-16T09:20:00Z',
    questionText: 'How to prevent re-renders in React?',
    aiResponse: { text: 'Use React.memo, useMemo, and ensure props are stable references.', durationMs: 1250 }
  },
  {
    id: 'q25',
    userId: 'user-1',
    askedAtUtc: '2024-03-16T08:15:00Z',
    questionText: 'What is Git rebase?',
    aiResponse: { text: 'Rebase moves the entire feature branch to begin on the tip of the master branch.', durationMs: 2100 }
  },
  {
    id: 'q26',
    userId: 'user-5',
    askedAtUtc: '2024-03-15T18:00:00Z',
    questionText: 'How to validate an email in HTML input?',
    aiResponse: { text: 'Use type="email" and the pattern attribute for regex validation.', durationMs: 700 }
  },
  {
    id: 'q27',
    userId: 'user-8',
    askedAtUtc: '2024-03-15T17:45:00Z',
    questionText: 'What is prop drilling?',
    aiResponse: { text: 'The process of passing data from a parent to a deeply nested child through intermediate components.', durationMs: 1150 }
  },
  {
    id: 'q28',
    userId: 'user-10',
    askedAtUtc: '2024-03-15T16:30:00Z',
    questionText: 'How to convert string to number in JS?',
    aiResponse: { text: 'Use parseInt(), parseFloat(), Number(), or the unary plus operator (+str).', durationMs: 600 }
  },
  {
    id: 'q29',
    userId: 'user-12',
    askedAtUtc: '2024-03-15T15:20:00Z',
    questionText: 'What is CORS?',
    aiResponse: { text: 'Cross-Origin Resource Sharing allows a server to indicate any other origins than its own.', durationMs: 2300 }
  },
  {
    id: 'q30',
    userId: 'user-14',
    askedAtUtc: '2024-03-15T14:10:00Z',
    questionText: 'Difference between map and forEach?',
    aiResponse: { text: 'map returns a new array with transformed elements, forEach just iterates and returns undefined.', durationMs: 1000 }
  },
  {
    id: 'q31',
    userId: 'user-2',
    askedAtUtc: '2024-03-14T13:00:00Z',
    questionText: 'How to fetch data in React?',
    aiResponse: { text: 'You can use the fetch API inside useEffect or libraries like TanStack Query.', durationMs: 1400 }
  },
  {
    id: 'q32',
    userId: 'user-6',
    askedAtUtc: '2024-03-14T12:30:00Z',
    questionText: 'What is Middleware in Redux?',
    aiResponse: { text: 'It provides a third-party extension point between dispatching an action and the moment it reaches the reducer.', durationMs: 1650 }
  },
  {
    id: 'q33',
    userId: 'user-9',
    askedAtUtc: '2024-03-14T11:45:00Z',
    questionText: 'How to clone an object deep in JS?',
    aiResponse: { text: 'structuredClone(obj) is the modern native way, or JSON.parse(JSON.stringify(obj)).', durationMs: 950 }
  },
  {
    id: 'q34',
    userId: 'user-11',
    askedAtUtc: '2024-03-14T10:15:00Z',
    questionText: 'What is box-sizing: border-box?',
    aiResponse: { text: 'It tells the browser to account for any border and padding in the values you specify for width and height.', durationMs: 1100 }
  },
  {
    id: 'q35',
    userId: 'user-13',
    askedAtUtc: '2024-03-14T09:30:00Z',
    questionText: 'How to create a promise in JS?',
    aiResponse: { text: 'new Promise((resolve, reject) => { ... })', durationMs: 850 }
  },
  {
    id: 'q36',
    userId: 'user-17',
    askedAtUtc: '2024-03-13T16:20:00Z',
    questionText: 'What is lazy loading?',
    aiResponse: { text: 'Loading resources (images, scripts) only when they are needed or visible in the viewport.', durationMs: 1250 }
  },
  {
    id: 'q37',
    userId: 'user-20',
    askedAtUtc: '2024-03-13T15:10:00Z',
    questionText: 'How to change page title in React?',
    aiResponse: { text: 'Use document.title inside useEffect or use the <Head> component in Next.js.', durationMs: 900 }
  },
  {
    id: 'q38',
    userId: 'user-1',
    askedAtUtc: '2024-03-13T14:00:00Z',
    questionText: 'What is npm vs yarn?',
    aiResponse: { text: 'Both are package managers. Yarn was created to solve performance issues npm had, though npm has caught up.', durationMs: 1300 }
  },
  {
    id: 'q39',
    userId: 'user-3',
    askedAtUtc: '2024-03-13T13:45:00Z',
    questionText: 'How to detect mobile device in CSS?',
    aiResponse: { text: 'Use media queries like @media (max-width: 768px).', durationMs: 600 }
  },
  {
    id: 'q40',
    userId: 'user-7',
    askedAtUtc: '2024-03-13T12:30:00Z',
    questionText: 'What is a Singleton pattern?',
    aiResponse: { text: 'A design pattern that ensures a class has only one instance and provides a global point of access to it.', durationMs: 1700 }
  },
  {
    id: 'q41',
    userId: 'user-4',
    askedAtUtc: '2024-03-12T11:15:00Z',
    questionText: 'How to remove duplicates from array?',
    aiResponse: { text: 'Use the Set object: [...new Set(array)].', durationMs: 550 }
  },
  {
    id: 'q42',
    userId: 'user-15',
    askedAtUtc: '2024-03-12T10:45:00Z',
    questionText: 'What is Z-index?',
    aiResponse: { text: 'A CSS property that controls the vertical stacking order of elements that overlap.', durationMs: 1050 }
  },
  {
    id: 'q43',
    userId: 'user-18',
    askedAtUtc: '2024-03-12T09:30:00Z',
    questionText: 'How to debounce a function?',
    aiResponse: { text: 'Create a wrapper that clears a timer on every call and only executes after a delay.', durationMs: 1850 }
  },
  {
    id: 'q44',
    userId: 'user-19',
    askedAtUtc: '2024-03-11T17:20:00Z',
    questionText: 'What is event bubbling?',
    aiResponse: { text: 'When an event triggers on an element, it then triggers on its parent, then the parent\'s parent, etc.', durationMs: 1400 }
  },
  {
    id: 'q45',
    userId: 'user-5',
    askedAtUtc: '2024-03-11T16:10:00Z',
    questionText: 'How to deploy a React app?',
    aiResponse: { text: 'Build it using "npm run build" and host the static files on Vercel, Netlify, or S3.', durationMs: 1600 }
  },
  {
    id: 'q46',
    userId: 'user-8',
    askedAtUtc: '2024-03-11T15:00:00Z',
    questionText: 'What is local storage vs session storage?',
    aiResponse: { text: 'Local storage persists until cleared; session storage is cleared when the page session ends.', durationMs: 1150 }
  },
  {
    id: 'q47',
    userId: 'user-12',
    askedAtUtc: '2024-03-11T14:45:00Z',
    questionText: 'How to use SASS in React?',
    aiResponse: { text: 'Install the "sass" package and rename your files to .scss.', durationMs: 850 }
  },
  {
    id: 'q48',
    userId: 'user-16',
    askedAtUtc: '2024-03-10T13:30:00Z',
    questionText: 'What is JSX?',
    aiResponse: { text: 'A syntax extension for JavaScript that looks similar to XML/HTML, used in React.', durationMs: 950 }
  },
  {
    id: 'q49',
    userId: 'user-10',
    askedAtUtc: '2024-03-10T12:20:00Z',
    questionText: 'How to check for undefined in JS?',
    aiResponse: { text: 'typeof variable === "undefined" or simply checking if (variable === undefined).', durationMs: 650 }
  },
  {
    id: 'q50',
    userId: 'user-2',
    askedAtUtc: '2024-03-10T11:10:00Z',
    questionText: 'What is a Pure Component?',
    aiResponse: { text: 'A component that renders the same output for the same state and props, without side effects.', durationMs: 1300 }
  },
  {
    id: 'q51',
    userId: 'user-1',
    askedAtUtc: '2024-03-09T17:00:00Z',
    questionText: 'Difference between null and undefined?',
    aiResponse: { text: 'Undefined means a variable has been declared but not defined. Null is an assignment value.', durationMs: 1000 }
  },
  {
    id: 'q52',
    userId: 'user-14',
    askedAtUtc: '2024-03-09T16:30:00Z',
    questionText: 'How to implement dark mode?',
    aiResponse: { text: 'Use a CSS class on the body or a data-attribute, and toggle it with JS and CSS variables.', durationMs: 1500 }
  },
  {
    id: 'q53',
    userId: 'user-6',
    askedAtUtc: '2024-03-09T15:15:00Z',
    questionText: 'What is a callback function?',
    aiResponse: { text: 'A function passed into another function as an argument, which is then invoked inside the outer function.', durationMs: 1100 }
  },
  {
    id: 'q54',
    userId: 'user-11',
    askedAtUtc: '2024-03-09T14:00:00Z',
    questionText: 'How to sort an array of numbers?',
    aiResponse: { text: 'array.sort((a, b) => a - b). Default sort converts to strings.', durationMs: 800 }
  },
  {
    id: 'q55',
    userId: 'user-20',
    askedAtUtc: '2024-03-08T13:45:00Z',
    questionText: 'What is infinite scroll?',
    aiResponse: { text: 'A pattern where content loads continuously as the user scrolls down, rather than pagination.', durationMs: 1750 }
  },
  {
    id: 'q56',
    userId: 'user-3',
    askedAtUtc: '2024-03-08T12:30:00Z',
    questionText: 'How to hide an element but keep space?',
    aiResponse: { text: 'Use visibility: hidden; instead of display: none;', durationMs: 600 }
  },
  {
    id: 'q57',
    userId: 'user-9',
    askedAtUtc: '2024-03-08T11:20:00Z',
    questionText: 'What is Webpack?',
    aiResponse: { text: 'A static module bundler for JavaScript applications.', durationMs: 1900 }
  },
  {
    id: 'q58',
    userId: 'user-17',
    askedAtUtc: '2024-03-08T10:10:00Z',
    questionText: 'How to use gradients in CSS?',
    aiResponse: { text: 'background-image: linear-gradient(direction, color1, color2);', durationMs: 950 }
  },
  {
    id: 'q59',
    userId: 'user-13',
    askedAtUtc: '2024-03-07T16:50:00Z',
    questionText: 'What is REST API?',
    aiResponse: { text: 'Representational State Transfer. An architectural style for networked applications.', durationMs: 2000 }
  },
  {
    id: 'q60',
    userId: 'user-7',
    askedAtUtc: '2024-03-07T15:40:00Z',
    questionText: 'How to get current timestamp in JS?',
    aiResponse: { text: 'Date.now() or new Date().getTime().', durationMs: 500 }
  },
  {
    id: 'q61',
    userId: 'user-4',
    askedAtUtc: '2024-03-07T14:30:00Z',
    questionText: 'What is tree shaking?',
    aiResponse: { text: 'A term used for dead code elimination in JavaScript bundlers.', durationMs: 1400 }
  },
  {
    id: 'q62',
    userId: 'user-15',
    askedAtUtc: '2024-03-06T13:15:00Z',
    questionText: 'How to capitalize first letter in JS?',
    aiResponse: { text: 'str.charAt(0).toUpperCase() + str.slice(1).', durationMs: 700 }
  },
  {
    id: 'q63',
    userId: 'user-18',
    askedAtUtc: '2024-03-06T12:00:00Z',
    questionText: 'What is SSR?',
    aiResponse: { text: 'Server-Side Rendering. The page is generated on the server and sent to the client.', durationMs: 1600 }
  },
  {
    id: 'q64',
    userId: 'user-19',
    askedAtUtc: '2024-03-06T11:00:00Z',
    questionText: 'How to create a tooltip in CSS?',
    aiResponse: { text: 'Use the :hover pseudo-class and an absolute positioned child element.', durationMs: 1200 }
  },
  {
    id: 'q65',
    userId: 'user-2',
    askedAtUtc: '2024-03-05T17:30:00Z',
    questionText: 'What is package.json?',
    aiResponse: { text: 'It holds various metadata relevant to the project and handles the project\'s dependencies.', durationMs: 1000 }
  },
  {
    id: 'q66',
    userId: 'user-5',
    askedAtUtc: '2024-03-05T16:15:00Z',
    questionText: 'How to break loop in JS?',
    aiResponse: { text: 'Use the "break" statement.', durationMs: 450 }
  },
  {
    id: 'q67',
    userId: 'user-12',
    askedAtUtc: '2024-03-05T15:00:00Z',
    questionText: 'What is event delegation?',
    aiResponse: { text: 'Attaching a single event listener to a parent element to handle events for all its children.', durationMs: 1800 }
  },
  {
    id: 'q68',
    userId: 'user-16',
    askedAtUtc: '2024-03-04T14:45:00Z',
    questionText: 'How to prevent default form submission?',
    aiResponse: { text: 'Call event.preventDefault() inside the submit handler.', durationMs: 800 }
  },
  {
    id: 'q69',
    userId: 'user-10',
    askedAtUtc: '2024-03-04T13:30:00Z',
    questionText: 'What is Babel?',
    aiResponse: { text: 'A JavaScript compiler that converts modern JS into backwards-compatible versions.', durationMs: 1350 }
  },
  {
    id: 'q70',
    userId: 'user-8',
    askedAtUtc: '2024-03-04T12:15:00Z',
    questionText: 'How to parse JSON?',
    aiResponse: { text: 'Use JSON.parse(jsonString).', durationMs: 550 }
  },
  {
    id: 'q71',
    userId: 'user-1',
    askedAtUtc: '2024-03-03T18:00:00Z',
    questionText: 'What is a primitive type?',
    aiResponse: { text: 'Data that is not an object and has no methods (e.g., string, number, boolean).', durationMs: 900 }
  },
  {
    id: 'q72',
    userId: 'user-11',
    askedAtUtc: '2024-03-03T17:00:00Z',
    questionText: 'How to add comments in JSX?',
    aiResponse: { text: '{/* This is a comment */}', durationMs: 600 }
  },
  {
    id: 'q73',
    userId: 'user-14',
    askedAtUtc: '2024-03-03T16:00:00Z',
    questionText: 'What is the "window" object?',
    aiResponse: { text: 'The global object in a browser environment representing the window in which the script is running.', durationMs: 1150 }
  },
  {
    id: 'q74',
    userId: 'user-6',
    askedAtUtc: '2024-03-02T15:00:00Z',
    questionText: 'How to redirect in React Router?',
    aiResponse: { text: 'Use the useNavigate hook or <Navigate /> component.', durationMs: 1250 }
  },
  {
    id: 'q75',
    userId: 'user-13',
    askedAtUtc: '2024-03-02T14:00:00Z',
    questionText: 'What is CSS Specificity?',
    aiResponse: { text: 'The algorithm used by browsers to determine which CSS rule applies to an element.', durationMs: 2050 }
  },
  {
    id: 'q76',
    userId: 'user-20',
    askedAtUtc: '2024-03-02T13:00:00Z',
    questionText: 'How to flatten an array?',
    aiResponse: { text: 'Use array.flat().', durationMs: 500 }
  },
  {
    id: 'q77',
    userId: 'user-9',
    askedAtUtc: '2024-03-01T12:00:00Z',
    questionText: 'What is a stack trace?',
    aiResponse: { text: 'A report of the active stack frames at a certain point in time during the execution of a program.', durationMs: 1600 }
  },
  {
    id: 'q78',
    userId: 'user-17',
    askedAtUtc: '2024-03-01T11:00:00Z',
    questionText: 'How to create a sticky header?',
    aiResponse: { text: 'position: sticky; top: 0;', durationMs: 800 }
  },
  {
    id: 'q79',
    userId: 'user-4',
    askedAtUtc: '2024-03-01T10:00:00Z',
    questionText: 'What is destructuring?',
    aiResponse: { text: 'A syntax that allows you to unpack values from arrays or properties from objects into distinct variables.', durationMs: 1300 }
  },
  {
    id: 'q80',
    userId: 'user-3',
    askedAtUtc: '2024-02-29T09:00:00Z',
    questionText: 'How to disable a button in HTML?',
    aiResponse: { text: 'Add the "disabled" attribute to the button tag.', durationMs: 400 }
  }
];