import type { Metadata } from "next";
import { contact, phones } from "@/data/site";
import PageHero from "@/components/ui/PageHero";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How SQUARE collects, uses and protects the information you share through this website.",
  alternates: { canonical: "/privacy-policy" },
  robots: { index: false, follow: true },
};

export default function Page() {
  return (
    <main>
      <PageHero
        eyebrow="Legal"
        title="Privacy Policy"
        lead="What we collect when you enquire, why we collect it, and what we do not do with it."
        crumbs={[{ label: "Privacy Policy" }]}
      />

      <section className="section">
        <div className="container">
          <div className="prose">
            <p className="prose__meta">
              {/* TODO(client): have this reviewed by your legal advisor and update the date on publication. */}
              Last updated: 20 September 2026
            </p>

            <h2>1. Who we are</h2>
            <p>
              SQUARE — Bird Net &amp; Invisible Grill provides bird netting, invisible grill, bird spike and cricket net
              installation services across Gujarat. This policy explains how we handle
              personal information collected through this website.
            </p>

            <h2>2. Information we collect</h2>
            <p>We only collect what we need in order to respond to an enquiry and carry out the work:</p>
            <ul>
              <li>Your name, mobile number and, if you provide it, your email address.</li>
              <li>The location or area of the property and the property type.</li>
              <li>The service you are interested in and any message you send us.</li>
              <li>Basic technical information such as the page an enquiry came from.</li>
            </ul>

            <h2>3. How we use it</h2>
            <ul>
              <li>To contact you about the enquiry you submitted and arrange a site visit.</li>
              <li>To prepare a measurement, quotation and installation schedule.</li>
              <li>To provide after-sales support, inspections and warranty service.</li>
              <li>To keep our own records of completed work.</li>
            </ul>
            <p>
              We do not sell, rent or trade your personal information, and we do not share it with
              advertisers.
            </p>

            <h2>4. Sharing with others</h2>
            <p>
              We share information only with the installation team assigned to your job, and with service
              providers that operate this website or our communication tools. Anyone we share information
              with is expected to protect it and use it solely for that purpose. We may also disclose
              information where the law requires it.
            </p>

            <h2>5. Keeping it secure</h2>
            <p>
              Enquiries submitted through this site are transmitted over an encrypted connection and
              access is restricted to the people who need it. No system is perfectly secure, but we take
              reasonable technical and organisational measures to protect your information.
            </p>

            <h2>6. How long we keep it</h2>
            <p>
              Enquiry details are kept for as long as needed to respond to you. Where work is carried out,
              records are retained for the warranty and service period and for as long as our tax and
              accounting obligations require.
            </p>

            <h2>7. Cookies</h2>
            <p>
              This website uses only what is necessary for the site to function. We do not run advertising
              trackers. If analytics are added in future, this section will be updated before they go live.
            </p>

            <h2>8. Your choices</h2>
            <ul>
              <li>Ask us what information we hold about you.</li>
              <li>Ask us to correct anything that is wrong.</li>
              <li>Ask us to delete your enquiry details, where we are not required to keep them.</li>
              <li>Ask us to stop contacting you at any time.</li>
            </ul>

            <h2>9. Children</h2>
            <p>
              This website is intended for adults arranging work at a property. We do not knowingly collect
              information from children.
            </p>

            <h2>10. Changes to this policy</h2>
            <p>
              If this policy changes, the updated version will be published on this page with a new date
              above.
            </p>

            <h2>11. Contact us</h2>
            <p>
              For any question about this policy or about information we hold, contact us at{" "}
              <a href={`mailto:${contact.email}`}>{contact.email}</a> or call{" "}
              <a href={phones[0].href}>{phones[0].display}</a> or{" "}
              <a href={phones[1].href}>{phones[1].display}</a>.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
