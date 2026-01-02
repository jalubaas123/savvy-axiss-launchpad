export interface Project {
  id: number;
  slug: string;
  title: string;
  category: string;
  image: string;
  price: number;
  originalPrice?: number;
  videoUrl: string;
  description: string;
  longDescription: string;
  features: string[];
  techStack: string[];
}

export interface ResearchPaper {
  id: number;
  slug: string;
  title: string;
  domain: string;
  image: string;
  price: number;
  originalPrice?: number;
  description: string;
  features: string[];
}

export interface MBAProject {
  id: number;
  slug: string;
  title: string;
  specialization: string;
  image: string;
  price: number;
  originalPrice?: number;
  description: string;
  features: string[];
}

export const projects: Project[] = [
  {
    id: 1,
    slug: 'ecommerce-website',
    title: 'E-Commerce Website',
    category: 'Web Development',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=500&fit=crop&q=80',
    price: 8999,
    originalPrice: 12999,
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    description: 'Complete e-commerce solution with cart, payment integration, and admin panel.',
    longDescription: 'A fully functional e-commerce website built with modern technologies. Features include product catalog, shopping cart, secure checkout, user authentication, order management, and a comprehensive admin dashboard for managing products, orders, and customers.',
    features: [
      'User authentication & authorization',
      'Product catalog with categories',
      'Shopping cart & wishlist',
      'Secure payment gateway integration',
      'Order tracking system',
      'Admin dashboard',
      'Responsive design',
      'SEO optimized',
    ],
    techStack: ['React', 'Node.js', 'MongoDB', 'Express', 'Stripe'],
  },
  {
    id: 2,
    slug: 'food-delivery-app',
    title: 'Food Delivery App',
    category: 'Mobile Apps',
    image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=800&h=500&fit=crop&q=80',
    price: 12999,
    originalPrice: 18999,
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    description: 'Full-featured food ordering app with real-time tracking and restaurant management.',
    longDescription: 'A comprehensive food delivery application similar to Swiggy/Zomato. Includes customer app, delivery partner app, and restaurant management portal. Features real-time order tracking, push notifications, and integrated payment solutions.',
    features: [
      'Multi-restaurant support',
      'Real-time order tracking',
      'Push notifications',
      'Multiple payment options',
      'Rating & review system',
      'Delivery partner app',
      'Restaurant dashboard',
      'Analytics & reports',
    ],
    techStack: ['React Native', 'Firebase', 'Node.js', 'Google Maps API'],
  },
  {
    id: 3,
    slug: 'sentiment-analysis-system',
    title: 'Sentiment Analysis System',
    category: 'Machine Learning',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=500&fit=crop&q=80',
    price: 14999,
    originalPrice: 21999,
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    description: 'AI-powered sentiment analysis tool for social media and customer feedback.',
    longDescription: 'An advanced machine learning project that analyzes text data to determine sentiment (positive, negative, neutral). Can be used for social media monitoring, customer feedback analysis, and brand reputation management. Includes a web interface for real-time analysis.',
    features: [
      'Real-time sentiment analysis',
      'Multi-language support',
      'Social media integration',
      'Dashboard with visualizations',
      'API for integration',
      'Batch processing',
      'Custom model training',
      'Detailed reports',
    ],
    techStack: ['Python', 'TensorFlow', 'NLTK', 'Flask', 'React'],
  },
  {
    id: 4,
    slug: 'hospital-management-system',
    title: 'Hospital Management System',
    category: 'Web Development',
    image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&h=500&fit=crop&q=80',
    price: 9999,
    originalPrice: 14999,
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    description: 'Complete hospital management solution with patient records and appointment system.',
    longDescription: 'A comprehensive hospital management system that handles patient registration, appointment scheduling, medical records, billing, pharmacy management, and staff management. Designed for small to medium healthcare facilities.',
    features: [
      'Patient registration & records',
      'Appointment scheduling',
      'Doctor management',
      'Billing & invoicing',
      'Pharmacy management',
      'Lab report management',
      'Staff management',
      'Report generation',
    ],
    techStack: ['PHP', 'MySQL', 'Bootstrap', 'JavaScript', 'jQuery'],
  },
  {
    id: 5,
    slug: 'expense-tracker-app',
    title: 'Expense Tracker App',
    category: 'Mobile Apps',
    image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&h=500&fit=crop&q=80',
    price: 7999,
    originalPrice: 11999,
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    description: 'Personal finance app with budget tracking, charts, and expense categorization.',
    longDescription: 'A mobile application for personal finance management. Track daily expenses, set budgets, categorize spending, and view detailed analytics. Features cloud sync, recurring expenses, and export functionality.',
    features: [
      'Expense tracking & categorization',
      'Budget management',
      'Visual charts & analytics',
      'Recurring expenses',
      'Cloud synchronization',
      'Export to PDF/Excel',
      'Multi-currency support',
      'Bill reminders',
    ],
    techStack: ['Flutter', 'Dart', 'Firebase', 'SQLite'],
  },
  {
    id: 6,
    slug: 'crop-disease-detection',
    title: 'Crop Disease Detection',
    category: 'Machine Learning',
    image: 'https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=800&h=500&fit=crop&q=80',
    price: 15999,
    originalPrice: 23999,
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    description: 'AI system to detect crop diseases from leaf images using deep learning.',
    longDescription: 'An agricultural AI solution that uses computer vision to detect diseases in crops by analyzing leaf images. Farmers can upload photos and get instant diagnosis with treatment recommendations. Supports multiple crop types and diseases.',
    features: [
      'Image-based disease detection',
      'Multiple crop support',
      'Treatment recommendations',
      'Mobile-friendly interface',
      'Offline mode',
      'Disease history tracking',
      'Expert consultation integration',
      'Multi-language support',
    ],
    techStack: ['Python', 'TensorFlow', 'Keras', 'OpenCV', 'Flask'],
  },
  {
    id: 7,
    slug: 'online-learning-platform',
    title: 'Online Learning Platform',
    category: 'Web Development',
    image: 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=800&h=500&fit=crop&q=80',
    price: 11999,
    originalPrice: 17999,
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    description: 'Complete LMS with video courses, quizzes, certificates, and instructor panel.',
    longDescription: 'A comprehensive Learning Management System (LMS) similar to Udemy. Features include video hosting, course management, quiz creation, progress tracking, certificate generation, and payment integration for course sales.',
    features: [
      'Video course hosting',
      'Quiz & assessment system',
      'Progress tracking',
      'Certificate generation',
      'Instructor dashboard',
      'Payment integration',
      'Discussion forums',
      'Mobile responsive',
    ],
    techStack: ['React', 'Node.js', 'PostgreSQL', 'AWS S3', 'Stripe'],
  },
  {
    id: 8,
    slug: 'inventory-management-system',
    title: 'Inventory Management System',
    category: 'Web Development',
    image: 'https://images.unsplash.com/photo-1553413077-190dd305871c?w=800&h=500&fit=crop&q=80',
    price: 8499,
    originalPrice: 12499,
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    description: 'Stock management system with barcode scanning and real-time tracking.',
    longDescription: 'A complete inventory management solution for businesses. Track stock levels, manage suppliers, generate purchase orders, and get low stock alerts. Includes barcode scanning support and integration with popular accounting software.',
    features: [
      'Real-time stock tracking',
      'Barcode scanning',
      'Supplier management',
      'Purchase order generation',
      'Low stock alerts',
      'Multi-location support',
      'Reports & analytics',
      'User role management',
    ],
    techStack: ['Python', 'Django', 'PostgreSQL', 'React', 'Redis'],
  },
];

export const researchPapers: ResearchPaper[] = [
  {
    id: 1,
    slug: 'blockchain-supply-chain',
    title: 'Blockchain in Supply Chain Management',
    domain: 'Blockchain',
    image: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800&h=500&fit=crop&q=80',
    price: 4999,
    originalPrice: 7999,
    description: 'Research paper on implementing blockchain technology for transparent supply chain tracking.',
    features: ['IEEE Format', 'Plagiarism Report', 'Reference Papers', 'Implementation Guide'],
  },
  {
    id: 2,
    slug: 'ai-healthcare-diagnosis',
    title: 'AI in Healthcare Diagnosis',
    domain: 'Artificial Intelligence',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&h=500&fit=crop&q=80',
    price: 5499,
    originalPrice: 8999,
    description: 'Comprehensive study on AI-powered medical diagnosis systems and their accuracy.',
    features: ['IEEE Format', 'Plagiarism Report', 'Dataset Access', 'Code Samples'],
  },
  {
    id: 3,
    slug: 'iot-smart-agriculture',
    title: 'IoT-Based Smart Agriculture',
    domain: 'Internet of Things',
    image: 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=800&h=500&fit=crop&q=80',
    price: 4499,
    originalPrice: 6999,
    description: 'Research on IoT sensors and automation in modern farming practices.',
    features: ['IEEE Format', 'Plagiarism Report', 'Hardware Specs', 'Circuit Diagrams'],
  },
  {
    id: 4,
    slug: 'cybersecurity-ml',
    title: 'Machine Learning for Cybersecurity',
    domain: 'Cybersecurity',
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&h=500&fit=crop&q=80',
    price: 5999,
    originalPrice: 9499,
    description: 'Advanced research on using ML algorithms for threat detection and prevention.',
    features: ['IEEE Format', 'Plagiarism Report', 'ML Models', 'Dataset Included'],
  },
];

export const mbaProjects: MBAProject[] = [
  {
    id: 1,
    slug: 'market-analysis-fintech',
    title: 'Market Analysis of FinTech Startups',
    specialization: 'Finance',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=500&fit=crop&q=80',
    price: 6999,
    originalPrice: 10999,
    description: 'Comprehensive market analysis and investment potential study of Indian FinTech startups.',
    features: ['Complete Report', 'PPT Presentation', 'Financial Models', 'Data Analysis'],
  },
  {
    id: 2,
    slug: 'hr-employee-retention',
    title: 'Employee Retention Strategies',
    specialization: 'Human Resources',
    image: 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=800&h=500&fit=crop&q=80',
    price: 5999,
    originalPrice: 8999,
    description: 'Study on effective HR strategies to improve employee retention in IT companies.',
    features: ['Survey Data', 'Case Studies', 'PPT Presentation', 'Statistical Analysis'],
  },
  {
    id: 3,
    slug: 'digital-marketing-roi',
    title: 'Digital Marketing ROI Analysis',
    specialization: 'Marketing',
    image: 'https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?w=800&h=500&fit=crop&q=80',
    price: 5499,
    originalPrice: 8499,
    description: 'Analysis of digital marketing strategies and their return on investment for SMEs.',
    features: ['Campaign Data', 'ROI Models', 'PPT Presentation', 'Recommendations'],
  },
  {
    id: 4,
    slug: 'supply-chain-optimization',
    title: 'Supply Chain Optimization',
    specialization: 'Operations',
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&h=500&fit=crop&q=80',
    price: 6499,
    originalPrice: 9999,
    description: 'Study on optimizing supply chain operations for manufacturing companies.',
    features: ['Process Maps', 'Cost Analysis', 'PPT Presentation', 'Implementation Plan'],
  },
];

export const projectCategories = ['All', 'Web Development', 'Mobile Apps', 'Machine Learning', 'Data Science', 'Cyber Security', 'IoT Projects'];

export const getProjectBySlug = (slug: string): Project | undefined => {
  return projects.find((project) => project.slug === slug);
};

export const getRelatedProjects = (currentSlug: string, category: string): Project[] => {
  return projects
    .filter((project) => project.slug !== currentSlug && project.category === category)
    .slice(0, 3);
};

export const getResearchPaperBySlug = (slug: string): ResearchPaper | undefined => {
  return researchPapers.find((paper) => paper.slug === slug);
};

export const getMBAProjectBySlug = (slug: string): MBAProject | undefined => {
  return mbaProjects.find((project) => project.slug === slug);
};
