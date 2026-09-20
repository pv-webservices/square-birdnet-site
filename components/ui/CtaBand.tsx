import Link from "next/link";
import { ArrowUpRight, MessageCircle } from "lucide-react";
import { whatsappLink } from "@/data/site";
import Reveal from "@/components/ui/Reveal";

type Props = {
  title?: string;
  body?: string;
  primaryLabel?: string;
  primaryHref?: string;
  /** Service name passed into the WhatsApp pre-filled message. */
  subject?: string;
};

/** Mid-page conversion band used across the internal pages. */
export default function CtaBand({
  title = "Ready for a safer, cleaner space?",
  body = "Book a free site visit — we measure, advise and quote with no obligation.",
  primaryLabel = "Get Free Site Visit",
  primaryHref = "/contact",
  subject,
}: Props) {
  return (
    <Reveal className="cta-band" variant="zoom">
      <div>
        <h2>{title}</h2>
        <p>{body}</p>
      </div>
      <div className="cta-band__actions">
        <Link href={primaryHref} className="btn btn--light">
          {primaryLabel} <ArrowUpRight size={17} />
        </Link>
        <a href={whatsappLink(subject)} target="_blank" rel="noreferrer" className="btn btn--whatsapp">
          <MessageCircle size={18} /> Chat on WhatsApp
        </a>
      </div>
    </Reveal>
  );
}
