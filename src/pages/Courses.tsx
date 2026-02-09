import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Search, Clock, Users, Star, Filter, X, Gift, Home, Headphones, Book, Award, DollarSign, MessageCircle, Network, ChevronRight, Share2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { SEO_BASE_URL, createBreadcrumbSchema, createFAQSchema } from '@/lib/seo';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const coursesBreadcrumbSchema = createBreadcrumbSchema([
  { name: 'Home', url: '/' },
  { name: 'Courses', url: '/courses' },
]);

const coursesFAQs = createFAQSchema([
  {
    question: 'Where can I learn programming courses in Chennai?',
    answer: 'Savvy Axiss offers programming courses in Chennai at Maduravoyal: Python, Java, MERN Full Stack, React, Digital Marketing, Excel, and more. Live online and in-person batches with certificate.',
  },
  {
    question: 'What programming courses are best for beginners in Chennai?',
    answer: 'Python, Java, HTML, CSS, and JavaScript beginner courses are ideal. Savvy Axiss Chennai offers 4-week beginner batches with hands-on projects and certificate.',
  },
  {
    question: 'Do you provide certificate after completing a course in Chennai?',
    answer: 'Yes. Savvy Axiss provides a certificate on course completion. We also offer soft skill training and placement guidance for Chennai students.',
  },
]);

// Course image mapping - appropriate images for each course
const courseImages: Record<string, string> = {
  'Python Programming': '/python.png',
  'Java Programming': '/java.png',
  'HTML': '/html.png',
  'CSS': '/css.png',
  'JavaScript': '/javascript.png',
  'React': '/webdevelopment.png',
  'Excel': '/msexcel.png',
  'MySQL': '/mysql.png',
  'Sqlite': '/sqlite.png',
  'MongoDB': '/mongodb.png',
  'Digital Marketing': '/digital-marketing.png',
  'MERN Full Stack': '/webdevelopment.png',
  'Python Full Stack': '/python-fullstack.png',
  'Vibe Coding': '/vibecoding.png',
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
  slug: baseSlug === 'vibe-coding' ? 'vibe-coding' : `${baseSlug}-${level.toLowerCase()}`,
  title: `${name}${level === 'Beginner' ? ' - Beginner' : level === 'Intermediate' ? ' - Intermediate' : ' - Advanced'}`,
  description,
  image: courseImages[name] || '/placeholder.svg',
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
  'Python Programming': 'Learn Python programming from basics to advanced. Master data structures, algorithms, and real-world applications.',
  'Java Programming': 'Comprehensive Java programming course covering OOP concepts, collections, multithreading, and Java frameworks.',
  'HTML': 'Master HTML5 fundamentals. Learn semantic markup, forms, multimedia, and modern web development practices.',
  'CSS': 'Learn CSS3 styling, layouts, animations, and responsive design. Create beautiful and modern web interfaces.',
  'JavaScript': 'Master JavaScript programming. Learn ES6+, DOM manipulation, async programming, and modern JavaScript frameworks.',
  'React': 'Master React.js framework. Learn components, hooks, state management, routing, and build modern single-page applications.',
  'Excel': 'Master Microsoft Excel. Learn formulas, functions, data analysis, pivot tables, charts, and automation.',
  'MySQL': 'Master MySQL database management. Learn database design, administration, optimization, and advanced features.',
  'Sqlite': 'Learn SQLite database programming. Master lightweight database management for applications and mobile development.',
  'MongoDB': 'Master MongoDB NoSQL database. Learn document modeling, queries, aggregation, and database administration.',
  'Digital Marketing': 'Master digital marketing strategies. Learn SEO, social media marketing, PPC advertising, content marketing, email marketing, and analytics.',
  'MERN Full Stack': 'Master the complete MERN stack (MongoDB, Express.js, React, Node.js) to build full-stack web applications with modern development practices.',
  'Python Full Stack': 'Master Python full-stack development with Django/Flask, React, and PostgreSQL. Build scalable web applications using Python backend.',
  'Vibe Coding': 'A complete end-to-end program from absolute beginner to confident AI-powered developer. Learn to build real-world applications using AI tools like Cursor, ChatGPT, and GitHub Copilot. Focus on thinking, building, debugging, and shipping - not memorizing syntax.',
};

export const allCourses = [
  
  // Python Programming
  createCourse(7, 'Python Programming', 'python', 'Programming Languages', 'Beginner', 4.8, '4 Weeks', 999, 1499, courseDescriptions['Python Programming']),
  createCourse(8, 'Python Programming', 'python', 'Programming Languages', 'Intermediate', 4.85, '8 Weeks', 1999, 2999, courseDescriptions['Python Programming']),
  createCourse(9, 'Python Programming', 'python', 'Programming Languages', 'Advanced', 5.0, '12 Weeks', 2999, 3999, courseDescriptions['Python Programming']),
  
  // Java Programming
  createCourse(10, 'Java Programming', 'java', 'Programming Languages', 'Beginner', 4.75, '4 Weeks', 999, 1499, courseDescriptions['Java Programming']),
  createCourse(11, 'Java Programming', 'java', 'Programming Languages', 'Intermediate', 4.8, '8 Weeks', 1999, 2999, courseDescriptions['Java Programming']),
  createCourse(12, 'Java Programming', 'java', 'Programming Languages', 'Advanced', 4.85, '12 Weeks', 2999, 3999, courseDescriptions['Java Programming']),
  
  
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
  
  // React
  createCourse(25, 'React', 'react', 'Web Development', 'Beginner', 4.8, '4 Weeks', 999, 1499, courseDescriptions['React']),
  createCourse(26, 'React', 'react', 'Web Development', 'Intermediate', 4.85, '8 Weeks', 1999, 2999, courseDescriptions['React']),
  createCourse(27, 'React', 'react', 'Web Development', 'Advanced', 4.9, '12 Weeks', 2999, 3999, courseDescriptions['React']),
  
  
  // Excel
  createCourse(34, 'Excel', 'excel', 'Microsoft Office', 'Beginner', 4.9, '2 Weeks', 499, 799, courseDescriptions['Excel']),
  createCourse(35, 'Excel', 'excel', 'Microsoft Office', 'Intermediate', 4.95, '4 Weeks', 999, 1499, courseDescriptions['Excel']),
  createCourse(36, 'Excel', 'excel', 'Microsoft Office', 'Advanced', 5.0, '6 Weeks', 1499, 1999, courseDescriptions['Excel']),
  
  
  // MySQL
  createCourse(46, 'MySQL', 'mysql', 'Database', 'Beginner', 4.7, '4 Weeks', 999, 1499, courseDescriptions['MySQL']),
  createCourse(47, 'MySQL', 'mysql', 'Database', 'Intermediate', 4.75, '8 Weeks', 1999, 2999, courseDescriptions['MySQL']),
  createCourse(48, 'MySQL', 'mysql', 'Database', 'Advanced', 4.8, '12 Weeks', 2999, 3999, courseDescriptions['MySQL']),
  
  
  // MongoDB
  createCourse(52, 'MongoDB', 'mongodb', 'Database', 'Beginner', 4.5, '4 Weeks', 999, 1499, courseDescriptions['MongoDB']),
  createCourse(53, 'MongoDB', 'mongodb', 'Database', 'Intermediate', 4.55, '8 Weeks', 1999, 2999, courseDescriptions['MongoDB']),
  createCourse(54, 'MongoDB', 'mongodb', 'Database', 'Advanced', 4.6, '12 Weeks', 2999, 3999, courseDescriptions['MongoDB']),
  
  // DIGITAL MARKETING
  createCourse(55, 'Digital Marketing', 'digital-marketing', 'Marketing', 'Beginner', 4.7, '4 Weeks', 999, 1499, courseDescriptions['Digital Marketing']),
  createCourse(56, 'Digital Marketing', 'digital-marketing', 'Marketing', 'Intermediate', 4.75, '8 Weeks', 1999, 2999, courseDescriptions['Digital Marketing']),
  createCourse(57, 'Digital Marketing', 'digital-marketing', 'Marketing', 'Advanced', 4.8, '12 Weeks', 2999, 3999, courseDescriptions['Digital Marketing']),
  
  // MERN FULL STACK
  createCourse(58, 'MERN Full Stack', 'mern-fullstack', 'Web Development', 'Beginner', 4.85, '4 Weeks', 1999, 2999, courseDescriptions['MERN Full Stack']),
  createCourse(59, 'MERN Full Stack', 'mern-fullstack', 'Web Development', 'Intermediate', 4.9, '8 Weeks', 3999, 5999, courseDescriptions['MERN Full Stack']),
  createCourse(60, 'MERN Full Stack', 'mern-fullstack', 'Web Development', 'Advanced', 4.95, '12 Weeks', 5999, 8999, courseDescriptions['MERN Full Stack']),
  
  // PYTHON FULL STACK
  createCourse(61, 'Python Full Stack', 'python-fullstack', 'Web Development', 'Beginner', 4.8, '4 Weeks', 1999, 2999, courseDescriptions['Python Full Stack']),
  createCourse(62, 'Python Full Stack', 'python-fullstack', 'Web Development', 'Intermediate', 4.85, '8 Weeks', 3999, 5999, courseDescriptions['Python Full Stack']),
  createCourse(63, 'Python Full Stack', 'python-fullstack', 'Web Development', 'Advanced', 4.9, '12 Weeks', 5999, 8999, courseDescriptions['Python Full Stack']),
  
  // VIBE CODING - Single level course/workshop
  createCourse(64, 'Vibe Coding', 'vibe-coding', 'Programming Languages', 'Beginner', 4.9, '12 Weeks', 2499, 3499, courseDescriptions['Vibe Coding']),
];

const categories = ['All', 'Programming Languages', 'Web Development', 'Microsoft Office', 'Database', 'Marketing'];
const levels = ['Beginner', 'Intermediate', 'Advanced'] as const;

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
  const [selectedLevel, setSelectedLevel] = useState<'Beginner' | 'Intermediate' | 'Advanced'>('Beginner');
  const [showFilters, setShowFilters] = useState(false);

  const filteredCourses = allCourses.filter((course) => {
    const matchesSearch = course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      course.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || course.category === selectedCategory;
    const matchesLevel = course.level === selectedLevel;
    return matchesSearch && matchesCategory && matchesLevel;
  });

  const clearFilters = () => {
    setSearchQuery('');
    setSelectedCategory('All');
    setSelectedLevel('Beginner');
  };

  const hasActiveFilters = searchQuery || selectedCategory !== 'All' || selectedLevel !== 'Beginner';

  return (
    <>
      <Helmet>
        <title>Programming Courses in Chennai | Python, Java, MERN, Full Stack | Savvy Axiss</title>
        <meta
          name="description"
          content="Best programming courses in Chennai: Python, Java, MERN Full Stack, React, Digital Marketing, Excel. Live training in Maduravoyal. Certificate, placement support. Enroll now."
        />
        <meta
          name="keywords"
          content="programming courses in Chennai, Python course Chennai, Java training Chennai, MERN stack course Chennai, learn programming Chennai, tech courses Chennai, Savvy Axiss courses"
        />
        <link rel="canonical" href={`${SEO_BASE_URL}/courses`} />
        <meta property="og:title" content="Programming Courses in Chennai | Savvy Axiss" />
        <meta property="og:description" content="Python, Java, MERN, React, Digital Marketing in Chennai. Live training, certificate, placement support. Maduravoyal." />
        <meta property="og:url" content={`${SEO_BASE_URL}/courses`} />
        <script type="application/ld+json">{JSON.stringify(coursesBreadcrumbSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(coursesFAQs)}</script>
      </Helmet>

      {/* Page Header */}
      <section className="pt-24 sm:pt-32 pb-8 sm:pb-12" style={{ backgroundColor: '#004aad' }}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
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
              <span className="text-white">Courses</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-white mb-6">
              Programming Courses in Chennai
            </h1>
            <p className="text-lg text-white/80 mb-8">
              Industry-relevant programming courses in Chennai—Python, Java, MERN, React, Digital Marketing. Live training at Maduravoyal, certificate, job-ready from day one.
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
      <section className="py-8 sm:py-12 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
              Popular Topics to Explore
            </h2>
          </motion.div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-4 sm:gap-6">
            {[
              { name: 'Microsoft Excel', slug: 'excel-advanced', image: '/msexcel.png' },
              { name: 'Python', slug: 'python-advanced', image: '/python.png' },
              { name: 'Java', slug: 'java-advanced', image: '/java.png' },
              { name: 'Web Design', slug: 'css-advanced', image: '/webdesign.png' },
              { name: 'Web Development', slug: 'html-advanced', image: '/webdevelopment.png' },
              { name: 'MySQL', slug: 'mysql-advanced', image: '/mysql.png' },
              { name: 'JavaScript', slug: 'javascript-advanced', image: '/javascript.png' },
              { name: 'React', slug: 'react-advanced', image: '/webdevelopment.png' },
              { name: 'Digital Marketing', slug: 'digital-marketing-advanced', image: '/digital-marketing.png' },
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
                    <div className="relative h-24 sm:h-32 overflow-hidden">
                      <img
                        src={topic.image}
                        alt={topic.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent" />
                    </div>
                    <div className="p-3 sm:p-4 text-center">
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
          <p className="text-center text-muted-foreground text-sm mt-8 max-w-2xl mx-auto">
            Also explore our <Link to="/projects" className="text-secondary font-medium hover:underline">final year project solutions in Chennai</Link>,{' '}
            <Link to="/internship" className="text-secondary font-medium hover:underline">internship programs in Chennai</Link>, and{' '}
            <Link to="/web-development" className="text-secondary font-medium hover:underline">website development services</Link>.{' '}
            <Link to="/about" className="text-secondary font-medium hover:underline">About Savvy Axiss</Link> ·{' '}
            <Link to="/contact" className="text-secondary font-medium hover:underline">Contact us</Link> ·{' '}
            <Link to="/apply" className="text-secondary font-medium hover:underline">Apply for a free demo</Link>.
          </p>
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
              { slug: 'python-advanced', title: 'Python Programming', image: '/python.png', rating: 5.0, level: 'Advanced', duration: '12 Weeks', price: 2999 },
              { slug: 'css-beginner', title: 'CSS', image: '/css.png', rating: 4.8, level: 'Beginner', duration: '4 Weeks', price: 999 },
              { slug: 'html-advanced', title: 'HTML', image: '/html.png', rating: 5.0, level: 'Advanced', duration: '12 Weeks', price: 2999 },
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
                        {course.slug === 'vibe-coding' ? 'Complete Course' : course.level}
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
                    {selectedLevel !== 'Beginner' && (
                      <span className="inline-flex items-center gap-1 px-3 py-1 bg-secondary/10 text-secondary rounded-full text-sm">
                        {selectedLevel}
                        <X className="w-3 h-3 cursor-pointer" onClick={() => setSelectedLevel('Beginner')} />
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
                              {course.slug === 'vibe-coding' ? 'Complete Course' : course.level}
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

                            <div className="flex items-center justify-between">
                              <div className="flex items-center gap-3">
                                <span className="text-xl font-bold text-foreground">
                                  {formatPrice(course.price)}
                                </span>
                                <span className="text-sm text-muted-foreground line-through">
                                  {formatPrice(course.originalPrice)}
                                </span>
                              </div>
                              <Button
                                variant="ghost"
                                size="icon"
                                className="h-8 w-8"
                                onClick={(e) => {
                                  e.preventDefault();
                                  e.stopPropagation();
                                  const url = `${window.location.origin}/courses/${course.slug}`;
                                  if (navigator.share) {
                                    navigator.share({
                                      title: course.title,
                                      text: course.description,
                                      url: url,
                                    });
                                  } else {
                                    navigator.clipboard.writeText(url);
                                    alert('Course link copied to clipboard!');
                                  }
                                }}
                              >
                                <Share2 className="w-4 h-4" />
                              </Button>
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

              {/* FAQ — educational intent, local keywords */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="mt-16 max-w-3xl mx-auto"
              >
                <h2 className="text-2xl font-heading font-bold text-foreground mb-6">
                  Frequently Asked Questions – Programming Courses in Chennai
                </h2>
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="courses-faq-1">
                    <AccordionTrigger>Where can I learn programming courses in Chennai?</AccordionTrigger>
                    <AccordionContent>
                      Savvy Axiss offers programming courses in Chennai at Maduravoyal: Python, Java, MERN Full Stack, React, Digital Marketing, Excel, and more. Live online and in-person batches with certificate.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="courses-faq-2">
                    <AccordionTrigger>What programming courses are best for beginners in Chennai?</AccordionTrigger>
                    <AccordionContent>
                      Python, Java, HTML, CSS, and JavaScript beginner courses are ideal. Savvy Axiss Chennai offers 4-week beginner batches with hands-on projects and certificate.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="courses-faq-3">
                    <AccordionTrigger>Do you provide certificate after completing a course in Chennai?</AccordionTrigger>
                    <AccordionContent>
                      Yes. Savvy Axiss provides a certificate on course completion. We also offer soft skill training and placement guidance for Chennai students.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Courses;
