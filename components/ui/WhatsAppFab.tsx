import { MessageCircle } from "lucide-react";
import { whatsappLink } from "@/data/site";

/** Persistent WhatsApp shortcut. One button, always reachable, never modal. */
export default function WhatsAppFab() {
  return (
    <a className="wa-fab" href={whatsappLink()} target="_blank" rel="noreferrer" aria-label="Chat with SQUARE on WhatsApp">
      <span className="wa-fab__label" aria-hidden="true">
        Chat on WhatsApp
      </span>
      <MessageCircle size={26} />
    </a>
  );
}
