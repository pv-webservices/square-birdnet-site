import type { Metadata } from "next";
import { contact, phones } from "@/data/site";
import PageHero from "@/components/ui/PageHero";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description: "The terms that apply to using this website and to work carried out by SQUARE.",
  alternates: { canonical: "/terms" },
  robots: { index: false, follow: true },
};

export default function Page() {
  return (
    <main>
      <PageHero
        eyebrow="Legal"
        title="Terms &amp; Conditions"
        lead="The basis on which we quote, install and support the work we carry out."
        crumbs={[{ label: "Terms & Conditions" }]}
      />

      <section className="section">
        <div className="container">
          <div className="prose">
            <p className="prose__meta">
              {/* TODO(client): have this reviewed by your legal advisor and update the date on publication. */}
              Last updated: 20 September 2026
            </p>

            <h2>1. About these terms</h2>
            <p>
              These terms apply to your use of this website and to services provided by SQUARE — Bird Net
              &amp; Invisible Grill. Specific commercial terms for a job are set out in the quotation you
              receive and, where they differ, the quotation prevails.
            </p>

            <h2>2. Information on this website</h2>
            <p>
              Descriptions, photographs and indicative benefits are provided to help you understand the
              services. They are not a specification for your property. The system, materials and
              measurements that apply to your job are confirmed after a site visit.
            </p>

            <h2>3. Site visits and quotations</h2>
            <ul>
              <li>Site visits within our service area are free and carry no obligation.</li>
              <li>A quotation is based on the measurements and conditions recorded at that visit.</li>
              <li>Quotations are valid for the period stated on the document.</li>
              <li>
                If site conditions turn out to differ materially from what was recorded, we will discuss
                and agree any change with you before proceeding.
              </li>
            </ul>

            <h2>4. Installation</h2>
            <ul>
              <li>You are responsible for providing safe access to the work area.</li>
              <li>
                Where permission from a society, landlord or building management is required, obtaining it
                is your responsibility.
              </li>
              <li>
                Fixings are made into sound structure. Where a fixing must pass through a finished surface,
                we will tell you before we drill.
              </li>
              <li>Work areas are cleared of dust and offcuts on completion.</li>
            </ul>

            <h2>5. Payment</h2>
            <p>
              Payment terms, any advance and the final balance are stated on your quotation. Work is
              scheduled once the quotation is accepted in writing or over a recorded channel such as
              WhatsApp or email.
            </p>

            <h2>6. Warranty</h2>
            <p>
              Warranty duration and coverage depend on the system and materials selected and are stated on
              your quotation. Warranty covers workmanship and material defects under normal use. It does
              not cover damage from physical impact, unauthorised alteration, misuse, or events outside
              our control such as storms or structural movement.
            </p>

            <h2>7. Maintenance</h2>
            <p>
              We explain the care routine for your system at handover. Reasonable maintenance — occasional
              cleaning and periodic tension checks — is needed for the installation to perform as intended
              over its service life.
            </p>

            <h2>8. Safety statement</h2>
            <p>
              Invisible grills and bird nets are protective measures. They add a substantial barrier when
              correctly specified and correctly installed, but no barrier removes the need for adult
              supervision of children or pets. We will advise you honestly if a particular space needs
              more than the system you are asking about.
            </p>

            <h2>9. Cancellation</h2>
            <p>
              You may cancel before material is cut or fabricated at no cost. Once material has been cut to
              your measurements, the material cost becomes payable. Rescheduling an installation date is
              free where we are given reasonable notice.
            </p>

            <h2>10. Liability</h2>
            <p>
              Our liability in connection with a job is limited to the value of that job. Nothing in these
              terms limits liability where the law does not allow it to be limited.
            </p>

            <h2>11. Intellectual property</h2>
            <p>
              The content of this website, including photographs of our own installations, belongs to
              SQUARE and may not be reproduced without permission.
            </p>

            <h2>12. Governing law</h2>
            <p>These terms are governed by the laws of India, with courts in Gujarat having jurisdiction.</p>

            <h2>13. Contact</h2>
            <p>
              Questions about these terms? Email <a href={`mailto:${contact.email}`}>{contact.email}</a> or
              call <a href={phones[0].href}>{phones[0].display}</a> or{" "}
              <a href={phones[1].href}>{phones[1].display}</a>.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
