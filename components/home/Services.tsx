import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { homeServiceCards } from "@/data/services";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";

export default function Services() {
  return (
    <section className="section section--tight-top" id="services">
      <div className="container">
        <SectionHeading
          eyebrow="Our services"
          title="Solutions for every space"
          body="Bird netting, invisible grills, bird spikes and cricket nets — from a single balcony to a full building, a factory shed or a practice ground."
          action={
            <Link className="text-link" href="/services">
              Explore All Services <ArrowRight size={16} />
            </Link>
          }
        />

        <div className="services-grid">
          {homeServiceCards.map((card, i) => (
            <Reveal key={`${card.title}-${card.titleBold}`} delay={i * 70}>
              <Link href={card.href} className="service-card hover-card">
                <div className="hover-media" style={{ aspectRatio: "1.1" }}>
                  <Image
                    src={card.image}
                    alt={card.alt}
                    fill
                    loading="lazy"
                    sizes="(max-width: 760px) 74vw, (max-width: 1240px) 32vw, 16vw"
                  />
                </div>
                <div className="service-card__body">
                  <h3>
                    {card.title}
                    <strong>{card.titleBold}</strong>
                  </h3>
                  <span className="service-card__arrow" aria-hidden="true">
                    <ArrowUpRight size={15} />
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
