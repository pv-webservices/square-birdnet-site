import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Building2, CirclePlay, ShieldCheck, Wrench } from "lucide-react";

/**
 * The hero is above the fold, so it deliberately does not use <Reveal>: that
 * waits for hydration and an IntersectionObserver, which let the photograph
 * paint well before the copy. Instead every piece runs the same pure-CSS
 * entrance from first paint (see .hero-enter), so copy, buttons and image
 * arrive together, and everything is visible even without JavaScript.
 */
export default function Hero() {
  return (
    <section className="hero">
      <div className="container hero-grid">
        <div className="hero-copy">
          <div className="eyebrow hero-enter">Safe homes. Happier living.</div>
          <h1 className="hero-enter" style={{ "--enter-delay": "50ms" } as React.CSSProperties}>
            Safe balconies.
            <br />
            Clear views.
            <br />
            <span>Zero compromise.</span>
          </h1>
          <p className="hero-enter" style={{ "--enter-delay": "100ms" } as React.CSSProperties}>
            Professional bird net, invisible grill and bird spike installation for safer, cleaner and
            more beautiful homes across Gujarat.
          </p>
          <div className="hero-actions hero-enter" style={{ "--enter-delay": "150ms" } as React.CSSProperties}>
            <Link href="/contact" className="btn btn--primary btn--large">
              Book Free Site Visit <ArrowUpRight size={18} />
            </Link>
            <Link href="/projects" className="btn btn--secondary btn--large">
              <CirclePlay size={18} /> View Our Work
            </Link>
          </div>
          <div className="hero-benefits hero-enter" style={{ "--enter-delay": "200ms" } as React.CSSProperties}>
            <span>
              <Wrench size={18} aria-hidden="true" /> Professional Installation
            </span>
            <span>
              <ShieldCheck size={18} aria-hidden="true" /> Premium &amp; Durable Materials
            </span>
            <span>
              <Building2 size={18} aria-hidden="true" /> Homes, Societies &amp; Factories
            </span>
          </div>
        </div>

        <div className="hero-visual hero-enter hero-enter--fade">
          <Image
            src="/images/hero/hero-balcony.webp"
            alt="Premium high-rise balcony protected by an invisible grill, overlooking a green city skyline"
            fill
            priority
            sizes="(max-width: 1040px) 100vw, 57vw"
          />
          <p className="hero-note">
            Same view.
            <br />
            More peace.
          </p>
          <div className="hero-stamp">
            BEAUTIFUL SPACES
            <br />
            SAFER TOMORROWS
          </div>
        </div>
      </div>
    </section>
  );
}
