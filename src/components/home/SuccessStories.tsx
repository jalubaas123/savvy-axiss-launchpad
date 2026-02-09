import { Link } from 'react-router-dom';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Award, ChevronRight } from 'lucide-react';
import { studentReviews } from '@/data/reviews';

/** Map review course label to internal link for case study CTA */
const getLinkForCourse = (course: string): { to: string; label: string } => {
  if (course.includes('Final Year') || course.includes('Project')) return { to: '/projects', label: 'Final year projects in Chennai' };
  if (course.includes('Internship')) return { to: '/internship', label: 'Internship programs in Chennai' };
  return { to: '/courses', label: 'Programming courses in Chennai' };
};

export const SuccessStories = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-80px' });
  const stories = studentReviews.slice(0, 3);

  return (
    <section ref={sectionRef} className="py-12 sm:py-20 bg-muted/30" id="success-stories">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-10"
        >
          <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-sm font-medium bg-secondary/20 text-secondary border border-secondary/30 mb-4">
            <Award className="w-4 h-4" />
            Success Stories
          </span>
          <h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground mb-3">
            Successful Students from Chennai
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Case studies of students who completed our programming courses, final year projects, or internships in Chennai.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {stories.map((review, index) => {
            const { to, label } = getLinkForCourse(review.course);
            return (
              <motion.article
                key={review.id}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="bg-card rounded-xl border border-border p-6 flex flex-col"
              >
                <p className="text-sm text-muted-foreground mb-2">{review.role} · {review.course}</p>
                <p className="text-foreground leading-snug mb-4 flex-1 line-clamp-3">
                  &ldquo;{review.content}&rdquo;
                </p>
                <p className="font-semibold text-foreground text-sm mb-3">— {review.name}</p>
                <Link
                  to={to}
                  className="inline-flex items-center gap-1 text-sm font-medium text-secondary hover:underline"
                >
                  {label}
                  <ChevronRight className="w-4 h-4" />
                </Link>
              </motion.article>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center mt-8"
        >
          <Link
            to="/courses"
            className="inline-flex items-center gap-2 rounded-lg bg-secondary px-5 py-2.5 text-sm font-medium text-secondary-foreground hover:bg-secondary/90 transition-colors"
          >
            Explore programming courses in Chennai
            <ChevronRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};
