import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Eye, PawPrint, ShieldCheck, Wind } from "lucide-react";
import Reveal from "@/components/ui/Reveal";

export default function InvisibleGrillFeature() {
  return (
    <section className="section section--flush" aria-labelledby="invisible-grill-heading">
      <div className="feature-split">
        <div className="feature-media">
          <Image
            src="/images/services/invisible-grill-wide.webp"
            alt="Invisible grill cables tensioned across a wide apartment balcony with a panoramic city view"
            fill
            loading="lazy"
            sizes="(max-width: 1040px) 100vw, 54vw"
          />
          <div className="feature-media__caption">
            <span>INVISIBLE GRILL</span>
            <strong>
              Maximum safety.
              <br />
              Minimum visibility.
            </strong>
          </div>
        </div>

        <div className="feature-copy-wrap">
          <div className="feature-copy">
            <Reveal>
              <div className="eyebrow">Premium &amp; modern</div>
              <h2 id="invisible-grill-heading">
                Invisible Grill
                <span>Safety without blocking your beautiful view.</span>
              </h2>
              <p>
                High-tensile stainless steel cables keep your family safe while maintaining the open,
                elegant look of your balcony.
              </p>
            </Reveal>

            <Reveal delay={120} className="icon-list-grid">
              <span>
                <Eye size={19} aria-hidden="true" /> Unobstructed View
              </span>
              <span>
                <ShieldCheck size={19} aria-hidden="true" /> High Tensile Strength
              </span>
              <span>
                <Wind size={19} aria-hidden="true" /> Rust &amp; Weather Resistant
              </span>
              <span>
                <PawPrint size={19} aria-hidden="true" /> Ideal for Homes with Kids &amp; Pets
              </span>
            </Reveal>

            <Reveal delay={200}>
              <Link href="/services/invisible-grill" className="btn btn--primary">
                Know More About Invisible Grill <ArrowUpRight size={17} />
              </Link>
            </Reveal>
          </div>

          <div className="feature-closeup">
            <Image
              src="/images/services/invisible-grill-closeup.webp"
              alt="Close-up of a polished stainless steel invisible grill wall fitting and cable"
              fill
              loading="lazy"
              sizes="180px"
            />
            <p className="feature-closeup__note">
              Strong.
              <br />
              Sleek.
              <br />
              Invisible.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
