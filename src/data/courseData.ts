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
  'C Programming': {
    name: 'C Programming',
    baseSlug: 'c',
    category: 'Programming Languages',
    image: 'https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=800&h=500&fit=crop&q=80',
    description: 'Learn the fundamentals of C programming language from scratch. Master variables, data types, control structures, functions, and pointers.',
    objective: 'To equip you with fundamental C programming capabilities, enabling you to write efficient programs and understand low-level programming concepts.',
    skills: ['Basic Syntax', 'Data Structures', 'Pointers & Memory Management', 'File Handling'],
    instructor: {
      name: 'Sakthi Jayavel',
      role: 'Co-Director & Instructor',
      image: '/images/sakthi2.png',
      rating: 4.95,
      students: 150,
      bio: 'Sakthi Jayavel serves as Co-Director and Instructor at Savvy Axiss with extensive experience in programming languages and software development.',
    },
    syllabus: {
      Beginner: [
        { week: 1, topic: 'Introduction to C Programming, Variables, Data Types', description: 'Learn C programming basics, understand variables, constants, and fundamental data types (int, float, char). Set up development environment and write your first C program.' },
        { week: 2, topic: 'Operators, Control Structures (if-else, loops)', description: 'Master arithmetic, logical, and relational operators. Implement decision-making with if-else statements and repetition using for, while, and do-while loops.' },
        { week: 3, topic: 'Functions, Arrays, and String Handling', description: 'Create reusable functions, work with arrays for data storage, and manipulate strings using standard C string functions. Understand function parameters and return values.' },
        { week: 4, topic: 'Final Project - Basic Calculator Program', description: 'Build a complete calculator application using all learned concepts. Implement basic arithmetic operations with user input validation and error handling.' },
      ],
      Intermediate: [
        { week: 1, topic: 'Pointers and Memory Management', description: 'Understand pointer variables, address operators, and pointer arithmetic. Learn memory addresses, dereferencing, and pointer-to-pointer concepts.' },
        { week: 2, topic: 'Structures and Unions', description: 'Create custom data types using structures. Learn structure members, nested structures, and unions. Implement real-world data modeling.' },
        { week: 3, topic: 'File Handling and I/O Operations', description: 'Read from and write to files using file pointers. Master fopen, fclose, fread, fwrite functions. Handle text and binary file operations.' },
        { week: 4, topic: 'Dynamic Memory Allocation', description: 'Use malloc, calloc, realloc, and free functions. Manage memory dynamically, prevent memory leaks, and optimize memory usage in programs.' },
        { week: 5, topic: 'Advanced Data Structures', description: 'Implement stacks and queues using arrays and linked lists. Understand LIFO and FIFO principles with practical applications.' },
        { week: 6, topic: 'Preprocessor Directives', description: 'Use #define, #include, conditional compilation, and macros. Understand code organization and compilation process.' },
        { week: 7, topic: 'Error Handling and Debugging', description: 'Implement error handling techniques, use debugging tools, and write robust code that handles edge cases and unexpected inputs.' },
        { week: 8, topic: 'Final Project - Student Management System', description: 'Develop a complete student management system with file storage, data manipulation, and reporting features using all intermediate concepts.' },
      ],
      Advanced: [
        { week: 1, topic: 'Advanced Pointers and Memory Management', description: 'Master function pointers, pointer arrays, and complex pointer operations. Implement callback functions and advanced memory management patterns.' },
        { week: 2, topic: 'Complex Data Structures (Linked Lists, Trees)', description: 'Implement singly and doubly linked lists. Build binary trees, binary search trees, and understand tree traversal algorithms (inorder, preorder, postorder).' },
        { week: 3, topic: 'Algorithm Implementation', description: 'Implement sorting algorithms (bubble, quick, merge sort) and searching algorithms. Analyze time and space complexity of algorithms.' },
        { week: 4, topic: 'System Programming Basics', description: 'Work with system calls, process management, and low-level programming. Understand how C interacts with the operating system.' },
        { week: 5, topic: 'Multi-file Programs and Makefiles', description: 'Organize code across multiple files using header files. Create Makefiles for automated compilation and project management.' },
        { week: 6, topic: 'Advanced File Operations', description: 'Implement random file access, file locking, and advanced I/O operations. Work with different file formats and data serialization.' },
        { week: 7, topic: 'Performance Optimization', description: 'Optimize code for speed and memory efficiency. Use profiling tools, understand compiler optimizations, and write performance-critical code.' },
        { week: 8, topic: 'Memory Leak Detection', description: 'Identify and fix memory leaks using debugging tools. Implement memory management best practices and resource cleanup strategies.' },
        { week: 9, topic: 'Advanced Algorithms', description: 'Implement graph algorithms, dynamic programming, and advanced data structure operations. Solve complex algorithmic problems efficiently.' },
        { week: 10, topic: 'Code Optimization Techniques', description: 'Apply code refactoring, optimization patterns, and best practices. Write maintainable, efficient, and scalable C programs.' },
        { week: 11, topic: 'Project Architecture Design', description: 'Design large-scale C applications with proper architecture. Plan modular code structure, interfaces, and system design patterns.' },
        { week: 12, topic: 'Final Project - Complete Application Development', description: 'Build a comprehensive application integrating all advanced concepts. Implement a real-world project with proper architecture, documentation, and testing.' },
      ],
    },
  },
  'Python Programming': {
    name: 'Python Programming',
    baseSlug: 'python',
    category: 'Programming Languages',
    image: 'https://images.unsplash.com/photo-1526379095098-d400fd0bf935?w=800&h=500&fit=crop&q=80',
    description: 'Learn Python programming from basics to advanced. Master data structures, algorithms, and real-world applications.',
    objective: 'To equip you with advanced Python programming capabilities, enabling you to work with machine learning models, process large datasets, and implement data pipelines in Python for complex, real-world scenarios.',
    skills: ['Advanced Data Processing', 'Machine Learning Foundations', 'Automate Data Collection with APIs'],
    instructor: {
      name: 'Varsha Sekar',
      role: 'Director & Instructor',
      image: '/images/img1.png',
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
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=500&fit=crop&q=80',
    description: 'Comprehensive Java programming course covering OOP concepts, collections, multithreading, and Java frameworks.',
    objective: 'To master Java programming from fundamentals to advanced concepts, enabling you to build robust applications using Java frameworks and best practices.',
    skills: ['Object-Oriented Programming', 'Java Collections', 'Multithreading', 'Java Frameworks'],
    instructor: {
      name: 'Varsha Sekar',
      role: 'Director & Instructor',
      image: '/images/img1.png',
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
    image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&h=500&fit=crop&q=80',
    description: 'Master HTML5 fundamentals. Learn semantic markup, forms, multimedia, and modern web development practices.',
    objective: 'To master HTML5 and create well-structured, semantic, and accessible web pages using modern HTML standards.',
    skills: ['HTML5 Semantic Elements', 'Forms and Validation', 'Multimedia Integration', 'Accessibility'],
    instructor: {
      name: 'Rajalakshmi Venkatesan',
      role: 'Co-Director & Trainer',
      image: '/images/raji.png',
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
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=500&fit=crop&q=80',
    description: 'Learn CSS3 styling, layouts, animations, and responsive design. Create beautiful and modern web interfaces.',
    objective: 'To master CSS3 and create stunning, responsive, and animated web interfaces using modern CSS techniques and best practices.',
    skills: ['CSS3 Styling', 'Flexbox and Grid Layouts', 'Animations and Transitions', 'Responsive Design'],
    instructor: {
      name: 'Rajalakshmi Venkatesan',
      role: 'Co-Director & Trainer',
      image: '/images/raji.png',
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
    image: 'https://images.unsplash.com/photo-1579468118864-1b9ea3c0db4a?w=800&h=500&fit=crop&q=80',
    description: 'Master JavaScript programming. Learn ES6+, DOM manipulation, async programming, and modern JavaScript frameworks.',
    objective: 'To master JavaScript from fundamentals to advanced concepts, enabling you to build interactive web applications and work with modern JavaScript frameworks.',
    skills: ['ES6+ Features', 'DOM Manipulation', 'Async Programming', 'Modern Frameworks'],
    instructor: {
      name: 'Rajalakshmi Venkatesan',
      role: 'Co-Director & Trainer',
      image: '/images/raji.png',
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
  'Excel': {
    name: 'Excel',
    baseSlug: 'excel',
    category: 'Microsoft Office',
    image: 'https://images.unsplash.com/photo-1589829085413-56de8ae18c73?w=800&h=500&fit=crop&q=80',
    description: 'Master Microsoft Excel. Learn formulas, functions, data analysis, pivot tables, charts, and automation.',
    objective: 'To master Microsoft Excel from basic spreadsheet creation to advanced data analysis, enabling you to efficiently manage and analyze data.',
    skills: ['Formulas and Functions', 'Data Analysis', 'Pivot Tables', 'Charts and Automation'],
    instructor: {
      name: 'Shalini Baskaran',
      role: 'Founder & CEO',
      image: '/images/img2.png',
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
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=500&fit=crop&q=80',
    description: 'Master digital marketing strategies. Learn SEO, social media marketing, PPC advertising, content marketing, email marketing, and analytics.',
    objective: 'To master digital marketing strategies and tools, enabling you to create effective marketing campaigns and drive business growth through digital channels.',
    skills: ['SEO Optimization', 'Social Media Marketing', 'PPC Advertising', 'Content Marketing', 'Analytics'],
    instructor: {
      name: 'Shalini Baskaran',
      role: 'Founder & CEO',
      image: '/images/img2.png',
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
};

// Default instructor data
const defaultInstructor = {
  name: 'Varsha Sekar',
  role: 'Director & Instructor',
  image: '/images/img1.png',
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
    'C++ Programming': {
      Beginner: [
        { topic: 'Introduction to C++, OOP Basics', description: 'Learn C++ syntax, understand object-oriented programming fundamentals, and set up your development environment. Write your first C++ program with classes.' },
        { topic: 'Classes and Objects', description: 'Create classes, define objects, and implement member functions. Understand constructors, destructors, and encapsulation principles in C++.' },
        { topic: 'Inheritance and Polymorphism', description: 'Implement inheritance hierarchies, use virtual functions, and understand polymorphism. Create derived classes and override base class methods.' },
        { topic: 'Final Project', description: 'Build a complete C++ application demonstrating OOP principles. Create a project that uses classes, inheritance, and polymorphism effectively.' },
      ],
      Intermediate: [
        { topic: 'Advanced OOP Concepts', description: 'Master abstract classes, interfaces, and multiple inheritance. Understand access specifiers and advanced OOP design patterns.' },
        { topic: 'Templates and STL', description: 'Create function and class templates. Use Standard Template Library containers (vector, list, map) and algorithms for efficient programming.' },
        { topic: 'Exception Handling', description: 'Implement try-catch blocks, create custom exceptions, and handle errors gracefully. Build robust error handling mechanisms.' },
        { topic: 'File I/O', description: 'Read from and write to files using fstream. Handle text and binary file operations, and manage file streams effectively.' },
        { topic: 'Memory Management', description: 'Use new and delete operators, understand memory allocation, and prevent memory leaks. Master dynamic memory management in C++.' },
        { topic: 'Operator Overloading', description: 'Overload operators for custom classes. Create intuitive interfaces and implement operator overloading best practices.' },
        { topic: 'Advanced Features', description: 'Use lambda expressions, smart pointers, and move semantics. Implement modern C++ features for efficient programming.' },
        { topic: 'Final Project', description: 'Develop a comprehensive C++ application using templates, STL, exception handling, and advanced features. Build a production-ready project.' },
      ],
      Advanced: [
        { topic: 'Advanced Templates', description: 'Master template specialization, variadic templates, and template metaprogramming. Create highly generic and reusable code.' },
        { topic: 'STL Containers and Algorithms', description: 'Deep dive into STL containers and algorithms. Optimize data structure choices and algorithm implementations.' },
        { topic: 'Smart Pointers', description: 'Use unique_ptr, shared_ptr, and weak_ptr. Implement RAII principles and manage resources automatically with smart pointers.' },
        { topic: 'Multithreading', description: 'Create multithreaded applications using std::thread. Implement thread synchronization, mutexes, and concurrent programming patterns.' },
        { topic: 'Design Patterns', description: 'Implement creational, structural, and behavioral design patterns in C++. Apply patterns to solve common design problems.' },
        { topic: 'Performance Optimization', description: 'Profile and optimize C++ code. Use compiler optimizations, understand cache behavior, and write high-performance code.' },
        { topic: 'Advanced Memory Management', description: 'Implement custom allocators, understand memory pools, and optimize memory usage for performance-critical applications.' },
        { topic: 'Metaprogramming', description: 'Use template metaprogramming techniques. Create compile-time computations and type-safe generic code.' },
        { topic: 'Concurrency', description: 'Master concurrent programming with async/await, futures, and promises. Build thread-safe and efficient concurrent applications.' },
        { topic: 'Advanced Project Architecture', description: 'Design large-scale C++ applications. Plan architecture, organize code, and implement best practices for enterprise projects.' },
        { topic: 'System Programming', description: 'Work with system calls, process management, and low-level programming. Interface with operating system APIs.' },
        { topic: 'Final Project', description: 'Build an enterprise-level C++ application integrating all advanced concepts. Implement a complete system with proper architecture and optimization.' },
      ],
    },
    'C# Programming': {
      Beginner: [
        { topic: 'Introduction to C# and .NET', description: 'Learn C# syntax, understand .NET framework, and set up Visual Studio. Write your first C# console application and understand the .NET ecosystem.' },
        { topic: 'Variables, Data Types, Operators', description: 'Work with C# data types, declare variables, and use operators. Understand value types, reference types, and type conversion in C#.' },
        { topic: 'Control Structures and Methods', description: 'Implement if-else, switch, and loops. Create methods with parameters, return values, and understand method overloading.' },
        { topic: 'Final Project', description: 'Build a basic C# application like a console calculator or simple game using all beginner concepts.' },
      ],
      Intermediate: [
        { topic: 'Object-Oriented Programming', description: 'Create classes and objects in C#. Implement inheritance, polymorphism, and encapsulation. Use constructors and properties.' },
        { topic: 'Collections and Generics', description: 'Work with List, Dictionary, and other collections. Use generics for type-safe collections and create generic methods.' },
        { topic: 'Exception Handling', description: 'Handle exceptions with try-catch-finally blocks. Create custom exceptions and implement robust error handling.' },
        { topic: 'File I/O', description: 'Read from and write to files using StreamReader, StreamWriter, and File class. Handle file operations and manage file streams.' },
        { topic: 'LINQ', description: 'Query data using Language Integrated Query. Use LINQ to Objects, filter, sort, and transform data collections efficiently.' },
        { topic: 'Delegates and Events', description: 'Use delegates for method references. Implement events and event handlers for decoupled communication between objects.' },
        { topic: 'Windows Forms', description: 'Create desktop applications with Windows Forms. Design user interfaces, handle events, and build interactive desktop apps.' },
        { topic: 'Final Project', description: 'Develop a complete Windows Forms application with database connectivity, file handling, and user interface.' },
      ],
      Advanced: [
        { topic: 'Advanced C# Features', description: 'Master async/await, LINQ advanced queries, and expression trees. Use advanced language features for efficient programming.' },
        { topic: 'Async/Await Programming', description: 'Implement asynchronous programming patterns. Handle async operations, use Task and async methods effectively.' },
        { topic: 'Entity Framework', description: 'Use Entity Framework for database operations. Implement Code First and Database First approaches, work with migrations.' },
        { topic: 'ASP.NET Core', description: 'Build web applications with ASP.NET Core. Create controllers, views, and implement MVC pattern in modern web development.' },
        { topic: 'Web API Development', description: 'Develop RESTful APIs with ASP.NET Core Web API. Handle HTTP requests, implement routing, and create API endpoints.' },
        { topic: 'Dependency Injection', description: 'Implement dependency injection patterns. Use built-in DI container, register services, and manage object lifetimes.' },
        { topic: 'Design Patterns', description: 'Apply design patterns in C#. Implement Repository, Unit of Work, and other common patterns for maintainable code.' },
        { topic: 'Testing', description: 'Write unit tests with xUnit or NUnit. Use mocking frameworks and implement test-driven development practices.' },
        { topic: 'Performance Optimization', description: 'Optimize C# applications for performance. Profile code, optimize database queries, and improve application speed.' },
        { topic: 'Advanced Architecture', description: 'Design scalable application architectures. Implement clean architecture, SOLID principles, and separation of concerns.' },
        { topic: 'Cloud Integration', description: 'Deploy applications to Azure or AWS. Integrate cloud services, use cloud storage, and implement cloud-based solutions.' },
        { topic: 'Final Project', description: 'Build an enterprise-level C# application with ASP.NET Core, Entity Framework, and cloud deployment.' },
      ],
    },
    'SQL': {
      Beginner: [
        { topic: 'Introduction to SQL and Databases', description: 'Understand database concepts, relational database model, and SQL basics. Learn database terminology and set up a database environment.' },
        { topic: 'Basic SELECT Queries', description: 'Write SELECT statements to retrieve data. Use WHERE clause for filtering and ORDER BY for sorting query results.' },
        { topic: 'Filtering and Sorting Data', description: 'Apply multiple conditions with AND, OR, NOT operators. Use comparison operators and sort data in ascending or descending order.' },
        { topic: 'Final Project', description: 'Create a database and write queries to retrieve and filter data. Build a simple data retrieval system.' },
      ],
      Intermediate: [
        { topic: 'Joins and Subqueries', description: 'Join multiple tables using INNER, LEFT, RIGHT, and FULL joins. Write subqueries and correlated subqueries for complex data retrieval.' },
        { topic: 'Aggregate Functions', description: 'Use COUNT, SUM, AVG, MIN, MAX functions. Group data with GROUP BY and filter groups with HAVING clause.' },
        { topic: 'Group By and Having', description: 'Group data by columns, apply aggregate functions to groups, and filter grouped results using HAVING clause.' },
        { topic: 'Stored Procedures', description: 'Create and execute stored procedures. Pass parameters, return values, and implement reusable database logic.' },
        { topic: 'Functions and Views', description: 'Create user-defined functions and database views. Simplify complex queries and improve code reusability.' },
        { topic: 'Transactions', description: 'Manage database transactions with COMMIT and ROLLBACK. Ensure data integrity and handle transaction isolation levels.' },
        { topic: 'Indexes and Optimization', description: 'Create indexes to improve query performance. Understand index types and optimize database queries.' },
        { topic: 'Final Project', description: 'Build a complete database system with tables, relationships, stored procedures, and optimized queries.' },
      ],
      Advanced: [
        { topic: 'Advanced Query Techniques', description: 'Master complex SQL queries, use CASE statements, and implement advanced filtering techniques for sophisticated data retrieval.' },
        { topic: 'Complex Joins and CTEs', description: 'Implement complex multi-table joins and use Common Table Expressions (CTEs) for recursive queries and query simplification.' },
        { topic: 'Window Functions', description: 'Use window functions like ROW_NUMBER, RANK, and aggregate functions with OVER clause for advanced analytical queries.' },
        { topic: 'Performance Tuning', description: 'Analyze query execution plans, optimize slow queries, and implement database performance best practices.' },
        { topic: 'Database Design', description: 'Design normalized database schemas, understand normalization forms, and create efficient database structures.' },
        { topic: 'Security and Permissions', description: 'Implement database security, manage user permissions, and protect sensitive data with proper access controls.' },
        { topic: 'Backup and Recovery', description: 'Create database backups, implement recovery strategies, and ensure data availability and disaster recovery.' },
        { topic: 'Advanced Features', description: 'Use advanced SQL features like triggers, cursors, and dynamic SQL for complex database operations.' },
        { topic: 'Data Warehousing', description: 'Design data warehouses, implement ETL processes, and work with dimensional modeling for business intelligence.' },
        { topic: 'Business Intelligence', description: 'Create reports, build data cubes, and implement business intelligence solutions using SQL Server Analysis Services.' },
        { topic: 'Advanced Optimization', description: 'Implement query optimization techniques, use query hints, and optimize database performance at enterprise scale.' },
        { topic: 'Final Project', description: 'Design and implement a complete database system with advanced features, optimization, and business intelligence capabilities.' },
      ],
    },
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
    'Sqlite': {
      Beginner: [
        { topic: 'Introduction to SQLite', description: 'Understand SQLite database engine, its features, and use cases. Install SQLite and learn basic database operations.' },
        { topic: 'Database Creation', description: 'Create SQLite databases, define tables, and understand SQLite data types. Work with SQLite command-line tools.' },
        { topic: 'Basic SQL Operations', description: 'Perform CRUD operations in SQLite. Write SELECT, INSERT, UPDATE, and DELETE queries for data management.' },
        { topic: 'Final Project', description: 'Create a SQLite database application with multiple tables and basic data operations.' },
      ],
      Intermediate: [
        { topic: 'Advanced Queries', description: 'Write complex SQL queries with joins, subqueries, and aggregations. Use SQLite-specific functions and features.' },
        { topic: 'Transactions and Concurrency', description: 'Manage transactions in SQLite, handle concurrent access, and implement proper transaction control.' },
        { topic: 'Indexes and Optimization', description: 'Create indexes for performance, analyze query plans, and optimize SQLite database queries.' },
        { topic: 'Attach and Detach Databases', description: 'Attach multiple databases, query across databases, and manage multiple SQLite database files.' },
        { topic: 'Backup and Restore', description: 'Backup SQLite databases, implement backup strategies, and restore databases when needed.' },
        { topic: 'Performance Tuning', description: 'Optimize SQLite performance, use PRAGMA settings, and implement performance best practices.' },
        { topic: 'Application Integration', description: 'Integrate SQLite with programming languages. Use SQLite in mobile apps and desktop applications.' },
        { topic: 'Final Project', description: 'Build a complete application with SQLite database integration, transactions, and optimized queries.' },
      ],
      Advanced: [
        { topic: 'Advanced SQLite Features', description: 'Use SQLite advanced features like FTS (Full-Text Search), JSON support, and virtual tables for specialized applications.' },
        { topic: 'Full-Text Search', description: 'Implement full-text search in SQLite using FTS5. Create searchable text databases and optimize search performance.' },
        { topic: 'JSON Support', description: 'Work with JSON data in SQLite. Store, query, and manipulate JSON documents using SQLite JSON functions.' },
        { topic: 'Performance Optimization', description: 'Optimize SQLite for high-performance applications. Use WAL mode, optimize schema, and tune configuration.' },
        { topic: 'Concurrent Access', description: 'Handle concurrent database access, implement proper locking, and manage multi-threaded SQLite applications.' },
        { topic: 'Advanced Queries', description: 'Write sophisticated queries using window functions, CTEs, and advanced SQL features in SQLite.' },
        { topic: 'Extension Development', description: 'Create SQLite extensions, add custom functions, and extend SQLite capabilities for specialized needs.' },
        { topic: 'Mobile Integration', description: 'Use SQLite in mobile applications (Android, iOS). Implement local data storage and synchronization strategies.' },
        { topic: 'Advanced Architecture', description: 'Design scalable SQLite architectures, implement data partitioning, and handle large datasets efficiently.' },
        { topic: 'Data Analysis', description: 'Use SQLite for data analysis tasks. Perform complex analytical queries and generate reports from SQLite databases.' },
        { topic: 'Enterprise Usage', description: 'Implement SQLite in enterprise applications, handle large-scale deployments, and ensure data integrity.' },
        { topic: 'Final Project', description: 'Develop a production-ready application using advanced SQLite features, optimization, and enterprise patterns.' },
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
    'Word Document': {
      Beginner: [
        { topic: 'Introduction to Microsoft Word', description: 'Learn Word interface, navigate documents, and understand basic features. Create, save, and format simple documents.' },
        { topic: 'Basic Document Creation and Formatting', description: 'Format text, paragraphs, and pages. Use fonts, styles, and basic formatting tools to create professional documents.' },
      ],
      Intermediate: [
        { topic: 'Advanced Formatting', description: 'Use advanced formatting features including styles, themes, and document templates. Create consistent, professional document layouts.' },
        { topic: 'Styles and Templates', description: 'Create and modify styles, build custom templates, and use template features for efficient document creation.' },
        { topic: 'Tables and Graphics', description: 'Insert and format tables, add images and graphics, and create visually appealing documents with multimedia elements.' },
        { topic: 'Mail Merge', description: 'Perform mail merge operations, create personalized documents, and automate bulk document generation from data sources.' },
      ],
      Advanced: [
        { topic: 'Advanced Features', description: 'Use advanced Word features including cross-references, footnotes, endnotes, and document navigation tools.' },
        { topic: 'Macros and Automation', description: 'Record and edit macros, automate repetitive tasks, and use VBA to customize Word functionality.' },
        { topic: 'Collaboration Tools', description: 'Use track changes, comments, and review features. Collaborate on documents with multiple users effectively.' },
        { topic: 'Document Security', description: 'Protect documents with passwords, restrict editing, and implement document security measures.' },
        { topic: 'Advanced Templates', description: 'Create complex templates with content controls, form fields, and automated document generation features.' },
        { topic: 'Customization', description: 'Customize Word interface, create custom ribbons, and personalize Word for efficient workflow.' },
      ],
    },
    'PowerPoint': {
      Beginner: [
        { topic: 'Introduction to PowerPoint', description: 'Learn PowerPoint interface, create presentations, and understand basic slide operations. Add and format text on slides.' },
        { topic: 'Basic Slide Creation and Design', description: 'Create slides, apply themes, and format slide layouts. Add text, images, and basic design elements to presentations.' },
      ],
      Intermediate: [
        { topic: 'Advanced Design Techniques', description: 'Use advanced design features, create custom slide layouts, and apply professional design principles to presentations.' },
        { topic: 'Animations and Transitions', description: 'Add slide transitions and object animations. Create engaging presentations with motion effects and timing controls.' },
        { topic: 'Multimedia Integration', description: 'Insert audio, video, and interactive elements. Enhance presentations with multimedia content and hyperlinks.' },
        { topic: 'Master Slides', description: 'Create and modify slide masters, use slide layouts, and maintain consistent design across presentations.' },
      ],
      Advanced: [
        { topic: 'Advanced Animations', description: 'Create complex animation sequences, use animation triggers, and build sophisticated animated presentations.' },
        { topic: 'Interactive Presentations', description: 'Build interactive presentations with hyperlinks, action buttons, and navigation controls for engaging user experiences.' },
        { topic: 'Video and Audio', description: 'Edit embedded videos, synchronize audio with slides, and create multimedia-rich presentations with professional audio/video integration.' },
        { topic: 'Collaboration', description: 'Collaborate on presentations, use co-authoring features, and manage presentation versions with multiple contributors.' },
        { topic: 'Advanced Design', description: 'Create custom design templates, use advanced graphics tools, and implement professional presentation design standards.' },
        { topic: 'Automation', description: 'Automate presentation creation, use macros, and streamline presentation workflows with automation tools.' },
      ],
    },
    'Access': {
      Beginner: [
        { topic: 'Introduction to Microsoft Access', description: 'Learn Access interface, understand database concepts, and create your first Access database with tables.' },
        { topic: 'Database Creation and Tables', description: 'Create databases, design tables, define fields and data types, and establish primary keys and relationships.' },
      ],
      Intermediate: [
        { topic: 'Queries and Forms', description: 'Create queries to retrieve and manipulate data. Build forms for data entry and user interface design.' },
        { topic: 'Reports and Relationships', description: 'Generate reports from database data. Establish table relationships and enforce referential integrity.' },
        { topic: 'Basic Macros', description: 'Create macros to automate tasks, add functionality to forms, and streamline database operations.' },
      ],
      Advanced: [
        { topic: 'Advanced Queries', description: 'Write complex SQL queries, use parameter queries, and implement advanced data retrieval and manipulation techniques.' },
        { topic: 'VBA Programming', description: 'Write VBA code to customize Access applications. Create modules, functions, and event-driven programming solutions.' },
        { topic: 'Database Optimization', description: 'Optimize Access database performance, compact databases, and implement best practices for efficient database operations.' },
        { topic: 'Advanced Forms', description: 'Create sophisticated forms with subforms, conditional formatting, and advanced form controls for complex user interfaces.' },
        { topic: 'Integration', description: 'Integrate Access with other Office applications, import/export data, and connect to external data sources.' },
        { topic: 'Enterprise Features', description: 'Implement Access in enterprise environments, use Access with SQL Server, and deploy Access solutions.' },
      ],
    },
    'ASP.NET': {
      Beginner: [
        { topic: 'Introduction to ASP.NET', description: 'Understand ASP.NET framework, web development basics, and set up development environment. Create your first ASP.NET web application.' },
        { topic: 'Web Forms Basics', description: 'Create web forms, add server controls, and understand page lifecycle. Build interactive web pages with ASP.NET Web Forms.' },
        { topic: 'Server Controls', description: 'Use ASP.NET server controls (buttons, textboxes, dropdowns). Handle events and manage server-side control interactions.' },
        { topic: 'Final Project', description: 'Build a basic ASP.NET web application with forms, server controls, and basic functionality.' },
      ],
      Intermediate: [
        { topic: 'MVC Pattern', description: 'Understand Model-View-Controller architecture. Create controllers, views, and models in ASP.NET MVC applications.' },
        { topic: 'Razor Pages', description: 'Build web pages using Razor syntax. Create dynamic content, use Razor helpers, and implement page models.' },
        { topic: 'Data Access', description: 'Connect to databases, use Entity Framework, and implement data access layers in ASP.NET applications.' },
        { topic: 'Authentication', description: 'Implement user authentication and authorization. Use ASP.NET Identity for user management and security.' },
        { topic: 'Routing', description: 'Configure URL routing, create custom routes, and implement RESTful URL patterns in ASP.NET applications.' },
        { topic: 'Middleware', description: 'Use middleware pipeline, create custom middleware, and implement cross-cutting concerns in ASP.NET Core.' },
        { topic: 'API Development', description: 'Build RESTful APIs with ASP.NET Core Web API. Create API controllers and handle HTTP requests and responses.' },
        { topic: 'Final Project', description: 'Develop a complete ASP.NET MVC application with authentication, data access, and API integration.' },
      ],
      Advanced: [
        { topic: 'Advanced MVC', description: 'Implement advanced MVC patterns, use view components, and create sophisticated MVC architectures with best practices.' },
        { topic: 'Dependency Injection', description: 'Master dependency injection container, register services, and implement IoC patterns in ASP.NET Core applications.' },
        { topic: 'Entity Framework Core', description: 'Use EF Core for advanced data access, implement migrations, and work with complex data models and relationships.' },
        { topic: 'Web API', description: 'Build sophisticated REST APIs, implement API versioning, and create scalable API architectures with proper documentation.' },
        { topic: 'SignalR', description: 'Implement real-time communication with SignalR. Create chat applications and live updates using WebSocket technology.' },
        { topic: 'Security', description: 'Implement advanced security measures, protect against attacks, and use security best practices in ASP.NET applications.' },
        { topic: 'Performance', description: 'Optimize ASP.NET applications for performance. Implement caching, optimize database queries, and improve application speed.' },
        { topic: 'Deployment', description: 'Deploy ASP.NET applications to production. Use Docker, cloud platforms, and implement CI/CD pipelines for deployment.' },
        { topic: 'Microservices', description: 'Design and implement microservices architecture. Build distributed systems and service communication patterns.' },
        { topic: 'Cloud Integration', description: 'Integrate with cloud services, use Azure or AWS features, and deploy cloud-native ASP.NET applications.' },
        { topic: 'Advanced Architecture', description: 'Design enterprise-level ASP.NET architectures. Implement clean architecture, CQRS, and advanced design patterns.' },
        { topic: 'Final Project', description: 'Build a production-ready enterprise ASP.NET application with microservices, cloud integration, and advanced features.' },
      ],
    },
    'VB.NET': {
      Beginner: [
        { topic: 'Introduction to VB.NET', description: 'Learn VB.NET syntax, understand .NET framework, and set up Visual Studio. Write your first VB.NET application.' },
        { topic: 'Basic Syntax and Controls', description: 'Master VB.NET syntax, work with variables, and use Windows Forms controls to build user interfaces.' },
        { topic: 'Windows Forms', description: 'Create Windows desktop applications with forms, controls, and event handling. Build interactive desktop applications.' },
        { topic: 'Final Project', description: 'Develop a basic Windows Forms application with multiple forms, controls, and user interactions.' },
      ],
      Intermediate: [
        { topic: 'Advanced Controls', description: 'Use advanced Windows Forms controls, create custom controls, and implement sophisticated user interface elements.' },
        { topic: 'Database Connectivity', description: 'Connect VB.NET applications to databases using ADO.NET. Perform CRUD operations and manage database connections.' },
        { topic: 'Error Handling', description: 'Implement Try-Catch blocks, handle exceptions gracefully, and create robust error handling mechanisms in VB.NET.' },
        { topic: 'File Operations', description: 'Read from and write to files, work with file streams, and implement file management operations in VB.NET applications.' },
        { topic: 'OOP in VB.NET', description: 'Create classes and objects, implement inheritance and polymorphism, and apply object-oriented principles in VB.NET.' },
        { topic: 'Collections', description: 'Work with arrays, lists, dictionaries, and other collections. Use LINQ for querying collections in VB.NET.' },
        { topic: 'Events and Delegates', description: 'Use events and delegates for decoupled communication. Implement event-driven programming patterns in VB.NET.' },
        { topic: 'Final Project', description: 'Build a complete Windows Forms application with database connectivity, file operations, and advanced features.' },
      ],
      Advanced: [
        { topic: 'Advanced VB.NET Features', description: 'Master advanced VB.NET language features, use LINQ, and implement modern programming patterns.' },
        { topic: 'LINQ', description: 'Query data using Language Integrated Query in VB.NET. Use LINQ to Objects, LINQ to SQL, and transform data efficiently.' },
        { topic: 'WPF Applications', description: 'Build Windows Presentation Foundation applications. Create modern desktop UIs with XAML and data binding.' },
        { topic: 'Web Development', description: 'Develop web applications with ASP.NET using VB.NET. Create web forms and MVC applications with VB.NET backend.' },
        { topic: 'Advanced Database', description: 'Use Entity Framework with VB.NET, implement advanced data access patterns, and work with complex data models.' },
        { topic: 'Multithreading', description: 'Implement multithreading in VB.NET applications. Use threads, tasks, and async programming for concurrent operations.' },
        { topic: 'Performance', description: 'Optimize VB.NET applications for performance. Profile code, optimize database access, and improve application speed.' },
        { topic: 'Deployment', description: 'Package and deploy VB.NET applications. Create installers, configure deployment settings, and distribute applications.' },
        { topic: 'Enterprise Features', description: 'Implement enterprise-level features, use design patterns, and build scalable VB.NET applications for business use.' },
        { topic: 'Integration', description: 'Integrate VB.NET applications with other systems, use web services, and implement integration patterns.' },
        { topic: 'Advanced Architecture', description: 'Design sophisticated application architectures, implement clean code principles, and build maintainable VB.NET solutions.' },
        { topic: 'Final Project', description: 'Develop an enterprise-level VB.NET application with advanced features, proper architecture, and production-ready code.' },
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

// Helper function to get course detail by slug
export const getCourseBySlug = (slug: string): { course: CourseDetail; level: 'Beginner' | 'Intermediate' | 'Advanced' } | null => {
  const level = slug.endsWith('b') ? 'Beginner' : slug.endsWith('i') ? 'Intermediate' : slug.endsWith('a') ? 'Advanced' : null;
  if (!level) return null;
  
  // Handle special cases for slugs
  let baseSlug = slug.slice(0, -1);
  
  // Map slug variations to course names
  const slugToBaseSlug: Record<string, string> = {
    'cb': 'c',
    'ci': 'c',
    'ca': 'c',
    'c++b': 'c++',
    'c++i': 'c++',
    'c++a': 'c++',
    'pythonb': 'python',
    'pythoni': 'python',
    'pythona': 'python',
    'javab': 'java',
    'javai': 'java',
    'javaa': 'java',
    'csharpb': 'csharp',
    'csharpi': 'csharp',
    'csharpa': 'csharp',
    'htmlb': 'html',
    'htmli': 'html',
    'htmla': 'html',
    'cssb': 'css',
    'cssi': 'css',
    'cssa': 'css',
    'javascriptb': 'javascript',
    'javascripti': 'javascript',
    'javascripta': 'javascript',
    'aspb': 'asp',
    'aspi': 'asp',
    'aspa': 'asp',
    'vbb': 'vb',
    'vbi': 'vb',
    'vba': 'vb',
    'wordb': 'word',
    'wordi': 'word',
    'worda': 'word',
    'excelb': 'excel',
    'exceli': 'excel',
    'excela': 'excel',
    'pptb': 'ppt',
    'ppti': 'ppt',
    'ppta': 'ppt',
    'accessb': 'access',
    'accessi': 'access',
    'accessa': 'access',
    'sqlb': 'sql',
    'sqli': 'sql',
    'sqla': 'sql',
    'mysqlb': 'mysql',
    'mysqli': 'mysql',
    'mysqla': 'mysql',
    'sqliteb': 'sqlite',
    'sqlitei': 'sqlite',
    'sqlitea': 'sqlite',
    'mongodbb': 'mongodb',
    'mongodbi': 'mongodb',
    'mongodba': 'mongodb',
    'digital-marketingb': 'digital-marketing',
    'digital-marketingi': 'digital-marketing',
    'digital-marketinga': 'digital-marketing',
  };

  if (slugToBaseSlug[slug]) {
    baseSlug = slugToBaseSlug[slug];
  }
  
  const course = Object.values(courseDetails).find(c => c.baseSlug === baseSlug);
  
  if (course) {
    return { course, level };
  }

  // Generate default course data for courses not in courseDetails
  const courseNameMap: Record<string, string> = {
    'c': 'C Programming',
    'c++': 'C++ Programming',
    'python': 'Python Programming',
    'java': 'Java Programming',
    'csharp': 'C# Programming',
    'html': 'HTML',
    'css': 'CSS',
    'javascript': 'JavaScript',
    'asp': 'ASP.NET',
    'vb': 'VB.NET',
    'word': 'Word Document',
    'excel': 'Excel',
    'ppt': 'PowerPoint',
    'access': 'Access',
    'sql': 'SQL',
    'mysql': 'MySQL',
    'sqlite': 'Sqlite',
    'mongodb': 'MongoDB',
    'digital-marketing': 'Digital Marketing',
  };

  const courseName = courseNameMap[baseSlug];
  if (!courseName) return null;

  const defaultCourse: CourseDetail = {
    name: courseName,
    baseSlug,
    category: 'Programming Languages',
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&h=500&fit=crop',
    description: `Learn ${courseName} from fundamentals to advanced concepts. Master the skills needed to excel in this field.`,
    objective: `To equip you with comprehensive ${courseName} capabilities, enabling you to work on real-world projects and applications.`,
    skills: ['Fundamentals', 'Practical Application', 'Best Practices', 'Real-world Projects'],
    instructor: defaultInstructor,
    syllabus: {
      Beginner: generateDefaultSyllabus(courseName, 'Beginner'),
      Intermediate: generateDefaultSyllabus(courseName, 'Intermediate'),
      Advanced: generateDefaultSyllabus(courseName, 'Advanced'),
    },
  };

  return { course: defaultCourse, level };
};

