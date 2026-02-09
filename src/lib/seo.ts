/**
 * SEO configuration and shared JSON-LD schemas for Savvy Axiss
 * Base URL: use in canonical, OG URLs, and sitemap
 */
export const SEO_BASE_URL = 'https://savvyaxiss.com';

/** SEO-friendly URL paths (lowercase, hyphen-separated, keyword-rich) */
export const ROUTES = {
  home: '/',
  about: '/about',
  courses: '/courses',
  projects: '/projects',
  internship: '/internship',
  webDevelopment: '/web-development',
  blog: '/blog',
  contact: '/contact',
  apply: '/apply',
  enroll: '/enroll',
} as const;

/** Default title suffix for all pages */
export const SEO_TITLE_SUFFIX = ' | Savvy Axiss';

/** Primary Keywords */
export const PRIMARY_KEYWORDS = {
  location: 'Chennai',
  services: ['programming courses', 'final year projects', 'internships', 'website development'],
  audience: ['students', 'professionals', 'arts students', 'science students', 'engineering students'],
  areas: ['T Nagar', 'Velachery', 'Tambaram', 'Anna Nagar', 'OMR', 'Guindy', 'Maduravoyal', 'Porur', 'Adyar', 'Chrompet']
};

/** Chennai address (NAP - Name, Address, Phone consistency) */
export const CHENNAI_ADDRESS = {
  '@type': 'PostalAddress' as const,
  streetAddress: '38, 4th Block MMDA Colony, Maduravoyal',
  addressLocality: 'Chennai',
  addressRegion: 'Tamil Nadu',
  postalCode: '600095',
  addressCountry: 'IN',
};

/** Contact Information - Update with actual numbers for full LocalBusiness schema */
export const CONTACT_INFO = {
  phone: '+91-9384902501', // Add: e.g. '+91-9876543210'
  email: 'info@savvyaxiss.com',
  whatsapp: '+91-9384902501', // Add: e.g. '+91-9876543210'
};

/** Global Organization schema (EducationalOrganization) - fully Chennai-based */
export const schemaOrganization = {
  '@context': 'https://schema.org',
  '@type': 'EducationalOrganization',
  name: 'Savvy Axiss',
  alternateName: ['Savvy Axiss', 'Savvy Axiss Chennai'],
  url: SEO_BASE_URL,
  logo: `${SEO_BASE_URL}/logo.png`,
  description:
    'Savvy Axiss is a fully Chennai-based education company (Maduravoyal) offering final year projects, professional tech courses, website development, and internship programs for students and professionals in Chennai and Tamil Nadu.',
  foundingDate: '2022',
  address: CHENNAI_ADDRESS,
  areaServed: [
    { '@type': 'City', name: 'Chennai', containedInPlace: { '@type': 'State', name: 'Tamil Nadu' } },
    { '@type': 'Country', name: 'India' },
  ],
  contactPoint: {
    '@type': 'ContactPoint',
    contactType: 'Customer Service',
    availableLanguage: ['English', 'Hindi', 'Tamil'],
    areaServed: 'IN',
  },
  sameAs: [
    'https://www.linkedin.com/company/savvyaxiss',
    'https://www.facebook.com/savvyaxiss',
    'https://twitter.com/savvyaxiss',
    'https://www.instagram.com/savvyaxiss',
  ],
  founder: {
    '@type': 'Person',
    name: 'Shalini Baskaran',
    jobTitle: 'Founder & CEO',
  },
};

/** Global WebSite schema with SearchAction */
export const schemaWebSite = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'Savvy Axiss',
  url: SEO_BASE_URL,
  potentialAction: {
    '@type': 'SearchAction',
    target: `${SEO_BASE_URL}/courses?search={search_term_string}`,
    'query-input': 'required name=search_term_string',
  },
};

/** LocalBusiness Schema for Chennai Location */
export const schemaLocalBusiness = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  '@id': `${SEO_BASE_URL}/#localbusiness`,
  name: 'Savvy Axiss',
  image: `${SEO_BASE_URL}/og-image.png`,
  url: SEO_BASE_URL,
  ...(CONTACT_INFO.phone && { telephone: CONTACT_INFO.phone }),
  ...(CONTACT_INFO.email && { email: CONTACT_INFO.email }),
  address: CHENNAI_ADDRESS,
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 13.0358,
    longitude: 80.1598,
  },
  priceRange: '₹₹',
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
      opens: '09:00',
      closes: '18:00',
    },
  ],
  areaServed: [
    { '@type': 'City', name: 'Chennai' },
    { '@type': 'City', name: 'T Nagar' },
    { '@type': 'City', name: 'Velachery' },
    { '@type': 'City', name: 'Tambaram' },
    { '@type': 'City', name: 'Anna Nagar' },
    { '@type': 'City', name: 'OMR' },
    { '@type': 'City', name: 'Guindy' },
    { '@type': 'City', name: 'Maduravoyal' },
    { '@type': 'City', name: 'Porur' },
    { '@type': 'City', name: 'Adyar' },
    { '@type': 'City', name: 'Chrompet' },
  ],
  sameAs: [
    'https://www.linkedin.com/company/savvyaxiss',
    'https://www.facebook.com/savvyaxiss',
    'https://twitter.com/savvyaxiss',
    'https://www.instagram.com/savvyaxiss',
  ],
};

/** Helper function to create FAQ Schema */
export const createFAQSchema = (faqs: Array<{ question: string; answer: string }>) => ({
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map(faq => ({
    '@type': 'Question',
    name: faq.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: faq.answer,
    },
  })),
});

/** Helper function to create BreadcrumbList Schema */
export const createBreadcrumbSchema = (items: Array<{ name: string; url: string }>) => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: items.map((item, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    name: item.name,
    item: item.url.startsWith('http') ? item.url : `${SEO_BASE_URL}${item.url}`,
  })),
});

/** Course schema (courseCode, learningResourceType) for CourseDetail pages */
export const createCourseSchema = (params: {
  name: string;
  description: string;
  courseCode?: string;
  provider?: string;
  url: string;
  image?: string;
  instructor?: { name: string };
  offers?: { price?: number; priceCurrency?: string };
  aggregateRating?: { ratingValue: number; reviewCount: number };
}) => ({
  '@context': 'https://schema.org',
  '@type': 'Course',
  name: params.name,
  description: params.description,
  learningResourceType: 'Course',
  ...(params.courseCode && { courseCode: params.courseCode }),
  ...(params.provider && { provider: { '@type': 'Organization', name: params.provider } }),
  url: params.url.startsWith('http') ? params.url : `${SEO_BASE_URL}${params.url}`,
  ...(params.image && { image: params.image.startsWith('http') ? params.image : `${SEO_BASE_URL}${params.image}` }),
  ...(params.instructor && { instructor: { '@type': 'Person', name: params.instructor.name } }),
  ...(params.offers && { offers: { '@type': 'Offer', ...params.offers } }),
  ...(params.aggregateRating && {
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: params.aggregateRating.ratingValue,
      reviewCount: params.aggregateRating.reviewCount,
      bestRating: 5,
    },
  }),
});

/** Review/Rating schema (AggregateRating) for student reviews */
export const createReviewSchema = (params: {
  itemName: string;
  ratingValue: number;
  reviewCount: number;
  bestRating?: number;
}) => ({
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: params.itemName,
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: params.ratingValue,
    reviewCount: params.reviewCount,
    bestRating: params.bestRating ?? 5,
    worstRating: 1,
  },
});
