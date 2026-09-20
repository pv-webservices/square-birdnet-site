/**
 * Lead capture abstraction.
 *
 * The frontend never talks to an email provider directly — it posts to a
 * server route, which is where the client's CRM, SMTP or WhatsApp Business
 * credentials belong. Until that endpoint exists the submission is resolved
 * locally so the form UX can be tested end to end.
 *
 * TODO(client): implement app/api/leads/route.ts against the chosen provider
 * and set LEAD_ENDPOINT in .env — no secrets in this file.
 */

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

const ENDPOINT = process.env.NEXT_PUBLIC_LEAD_ENDPOINT;

export async function submitLead(payload: LeadPayload): Promise<LeadResult> {
  if (!ENDPOINT) {
    // No backend wired up yet — simulate a round trip so states are visible.
    await new Promise((resolve) => setTimeout(resolve, 900));
    return { ok: true };
  }

  try {
    const response = await fetch(ENDPOINT, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
    if (!response.ok) {
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

export function validateLead(
  values: Omit<LeadPayload, "source">,
  consent: boolean,
): LeadErrors {
  const errors: LeadErrors = {};

  if (values.name.trim().length < 2) {
    errors.name = "Please enter your full name.";
  }

  const mobile = values.mobile.replace(/\s|-/g, "");
  if (!mobile) {
    errors.mobile = "Please enter your mobile number.";
  } else if (!MOBILE_RE.test(mobile)) {
    errors.mobile = "Enter a valid 10-digit Indian mobile number.";
  }

  if (values.email && !EMAIL_RE.test(values.email.trim())) {
    errors.email = "That email address does not look right.";
  }

  if (values.location.trim().length < 2) {
    errors.location = "Tell us your area or locality.";
  }

  if (!values.service) {
    errors.service = "Please choose the service you need.";
  }

  if (!consent) {
    errors.consent = "Please agree to be contacted about your enquiry.";
  }

  return errors;
}
