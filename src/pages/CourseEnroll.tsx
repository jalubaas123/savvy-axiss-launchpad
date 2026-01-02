import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import { useSearchParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { ArrowLeft, CheckCircle2, Loader2, User, Mail, Phone, MapPin, GraduationCap, Calendar, MessageSquare, FileText } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';
import { getCourseBySlug } from '@/data/courseData';
import { allCourses } from './Courses';

const educationLevels = [
  '10th Pass',
  '12th Pass',
  'Undergraduate',
  'Graduate',
  'Post Graduate',
  'Other',
];

const currentStatuses = [
  'Student',
  'Working Professional',
  'Fresher/Job Seeker',
  'Freelancer',
  'Other',
];

const sources = [
  'Google Search',
  'Social Media (Facebook, Instagram)',
  'Friend/Family Referral',
  'LinkedIn',
  'YouTube',
  'WhatsApp',
  'Other',
];

const formatPrice = (price: number) => {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0,
  }).format(price);
};

const CourseEnroll = () => {
  const { toast } = useToast();
  const [searchParams] = useSearchParams();
  const courseSlug = searchParams.get('course') || '';
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  
  // Get course info
  const courseInfo = allCourses.find(c => c.slug === courseSlug);
  const courseData = courseSlug ? getCourseBySlug(courseSlug) : null;
  const courseTitle = courseInfo?.title || 'Course';
  const courseLevel = courseData?.level || 'Beginner';
  const coursePrice = courseInfo?.price;
  const courseDuration = courseInfo?.duration;

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    city: '',
    state: '',
    education: '',
    currentStatus: '',
    college: '',
    yearOfPassing: '',
    source: '',
    message: '',
    preferredBatch: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const validateForm = () => {
    if (!formData.fullName || formData.fullName.length < 3) {
      toast({
        title: 'Invalid Name',
        description: 'Please enter your full name (at least 3 characters)',
        variant: 'destructive',
      });
      return false;
    }
    if (!formData.email || !formData.email.includes('@')) {
      toast({
        title: 'Invalid Email',
        description: 'Please enter a valid email address',
        variant: 'destructive',
      });
      return false;
    }
    if (!formData.phone || formData.phone.length < 10) {
      toast({
        title: 'Invalid Phone',
        description: 'Please enter a valid phone number',
        variant: 'destructive',
      });
      return false;
    }
    if (!formData.city) {
      toast({
        title: 'City Required',
        description: 'Please enter your city',
        variant: 'destructive',
      });
      return false;
    }
    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;

    setIsSubmitting(true);

    try {
      // Prepare form data for formsubmit.co
      const formDataToSubmit = new FormData();
      formDataToSubmit.append('_to', 'career@savvyaxiss.com');
      formDataToSubmit.append('_subject', `Course Enrollment: ${courseTitle} - ${courseLevel}`);
      formDataToSubmit.append('_template', 'table');
      formDataToSubmit.append('_captcha', 'false');
      
      // Course Details
      formDataToSubmit.append('Course', courseTitle);
      formDataToSubmit.append('Level', courseLevel);
      formDataToSubmit.append('Course Slug', courseSlug);
      if (coursePrice) formDataToSubmit.append('Price', `₹${coursePrice.toLocaleString('en-IN')}`);
      if (courseDuration) formDataToSubmit.append('Duration', courseDuration);
      
      // Student Information
      formDataToSubmit.append('Full Name', formData.fullName);
      formDataToSubmit.append('Email', formData.email);
      formDataToSubmit.append('Phone', formData.phone);
      formDataToSubmit.append('City', formData.city);
      formDataToSubmit.append('State', formData.state || 'Not provided');
      
      // Education Details
      formDataToSubmit.append('Education Level', formData.education || 'Not provided');
      formDataToSubmit.append('Current Status', formData.currentStatus || 'Not provided');
      formDataToSubmit.append('College/Institution', formData.college || 'Not provided');
      formDataToSubmit.append('Year of Passing', formData.yearOfPassing || 'Not provided');
      
      // Additional Information
      formDataToSubmit.append('How did you hear about us', formData.source || 'Not provided');
      formDataToSubmit.append('Preferred Batch', formData.preferredBatch || 'Not provided');
      formDataToSubmit.append('Message', formData.message || 'No additional message');

      // Submit to formsubmit.co
      const response = await fetch('https://formsubmit.co/career@savvyaxiss.com', {
        method: 'POST',
        body: formDataToSubmit,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        setIsSuccess(true);
        toast({
          title: 'Enrollment Request Submitted!',
          description: 'Your enrollment request has been sent successfully. Our team will contact you within 24 hours.',
          duration: 5000,
        });
      } else {
        throw new Error('Form submission failed');
      }
    } catch (error) {
      console.error('Enrollment submission error:', error);
      toast({
        title: 'Error',
        description: 'There was an error submitting your enrollment. Please try again or contact us directly at career@savvyaxiss.com',
        variant: 'destructive',
        duration: 5000,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Helmet>
        <title>Enroll in {courseTitle} - Savvy Axiss</title>
        <meta 
          name="description" 
          content={`Enroll in ${courseTitle} at Savvy Axiss. Fill out the enrollment form to start your learning journey.`} 
        />
      </Helmet>

      {/* Hero */}
      <section className="pt-32 pb-12 hero-gradient">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-4xl mx-auto text-center"
          >
            <Link to={courseSlug ? `/courses/${courseSlug}` : '/courses'} className="inline-flex items-center text-primary-foreground/70 hover:text-primary-foreground mb-6">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Course
            </Link>
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-primary-foreground mb-4">
              Enroll in {courseTitle}
            </h1>
            <p className="text-lg text-primary-foreground/70">
              Fill out the form below to enroll in this course. Our team will contact you shortly.
            </p>
            {coursePrice && (
              <div className="mt-6 flex items-center justify-center gap-4 text-primary-foreground">
                <span className="text-3xl font-bold">{formatPrice(coursePrice)}</span>
                {courseInfo?.originalPrice && (
                  <span className="text-xl line-through opacity-70">
                    {formatPrice(courseInfo.originalPrice)}
                  </span>
                )}
              </div>
            )}
          </motion.div>
        </div>
      </section>

      {/* Enrollment Form */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <AnimatePresence>
              {isSuccess ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12 bg-card rounded-2xl border border-border p-8"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: 'spring', duration: 0.5 }}
                    className="w-20 h-20 mx-auto mb-6 rounded-full bg-green-100 flex items-center justify-center"
                  >
                    <CheckCircle2 className="w-12 h-12 text-green-600" />
                  </motion.div>
                  <h3 className="text-2xl font-heading font-bold text-foreground mb-2">
                    Enrollment Request Submitted!
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    We've received your enrollment request for <strong>{courseTitle}</strong>.
                    <br />
                    Our team will contact you within 24 hours to confirm your enrollment.
                  </p>
                  <div className="flex gap-4 justify-center">
                    <Button asChild>
                      <Link to="/courses">Browse More Courses</Link>
                    </Button>
                    <Button variant="outline" asChild>
                      <Link to="/">Go to Home</Link>
                    </Button>
                  </div>
                </motion.div>
              ) : (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-card rounded-2xl border border-border p-8 lg:p-10"
                >
                  <div className="mb-8">
                    <h2 className="text-3xl font-heading font-bold text-foreground mb-2">
                      Course Enrollment Form
                    </h2>
                    <p className="text-muted-foreground">
                      Please fill out all required fields to complete your enrollment.
                    </p>
                    <div className="mt-4 flex flex-wrap gap-4 text-sm">
                      {courseLevel && (
                        <div className="flex items-center gap-2">
                          <span className="text-muted-foreground">Level:</span>
                          <span className="font-medium text-foreground">{courseLevel}</span>
                        </div>
                      )}
                      {coursePrice && (
                        <div className="flex items-center gap-2">
                          <span className="text-muted-foreground">Price:</span>
                          <span className="font-medium text-foreground">{formatPrice(coursePrice)}</span>
                        </div>
                      )}
                      {courseDuration && (
                        <div className="flex items-center gap-2">
                          <span className="text-muted-foreground">Duration:</span>
                          <span className="font-medium text-foreground">{courseDuration}</span>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Form */}
                  <form onSubmit={handleSubmit} className="space-y-8">
                    {/* Personal Information */}
                    <div className="space-y-4">
                      <h3 className="text-lg font-heading font-semibold text-foreground flex items-center gap-2">
                        <User className="w-5 h-5 text-secondary" />
                        Personal Information
                      </h3>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="fullName">Full Name *</Label>
                          <Input
                            id="fullName"
                            name="fullName"
                            value={formData.fullName}
                            onChange={handleChange}
                            placeholder="Enter your full name"
                            required
                            className="mt-1"
                          />
                        </div>
                        <div>
                          <Label htmlFor="email">Email Address *</Label>
                          <Input
                            id="email"
                            name="email"
                            type="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="your.email@example.com"
                            required
                            className="mt-1"
                          />
                        </div>
                        <div>
                          <Label htmlFor="phone">Phone Number *</Label>
                          <Input
                            id="phone"
                            name="phone"
                            type="tel"
                            value={formData.phone}
                            onChange={handleChange}
                            placeholder="10-digit mobile number"
                            required
                            className="mt-1"
                          />
                        </div>
                        <div>
                          <Label htmlFor="city">City *</Label>
                          <Input
                            id="city"
                            name="city"
                            value={formData.city}
                            onChange={handleChange}
                            placeholder="Your city"
                            required
                            className="mt-1"
                          />
                        </div>
                        <div>
                          <Label htmlFor="state">State</Label>
                          <Input
                            id="state"
                            name="state"
                            value={formData.state}
                            onChange={handleChange}
                            placeholder="Your state"
                            className="mt-1"
                          />
                        </div>
                        <div>
                          <Label htmlFor="preferredBatch">Preferred Batch</Label>
                          <Input
                            id="preferredBatch"
                            name="preferredBatch"
                            value={formData.preferredBatch}
                            onChange={handleChange}
                            placeholder="e.g., Morning, Evening, Weekend"
                            className="mt-1"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Education Details */}
                    <div className="space-y-4">
                      <h3 className="text-lg font-heading font-semibold text-foreground flex items-center gap-2">
                        <GraduationCap className="w-5 h-5 text-secondary" />
                        Education Details
                      </h3>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="education">Education Level</Label>
                          <Select
                            value={formData.education}
                            onValueChange={(value) => handleSelectChange('education', value)}
                          >
                            <SelectTrigger className="mt-1">
                              <SelectValue placeholder="Select education level" />
                            </SelectTrigger>
                            <SelectContent>
                              {educationLevels.map((level) => (
                                <SelectItem key={level} value={level}>
                                  {level}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </div>
                        <div>
                          <Label htmlFor="currentStatus">Current Status</Label>
                          <Select
                            value={formData.currentStatus}
                            onValueChange={(value) => handleSelectChange('currentStatus', value)}
                          >
                            <SelectTrigger className="mt-1">
                              <SelectValue placeholder="Select your status" />
                            </SelectTrigger>
                            <SelectContent>
                              {currentStatuses.map((status) => (
                                <SelectItem key={status} value={status}>
                                  {status}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </div>
                        <div>
                          <Label htmlFor="college">College/Institution</Label>
                          <Input
                            id="college"
                            name="college"
                            value={formData.college}
                            onChange={handleChange}
                            placeholder="Your college or institution name"
                            className="mt-1"
                          />
                        </div>
                        <div>
                          <Label htmlFor="yearOfPassing">Year of Passing</Label>
                          <Input
                            id="yearOfPassing"
                            name="yearOfPassing"
                            value={formData.yearOfPassing}
                            onChange={handleChange}
                            placeholder="e.g., 2024"
                            className="mt-1"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Additional Information */}
                    <div className="space-y-4">
                      <h3 className="text-lg font-heading font-semibold text-foreground flex items-center gap-2">
                        <MessageSquare className="w-5 h-5 text-secondary" />
                        Additional Information
                      </h3>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="source">How did you hear about us?</Label>
                          <Select
                            value={formData.source}
                            onValueChange={(value) => handleSelectChange('source', value)}
                          >
                            <SelectTrigger className="mt-1">
                              <SelectValue placeholder="Select source" />
                            </SelectTrigger>
                            <SelectContent>
                              {sources.map((source) => (
                                <SelectItem key={source} value={source}>
                                  {source}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </div>
                      </div>
                      <div>
                        <Label htmlFor="message">Additional Message (Optional)</Label>
                        <Textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          placeholder="Any questions or special requirements?"
                          rows={4}
                          className="mt-1"
                        />
                      </div>
                    </div>

                    {/* Submit Button */}
                    <div className="flex gap-4 pt-4">
                      <Button
                        type="button"
                        variant="outline"
                        asChild
                        className="flex-1"
                      >
                        <Link to={courseSlug ? `/courses/${courseSlug}` : '/courses'}>
                          Cancel
                        </Link>
                      </Button>
                      <Button
                        type="submit"
                        disabled={isSubmitting}
                        className="flex-1 bg-gradient-to-r from-secondary to-accent hover:from-secondary/90 hover:to-accent/90"
                      >
                        {isSubmitting ? (
                          <>
                            <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                            Submitting...
                          </>
                        ) : (
                          <>
                            <CheckCircle2 className="w-4 h-4 mr-2" />
                            Submit Enrollment
                          </>
                        )}
                      </Button>
                    </div>
                  </form>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </section>
    </>
  );
};

export default CourseEnroll;

