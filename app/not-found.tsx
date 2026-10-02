import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, MessageCircle, Phone } from "lucide-react";
import { services } from "@/data/services";
import { contact, whatsappLink } from "@/data/site";

// noindex, follow and deliberately no canonical: a 404 is not a page Google
// should index or fold into another URL. Next.js also sends HTTP 404.
export const metadata: Metadata = {
  title: "Page Not Found",
  description: "The page you were looking for does not exist. Browse SQUARE's services, projects and contact details.",
  robots: { index: false, follow: true },
};

const SECTIONS = [
  { label: "About Us", href: "/about" },
  { label: "All Services", href: "/services" },
  ...services.map((service) => ({ label: service.navLabel, href: `/services/${service.slug}` })),
  { label: "Projects", href: "/projects" },
  { label: "Videos", href: "/videos" },
  { label: "FAQ", href: "/faq" },
  { label: "Contact", href: "/contact" },
];

export default function NotFound() {
  return (
    <main>
      <section className="notfound">
        <div className="container container--narrow">
          <div className="notfound__code" aria-hidden="true">
            404
          </div>
          <h1>Page not found</h1>
          <p className="lead">
            The page you were looking for does not exist or may have moved. Everything else is still here — pick a
            section below, or call or WhatsApp us and we will help directly.
          </p>
          <div className="notfound__actions">
            <Link href="/" className="btn btn--primary btn--large">
              Back to Home <ArrowUpRight size={17} />
            </Link>
            <a href={contact.phoneHref} className="btn btn--secondary btn--large">
              <Phone size={17} /> Call {contact.phoneDisplay}
            </a>
            <a href={whatsappLink()} target="_blank" rel="noreferrer" className="btn btn--ghost btn--large">
              <MessageCircle size={18} /> WhatsApp Us
            </a>
          </div>
          <nav className="notfound__links" aria-label="Website sections">
            {SECTIONS.map((section) => (
              <Link key={section.href} href={section.href}>
                {section.label}
              </Link>
            ))}
          </nav>
        </div>
      </section>
    </main>
  );
}
