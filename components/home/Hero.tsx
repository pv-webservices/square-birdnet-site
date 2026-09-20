import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Building2, CirclePlay, ShieldCheck, Wrench } from "lucide-react";
import Reveal from "@/components/ui/Reveal";

export default function Hero() {
  return (
    <section className="hero">
      <div className="container hero-grid">
        <div className="hero-copy">
          <Reveal>
            <div className="eyebrow">Safe homes. Happier living.</div>
          </Reveal>
          <Reveal delay={90}>
            <h1>
              Safe balconies.
              <br />
              Clear views.
              <br />
              <span>Zero compromise.</span>
            </h1>
          </Reveal>
          <Reveal delay={180}>
            <p>
              Professional bird net, invisible grill and bird spike installation for safer, cleaner and
              more beautiful homes across Delhi NCR.
            </p>
          </Reveal>
          <Reveal delay={260}>
            <div className="hero-actions">
              <Link href="/contact" className="btn btn--primary btn--large">
                Book Free Site Visit <ArrowUpRight size={18} />
              </Link>
              <Link href="/projects" className="btn btn--secondary btn--large">
                <CirclePlay size={18} /> View Our Work
              </Link>
            </div>
          </Reveal>
          <Reveal delay={340}>
            <div className="hero-benefits">
              <span>
                <Wrench size={18} aria-hidden="true" /> Professional Installation
              </span>
              <span>
                <ShieldCheck size={18} aria-hidden="true" /> Premium &amp; Durable Materials
              </span>
              <span>
                <Building2 size={18} aria-hidden="true" /> Residential &amp; Commercial
              </span>
            </div>
          </Reveal>
        </div>

        <div className="hero-visual">
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
