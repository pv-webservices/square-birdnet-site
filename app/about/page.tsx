import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Check, MapPin, Star } from "lucide-react";
import { brand, materials, metrics, serviceAreas, testimonials, whyChoose } from "@/data/site";
import { projects } from "@/data/projects";
import CountUp from "@/components/ui/CountUp";
import CtaBand from "@/components/ui/CtaBand";
import Icon from "@/components/ui/Icon";
import PageHero from "@/components/ui/PageHero";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";

export const metadata: Metadata = {
  title: "About SQUARE — Bird Net & Invisible Grill Specialists",
  description:
    "Who we are, how we work and what we stand for. Bird netting services, invisible grill contractors, bird spike and cricket net installation across Gujarat.",
  alternates: { canonical: "/about" },
};

const STORY = [
  {
    year: "The beginning",
    title: "A problem nobody was solving properly",
    text: "We started because too many homes were getting the same treatment — a net thrown up, a few nails, and a call-back six months later. We thought the job deserved measuring, planning and finishing properly.",
  },
  {
    year: "Growing up",
    title: "From single balconies to full buildings",
    text: "Word travelled through societies. One balcony became a floor, a floor became a tower, and then facility managers started calling about warehouses and factory sheds.",
  },
  {
    year: "Today",
    title: "Residential and commercial, same standard",
    text: "Whether it is a two-metre balcony or a full industrial span, the sequence is identical: survey, specify, install, inspect, hand over clean.",
  },
];

const PHILOSOPHY = [
  {
    title: "Measure before you promise",
    text: "No quotation goes out before someone has actually stood in the space. It is the only way to price honestly.",
  },
  {
    title: "Specify for the weather, not the invoice",
    text: "Stainless where stainless matters, UV-stabilised cord where the sun hits. Cheap hardware is the most expensive decision on a job.",
  },
  {
    title: "Say what a system cannot do",
    text: "A net is not a substitute for supervision. An invisible grill is not literally invisible. Customers deserve the real answer.",
  },
  {
    title: "Leave it cleaner than we found it",
    text: "Dust removed, offcuts taken away, fixings tidy. A clean handover is part of the work, not a favour.",
  },
];

export default function Page() {
  return (
    <main>
      <PageHero
        eyebrow="About SQUARE"
        title="Safety that blends into your home."
        lead="We install bird netting, invisible grills, bird spikes and cricket nets across Gujarat — carefully specified, cleanly fitted and built to keep working."
        image="/images/hero/towers-skyline.webp"
        imageAlt="Residential towers across Gujarat"
        crumbs={[{ label: "About" }]}
        actions={
          <Link href="/contact" className="btn btn--primary btn--large">
            Get Free Site Visit <ArrowUpRight size={17} />
          </Link>
        }
      />

      {/* Introduction */}
      <section className="section">
        <div className="container story-grid">
          <Reveal variant="left">
            <div className="eyebrow">Who we are</div>
            <h2>A specialist, not a general contractor</h2>
            <p className="lead">
              {brand.name} does one category of work and does it properly: physical protection for open
              spaces. Bird exclusion, balcony safety and the hardware that holds both in place.
            </p>
            <p>
              That focus is the point. A team that installs nets and cables every day knows which fixing
              holds in a hollow block wall, where birds will find the gap you left, and how tight a cable
              has to be before it stops humming in the wind.
            </p>
            <div className="value-list">
              {PHILOSOPHY.slice(0, 2).map((item) => (
                <div className="value-item" key={item.title}>
                  <span className="value-item__mark" aria-hidden="true">
                    <Check size={20} />
                  </span>
                  <div>
                    <h4>{item.title}</h4>
                    <p>{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal className="story-media" variant="right" delay={120}>
            <div>
              <Image
                src="/images/team/installation-01.webp"
                alt="A SQUARE installer fitting netting along a balcony railing"
                fill
                loading="lazy"
                sizes="(max-width: 1040px) 50vw, 25vw"
              />
            </div>
            <div>
              <Image
                src="/images/team/installation-02.webp"
                alt="An installer tensioning bird netting across a building opening"
                fill
                loading="lazy"
                sizes="(max-width: 1040px) 50vw, 25vw"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* Metrics */}
      <section className="section section--soft section--tight">
        <div className="container">
          <div className="metrics-grid" style={{ transform: "none", boxShadow: "none" }}>
            {metrics.map((metric) => (
              <div className="metric" key={metric.label}>
                <div>
                  <strong>
                    {metric.value === null ? metric.display : <CountUp to={metric.value} suffix={metric.suffix} />}
                  </strong>
                  <span>{metric.label}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story timeline */}
      <section className="section">
        <div className="container split-grid">
          <Reveal variant="left">
            <div className="eyebrow">Our story</div>
            <h2>How we got here</h2>
            <p className="lead">
              No dramatic origin story — just a steady build from one balcony at a time to societies,
              warehouses and institutional sites across the region.
            </p>
            <div style={{ marginTop: 26 }}>
              <Link href="/projects" className="btn btn--ghost">
                See Our Work <ArrowUpRight size={16} />
              </Link>
            </div>
          </Reveal>

          <Reveal className="timeline" variant="right" delay={120}>
            {STORY.map((item) => (
              <div className="timeline-item" key={item.year}>
                <span>{item.year.toUpperCase()}</span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      {/* Philosophy */}
      <section className="section section--icy">
        <div className="container">
          <SectionHeading
            eyebrow="How we work"
            title="Four rules we do not bend"
            body="They sound obvious. They are also the four things customers tell us went wrong last time."
            align="center"
          />
          <div className="feature-grid feature-grid--4">
            {PHILOSOPHY.map((item, i) => (
              <Reveal key={item.title} delay={i * 70}>
                <article className="feature-card">
                  <span className="feature-card__n">0{i + 1}</span>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Expertise */}
      <section className="section">
        <div className="container">
          <SectionHeading
            eyebrow="Why customers choose us"
            title="Residential and commercial expertise"
            body="The same crew that fits a bedroom window net also works at height on a factory span — with the method adjusted, not the standard."
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

      {/* Materials */}
      <section className="section section--soft">
        <div className="container">
          <SectionHeading
            eyebrow="Materials & safety standards"
            title="What we put on your building"
            body="Every material is chosen for outdoor life in Indian conditions — sun, monsoon, dust and wind."
            action={
              <Link href="/services#materials" className="text-link">
                Materials &amp; Quality <ArrowUpRight size={15} />
              </Link>
            }
          />
          <div className="feature-grid feature-grid--4">
            {materials.map((item, i) => (
              <Reveal key={item.title} delay={i * 70}>
                <article className="material-card hover-card">
                  <div className="hover-media" style={{ aspectRatio: "1.2" }}>
                    <Image src={item.image} alt={`${item.title} — ${item.meta}`} fill loading="lazy" sizes="22vw" />
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

      {/* Project proof */}
      <section className="section">
        <div className="container">
          <SectionHeading
            eyebrow="Project imagery"
            title="Work we have signed off"
            action={
              <Link href="/projects" className="text-link">
                View All Projects <ArrowUpRight size={15} />
              </Link>
            }
          />
          <div className="gallery-grid">
            {projects.slice(0, 6).map((project, i) => (
              <Reveal key={project.id} delay={(i % 3) * 80}>
                <div className="gallery-tile">
                  <Image src={project.image} alt={project.alt} fill loading="lazy" sizes="(max-width: 760px) 50vw, 30vw" />
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Service areas */}
      <section className="section section--soft">
        <div className="container container--narrow" style={{ textAlign: "center" }}>
          <SectionHeading
            eyebrow="Service areas"
            title="Where we work"
            body="Coverage across Gujarat. If you are just outside the list, call us — we will tell you honestly."
            align="center"
          />
          <Reveal className="pill-list" style={{ justifyContent: "center" }}>
            {serviceAreas.map((area) => (
              <span key={area}>
                <MapPin size={14} aria-hidden="true" />
                {area}
              </span>
            ))}
          </Reveal>
        </div>
      </section>

      {/* Reviews */}
      <section className="section">
        <div className="container">
          <SectionHeading eyebrow="Customer feedback" title="What people say afterwards" align="center" />
          <div className="feature-grid">
            {testimonials.slice(0, 3).map((review, i) => (
              <Reveal key={review.name} delay={i * 80}>
                <article className="feature-card">
                  <div className="stars" aria-label={`${review.rating} out of 5 stars`}>
                    {Array.from({ length: review.rating }).map((_, s) => (
                      <Star key={s} size={15} fill="currentColor" aria-hidden="true" />
                    ))}
                  </div>
                  <p style={{ marginBottom: 18 }}>&ldquo;{review.copy}&rdquo;</p>
                  <h3 style={{ fontSize: 14, marginBottom: 2 }}>{review.name}</h3>
                  <p style={{ fontSize: 12, margin: 0 }}>{review.location}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--tight">
        <div className="container">
          <CtaBand
            title="Let us take a look at your space"
            body="A free site visit, an honest recommendation and a written quotation. That is the whole offer."
          />
        </div>
      </section>
    </main>
  );
}
