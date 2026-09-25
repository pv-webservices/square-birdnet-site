import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, MessageCircle, Phone } from "lucide-react";
import { allFaqs } from "@/data/faqs";
import { phones, whatsappLink } from "@/data/site";
import CtaBand from "@/components/ui/CtaBand";
import FaqBrowser from "@/components/faq/FaqBrowser";
import PageHero from "@/components/ui/PageHero";

export const metadata: Metadata = {
  title: "Frequently Asked Questions",
  description:
    "Answers about bird netting, anti bird nets, invisible grills, bird spikes, cricket nets, installation, warranty, maintenance and pricing.",
  alternates: { canonical: "/faq" },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: allFaqs.map((faq) => ({
    "@type": "Question",
    name: faq.q,
    acceptedAnswer: { "@type": "Answer", text: faq.a },
  })),
};

export default function Page() {
  return (
    <main>
      <PageHero
        eyebrow="FAQ"
        title="Clear answers before you book a site visit."
        lead="Everything customers usually ask us — about the systems, the installation, the warranty and the price. If something is missing, just call."
        crumbs={[{ label: "FAQ" }]}
        actions={
          <>
            {phones.map((phone) => (
              <a key={phone.href} href={phone.href} className="btn btn--primary btn--large">
                <Phone size={17} /> {phone.display}
              </a>
            ))}
            <a href={whatsappLink()} target="_blank" rel="noreferrer" className="btn btn--secondary btn--large">
              <MessageCircle size={18} /> Ask on WhatsApp
            </a>
          </>
        }
      />

      <section className="section">
        <div className="container">
          <FaqBrowser />
        </div>
      </section>

      <section className="section section--tight">
        <div className="container">
          <CtaBand
            title="Question not answered here?"
            body="Call us or send a photo of the space on WhatsApp — you will get a straight answer, not a sales pitch."
            primaryLabel="Contact Us"
            primaryHref="/contact"
          />
        </div>
      </section>

      <section className="section section--tight" style={{ paddingTop: 0 }}>
        <div className="container" style={{ textAlign: "center" }}>
          <Link href="/services" className="text-link" style={{ margin: "0 auto" }}>
            Browse all services <ArrowUpRight size={15} />
          </Link>
        </div>
      </section>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
    </main>
  );
}
