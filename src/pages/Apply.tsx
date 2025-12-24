import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Check, ChevronRight, ChevronLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

const courses = [
  'Full Stack Development',
  'Data Science & Machine Learning',
  'Digital Marketing Mastery',
  'UI/UX Design Professional',
  'Cloud Computing & DevOps',
  'Python Programming Fundamentals',
];

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
  'Social Media',
  'Friend/Family',
  'LinkedIn',
  'YouTube',
  'Other',
];

const Apply = () => {
  const { toast } = useToast();
  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    city: '',
    education: '',
    college: '',
    yearOfPassing: '',
    currentStatus: '',
    course: '',
    preferredStartDate: '',
    source: '',
    message: '',
    consent: false,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value,
    });
  };

  const validateStep = (step: number) => {
    switch (step) {
      case 1:
        return formData.fullName.length >= 3 && 
               formData.email.includes('@') && 
               formData.phone.length >= 10 && 
               formData.city;
      case 2:
        return formData.education && formData.currentStatus;
      case 3:
        return formData.course;
      case 4:
        return formData.consent;
      default:
        return true;
    }
  };

  const nextStep = () => {
    if (validateStep(currentStep)) {
      setCurrentStep((prev) => Math.min(prev + 1, 4));
    } else {
      toast({
        title: "Please fill all required fields",
        variant: "destructive",
      });
    }
  };

  const prevStep = () => {
    setCurrentStep((prev) => Math.max(prev - 1, 1));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateStep(4)) {
      toast({
        title: "Please accept the terms",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 2000));

    toast({
      title: "Application Submitted!",
      description: "We'll contact you within 24 hours. Check your email for confirmation.",
    });

    setIsSubmitting(false);
    setCurrentStep(5); // Success state
  };

  const steps = [
    { number: 1, title: 'Personal Info' },
    { number: 2, title: 'Education' },
    { number: 3, title: 'Course Selection' },
    { number: 4, title: 'Submit' },
  ];

  return (
    <>
      <Helmet>
        <title>Apply Now - Savvy Axiss | Start Your Tech Journey</title>
        <meta 
          name="description" 
          content="Apply for Savvy Axiss courses. Start your tech career journey with live training and real-time internships." 
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
            <span className="inline-block px-4 py-1 rounded-full bg-secondary/20 text-secondary text-sm font-medium mb-6">
              Apply Now
            </span>
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-primary-foreground mb-6">
              Start Your <span className="gradient-text">Tech Journey</span> Today
            </h1>
            <p className="text-lg text-primary-foreground/70">
              Fill out the application form and our team will get in touch within 24 hours.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Application Form */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 lg:px-8 max-w-3xl">
          {currentStep < 5 ? (
            <>
              {/* Progress Steps */}
              <div className="mb-10">
                <div className="flex items-center justify-between">
                  {steps.map((step, index) => (
                    <div key={step.number} className="flex items-center">
                      <div className={`flex items-center justify-center w-10 h-10 rounded-full font-semibold text-sm transition-all ${
                        currentStep > step.number
                          ? 'bg-success text-success-foreground'
                          : currentStep === step.number
                          ? 'bg-secondary text-secondary-foreground'
                          : 'bg-muted text-muted-foreground'
                      }`}>
                        {currentStep > step.number ? <Check className="w-5 h-5" /> : step.number}
                      </div>
                      <span className={`hidden sm:block ml-2 text-sm font-medium ${
                        currentStep >= step.number ? 'text-foreground' : 'text-muted-foreground'
                      }`}>
                        {step.title}
                      </span>
                      {index < steps.length - 1 && (
                        <div className={`w-12 sm:w-24 h-1 mx-2 sm:mx-4 rounded ${
                          currentStep > step.number ? 'bg-success' : 'bg-muted'
                        }`} />
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Form */}
              <motion.div
                key={currentStep}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3 }}
                className="bg-card p-8 lg:p-10 rounded-2xl border border-border"
              >
                <form onSubmit={handleSubmit}>
                  {/* Step 1: Personal Information */}
                  {currentStep === 1 && (
                    <div className="space-y-6">
                      <h2 className="text-2xl font-heading font-bold text-foreground mb-6">
                        Personal Information
                      </h2>
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">
                          Full Name *
                        </label>
                        <Input
                          name="fullName"
                          value={formData.fullName}
                          onChange={handleChange}
                          placeholder="Enter your full name"
                          required
                          minLength={3}
                          className="h-12"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">
                          Email Address *
                        </label>
                        <Input
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="you@example.com"
                          required
                          className="h-12"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">
                          Phone Number *
                        </label>
                        <Input
                          name="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="+91 98765 43210"
                          required
                          className="h-12"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">
                          City *
                        </label>
                        <Input
                          name="city"
                          value={formData.city}
                          onChange={handleChange}
                          placeholder="Your city"
                          required
                          className="h-12"
                        />
                      </div>
                    </div>
                  )}

                  {/* Step 2: Education & Background */}
                  {currentStep === 2 && (
                    <div className="space-y-6">
                      <h2 className="text-2xl font-heading font-bold text-foreground mb-6">
                        Education & Background
                      </h2>
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">
                          Highest Education *
                        </label>
                        <select
                          name="education"
                          value={formData.education}
                          onChange={handleChange}
                          required
                          className="w-full h-12 px-4 rounded-lg border border-input bg-background text-foreground"
                        >
                          <option value="">Select education level</option>
                          {educationLevels.map((level) => (
                            <option key={level} value={level}>{level}</option>
                          ))}
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">
                          College/University (Optional)
                        </label>
                        <Input
                          name="college"
                          value={formData.college}
                          onChange={handleChange}
                          placeholder="Your college or university"
                          className="h-12"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">
                          Year of Passing (Optional)
                        </label>
                        <Input
                          name="yearOfPassing"
                          type="number"
                          value={formData.yearOfPassing}
                          onChange={handleChange}
                          placeholder="e.g., 2023"
                          min="1990"
                          max="2030"
                          className="h-12"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">
                          Current Status *
                        </label>
                        <select
                          name="currentStatus"
                          value={formData.currentStatus}
                          onChange={handleChange}
                          required
                          className="w-full h-12 px-4 rounded-lg border border-input bg-background text-foreground"
                        >
                          <option value="">Select your status</option>
                          {currentStatuses.map((status) => (
                            <option key={status} value={status}>{status}</option>
                          ))}
                        </select>
                      </div>
                    </div>
                  )}

                  {/* Step 3: Course Selection */}
                  {currentStep === 3 && (
                    <div className="space-y-6">
                      <h2 className="text-2xl font-heading font-bold text-foreground mb-6">
                        Course Selection
                      </h2>
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">
                          Select Course *
                        </label>
                        <select
                          name="course"
                          value={formData.course}
                          onChange={handleChange}
                          required
                          className="w-full h-12 px-4 rounded-lg border border-input bg-background text-foreground"
                        >
                          <option value="">Choose a course</option>
                          {courses.map((course) => (
                            <option key={course} value={course}>{course}</option>
                          ))}
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">
                          Preferred Start Date (Optional)
                        </label>
                        <Input
                          name="preferredStartDate"
                          type="date"
                          value={formData.preferredStartDate}
                          onChange={handleChange}
                          className="h-12"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">
                          How did you hear about us?
                        </label>
                        <select
                          name="source"
                          value={formData.source}
                          onChange={handleChange}
                          className="w-full h-12 px-4 rounded-lg border border-input bg-background text-foreground"
                        >
                          <option value="">Select an option</option>
                          {sources.map((source) => (
                            <option key={source} value={source}>{source}</option>
                          ))}
                        </select>
                      </div>
                    </div>
                  )}

                  {/* Step 4: Message & Submit */}
                  {currentStep === 4 && (
                    <div className="space-y-6">
                      <h2 className="text-2xl font-heading font-bold text-foreground mb-6">
                        Almost There!
                      </h2>
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">
                          Tell us about your goals (Optional)
                        </label>
                        <Textarea
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          placeholder="What are your career aspirations? What do you hope to achieve?"
                          rows={4}
                          maxLength={500}
                          className="resize-none"
                        />
                        <p className="text-xs text-muted-foreground mt-1">
                          {formData.message.length}/500 characters
                        </p>
                      </div>
                      <div className="flex items-start gap-3">
                        <input
                          type="checkbox"
                          id="consent"
                          name="consent"
                          checked={formData.consent}
                          onChange={handleChange}
                          className="mt-1"
                          required
                        />
                        <label htmlFor="consent" className="text-sm text-muted-foreground">
                          I agree to receive updates about courses, offers, and career opportunities 
                          via email and WhatsApp. I have read and accept the{' '}
                          <a href="/privacy" className="text-secondary hover:underline">Privacy Policy</a>.
                        </label>
                      </div>
                    </div>
                  )}

                  {/* Navigation Buttons */}
                  <div className="flex items-center justify-between mt-8 pt-6 border-t border-border">
                    {currentStep > 1 && (
                      <Button type="button" variant="outline" onClick={prevStep}>
                        <ChevronLeft className="w-4 h-4 mr-2" />
                        Previous
                      </Button>
                    )}
                    {currentStep < 4 ? (
                      <Button
                        type="button"
                        variant="hero"
                        onClick={nextStep}
                        className="ml-auto"
                      >
                        Next Step
                        <ChevronRight className="w-4 h-4 ml-2" />
                      </Button>
                    ) : (
                      <Button
                        type="submit"
                        variant="hero"
                        size="lg"
                        disabled={isSubmitting || !formData.consent}
                        className="ml-auto"
                      >
                        {isSubmitting ? 'Submitting...' : 'Submit Application'}
                      </Button>
                    )}
                  </div>
                </form>
              </motion.div>
            </>
          ) : (
            /* Success State */
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="bg-card p-10 lg:p-16 rounded-2xl border border-border text-center"
            >
              <div className="w-20 h-20 mx-auto rounded-full bg-success flex items-center justify-center mb-6">
                <Check className="w-10 h-10 text-success-foreground" />
              </div>
              <h2 className="text-3xl font-heading font-bold text-foreground mb-4">
                Application Submitted!
              </h2>
              <p className="text-muted-foreground mb-8 max-w-md mx-auto">
                Thank you for your interest in Savvy Axiss! Our team will review your 
                application and contact you within 24 hours.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button variant="hero" asChild>
                  <a
                    href="https://wa.me/919876543210?text=Hi,%20I%20just%20submitted%20my%20application!"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Chat on WhatsApp
                  </a>
                </Button>
                <Button variant="outline" asChild>
                  <a href="/">Back to Home</a>
                </Button>
              </div>
            </motion.div>
          )}
        </div>
      </section>
    </>
  );
};

export default Apply;
