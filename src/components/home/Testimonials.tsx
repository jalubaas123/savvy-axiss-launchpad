import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import { Star, Quote } from 'lucide-react';
import 'swiper/css';
import 'swiper/css/pagination';

const testimonials = [
  {
    id: 1,
    name: 'Priya Sharma',
    role: 'Software Developer at TCS',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=face',
    content: 'Savvy Axiss transformed my career. The live projects gave me real-world experience that impressed my interviewers. Landed my dream job within 2 months of completing the course!',
    rating: 5,
    course: 'Full Stack Development',
  },
  {
    id: 2,
    name: 'Rahul Verma',
    role: 'Data Analyst at Infosys',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
    content: 'The instructors are amazing and always available for doubts. The curriculum is exactly what the industry needs. Best investment I made in my career.',
    rating: 5,
    course: 'Data Science',
  },
  {
    id: 3,
    name: 'Ananya Patel',
    role: 'Marketing Manager at Flipkart',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face',
    content: 'From zero knowledge to managing digital campaigns for a Fortune 500 company. Savvy Axiss made it possible with their practical approach to learning.',
    rating: 5,
    course: 'Digital Marketing',
  },
  {
    id: 4,
    name: 'Vikram Singh',
    role: 'UI/UX Designer at Swiggy',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face',
    content: 'The design thinking workshops and real client projects helped me build a portfolio that stands out. Got placed even before completing the course!',
    rating: 5,
    course: 'UI/UX Design',
  },
  {
    id: 5,
    name: 'Sneha Reddy',
    role: 'Cloud Engineer at Amazon',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=face',
    content: 'The cloud computing course with hands-on AWS projects was exactly what I needed. The certification helped me crack interviews at top tech companies.',
    rating: 5,
    course: 'Cloud Computing',
  },
];

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

        {/* Testimonials Carousel */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
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
                  {/* Quote Icon */}
                  <Quote className="w-10 h-10 text-secondary/30 mb-4" />

                  {/* Content */}
                  <p className="text-foreground/80 leading-relaxed mb-6">
                    "{testimonial.content}"
                  </p>

                  {/* Rating */}
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

                  {/* Author */}
                  <div className="flex items-center gap-4">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
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
        </motion.div>
      </div>
    </section>
  );
};
