import { useParams, Link, Navigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Clock, Users, Star, Calendar, Globe, Award, Gift, ArrowLeft, Share2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { getCourseBySlug } from '@/data/courseData';
import { allCourses } from '@/pages/Courses';

const formatPrice = (price: number) => {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0,
  }).format(price);
};

const CourseDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  
  if (!slug) {
    return <Navigate to="/courses" replace />;
  }

  // Get course detail from syllabus data
  const courseData = getCourseBySlug(slug);
  
  // Get course info from courses list
  const courseInfo = allCourses.find(c => c.slug === slug);

  if (!courseData || !courseInfo) {
    return <Navigate to="/courses" replace />;
  }

  const { course, level } = courseData;
  const syllabus = course.syllabus[level];

  const handleEnroll = () => {
    window.open('https://forms.gle/EVsUEJZAVeyAUmxx9', '_blank');
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: courseInfo.title,
        text: course.description,
        url: window.location.href,
      });
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert('Link copied to clipboard!');
    }
  };

  return (
    <>
      <Helmet>
        <title>{courseInfo.title} - Savvy Axiss</title>
        <meta name="description" content={course.description} />
      </Helmet>

      {/* Page Header */}
      <section className="pt-32 pb-12 hero-gradient">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link to="/courses" className="inline-flex items-center text-primary-foreground/70 hover:text-primary-foreground mb-4">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Courses
            </Link>
            <div className="flex items-center gap-2 text-sm text-primary-foreground/70 mb-4">
              <Link to="/" className="hover:text-primary-foreground">Home</Link>
              <span>/</span>
              <Link to="/courses" className="hover:text-primary-foreground">Course</Link>
            </div>
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-primary-foreground mb-4">
              {courseInfo.title}
            </h1>
            <p className="text-lg text-primary-foreground/70 max-w-3xl">
              {course.description}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Course Content */}
      <section className="py-12 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Main Content */}
            <div className="flex-1">
              {/* Course Highlights */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="bg-card p-6 rounded-xl border border-border mb-8"
              >
                <div className="flex flex-wrap items-center gap-6">
                  <div className="flex items-center gap-2">
                    <Star className="w-5 h-5 fill-warning text-warning" />
                    <span className="font-semibold text-foreground">{courseInfo.rating}</span>
                    <span className="text-muted-foreground">({courseInfo.reviews} reviews)</span>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Award className="w-5 h-5" />
                    <span>{level} Course</span>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Clock className="w-5 h-5" />
                    <span>{courseInfo.duration}</span>
                  </div>
                </div>
              </motion.div>

              {/* About This Course */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="bg-card p-6 rounded-xl border border-border mb-8"
              >
                <h2 className="text-2xl font-heading font-bold text-foreground mb-4">About this Course</h2>
                <p className="text-muted-foreground leading-relaxed">
                  {course.description}
                </p>
              </motion.div>

              {/* Course Objective */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="bg-card p-6 rounded-xl border border-border mb-8"
              >
                <h2 className="text-2xl font-heading font-bold text-foreground mb-4">Course Objective</h2>
                <p className="text-muted-foreground leading-relaxed">
                  {course.objective}
                </p>
              </motion.div>

              {/* Skills You'll Gain */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="bg-card p-6 rounded-xl border border-border mb-8"
              >
                <h2 className="text-2xl font-heading font-bold text-foreground mb-4">Skills you'll gain</h2>
                <div className="flex flex-wrap gap-3">
                  {course.skills.map((skill, index) => (
                    <span
                      key={index}
                      className="px-4 py-2 bg-secondary/10 text-secondary rounded-full text-sm font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>

              {/* Syllabus */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="bg-card p-6 rounded-xl border border-border mb-8"
              >
                <h2 className="text-2xl font-heading font-bold text-foreground mb-6">Syllabus</h2>
                <Accordion type="single" collapsible className="w-full">
                  {syllabus.map((item, index) => (
                    <AccordionItem key={index} value={`week-${item.week}`}>
                      <AccordionTrigger className="text-left">
                        <div className="flex items-center gap-4">
                          <span className="font-semibold text-secondary">Week {item.week}</span>
                          <span className="text-muted-foreground">{item.topic}</span>
                        </div>
                      </AccordionTrigger>
                      <AccordionContent>
                        <p className="text-muted-foreground pl-4">
                          {item.description}
                        </p>
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </motion.div>

              {/* Instructor */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="bg-card p-6 rounded-xl border border-border"
              >
                <h2 className="text-2xl font-heading font-bold text-foreground mb-6">About the Instructor</h2>
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="w-24 h-24 rounded-full bg-muted overflow-hidden flex-shrink-0">
                    <img
                      src={course.instructor.image}
                      alt={course.instructor.name}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop';
                      }}
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-heading font-semibold text-foreground mb-1">
                      {course.instructor.name}
                    </h3>
                    <p className="text-secondary mb-2">{course.instructor.role}</p>
                    <div className="flex items-center gap-4 mb-4">
                      <div className="flex items-center gap-1">
                        <Star className="w-4 h-4 fill-warning text-warning" />
                        <span className="font-semibold">{course.instructor.rating}</span>
                        <span className="text-muted-foreground text-sm">Instructor rating</span>
                      </div>
                      <div className="flex items-center gap-1 text-muted-foreground">
                        <Users className="w-4 h-4" />
                        <span>{course.instructor.students} Students</span>
                      </div>
                    </div>
                    <p className="text-muted-foreground leading-relaxed">
                      {course.instructor.bio}
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Sidebar */}
            <div className="lg:w-80 flex-shrink-0">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="bg-card p-6 rounded-xl border border-border sticky top-24"
              >
                <div className="aspect-video rounded-lg overflow-hidden mb-6">
                  <img
                    src={courseInfo.image}
                    alt={courseInfo.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="mb-6">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-3xl font-bold text-foreground">
                      {formatPrice(courseInfo.price)}
                    </span>
                    <span className="text-lg text-muted-foreground line-through">
                      {formatPrice(courseInfo.originalPrice)}
                    </span>
                  </div>
                  <Button
                    onClick={handleEnroll}
                    className="w-full mb-4"
                    size="lg"
                  >
                    ENROLL NOW
                  </Button>
                  <Button
                    onClick={handleShare}
                    variant="outline"
                    className="w-full"
                  >
                    <Share2 className="w-4 h-4 mr-2" />
                    Share this Course
                  </Button>
                </div>

                <div className="space-y-4 pt-6 border-t border-border">
                  <div className="flex items-center gap-3 text-sm">
                    <Calendar className="w-5 h-5 text-muted-foreground" />
                    <div>
                      <span className="text-muted-foreground">Duration: </span>
                      <span className="font-medium text-foreground">{courseInfo.duration}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <Clock className="w-5 h-5 text-muted-foreground" />
                    <div>
                      <span className="text-muted-foreground">Class Time: </span>
                      <span className="font-medium text-foreground">1.5 Hours</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <Users className="w-5 h-5 text-muted-foreground" />
                    <div>
                      <span className="text-muted-foreground">Enrolled: </span>
                      <span className="font-medium text-foreground">{courseInfo.reviews} students</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <Globe className="w-5 h-5 text-muted-foreground" />
                    <div>
                      <span className="text-muted-foreground">Language: </span>
                      <span className="font-medium text-foreground">English / Tamil</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <Award className="w-5 h-5 text-muted-foreground" />
                    <div>
                      <span className="text-muted-foreground">Skill Level: </span>
                      <span className="font-medium text-foreground">{level}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <Calendar className="w-5 h-5 text-muted-foreground" />
                    <div>
                      <span className="text-muted-foreground">Schedule: </span>
                      <span className="font-medium text-foreground">Monday to Friday</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <Award className="w-5 h-5 text-muted-foreground" />
                    <div>
                      <span className="text-muted-foreground">Certificate: </span>
                      <span className="font-medium text-foreground">Yes</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <Gift className="w-5 h-5 text-muted-foreground" />
                    <div>
                      <span className="text-muted-foreground">SoftSkill Training: </span>
                      <span className="font-medium text-foreground">Free</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CourseDetail;

