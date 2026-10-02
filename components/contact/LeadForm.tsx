"use client";

import { useEffect, useRef, useState, type FormEvent } from "react";
import { AlertCircle, ArrowUpRight, CheckCircle2, MessageCircle } from "lucide-react";
import {
  FIELD_LIMITS,
  LEAD_FORM_ACTION,
  MIN_FILL_MS,
  submitLead,
  validateLead,
  type LeadErrors,
} from "@/lib/leads";
import { whatsappLink } from "@/data/site";

const SERVICES = [
  "Bird Netting Service",
  "Invisible Grill Installation",
  "Bird Spike Installation",
  "Cricket Net Installation",
  "Safety Net Installation",
  "Mosquito Net Installation",
  "Not Sure",
] as const;

const PROPERTY_TYPES = [
  "Apartment / Flat",
  "Independent House",
  "Villa",
  "Society / Common Area",
  "Office / Shop",
  "Factory / Warehouse",
  "Other",
] as const;

const EMPTY = {
  name: "",
  mobile: "",
  email: "",
  location: "",
  propertyType: PROPERTY_TYPES[0],
  service: "",
  message: "",
};

/** Form order of validated fields; each input's id is `lead-<field>`. */
const FIELD_ORDER = ["name", "mobile", "email", "location", "service", "message", "consent"] as const;

type Status = "idle" | "submitting" | "success" | "error";

/**
 * Free-site-visit lead form.
 *
 * Validates on submit (and clears a field's error as soon as it is corrected),
 * blocks duplicate submissions while a request is in flight, and surfaces
 * submitting / success / error states explicitly.
 *
 * Spam protection: a hidden honeypot field and a minimum fill time. Bots that
 * trip either are shown the success state but nothing is sent. FormSubmit
 * adds its own filtering on top. Without JavaScript the form still posts
 * straight to FormSubmit (which then shows its own captcha).
 */
export default function LeadForm({ defaultService = "" }: { defaultService?: string }) {
  const [values, setValues] = useState({ ...EMPTY, service: defaultService });
  const [consent, setConsent] = useState(false);
  const [errors, setErrors] = useState<LeadErrors>({});
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const honeypotRef = useRef<HTMLInputElement>(null);
  const successRef = useRef<HTMLDivElement>(null);
  const shownAtRef = useRef(0);

  useEffect(() => {
    if (status === "idle") shownAtRef.current = Date.now();
    // The form is replaced by the confirmation, so move focus with it.
    if (status === "success") successRef.current?.focus();
  }, [status]);

  const update = (field: keyof typeof EMPTY, value: string) => {
    setValues((current) => ({ ...current, [field]: value }));
    if (errors[field]) setErrors((current) => ({ ...current, [field]: undefined }));
  };

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (status === "submitting") return;

    const found = validateLead(values, consent);
    setErrors(found);
    const firstInvalid = FIELD_ORDER.find((field) => found[field]);
    if (firstInvalid) {
      // Look up by id: aria-invalid is not in the DOM until React re-renders.
      document.getElementById(`lead-${firstInvalid}`)?.focus();
      return;
    }

    const isBot =
      Boolean(honeypotRef.current?.value) || Date.now() - shownAtRef.current < MIN_FILL_MS;
    if (isBot) {
      setStatus("success");
      return;
    }

    setStatus("submitting");
    const result = await submitLead({
      ...values,
      source: typeof window !== "undefined" ? window.location.pathname : "/contact",
    });

    if (result.ok) {
      setStatus("success");
      setValues({ ...EMPTY, service: defaultService });
      setConsent(false);
    } else {
      setStatus("error");
      setErrorMessage(result.error);
    }
  }

  if (status === "success") {
    return (
      <div className="contact-panel">
        <div className="form-status form-status--success" role="status" tabIndex={-1} ref={successRef}>
          <CheckCircle2 size={20} aria-hidden="true" />
          <span>
            Thank you — your request has been received. We will call you to confirm a convenient time for
            the site visit.
          </span>
        </div>
        <div style={{ display: "flex", gap: 10, flexWrap: "wrap", marginTop: 22 }}>
          <a href={whatsappLink()} target="_blank" rel="noreferrer" className="btn btn--whatsapp">
            <MessageCircle size={18} /> Message Us Now
          </a>
          <button type="button" className="btn btn--ghost" onClick={() => setStatus("idle")}>
            Send Another Request
          </button>
        </div>
      </div>
    );
  }

  return (
    <form className="contact-panel" action={LEAD_FORM_ACTION} method="POST" onSubmit={handleSubmit} noValidate>
      {/* Used only by the no-JavaScript fallback; the scripted path sends its own. */}
      <input type="hidden" name="_subject" value="New site visit request (website)" />
      <input type="hidden" name="_template" value="table" />
      <div className="hp-field" aria-hidden="true">
        <label htmlFor="lead-company">Company website</label>
        <input ref={honeypotRef} id="lead-company" type="text" name="_honey" tabIndex={-1} autoComplete="off" />
      </div>

      <div className="eyebrow">Free site visit</div>
      <h2 style={{ fontSize: 26 }}>Request a free site visit</h2>
      <p style={{ fontSize: 14 }}>
        Fill this in and we will call you back to fix a time. No charge, no obligation.
      </p>
      <p className="form-note">
        Fields marked <span aria-hidden="true">*</span>
        <span className="sr-only">with an asterisk</span> are required.
      </p>

      <div className="form-grid" style={{ marginTop: 18 }}>
        <div className="field">
          <label htmlFor="lead-name">
            Full Name <span aria-hidden="true">*</span>
          </label>
          <input
            id="lead-name"
            name="name"
            autoComplete="name"
            required
            maxLength={FIELD_LIMITS.name}
            value={values.name}
            onChange={(e) => update("name", e.target.value)}
            aria-invalid={Boolean(errors.name)}
            aria-describedby={errors.name ? "lead-name-error" : undefined}
            placeholder="e.g. Rohit Sharma"
          />
          {errors.name ? (
            <span className="field__error" id="lead-name-error">
              <AlertCircle size={13} aria-hidden="true" /> {errors.name}
            </span>
          ) : null}
        </div>

        <div className="field">
          <label htmlFor="lead-mobile">
            Mobile Number <span aria-hidden="true">*</span>
          </label>
          <input
            id="lead-mobile"
            name="mobile"
            type="tel"
            inputMode="tel"
            autoComplete="tel"
            required
            maxLength={FIELD_LIMITS.mobile}
            value={values.mobile}
            onChange={(e) => update("mobile", e.target.value)}
            aria-invalid={Boolean(errors.mobile)}
            aria-describedby={errors.mobile ? "lead-mobile-error" : undefined}
            placeholder="10-digit mobile number"
          />
          {errors.mobile ? (
            <span className="field__error" id="lead-mobile-error">
              <AlertCircle size={13} aria-hidden="true" /> {errors.mobile}
            </span>
          ) : null}
        </div>

        <div className="field">
          <label htmlFor="lead-email">Email (optional)</label>
          <input
            id="lead-email"
            name="email"
            type="email"
            autoComplete="email"
            maxLength={FIELD_LIMITS.email}
            value={values.email}
            onChange={(e) => update("email", e.target.value)}
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? "lead-email-error" : undefined}
            placeholder="you@example.com"
          />
          {errors.email ? (
            <span className="field__error" id="lead-email-error">
              <AlertCircle size={13} aria-hidden="true" /> {errors.email}
            </span>
          ) : null}
        </div>

        <div className="field">
          <label htmlFor="lead-location">
            Location / Area <span aria-hidden="true">*</span>
          </label>
          <input
            id="lead-location"
            name="location"
            autoComplete="address-level2"
            required
            maxLength={FIELD_LIMITS.location}
            value={values.location}
            onChange={(e) => update("location", e.target.value)}
            aria-invalid={Boolean(errors.location)}
            aria-describedby={errors.location ? "lead-location-error" : undefined}
            placeholder="e.g. Rajkot"
          />
          {errors.location ? (
            <span className="field__error" id="lead-location-error">
              <AlertCircle size={13} aria-hidden="true" /> {errors.location}
            </span>
          ) : null}
        </div>

        <div className="field">
          <label htmlFor="lead-property">Property Type</label>
          <select
            id="lead-property"
            name="propertyType"
            value={values.propertyType}
            onChange={(e) => update("propertyType", e.target.value)}
          >
            {PROPERTY_TYPES.map((type) => (
              <option key={type}>{type}</option>
            ))}
          </select>
        </div>

        <div className="field">
          <label htmlFor="lead-service">
            Service Required <span aria-hidden="true">*</span>
          </label>
          <select
            id="lead-service"
            name="service"
            required
            value={values.service}
            onChange={(e) => update("service", e.target.value)}
            aria-invalid={Boolean(errors.service)}
            aria-describedby={errors.service ? "lead-service-error" : undefined}
          >
            <option value="">Select a service</option>
            {SERVICES.map((service) => (
              <option key={service}>{service}</option>
            ))}
          </select>
          {errors.service ? (
            <span className="field__error" id="lead-service-error">
              <AlertCircle size={13} aria-hidden="true" /> {errors.service}
            </span>
          ) : null}
        </div>

        <div className="field field--full">
          <label htmlFor="lead-message">Message (optional)</label>
          <textarea
            id="lead-message"
            name="message"
            rows={4}
            maxLength={FIELD_LIMITS.message}
            value={values.message}
            onChange={(e) => update("message", e.target.value)}
            aria-invalid={Boolean(errors.message)}
            aria-describedby={errors.message ? "lead-message-error" : undefined}
            placeholder="Tell us about the space — balcony size, floor, what the problem is."
          />
          {errors.message ? (
            <span className="field__error" id="lead-message-error">
              <AlertCircle size={13} aria-hidden="true" /> {errors.message}
            </span>
          ) : null}
        </div>

        <div className="field field--full">
          <div className="field--checkbox">
            <input
              id="lead-consent"
              type="checkbox"
              required
              checked={consent}
              onChange={(e) => {
                setConsent(e.target.checked);
                if (errors.consent) setErrors((c) => ({ ...c, consent: undefined }));
              }}
              aria-invalid={Boolean(errors.consent)}
              aria-describedby={errors.consent ? "lead-consent-error" : undefined}
            />
            <label htmlFor="lead-consent">
              I agree to be contacted by SQUARE about this enquiry by phone, WhatsApp or email.
            </label>
          </div>
          {errors.consent ? (
            <span className="field__error" id="lead-consent-error">
              <AlertCircle size={13} aria-hidden="true" /> {errors.consent}
            </span>
          ) : null}
        </div>
      </div>

      {status === "error" ? (
        <div className="form-status form-status--error" role="alert" style={{ marginTop: 18 }}>
          <AlertCircle size={20} aria-hidden="true" />
          <span>{errorMessage}</span>
        </div>
      ) : null}

      <div style={{ display: "flex", gap: 10, flexWrap: "wrap", marginTop: 22 }}>
        <button
          type="submit"
          className="btn btn--primary btn--large"
          disabled={status === "submitting"}
          aria-busy={status === "submitting"}
        >
          {status === "submitting" ? (
            <>
              <span className="spinner" aria-hidden="true" /> Sending…
            </>
          ) : (
            <>
              Request Free Site Visit <ArrowUpRight size={17} />
            </>
          )}
        </button>
        <a href={whatsappLink()} target="_blank" rel="noreferrer" className="btn btn--ghost btn--large">
          <MessageCircle size={18} /> Or WhatsApp Us
        </a>
      </div>
    </form>
  );
}
