import { MessageCircle } from "lucide-react";
import { whatsappLink } from "@/data/site";

/**
 * Persistent WhatsApp shortcut. One button, always reachable, never modal.
 * Wrapped in a labelled landmark so screen-reader users can find it too.
 */
export default function WhatsAppFab() {
  return (
    <aside aria-label="Quick contact">
      <a className="wa-fab" href={whatsappLink()} target="_blank" rel="noreferrer" aria-label="Chat with SQUARE on WhatsApp">
        <span className="wa-fab__label" aria-hidden="true">
          Chat on WhatsApp
        </span>
        <MessageCircle size={26} aria-hidden="true" />
      </a>
    </aside>
  );
}
