"use client";

import { useEffect } from "react";
import Link from "next/link";
import { MessageCircle, Phone, RotateCcw } from "lucide-react";
import { contact, whatsappLink } from "@/data/site";

/**
 * Route-level error boundary. Keeps the header and footer on screen, offers a
 * retry, and always leaves the visitor a way to reach the business.
 */
export default function RouteError({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  useEffect(() => {
    // Surfaces in the browser console and any attached monitoring.
    console.error(error);
  }, [error]);

  return (
    <main>
      <section className="notfound">
        <div className="container container--narrow">
          <div className="notfound__code notfound__code--error" aria-hidden="true">
            Oops
          </div>
          <h1>Something went wrong on this page.</h1>
          <p className="lead">
            Please try again. If it keeps happening, call or WhatsApp us — we will book your free site visit
            directly.
          </p>
          <div className="notfound__actions">
            <button type="button" onClick={reset} className="btn btn--primary btn--large">
              <RotateCcw size={17} /> Try Again
            </button>
            <a href={contact.phoneHref} className="btn btn--secondary btn--large">
              <Phone size={17} /> Call {contact.phoneDisplay}
            </a>
            <a href={whatsappLink()} target="_blank" rel="noreferrer" className="btn btn--ghost btn--large">
              <MessageCircle size={18} /> WhatsApp Us
            </a>
          </div>
          <nav className="notfound__links" aria-label="Popular pages">
            <Link href="/">Home</Link>
            <Link href="/services">Services</Link>
            <Link href="/projects">Projects</Link>
            <Link href="/contact">Contact</Link>
          </nav>
        </div>
      </section>
    </main>
  );
}
