import { Phone } from "lucide-react";
import { contact, whatsappLink } from "@/data/site";
import WhatsAppIcon from "@/components/ui/WhatsAppIcon";

/**
 * Persistent quick-contact shortcuts: WhatsApp everywhere, plus a one-tap
 * call button stacked above it on phones. Never modal.
 * Wrapped in a labelled landmark so screen-reader users can find them too.
 */
export default function WhatsAppFab() {
  return (
    <aside aria-label="Quick contact" className="quick-contact">
      <a className="call-fab" href={contact.phoneHref} aria-label={`Call SQUARE on ${contact.phoneDisplay}`}>
        <Phone size={22} aria-hidden="true" />
      </a>
      <a className="wa-fab" href={whatsappLink()} target="_blank" rel="noreferrer" aria-label="Chat with SQUARE on WhatsApp">
        <span className="wa-fab__label" aria-hidden="true">
          Chat on WhatsApp
        </span>
        <WhatsAppIcon size={30} />
      </a>
    </aside>
  );
}
