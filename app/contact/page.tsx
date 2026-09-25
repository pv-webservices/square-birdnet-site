import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, Clock3, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { contact, phones, serviceAreas, whatsappLink } from "@/data/site";
import { homeFaqs } from "@/data/faqs";
import Accordion from "@/components/ui/Accordion";
import CtaBand from "@/components/ui/CtaBand";
import LeadForm from "@/components/contact/LeadForm";
import PageHero from "@/components/ui/PageHero";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";

export const metadata: Metadata = {
  title: "Contact — Book a Free Site Visit",
  description:
    "Call +91 91044 16804 or +91 62076 09077, WhatsApp or send an enquiry to book a free site visit for bird netting, invisible grill, bird spikes or cricket nets across Gujarat.",
  alternates: { canonical: "/contact" },
};

export default function Page() {
  return (
    <main>
      <PageHero
        eyebrow="Contact SQUARE"
        title="Let's make your space safer."
        lead="Call us, message us on WhatsApp or fill in the form. We will arrange a free site visit at a time that suits you."
        image="/images/hero/hero-balcony.webp"
        imageAlt="Balcony with an invisible grill overlooking a city skyline"
        crumbs={[{ label: "Contact" }]}
        actions={
          <>
            <a href={contact.phoneHref} className="btn btn--primary btn--large">
              <Phone size={17} /> {contact.phoneDisplay}
            </a>
            <a href={whatsappLink()} target="_blank" rel="noreferrer" className="btn btn--whatsapp btn--large">
              <MessageCircle size={18} /> Chat on WhatsApp
            </a>
          </>
        }
      />

      <section className="section">
        <div className="container contact-grid">
          <Reveal variant="left">
            <div className="contact-panel">
              <div className="eyebrow">Get in touch</div>
              <h2 style={{ fontSize: 26 }}>Talk to us directly</h2>
              <p style={{ fontSize: 14 }}>
                The fastest route is a phone call or a WhatsApp photo of the space you want protected.
              </p>

              <div className="contact-list">
                {phones.map((phone, i) => (
                  <a href={phone.href} key={phone.href}>
                    <span className="contact-list__icon" aria-hidden="true">
                      <Phone size={19} />
                    </span>
                    <span className="contact-list__text">
                      <span>{i === 0 ? "Phone" : "Alternate phone"}</span>
                      <strong>{phone.display}</strong>
                    </span>
                  </a>
                ))}
                <a href={whatsappLink()} target="_blank" rel="noreferrer">
                  <span className="contact-list__icon" aria-hidden="true">
                    <MessageCircle size={19} />
                  </span>
                  <span className="contact-list__text">
                    <span>WhatsApp</span>
                    <strong>{contact.whatsappDisplay}</strong>
                  </span>
                </a>
                <a href={`mailto:${contact.email}`}>
                  <span className="contact-list__icon" aria-hidden="true">
                    <Mail size={19} />
                  </span>
                  <span className="contact-list__text">
                    <span>Email</span>
                    <strong>{contact.email}</strong>
                  </span>
                </a>
                <div>
                  <span className="contact-list__icon" aria-hidden="true">
                    <MapPin size={19} />
                  </span>
                  <span className="contact-list__text">
                    <span>Service area</span>
                    <strong>{contact.addressLine}</strong>
                  </span>
                </div>
                <div>
                  <span className="contact-list__icon" aria-hidden="true">
                    <Clock3 size={19} />
                  </span>
                  <span className="contact-list__text">
                    <span>Business hours</span>
                    <strong>{contact.hours}</strong>
                  </span>
                </div>
              </div>

              <div className="eyebrow" style={{ marginTop: 8 }}>
                Areas we cover
              </div>
              <div className="pill-list">
                {serviceAreas.map((area) => (
                  <span key={area}>
                    <MapPin size={13} aria-hidden="true" />
                    {area}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal variant="right" delay={120}>
            <LeadForm />
          </Reveal>
        </div>
      </section>

      {/* Mini FAQ */}
      <section className="section section--soft">
        <div className="container container--narrow">
          <SectionHeading
            eyebrow="Before you call"
            title="Quick answers"
            body="The questions we are asked most often on the first call."
            align="center"
          />
          <Reveal className="faq-group">
            <Accordion items={[...homeFaqs].slice(0, 4)} />
          </Reveal>
          <div style={{ textAlign: "center", marginTop: 26 }}>
            <Link href="/faq" className="text-link" style={{ margin: "0 auto" }}>
              Read all FAQs <ArrowUpRight size={15} />
            </Link>
          </div>
        </div>
      </section>

      <section className="section section--tight">
        <div className="container">
          <CtaBand
            title="Prefer to just show us a photo?"
            body="Send a picture of the balcony, window or shed on WhatsApp and we will tell you what it needs."
            primaryLabel="Browse Services"
            primaryHref="/services"
          />
        </div>
      </section>
    </main>
  );
}
