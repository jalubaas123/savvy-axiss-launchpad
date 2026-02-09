import { useState } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Clock, Users, Star, Calendar, Globe, Award, Gift, ArrowLeft, Share2, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { getCourseBySlug } from '@/data/courseData';
import { allCourses } from '@/pages/Courses';
import { EnrollModal } from '@/components/course/EnrollModal';
import { InstructorAvatar } from '@/components/ui/instructor-avatar';
import { SEO_BASE_URL, createCourseSchema, createBreadcrumbSchema, createFAQSchema } from '@/lib/seo';

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
  const [isEnrollModalOpen, setIsEnrollModalOpen] = useState(false);

  const courseSchema = createCourseSchema({
    name: courseInfo.title,
    description: course.description,
    courseCode: courseInfo.slug,
    provider: 'Savvy Axiss',
    url: `/courses/${courseInfo.slug}`,
    image: courseInfo.image,
    instructor: { name: course.instructor.name },
    offers: { price: courseInfo.price, priceCurrency: 'INR' },
    aggregateRating: { ratingValue: courseInfo.rating, reviewCount: courseInfo.reviews },
  });
  const breadcrumbSchema = createBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Courses', url: '/courses' },
    { name: courseInfo.title, url: `/courses/${courseInfo.slug}` },
  ]);
  const courseFAQs = createFAQSchema([
    {
      question: `Where can I learn ${course.name} in Chennai?`,
      answer: `Savvy Axiss offers ${course.name} training in Chennai at Maduravoyal. Live online and in-person batches. Enroll for ${level} level with certification.`,
    },
    {
      question: `What is the duration of ${courseInfo.title}?`,
      answer: `${courseInfo.title} at Savvy Axiss is ${courseInfo.duration}. Includes hands-on projects, certificate, and placement support.`,
    },
    {
      question: 'Do you provide certificate after course completion?',
      answer: 'Yes. Savvy Axiss provides a certificate on completion. We also offer soft skill training and placement guidance for Chennai students.',
    },
  ]);
  const relatedCourses = allCourses.filter((c) => c.category === courseInfo.category && c.slug !== courseInfo.slug).slice(0, 4);

  const handleEnroll = () => {
    setIsEnrollModalOpen(true);
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
        <title>{courseInfo.title} - Programming Course in Chennai | Savvy Axiss</title>
        <meta
          name="description"
          content={`${course.description} Learn ${course.name} in Chennai at Savvy Axiss (Maduravoyal). ${level} level, ${courseInfo.duration}, live training, certificate. Best programming courses in Chennai.`}
        />
        <meta
          name="keywords"
          content={`${course.name} course Chennai, ${course.name} training Chennai, programming course Chennai, learn ${course.name} Chennai, Savvy Axiss ${course.name}`}
        />
        <link rel="canonical" href={`${SEO_BASE_URL}/courses/${courseInfo.slug}`} />
        <meta property="og:title" content={`${courseInfo.title} - Programming Course in Chennai | Savvy Axiss`} />
        <meta property="og:description" content={`${course.description} Learn in Chennai. ${courseInfo.duration}, certificate. Savvy Axiss, Maduravoyal.`} />
        <meta property="og:url" content={`${SEO_BASE_URL}/courses/${courseInfo.slug}`} />
        <meta property="og:type" content="website" />
        <script type="application/ld+json">{JSON.stringify(courseSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(courseFAQs)}</script>
      </Helmet>

      {/* Page Header */}
      <section className="pt-24 sm:pt-32 pb-8 sm:pb-12 hero-gradient">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link to="/courses" className="inline-flex items-center text-primary-foreground/70 hover:text-primary-foreground mb-4">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Courses
            </Link>
            <nav className="flex items-center gap-2 text-sm text-primary-foreground/70 mb-4" aria-label="Breadcrumb">
              <Link to="/" className="hover:text-primary-foreground">Home</Link>
              <span>/</span>
              <Link to="/courses" className="hover:text-primary-foreground">Courses</Link>
              <span>/</span>
              <span className="text-primary-foreground">{courseInfo.title}</span>
            </nav>
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
      <section className="py-8 sm:py-12 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-6 sm:gap-8">
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
                    <span>{course.baseSlug === 'vibe-coding' ? 'Complete Course (Beginner to Pro)' : `${level} Course`}</span>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Clock className="w-5 h-5" />
                    <span>{courseInfo.duration}</span>
                  </div>
                </div>
              </motion.div>

              {/* Table of contents — long page */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.15 }}
                className="bg-card p-6 rounded-xl border border-border mb-8"
              >
                <h2 className="text-lg font-heading font-bold text-foreground mb-3">On this page</h2>
                <ul className="flex flex-wrap gap-x-4 gap-y-1 text-sm text-muted-foreground">
                  <li><a href="#about-course" className="hover:text-secondary underline-offset-2 hover:underline">About this course</a></li>
                  <li><a href="#syllabus" className="hover:text-secondary underline-offset-2 hover:underline">Syllabus</a></li>
                  <li><a href="#instructor" className="hover:text-secondary underline-offset-2 hover:underline">Instructor</a></li>
                  <li><a href="#related-courses" className="hover:text-secondary underline-offset-2 hover:underline">Related courses</a></li>
                  <li><a href="#faq" className="hover:text-secondary underline-offset-2 hover:underline">FAQ</a></li>
                </ul>
              </motion.div>

              {/* About This Course */}
              <motion.div
                id="about-course"
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

              {/* Learning Path for Vibe Coding */}
              {course.baseSlug === 'vibe-coding' && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.35 }}
                  className="bg-card p-6 rounded-xl border border-border mb-8"
                >
                  <h2 className="text-2xl font-heading font-bold text-foreground mb-4">Learning Path</h2>
                  <div className="space-y-4">
                    <div className="p-4 bg-gradient-to-r from-secondary/10 to-accent/10 rounded-lg border border-secondary/20">
                      <h3 className="font-semibold text-foreground mb-2">Level 1 – Beginner</h3>
                      <p className="text-sm text-muted-foreground">Understanding AI, prompts, tools, and basic coding concepts</p>
                    </div>
                    <div className="p-4 bg-gradient-to-r from-secondary/10 to-accent/10 rounded-lg border border-secondary/20">
                      <h3 className="font-semibold text-foreground mb-2">Level 2 – Intermediate</h3>
                      <p className="text-sm text-muted-foreground">Building frontend, backend, and full-stack apps with AI assistance</p>
                    </div>
                    <div className="p-4 bg-gradient-to-r from-secondary/10 to-accent/10 rounded-lg border border-secondary/20">
                      <h3 className="font-semibold text-foreground mb-2">Level 3 – Pro</h3>
                      <p className="text-sm text-muted-foreground">Shipping products, real-world projects, deployment & freelancing readiness</p>
                    </div>
                  </div>
                </motion.div>
              )}

              {/* Skills You'll Gain */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: course.baseSlug === 'vibe-coding' ? 0.4 : 0.4 }}
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
                <h2 id="syllabus" className="text-2xl font-heading font-bold text-foreground mb-6">
                  {course.baseSlug === 'vibe-coding' ? 'Course Modules' : 'Syllabus'}
                </h2>
                <Accordion type="single" collapsible className="w-full">
                  {syllabus.map((item, index) => (
                    <AccordionItem key={index} value={`week-${item.week}`}>
                      <AccordionTrigger className="text-left">
                        <div className="flex items-center gap-4">
                          <span className="font-semibold text-secondary">
                            {course.baseSlug === 'vibe-coding' ? `Module ${item.week}` : `Week ${item.week}`}
                          </span>
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

              {/* Course Outcomes for Vibe Coding */}
              {course.baseSlug === 'vibe-coding' && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.55 }}
                  className="bg-card p-6 rounded-xl border border-border mb-8"
                >
                  <h2 className="text-2xl font-heading font-bold text-foreground mb-4">Course Outcomes</h2>
                  <p className="text-muted-foreground mb-4">
                    By the end of this <strong>Beginner-to-Pro</strong> course, you will:
                  </p>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start gap-3">
                      <span className="text-secondary mt-1">✓</span>
                      <span>Go from zero coding knowledge to building real applications</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-secondary mt-1">✓</span>
                      <span>Use AI tools confidently for frontend, backend, and full-stack development</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-secondary mt-1">✓</span>
                      <span>Debug, refactor, and optimize code with AI assistance</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-secondary mt-1">✓</span>
                      <span>Deploy and ship real-world projects</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-secondary mt-1">✓</span>
                      <span>Think like a modern AI-powered developer</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-secondary mt-1">✓</span>
                      <span>Build products, MVPs, and freelance-ready projects with confidence</span>
                    </li>
                  </ul>
                </motion.div>
              )}

              {/* Instructor */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: course.baseSlug === 'vibe-coding' ? 0.6 : 0.6 }}
                className="bg-card p-6 rounded-xl border border-border"
              >
                <h2 id="instructor" className="text-2xl font-heading font-bold text-foreground mb-6">About the Instructor</h2>
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="w-24 h-24 rounded-full overflow-hidden flex-shrink-0 shadow-lg">
                    <InstructorAvatar gender={course.instructor.gender} />
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
                    alt={`${courseInfo.title} - Programming course in Chennai at Savvy Axiss`}
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
                      <span className="text-muted-foreground">Course Type: </span>
                      <span className="font-medium text-foreground">{course.baseSlug === 'vibe-coding' ? 'Complete Course (Beginner to Pro)' : level}</span>
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

              {/* Related courses — internal linking */}
              {relatedCourses.length > 0 && (
                <motion.div
                  id="related-courses"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  className="bg-card p-6 rounded-xl border border-border mb-8"
                >
                  <h2 className="text-2xl font-heading font-bold text-foreground mb-4">Related Courses in Chennai</h2>
                  <p className="text-muted-foreground mb-4">Explore more programming courses at Savvy Axiss Chennai.</p>
                  <ul className="grid sm:grid-cols-2 gap-2">
                    {relatedCourses.map((c) => (
                      <li key={c.slug}>
                        <Link
                          to={`/courses/${c.slug}`}
                          className="flex items-center gap-2 text-secondary hover:underline font-medium"
                        >
                          <ChevronRight className="w-4 h-4 flex-shrink-0" />
                          {c.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                  <Link to="/courses" className="inline-block mt-4 text-secondary font-medium hover:underline">
                    View all programming courses in Chennai →
                  </Link>
                </motion.div>
              )}

              {/* FAQ — educational intent */}
              <motion.div
                id="faq"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.45 }}
                className="bg-card p-6 rounded-xl border border-border mb-8"
              >
                <h2 className="text-2xl font-heading font-bold text-foreground mb-4">Frequently Asked Questions</h2>
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="faq-1">
                    <AccordionTrigger>Where can I learn {course.name} in Chennai?</AccordionTrigger>
                    <AccordionContent>
                      Savvy Axiss offers {course.name} training in Chennai at Maduravoyal. Live online and in-person batches. Enroll for {level} level with certification.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="faq-2">
                    <AccordionTrigger>What is the duration of {courseInfo.title}?</AccordionTrigger>
                    <AccordionContent>
                      {courseInfo.title} at Savvy Axiss is {courseInfo.duration}. Includes hands-on projects, certificate, and placement support.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="faq-3">
                    <AccordionTrigger>Do you provide certificate after course completion?</AccordionTrigger>
                    <AccordionContent>
                      Yes. Savvy Axiss provides a certificate on completion. We also offer soft skill training and placement guidance for Chennai students.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Enrollment Modal */}
      <EnrollModal
        isOpen={isEnrollModalOpen}
        onClose={() => setIsEnrollModalOpen(false)}
        courseTitle={courseInfo.title}
        courseSlug={courseInfo.slug}
        courseLevel={level}
        coursePrice={courseInfo.price}
        courseDuration={courseInfo.duration}
      />
    </>
  );
};

export default CourseDetail;

