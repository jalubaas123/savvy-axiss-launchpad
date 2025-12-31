import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    toast({
      title: "Message Sent!",
      description: "We'll get back to you within 24 hours.",
    });

    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: '',
    });
    setIsSubmitting(false);
  };

  return (
    <>
      <Helmet>
        <title>Contact Us - Savvy Axiss | Get in Touch</title>
        <meta 
          name="description" 
          content="Have questions about our courses? Contact Savvy Axiss. We're here to help you start your tech career journey." 
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
              Get in Touch
            </span>
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-primary-foreground mb-6">
              We'd Love to Hear From You
            </h1>
            <p className="text-lg text-primary-foreground/70">
              Have questions about our courses? Ready to start your journey? 
              Reach out and we'll respond within 24 hours.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="lg:col-span-3"
            >
              <div className="bg-card p-8 lg:p-10 rounded-2xl border border-border">
                <h2 className="text-2xl font-heading font-bold text-foreground mb-6">
                  Send Us a Message
                </h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                        Full Name *
                      </label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="John Doe"
                        className="h-12"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                        Email *
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="john@example.com"
                        className="h-12"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                        Phone Number *
                      </label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+91 93849 02501"
                        className="h-12"
                      />
                    </div>
                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
                        Subject *
                      </label>
                      <Input
                        id="subject"
                        name="subject"
                        type="text"
                        required
                        value={formData.subject}
                        onChange={handleChange}
                        placeholder="Course Inquiry"
                        className="h-12"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                      Message *
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      required
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us how we can help you..."
                      rows={5}
                      className="resize-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    variant="hero"
                    size="lg"
                    disabled={isSubmitting}
                    className="w-full"
                  >
                    {isSubmitting ? (
                      'Sending...'
                    ) : (
                      <>
                        Send Message
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </Button>
                </form>
              </div>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="lg:col-span-2"
            >
              <div className="space-y-6">
                {/* Address Card */}
                <div className="bg-card p-6 rounded-xl border border-border">
                  <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center mb-4">
                    <MapPin className="w-6 h-6 text-secondary" />
                  </div>
                  <h3 className="font-heading font-semibold text-foreground mb-2">Our Office</h3>
                  <p className="text-muted-foreground text-sm">
                    38 4th Block MMDA Colony<br />
                  Maduravoyal, Chennai-600095<br />
                    India
                  </p>
                </div>

                {/* Email Card */}
                <div className="bg-card p-6 rounded-xl border border-border">
                  <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center mb-4">
                    <Mail className="w-6 h-6 text-secondary" />
                  </div>
                  <h3 className="font-heading font-semibold text-foreground mb-2">Email Us</h3>
                  <a 
                    href="mailto:info@savvyaxiss.com" 
                    className="text-secondary hover:underline text-sm"
                  >
                    info@savvyaxiss.com
                  </a>
                  <br />
                  <a 
                    href="mailto:careers@savvyaxiss.com" 
                    className="text-secondary hover:underline text-sm"
                  >
                    careers@savvyaxiss.com
                  </a>
                </div>

                {/* Phone Card */}
                <div className="bg-card p-6 rounded-xl border border-border">
                  <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center mb-4">
                    <Phone className="w-6 h-6 text-secondary" />
                  </div>
                  <h3 className="font-heading font-semibold text-foreground mb-2">Call Us</h3>
                  <a 
                    href="tel:+919384902501" 
                    className="text-secondary hover:underline text-sm"
                  >
                    +91 9384902501
                  </a>
                  <p className="text-muted-foreground text-xs mt-1">
                    Mon - Sun, 24/7 Availability
                  </p>
                </div>

                {/* WhatsApp Card */}
                <a
                  href="https://wa.me/919384902501?text=Hi,%20I'm%20interested%20in%20learning%20more%20about%20Savvy%20Axiss%20courses!"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block bg-[hsl(142,70%,45%)] p-6 rounded-xl text-success-foreground hover:opacity-90 transition-opacity"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-lg bg-success-foreground/20 flex items-center justify-center">
                      <MessageCircle className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-heading font-semibold mb-1">Chat on WhatsApp</h3>
                      <p className="text-sm opacity-80">Get instant responses</p>
                    </div>
                  </div>
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="pb-20 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="rounded-2xl overflow-hidden border border-border h-[400px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.54459820474!2d80.17330571110568!3d13.06463398720622!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a52610d02b3babb%3A0x3f3d2bf95abd669d!2sSavvy%20Axiss%20Academy%20%26%20Project%20Center!5e0!3m2!1sen!2sin!4v1767163355157!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Savvy Axiss Location"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
