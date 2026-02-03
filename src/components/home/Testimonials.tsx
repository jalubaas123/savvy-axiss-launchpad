import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useInView } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import { Star, Quote } from 'lucide-react';
import 'swiper/css';
import 'swiper/css/pagination';

// Real student testimonials — add here once you have verified, permission-based quotes
const testimonials: Array<{ id: number; name: string; role: string; image: string; content: string; rating: number; course: string }> = [];

export const Testimonials = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="py-12 sm:py-20 lg:py-28 bg-primary overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <div className="flex justify-center mb-4">
            <span className="inline-flex items-center px-4 py-1.5 rounded-full text-sm font-medium bg-secondary/20 text-secondary border border-secondary/30">
              Success Stories
            </span>
          </div>
          <div className="flex justify-center mb-4">
            <div className="w-16 h-0.5 bg-gradient-to-r from-secondary to-accent rounded-full" />
          </div>
          <h3 className="text-2xl md:text-3xl font-heading font-semibold text-primary-foreground mb-4">
            What Our Students Say
          </h3>
          <p className="text-primary-foreground/70 max-w-2xl mx-auto mt-6">
            Real stories from real students who transformed their careers with us
          </p>
        </motion.div>

        {/* Testimonials Carousel or CTA when no testimonials yet */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {testimonials.length > 0 ? (
            <Swiper
              modules={[Pagination, Autoplay]}
              spaceBetween={24}
              slidesPerView={1}
              pagination={{ clickable: true }}
              autoplay={{ delay: 6000, disableOnInteraction: false }}
              breakpoints={{
                768: { slidesPerView: 2 },
                1280: { slidesPerView: 3 },
              }}
              className="!pb-14"
            >
              {testimonials.map((testimonial) => (
                <SwiperSlide key={testimonial.id}>
                  <div className="bg-card rounded-2xl p-6 lg:p-8 h-full border border-border hover:border-secondary/30 transition-all duration-300">
                    <Quote className="w-10 h-10 text-secondary/30 mb-4" />
                    <p className="text-foreground/80 leading-relaxed mb-6">
                      "{testimonial.content}"
                    </p>
                    <div className="flex items-center gap-1 mb-6">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-4 h-4 ${
                            i < testimonial.rating
                              ? 'fill-warning text-warning'
                              : 'text-muted-foreground'
                          }`}
                        />
                      ))}
                    </div>
                    <div className="flex items-center gap-4">
                      <img
                        src={testimonial.image}
                        alt={`Student testimonial - ${testimonial.name} - Savvy Axiss`}
                        loading="lazy"
                        className="w-14 h-14 rounded-full object-cover border-2 border-secondary/30"
                      />
                      <div>
                        <h4 className="font-semibold text-foreground">
                          {testimonial.name}
                        </h4>
                        <p className="text-sm text-muted-foreground">
                          {testimonial.role}
                        </p>
                        <p className="text-xs text-secondary mt-1">
                          {testimonial.course}
                        </p>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          ) : (
            <div className="bg-card rounded-2xl p-8 lg:p-12 border border-border text-center max-w-2xl mx-auto">
              <Quote className="w-12 h-12 text-secondary/30 mx-auto mb-4" />
              <p className="text-foreground/80 leading-relaxed mb-6">
                Join our community. Your success story could be next — explore our{' '}
                <Link to="/courses" className="text-secondary font-medium hover:underline">programming courses in Chennai</Link>,{' '}
                <Link to="/projects" className="text-secondary font-medium hover:underline">final year project solutions</Link>, or{' '}
                <Link to="/internship" className="text-secondary font-medium hover:underline">internship programs in Chennai</Link>.{' '}
                <Link to="/contact" className="text-secondary font-medium hover:underline">Get in touch</Link> or{' '}
                <Link to="/apply" className="text-secondary font-medium hover:underline">apply now</Link> to start your journey with Savvy Axiss Chennai.
              </p>
              <div className="flex flex-wrap justify-center gap-3">
                <Link
                  to="/courses"
                  className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors"
                >
                  View Courses
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center rounded-md border border-primary px-6 py-3 text-sm font-medium text-foreground hover:bg-primary/10 transition-colors"
                >
                  Contact Us
                </Link>
                <Link
                  to="/apply"
                  className="inline-flex items-center justify-center rounded-md border border-secondary px-6 py-3 text-sm font-medium text-secondary hover:bg-secondary/10 transition-colors"
                >
                  Apply Now
                </Link>
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
};
