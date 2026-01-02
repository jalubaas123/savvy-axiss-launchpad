import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useInView } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import type { Swiper as SwiperType } from 'swiper';
import { Clock, Users, Star, ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import 'swiper/css';
import 'swiper/css/pagination';

const courses = [
  {
    id: 1,
    slug: 'pythona',
    title: 'Python Programming - Advanced',
    image: '/python.png',
    duration: '12 Weeks',
    mode: 'Live Online',
    price: 2999,
    originalPrice: 3999,
    rating: 5.0,
    reviews: 250,
    badge: 'POPULAR',
    category: 'Programming Languages',
  },
  {
    id: 2,
    slug: 'cssb',
    title: 'CSS - Beginner',
    image: '/css.png',
    duration: '4 Weeks',
    mode: 'Live Online',
    price: 999,
    originalPrice: 1499,
    rating: 4.8,
    reviews: 180,
    badge: 'POPULAR',
    category: 'Web Development',
  },
  {
    id: 3,
    slug: 'htmla',
    title: 'HTML - Advanced',
    image: '/html.png',
    duration: '12 Weeks',
    mode: 'Live Online',
    price: 2999,
    originalPrice: 3999,
    rating: 5.0,
    reviews: 220,
    badge: 'POPULAR',
    category: 'Web Development',
  },
  {
    id: 4,
    slug: 'aspi',
    title: 'ASP.NET - Intermediate',
    image: '/webdevelopment.png',
    duration: '8 Weeks',
    mode: 'Live Online',
    price: 1999,
    originalPrice: 2999,
    rating: 4.55,
    reviews: 150,
    category: 'Web Development',
  },
];

const formatPrice = (price: number) => {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0,
  }).format(price);
};

export const FeaturedCourses = () => {
  const ref = useRef(null);
  const swiperRef = useRef<SwiperType | null>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="py-20 lg:py-28 bg-muted/50">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12"
        >
          <div>
            <span className="inline-block px-4 py-1 rounded-full bg-secondary/10 text-secondary text-sm font-medium mb-4">
              Featured Courses
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground section-title">
              Start Your Learning Journey
            </h2>
            <p className="text-muted-foreground max-w-xl mt-6">
              Industry-relevant courses designed to make you job-ready from day one.
            </p>
          </div>
          <Button variant="ctaOutline" asChild>
            <Link to="/courses">
              View All Courses
              <ArrowRight className="w-4 h-4" />
            </Link>
          </Button>
        </motion.div>

        {/* Courses Carousel */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="relative"
        >
          {/* Left Navigation Button */}
          <button
            onClick={() => swiperRef.current?.slidePrev()}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 lg:-translate-x-6 z-10 w-12 h-12 rounded-full border border-border bg-card hover:bg-secondary hover:border-secondary hover:text-secondary-foreground transition-all duration-300 flex items-center justify-center text-muted-foreground shadow-lg hidden md:flex"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          {/* Right Navigation Button */}
          <button
            onClick={() => swiperRef.current?.slideNext()}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 lg:translate-x-6 z-10 w-12 h-12 rounded-full border border-border bg-card hover:bg-secondary hover:border-secondary hover:text-secondary-foreground transition-all duration-300 flex items-center justify-center text-muted-foreground shadow-lg hidden md:flex"
            aria-label="Next slide"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={24}
            slidesPerView={1}
            onSwiper={(swiper) => (swiperRef.current = swiper)}
            pagination={{ clickable: true }}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
              1280: { slidesPerView: 3.5 },
            }}
            className="!pb-12"
          >
            {courses.map((course) => (
              <SwiperSlide key={course.id}>
                <Link to={`/courses/${course.slug}`} className="block group">
                  <div className="bg-card rounded-2xl overflow-hidden border border-border hover:border-secondary/50 transition-all duration-300 card-hover">
                    {/* Image */}
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={course.image}
                        alt={course.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent" />
                      
                      {/* Badge */}
                      {course.badge && (
                        <span className={`absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-semibold ${
                          course.badge === 'NEW' 
                            ? 'bg-success text-success-foreground' 
                            : 'bg-secondary text-secondary-foreground'
                        }`}>
                          {course.badge}
                        </span>
                      )}

                      {/* Category */}
                      <span className="absolute top-4 right-4 px-3 py-1 rounded-full bg-primary/80 backdrop-blur-sm text-primary-foreground text-xs font-medium">
                        {course.category}
                      </span>
                    </div>

                    {/* Content */}
                    <div className="p-5">
                      <h3 className="text-lg font-heading font-semibold text-foreground mb-3 line-clamp-2 group-hover:text-secondary transition-colors duration-300">
                        {course.title}
                      </h3>

                      {/* Meta */}
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

                      {/* Rating */}
                      <div className="flex items-center gap-2 mb-4">
                        <div className="flex items-center gap-1">
                          <Star className="w-4 h-4 fill-warning text-warning" />
                          <span className="font-semibold text-foreground">{course.rating}</span>
                        </div>
                        <span className="text-muted-foreground text-sm">
                          ({course.reviews} reviews)
                        </span>
                      </div>

                      {/* Price */}
                      <div className="flex items-center gap-3">
                        <span className="text-xl font-bold text-foreground">
                          {formatPrice(course.price)}
                        </span>
                        <span className="text-sm text-muted-foreground line-through">
                          {formatPrice(course.originalPrice)}
                        </span>
                        <span className="px-2 py-0.5 rounded bg-success/10 text-success text-xs font-semibold">
                          {Math.round((1 - course.price / course.originalPrice) * 100)}% OFF
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
      </div>
    </section>
  );
};
