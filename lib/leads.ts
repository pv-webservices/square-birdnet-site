/**
 * Lead capture — delivered by email through FormSubmit (formsubmit.co).
 *
 * FormSubmit needs no server or credentials: the form posts to an address
 * derived from the inbox, and the inbox owner confirms it once. After the
 * first submission FormSubmit emails an "Activate Form" link to the inbox;
 * nothing is delivered until that link is clicked.
 *
 * Once activated, FormSubmit also shows a random alias for the inbox. Put it
 * in NEXT_PUBLIC_FORMSUBMIT_ID to keep the real address out of the page source.
 */
import { contact } from "@/data/site";

export type LeadPayload = {
  name: string;
  mobile: string;
  email?: string;
  location: string;
  propertyType: string;
  service: string;
  message?: string;
  /** Page the enquiry came from, useful for attribution. */
  source: string;
};

export type LeadResult = { ok: true } | { ok: false; error: string };

const FORMSUBMIT_ID = process.env.NEXT_PUBLIC_FORMSUBMIT_ID || contact.email;

/** No-JavaScript fallback: the browser posts the form here directly. */
export const LEAD_FORM_ACTION = `https://formsubmit.co/${FORMSUBMIT_ID}`;
const AJAX_ENDPOINT = `https://formsubmit.co/ajax/${FORMSUBMIT_ID}`;

/** Submissions faster than this after the form appears are treated as bots. */
export const MIN_FILL_MS = 3000;

/** Rejected server-side by FormSubmit if any appear in the submission. */
const SPAM_TERMS = ["viagra", "casino", "crypto", "bitcoin", "backlinks", "seo services", "loan offer"];

export const FIELD_LIMITS = {
  name: 80,
  mobile: 16,
  email: 120,
  location: 120,
  message: 1000,
} as const;

export async function submitLead(payload: LeadPayload): Promise<LeadResult> {
  const subjectService = payload.service === "Not Sure" ? "General enquiry" : payload.service;

  try {
    const response = await fetch(AJAX_ENDPOINT, {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify({
        Name: payload.name.trim(),
        Mobile: payload.mobile.trim(),
        Email: payload.email?.trim() || "Not provided",
        Location: payload.location.trim(),
        "Property Type": payload.propertyType,
        Service: payload.service,
        Message: payload.message?.trim() || "—",
        "Submitted From": payload.source,
        _subject: `New site visit request — ${subjectService} — ${payload.name.trim()}`,
        _template: "table",
        _captcha: "false",
        _blacklist: SPAM_TERMS.join(", "),
        ...(payload.email?.trim() ? { _replyto: payload.email.trim() } : {}),
      }),
    });

    const data: { success?: string | boolean } = await response.json().catch(() => ({}));
    if (!response.ok || String(data.success) !== "true") {
      return { ok: false, error: "We could not send your request. Please call or WhatsApp us instead." };
    }
    return { ok: true };
  } catch {
    return { ok: false, error: "Network error. Please check your connection, call or WhatsApp us." };
  }
}

/* ------------------------------------------------------------ validation -- */

export type LeadErrors = Partial<Record<keyof LeadPayload | "consent", string>>;

/** Indian mobile numbers: 10 digits starting 6-9, with optional +91 / 0 prefix. */
const MOBILE_RE = /^(?:\+?91[\s-]?|0)?[6-9]\d{9}$/;
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
/** A name needs at least two letters (any script) — rejects "12" or "--". */
const NAME_RE = /\p{L}.*\p{L}/u;
/** Links are the signature of spam; genuine enquiries never need them. */
const URL_RE = /(https?:\/\/|www\.)/i;

export function validateLead(
  values: Omit<LeadPayload, "source">,
  consent: boolean,
): LeadErrors {
  const errors: LeadErrors = {};

  const name = values.name.trim();
  if (!NAME_RE.test(name)) {
    errors.name = "Please enter your full name.";
  } else if (name.length > FIELD_LIMITS.name) {
    errors.name = `Please keep your name under ${FIELD_LIMITS.name} characters.`;
  }

  const mobile = values.mobile.replace(/\s|-/g, "");
  if (!mobile) {
    errors.mobile = "Please enter your mobile number.";
  } else if (!MOBILE_RE.test(mobile)) {
    errors.mobile = "Enter a valid 10-digit Indian mobile number.";
  }

  const email = values.email?.trim() ?? "";
  if (email && (!EMAIL_RE.test(email) || email.length > FIELD_LIMITS.email)) {
    errors.email = "That email address does not look right.";
  }

  const location = values.location.trim();
  if (location.length < 2) {
    errors.location = "Tell us your area or locality.";
  } else if (location.length > FIELD_LIMITS.location) {
    errors.location = `Please keep this under ${FIELD_LIMITS.location} characters.`;
  }

  if (!values.service) {
    errors.service = "Please choose the service you need.";
  }

  const message = values.message?.trim() ?? "";
  if (message.length > FIELD_LIMITS.message) {
    errors.message = `Please keep your message under ${FIELD_LIMITS.message} characters.`;
  } else if (URL_RE.test(message)) {
    errors.message = "Please remove links from your message — describe the space instead.";
  }

  if (!consent) {
    errors.consent = "Please agree to be contacted about your enquiry.";
  }

  return errors;
}
