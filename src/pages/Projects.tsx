import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ExternalLink, 
  Github, 
  Users, 
  Calendar,
  Code2,
  Layers,
  Eye
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';

const projectCategories = ['All', 'Web Development', 'Data Science', 'Mobile App', 'AI/ML', 'DevOps'];

const projects = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    category: 'Web Development',
    description: 'A full-featured e-commerce platform with payment integration, inventory management, and real-time order tracking.',
    longDescription: 'Built during our Full-Stack Development internship, this project involved creating a complete e-commerce solution from scratch. Students implemented user authentication, product catalog, shopping cart, payment gateway integration with Razorpay, order management, and an admin dashboard. The project follows best practices for security, performance, and scalability.',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop',
    techStack: ['React', 'Node.js', 'MongoDB', 'Express', 'Razorpay', 'Tailwind CSS'],
    students: ['Rahul Sharma', 'Priya Patel'],
    duration: '8 weeks',
    type: 'Internship Project',
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    id: 2,
    title: 'Healthcare Analytics Dashboard',
    category: 'Data Science',
    description: 'Interactive dashboard for visualizing patient data, hospital metrics, and predictive health analytics.',
    longDescription: 'This data science project focused on healthcare analytics, where students worked with real anonymized patient data to build predictive models and visualization dashboards. The project includes patient flow analysis, disease prediction models, and resource optimization algorithms that help hospitals make data-driven decisions.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop',
    techStack: ['Python', 'Pandas', 'Plotly', 'Scikit-learn', 'Streamlit', 'PostgreSQL'],
    students: ['Arun Kumar', 'Sneha Reddy', 'Vikram Singh'],
    duration: '10 weeks',
    type: 'Capstone Project',
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    id: 3,
    title: 'Food Delivery App',
    category: 'Mobile App',
    description: 'Cross-platform mobile application for food ordering with real-time tracking and push notifications.',
    longDescription: 'A complete food delivery ecosystem built using React Native. Students developed both customer and delivery partner apps with features like real-time GPS tracking, push notifications, in-app payments, restaurant management portal, and order analytics. The backend handles thousands of concurrent orders efficiently.',
    image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=800&h=600&fit=crop',
    techStack: ['React Native', 'Firebase', 'Node.js', 'Socket.io', 'Google Maps API', 'Stripe'],
    students: ['Meera Joshi', 'Karthik R'],
    duration: '12 weeks',
    type: 'Internship Project',
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    id: 4,
    title: 'AI Chatbot for Customer Support',
    category: 'AI/ML',
    description: 'Intelligent chatbot powered by NLP for automated customer support with sentiment analysis.',
    longDescription: 'This AI/ML project involved building an intelligent customer support chatbot using natural language processing. Students implemented intent classification, entity recognition, sentiment analysis, and context-aware responses. The bot integrates with CRM systems and can escalate complex queries to human agents while maintaining conversation history.',
    image: 'https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=800&h=600&fit=crop',
    techStack: ['Python', 'TensorFlow', 'NLTK', 'FastAPI', 'React', 'OpenAI API'],
    students: ['Ananya Gupta', 'Rohit Menon', 'Divya Nair'],
    duration: '10 weeks',
    type: 'Capstone Project',
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    id: 5,
    title: 'CI/CD Pipeline Automation',
    category: 'DevOps',
    description: 'Automated deployment pipeline with containerization, monitoring, and infrastructure as code.',
    longDescription: 'A comprehensive DevOps project where students built an end-to-end CI/CD pipeline. The project includes containerized microservices, Kubernetes orchestration, automated testing, blue-green deployments, infrastructure provisioning with Terraform, and comprehensive monitoring with Prometheus and Grafana dashboards.',
    image: 'https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?w=800&h=600&fit=crop',
    techStack: ['Docker', 'Kubernetes', 'Jenkins', 'Terraform', 'AWS', 'Prometheus'],
    students: ['Suresh Babu', 'Lakshmi K'],
    duration: '8 weeks',
    type: 'Internship Project',
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    id: 6,
    title: 'Social Learning Platform',
    category: 'Web Development',
    description: 'EdTech platform with live classes, discussion forums, and gamified learning experience.',
    longDescription: 'A comprehensive learning management system built for online education. Features include live video streaming, interactive whiteboards, discussion forums, quiz engine, progress tracking, achievement badges, and peer-to-peer learning groups. The platform supports thousands of concurrent learners with optimized video delivery.',
    image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=600&fit=crop',
    techStack: ['Next.js', 'TypeScript', 'Prisma', 'PostgreSQL', 'WebRTC', 'Redis'],
    students: ['Pooja Sharma', 'Amit Verma', 'Neha Kapoor'],
    duration: '14 weeks',
    type: 'Capstone Project',
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    id: 7,
    title: 'Stock Market Predictor',
    category: 'AI/ML',
    description: 'Machine learning model for stock price prediction with real-time market data integration.',
    longDescription: 'An advanced machine learning project that predicts stock market trends using historical data and sentiment analysis from news sources. Students implemented LSTM neural networks, integrated real-time market APIs, and built a web dashboard for visualizing predictions. The model achieved 78% accuracy on test data.',
    image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&h=600&fit=crop',
    techStack: ['Python', 'PyTorch', 'yfinance', 'Pandas', 'Flask', 'Chart.js'],
    students: ['Vijay Krishnan', 'Sanjana Rao'],
    duration: '10 weeks',
    type: 'Internship Project',
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    id: 8,
    title: 'IoT Smart Home System',
    category: 'DevOps',
    description: 'Connected home automation system with voice control and energy monitoring.',
    longDescription: 'This IoT project involved building a complete smart home ecosystem. Students worked with Raspberry Pi, various sensors, and actuators to create automated lighting, climate control, and security systems. The solution includes a mobile app for remote control, voice integration with Alexa, and energy consumption analytics.',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop',
    techStack: ['Python', 'MQTT', 'Raspberry Pi', 'React Native', 'AWS IoT', 'InfluxDB'],
    students: ['Manish Tiwari', 'Kavitha S', 'Rajan Pillai'],
    duration: '12 weeks',
    type: 'Capstone Project',
    liveUrl: '#',
    githubUrl: '#',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

  const filteredProjects = selectedCategory === 'All' 
    ? projects 
    : projects.filter(p => p.category === selectedCategory);

  return (
    <>
      <Helmet>
        <title>Student Projects & Portfolio | Savvy Axiss</title>
        <meta name="description" content="Explore real-time internship projects and student portfolios built at Savvy Axiss. See our students' work in web development, data science, AI/ML, and more." />
      </Helmet>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-secondary/20" />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PHBhdGggZD0iTTM2IDM0djItSDI0di0yaDEyek0zNiAyNHYySDI0di0yaDEyeiIvPjwvZz48L2c+PC9zdmc+')] opacity-50" />
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <Badge className="mb-4 bg-secondary/20 text-secondary border-secondary/30">
              <Layers className="w-3 h-3 mr-1" />
              Student Portfolio
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-foreground mb-6">
              Real Projects, Real
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-accent"> Experience</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              Explore the impressive work created by our students during their internships and capstone projects. 
              Every project is built with industry-standard practices.
            </p>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="flex flex-wrap justify-center gap-8 mt-12"
          >
            {[
              { icon: Code2, label: 'Projects Completed', value: '150+' },
              { icon: Users, label: 'Students Involved', value: '500+' },
              { icon: Layers, label: 'Technologies Used', value: '50+' },
            ].map((stat) => (
              <div key={stat.label} className="flex items-center gap-3 bg-card/50 backdrop-blur-sm px-6 py-3 rounded-xl border border-border/50">
                <stat.icon className="w-5 h-5 text-secondary" />
                <div>
                  <p className="text-2xl font-bold text-foreground">{stat.value}</p>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 border-b border-border sticky top-16 lg:top-20 bg-background/95 backdrop-blur-sm z-30">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-3">
            {projectCategories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? 'default' : 'outline'}
                size="sm"
                onClick={() => setSelectedCategory(category)}
                className="transition-all duration-300"
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedCategory}
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {filteredProjects.map((project) => (
                <motion.div
                  key={project.id}
                  variants={itemVariants}
                  layout
                  className="group bg-card rounded-2xl overflow-hidden border border-border shadow-card hover:shadow-card-hover transition-all duration-500 hover:-translate-y-2"
                >
                  {/* Project Image */}
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent" />
                    <Badge className="absolute top-4 left-4 bg-secondary text-secondary-foreground">
                      {project.type}
                    </Badge>
                    <Badge variant="outline" className="absolute top-4 right-4 bg-card/80 backdrop-blur-sm">
                      {project.category}
                    </Badge>
                  </div>

                  {/* Project Info */}
                  <div className="p-6">
                    <h3 className="text-xl font-heading font-semibold text-foreground mb-2 group-hover:text-secondary transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                      {project.description}
                    </p>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.techStack.slice(0, 4).map((tech) => (
                        <Badge key={tech} variant="secondary" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                      {project.techStack.length > 4 && (
                        <Badge variant="secondary" className="text-xs">
                          +{project.techStack.length - 4}
                        </Badge>
                      )}
                    </div>

                    {/* Meta Info */}
                    <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                      <span className="flex items-center gap-1">
                        <Users className="w-4 h-4" />
                        {project.students.length} Students
                      </span>
                      <span className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {project.duration}
                      </span>
                    </div>

                    {/* Actions */}
                    <div className="flex gap-3">
                      <Button 
                        variant="default" 
                        size="sm" 
                        className="flex-1"
                        onClick={() => setSelectedProject(project)}
                      >
                        <Eye className="w-4 h-4 mr-2" />
                        View Details
                      </Button>
                      <Button variant="outline" size="sm" asChild>
                        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                          <Github className="w-4 h-4" />
                        </a>
                      </Button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>

          {filteredProjects.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-16"
            >
              <Code2 className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-foreground mb-2">No Projects Found</h3>
              <p className="text-muted-foreground">No projects match the selected category.</p>
            </motion.div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-secondary to-accent">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-secondary-foreground mb-4">
              Want to Build Projects Like These?
            </h2>
            <p className="text-secondary-foreground/80 text-lg mb-8 max-w-2xl mx-auto">
              Join our internship programs and build real-world projects that matter. 
              Get hands-on experience with industry mentors.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button variant="secondary" size="lg" asChild className="bg-primary-foreground text-primary hover:bg-primary-foreground/90">
                <a href="/apply">Apply for Internship</a>
              </Button>
              <Button variant="outline" size="lg" asChild className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10">
                <a href="/courses">Explore Courses</a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Project Detail Modal */}
      <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
        <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
          {selectedProject && (
            <>
              <DialogHeader>
                <div className="relative h-64 -mx-6 -mt-6 mb-4 overflow-hidden rounded-t-lg">
                  <img
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-6 right-6">
                    <Badge className="mb-2 bg-secondary text-secondary-foreground">
                      {selectedProject.type}
                    </Badge>
                    <DialogTitle className="text-2xl text-foreground">{selectedProject.title}</DialogTitle>
                  </div>
                </div>
                <DialogDescription className="text-left">
                  {selectedProject.longDescription}
                </DialogDescription>
              </DialogHeader>

              <div className="space-y-6 mt-4">
                {/* Tech Stack */}
                <div>
                  <h4 className="text-sm font-semibold text-foreground mb-3 flex items-center gap-2">
                    <Code2 className="w-4 h-4 text-secondary" />
                    Technologies Used
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.techStack.map((tech) => (
                      <Badge key={tech} variant="secondary">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Team */}
                <div>
                  <h4 className="text-sm font-semibold text-foreground mb-3 flex items-center gap-2">
                    <Users className="w-4 h-4 text-secondary" />
                    Team Members
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.students.map((student) => (
                      <Badge key={student} variant="outline">
                        {student}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Details */}
                <div className="flex items-center gap-6 text-sm text-muted-foreground">
                  <span className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    Duration: {selectedProject.duration}
                  </span>
                  <Badge variant="outline">{selectedProject.category}</Badge>
                </div>

                {/* Actions */}
                <div className="flex gap-3 pt-4 border-t border-border">
                  <Button className="flex-1" asChild>
                    <a href={selectedProject.liveUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      View Live Demo
                    </a>
                  </Button>
                  <Button variant="outline" asChild>
                    <a href={selectedProject.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Github className="w-4 h-4 mr-2" />
                      View Code
                    </a>
                  </Button>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
}
