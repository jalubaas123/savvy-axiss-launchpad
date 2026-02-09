// Course data with syllabus for all courses
export interface SyllabusItem {
  week: number;
  topic: string;
  description: string;
}

export interface CourseDetail {
  name: string;
  baseSlug: string;
  category: string;
  image: string;
  description: string;
  objective: string;
  skills: string[];
  instructor: {
    name: string;
    role: string;
    image: string;
    gender: 'male' | 'female';
    rating: number;
    students: number;
    bio: string;
  };
  syllabus: {
    Beginner: SyllabusItem[];
    Intermediate: SyllabusItem[];
    Advanced: SyllabusItem[];
  };
}

export const courseDetails: Record<string, CourseDetail> = {
  
  'Python Programming': {
    name: 'Python Programming',
    baseSlug: 'python',
    category: 'Programming Languages',
    image: '/python.png',
    description: 'Learn Python programming from basics to advanced. Master data structures, algorithms, and real-world applications.',
    objective: 'To equip you with advanced Python programming capabilities, enabling you to work with machine learning models, process large datasets, and implement data pipelines in Python for complex, real-world scenarios.',
    skills: ['Advanced Data Processing', 'Machine Learning Foundations', 'Automate Data Collection with APIs'],
    instructor: {
      name: 'Varsha Sekar',
      role: 'Director & Instructor',
      image: '/placeholder.svg',
      gender: 'female',
      rating: 4.95,
      students: 100,
      bio: 'Varsha Sekar serves as the Director and Lead Instructor at Savvy Axiss and is a Professor at Jeppiaar Engineering College. With a robust background in Machine Learning and Deep Learning, she has contributed extensively to the field through multiple research publications.',
    },
    syllabus: {
      Beginner: [
        { week: 1, topic: 'Introduction to Python, Variables, Data Types', description: 'Get started with Python syntax, install Python environment, and learn variables, constants, and data types (int, float, string, bool). Write your first Python program.' },
        { week: 2, topic: 'Loops and Data Structures (Lists, Tuples, Dictionaries)', description: 'Master for and while loops. Work with lists for ordered data, tuples for immutable sequences, and dictionaries for key-value pairs. Perform common operations on each.' },
        { week: 3, topic: 'Functions and Error Handling', description: 'Create functions with parameters and return values. Handle errors using try-except blocks. Understand local and global scope, and function arguments.' },
        { week: 4, topic: 'Final Project - Simple Python Application', description: 'Build a practical Python application like a to-do list or calculator using all beginner concepts. Implement user input, data processing, and output formatting.' },
      ],
      Intermediate: [
        { week: 1, topic: 'Working with Modules and Packages', description: 'Import and use built-in modules (math, datetime, random). Create custom modules and packages. Understand Python package structure and __init__.py files.' },
        { week: 2, topic: 'File Handling and Exception Management', description: 'Read and write text and CSV files. Handle file operations safely with proper exception handling. Work with file paths and directory operations.' },
        { week: 3, topic: 'Working with Data Collections', description: 'Use list comprehensions, dictionary comprehensions, and generator expressions. Master advanced data manipulation techniques and collection operations.' },
        { week: 4, topic: 'Object-Oriented Programming in Python', description: 'Create classes and objects. Understand inheritance, encapsulation, and polymorphism. Implement constructors, methods, and class attributes.' },
        { week: 5, topic: 'Regular Expressions', description: 'Use regex patterns to search, match, and manipulate strings. Apply regex for data validation, text processing, and pattern matching in Python.' },
        { week: 6, topic: 'Database Connectivity', description: 'Connect Python to databases using SQLite and MySQL. Perform CRUD operations, execute queries, and handle database transactions safely.' },
        { week: 7, topic: 'Working with APIs', description: 'Make HTTP requests using requests library. Parse JSON responses, handle API authentication, and integrate third-party APIs into Python applications.' },
        { week: 8, topic: 'Final Project - Data Processing Application', description: 'Develop a data processing application that reads files, processes data, connects to databases, and generates reports using intermediate Python concepts.' },
      ],
      Advanced: [
        { week: 1, topic: 'Introduction to Python', description: 'Review Python fundamentals and advanced syntax features. Understand Pythonic coding style, best practices, and advanced language features.' },
        { week: 2, topic: 'Loops and Data Structures', description: 'Master advanced iteration techniques, generator functions, and complex data structure manipulations. Optimize data processing workflows.' },
        { week: 3, topic: 'Functions and Error Handling', description: 'Implement decorators, lambda functions, and advanced error handling patterns. Create robust error management systems with custom exceptions.' },
        { week: 4, topic: 'Final Project', description: 'Complete a mini-project applying advanced Python features. Focus on code quality, error handling, and best practices.' },
        { week: 5, topic: 'Working with Modules and Packages', description: 'Build and distribute Python packages. Understand virtual environments, pip, and package management. Create reusable code libraries.' },
        { week: 6, topic: 'File Handling and Exception Management', description: 'Work with binary files, JSON, XML, and other file formats. Implement advanced file processing and data serialization techniques.' },
        { week: 7, topic: 'Working with Data Collections', description: 'Use advanced collection types (defaultdict, Counter, namedtuple). Implement efficient data structures and algorithms for data processing.' },
        { week: 8, topic: 'Final Project', description: 'Build an intermediate-level project integrating modules, file handling, and data collections. Implement proper project structure and documentation.' },
        { week: 9, topic: 'Advanced Data Processing with Pandas', description: 'Master Pandas for data manipulation and analysis. Work with DataFrames, perform data cleaning, filtering, grouping, and statistical analysis.' },
        { week: 10, topic: 'Machine Learning Foundations', description: 'Introduction to machine learning with scikit-learn. Implement classification, regression models, and understand ML workflow from data preparation to evaluation.' },
        { week: 11, topic: 'Advanced Topics - APIs and Web Scraping', description: 'Build RESTful APIs with Flask/FastAPI. Scrape websites using BeautifulSoup and Scrapy. Handle authentication, rate limiting, and data extraction.' },
        { week: 12, topic: 'Final Project', description: 'Develop a comprehensive Python application combining data processing, machine learning, and API integration. Implement a complete end-to-end data science project.' },
      ],
    },
  },
  'Java Programming': {
    name: 'Java Programming',
    baseSlug: 'java',
    category: 'Programming Languages',
    image: '/java.png',
    description: 'Comprehensive Java programming course covering OOP concepts, collections, multithreading, and Java frameworks.',
    objective: 'To master Java programming from fundamentals to advanced concepts, enabling you to build robust applications using Java frameworks and best practices.',
    skills: ['Object-Oriented Programming', 'Java Collections', 'Multithreading', 'Java Frameworks'],
    instructor: {
      name: 'Varsha Sekar',
      role: 'Director & Instructor',
      image: '/placeholder.svg',
      gender: 'female',
      rating: 4.95,
      students: 120,
      bio: 'Varsha Sekar serves as the Director and Lead Instructor at Savvy Axiss with extensive experience in Java and enterprise application development.',
    },
    syllabus: {
      Beginner: [
        { week: 1, topic: 'Introduction to Java, JDK Setup, Variables, Data Types', description: 'Set up Java Development Kit (JDK) and IDE. Learn Java syntax, variables, primitive data types, and type conversion. Write and compile your first Java program.' },
        { week: 2, topic: 'Control Structures, Arrays, and Methods', description: 'Implement if-else, switch statements, and loops (for, while, do-while). Work with arrays and create methods with parameters and return types.' },
        { week: 3, topic: 'Introduction to Object-Oriented Programming', description: 'Understand classes and objects. Create classes with attributes and methods. Learn constructors, method overloading, and basic OOP principles.' },
        { week: 4, topic: 'Final Project - Basic Java Application', description: 'Build a console-based application like a student grade calculator or inventory system using classes, methods, and control structures.' },
      ],
      Intermediate: [
        { week: 1, topic: 'Advanced OOP - Inheritance, Polymorphism, Abstraction', description: 'Implement inheritance with extends keyword. Use method overriding, abstract classes, and interfaces. Understand polymorphism and dynamic method dispatch.' },
        { week: 2, topic: 'Exception Handling and File I/O', description: 'Handle exceptions using try-catch-finally blocks. Create custom exceptions. Read from and write to files using FileReader, FileWriter, and BufferedReader classes.' },
        { week: 3, topic: 'Java Collections Framework', description: 'Work with ArrayList, LinkedList, HashMap, HashSet, and other collection classes. Understand when to use each collection type and perform common operations.' },
        { week: 4, topic: 'Generics and Lambda Expressions', description: 'Use generic types for type safety. Implement lambda expressions and functional interfaces. Work with streams API for data processing.' },
        { week: 5, topic: 'Multithreading Basics', description: 'Create threads using Thread class and Runnable interface. Understand thread lifecycle, synchronization, and basic concurrent programming concepts.' },
        { week: 6, topic: 'Networking in Java', description: 'Create client-server applications using sockets. Implement TCP/IP communication, handle network I/O, and build basic networking applications.' },
        { week: 7, topic: 'JDBC and Database Connectivity', description: 'Connect Java applications to databases using JDBC. Execute SQL queries, handle result sets, and perform CRUD operations on database tables.' },
        { week: 8, topic: 'Final Project - Desktop Application', description: 'Develop a desktop application with GUI using Swing or JavaFX. Integrate database connectivity, file handling, and implement a complete user interface.' },
      ],
      Advanced: [
        { week: 1, topic: 'Advanced Multithreading and Concurrency', description: 'Master ExecutorService, CompletableFuture, and concurrent collections. Implement thread pools, handle race conditions, and build thread-safe applications.' },
        { week: 2, topic: 'Java Design Patterns', description: 'Implement creational, structural, and behavioral design patterns. Apply Singleton, Factory, Observer, and Strategy patterns in real-world scenarios.' },
        { week: 3, topic: 'Spring Framework Basics', description: 'Introduction to Spring IoC container and dependency injection. Configure Spring beans, understand inversion of control, and build Spring applications.' },
        { week: 4, topic: 'Spring Boot Development', description: 'Build RESTful applications with Spring Boot. Use auto-configuration, create REST controllers, handle HTTP requests, and implement Spring Boot best practices.' },
        { week: 5, topic: 'RESTful Web Services', description: 'Design and implement REST APIs using Spring MVC. Handle JSON/XML data, implement proper HTTP methods, and build scalable web services.' },
        { week: 6, topic: 'JPA and Hibernate', description: 'Map Java objects to database tables using JPA annotations. Implement entity relationships, use Hibernate for ORM, and optimize database queries.' },
        { week: 7, topic: 'Security in Java Applications', description: 'Implement authentication and authorization. Use Spring Security, handle JWT tokens, and secure REST APIs with proper security measures.' },
        { week: 8, topic: 'Microservices Architecture', description: 'Design microservices architecture. Use Spring Cloud, implement service discovery, API gateways, and build distributed systems.' },
        { week: 9, topic: 'Testing and Debugging', description: 'Write unit tests with JUnit and Mockito. Implement integration tests, use debugging tools, and ensure code quality with testing frameworks.' },
        { week: 10, topic: 'Performance Optimization', description: 'Profile Java applications, optimize memory usage, and improve performance. Use JVM tuning, caching strategies, and performance monitoring tools.' },
        { week: 11, topic: 'Deployment and DevOps', description: 'Package applications as JAR/WAR files. Deploy to application servers, use Docker containers, and implement CI/CD pipelines for Java applications.' },
        { week: 12, topic: 'Final Project - Enterprise Application', description: 'Build a complete enterprise-level application with Spring Boot, database integration, security, REST APIs, and deploy it using modern DevOps practices.' },
      ],
    },
  },
  'HTML': {
    name: 'HTML',
    baseSlug: 'html',
    category: 'Web Development',
    image: '/html.png',
    description: 'Master HTML5 fundamentals. Learn semantic markup, forms, multimedia, and modern web development practices.',
    objective: 'To master HTML5 and create well-structured, semantic, and accessible web pages using modern HTML standards.',
    skills: ['HTML5 Semantic Elements', 'Forms and Validation', 'Multimedia Integration', 'Accessibility'],
    instructor: {
      name: 'Rajalakshmi Venkatesan',
      role: 'Co-Director & Trainer',
      image: '/placeholder.svg',
      gender: 'female',
      rating: 4.9,
      students: 200,
      bio: 'Rajalakshmi Venkatesan serves as Co-Director and Trainer at Savvy Axiss with expertise in web development and frontend technologies.',
    },
    syllabus: {
      Beginner: [
        { week: 1, topic: 'Introduction to HTML, Basic Tags, Document Structure', description: 'Learn HTML document structure, DOCTYPE, head and body sections. Use basic tags like headings, paragraphs, and understand HTML5 document structure.' },
        { week: 2, topic: 'Text Formatting, Links, and Images', description: 'Format text with bold, italic, underline tags. Create hyperlinks (internal, external, email links) and embed images with proper attributes and alt text.' },
        { week: 3, topic: 'Lists, Tables, and Forms', description: 'Create ordered, unordered, and definition lists. Build tables with rows, columns, and headers. Design forms with input fields, buttons, and form validation.' },
        { week: 4, topic: 'Final Project - Personal Portfolio Page', description: 'Build a complete personal portfolio website with multiple sections, navigation, contact form, and proper HTML structure showcasing your skills.' },
      ],
      Intermediate: [
        { week: 1, topic: 'HTML5 Semantic Elements', description: 'Use semantic HTML5 tags (header, nav, article, section, aside, footer). Improve document structure and SEO with meaningful HTML elements.' },
        { week: 2, topic: 'Advanced Forms and Input Types', description: 'Implement HTML5 input types (email, date, number, range, color). Use form attributes, validation, and create complex form layouts with proper accessibility.' },
        { week: 3, topic: 'Multimedia - Audio, Video, Canvas', description: 'Embed audio and video elements with controls. Use Canvas API for drawing graphics, creating animations, and building interactive visual elements.' },
        { week: 4, topic: 'SVG and Graphics', description: 'Create scalable vector graphics using SVG. Draw shapes, paths, and text. Integrate SVG images and animations into web pages.' },
        { week: 5, topic: 'Web Storage APIs', description: 'Use localStorage and sessionStorage to store data in the browser. Implement client-side data persistence and retrieve stored information.' },
        { week: 6, topic: 'Geolocation API', description: 'Access user location using Geolocation API. Display maps, calculate distances, and build location-based web applications.' },
        { week: 7, topic: 'Accessibility and ARIA', description: 'Implement ARIA attributes for screen readers. Create accessible forms, navigation, and interactive elements following WCAG guidelines.' },
        { week: 8, topic: 'Final Project - Interactive Web Page', description: 'Develop an interactive web page using HTML5 features, forms, multimedia, and APIs. Implement user interactions and dynamic content.' },
      ],
      Advanced: [
        { week: 1, topic: 'Advanced HTML5 Features', description: 'Master advanced HTML5 APIs including Drag and Drop, File API, and History API. Implement complex interactions and browser history management.' },
        { week: 2, topic: 'Web Components and Custom Elements', description: 'Create reusable web components using Custom Elements API. Build shadow DOM, define custom HTML tags, and create component libraries.' },
        { week: 3, topic: 'Progressive Web Apps (PWA)', description: 'Convert web applications to PWAs. Implement service workers, create web app manifests, and enable offline functionality and app-like experience.' },
        { week: 4, topic: 'Advanced Form Validation', description: 'Implement custom validation logic, create validation libraries, and build sophisticated form validation systems with real-time feedback.' },
        { week: 5, topic: 'Microdata and Schema.org', description: 'Add structured data using microdata and Schema.org markup. Improve SEO with rich snippets and help search engines understand content.' },
        { week: 6, topic: 'Performance Optimization', description: 'Optimize HTML for performance. Minimize DOM manipulation, implement lazy loading, and use best practices for fast page loads.' },
        { week: 7, topic: 'SEO Best Practices', description: 'Implement on-page SEO techniques. Use meta tags, semantic HTML, optimize content structure, and improve search engine visibility.' },
        { week: 8, topic: 'Advanced APIs Integration', description: 'Integrate third-party APIs, handle CORS, work with fetch API, and build dynamic web applications that consume external data sources.' },
        { week: 9, topic: 'Web Workers', description: 'Use Web Workers for background processing. Offload heavy computations, maintain responsive UI, and implement multi-threaded JavaScript operations.' },
        { week: 10, topic: 'Service Workers', description: 'Implement service workers for offline functionality. Cache resources, handle network requests, and create reliable offline web experiences.' },
        { week: 11, topic: 'Advanced Project Architecture', description: 'Design scalable HTML architecture. Organize code, implement component-based structure, and follow best practices for large-scale projects.' },
        { week: 12, topic: 'Final Project - Complete Web Application', description: 'Build a production-ready web application with PWA features, offline support, advanced APIs, and optimized performance using all advanced HTML5 concepts.' },
      ],
    },
  },
  'CSS': {
    name: 'CSS',
    baseSlug: 'css',
    category: 'Web Development',
    image: '/css.png',
    description: 'Learn CSS3 styling, layouts, animations, and responsive design. Create beautiful and modern web interfaces.',
    objective: 'To master CSS3 and create stunning, responsive, and animated web interfaces using modern CSS techniques and best practices.',
    skills: ['CSS3 Styling', 'Flexbox and Grid Layouts', 'Animations and Transitions', 'Responsive Design'],
    instructor: {
      name: 'Rajalakshmi Venkatesan',
      role: 'Co-Director & Trainer',
      image: '/placeholder.svg',
      gender: 'female',
      rating: 4.9,
      students: 180,
      bio: 'Rajalakshmi Venkatesan specializes in CSS and frontend design with extensive experience in creating beautiful user interfaces.',
    },
    syllabus: {
      Beginner: [
        { week: 1, topic: 'Introduction to CSS, Selectors, Properties', description: 'Learn CSS syntax, selectors (element, class, ID), and basic properties. Understand how to link CSS to HTML and apply inline, internal, and external stylesheets.' },
        { week: 2, topic: 'Colors, Text Styling, and Fonts', description: 'Use color values (hex, RGB, named colors), style text with font-family, font-size, font-weight. Apply text decorations, alignments, and spacing.' },
        { week: 3, topic: 'Box Model, Padding, Margin, Borders', description: 'Understand the CSS box model. Set padding, margins, and borders. Control element dimensions, spacing, and create visually appealing layouts.' },
        { week: 4, topic: 'Final Project - Styled Web Page', description: 'Style a complete web page using all beginner CSS concepts. Create a visually appealing page with proper typography, colors, and spacing.' },
      ],
      Intermediate: [
        { week: 1, topic: 'Flexbox Layout', description: 'Master Flexbox for flexible layouts. Use flex-direction, justify-content, align-items, and create responsive, flexible container layouts.' },
        { week: 2, topic: 'CSS Grid Layout', description: 'Build complex layouts with CSS Grid. Define grid templates, place items, and create two-dimensional responsive layouts with grid areas.' },
        { week: 3, topic: 'Positioning and Z-index', description: 'Use static, relative, absolute, fixed, and sticky positioning. Control element stacking with z-index and create layered layouts.' },
        { week: 4, topic: 'Transitions and Animations', description: 'Add smooth transitions between states. Create keyframe animations, control animation timing, and build engaging interactive elements.' },
        { week: 5, topic: 'Responsive Design with Media Queries', description: 'Create responsive designs using media queries. Adapt layouts for different screen sizes, implement mobile-first approach, and ensure cross-device compatibility.' },
        { week: 6, topic: 'CSS Variables and Custom Properties', description: 'Use CSS custom properties (variables) for maintainable styles. Create theme systems, update values dynamically, and improve code reusability.' },
        { week: 7, topic: 'Pseudo-classes and Pseudo-elements', description: 'Style elements based on state using pseudo-classes (:hover, :focus, :nth-child). Create decorative elements with pseudo-elements (::before, ::after).' },
        { week: 8, topic: 'Final Project - Responsive Website', description: 'Build a fully responsive website using Flexbox, Grid, media queries, and animations. Ensure perfect display across all devices.' },
      ],
      Advanced: [
        { week: 1, topic: 'Advanced CSS Selectors', description: 'Master complex selectors including attribute selectors, combinators, and pseudo-selectors. Write efficient, maintainable CSS with advanced selector techniques.' },
        { week: 2, topic: 'Advanced Animations and Keyframes', description: 'Create complex animations with multiple keyframes. Control animation timing, delays, and iterations. Build sophisticated animated interfaces.' },
        { week: 3, topic: 'CSS Architecture and Methodologies (BEM, OOCSS)', description: 'Organize CSS using BEM naming convention and OOCSS principles. Write scalable, maintainable CSS code for large projects.' },
        { week: 4, topic: 'CSS Preprocessors (SASS/SCSS)', description: 'Use SASS/SCSS features including variables, nesting, mixins, and functions. Compile SCSS to CSS and improve development workflow.' },
        { week: 5, topic: 'Advanced Grid and Flexbox Techniques', description: 'Master advanced Grid and Flexbox patterns. Create complex layouts, handle edge cases, and optimize for performance and maintainability.' },
        { week: 6, topic: 'CSS Custom Properties Advanced Usage', description: 'Implement dynamic theming, create CSS-based animations with variables, and build sophisticated design systems using custom properties.' },
        { week: 7, topic: 'Performance Optimization', description: 'Optimize CSS for performance. Minimize render-blocking, use efficient selectors, and implement critical CSS techniques for faster page loads.' },
        { week: 8, topic: 'Advanced Responsive Techniques', description: 'Implement container queries, use advanced media query features, and create fluid typography and spacing systems for modern responsive design.' },
        { week: 9, topic: 'CSS-in-JS Concepts', description: 'Understand CSS-in-JS approaches, styled-components concepts, and when to use CSS-in-JS vs traditional CSS in modern web development.' },
        { week: 10, topic: 'Browser Compatibility and Polyfills', description: 'Handle browser compatibility issues, use CSS prefixes, implement polyfills, and ensure cross-browser support for modern CSS features.' },
        { week: 11, topic: 'Advanced Project Styling', description: 'Apply all advanced CSS techniques to build a production-ready styled application with optimal performance and maintainability.' },
        { week: 12, topic: 'Final Project - Complete Styled Application', description: 'Develop a complete, production-ready styled web application using advanced CSS techniques, preprocessors, and best practices.' },
      ],
    },
  },
  'JavaScript': {
    name: 'JavaScript',
    baseSlug: 'javascript',
    category: 'Web Development',
    image: '/javascript.png',
    description: 'Master JavaScript programming. Learn ES6+, DOM manipulation, async programming, and modern JavaScript frameworks.',
    objective: 'To master JavaScript from fundamentals to advanced concepts, enabling you to build interactive web applications and work with modern JavaScript frameworks.',
    skills: ['ES6+ Features', 'DOM Manipulation', 'Async Programming', 'Modern Frameworks'],
    instructor: {
      name: 'Rajalakshmi Venkatesan',
      role: 'Co-Director & Trainer',
      image: '/placeholder.svg',
      gender: 'female',
      rating: 4.9,
      students: 250,
      bio: 'Rajalakshmi Venkatesan is an expert in JavaScript and modern web development with extensive experience in building interactive applications.',
    },
    syllabus: {
      Beginner: [
        { week: 1, topic: 'Introduction to JavaScript, Variables, Data Types', description: 'Learn JavaScript basics, variables (var, let, const), data types (string, number, boolean, null, undefined). Understand type coercion and basic operators.' },
        { week: 2, topic: 'Functions, Arrays, Objects, and Control Structures', description: 'Create functions, work with arrays and objects. Implement if-else, switch, and loops. Manipulate arrays and access object properties.' },
        { week: 3, topic: 'DOM Manipulation Basics', description: 'Select and manipulate HTML elements using getElementById, querySelector. Change content, styles, and attributes dynamically. Handle basic user interactions.' },
        { week: 4, topic: 'Final Project - Interactive Web Page', description: 'Build an interactive web page with dynamic content, user input handling, and DOM manipulation. Create engaging user experiences with JavaScript.' },
      ],
      Intermediate: [
        { week: 1, topic: 'ES6+ Features (Arrow Functions, Destructuring)', description: 'Use arrow functions, template literals, and destructuring assignments. Implement spread and rest operators for efficient code writing.' },
        { week: 2, topic: 'Advanced Functions and Closures', description: 'Understand function scope, closures, and higher-order functions. Create functions that return functions and implement advanced function patterns.' },
        { week: 3, topic: 'Asynchronous JavaScript (Promises, Async/Await)', description: 'Handle asynchronous operations with Promises and async/await. Manage API calls, handle errors, and work with asynchronous data flows.' },
        { week: 4, topic: 'DOM Manipulation Advanced', description: 'Create and remove DOM elements dynamically. Use event listeners, manipulate classes, and implement advanced DOM manipulation techniques.' },
        { week: 5, topic: 'Event Handling and Event Delegation', description: 'Handle various events (click, submit, keyboard events). Implement event delegation for efficient event handling on dynamic content.' },
        { week: 6, topic: 'Working with APIs (Fetch, AJAX)', description: 'Make HTTP requests using Fetch API and XMLHttpRequest. Parse JSON responses, handle errors, and integrate external APIs into applications.' },
        { week: 7, topic: 'Local Storage and Session Storage', description: 'Store and retrieve data in browser storage. Implement data persistence, manage storage limits, and create offline-capable applications.' },
        { week: 8, topic: 'Final Project - Dynamic Web Application', description: 'Develop a dynamic web application with API integration, local storage, and advanced DOM manipulation. Build a complete interactive experience.' },
      ],
      Advanced: [
        { week: 1, topic: 'Advanced ES6+ Features', description: 'Master classes, modules, symbols, and proxies. Use advanced ES6+ features for modern JavaScript development and code organization.' },
        { week: 2, topic: 'JavaScript Design Patterns', description: 'Implement creational, structural, and behavioral design patterns. Apply Module, Observer, and Singleton patterns in JavaScript applications.' },
        { week: 3, topic: 'Advanced Async Programming', description: 'Master async patterns, handle multiple promises, implement async generators, and build complex asynchronous workflows efficiently.' },
        { week: 4, topic: 'Module System (ES6 Modules)', description: 'Organize code using ES6 modules. Export and import functions, classes, and variables. Create modular, maintainable JavaScript applications.' },
        { week: 5, topic: 'JavaScript Frameworks Introduction', description: 'Understand modern JavaScript frameworks. Compare React, Vue, and Angular. Learn when to use frameworks vs vanilla JavaScript.' },
        { week: 6, topic: 'React/Vue Basics', description: 'Build components, manage state, handle props, and create interactive UIs with React or Vue. Understand component lifecycle and hooks.' },
        { week: 7, topic: 'State Management', description: 'Implement state management patterns. Use Redux, Context API, or Vuex for managing application state in complex applications.' },
        { week: 8, topic: 'Testing in JavaScript', description: 'Write unit tests with Jest or Mocha. Test functions, components, and implement test-driven development practices.' },
        { week: 9, topic: 'Performance Optimization', description: 'Optimize JavaScript performance. Minimize bundle size, implement code splitting, and use performance monitoring tools.' },
        { week: 10, topic: 'Build Tools and Bundlers', description: 'Use Webpack, Vite, or Parcel for bundling. Configure build tools, optimize assets, and set up development workflows.' },
        { week: 11, topic: 'Advanced Project Development', description: 'Apply all advanced concepts to build a production-ready JavaScript application with proper architecture and best practices.' },
        { week: 12, topic: 'Final Project - Complete JavaScript Application', description: 'Develop a complete, production-ready JavaScript application with frameworks, testing, optimization, and modern development practices.' },
      ],
    },
  },
  'React': {
    name: 'React',
    baseSlug: 'react',
    category: 'Web Development',
    image: '/webdevelopment.png',
    description: 'Master React.js framework. Learn components, hooks, state management, routing, and build modern single-page applications.',
    objective: 'To master React.js from fundamentals to advanced concepts, enabling you to build scalable, performant, and maintainable web applications using modern React patterns and best practices.',
    skills: ['React Components', 'Hooks & State Management', 'React Router', 'Context API', 'Performance Optimization'],
    instructor: {
      name: 'Rajalakshmi Venkatesan',
      role: 'Co-Director & Trainer',
      image: '/placeholder.svg',
      gender: 'female',
      rating: 4.9,
      students: 280,
      bio: 'Rajalakshmi Venkatesan is an expert in React.js and modern frontend development with extensive experience in building scalable web applications.',
    },
    syllabus: {
      Beginner: [
        { week: 1, topic: 'Introduction to React, JSX, and Components', description: 'Learn React fundamentals, understand JSX syntax, create functional components, and set up a React development environment. Build your first React application.' },
        { week: 2, topic: 'Props, State, and Event Handling', description: 'Pass data using props, manage component state with useState hook, handle user events, and create interactive React components.' },
        { week: 3, topic: 'Conditional Rendering and Lists', description: 'Render components conditionally, map over arrays to render lists, use keys properly, and implement dynamic content rendering.' },
        { week: 4, topic: 'Final Project - Todo List Application', description: 'Build a complete Todo List application using React components, state management, event handling, and conditional rendering.' },
      ],
      Intermediate: [
        { week: 1, topic: 'React Hooks (useState, useEffect, useContext)', description: 'Master React Hooks including useState for state management, useEffect for side effects, and useContext for global state. Understand hook rules and best practices.' },
        { week: 2, topic: 'Advanced Hooks (useReducer, useMemo, useCallback)', description: 'Use useReducer for complex state logic, optimize performance with useMemo and useCallback, and implement custom hooks for reusable logic.' },
        { week: 3, topic: 'React Router and Navigation', description: 'Implement client-side routing with React Router, create navigation links, handle route parameters, and build multi-page React applications.' },
        { week: 4, topic: 'Forms and Controlled Components', description: 'Create forms in React, implement controlled components, handle form validation, and manage form state effectively.' },
        { week: 5, topic: 'API Integration and Data Fetching', description: 'Fetch data from APIs using fetch and axios, handle loading and error states, implement data fetching patterns, and work with async operations in React.' },
        { week: 6, topic: 'Context API for State Management', description: 'Use Context API to manage global state, create context providers and consumers, and implement state management without external libraries.' },
        { week: 7, topic: 'Component Composition and Higher-Order Components', description: 'Compose components effectively, create reusable component patterns, implement Higher-Order Components (HOCs), and build component libraries.' },
        { week: 8, topic: 'Final Project - E-commerce Product Page', description: 'Develop a complete e-commerce product page with routing, API integration, state management, and advanced React patterns.' },
      ],
      Advanced: [
        { week: 1, topic: 'Advanced React Patterns', description: 'Master advanced React patterns including render props, compound components, and advanced component composition techniques for scalable applications.' },
        { week: 2, topic: 'State Management with Redux', description: 'Implement Redux for state management, create actions, reducers, and stores. Use Redux Toolkit for modern Redux development and connect React with Redux.' },
        { week: 3, topic: 'React Performance Optimization', description: 'Optimize React applications using React.memo, useMemo, useCallback, code splitting, lazy loading, and performance profiling tools.' },
        { week: 4, topic: 'Testing React Applications', description: 'Write unit tests with Jest and React Testing Library, test components, hooks, and user interactions. Implement test-driven development practices.' },
        { week: 5, topic: 'Advanced Routing and Protected Routes', description: 'Implement protected routes, route guards, nested routing, and advanced routing patterns. Handle authentication and authorization in React applications.' },
        { week: 6, topic: 'Server-Side Rendering with Next.js', description: 'Introduction to Next.js, implement server-side rendering (SSR), static site generation (SSG), and build production-ready React applications.' },
        { week: 7, topic: 'React with TypeScript', description: 'Use TypeScript with React, type components and props, implement type-safe state management, and build type-safe React applications.' },
        { week: 8, topic: 'Advanced Hooks and Custom Hooks', description: 'Create complex custom hooks, implement advanced hook patterns, share logic across components, and build reusable hook libraries.' },
        { week: 9, topic: 'React Architecture and Best Practices', description: 'Design scalable React application architecture, organize project structure, implement design patterns, and follow React best practices for large-scale applications.' },
        { week: 10, topic: 'Build Tools and Deployment', description: 'Configure build tools (Webpack, Vite), optimize production builds, deploy React applications, and implement CI/CD pipelines for React projects.' },
        { week: 11, topic: 'Advanced State Management Patterns', description: 'Implement advanced state management with Zustand, Jotai, or Recoil. Compare state management solutions and choose the right approach for different scenarios.' },
        { week: 12, topic: 'Final Project - Full-Stack React Application', description: 'Build a complete full-stack React application with authentication, API integration, state management, routing, testing, and deployment.' },
      ],
    },
  },
  'Excel': {
    name: 'Excel',
    baseSlug: 'excel',
    category: 'Microsoft Office',
    image: '/msexcel.png',
    description: 'Master Microsoft Excel. Learn formulas, functions, data analysis, pivot tables, charts, and automation.',
    objective: 'To master Microsoft Excel from basic spreadsheet creation to advanced data analysis, enabling you to efficiently manage and analyze data.',
    skills: ['Formulas and Functions', 'Data Analysis', 'Pivot Tables', 'Charts and Automation'],
    instructor: {
      name: 'Shalini Baskaran',
      role: 'Founder & CEO',
      image: '/placeholder.svg',
      gender: 'female',
      rating: 4.95,
      students: 300,
      bio: 'Shalini Baskaran is the Founder and CEO of Savvy Axiss with extensive expertise in Microsoft Office applications and business analytics.',
    },
    syllabus: {
      Beginner: [
        { week: 1, topic: 'Introduction to Excel, Basic Navigation, Data Entry', description: 'Learn Excel interface, workbook and worksheet navigation, entering and editing data, basic formatting, and saving files.' },
        { week: 2, topic: 'Basic Formulas, Functions, and Cell References', description: 'Master SUM, AVERAGE, COUNT functions, understand relative and absolute cell references, and create basic calculations.' },
      ],
      Intermediate: [
        { week: 1, topic: 'Advanced Formulas (VLOOKUP, HLOOKUP, INDEX, MATCH)', description: 'Master lookup functions for data retrieval, combine INDEX and MATCH for powerful searches, and handle lookup errors.' },
        { week: 2, topic: 'Data Analysis Tools (Sorting, Filtering, Conditional Formatting)', description: 'Sort data by multiple criteria, use advanced filters, and apply conditional formatting rules to highlight data patterns.' },
        { week: 3, topic: 'Charts and Graphs', description: 'Create various chart types, customize chart elements, and design effective data visualizations for presentations.' },
        { week: 4, topic: 'Pivot Tables and Pivot Charts', description: 'Build pivot tables for data summarization, create pivot charts, and use slicers for interactive data analysis.' },
      ],
      Advanced: [
        { week: 1, topic: 'Advanced Functions and Array Formulas', description: 'Master array formulas, dynamic arrays, and advanced functions like SUMPRODUCT, INDIRECT, and OFFSET.' },
        { week: 2, topic: 'Data Validation and Protection', description: 'Create data validation rules, protect worksheets and workbooks, and implement input controls for data integrity.' },
        { week: 3, topic: 'Macros and VBA Basics', description: 'Record and edit macros, introduction to VBA programming, and automate repetitive tasks with code.' },
        { week: 4, topic: 'Advanced Pivot Tables and Data Models', description: 'Create data models with relationships, use DAX formulas, and build advanced pivot table reports.' },
        { week: 5, topic: 'Power Query and Power Pivot', description: 'Import and transform data with Power Query, create calculated columns and measures in Power Pivot.' },
        { week: 6, topic: 'Advanced Automation and Dashboard Creation', description: 'Build interactive dashboards, combine charts and controls, and create automated reporting systems.' },
      ],
    },
  },
  'Digital Marketing': {
    name: 'Digital Marketing',
    baseSlug: 'digital-marketing',
    category: 'Marketing',
    image: '/digital-marketing.png',
    description: 'Master digital marketing strategies. Learn SEO, social media marketing, PPC advertising, content marketing, email marketing, and analytics.',
    objective: 'To master digital marketing strategies and tools, enabling you to create effective marketing campaigns and drive business growth through digital channels.',
    skills: ['SEO Optimization', 'Social Media Marketing', 'PPC Advertising', 'Content Marketing', 'Analytics'],
    instructor: {
      name: 'Shalini Baskaran',
      role: 'Founder & CEO',
      image: '/placeholder.svg',
      gender: 'female',
      rating: 4.95,
      students: 180,
      bio: 'Shalini Baskaran has extensive experience in digital marketing and business growth strategies.',
    },
    syllabus: {
      Beginner: [
        { week: 1, topic: 'Introduction to Digital Marketing, Marketing Fundamentals', description: 'Understand digital marketing landscape, marketing mix, and customer journey. Learn how digital marketing differs from traditional marketing and its advantages.' },
        { week: 2, topic: 'Social Media Marketing Basics', description: 'Set up business profiles on major platforms (Facebook, Instagram, LinkedIn). Create engaging content, understand platform algorithms, and build social media presence.' },
        { week: 3, topic: 'Content Marketing Introduction', description: 'Learn content types (blog posts, videos, infographics). Create content calendars, understand content strategy, and measure content performance.' },
        { week: 4, topic: 'Final Project - Basic Marketing Campaign', description: 'Plan and execute a basic digital marketing campaign. Create content, set up social media posts, and measure initial results.' },
      ],
      Intermediate: [
        { week: 1, topic: 'SEO Fundamentals and Keyword Research', description: 'Understand search engine optimization basics. Conduct keyword research using tools, optimize on-page elements, and improve search rankings.' },
        { week: 2, topic: 'Google Ads and PPC Campaigns', description: 'Create and manage Google Ads campaigns. Set up ad groups, write compelling ad copy, set budgets, and optimize for conversions.' },
        { week: 3, topic: 'Email Marketing Strategies', description: 'Build email lists, design email campaigns, and use email marketing platforms. Create effective subject lines and measure email performance metrics.' },
        { week: 4, topic: 'Social Media Advertising', description: 'Run paid ads on Facebook, Instagram, and LinkedIn. Target audiences, set budgets, create ad creatives, and optimize ad performance.' },
        { week: 5, topic: 'Content Strategy and Creation', description: 'Develop comprehensive content strategies. Create various content formats, repurpose content, and align content with business goals.' },
        { week: 6, topic: 'Analytics and Reporting', description: 'Use Google Analytics to track website performance. Understand key metrics, create custom reports, and make data-driven marketing decisions.' },
        { week: 7, topic: 'Marketing Automation', description: 'Automate marketing workflows using tools like Mailchimp or HubSpot. Set up automated email sequences and lead nurturing campaigns.' },
        { week: 8, topic: 'Final Project - Complete Marketing Campaign', description: 'Execute a complete multi-channel marketing campaign. Integrate SEO, PPC, social media, and email marketing for comprehensive results.' },
      ],
      Advanced: [
        { week: 1, topic: 'Advanced SEO Techniques', description: 'Implement technical SEO, build quality backlinks, optimize for featured snippets, and use advanced SEO tools for competitive analysis.' },
        { week: 2, topic: 'Advanced PPC Strategies', description: 'Master advanced bidding strategies, use remarketing, implement conversion tracking, and optimize campaigns for maximum ROI.' },
        { week: 3, topic: 'Marketing Analytics and Data Analysis', description: 'Analyze marketing data using advanced analytics tools. Create attribution models, measure marketing ROI, and build comprehensive dashboards.' },
        { week: 4, topic: 'Conversion Rate Optimization', description: 'Conduct A/B testing, optimize landing pages, improve user experience, and increase conversion rates through data-driven optimization.' },
        { week: 5, topic: 'Marketing Automation Platforms', description: 'Master enterprise marketing automation platforms. Build complex workflows, implement lead scoring, and create sophisticated marketing automation systems.' },
        { week: 6, topic: 'Advanced Content Marketing', description: 'Develop content marketing strategies for different industries. Create content at scale, use content distribution networks, and measure content ROI.' },
        { week: 7, topic: 'Influencer Marketing', description: 'Identify and collaborate with influencers. Negotiate partnerships, measure influencer campaign performance, and build long-term influencer relationships.' },
        { week: 8, topic: 'E-commerce Marketing', description: 'Optimize e-commerce stores for conversions. Implement product feed optimization, use shopping ads, and create effective e-commerce marketing funnels.' },
        { week: 9, topic: 'Marketing Strategy and Planning', description: 'Develop comprehensive marketing strategies. Create marketing plans, set KPIs, allocate budgets, and align marketing with business objectives.' },
        { week: 10, topic: 'Advanced Analytics and Attribution', description: 'Implement multi-touch attribution models. Use advanced analytics to understand customer journey and optimize marketing mix.' },
        { week: 11, topic: 'Marketing Technology Stack', description: 'Evaluate and integrate marketing technology tools. Build marketing tech stacks, ensure tool integration, and optimize marketing operations.' },
        { week: 12, topic: 'Final Project - Comprehensive Marketing Strategy', description: 'Develop and present a complete digital marketing strategy for a business. Include all channels, budgets, timelines, and expected ROI.' },
      ],
    },
  },
  'MERN Full Stack': {
    name: 'MERN Full Stack',
    baseSlug: 'mern-fullstack',
    category: 'Web Development',
    image: '/webdevelopment.png',
    description: 'Master the complete MERN stack (MongoDB, Express.js, React, Node.js) to build full-stack web applications. Learn modern development practices, deployment, and real-world project implementation.',
    objective: 'To master the complete MERN stack development, enabling you to build scalable, production-ready full-stack web applications with modern tools and best practices.',
    skills: ['MongoDB Database Design', 'Express.js Backend Development', 'React Frontend Development', 'Node.js Server-Side Programming', 'RESTful APIs', 'Authentication & Authorization', 'Deployment & DevOps'],
    instructor: {
      name: 'Rajalakshmi Venkatesan',
      role: 'Co-Director & Trainer',
      image: '/placeholder.svg',
      gender: 'female',
      rating: 4.95,
      students: 320,
      bio: 'Rajalakshmi Venkatesan is an expert in full-stack development with extensive experience in MERN stack and modern web technologies.',
    },
    syllabus: {
      Beginner: [
        { week: 1, topic: 'Introduction to MERN Stack & Setup', description: 'Understand MERN stack architecture, set up development environment, install Node.js, MongoDB, and create your first MERN project structure.' },
        { week: 2, topic: 'MongoDB Fundamentals', description: 'Learn MongoDB basics, create databases and collections, perform CRUD operations, and understand document structure.' },
        { week: 3, topic: 'Node.js & Express.js Basics', description: 'Master Node.js fundamentals, create Express.js server, handle routes, middleware, and build RESTful API endpoints.' },
        { week: 4, topic: 'React Fundamentals', description: 'Learn React basics, components, props, state, hooks, and build interactive user interfaces with React.' },
      ],
      Intermediate: [
        { week: 1, topic: 'Advanced MongoDB & Mongoose', description: 'Master Mongoose ODM, schema design, relationships, validation, and advanced querying techniques.' },
        { week: 2, topic: 'Express.js Advanced Features', description: 'Implement authentication with JWT, middleware, error handling, file uploads, and API security best practices.' },
        { week: 3, topic: 'React Advanced Concepts', description: 'Master React Router, Context API, custom hooks, state management, and component optimization.' },
        { week: 4, topic: 'API Integration & State Management', description: 'Connect React frontend with Express backend, handle API calls, manage global state, and implement data fetching patterns.' },
        { week: 5, topic: 'Authentication & Authorization', description: 'Implement user authentication, JWT tokens, protected routes, role-based access control, and secure API endpoints.' },
        { week: 6, topic: 'Real-time Features with Socket.io', description: 'Add real-time functionality using Socket.io, implement chat features, notifications, and live updates.' },
        { week: 7, topic: 'Testing & Debugging', description: 'Write unit tests, integration tests, debug applications, use testing frameworks, and ensure code quality.' },
        { week: 8, topic: 'Final Project - E-commerce Platform', description: 'Build a complete e-commerce platform with user authentication, product management, shopping cart, and payment integration.' },
      ],
      Advanced: [
        { week: 1, topic: 'Advanced MongoDB Patterns', description: 'Implement advanced data modeling, aggregation pipelines, indexing strategies, and performance optimization.' },
        { week: 2, topic: 'Microservices Architecture', description: 'Design microservices, implement service communication, API gateways, and distributed system patterns.' },
        { week: 3, topic: 'Advanced React Patterns', description: 'Master advanced React patterns, server-side rendering with Next.js, performance optimization, and code splitting.' },
        { week: 4, topic: 'GraphQL Integration', description: 'Implement GraphQL APIs, use Apollo Client, handle queries and mutations, and integrate with MERN stack.' },
        { week: 5, topic: 'Cloud Deployment & DevOps', description: 'Deploy MERN applications to cloud platforms, set up CI/CD pipelines, use Docker, and implement DevOps practices.' },
        { week: 6, topic: 'Performance Optimization', description: 'Optimize application performance, implement caching strategies, database optimization, and frontend optimization techniques.' },
        { week: 7, topic: 'Security Best Practices', description: 'Implement security measures, protect against vulnerabilities, secure APIs, and follow security best practices.' },
        { week: 8, topic: 'Advanced State Management', description: 'Implement Redux, Zustand, or other state management solutions, handle complex state, and optimize state updates.' },
        { week: 9, topic: 'Payment Integration', description: 'Integrate payment gateways like Stripe, Razorpay, handle transactions, and implement secure payment processing.' },
        { week: 10, topic: 'Advanced Features', description: 'Implement advanced features like search functionality, filtering, pagination, file handling, and third-party API integrations.' },
        { week: 11, topic: 'Monitoring & Analytics', description: 'Set up application monitoring, implement analytics, error tracking, performance monitoring, and logging systems.' },
        { week: 12, topic: 'Final Project - Enterprise Application', description: 'Build a production-ready enterprise application with all advanced features, deployment, and best practices.' },
      ],
    },
  },
  'Python Full Stack': {
    name: 'Python Full Stack',
    baseSlug: 'python-fullstack',
    category: 'Web Development',
    image: '/python-fullstack.png',
    description: 'Master Python full-stack development with Django/Flask, React, and PostgreSQL. Build scalable web applications using Python backend and modern frontend technologies.',
    objective: 'To master Python full-stack development, enabling you to build robust, scalable web applications using Python frameworks, modern frontend technologies, and best practices.',
    skills: ['Django/Flask Framework', 'Python Backend Development', 'RESTful APIs', 'Database Design', 'Frontend Integration', 'Authentication', 'Deployment'],
    instructor: {
      name: 'Varsha Sekar',
      role: 'Director & Instructor',
      image: '/placeholder.svg',
      gender: 'female',
      rating: 4.95,
      students: 280,
      bio: 'Varsha Sekar is an expert in Python development with extensive experience in Django, Flask, and full-stack application development.',
    },
    syllabus: {
      Beginner: [
        { week: 1, topic: 'Python Web Development Basics', description: 'Review Python fundamentals, understand web development concepts, HTTP protocols, and set up development environment.' },
        { week: 2, topic: 'Django Framework Introduction', description: 'Learn Django framework, create projects and apps, understand MVC pattern, and build your first Django application.' },
        { week: 3, topic: 'Database Models & Admin Panel', description: 'Create Django models, work with databases, use Django admin panel, and perform database operations.' },
        { week: 4, topic: 'Views & Templates', description: 'Create views, templates, handle requests and responses, implement dynamic content, and build user interfaces.' },
      ],
      Intermediate: [
        { week: 1, topic: 'Django REST Framework', description: 'Build RESTful APIs with Django REST Framework, create serializers, viewsets, and handle API requests.' },
        { week: 2, topic: 'Authentication & User Management', description: 'Implement user authentication, registration, login, password reset, and user management systems.' },
        { week: 3, topic: 'Frontend Integration with React', description: 'Connect React frontend with Django backend, handle API calls, manage state, and build interactive UIs.' },
        { week: 4, topic: 'Database Relationships & Queries', description: 'Implement database relationships, optimize queries, use advanced ORM features, and handle complex data operations.' },
        { week: 5, topic: 'File Handling & Media Management', description: 'Handle file uploads, manage media files, implement file storage, and process uploaded content.' },
        { week: 6, topic: 'Advanced Django Features', description: 'Use Django middleware, signals, caching, sessions, and implement advanced Django features.' },
        { week: 7, topic: 'Testing & Debugging', description: 'Write unit tests, integration tests, debug Django applications, and ensure code quality.' },
        { week: 8, topic: 'Final Project - Blog Platform', description: 'Build a complete blog platform with user authentication, CRUD operations, and API integration.' },
      ],
      Advanced: [
        { week: 1, topic: 'Advanced Django Patterns', description: 'Master advanced Django patterns, custom managers, querysets, and implement complex business logic.' },
        { week: 2, topic: 'Microservices with Flask', description: 'Build microservices using Flask, implement service communication, and design scalable architectures.' },
        { week: 3, topic: 'Real-time Features', description: 'Implement real-time features using WebSockets, Django Channels, and build interactive applications.' },
        { week: 4, topic: 'Advanced API Development', description: 'Build advanced APIs, implement GraphQL, handle complex data structures, and optimize API performance.' },
        { week: 5, topic: 'Database Optimization', description: 'Optimize database queries, implement indexing, use database connection pooling, and improve performance.' },
        { week: 6, topic: 'Security & Best Practices', description: 'Implement security measures, protect against vulnerabilities, secure APIs, and follow Django best practices.' },
        { week: 7, topic: 'Deployment & DevOps', description: 'Deploy Python applications, use Docker, set up CI/CD, implement DevOps practices, and manage production environments.' },
        { week: 8, topic: 'Performance Optimization', description: 'Optimize application performance, implement caching, use CDN, and improve response times.' },
        { week: 9, topic: 'Payment Integration', description: 'Integrate payment gateways, handle transactions, implement secure payment processing, and manage subscriptions.' },
        { week: 10, topic: 'Advanced Frontend Features', description: 'Implement advanced frontend features, use modern React patterns, optimize frontend performance, and enhance UX.' },
        { week: 11, topic: 'Monitoring & Analytics', description: 'Set up monitoring, implement analytics, error tracking, performance monitoring, and logging systems.' },
        { week: 12, topic: 'Final Project - Enterprise Application', description: 'Build a production-ready enterprise application with all advanced features, deployment, and best practices.' },
      ],
    },
  },
  'Vibe Coding': {
    name: 'Vibe Coding',
    baseSlug: 'vibe-coding',
    category: 'Programming Languages',
    image: '/vibecoding.png',
    description: 'A complete end-to-end program designed to take you from absolute beginner to confident AI-powered developer. Learn to build real-world applications using AI tools like Cursor, ChatGPT, and GitHub Copilot. Focus on thinking, building, debugging, and shipping - not memorizing syntax.',
    objective: 'To transform learners from zero coding knowledge to confident AI-powered developers who can build, debug, and ship real-world applications. This course teaches effective AI collaboration, prompt engineering, and modern development workflows that leverage AI tools.',
    skills: ['AI-Assisted Development', 'Prompt Engineering', 'Full-Stack Development', 'AI Tool Mastery', 'Debugging with AI', 'Deployment & Shipping', 'Product Building'],
    instructor: {
      name: 'Rajalakshmi Venkatesan',
      role: 'Co-Director & Trainer',
      image: '/placeholder.svg',
      gender: 'female',
      rating: 4.9,
      students: 200,
      bio: 'Rajalakshmi Venkatesan specializes in AI-powered development and modern coding workflows, helping students leverage AI tools to build real-world applications faster.',
    },
    syllabus: {
      Beginner: [
        { week: 1, topic: 'Introduction to Vibe Coding', description: 'What is Vibe Coding? Evolution of coding → AI-assisted development. Difference between traditional coding vs vibe coding. Myths & realities of "coding with AI". Real-world examples & case studies. Understanding the shift to AI-first development.' },
        { week: 2, topic: 'Understanding the Vibe Mindset', description: 'Thinking in outcomes, not syntax. How to describe ideas clearly to AI. Prompting as a core skill. Breaking problems into vibes (features, flows, intent). Common beginner mistakes and how to avoid them. Developing the right mindset for AI collaboration.' },
        { week: 3, topic: 'Tools for Vibe Coding', description: 'Overview of AI coding tools: Cursor, ChatGPT, GitHub Copilot. Choosing the right tool for the right task. Setting up Cursor (Windows & macOS). Understanding AI limitations & hallucinations. Tool comparison and best practices.' },
        { week: 4, topic: 'Prompt Engineering for Developers', description: 'Basics of prompt engineering. Writing effective prompts for UI generation, backend logic, bug fixing, and refactoring. Iterative prompting techniques. Prompt templates for daily use. Advanced prompting strategies.' },
        { week: 5, topic: 'Frontend Vibe Coding', description: 'Generating HTML, CSS, JavaScript with AI. Using React / Next.js with AI assistance. Styling with Tailwind & component libraries. Converting Figma / ideas into code. UI debugging with AI. Building responsive interfaces quickly.' },
        { week: 6, topic: 'Backend Vibe Coding', description: 'Backend concepts (explained simply). Generating APIs using AI. Working with Node.js / Python. Database basics (SQL & NoSQL vibes). Authentication & authorization using AI. Building robust backend systems.' },
        { week: 7, topic: 'Full-Stack Vibe Projects', description: 'Planning a full-stack app using vibes. Folder structure & architecture with AI. Connecting frontend + backend. Environment variables & configs. Error handling & optimization. Building complete applications end-to-end.' },
        { week: 8, topic: 'Git, GitHub & AI Collaboration', description: 'Git fundamentals (simple explanation). Using Git inside Cursor. AI-assisted commit messages. Branching, pull requests & collaboration. Deploying from GitHub. Version control best practices with AI.' },
        { week: 9, topic: 'Debugging & Problem Solving with AI', description: 'How to talk to AI when things break. Reading error messages with AI help. Debugging frontend & backend issues. Performance optimization prompts. Security considerations. Becoming an effective debugger with AI assistance.' },
        { week: 10, topic: 'Deployment & Shipping Faster', description: 'Hosting frontend apps (Vercel, Netlify). Backend deployment basics. Environment setup for production. Monitoring & fixing production bugs. Shipping mindset & iteration. Getting your apps live quickly.' },
        { week: 11, topic: 'Real-World Vibe Coding Projects', description: 'Build a landing page in minutes. Build a SaaS MVP. Build an internal tool. Clone popular apps using AI. Freelancing & client projects using vibe coding. Practical project building and portfolio development.' },
        { week: 12, topic: 'Ethics, Limits & Future of Vibe Coding', description: 'Ethical use of AI in coding. Copyright & licensing awareness. When NOT to rely on AI. Future of developers & AI. Becoming a "Vibe Engineer". Bonus: No-code vs Low-code vs Vibe coding, AI for documentation & testing, monetizing vibe coding skills.' },
      ],
      Intermediate: [],
      Advanced: [],
    },
  },
};

// Default instructor data
const defaultInstructor = {
  name: 'Varsha Sekar',
  role: 'Director & Instructor',
  image: '/placeholder.svg',
  gender: 'female' as const,
  rating: 4.95,
  students: 100,
  bio: 'Varsha Sekar serves as the Director and Lead Instructor at Savvy Axiss with extensive experience in teaching and technology.',
};

// Generate default syllabus based on course name and level
const generateDefaultSyllabus = (
  courseName: string,
  level: 'Beginner' | 'Intermediate' | 'Advanced'
): SyllabusItem[] => {
  const weeks = level === 'Beginner' ? 4 : level === 'Intermediate' ? 8 : 12;
  const topics: Record<string, Record<string, Array<{topic: string, description: string}>>> = {
   
    
    'MySQL': {
      Beginner: [
        { topic: 'Introduction to MySQL', description: 'Learn MySQL basics, install MySQL server, and understand MySQL architecture. Connect to MySQL and perform basic operations.' },
        { topic: 'Database Creation and Management', description: 'Create databases and tables. Define data types, set primary keys, and understand MySQL data types.' },
        { topic: 'Basic Queries', description: 'Write SELECT, INSERT, UPDATE, and DELETE queries. Perform basic data manipulation and retrieval operations.' },
        { topic: 'Final Project', description: 'Create a MySQL database with multiple tables and write queries to manage data effectively.' },
      ],
      Intermediate: [
        { topic: 'Advanced Queries and Joins', description: 'Write complex queries with multiple joins, subqueries, and use MySQL-specific functions for data retrieval.' },
        { topic: 'Stored Procedures and Functions', description: 'Create stored procedures and functions in MySQL. Pass parameters, return values, and implement reusable database logic.' },
        { topic: 'Triggers and Events', description: 'Create triggers for automatic actions and schedule events. Automate database operations and maintain data integrity.' },
        { topic: 'Indexes and Optimization', description: 'Create indexes, analyze query performance, and optimize MySQL queries for better speed and efficiency.' },
        { topic: 'User Management', description: 'Create users, grant permissions, and manage MySQL user accounts. Implement proper security and access control.' },
        { topic: 'Backup and Restore', description: 'Backup MySQL databases using mysqldump and other tools. Restore databases and implement backup strategies.' },
        { topic: 'Performance Tuning', description: 'Optimize MySQL configuration, tune query performance, and implement caching strategies for better performance.' },
        { topic: 'Final Project', description: 'Build a complete MySQL database system with stored procedures, triggers, and optimized performance.' },
      ],
      Advanced: [
        { topic: 'Advanced Database Design', description: 'Design complex database schemas, implement advanced normalization, and create scalable database architectures.' },
        { topic: 'Replication and Clustering', description: 'Set up MySQL replication, configure master-slave replication, and implement high availability solutions.' },
        { topic: 'Partitioning', description: 'Partition large tables for better performance. Implement range, hash, and list partitioning strategies.' },
        { topic: 'Advanced Optimization', description: 'Optimize MySQL at the server level, tune configuration parameters, and implement advanced performance techniques.' },
        { topic: 'Security Best Practices', description: 'Implement MySQL security best practices, encrypt data, and protect against SQL injection and other attacks.' },
        { topic: 'High Availability', description: 'Implement MySQL high availability solutions, use clustering, and ensure database uptime and reliability.' },
        { topic: 'Monitoring and Maintenance', description: 'Monitor MySQL performance, set up alerts, and implement proactive database maintenance procedures.' },
        { topic: 'Advanced Features', description: 'Use MySQL advanced features like JSON support, full-text search, and spatial data types for specialized applications.' },
        { topic: 'Cloud MySQL', description: 'Deploy MySQL on cloud platforms, use managed MySQL services, and implement cloud-based database solutions.' },
        { topic: 'Data Migration', description: 'Migrate data between MySQL databases, handle schema changes, and implement data migration strategies.' },
        { topic: 'Enterprise Solutions', description: 'Design enterprise-level MySQL solutions, implement scalability patterns, and handle large-scale database operations.' },
        { topic: 'Final Project', description: 'Build an enterprise MySQL database system with replication, high availability, and advanced optimization features.' },
      ],
    },
    
    'MongoDB': {
      Beginner: [
        { topic: 'Introduction to NoSQL and MongoDB', description: 'Understand NoSQL databases and MongoDB architecture. Learn document model, collections, and basic MongoDB concepts.' },
        { topic: 'Installation and Setup', description: 'Install MongoDB, set up MongoDB server, and use MongoDB shell. Connect to MongoDB and perform basic operations.' },
        { topic: 'Basic CRUD Operations', description: 'Perform Create, Read, Update, and Delete operations in MongoDB. Work with documents and collections using MongoDB shell.' },
        { topic: 'Final Project', description: 'Create a MongoDB database, insert documents, and perform basic queries to manage data.' },
      ],
      Intermediate: [
        { topic: 'Querying and Indexing', description: 'Write complex queries with filters, projections, and sorting. Create indexes to improve query performance in MongoDB.' },
        { topic: 'Aggregation Framework', description: 'Use MongoDB aggregation pipeline. Group, filter, and transform data using aggregation stages and operators.' },
        { topic: 'Data Modeling', description: 'Design MongoDB document schemas. Understand embedding vs referencing, and model relationships in document databases.' },
        { topic: 'Replication', description: 'Set up MongoDB replica sets for high availability. Configure primary and secondary nodes, and handle failover scenarios.' },
        { topic: 'Sharding Basics', description: 'Understand MongoDB sharding concepts. Distribute data across multiple shards and implement horizontal scaling.' },
        { topic: 'Performance Optimization', description: 'Optimize MongoDB queries, use proper indexes, and implement performance best practices for faster operations.' },
        { topic: 'Security', description: 'Implement MongoDB security features. Set up authentication, authorization, and encrypt data in MongoDB deployments.' },
        { topic: 'Final Project', description: 'Build a MongoDB application with aggregation, indexing, and optimized queries for a real-world scenario.' },
      ],
      Advanced: [
        { topic: 'Advanced Aggregation', description: 'Master complex aggregation pipelines. Use advanced operators, implement data transformations, and build analytical queries.' },
        { topic: 'Sharding Strategies', description: 'Design sharding strategies, choose shard keys, and implement effective data distribution across MongoDB clusters.' },
        { topic: 'Replica Sets', description: 'Configure advanced replica set topologies, handle elections, and implement complex replication scenarios.' },
        { topic: 'Performance Tuning', description: 'Optimize MongoDB at the server level, tune configuration, and implement advanced performance optimization techniques.' },
        { topic: 'Backup and Restore', description: 'Implement MongoDB backup strategies, use mongodump and mongorestore, and ensure data recovery capabilities.' },
        { topic: 'Monitoring', description: 'Monitor MongoDB performance, use MongoDB Atlas monitoring, and implement proactive monitoring and alerting.' },
        { topic: 'Advanced Data Modeling', description: 'Design complex document schemas, implement advanced patterns, and optimize data models for specific use cases.' },
        { topic: 'GridFS', description: 'Use GridFS for storing large files in MongoDB. Implement file storage and retrieval using GridFS buckets.' },
        { topic: 'Change Streams', description: 'Implement change streams for real-time data monitoring. Track database changes and build reactive applications.' },
        { topic: 'Atlas Cloud', description: 'Deploy MongoDB on MongoDB Atlas cloud platform. Configure cloud clusters, manage resources, and use cloud features.' },
        { topic: 'Enterprise Features', description: 'Use MongoDB enterprise features, implement advanced security, and leverage enterprise-grade capabilities.' },
        { topic: 'Final Project', description: 'Build an enterprise MongoDB solution with sharding, replication, and advanced features for production deployment.' },
      ],
    },
    
  };

  const courseTopics = topics[courseName]?.[level];
  if (courseTopics && Array.isArray(courseTopics) && courseTopics.length > 0) {
    // Check if it's the new format with objects
    if (typeof courseTopics[0] === 'object' && 'topic' in courseTopics[0]) {
      return courseTopics.slice(0, weeks).map((item, index) => ({ 
        week: index + 1, 
        topic: item.topic, 
        description: item.description 
      }));
    }
    // Old format with strings
    return courseTopics.slice(0, weeks).map((topic, index) => {
      const topicStr = typeof topic === 'string' ? topic : (topic as { topic: string }).topic;
      return { 
        week: index + 1, 
        topic: topicStr,
        description: `Learn ${topicStr.toLowerCase()} concepts and practical applications. Gain hands-on experience through exercises and real-world examples.`
      };
    });
  }

  // Generic fallback with descriptions
  const genericTopics: Record<string, Array<{topic: string, description: string}>> = {
    Beginner: [
      { topic: 'Introduction and Fundamentals', description: 'Get introduced to the basics and fundamental concepts. Understand core principles and set up your development environment.' },
      { topic: 'Core Concepts', description: 'Learn essential concepts and building blocks. Master the foundational skills needed for practical application.' },
      { topic: 'Practical Applications', description: 'Apply learned concepts to real-world scenarios. Build practical projects and solve common problems.' },
      { topic: 'Final Project', description: 'Complete a comprehensive project integrating all beginner concepts. Demonstrate your understanding through a practical application.' },
    ],
    Intermediate: [
      { topic: 'Advanced Concepts', description: 'Explore advanced topics and deeper understanding. Learn sophisticated techniques and methodologies.' },
      { topic: 'Best Practices', description: 'Understand industry best practices and standards. Learn how to write maintainable and efficient code.' },
      { topic: 'Real-world Applications', description: 'Work on real-world projects and scenarios. Apply intermediate skills to solve complex problems.' },
      { topic: 'Integration', description: 'Integrate different components and technologies. Learn how to connect various systems and tools.' },
      { topic: 'Optimization', description: 'Optimize performance and efficiency. Learn techniques to improve speed and resource usage.' },
      { topic: 'Testing', description: 'Implement testing strategies and frameworks. Ensure code quality through comprehensive testing.' },
      { topic: 'Deployment', description: 'Deploy applications to production environments. Learn deployment strategies and best practices.' },
      { topic: 'Final Project', description: 'Build a complete intermediate-level project. Integrate all learned concepts into a comprehensive application.' },
    ],
    Advanced: [
      { topic: 'Expert-level Topics', description: 'Master expert-level concepts and advanced techniques. Deep dive into specialized areas of expertise.' },
      { topic: 'Advanced Techniques', description: 'Learn cutting-edge techniques and methodologies. Stay ahead with the latest industry practices.' },
      { topic: 'Architecture Design', description: 'Design scalable and maintainable architectures. Plan and structure large-scale applications.' },
      { topic: 'Performance Optimization', description: 'Optimize applications for maximum performance. Implement advanced optimization strategies.' },
      { topic: 'Security', description: 'Implement security best practices and measures. Protect applications from vulnerabilities and threats.' },
      { topic: 'Scalability', description: 'Build scalable systems that handle growth. Design applications for high performance and reliability.' },
      { topic: 'Enterprise Solutions', description: 'Develop enterprise-grade solutions. Work with complex business requirements and integrations.' },
      { topic: 'Advanced Integration', description: 'Integrate complex systems and services. Connect multiple platforms and technologies seamlessly.' },
      { topic: 'Innovation', description: 'Explore innovative approaches and emerging technologies. Stay at the forefront of industry developments.' },
      { topic: 'Best Practices', description: 'Master industry best practices and standards. Implement professional-grade development workflows.' },
      { topic: 'Project Management', description: 'Manage complex projects and teams. Learn project planning and execution strategies.' },
      { topic: 'Final Project', description: 'Develop a production-ready advanced application. Showcase expertise through a comprehensive enterprise-level project.' },
    ],
  };

  return genericTopics[level].slice(0, weeks).map((item, index) => ({ 
    week: index + 1, 
    topic: item.topic,
    description: item.description
  }));
};

/** Generate SEO-friendly course slug: e.g. excel-advanced, python-beginner, vibe-coding */
export const toCourseSlug = (baseSlug: string, level: 'Beginner' | 'Intermediate' | 'Advanced'): string => {
  if (baseSlug === 'vibe-coding') return 'vibe-coding';
  return `${baseSlug}-${level.toLowerCase()}`;
};

// Helper function to get course detail by slug (SEO-friendly: excel-advanced, python-beginner, or legacy: excela, pythonb)
export const getCourseBySlug = (slug: string): { course: CourseDetail; level: 'Beginner' | 'Intermediate' | 'Advanced' } | null => {
  // Special handling for Vibe Coding - single-level course
  if (slug === 'vibe-coding') {
    const course = courseDetails['Vibe Coding'];
    if (course) return { course, level: 'Beginner' };
    return null;
  }

  // SEO-friendly slug: e.g. excel-advanced, python-beginner, digital-marketing-intermediate
  const levelMatch = slug.match(/-(beginner|intermediate|advanced)$/i);
  if (levelMatch) {
    const levelStr = levelMatch[1].toLowerCase();
    const level: 'Beginner' | 'Intermediate' | 'Advanced' =
      levelStr === 'beginner' ? 'Beginner' : levelStr === 'intermediate' ? 'Intermediate' : 'Advanced';
    const baseSlug = slug.slice(0, -levelMatch[0].length); // part before -beginner/-intermediate/-advanced
    const course = Object.values(courseDetails).find(c => c.baseSlug === baseSlug);
    if (course) return { course, level };
    return null;
  }

  // Legacy slug support (excela, pythonb, etc.) for backward compatibility
  const legacyLevel = slug.endsWith('b') ? 'Beginner' : slug.endsWith('i') ? 'Intermediate' : slug.endsWith('a') ? 'Advanced' : null;
  if (!legacyLevel) return null;
  let baseSlug = slug.slice(0, -1);
  const slugToBaseSlug: Record<string, string> = {
    'pythonb': 'python', 'pythoni': 'python', 'pythona': 'python',
    'javab': 'java', 'javai': 'java', 'javaa': 'java',
    'htmlb': 'html', 'htmli': 'html', 'htmla': 'html',
    'cssb': 'css', 'cssi': 'css', 'cssa': 'css',
    'javascriptb': 'javascript', 'javascripti': 'javascript', 'javascripta': 'javascript',
    'reactb': 'react', 'reacti': 'react', 'reacta': 'react',
    'excelb': 'excel', 'exceli': 'excel', 'excela': 'excel',
    'mysqlb': 'mysql', 'mysqli': 'mysql', 'mysqla': 'mysql',
    'mongodbb': 'mongodb', 'mongodbi': 'mongodb', 'mongodba': 'mongodb',
    'digital-marketingb': 'digital-marketing', 'digital-marketingi': 'digital-marketing', 'digital-marketinga': 'digital-marketing',
    'mern-fullstackb': 'mern-fullstack', 'mern-fullstacki': 'mern-fullstack', 'mern-fullstacka': 'mern-fullstack',
    'python-fullstackb': 'python-fullstack', 'python-fullstacki': 'python-fullstack', 'python-fullstacka': 'python-fullstack',
    'vibe-codingb': 'vibe-coding', 'vibe-codingi': 'vibe-coding', 'vibe-codinga': 'vibe-coding',
  };
  if (slugToBaseSlug[slug]) baseSlug = slugToBaseSlug[slug];
  const course = Object.values(courseDetails).find(c => c.baseSlug === baseSlug);
  if (course) return { course, level: legacyLevel };
  return null;
};
