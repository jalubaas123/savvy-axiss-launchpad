import { useParams, Link, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { ArrowLeft, CheckCircle2, ShoppingCart, ChevronRight, Play } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { getProjectBySlug, getRelatedProjects } from '@/data/projectsData';
import { SEO_BASE_URL } from '@/lib/seo';

const formatPrice = (price: number) => {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0,
  }).format(price);
};

export default function ProjectDetail() {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const project = getProjectBySlug(slug || '');

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-foreground mb-4">Project Not Found</h1>
          <Button asChild>
            <Link to="/projects">Back to Projects</Link>
          </Button>
        </div>
      </div>
    );
  }

  const relatedProjects = getRelatedProjects(project.slug, project.category);
  const discountPercent = project.originalPrice 
    ? Math.round(((project.originalPrice - project.price) / project.originalPrice) * 100) 
    : 0;

  const whatsappMessage = encodeURIComponent(
    `Hi, I'm interested in purchasing the following project:\n\n` +
    `📌 Project: ${project.title}\n` +
    `💰 Price: ${formatPrice(project.price)}${project.originalPrice ? ` (Original: ${formatPrice(project.originalPrice)})` : ''}\n` +
    `📂 Category: ${project.category}\n\n` +
    `Please provide more details and proceed with the purchase.`
  );

  const schemaBreadcrumb = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: SEO_BASE_URL },
      { '@type': 'ListItem', position: 2, name: 'Projects', item: `${SEO_BASE_URL}/projects` },
      { '@type': 'ListItem', position: 3, name: project.title, item: `${SEO_BASE_URL}/projects/${project.slug}` },
    ],
  };
  const schemaProduct = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: project.title,
    description: project.longDescription || project.description,
    category: 'Final Year Project',
    brand: { '@type': 'Organization', name: 'Savvy Axiss' },
    offers: {
      '@type': 'Offer',
      price: String(project.price),
      priceCurrency: 'INR',
      availability: 'https://schema.org/InStock',
      url: `${SEO_BASE_URL}/projects/${project.slug}`,
    },
  };

  const schemaVideo = project.videoUrl
    ? {
        '@context': 'https://schema.org',
        '@type': 'VideoObject',
        name: `${project.title} - Demo Video`,
        description: project.description,
        thumbnailUrl: project.image,
        embedUrl: project.videoUrl,
      }
    : null;

  return (
    <>
      <Helmet>
        <title>{project.title} - Final Year Project in Chennai | Savvy Axiss</title>
        <meta name="description" content={`${project.title} final year project in Chennai. Complete source code, documentation, installation & viva support. Domain: ${project.category}. Savvy Axiss, Maduravoyal. Get your project now!`} />
        <meta name="keywords" content={`${project.title.toLowerCase()}, ${project.category} project Chennai, final year project Chennai, college project Chennai, Savvy Axiss projects, ${project.techStack?.slice(0, 3).join(' ') || ''}`} />
        <link rel="canonical" href={`${SEO_BASE_URL}/projects/${project.slug}`} />
        <meta property="og:title" content={`${project.title} - Final Year Project in Chennai | Savvy Axiss`} />
        <meta property="og:description" content={`Complete ${project.title} project in Chennai. Source code, documentation & expert support. Savvy Axiss, Maduravoyal.`} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={`${SEO_BASE_URL}/projects/${project.slug}`} />
        <meta property="og:image" content={project.image?.startsWith('http') ? project.image : `${SEO_BASE_URL}${project.image}`} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={`${project.title} - Final Year Project in Chennai | Savvy Axiss`} />
        <meta name="twitter:description" content={`${project.title} final year project in Chennai. Source code, documentation & expert support.`} />
        <meta name="twitter:image" content={project.image?.startsWith('http') ? project.image : `${SEO_BASE_URL}${project.image}`} />
        <script type="application/ld+json">{JSON.stringify(schemaProduct)}</script>
        <script type="application/ld+json">{JSON.stringify(schemaBreadcrumb)}</script>
        {schemaVideo && <script type="application/ld+json">{JSON.stringify(schemaVideo)}</script>}
      </Helmet>

      {/* Breadcrumb & Header */}
      <section className="pt-32 pb-8" style={{ backgroundColor: '#004aad' }}>
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {/* Visible Breadcrumb (already present, kept as-is) */}
            <nav className="flex items-center gap-2 text-white/70 text-sm mb-6" aria-label="Breadcrumb">
              <Link to="/" className="hover:text-white transition-colors">Home</Link>
              <ChevronRight className="w-4 h-4" />
              <Link to="/projects" className="hover:text-white transition-colors">Projects</Link>
              <ChevronRight className="w-4 h-4" />
              <span className="text-white">{project.title}</span>
            </nav>

            <Button
              variant="ghost"
              className="text-white/70 hover:text-white mb-4 -ml-4"
              onClick={() => navigate('/projects')}
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Projects
            </Button>

            <Badge className="bg-violet-500/20 text-violet-300 border-violet-500/30 mb-4">
              {project.category}
            </Badge>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-white">
              {project.title} - Final Year Project
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Left Column - Video & Description */}
            <div className="lg:col-span-2 space-y-8">
              {/* Video Player - only when demo video URL is provided */}
              {project.videoUrl ? (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="relative rounded-2xl overflow-hidden bg-card border border-border aspect-video"
                >
                  <iframe
                    src={project.videoUrl}
                    title={project.title}
                    className="absolute inset-0 w-full h-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </motion.div>
              ) : null}

              {/* Description */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="bg-card rounded-2xl border border-border p-6 md:p-8"
              >
                <h2 className="text-2xl font-heading font-bold text-foreground mb-4">
                  Project Description
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  {project.longDescription}
                </p>

                <h3 className="text-xl font-heading font-semibold text-foreground mb-4">
                  What's Included
                </h3>
                <ul className="grid md:grid-cols-2 gap-3">
                  {project.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-success shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>

              {/* Tech Stack */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="bg-card rounded-2xl border border-border p-6 md:p-8"
              >
                <h2 className="text-2xl font-heading font-bold text-foreground mb-4">
                  Technologies Used
                </h2>
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech, index) => (
                    <Badge
                      key={index}
                      variant="secondary"
                      className="px-4 py-2 text-sm"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Right Column - Pricing Card */}
            <div className="lg:col-span-1">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="sticky top-24"
              >
                <Card className="border-2 border-secondary/30 shadow-glow">
                  <CardContent className="p-6">
                    {/* Price */}
                    <div className="mb-6">
                      <div className="flex items-baseline gap-2 mb-1">
                        <span className="text-4xl font-bold text-foreground">
                          {formatPrice(project.price)}
                        </span>
                        {project.originalPrice && (
                          <span className="text-lg text-muted-foreground line-through">
                            {formatPrice(project.originalPrice)}
                          </span>
                        )}
                      </div>
                      {discountPercent > 0 && (
                        <Badge className="bg-success/10 text-success border-success/20">
                          {discountPercent}% OFF
                        </Badge>
                      )}
                    </div>

                    {/* CTA Button */}
                    <div>
                      <Button className="w-full h-12 text-base bg-[#25D366] hover:bg-[#20BA5A] text-white border-0" asChild>
                        <a
                          href={`https://wa.me/919384902501?text=${whatsappMessage}`}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <ShoppingCart className="w-5 h-5 mr-2" />
                          Buy Now
                        </a>
                      </Button>
                    </div>

                    {/* Features */}
                    <div className="mt-6 pt-6 border-t border-border">
                      <h4 className="font-semibold text-foreground mb-3">This project includes:</h4>
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        <li className="flex items-center gap-2">
                          <CheckCircle2 className="w-4 h-4 text-success" />
                          Complete source code
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle2 className="w-4 h-4 text-success" />
                          Documentation & PPT
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle2 className="w-4 h-4 text-success" />
                          Installation support
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle2 className="w-4 h-4 text-success" />
                          Code explanation
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle2 className="w-4 h-4 text-success" />
                          Free revisions
                        </li>
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Projects */}
      {relatedProjects.length > 0 && (
        <section className="py-12 bg-muted/30">
          <div className="container mx-auto px-4 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-8"
            >
              <h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground">
                Related Projects
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-6">
              {relatedProjects.map((relProject, index) => (
                <motion.div
                  key={relProject.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link to={`/projects/${relProject.slug}`}>
                    <Card className="group overflow-hidden hover:border-secondary/50 transition-all duration-300 card-hover">
                      <div className="relative aspect-video overflow-hidden">
                        <img
                          src={relProject.image}
                          alt={`${relProject.title} - Final Year Project - Savvy Axiss`}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                        <Badge className="absolute top-3 left-3 bg-primary/80 backdrop-blur-sm">
                          {relProject.category}
                        </Badge>
                      </div>
                      <CardContent className="p-4">
                        <h3 className="font-semibold text-foreground group-hover:text-secondary transition-colors">
                          {relProject.title}
                        </h3>
                        <p className="text-lg font-bold text-secondary mt-2">
                          {formatPrice(relProject.price)}
                        </p>
                      </CardContent>
                    </Card>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
