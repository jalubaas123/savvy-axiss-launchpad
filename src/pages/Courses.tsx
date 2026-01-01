import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Search, Clock, Users, Star, Filter, X, Gift, Home, Headphones, Book, Award, DollarSign, MessageCircle, Network, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

// Course image mapping - appropriate images for each course
const courseImages: Record<string, string> = {
  'C Programming': 'https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=800&h=500&fit=crop&q=80',
  'C++ Programming': 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&h=500&fit=crop&q=80',
  'Python Programming': 'https://images.unsplash.com/photo-1526379095098-d400fd0bf935?w=800&h=500&fit=crop&q=80',
  'Java Programming': 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=500&fit=crop&q=80',
  'C# Programming': 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=500&fit=crop&q=80',
  'HTML': 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&h=500&fit=crop&q=80',
  'CSS': 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=500&fit=crop&q=80',
  'JavaScript': 'https://images.unsplash.com/photo-1579468118864-1b9ea3c0db4a?w=800&h=500&fit=crop&q=80',
  'ASP.NET': 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=500&fit=crop&q=80',
  'VB.NET': 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=500&fit=crop&q=80',
  'Word Document': 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=500&fit=crop&q=80',
  'Excel': 'https://images.unsplash.com/photo-1589829085413-56de8ae18c73?w=800&h=500&fit=crop&q=80',
  'PowerPoint': 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=500&fit=crop&q=80',
  'Access': 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=500&fit=crop&q=80',
  'SQL': 'https://images.unsplash.com/photo-1544383835-bda2bc66a55d?w=800&h=500&fit=crop&q=80',
  'MySQL': 'https://images.unsplash.com/photo-1544383835-bda2bc66a55d?w=800&h=500&fit=crop&q=80',
  'Sqlite': 'https://images.unsplash.com/photo-1544383835-bda2bc66a55d?w=800&h=500&fit=crop&q=80',
  'MongoDB': 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=500&fit=crop&q=80',
  'Digital Marketing': 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=500&fit=crop&q=80',
};

// Course data structure helper
const createCourse = (
  id: number,
  name: string,
  baseSlug: string,
  category: string,
  level: 'Beginner' | 'Intermediate' | 'Advanced',
  rating: number,
  duration: string,
  price: number,
  originalPrice: number,
  description: string
) => ({
  id,
  slug: `${baseSlug}${level === 'Beginner' ? 'b' : level === 'Intermediate' ? 'i' : 'a'}`,
  title: `${name}${level === 'Beginner' ? ' - Beginner' : level === 'Intermediate' ? ' - Intermediate' : ' - Advanced'}`,
  description,
  image: courseImages[name] || 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&h=500&fit=crop',
  duration,
  mode: 'Live Online',
  price,
  originalPrice,
  rating,
  reviews: Math.floor(Math.random() * 100) + 20,
  category,
  level,
});

// Course descriptions
const courseDescriptions: Record<string, string> = {
  'C Programming': 'Learn the fundamentals of C programming language from scratch. Master variables, data types, control structures, functions, and pointers.',
  'C++ Programming': 'Master object-oriented programming with C++. Learn classes, inheritance, polymorphism, and advanced C++ features.',
  'Python Programming': 'Learn Python programming from basics to advanced. Master data structures, algorithms, and real-world applications.',
  'Java Programming': 'Comprehensive Java programming course covering OOP concepts, collections, multithreading, and Java frameworks.',
  'C# Programming': 'Learn C# programming and .NET framework. Master Windows applications, web services, and database connectivity.',
  'HTML': 'Master HTML5 fundamentals. Learn semantic markup, forms, multimedia, and modern web development practices.',
  'CSS': 'Learn CSS3 styling, layouts, animations, and responsive design. Create beautiful and modern web interfaces.',
  'JavaScript': 'Master JavaScript programming. Learn ES6+, DOM manipulation, async programming, and modern JavaScript frameworks.',
  'ASP.NET': 'Learn ASP.NET web development. Master MVC pattern, Razor pages, and building dynamic web applications.',
  'VB.NET': 'Learn Visual Basic .NET programming. Master Windows Forms, web applications, and database connectivity.',
  'Word Document': 'Master Microsoft Word. Learn document creation, formatting, templates, mail merge, and advanced features.',
  'Excel': 'Master Microsoft Excel. Learn formulas, functions, data analysis, pivot tables, charts, and automation.',
  'PowerPoint': 'Create stunning presentations with PowerPoint. Learn design principles, animations, transitions, and multimedia integration.',
  'Access': 'Master Microsoft Access database management. Learn table design, queries, forms, reports, and database relationships.',
  'SQL': 'Learn SQL database programming. Master queries, joins, subqueries, stored procedures, and database optimization.',
  'MySQL': 'Master MySQL database management. Learn database design, administration, optimization, and advanced features.',
  'Sqlite': 'Learn SQLite database programming. Master lightweight database management for applications and mobile development.',
  'MongoDB': 'Master MongoDB NoSQL database. Learn document modeling, queries, aggregation, and database administration.',
  'Digital Marketing': 'Master digital marketing strategies. Learn SEO, social media marketing, PPC advertising, content marketing, email marketing, and analytics.',
};

export const allCourses = [
  // PROGRAMMING LANGUAGES - C Programming
  createCourse(1, 'C Programming', 'c', 'Programming Languages', 'Beginner', 4.65, '4 Weeks', 999, 1499, courseDescriptions['C Programming']),
  createCourse(2, 'C Programming', 'c', 'Programming Languages', 'Intermediate', 4.7, '8 Weeks', 1999, 2999, courseDescriptions['C Programming']),
  createCourse(3, 'C Programming', 'c', 'Programming Languages', 'Advanced', 4.75, '12 Weeks', 2999, 3999, courseDescriptions['C Programming']),
  
  // C++ Programming
  createCourse(4, 'C++ Programming', 'c++', 'Programming Languages', 'Beginner', 4.7, '4 Weeks', 999, 1499, courseDescriptions['C++ Programming']),
  createCourse(5, 'C++ Programming', 'c++', 'Programming Languages', 'Intermediate', 4.75, '8 Weeks', 1999, 2999, courseDescriptions['C++ Programming']),
  createCourse(6, 'C++ Programming', 'c++', 'Programming Languages', 'Advanced', 4.8, '12 Weeks', 2999, 3999, courseDescriptions['C++ Programming']),
  
  // Python Programming
  createCourse(7, 'Python Programming', 'python', 'Programming Languages', 'Beginner', 4.8, '4 Weeks', 999, 1499, courseDescriptions['Python Programming']),
  createCourse(8, 'Python Programming', 'python', 'Programming Languages', 'Intermediate', 4.85, '8 Weeks', 1999, 2999, courseDescriptions['Python Programming']),
  createCourse(9, 'Python Programming', 'python', 'Programming Languages', 'Advanced', 5.0, '12 Weeks', 2999, 3999, courseDescriptions['Python Programming']),
  
  // Java Programming
  createCourse(10, 'Java Programming', 'java', 'Programming Languages', 'Beginner', 4.75, '4 Weeks', 999, 1499, courseDescriptions['Java Programming']),
  createCourse(11, 'Java Programming', 'java', 'Programming Languages', 'Intermediate', 4.8, '8 Weeks', 1999, 2999, courseDescriptions['Java Programming']),
  createCourse(12, 'Java Programming', 'java', 'Programming Languages', 'Advanced', 4.85, '12 Weeks', 2999, 3999, courseDescriptions['Java Programming']),
  
  // C# Programming
  createCourse(13, 'C# Programming', 'csharp', 'Programming Languages', 'Beginner', 4.6, '4 Weeks', 999, 1499, courseDescriptions['C# Programming']),
  createCourse(14, 'C# Programming', 'csharp', 'Programming Languages', 'Intermediate', 4.65, '8 Weeks', 1999, 2999, courseDescriptions['C# Programming']),
  createCourse(15, 'C# Programming', 'csharp', 'Programming Languages', 'Advanced', 4.7, '12 Weeks', 2999, 3999, courseDescriptions['C# Programming']),
  
  // WEB DEVELOPMENT - HTML
  createCourse(16, 'HTML', 'html', 'Web Development', 'Beginner', 4.9, '4 Weeks', 999, 1499, courseDescriptions['HTML']),
  createCourse(17, 'HTML', 'html', 'Web Development', 'Intermediate', 4.95, '8 Weeks', 1999, 2999, courseDescriptions['HTML']),
  createCourse(18, 'HTML', 'html', 'Web Development', 'Advanced', 5.0, '12 Weeks', 2999, 3999, courseDescriptions['HTML']),
  
  // CSS
  createCourse(19, 'CSS', 'css', 'Web Development', 'Beginner', 4.8, '4 Weeks', 999, 1499, courseDescriptions['CSS']),
  createCourse(20, 'CSS', 'css', 'Web Development', 'Intermediate', 4.85, '8 Weeks', 1999, 2999, courseDescriptions['CSS']),
  createCourse(21, 'CSS', 'css', 'Web Development', 'Advanced', 4.9, '12 Weeks', 2999, 3999, courseDescriptions['CSS']),
  
  // JavaScript
  createCourse(22, 'JavaScript', 'javascript', 'Web Development', 'Beginner', 4.7, '4 Weeks', 999, 1499, courseDescriptions['JavaScript']),
  createCourse(23, 'JavaScript', 'javascript', 'Web Development', 'Intermediate', 4.75, '8 Weeks', 1999, 2999, courseDescriptions['JavaScript']),
  createCourse(24, 'JavaScript', 'javascript', 'Web Development', 'Advanced', 4.8, '12 Weeks', 2999, 3999, courseDescriptions['JavaScript']),
  
  // ASP.NET
  createCourse(25, 'ASP.NET', 'asp', 'Web Development', 'Beginner', 4.5, '4 Weeks', 999, 1499, courseDescriptions['ASP.NET']),
  createCourse(26, 'ASP.NET', 'asp', 'Web Development', 'Intermediate', 4.55, '8 Weeks', 1999, 2999, courseDescriptions['ASP.NET']),
  createCourse(27, 'ASP.NET', 'asp', 'Web Development', 'Advanced', 4.6, '12 Weeks', 2999, 3999, courseDescriptions['ASP.NET']),
  
  // VB.NET
  createCourse(28, 'VB.NET', 'vb', 'Web Development', 'Beginner', 4.6, '4 Weeks', 999, 1499, courseDescriptions['VB.NET']),
  createCourse(29, 'VB.NET', 'vb', 'Web Development', 'Intermediate', 4.65, '8 Weeks', 1999, 2999, courseDescriptions['VB.NET']),
  createCourse(30, 'VB.NET', 'vb', 'Web Development', 'Advanced', 4.7, '12 Weeks', 2999, 3999, courseDescriptions['VB.NET']),
  
  // MICROSOFT OFFICE - Word Document
  createCourse(31, 'Word Document', 'word', 'Microsoft Office', 'Beginner', 4.8, '2 Weeks', 499, 799, courseDescriptions['Word Document']),
  createCourse(32, 'Word Document', 'word', 'Microsoft Office', 'Intermediate', 4.85, '4 Weeks', 999, 1499, courseDescriptions['Word Document']),
  createCourse(33, 'Word Document', 'word', 'Microsoft Office', 'Advanced', 4.9, '6 Weeks', 1499, 1999, courseDescriptions['Word Document']),
  
  // Excel
  createCourse(34, 'Excel', 'excel', 'Microsoft Office', 'Beginner', 4.9, '2 Weeks', 499, 799, courseDescriptions['Excel']),
  createCourse(35, 'Excel', 'excel', 'Microsoft Office', 'Intermediate', 4.95, '4 Weeks', 999, 1499, courseDescriptions['Excel']),
  createCourse(36, 'Excel', 'excel', 'Microsoft Office', 'Advanced', 5.0, '6 Weeks', 1499, 1999, courseDescriptions['Excel']),
  
  // PowerPoint
  createCourse(37, 'PowerPoint', 'ppt', 'Microsoft Office', 'Beginner', 4.7, '2 Weeks', 499, 799, courseDescriptions['PowerPoint']),
  createCourse(38, 'PowerPoint', 'ppt', 'Microsoft Office', 'Intermediate', 4.75, '4 Weeks', 999, 1499, courseDescriptions['PowerPoint']),
  createCourse(39, 'PowerPoint', 'ppt', 'Microsoft Office', 'Advanced', 4.8, '6 Weeks', 1499, 1999, courseDescriptions['PowerPoint']),
  
  // Access
  createCourse(40, 'Access', 'access', 'Microsoft Office', 'Beginner', 4.6, '2 Weeks', 499, 799, courseDescriptions['Access']),
  createCourse(41, 'Access', 'access', 'Microsoft Office', 'Intermediate', 4.65, '4 Weeks', 999, 1499, courseDescriptions['Access']),
  createCourse(42, 'Access', 'access', 'Microsoft Office', 'Advanced', 4.7, '6 Weeks', 1499, 1999, courseDescriptions['Access']),
  
  // DATABASE - SQL
  createCourse(43, 'SQL', 'sql', 'Database', 'Beginner', 4.8, '4 Weeks', 999, 1499, courseDescriptions['SQL']),
  createCourse(44, 'SQL', 'sql', 'Database', 'Intermediate', 4.85, '8 Weeks', 1999, 2999, courseDescriptions['SQL']),
  createCourse(45, 'SQL', 'sql', 'Database', 'Advanced', 4.9, '12 Weeks', 2999, 3999, courseDescriptions['SQL']),
  
  // MySQL
  createCourse(46, 'MySQL', 'mysql', 'Database', 'Beginner', 4.7, '4 Weeks', 999, 1499, courseDescriptions['MySQL']),
  createCourse(47, 'MySQL', 'mysql', 'Database', 'Intermediate', 4.75, '8 Weeks', 1999, 2999, courseDescriptions['MySQL']),
  createCourse(48, 'MySQL', 'mysql', 'Database', 'Advanced', 4.8, '12 Weeks', 2999, 3999, courseDescriptions['MySQL']),
  
  // Sqlite
  createCourse(49, 'Sqlite', 'sqlite', 'Database', 'Beginner', 4.6, '4 Weeks', 999, 1499, courseDescriptions['Sqlite']),
  createCourse(50, 'Sqlite', 'sqlite', 'Database', 'Intermediate', 4.65, '8 Weeks', 1999, 2999, courseDescriptions['Sqlite']),
  createCourse(51, 'Sqlite', 'sqlite', 'Database', 'Advanced', 4.7, '12 Weeks', 2999, 3999, courseDescriptions['Sqlite']),
  
  // MongoDB
  createCourse(52, 'MongoDB', 'mongodb', 'Database', 'Beginner', 4.5, '4 Weeks', 999, 1499, courseDescriptions['MongoDB']),
  createCourse(53, 'MongoDB', 'mongodb', 'Database', 'Intermediate', 4.55, '8 Weeks', 1999, 2999, courseDescriptions['MongoDB']),
  createCourse(54, 'MongoDB', 'mongodb', 'Database', 'Advanced', 4.6, '12 Weeks', 2999, 3999, courseDescriptions['MongoDB']),
  
  // DIGITAL MARKETING
  createCourse(55, 'Digital Marketing', 'digital-marketing', 'Marketing', 'Beginner', 4.7, '4 Weeks', 999, 1499, courseDescriptions['Digital Marketing']),
  createCourse(56, 'Digital Marketing', 'digital-marketing', 'Marketing', 'Intermediate', 4.75, '8 Weeks', 1999, 2999, courseDescriptions['Digital Marketing']),
  createCourse(57, 'Digital Marketing', 'digital-marketing', 'Marketing', 'Advanced', 4.8, '12 Weeks', 2999, 3999, courseDescriptions['Digital Marketing']),
];

const categories = ['All', 'Programming Languages', 'Web Development', 'Microsoft Office', 'Database', 'Marketing'];
const levels = ['All', 'Beginner', 'Intermediate', 'Advanced'];

const formatPrice = (price: number) => {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0,
  }).format(price);
};

const Courses = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedLevel, setSelectedLevel] = useState('All');
  const [showFilters, setShowFilters] = useState(false);

  const filteredCourses = allCourses.filter((course) => {
    const matchesSearch = course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      course.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || course.category === selectedCategory;
    const matchesLevel = selectedLevel === 'All' || course.level === selectedLevel;
    return matchesSearch && matchesCategory && matchesLevel;
  });

  const clearFilters = () => {
    setSearchQuery('');
    setSelectedCategory('All');
    setSelectedLevel('All');
  };

  const hasActiveFilters = searchQuery || selectedCategory !== 'All' || selectedLevel !== 'All';

  return (
    <>
      <Helmet>
        <title>Courses - Savvy Axiss | Learn In-Demand Tech Skills</title>
        <meta 
          name="description" 
          content="Explore our industry-relevant courses in Full Stack Development, Data Science, Digital Marketing, UI/UX Design, and more. Live training with real projects." 
        />
      </Helmet>

      {/* Page Header */}
      <section className="pt-32 pb-12" style={{ backgroundColor: '#004aad' }}>
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl mx-auto text-center"
          >
            {/* Breadcrumb */}
            <div className="flex items-center justify-center gap-2 text-white/70 text-sm mb-6">
              <Link to="/" className="hover:text-white transition-colors">Home</Link>
              <ChevronRight className="w-4 h-4" />
              <span className="text-white">Course</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-white mb-6">
              Courses
            </h1>
            <p className="text-lg text-white/80 mb-8">
              Industry-relevant courses designed to make you job-ready from day one.
            </p>
            
            {/* Search Bar */}
            <div className="relative max-w-xl mx-auto">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Search courses..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-12 h-14 bg-white border-border text-foreground rounded-xl"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Popular Topics Section */}
      <section className="py-12 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
              Popular Topics to Explore
            </h2>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-6">
            {[
              { name: 'Microsoft Excel', slug: 'excela', image: 'https://images.unsplash.com/photo-1589829085413-56de8ae18c73?w=400&h=300&fit=crop&q=80' },
              { name: 'SQL', slug: 'sqla', image: 'https://images.unsplash.com/photo-1544383835-bda2bc66a55d?w=400&h=300&fit=crop&q=80' },
              { name: 'Python', slug: 'pythona', image: 'https://images.unsplash.com/photo-1526379095098-d400fd0bf935?w=400&h=300&fit=crop&q=80' },
              { name: 'Java', slug: 'javaa', image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=400&h=300&fit=crop&q=80' },
              { name: 'Web Design', slug: 'cssa', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop&q=80' },
              { name: 'Web Development', slug: 'htmla', image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=400&h=300&fit=crop&q=80' },
              { name: 'MySQL', slug: 'mysqla', image: 'https://images.unsplash.com/photo-1544383835-bda2bc66a55d?w=400&h=300&fit=crop&q=80' },
              { name: 'UI/UX Design', slug: 'javascripta', image: 'https://images.unsplash.com/photo-1579468118864-1b9ea3c0db4a?w=400&h=300&fit=crop&q=80' },
            ].map((topic, index) => (
              <motion.div
                key={topic.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link to={`/courses/${topic.slug}`} className="block group">
                  <div className="bg-card rounded-xl overflow-hidden border border-border hover:border-secondary/50 transition-all duration-300 card-hover">
                    <div className="relative h-32 overflow-hidden">
                      <img
                        src={topic.image}
                        alt={topic.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent" />
                    </div>
                    <div className="p-4 text-center">
                      <h3 className="font-heading font-semibold text-foreground group-hover:text-secondary transition-colors">
                        {topic.name}
                      </h3>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Perks & Benefits Section */}
      <section className="py-12 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
              Perks & Benefits
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: Gift, title: 'Referral Offers', description: 'Earn rewards by referring friends to our courses.' },
              { icon: Home, title: 'Learn from Home', description: 'Learn Classes from anywhere at your convenience.' },
              { icon: Headphones, title: '24/7 Assistance', description: 'Get your queries resolved anytime, day or night.' },
              { icon: Clock, title: 'Flexible Learning Hours', description: 'Study at your own pace with flexible scheduling.' },
              { icon: Book, title: 'Complete Notes Facility', description: 'Receive comprehensive notes for every course.' },
              { icon: Award, title: 'Completion Certificate', description: 'Get a certificate upon course completion to boost your resume.' },
              { icon: DollarSign, title: 'Installment Options', description: 'Flexible payment plans available to make courses affordable.' },
              { icon: MessageCircle, title: 'Interactive Learning', description: 'Engage with instructors and peers through interactive sessions.' },
              { icon: Network, title: 'Real-World Projects', description: 'Work on practical projects to apply your knowledge.' },
            ].map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-card p-6 rounded-xl border border-border hover:border-secondary/50 transition-all duration-300 card-hover"
              >
                <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center mb-4">
                  <benefit.icon className="w-6 h-6 text-secondary" />
                </div>
                <h3 className="text-lg font-heading font-semibold text-foreground mb-2">
                  {benefit.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Courses Section */}
      <section className="py-12 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
              Explore New and Trending Online Courses
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {[
              { slug: 'pythona', title: 'Python Programming', image: 'https://images.unsplash.com/photo-1526379095098-d400fd0bf935?w=500&h=300&fit=crop&q=80', rating: 5.0, level: 'Advanced', duration: '12 Weeks', price: 2999 },
              { slug: 'cssb', title: 'CSS', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=300&fit=crop&q=80', rating: 4.8, level: 'Beginner', duration: '4 Weeks', price: 999 },
              { slug: 'htmla', title: 'HTML', image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=500&h=300&fit=crop&q=80', rating: 5.0, level: 'Advanced', duration: '12 Weeks', price: 2999 },
              { slug: 'aspi', title: 'ASP.NET', image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=500&h=300&fit=crop&q=80', rating: 4.55, level: 'Intermediate', duration: '8 Weeks', price: 1999 },
            ].map((course, index) => (
              <motion.div
                key={course.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link to={`/courses/${course.slug}`} className="block group">
                  <div className="bg-card rounded-2xl overflow-hidden border border-border hover:border-secondary/50 transition-all duration-300 card-hover h-full">
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={course.image}
                        alt={course.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent" />
                      <span className="absolute top-4 right-4 px-3 py-1 rounded-full bg-primary/80 backdrop-blur-sm text-primary-foreground text-xs font-medium">
                        {course.level}
                      </span>
                    </div>
                    <div className="p-5">
                      <h3 className="text-lg font-heading font-semibold text-foreground mb-2 group-hover:text-secondary transition-colors">
                        {course.title}
                      </h3>
                      <div className="flex items-center gap-2 mb-3">
                        <Star className="w-4 h-4 fill-warning text-warning" />
                        <span className="font-semibold text-foreground">{course.rating}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                        <Clock className="w-4 h-4" />
                        <span>{course.duration}</span>
                      </div>
                      <div className="text-xl font-bold text-foreground">
                        {formatPrice(course.price)}
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Courses Grid */}
      <section className="py-12 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Filters Sidebar */}
            <div className={`lg:w-64 flex-shrink-0 ${showFilters ? 'block' : 'hidden lg:block'}`}>
              <div className="bg-card p-6 rounded-xl border border-border sticky top-24">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="font-heading font-semibold text-foreground">Filters</h3>
                  {hasActiveFilters && (
                    <button
                      onClick={clearFilters}
                      className="text-sm text-secondary hover:underline"
                    >
                      Clear All
                    </button>
                  )}
                </div>

                {/* Categories */}
                <div className="mb-6">
                  <h4 className="text-sm font-medium text-foreground mb-3">Category</h4>
                  <div className="space-y-2">
                    {categories.map((category) => (
                      <label
                        key={category}
                        className="flex items-center gap-2 cursor-pointer"
                      >
                        <input
                          type="radio"
                          name="category"
                          checked={selectedCategory === category}
                          onChange={() => setSelectedCategory(category)}
                          className="text-secondary focus:ring-secondary"
                        />
                        <span className="text-sm text-muted-foreground">{category}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Levels */}
                <div>
                  <h4 className="text-sm font-medium text-foreground mb-3">Level</h4>
                  <div className="space-y-2">
                    {levels.map((level) => (
                      <label
                        key={level}
                        className="flex items-center gap-2 cursor-pointer"
                      >
                        <input
                          type="radio"
                          name="level"
                          checked={selectedLevel === level}
                          onChange={() => setSelectedLevel(level)}
                          className="text-secondary focus:ring-secondary"
                        />
                        <span className="text-sm text-muted-foreground">{level}</span>
                      </label>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Main Content */}
            <div className="flex-1">
              {/* Mobile Filter Button */}
              <div className="lg:hidden mb-6">
                <Button
                  variant="outline"
                  onClick={() => setShowFilters(!showFilters)}
                  className="w-full"
                >
                  <Filter className="w-4 h-4 mr-2" />
                  {showFilters ? 'Hide Filters' : 'Show Filters'}
                </Button>
              </div>

              {/* Results Count */}
              <div className="flex items-center justify-between mb-6">
                <p className="text-muted-foreground">
                  Showing <span className="font-semibold text-foreground">{filteredCourses.length}</span> courses
                </p>
                {hasActiveFilters && (
                  <div className="flex items-center gap-2 flex-wrap">
                    {searchQuery && (
                      <span className="inline-flex items-center gap-1 px-3 py-1 bg-secondary/10 text-secondary rounded-full text-sm">
                        "{searchQuery}"
                        <X className="w-3 h-3 cursor-pointer" onClick={() => setSearchQuery('')} />
                      </span>
                    )}
                    {selectedCategory !== 'All' && (
                      <span className="inline-flex items-center gap-1 px-3 py-1 bg-secondary/10 text-secondary rounded-full text-sm">
                        {selectedCategory}
                        <X className="w-3 h-3 cursor-pointer" onClick={() => setSelectedCategory('All')} />
                      </span>
                    )}
                    {selectedLevel !== 'All' && (
                      <span className="inline-flex items-center gap-1 px-3 py-1 bg-secondary/10 text-secondary rounded-full text-sm">
                        {selectedLevel}
                        <X className="w-3 h-3 cursor-pointer" onClick={() => setSelectedLevel('All')} />
                      </span>
                    )}
                  </div>
                )}
              </div>

              {/* Courses Grid */}
              {filteredCourses.length > 0 ? (
                <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
                  {filteredCourses.map((course, index) => (
                    <motion.div
                      key={course.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                    >
                      <Link to={`/courses/${course.slug}`} className="block group">
                        <div className="bg-card rounded-2xl overflow-hidden border border-border hover:border-secondary/50 transition-all duration-300 card-hover h-full">
                          {/* Image */}
                          <div className="relative h-48 overflow-hidden">
                            <img
                              src={course.image}
                              alt={course.title}
                              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent" />
                            
                            {/* Badge - currently not used */}

                            <span className="absolute top-4 right-4 px-3 py-1 rounded-full bg-primary/80 backdrop-blur-sm text-primary-foreground text-xs font-medium">
                              {course.level}
                            </span>
                          </div>

                          {/* Content */}
                          <div className="p-5">
                            <span className="text-xs font-medium text-secondary mb-2 block">
                              {course.category}
                            </span>
                            <h3 className="text-lg font-heading font-semibold text-foreground mb-2 group-hover:text-secondary transition-colors duration-300">
                              {course.title}
                            </h3>
                            <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                              {course.description}
                            </p>

                            <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                              <span className="flex items-center gap-1">
                                <Clock className="w-4 h-4" />
                                {course.duration}
                              </span>
                              <span className="flex items-center gap-1">
                                <Users className="w-4 h-4" />
                                {course.mode}
                              </span>
                            </div>

                            <div className="flex items-center gap-2 mb-4">
                              <Star className="w-4 h-4 fill-warning text-warning" />
                              <span className="font-semibold text-foreground">{course.rating}</span>
                              <span className="text-muted-foreground text-sm">
                                ({course.reviews})
                              </span>
                            </div>

                            <div className="flex items-center gap-3">
                              <span className="text-xl font-bold text-foreground">
                                {formatPrice(course.price)}
                              </span>
                              <span className="text-sm text-muted-foreground line-through">
                                {formatPrice(course.originalPrice)}
                              </span>
                            </div>
                          </div>
                        </div>
                      </Link>
                    </motion.div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-16">
                  <p className="text-muted-foreground text-lg mb-4">
                    No courses found matching your criteria.
                  </p>
                  <Button variant="secondary" onClick={clearFilters}>
                    Clear Filters
                  </Button>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Courses;
