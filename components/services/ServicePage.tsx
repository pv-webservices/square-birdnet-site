import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpRight,
  CheckCircle2,
  CircleAlert,
  Layers3,
  MapPin,
  MessageCircle,
  Ruler,
  ShieldCheck,
  Wrench,
} from "lucide-react";
import type { Service } from "@/data/services";
import { videoBySlug } from "@/data/videos";
import { processSteps, serviceAreas, whatsappLink, whyChoose } from "@/data/site";
import { projects, type ProjectCategory } from "@/data/projects";
import Accordion from "@/components/ui/Accordion";
import BeforeAfter from "@/components/ui/BeforeAfter";
import CtaBand from "@/components/ui/CtaBand";
import Icon from "@/components/ui/Icon";
import PageHero from "@/components/ui/PageHero";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import ServiceSpotlights from "@/components/services/ServiceSpotlights";
import ServiceVideo from "@/components/services/ServiceVideo";

const HOW_ICONS = [Ruler, Layers3, Wrench, CheckCircle2];

/** Which project-gallery categories count as real work for each service. */
const PROJECT_CATEGORIES: Record<string, ProjectCategory[]> = {
  "bird-netting": ["Bird Net", "Industrial"],
  "invisible-grill": ["Invisible Grill"],
};

/**
 * One template renders every /services/<slug> page from the service data,
 * so the pages stay structurally consistent while the content stays unique.
 */
export default function ServicePage({ service }: { service: Service }) {
  const video = service.videoSlug ? videoBySlug(service.videoSlug) : undefined;
  const related = projects.filter((p) => PROJECT_CATEGORIES[service.slug]?.includes(p.category));
  const galleryClass = service.galleryImages.length === 4 ? "gallery-grid gallery-grid--4" : "gallery-grid";

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: service.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: { "@type": "Answer", text: faq.a },
    })),
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: service.name,
    provider: { "@type": "LocalBusiness", name: "SQUARE — Bird Net & Invisible Grill" },
    areaServed: serviceAreas.map((area) => ({ "@type": "City", name: area })),
    description: service.metaDescription,
  };

  return (
    <main>
      <PageHero
        eyebrow={service.eyebrow}
        title={service.heroTitle}
        lead={service.heroLead}
        image={service.heroImage}
        imageAlt={`${service.name} installation by SQUARE`}
        crumbs={[{ label: "Services", href: "/services" }, { label: service.name }]}
        actions={
          <>
            <Link href="/contact" className="btn btn--primary btn--large">
              Get Free Site Visit <ArrowUpRight size={17} />
            </Link>
            <a href={whatsappLink(service.name)} target="_blank" rel="noreferrer" className="btn btn--light btn--large">
              <MessageCircle size={18} /> Chat on WhatsApp
            </a>
          </>
        }
      />

      {/* Overview + problem */}
      <section className="section">
        <div className="container split-grid split-grid--wide-left">
          <Reveal variant="left">
            <div className="eyebrow">Overview</div>
            <h2>What {service.name.toLowerCase()} actually does</h2>
            {service.overview.map((paragraph) => (
              <p key={paragraph.slice(0, 40)} className="lead">
                {paragraph}
              </p>
            ))}
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginTop: 22 }}>
              <ShieldCheck size={20} style={{ color: "var(--blue-600)", flex: "0 0 auto" }} aria-hidden="true" />
              <p style={{ margin: 0, fontWeight: 800, color: "var(--navy-900)", fontSize: 14 }}>
                Best for: {service.bestFor}
              </p>
            </div>
          </Reveal>

          <Reveal variant="right" delay={120}>
            <div className="split-media">
              <Image
                src={service.image}
                alt={`${service.name} installed by SQUARE`}
                fill
                loading="lazy"
                sizes="(max-width: 1040px) 100vw, 45vw"
              />
            </div>
          </Reveal>
        </div>

        <div className="container" style={{ marginTop: 56 }}>
          <Reveal className="problem-panel">
            <span className="problem-panel__icon" aria-hidden="true">
              <CircleAlert size={26} />
            </span>
            <div>
              <h3>{service.problem.title}</h3>
              <p>{service.problem.text}</p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* How it works */}
      <section className="section section--soft">
        <div className="container">
          <SectionHeading
            eyebrow="How it works"
            title="Our installation approach"
            body="The detail that decides whether an installation lasts five years or five months."
          />
          <div className="feature-grid feature-grid--4">
            {service.how.map((step, i) => {
              const StepIcon = HOW_ICONS[i] ?? CheckCircle2;
              return (
                <Reveal key={step.title} delay={i * 80}>
                  <article className="feature-card">
                    <span className="feature-card__icon" aria-hidden="true">
                      <StepIcon size={21} />
                    </span>
                    <span className="feature-card__n">STEP {String(i + 1).padStart(2, "0")}</span>
                    <h3>{step.title}</h3>
                    <p>{step.text}</p>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="section">
        <div className="container">
          <SectionHeading eyebrow="Key benefits" title={`Why customers choose ${service.name.toLowerCase()}`} />
          <div className="feature-grid">
            {service.benefits.map((benefit, i) => (
              <Reveal key={benefit.title} delay={(i % 3) * 80}>
                <article className="feature-card">
                  <span className="feature-card__icon" aria-hidden="true">
                    <CheckCircle2 size={21} />
                  </span>
                  <h3>{benefit.title}</h3>
                  <p>{benefit.text}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Focused sections (society, industrial, full facade) with site videos */}
      {service.spotlights?.length ? (
        <section className="section section--soft" id="work">
          <div className="container">
            <SectionHeading
              eyebrow="On site"
              title="Homes, societies and factories"
              body="The same careful netting, scaled to the job. Press play to watch each installation."
            />
            <ServiceSpotlights spotlights={service.spotlights} />
          </div>
        </section>
      ) : null}

      {/* Related nets the same team installs (anchor targets for other pages) */}
      {service.extras?.length ? (
        <section className="section" id="other-nets">
          <div className="container">
            <SectionHeading
              eyebrow="Also installed by our netting team"
              title="Anti bird net, safety nets and mosquito nets"
              body="Often fitted on the same visit as a bird net — ask for them together and we quote them together."
            />
            <div className="feature-grid">
              {service.extras.map((extra, i) => (
                <Reveal key={extra.id} delay={(i % 3) * 80}>
                  <article className="feature-card extra-card" id={extra.id}>
                    <span className="feature-card__icon" aria-hidden="true">
                      <ShieldCheck size={21} />
                    </span>
                    <h3>{extra.title}</h3>
                    <p>{extra.text}</p>
                    <ul className="spotlight__points">
                      {extra.points.map((point) => (
                        <li key={point}>
                          <CheckCircle2 size={16} aria-hidden="true" />
                          {point}
                        </li>
                      ))}
                    </ul>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      {/* Applications + materials */}
      <section className="section section--icy">
        <div className="container split-grid">
          <Reveal variant="left">
            <div className="eyebrow">Applications</div>
            <h2>Where we install it</h2>
            <p>Every site is measured first — these are the spaces this system suits best.</p>
            <div className="pill-list" style={{ marginTop: 24 }}>
              {service.applications.map((item) => (
                <span key={item}>
                  <MapPin size={14} aria-hidden="true" />
                  {item}
                </span>
              ))}
            </div>
          </Reveal>

          <Reveal variant="right" delay={120}>
            <div className="eyebrow">Materials</div>
            <h2>What we use</h2>
            <p>Specifications are confirmed on your quotation before any work starts.</p>
            <ul className="prose" style={{ marginTop: 24 }}>
              {service.materials.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      {/* Installation process */}
      <section className="section">
        <div className="container">
          <SectionHeading eyebrow="From enquiry to handover" title="A simple process for a safer tomorrow" />
          <Reveal className="process-grid">
            {processSteps.map((step, i) => {
              const StepIcon = HOW_ICONS[i] ?? CheckCircle2;
              return (
                <div className="process-step" key={step.n}>
                  <div className="process-step__icon" aria-hidden="true">
                    <StepIcon size={22} />
                  </div>
                  <span className="process-step__n">{step.n}</span>
                  <h3>{step.title}</h3>
                  <p>{step.text}</p>
                </div>
              );
            })}
          </Reveal>
        </div>
      </section>

      {/* Before / after */}
      <section className="section section--soft">
        <div className="container split-grid">
          <Reveal variant="left">
            <div className="eyebrow">Before &amp; after</div>
            <h2>The difference it makes</h2>
            <p className="lead">
              A protected opening is not just cleaner — it gives you back a part of the home you had
              stopped using. Drag the slider to compare.
            </p>
            <div style={{ marginTop: 26 }}>
              <Link href="/projects" className="btn btn--ghost">
                See More Projects <ArrowUpRight size={16} />
              </Link>
            </div>
          </Reveal>
          <Reveal variant="right" delay={120}>
            <BeforeAfter
              before="/images/compare/before-birds.webp"
              after="/images/compare/after-clean.webp"
              beforeAlt="Balcony before treatment, with pigeons on the railing and debris on the floor"
              afterAlt="The same style of balcony after installation — clean, planted and usable"
            />
          </Reveal>
        </div>
      </section>

      {/* Gallery */}
      {service.galleryImages.length ? (
        <section className="section">
          <div className="container">
            <SectionHeading
              eyebrow="Project gallery"
              title={`${service.name} in real spaces`}
              body={
                related.length
                  ? "Recent installations from our own sites."
                  : "A closer look at the finish, the materials and the detail."
              }
              action={
                <Link href="/projects" className="text-link">
                  View All Projects <ArrowUpRight size={15} />
                </Link>
              }
            />
            <div className={galleryClass}>
              {service.galleryImages.map((src, i) => (
                <Reveal key={src} delay={(i % 3) * 80}>
                  <div className="gallery-tile">
                    <Image
                      src={src}
                      alt={`${service.name} installation detail ${i + 1}`}
                      fill
                      loading="lazy"
                      sizes="(max-width: 760px) 50vw, 30vw"
                    />
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      {/* Video */}
      {video ? (
        <section className="section section--navy">
          <div className="container split-grid">
            <Reveal variant="left">
              <div className="eyebrow eyebrow--light">On site</div>
              <h2>{video.title}</h2>
              <p>{video.description}</p>
              <div style={{ marginTop: 26 }}>
                <Link href="/videos" className="btn btn--light">
                  Watch More Videos <ArrowUpRight size={17} />
                </Link>
              </div>
            </Reveal>
            <Reveal variant="right" delay={120}>
              <ServiceVideo video={video} />
            </Reveal>
          </div>
        </section>
      ) : null}

      {/* Why SQUARE */}
      <section className="section">
        <div className="container">
          <SectionHeading
            eyebrow="Why SQUARE"
            title="Safe. Clean. Beautiful."
            body="The same standard applies whether it is one balcony or an entire building."
          />
          <div className="feature-grid">
            {whyChoose.map((item, i) => (
              <Reveal key={item.title} delay={(i % 3) * 80}>
                <article className="feature-card">
                  <span className="feature-card__icon" aria-hidden="true">
                    <Icon name={item.icon} size={21} />
                  </span>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section section--soft">
        <div className="container container--narrow">
          <SectionHeading
            eyebrow="Questions"
            title={`${service.name} — frequently asked`}
            align="center"
          />
          <Reveal className="faq-group">
            <Accordion items={service.faqs} openFirst />
          </Reveal>
        </div>
      </section>

      <section className="section section--tight">
        <div className="container">
          <CtaBand
            title={`Book a free ${service.name.toLowerCase()} site visit`}
            body="We measure, advise and give you a clear written quotation — with no obligation."
            subject={service.name}
          />
        </div>
      </section>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
    </main>
  );
}
