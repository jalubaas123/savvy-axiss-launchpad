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
    slug: 'full-stack-development',
    title: 'Full Stack Development',
    image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=500&h=300&fit=crop',
    duration: '12 Weeks',
    mode: 'Live Online',
    price: 49999,
    originalPrice: 79999,
    rating: 4.9,
    reviews: 128,
    badge: 'POPULAR',
    category: 'Development',
  },
  {
    id: 2,
    slug: 'data-science',
    title: 'Data Science & Machine Learning',
    image: 'https://images.unsplash.com/photo-1518186285589-2f7649de83e0?w=500&h=300&fit=crop',
    duration: '16 Weeks',
    mode: 'Live Online',
    price: 59999,
    originalPrice: 89999,
    rating: 4.8,
    reviews: 96,
    badge: 'NEW',
    category: 'Data',
  },
  {
    id: 3,
    slug: 'digital-marketing',
    title: 'Digital Marketing Mastery',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&h=300&fit=crop',
    duration: '8 Weeks',
    mode: 'Live Online',
    price: 29999,
    originalPrice: 49999,
    rating: 4.7,
    reviews: 84,
    category: 'Marketing',
  },
  {
    id: 4,
    slug: 'ui-ux-design',
    title: 'UI/UX Design Professional',
    image: 'https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?w=500&h=300&fit=crop',
    duration: '10 Weeks',
    mode: 'Live Online',
    price: 39999,
    originalPrice: 59999,
    rating: 4.9,
    reviews: 72,
    badge: 'POPULAR',
    category: 'Design',
  },
  {
    id: 5,
    slug: 'cloud-computing',
    title: 'Cloud Computing & DevOps',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=500&h=300&fit=crop',
    duration: '14 Weeks',
    mode: 'Live Online',
    price: 54999,
    originalPrice: 84999,
    rating: 4.8,
    reviews: 64,
    category: 'Cloud',
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
        >
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
            className="!pb-16"
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

          {/* Custom Navigation Buttons */}
          <div className="flex items-center justify-center gap-4 mt-6">
            <button
              onClick={() => swiperRef.current?.slidePrev()}
              className="w-12 h-12 rounded-full border border-border bg-card hover:bg-secondary hover:border-secondary hover:text-secondary-foreground transition-all duration-300 flex items-center justify-center text-muted-foreground"
              aria-label="Previous slide"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => swiperRef.current?.slideNext()}
              className="w-12 h-12 rounded-full border border-border bg-card hover:bg-secondary hover:border-secondary hover:text-secondary-foreground transition-all duration-300 flex items-center justify-center text-muted-foreground"
              aria-label="Next slide"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
