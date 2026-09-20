import Link from "next/link";
import { ArrowUpRight, MessageCircle } from "lucide-react";
import { whatsappLink } from "@/data/site";

export default function NotFound() {
  return (
    <main>
      <section className="notfound">
        <div className="container container--narrow">
          <div className="notfound__code">404</div>
          <h1>This page has moved on.</h1>
          <p className="lead">
            The link you followed does not exist any more. The services, projects and contact details are
            all still here.
          </p>
          <div className="notfound__actions">
            <Link href="/" className="btn btn--primary btn--large">
              Back to Home <ArrowUpRight size={17} />
            </Link>
            <Link href="/services" className="btn btn--secondary btn--large">
              Browse Services
            </Link>
            <a href={whatsappLink()} target="_blank" rel="noreferrer" className="btn btn--ghost btn--large">
              <MessageCircle size={18} /> WhatsApp Us
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
