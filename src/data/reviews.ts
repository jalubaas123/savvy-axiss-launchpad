/**
 * Student reviews — maintained in the codebase forever (no backend).
 * Add new reviews here after verifying submissions from the "Submit your review" form.
 * Each review gets a stable id used for shareable links: /#review-{id}
 */

export interface StudentReview {
  id: string;
  name: string;
  role: string;
  image: string;
  content: string;
  rating: number;
  course: string;
  /** Optional: when the review was added (display only) */
  dateAdded?: string;
}

export const studentReviews: StudentReview[] = [
  {
    id: '1',
    name: 'Priya S.',
    role: 'B.Tech CSE',
    image: '/placeholder.svg',
    content: 'The Python and MERN stack courses helped me land my first internship. Instructors are patient and the projects are very practical.',
    rating: 5,
    course: 'Python & MERN Stack',
    dateAdded: '2024',
  },
  {
    id: '2',
    name: 'Arun K.',
    role: 'MCA Student',
    image: '/placeholder.svg',
    content: 'I did my final year project here. Got full support with code, documentation and deployment. Highly recommend for project support in Chennai.',
    rating: 5,
    course: 'Final Year Project',
    dateAdded: '2024',
  },
  {
    id: '3',
    name: 'Divya M.',
    role: 'B.Sc IT',
    image: '/placeholder.svg',
    content: 'Excel and Digital Marketing training was exactly what I needed for my job. Affordable and flexible timings. Great for students.',
    rating: 5,
    course: 'Excel & Digital Marketing',
    dateAdded: '2024',
  },
  {
    id: '4',
    name: 'Karthik R.',
    role: 'Engineering Graduate',
    image: '/placeholder.svg',
    content: 'Completed internship with real client projects. Certificate and experience helped me get placed. Savvy Axiss is one of the best in Chennai for students.',
    rating: 5,
    course: 'Internship Program',
    dateAdded: '2024',
  },
];

export function getReviewById(id: string): StudentReview | undefined {
  return studentReviews.find((r) => r.id === id);
}
