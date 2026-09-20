import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { materials } from "@/data/site";
import Reveal from "@/components/ui/Reveal";

export default function Materials() {
  return (
    <section className="section section--soft">
      <div className="container materials-grid">
        <Reveal className="materials-copy" variant="left">
          <div className="eyebrow">Quality you can trust</div>
          <h2>
            Premium materials.
            <br />
            Long-lasting protection.
          </h2>
          <p>
            We use high-grade, UV-resistant nets, stainless steel cable and durable fittings so an
            installation keeps performing year after year, even in harsh weather.
          </p>
          <Link href="/services" className="btn btn--primary">
            Our Materials &amp; Quality <ArrowRight size={17} />
          </Link>
          <p className="materials-script">
            Engineered
            <br />
            for a safer,
            <br />
            cleaner future.
          </p>
        </Reveal>

        <div className="material-cards">
          {materials.map((item, i) => (
            <Reveal key={item.title} delay={i * 80}>
              <article className="material-card hover-card">
                <div className="hover-media" style={{ aspectRatio: "1.2" }}>
                  <Image
                    src={item.image}
                    alt={`${item.title} — ${item.meta}`}
                    fill
                    loading="lazy"
                    sizes="(max-width: 760px) 74vw, 22vw"
                  />
                </div>
                <div className="material-card__body">
                  <h3>{item.title}</h3>
                  <span className="material-card__meta">{item.meta}</span>
                  <p>{item.body}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
