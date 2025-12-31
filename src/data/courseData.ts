// Course data with syllabus for all courses
export interface SyllabusItem {
  week: number;
  topic: string;
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
        { week: 1, topic: 'Introduction to C Programming, Variables, Data Types' },
        { week: 2, topic: 'Operators, Control Structures (if-else, loops)' },
        { week: 3, topic: 'Functions, Arrays, and String Handling' },
        { week: 4, topic: 'Final Project - Basic Calculator Program' },
      ],
      Intermediate: [
        { week: 1, topic: 'Pointers and Memory Management' },
        { week: 2, topic: 'Structures and Unions' },
        { week: 3, topic: 'File Handling and I/O Operations' },
        { week: 4, topic: 'Dynamic Memory Allocation' },
        { week: 5, topic: 'Advanced Data Structures' },
        { week: 6, topic: 'Preprocessor Directives' },
        { week: 7, topic: 'Error Handling and Debugging' },
        { week: 8, topic: 'Final Project - Student Management System' },
      ],
      Advanced: [
        { week: 1, topic: 'Advanced Pointers and Memory Management' },
        { week: 2, topic: 'Complex Data Structures (Linked Lists, Trees)' },
        { week: 3, topic: 'Algorithm Implementation' },
        { week: 4, topic: 'System Programming Basics' },
        { week: 5, topic: 'Multi-file Programs and Makefiles' },
        { week: 6, topic: 'Advanced File Operations' },
        { week: 7, topic: 'Performance Optimization' },
        { week: 8, topic: 'Memory Leak Detection' },
        { week: 9, topic: 'Advanced Algorithms' },
        { week: 10, topic: 'Code Optimization Techniques' },
        { week: 11, topic: 'Project Architecture Design' },
        { week: 12, topic: 'Final Project - Complete Application Development' },
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
        { week: 1, topic: 'Introduction to Python, Variables, Data Types' },
        { week: 2, topic: 'Loops and Data Structures (Lists, Tuples, Dictionaries)' },
        { week: 3, topic: 'Functions and Error Handling' },
        { week: 4, topic: 'Final Project - Simple Python Application' },
      ],
      Intermediate: [
        { week: 1, topic: 'Working with Modules and Packages' },
        { week: 2, topic: 'File Handling and Exception Management' },
        { week: 3, topic: 'Working with Data Collections' },
        { week: 4, topic: 'Object-Oriented Programming in Python' },
        { week: 5, topic: 'Regular Expressions' },
        { week: 6, topic: 'Database Connectivity' },
        { week: 7, topic: 'Working with APIs' },
        { week: 8, topic: 'Final Project - Data Processing Application' },
      ],
      Advanced: [
        { week: 1, topic: 'Introduction to Python' },
        { week: 2, topic: 'Loops and Data Structures' },
        { week: 3, topic: 'Functions and Error Handling' },
        { week: 4, topic: 'Final Project' },
        { week: 5, topic: 'Working with Modules and Packages' },
        { week: 6, topic: 'File Handling and Exception Management' },
        { week: 7, topic: 'Working with Data Collections' },
        { week: 8, topic: 'Final Project' },
        { week: 9, topic: 'Advanced Data Processing with Pandas' },
        { week: 10, topic: 'Machine Learning Foundations' },
        { week: 11, topic: 'Advanced Topics - APIs and Web Scraping' },
        { week: 12, topic: 'Final Project' },
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
        { week: 1, topic: 'Introduction to Java, JDK Setup, Variables, Data Types' },
        { week: 2, topic: 'Control Structures, Arrays, and Methods' },
        { week: 3, topic: 'Introduction to Object-Oriented Programming' },
        { week: 4, topic: 'Final Project - Basic Java Application' },
      ],
      Intermediate: [
        { week: 1, topic: 'Advanced OOP - Inheritance, Polymorphism, Abstraction' },
        { week: 2, topic: 'Exception Handling and File I/O' },
        { week: 3, topic: 'Java Collections Framework' },
        { week: 4, topic: 'Generics and Lambda Expressions' },
        { week: 5, topic: 'Multithreading Basics' },
        { week: 6, topic: 'Networking in Java' },
        { week: 7, topic: 'JDBC and Database Connectivity' },
        { week: 8, topic: 'Final Project - Desktop Application' },
      ],
      Advanced: [
        { week: 1, topic: 'Advanced Multithreading and Concurrency' },
        { week: 2, topic: 'Java Design Patterns' },
        { week: 3, topic: 'Spring Framework Basics' },
        { week: 4, topic: 'Spring Boot Development' },
        { week: 5, topic: 'RESTful Web Services' },
        { week: 6, topic: 'JPA and Hibernate' },
        { week: 7, topic: 'Security in Java Applications' },
        { week: 8, topic: 'Microservices Architecture' },
        { week: 9, topic: 'Testing and Debugging' },
        { week: 10, topic: 'Performance Optimization' },
        { week: 11, topic: 'Deployment and DevOps' },
        { week: 12, topic: 'Final Project - Enterprise Application' },
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
        { week: 1, topic: 'Introduction to HTML, Basic Tags, Document Structure' },
        { week: 2, topic: 'Text Formatting, Links, and Images' },
        { week: 3, topic: 'Lists, Tables, and Forms' },
        { week: 4, topic: 'Final Project - Personal Portfolio Page' },
      ],
      Intermediate: [
        { week: 1, topic: 'HTML5 Semantic Elements' },
        { week: 2, topic: 'Advanced Forms and Input Types' },
        { week: 3, topic: 'Multimedia - Audio, Video, Canvas' },
        { week: 4, topic: 'SVG and Graphics' },
        { week: 5, topic: 'Web Storage APIs' },
        { week: 6, topic: 'Geolocation API' },
        { week: 7, topic: 'Accessibility and ARIA' },
        { week: 8, topic: 'Final Project - Interactive Web Page' },
      ],
      Advanced: [
        { week: 1, topic: 'Advanced HTML5 Features' },
        { week: 2, topic: 'Web Components and Custom Elements' },
        { week: 3, topic: 'Progressive Web Apps (PWA)' },
        { week: 4, topic: 'Advanced Form Validation' },
        { week: 5, topic: 'Microdata and Schema.org' },
        { week: 6, topic: 'Performance Optimization' },
        { week: 7, topic: 'SEO Best Practices' },
        { week: 8, topic: 'Advanced APIs Integration' },
        { week: 9, topic: 'Web Workers' },
        { week: 10, topic: 'Service Workers' },
        { week: 11, topic: 'Advanced Project Architecture' },
        { week: 12, topic: 'Final Project - Complete Web Application' },
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
        { week: 1, topic: 'Introduction to CSS, Selectors, Properties' },
        { week: 2, topic: 'Colors, Text Styling, and Fonts' },
        { week: 3, topic: 'Box Model, Padding, Margin, Borders' },
        { week: 4, topic: 'Final Project - Styled Web Page' },
      ],
      Intermediate: [
        { week: 1, topic: 'Flexbox Layout' },
        { week: 2, topic: 'CSS Grid Layout' },
        { week: 3, topic: 'Positioning and Z-index' },
        { week: 4, topic: 'Transitions and Animations' },
        { week: 5, topic: 'Responsive Design with Media Queries' },
        { week: 6, topic: 'CSS Variables and Custom Properties' },
        { week: 7, topic: 'Pseudo-classes and Pseudo-elements' },
        { week: 8, topic: 'Final Project - Responsive Website' },
      ],
      Advanced: [
        { week: 1, topic: 'Advanced CSS Selectors' },
        { week: 2, topic: 'Advanced Animations and Keyframes' },
        { week: 3, topic: 'CSS Architecture and Methodologies (BEM, OOCSS)' },
        { week: 4, topic: 'CSS Preprocessors (SASS/SCSS)' },
        { week: 5, topic: 'Advanced Grid and Flexbox Techniques' },
        { week: 6, topic: 'CSS Custom Properties Advanced Usage' },
        { week: 7, topic: 'Performance Optimization' },
        { week: 8, topic: 'Advanced Responsive Techniques' },
        { week: 9, topic: 'CSS-in-JS Concepts' },
        { week: 10, topic: 'Browser Compatibility and Polyfills' },
        { week: 11, topic: 'Advanced Project Styling' },
        { week: 12, topic: 'Final Project - Complete Styled Application' },
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
        { week: 1, topic: 'Introduction to JavaScript, Variables, Data Types' },
        { week: 2, topic: 'Functions, Arrays, Objects, and Control Structures' },
        { week: 3, topic: 'DOM Manipulation Basics' },
        { week: 4, topic: 'Final Project - Interactive Web Page' },
      ],
      Intermediate: [
        { week: 1, topic: 'ES6+ Features (Arrow Functions, Destructuring)' },
        { week: 2, topic: 'Advanced Functions and Closures' },
        { week: 3, topic: 'Asynchronous JavaScript (Promises, Async/Await)' },
        { week: 4, topic: 'DOM Manipulation Advanced' },
        { week: 5, topic: 'Event Handling and Event Delegation' },
        { week: 6, topic: 'Working with APIs (Fetch, AJAX)' },
        { week: 7, topic: 'Local Storage and Session Storage' },
        { week: 8, topic: 'Final Project - Dynamic Web Application' },
      ],
      Advanced: [
        { week: 1, topic: 'Advanced ES6+ Features' },
        { week: 2, topic: 'JavaScript Design Patterns' },
        { week: 3, topic: 'Advanced Async Programming' },
        { week: 4, topic: 'Module System (ES6 Modules)' },
        { week: 5, topic: 'JavaScript Frameworks Introduction' },
        { week: 6, topic: 'React/Vue Basics' },
        { week: 7, topic: 'State Management' },
        { week: 8, topic: 'Testing in JavaScript' },
        { week: 9, topic: 'Performance Optimization' },
        { week: 10, topic: 'Build Tools and Bundlers' },
        { week: 11, topic: 'Advanced Project Development' },
        { week: 12, topic: 'Final Project - Complete JavaScript Application' },
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
        { week: 1, topic: 'Introduction to Excel, Basic Navigation, Data Entry' },
        { week: 2, topic: 'Basic Formulas, Functions, and Cell References' },
      ],
      Intermediate: [
        { week: 1, topic: 'Advanced Formulas (VLOOKUP, HLOOKUP, INDEX, MATCH)' },
        { week: 2, topic: 'Data Analysis Tools (Sorting, Filtering, Conditional Formatting)' },
        { week: 3, topic: 'Charts and Graphs' },
        { week: 4, topic: 'Pivot Tables and Pivot Charts' },
      ],
      Advanced: [
        { week: 1, topic: 'Advanced Functions and Array Formulas' },
        { week: 2, topic: 'Data Validation and Protection' },
        { week: 3, topic: 'Macros and VBA Basics' },
        { week: 4, topic: 'Advanced Pivot Tables and Data Models' },
        { week: 5, topic: 'Power Query and Power Pivot' },
        { week: 6, topic: 'Advanced Automation and Dashboard Creation' },
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
        { week: 1, topic: 'Introduction to Digital Marketing, Marketing Fundamentals' },
        { week: 2, topic: 'Social Media Marketing Basics' },
        { week: 3, topic: 'Content Marketing Introduction' },
        { week: 4, topic: 'Final Project - Basic Marketing Campaign' },
      ],
      Intermediate: [
        { week: 1, topic: 'SEO Fundamentals and Keyword Research' },
        { week: 2, topic: 'Google Ads and PPC Campaigns' },
        { week: 3, topic: 'Email Marketing Strategies' },
        { week: 4, topic: 'Social Media Advertising' },
        { week: 5, topic: 'Content Strategy and Creation' },
        { week: 6, topic: 'Analytics and Reporting' },
        { week: 7, topic: 'Marketing Automation' },
        { week: 8, topic: 'Final Project - Complete Marketing Campaign' },
      ],
      Advanced: [
        { week: 1, topic: 'Advanced SEO Techniques' },
        { week: 2, topic: 'Advanced PPC Strategies' },
        { week: 3, topic: 'Marketing Analytics and Data Analysis' },
        { week: 4, topic: 'Conversion Rate Optimization' },
        { week: 5, topic: 'Marketing Automation Platforms' },
        { week: 6, topic: 'Advanced Content Marketing' },
        { week: 7, topic: 'Influencer Marketing' },
        { week: 8, topic: 'E-commerce Marketing' },
        { week: 9, topic: 'Marketing Strategy and Planning' },
        { week: 10, topic: 'Advanced Analytics and Attribution' },
        { week: 11, topic: 'Marketing Technology Stack' },
        { week: 12, topic: 'Final Project - Comprehensive Marketing Strategy' },
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
  const topics: Record<string, Record<string, string[]>> = {
    'C++ Programming': {
      Beginner: ['Introduction to C++, OOP Basics', 'Classes and Objects', 'Inheritance and Polymorphism', 'Final Project'],
      Intermediate: ['Advanced OOP Concepts', 'Templates and STL', 'Exception Handling', 'File I/O', 'Memory Management', 'Operator Overloading', 'Advanced Features', 'Final Project'],
      Advanced: ['Advanced Templates', 'STL Containers and Algorithms', 'Smart Pointers', 'Multithreading', 'Design Patterns', 'Performance Optimization', 'Advanced Memory Management', 'Metaprogramming', 'Concurrency', 'Advanced Project Architecture', 'System Programming', 'Final Project'],
    },
    'C# Programming': {
      Beginner: ['Introduction to C# and .NET', 'Variables, Data Types, Operators', 'Control Structures and Methods', 'Final Project'],
      Intermediate: ['Object-Oriented Programming', 'Collections and Generics', 'Exception Handling', 'File I/O', 'LINQ', 'Delegates and Events', 'Windows Forms', 'Final Project'],
      Advanced: ['Advanced C# Features', 'Async/Await Programming', 'Entity Framework', 'ASP.NET Core', 'Web API Development', 'Dependency Injection', 'Design Patterns', 'Testing', 'Performance Optimization', 'Advanced Architecture', 'Cloud Integration', 'Final Project'],
    },
    'SQL': {
      Beginner: ['Introduction to SQL and Databases', 'Basic SELECT Queries', 'Filtering and Sorting Data', 'Final Project'],
      Intermediate: ['Joins and Subqueries', 'Aggregate Functions', 'Group By and Having', 'Stored Procedures', 'Functions and Views', 'Transactions', 'Indexes and Optimization', 'Final Project'],
      Advanced: ['Advanced Query Techniques', 'Complex Joins and CTEs', 'Window Functions', 'Performance Tuning', 'Database Design', 'Security and Permissions', 'Backup and Recovery', 'Advanced Features', 'Data Warehousing', 'Business Intelligence', 'Advanced Optimization', 'Final Project'],
    },
    'MySQL': {
      Beginner: ['Introduction to MySQL', 'Database Creation and Management', 'Basic Queries', 'Final Project'],
      Intermediate: ['Advanced Queries and Joins', 'Stored Procedures and Functions', 'Triggers and Events', 'Indexes and Optimization', 'User Management', 'Backup and Restore', 'Performance Tuning', 'Final Project'],
      Advanced: ['Advanced Database Design', 'Replication and Clustering', 'Partitioning', 'Advanced Optimization', 'Security Best Practices', 'High Availability', 'Monitoring and Maintenance', 'Advanced Features', 'Cloud MySQL', 'Data Migration', 'Enterprise Solutions', 'Final Project'],
    },
    'Sqlite': {
      Beginner: ['Introduction to SQLite', 'Database Creation', 'Basic SQL Operations', 'Final Project'],
      Intermediate: ['Advanced Queries', 'Transactions and Concurrency', 'Indexes and Optimization', 'Attach and Detach Databases', 'Backup and Restore', 'Performance Tuning', 'Application Integration', 'Final Project'],
      Advanced: ['Advanced SQLite Features', 'Full-Text Search', 'JSON Support', 'Performance Optimization', 'Concurrent Access', 'Advanced Queries', 'Extension Development', 'Mobile Integration', 'Advanced Architecture', 'Data Analysis', 'Enterprise Usage', 'Final Project'],
    },
    'MongoDB': {
      Beginner: ['Introduction to NoSQL and MongoDB', 'Installation and Setup', 'Basic CRUD Operations', 'Final Project'],
      Intermediate: ['Querying and Indexing', 'Aggregation Framework', 'Data Modeling', 'Replication', 'Sharding Basics', 'Performance Optimization', 'Security', 'Final Project'],
      Advanced: ['Advanced Aggregation', 'Sharding Strategies', 'Replica Sets', 'Performance Tuning', 'Backup and Restore', 'Monitoring', 'Advanced Data Modeling', 'GridFS', 'Change Streams', 'Atlas Cloud', 'Enterprise Features', 'Final Project'],
    },
    'Word Document': {
      Beginner: ['Introduction to Microsoft Word', 'Basic Document Creation and Formatting'],
      Intermediate: ['Advanced Formatting', 'Styles and Templates', 'Tables and Graphics', 'Mail Merge'],
      Advanced: ['Advanced Features', 'Macros and Automation', 'Collaboration Tools', 'Document Security', 'Advanced Templates', 'Customization'],
    },
    'PowerPoint': {
      Beginner: ['Introduction to PowerPoint', 'Basic Slide Creation and Design'],
      Intermediate: ['Advanced Design Techniques', 'Animations and Transitions', 'Multimedia Integration', 'Master Slides'],
      Advanced: ['Advanced Animations', 'Interactive Presentations', 'Video and Audio', 'Collaboration', 'Advanced Design', 'Automation'],
    },
    'Access': {
      Beginner: ['Introduction to Microsoft Access', 'Database Creation and Tables'],
      Intermediate: ['Queries and Forms', 'Reports and Relationships', 'Basic Macros'],
      Advanced: ['Advanced Queries', 'VBA Programming', 'Database Optimization', 'Advanced Forms', 'Integration', 'Enterprise Features'],
    },
    'ASP.NET': {
      Beginner: ['Introduction to ASP.NET', 'Web Forms Basics', 'Server Controls', 'Final Project'],
      Intermediate: ['MVC Pattern', 'Razor Pages', 'Data Access', 'Authentication', 'Routing', 'Middleware', 'API Development', 'Final Project'],
      Advanced: ['Advanced MVC', 'Dependency Injection', 'Entity Framework Core', 'Web API', 'SignalR', 'Security', 'Performance', 'Deployment', 'Microservices', 'Cloud Integration', 'Advanced Architecture', 'Final Project'],
    },
    'VB.NET': {
      Beginner: ['Introduction to VB.NET', 'Basic Syntax and Controls', 'Windows Forms', 'Final Project'],
      Intermediate: ['Advanced Controls', 'Database Connectivity', 'Error Handling', 'File Operations', 'OOP in VB.NET', 'Collections', 'Events and Delegates', 'Final Project'],
      Advanced: ['Advanced VB.NET Features', 'LINQ', 'WPF Applications', 'Web Development', 'Advanced Database', 'Multithreading', 'Performance', 'Deployment', 'Enterprise Features', 'Integration', 'Advanced Architecture', 'Final Project'],
    },
  };

  const courseTopics = topics[courseName]?.[level];
  if (courseTopics) {
    return courseTopics.map((topic, index) => ({ week: index + 1, topic }));
  }

  // Generic fallback
  const genericTopics = {
    Beginner: ['Introduction and Fundamentals', 'Core Concepts', 'Practical Applications', 'Final Project'],
    Intermediate: ['Advanced Concepts', 'Best Practices', 'Real-world Applications', 'Integration', 'Optimization', 'Testing', 'Deployment', 'Final Project'],
    Advanced: ['Expert-level Topics', 'Advanced Techniques', 'Architecture Design', 'Performance Optimization', 'Security', 'Scalability', 'Enterprise Solutions', 'Advanced Integration', 'Innovation', 'Best Practices', 'Project Management', 'Final Project'],
  };

  return genericTopics[level].slice(0, weeks).map((topic, index) => ({ week: index + 1, topic }));
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

