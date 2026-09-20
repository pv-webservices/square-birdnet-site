import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Home, MessageCircle } from "lucide-react";
import { whatsappLink } from "@/data/site";

export default function FinalCta() {
  return (
    <section className="final-cta">
      <div className="final-cta__media">
        <Image
          src="/images/hero/cta-balcony-night.webp"
          alt="Modern balcony with invisible grill overlooking a city skyline at dusk"
          fill
          loading="lazy"
          sizes="100vw"
        />
      </div>
      <div className="container final-cta__content">
        <div>
          <h2>Need a safer, cleaner balcony?</h2>
          <p>Get a free site visit and expert consultation today.</p>
        </div>
        <div className="final-cta__actions">
          <a href={whatsappLink()} target="_blank" rel="noreferrer" className="btn btn--whatsapp btn--large">
            <MessageCircle size={18} /> Chat on WhatsApp
          </a>
          <Link href="/contact" className="btn btn--light btn--large">
            Get Free Site Visit <ArrowUpRight size={17} />
          </Link>
        </div>
      </div>
      <div className="final-cta__stamp" aria-hidden="true">
        <Home size={22} />
        <div>
          <strong>Safe Homes</strong>
          <span>Happier Families</span>
        </div>
      </div>
    </section>
  );
}
