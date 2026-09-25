import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, CheckCircle2, MessageCircle } from "lucide-react";
import { recommendations, services } from "@/data/services";
import { materials, whatsappLink } from "@/data/site";
import CtaBand from "@/components/ui/CtaBand";
import Icon from "@/components/ui/Icon";
import PageHero from "@/components/ui/PageHero";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";

export const metadata: Metadata = {
  title: "Our Services — Bird Netting, Invisible Grill, Bird Spikes & Cricket Nets",
  description:
    "Bird netting services, stainless steel invisible grill installation, bird spikes, cricket nets, safety nets and mosquito nets across Gujarat — for homes, societies and factories. Compare the options and book a free site visit.",
  alternates: { canonical: "/services" },
};

export default function Page() {
  return (
    <main>
      <PageHero
        eyebrow="Our services"
        title="Protection solutions made for modern spaces."
        lead="Four core services, one standard. We match the solution to the opening, the risk and the way you actually use the space — then install it cleanly."
        image="/images/hero/towers-skyline.webp"
        imageAlt="Modern residential towers with protected balconies"
        crumbs={[{ label: "Services" }]}
        actions={
          <>
            <Link href="/contact" className="btn btn--primary btn--large">
              Get Free Site Visit <ArrowUpRight size={17} />
            </Link>
            <a href={whatsappLink()} target="_blank" rel="noreferrer" className="btn btn--light btn--large">
              <MessageCircle size={18} /> Chat on WhatsApp
            </a>
          </>
        }
      />

      {/* Detailed service index */}
      <section className="section">
        <div className="container">
          <SectionHeading
            eyebrow="What we install"
            title="Choose the right protection for your space"
            body="Each system solves a different problem. Here is what each one is for, where it fits and what you get."
          />

          <div className="service-rows">
            {services.map((service, i) => (
              <Reveal key={service.slug} delay={i * 60}>
                <article className="service-row">
                  <div className="service-row__media">
                    <Image
                      src={service.image}
                      alt={`${service.name} installed by SQUARE`}
                      fill
                      loading="lazy"
                      sizes="(max-width: 1040px) 100vw, 40vw"
                    />
                  </div>
                  <div className="service-row__body">
                    <div className="eyebrow">{service.navLabel}</div>
                    <h3>{service.heroTitle}</h3>
                    <p>{service.heroLead}</p>

                    <div className="service-row__tags">
                      {service.applications.slice(0, 5).map((application) => (
                        <span key={application}>{application}</span>
                      ))}
                    </div>

                    <div style={{ display: "grid", gap: 10, marginBottom: 24 }}>
                      {service.benefits.slice(0, 3).map((benefit) => (
                        <span
                          key={benefit.title}
                          style={{ display: "flex", alignItems: "center", gap: 9, fontSize: 13, fontWeight: 700, color: "#4e687d" }}
                        >
                          <CheckCircle2 size={16} style={{ color: "var(--blue-600)", flex: "0 0 auto" }} aria-hidden="true" />
                          {benefit.title}
                        </span>
                      ))}
                    </div>

                    <div className="service-row__actions">
                      <Link href={`/services/${service.slug}`} className="btn btn--primary btn--compact">
                        Learn More <ArrowUpRight size={15} />
                      </Link>
                      <a
                        href={whatsappLink(service.name)}
                        target="_blank"
                        rel="noreferrer"
                        className="btn btn--ghost btn--compact"
                      >
                        <MessageCircle size={15} /> Ask a Question
                      </a>
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Recommendation matrix */}
      <section className="section section--soft">
        <div className="container">
          <SectionHeading
            eyebrow="Not sure what you need?"
            title="Start from the problem, not the product"
            body="Tell us what is happening at your place and we will point you at the right system."
            align="center"
          />
          <div className="reco-grid">
            {recommendations.map((item, i) => (
              <Reveal key={item.need} delay={(i % 3) * 80}>
                <Link href={item.href} className="reco-card">
                  <span className="reco-card__icon" aria-hidden="true">
                    <Icon name={item.icon} size={21} />
                  </span>
                  <span className="reco-card__text">
                    <span>{item.need}</span>
                    <strong>
                      {item.answer} <ArrowUpRight size={15} />
                    </strong>
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Materials & quality */}
      <section className="section" id="materials">
        <div className="container">
          <SectionHeading
            eyebrow="Materials & quality"
            title="What goes into every installation"
            body="The visible part is the net or the cable. The part that decides how long it lasts is the hardware behind it."
          />
          <div className="feature-grid feature-grid--4">
            {materials.map((item, i) => (
              <Reveal key={item.title} delay={i * 70}>
                <article className="material-card hover-card">
                  <div className="hover-media" style={{ aspectRatio: "1.2" }}>
                    <Image
                      src={item.image}
                      alt={`${item.title} — ${item.meta}`}
                      fill
                      loading="lazy"
                      sizes="(max-width: 760px) 90vw, 22vw"
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

      <section className="section section--tight">
        <div className="container">
          <CtaBand
            title="Still weighing up the options?"
            body="A free site visit usually settles it in ten minutes — we measure, show you the materials and quote."
          />
        </div>
      </section>
    </main>
  );
}
