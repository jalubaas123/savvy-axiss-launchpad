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

export const getProjectBySlug = (slug: string): Project | undefined => {
  return projects.find((project) => project.slug === slug);
};

export const getRelatedProjects = (currentSlug: string, category: string): Project[] => {
  return projects
    .filter((project) => project.slug !== currentSlug && project.category === category)
    .slice(0, 3);
};
