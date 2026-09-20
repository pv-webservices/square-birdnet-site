import Link from "next/link";
import { ArrowRight, MapPin } from "lucide-react";
import { serviceAreas } from "@/data/site";
import { homeFaqs } from "@/data/faqs";
import Accordion from "@/components/ui/Accordion";
import ServiceAreaMap from "@/components/ui/ServiceAreaMap";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";

export default function ServiceAreasFaq() {
  return (
    <section className="section section--soft" id="service-areas">
      <div className="container service-area-grid">
        <Reveal variant="left">
          <div className="eyebrow">Our service areas</div>
          <h2>We are here for a safer community</h2>
          <p>Get in touch to check if we serve your area — coverage extends across Delhi NCR.</p>
          <div className="area-pills">
            {serviceAreas.map((area) => (
              <span key={area}>
                <MapPin size={14} aria-hidden="true" />
                {area}
              </span>
            ))}
          </div>
          <Link href="/contact" className="btn btn--primary">
            Check Your Area <ArrowRight size={17} />
          </Link>
        </Reveal>

        <Reveal variant="right" delay={120}>
          <ServiceAreaMap />
        </Reveal>
      </div>

      <div className="container faq-preview">
        <SectionHeading
          eyebrow="Frequently asked questions"
          title="Everything you need to know"
          action={
            <Link className="text-link" href="/faq">
              View All FAQs <ArrowRight size={16} />
            </Link>
          }
        />
        <Reveal>
          <Accordion items={[...homeFaqs]} />
        </Reveal>
      </div>
    </section>
  );
}
