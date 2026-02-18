import { useRef, useEffect, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Star, Quote, MessageSquarePlus, X, Loader2 } from 'lucide-react';
import { studentReviews as staticReviews } from '@/data/reviews';
import type { StudentReview, ReviewCategory } from '@/data/reviews';
import {
  isReviewsScriptConfigured,
  fetchApprovedReviews,
  getReviewsScriptUrl,
  REVIEW_MAX_LENGTH,
  REVIEW_MAX_WORDS,
} from '@/services/reviewsApi';
import { toast } from 'sonner';

const REVIEW_HASH_PREFIX = 'review-';
const SUBMIT_REVIEW_HASH = 'submit-review';
const POLL_INTERVAL_MS = 60_000; // Re-fetch approved reviews every 60 seconds

/** Category options for the review form — student must select what they are reviewing. */
const REVIEW_CATEGORIES: { value: ReviewCategory; label: string }[] = [
  { value: 'Course', label: 'Course' },
  { value: 'Internship', label: 'Internship' },
  { value: 'Project', label: 'Project (Final Year / Academic)' },
  { value: 'Website Development', label: 'Website Development' },
];

const getReviewLink = (id: string) => {
  const base = window.location.origin + window.location.pathname;
  return `${base}#${REVIEW_HASH_PREFIX}${id}`;
};

/** Shareable URL that opens the submit-review form (for students). */
const getSubmitReviewUrl = () => {
  const base = window.location.origin + window.location.pathname;
  return `${base}#${SUBMIT_REVIEW_HASH}`;
};

export const StudentReviews = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });
  const [showSubmitForm, setShowSubmitForm] = useState(false);
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [reviews, setReviews] = useState<StudentReview[]>(staticReviews);
  const [reviewsLoading, setReviewsLoading] = useState(isReviewsScriptConfigured());
  const [reviewsError, setReviewsError] = useState<string | null>(null);
  const [submitLoading, setSubmitLoading] = useState(false);
  const [reviewWordCount, setReviewWordCount] = useState(0);
  const [submitLinkCopied, setSubmitLinkCopied] = useState(false);
  const [photoDataUrl, setPhotoDataUrl] = useState<string | null>(null);
  const useSheet = isReviewsScriptConfigured();

  const countWords = (text: string) =>
    text.trim() ? text.trim().split(/\s+/).length : 0;

  // Fetch approved reviews on load (and when using Sheet)
  useEffect(() => {
    if (!useSheet) {
      setReviewsLoading(false);
      setReviews(staticReviews);
      return;
    }
    let cancelled = false;
    const load = async () => {
      try {
        const data = await fetchApprovedReviews();
        if (!cancelled) {
          setReviews(data);
          setReviewsError(null);
        }
      } catch (err) {
        if (!cancelled) {
          setReviewsError(err instanceof Error ? err.message : 'Failed to load reviews');
          setReviews(staticReviews);
        }
      } finally {
        if (!cancelled) setReviewsLoading(false);
      }
    };
    load();
    return () => {
      cancelled = true;
    };
  }, [useSheet]);

  // Optional: re-fetch every 60 seconds when using Sheet
  useEffect(() => {
    if (!useSheet) return;
    const interval = setInterval(async () => {
      try {
        const data = await fetchApprovedReviews();
        setReviews(data);
        setReviewsError(null);
      } catch {
        // Keep previous data on poll error
      }
    }, POLL_INTERVAL_MS);
    return () => clearInterval(interval);
  }, [useSheet]);

  // Open submit form when page loads with #submit-review (shareable link for students)
  useEffect(() => {
    const hash = window.location.hash?.slice(1);
    const params = new URLSearchParams(window.location.search);
    if (hash === SUBMIT_REVIEW_HASH || params.get('submit') === 'review') {
      setShowSubmitForm(true);
    }
  }, []);

  // Scroll to review when page loads with #review-{id}
  useEffect(() => {
    const hash = window.location.hash?.slice(1);
    if (!hash || !hash.startsWith(REVIEW_HASH_PREFIX)) return;
    const el = document.getElementById(hash);
    const container = scrollContainerRef.current;
    if (el && container) {
      const timeout = setTimeout(() => {
        const containerRect = container.getBoundingClientRect();
        const cardRect = el.getBoundingClientRect();
        const scrollLeft =
          container.scrollLeft +
          (cardRect.left - containerRect.left) -
          containerRect.width / 2 +
          cardRect.width / 2;
        container.scrollTo({ left: Math.max(0, scrollLeft), behavior: 'smooth' });
      }, 400);
      return () => clearTimeout(timeout);
    }
  }, []);

  const copyReviewLink = (id: string) => {
    const url = getReviewLink(id);
    navigator.clipboard.writeText(url).then(() => {
      setCopiedId(id);
      setTimeout(() => setCopiedId(null), 2000);
    });
  };

  // Submit via form POST to script URL in hidden iframe — avoids fetch() and CORS.
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!useSheet) {
      toast.error('Reviews are not configured. Add VITE_REVIEWS_SCRIPT_URL to enable submissions.');
      return;
    }
    const form = e.currentTarget;
    const formData = new FormData(form);
    const name = (formData.get('name') as string)?.trim() ?? '';
    const course = (formData.get('course') as string)?.trim() ?? '';
    const category = (formData.get('category') as string)?.trim() ?? '';
    const ratingRaw = formData.get('rating');
    const rating = ratingRaw !== null && ratingRaw !== '' ? Number(ratingRaw) : 0;
    const review = (formData.get('review') as string)?.trim() ?? '';

    if (!name) { toast.error('Please enter your name.'); return; }
    if (!course) { toast.error('Please enter the course or program.'); return; }
    const validCategories = REVIEW_CATEGORIES.map((c) => c.value);
    if (!category || !validCategories.includes(category as ReviewCategory)) {
      toast.error('Please select what you are reviewing (Course, Internship, Project, or Website Development).');
      return;
    }
    if (!review) { toast.error('Please enter your review.'); return; }
    if (rating < 1 || rating > 5 || !Number.isInteger(rating)) {
      toast.error('Please choose a rating between 1 and 5.');
      return;
    }
    const wordCount = countWords(review);
    if (wordCount > REVIEW_MAX_WORDS) {
      toast.error(`Review must be at most ${REVIEW_MAX_WORDS} words (you have ${wordCount}).`);
      return;
    }
    if (review.length > REVIEW_MAX_LENGTH) {
      toast.error(`Review must be at most ${REVIEW_MAX_LENGTH} characters.`);
      return;
    }

    setSubmitLoading(true);
    form.submit();
    setShowSubmitForm(false);
    toast.success('Thanks! Your review will appear after approval.');
    setSubmitLoading(false);
  };

  const displayReviews = reviewsLoading ? [] : reviews;

  const inferGenderFromName = (name: string): 'male' | 'female' => {
    const first = name.split(' ')[0]?.toLowerCase() ?? '';
    const femaleHints = ['a', 'i', 'y'];
    if (femaleHints.some((ch) => first.endsWith(ch))) return 'female';
    return 'male';
  };

  /** Display label for the category badge (use student-selected category if present, else infer from course). */
  const getCategoryDisplayLabel = (review: StudentReview): string => {
    if (review.category) {
      return review.category === 'Website Development' ? 'Website' : review.category;
    }
    const c = review.course.toLowerCase();
    if (c.includes('project')) return 'Project';
    if (c.includes('internship')) return 'Internship';
    if (c.includes('website') || c.includes('web')) return 'Website';
    return 'Course';
  };

  const getInitials = (name: string): string => {
    const parts = name.split(' ').filter(Boolean);
    if (parts.length === 0) return '';
    if (parts.length === 1) return parts[0].slice(0, 2).toUpperCase();
    return (parts[0][0] + parts[1][0]).toUpperCase();
  };

  const handlePhotoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) {
      setPhotoDataUrl(null);
      return;
    }
    if (!file.type.startsWith('image/')) {
      toast.error('Please upload an image file.');
      return;
    }
    const reader = new FileReader();
    reader.onloadend = () => {
      if (typeof reader.result === 'string') {
        setPhotoDataUrl(reader.result);
      }
    };
    reader.readAsDataURL(file);
  };

  return (
    <section ref={sectionRef} className="py-12 sm:py-20 lg:py-28 bg-primary overflow-hidden" id="student-reviews">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <div className="flex justify-center mb-4">
            <span className="inline-flex items-center px-4 py-1.5 rounded-full text-sm font-medium bg-secondary/20 text-secondary border border-secondary/30">
              Student Reviews
            </span>
          </div>
          <div className="flex justify-center mb-4">
            <div className="w-16 h-0.5 bg-gradient-to-r from-secondary to-accent rounded-full" />
          </div>
          <h2 className="text-2xl md:text-3xl font-heading font-semibold text-primary-foreground mb-4">
            What Our Students Say
          </h2>
          <p className="text-primary-foreground/70 max-w-2xl mx-auto mb-6">
            Real reviews from students. Reviews are kept on the site forever.
          </p>
          <div className="inline-flex items-center gap-2 rounded-lg border border-secondary/30 bg-secondary/10 p-1.5">
            <button
              type="button"
              onClick={() => setShowSubmitForm(true)}
              className="inline-flex items-center gap-2 rounded-md bg-secondary px-5 py-2.5 text-sm font-medium text-secondary-foreground hover:bg-secondary/90 transition-colors"
            >
              <MessageSquarePlus className="w-4 h-4" />
              Submit your review
            </button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="relative"
        >
          <div
            ref={scrollContainerRef}
            className="flex gap-6 overflow-x-auto pb-4 snap-x snap-mandatory scroll-smooth"
          >
            {reviewsLoading ? (
              <div className="flex-shrink-0 w-full flex items-center justify-center py-12 text-primary-foreground/70">
                <Loader2 className="w-8 h-8 animate-spin" />
              </div>
            ) : reviewsError ? (
              <div className="flex-shrink-0 w-full text-center py-12 text-destructive">
                {reviewsError}
              </div>
            ) : displayReviews.length === 0 ? (
              <div className="flex-shrink-0 w-full text-center py-12 text-primary-foreground/70">
                No reviews yet. Be the first to leave one!
              </div>
            ) : (
              displayReviews.map((review) => {
                const hasPhoto = !!review.image && review.image !== '/placeholder.svg';
                const gender = inferGenderFromName(review.name);
                const categoryLabel = getCategoryDisplayLabel(review);
                const initials = getInitials(review.name);
                return (
                <div
                  key={review.id}
                  id={`${REVIEW_HASH_PREFIX}${review.id}`}
                  className="flex-shrink-0 w-[min(100%,300px)] sm:w-[320px] snap-center"
                >
                  <div className="bg-card rounded-xl border border-border hover:border-secondary/30 transition-all duration-300 flex flex-col h-[280px] overflow-hidden shadow-sm">
                    <div className="p-4 flex-1 flex flex-col min-h-0">
                      <Quote className="w-8 h-8 text-secondary/30 mb-2 flex-shrink-0" />
                      <p className="text-foreground/80 text-sm leading-snug line-clamp-4 flex-1 min-h-0">
                        &ldquo;{review.content}&rdquo;
                      </p>
                      <div className="flex items-center gap-1 mt-3 flex-shrink-0">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`w-3.5 h-3.5 ${
                              i < review.rating ? 'fill-warning text-warning' : 'text-muted-foreground'
                            }`}
                          />
                        ))}
                      </div>
                    </div>
                    <div className="p-4 pt-0 flex items-center justify-between gap-3 border-t border-border/50 flex-shrink-0">
                      <div className="flex items-center gap-3 min-w-0">
                        {hasPhoto ? (
                          <img
                            src={review.image}
                            alt={`${review.name} - Savvy Axiss`}
                            loading="lazy"
                            className="w-11 h-11 rounded-full object-cover border-2 border-secondary/30 flex-shrink-0"
                          />
                        ) : (
                          <div
                            className={`w-11 h-11 rounded-full border-2 border-secondary/30 flex items-center justify-center flex-shrink-0 bg-gradient-to-br ${
                              gender === 'male' ? 'from-blue-500 to-cyan-500' : 'from-pink-500 to-rose-500'
                            }`}
                          >
                            <span className="text-xs font-semibold text-white">{initials}</span>
                          </div>
                        )}
                        <div className="min-w-0">
                          <h3 className="font-semibold text-foreground text-sm truncate">{review.name}</h3>
                          <p className="text-xs text-muted-foreground truncate">{review.role || review.course}</p>
                        </div>
                      </div>
                      <span className="inline-flex items-center rounded-full bg-secondary/10 text-secondary px-2 py-1 text-[10px] font-medium flex-shrink-0">
                        {categoryLabel}
                      </span>
                    </div>
                  </div>
                </div>
              );})
            )}
          </div>
        </motion.div>

        {showSubmitForm && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm" onClick={() => setShowSubmitForm(false)}>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-card border border-border rounded-2xl shadow-xl max-w-md w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-6 flex items-center justify-between border-b border-border">
                <h3 className="text-lg font-semibold text-foreground">Submit your review</h3>
                <button
                  type="button"
                  onClick={() => setShowSubmitForm(false)}
                  className="rounded-md p-1.5 text-muted-foreground hover:bg-muted hover:text-foreground transition-colors"
                  aria-label="Close"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              <div className="p-6">
                <p className="text-sm text-muted-foreground mb-4">
                  {useSheet
                    ? 'Your review will be sent for approval and appear here once approved. Keep it short (max ' + REVIEW_MAX_WORDS + ' words).'
                    : 'Reviews are not configured. Set VITE_REVIEWS_SCRIPT_URL to enable submissions (see README).'}
                </p>
                <form
                  onSubmit={handleSubmit}
                  action={getReviewsScriptUrl()}
                  method="POST"
                  target="reviewsSubmitFrame"
                  className="space-y-4"
                >
                  <div>
                    <label htmlFor="review-name" className="block text-sm font-medium text-foreground mb-1">Name (required)</label>
                    <input
                      id="review-name"
                      name="name"
                      type="text"
                      required
                      maxLength={200}
                      className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                      placeholder="e.g. Priya S."
                    />
                  </div>
                  <div>
                    <label htmlFor="review-category" className="block text-sm font-medium text-foreground mb-1">What are you reviewing? (required)</label>
                    <select
                      id="review-category"
                      name="category"
                      required
                      className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                    >
                      <option value="">Select...</option>
                      {REVIEW_CATEGORIES.map((opt) => (
                        <option key={opt.value} value={opt.value}>
                          {opt.label}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label htmlFor="review-course" className="block text-sm font-medium text-foreground mb-1">Course or program (required)</label>
                    <input
                      id="review-course"
                      name="course"
                      type="text"
                      required
                      maxLength={200}
                      className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                      placeholder="e.g. Python & MERN Stack, Final Year Project, Internship, Website"
                    />
                  </div>
                  <div>
                    <label htmlFor="review-photo" className="block text-sm font-medium text-foreground mb-1">Photo (optional)</label>
                    <input
                      id="review-photo"
                      name="photo-file"
                      type="file"
                      accept="image/*"
                      className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm file:mr-3 file:py-1.5 file:px-3 file:border-0 file:text-sm file:font-medium file:bg-secondary/10 file:text-secondary hover:file:bg-secondary/20"
                      onChange={handlePhotoChange}
                    />
                    <p className="mt-1 text-xs text-muted-foreground">
                      Upload a clear face photo to show on your review (optional).
                    </p>
                    <input type="hidden" name="image" value={photoDataUrl ?? ''} />
                  </div>
                  <div>
                    <label htmlFor="review-rating" className="block text-sm font-medium text-foreground mb-1">Rating (1–5, required)</label>
                    <select
                      id="review-rating"
                      name="rating"
                      required
                      className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                    >
                      <option value="">Select</option>
                      <option value="5">5 stars</option>
                      <option value="4">4 stars</option>
                      <option value="3">3 stars</option>
                      <option value="2">2 stars</option>
                      <option value="1">1 star</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="review-content" className="block text-sm font-medium text-foreground mb-1">
                      Your review (required, max {REVIEW_MAX_WORDS} words)
                    </label>
                    <textarea
                      id="review-content"
                      name="review"
                      required
                      rows={3}
                      maxLength={REVIEW_MAX_LENGTH}
                      className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm resize-none"
                      placeholder="Share your experience in a few sentences..."
                      onChange={(e) => setReviewWordCount(countWords(e.target.value))}
                    />
                    <p className="mt-1 text-xs text-muted-foreground">
                      {reviewWordCount} / {REVIEW_MAX_WORDS} words
                    </p>
                  </div>
                  <div className="flex gap-3 pt-2">
                    <button
                      type="submit"
                      disabled={submitLoading || !useSheet}
                      className="flex-1 rounded-md bg-secondary px-4 py-2.5 text-sm font-medium text-secondary-foreground hover:bg-secondary/90 transition-colors disabled:opacity-70 flex items-center justify-center gap-2"
                    >
                      {submitLoading ? (
                        <>
                          <Loader2 className="w-4 h-4 animate-spin" />
                          Sending…
                        </>
                      ) : (
                        'Send review'
                      )}
                    </button>
                    <button
                      type="button"
                      onClick={() => setShowSubmitForm(false)}
                      className="rounded-md border border-border px-4 py-2.5 text-sm font-medium text-foreground hover:bg-muted transition-colors"
                    >
                      Cancel
                    </button>
                  </div>
                </form>
              </div>
            </motion.div>
          </div>
        )}
      </div>
      {/* Hidden iframe: form POSTs here to avoid CORS (no fetch). */}
      <iframe name="reviewsSubmitFrame" title="Submit review" className="hidden" />
    </section>
  );
};
