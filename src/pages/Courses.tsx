import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Search, Clock, Users, Star, Filter, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const allCourses = [
  {
    id: 1,
    slug: 'full-stack-development',
    title: 'Full Stack Development',
    description: 'Master frontend and backend development with React, Node.js, and MongoDB.',
    image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=500&h=300&fit=crop',
    duration: '12 Weeks',
    mode: 'Live Online',
    price: 49999,
    originalPrice: 79999,
    rating: 4.9,
    reviews: 128,
    badge: 'POPULAR',
    category: 'Development',
    level: 'Intermediate',
  },
  {
    id: 2,
    slug: 'data-science',
    title: 'Data Science & Machine Learning',
    description: 'Learn Python, ML algorithms, and data analysis with hands-on projects.',
    image: 'https://images.unsplash.com/photo-1518186285589-2f7649de83e0?w=500&h=300&fit=crop',
    duration: '16 Weeks',
    mode: 'Live Online',
    price: 59999,
    originalPrice: 89999,
    rating: 4.8,
    reviews: 96,
    badge: 'NEW',
    category: 'Data',
    level: 'Intermediate',
  },
  {
    id: 3,
    slug: 'digital-marketing',
    title: 'Digital Marketing Mastery',
    description: 'Master SEO, social media, PPC, and content marketing strategies.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&h=300&fit=crop',
    duration: '8 Weeks',
    mode: 'Live Online',
    price: 29999,
    originalPrice: 49999,
    rating: 4.7,
    reviews: 84,
    category: 'Marketing',
    level: 'Beginner',
  },
  {
    id: 4,
    slug: 'ui-ux-design',
    title: 'UI/UX Design Professional',
    description: 'Create stunning user interfaces with Figma, design thinking, and prototyping.',
    image: 'https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?w=500&h=300&fit=crop',
    duration: '10 Weeks',
    mode: 'Live Online',
    price: 39999,
    originalPrice: 59999,
    rating: 4.9,
    reviews: 72,
    badge: 'POPULAR',
    category: 'Design',
    level: 'Beginner',
  },
  {
    id: 5,
    slug: 'cloud-computing',
    title: 'Cloud Computing & DevOps',
    description: 'Master AWS, Docker, Kubernetes, and CI/CD pipelines.',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=500&h=300&fit=crop',
    duration: '14 Weeks',
    mode: 'Live Online',
    price: 54999,
    originalPrice: 84999,
    rating: 4.8,
    reviews: 64,
    category: 'Cloud',
    level: 'Advanced',
  },
  {
    id: 6,
    slug: 'python-programming',
    title: 'Python Programming Fundamentals',
    description: 'Learn Python from scratch with practical projects and exercises.',
    image: 'https://images.unsplash.com/photo-1526379095098-d400fd0bf935?w=500&h=300&fit=crop',
    duration: '6 Weeks',
    mode: 'Live Online',
    price: 19999,
    originalPrice: 34999,
    rating: 4.9,
    reviews: 156,
    category: 'Development',
    level: 'Beginner',
  },
];

const categories = ['All', 'Development', 'Data', 'Marketing', 'Design', 'Cloud'];
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

      {/* Hero */}
      <section className="pt-32 pb-12 hero-gradient">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-primary-foreground mb-6">
              Explore Our <span className="gradient-text">Courses</span>
            </h1>
            <p className="text-lg text-primary-foreground/70 mb-8">
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
                className="pl-12 h-14 bg-card border-border text-foreground rounded-xl"
              />
            </div>
          </motion.div>
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
                            
                            {course.badge && (
                              <span className={`absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-semibold ${
                                course.badge === 'NEW' 
                                  ? 'bg-success text-success-foreground' 
                                  : 'bg-secondary text-secondary-foreground'
                              }`}>
                                {course.badge}
                              </span>
                            )}

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
