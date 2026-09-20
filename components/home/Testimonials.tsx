import { Star } from "lucide-react";
import { reviewSummary, testimonials } from "@/data/site";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";

/** Derives the circular initials avatar shown beside each review. */
function initials(name: string) {
  return name
    .split(" ")
    .slice(0, 2)
    .map((part) => part[0])
    .join("")
    .toUpperCase();
}

export default function Testimonials() {
  return (
    <section className="section" id="reviews">
      <div className="container">
        <SectionHeading
          eyebrow="What our customers say"
          title="Homes that feel safer, happier"
          body="Feedback from families and property managers we have worked with across the region."
        />

        <div className="reviews-grid">
          <Reveal>
            <div className="review-summary">
              <span className="review-summary__badge" aria-hidden="true">
                <Star size={22} fill="currentColor" />
              </span>
              <strong>
                {reviewSummary.rating} / {reviewSummary.outOf}
              </strong>
              <div className="stars" aria-label={`${reviewSummary.rating} out of ${reviewSummary.outOf} stars`}>
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={15} fill="currentColor" aria-hidden="true" />
                ))}
              </div>
              <span className="review-summary__count">{reviewSummary.countLabel}</span>
            </div>
          </Reveal>

          {testimonials.slice(0, 3).map((review, i) => (
            <Reveal key={review.name} delay={(i + 1) * 80}>
              <article className="review-card">
                <div className="stars" aria-label={`${review.rating} out of 5 stars`}>
                  {Array.from({ length: review.rating }).map((_, s) => (
                    <Star key={s} size={15} fill="currentColor" aria-hidden="true" />
                  ))}
                </div>
                <p>&ldquo;{review.copy}&rdquo;</p>
                <div className="review-card__person">
                  <span className="avatar" aria-hidden="true">
                    {initials(review.name)}
                  </span>
                  <div>
                    <strong>{review.name}</strong>
                    <span>{review.location}</span>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
