import type { Metadata, Viewport } from "next";
import { Manrope, Caveat } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import WhatsAppFab from "@/components/ui/WhatsAppFab";
import JsonLd from "@/components/seo/JsonLd";
import { brand, contact, phones, serviceAreas } from "@/data/site";
import { BUSINESS_ID, INDEX_ROBOTS, SITE_NAME, SITE_URL, socialImage } from "@/lib/seo";

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-sans",
  display: "swap",
});

const caveat = Caveat({
  subsets: ["latin"],
  weight: ["500", "600"],
  variable: "--font-script",
  display: "swap",
});

const HOME_TITLE = "Bird Netting & Invisible Grill in Gujarat | SQUARE";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: HOME_TITLE,
    template: "%s | SQUARE",
  },
  description: brand.description,
  applicationName: SITE_NAME,
  // No site-wide canonical here: each page declares its own, and pages that
  // declare none (e.g. the 404) must not claim the homepage as canonical.
  openGraph: {
    type: "website",
    locale: "en_IN",
    siteName: SITE_NAME,
    title: HOME_TITLE,
    description: brand.description,
    images: [socialImage("home")],
  },
  twitter: {
    card: "summary_large_image",
    title: HOME_TITLE,
    description: brand.description,
    images: [{ url: socialImage("home").url, alt: socialImage("home").alt }],
  },
  robots: INDEX_ROBOTS,
  formatDetection: { telephone: false, email: false, address: false },
  // TODO(client): paste the Google Search Console HTML-tag token here if you
  // verify with the "HTML tag" method instead of DNS.
  verification: process.env.NEXT_PUBLIC_GSC_VERIFICATION
    ? { google: process.env.NEXT_PUBLIC_GSC_VERIFICATION }
    : undefined,
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#07365f",
};

/** WebSite + LocalBusiness schema — one copy for the whole site; pages reference BUSINESS_ID. */
const siteSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: `${SITE_URL}/`,
      name: SITE_NAME,
      inLanguage: "en-IN",
      publisher: { "@id": BUSINESS_ID },
    },
    {
      "@type": "HomeAndConstructionBusiness",
      "@id": BUSINESS_ID,
      name: SITE_NAME,
      alternateName: brand.name,
      description: brand.description,
      url: `${SITE_URL}/`,
      logo: `${SITE_URL}${brand.logoLockup}`,
      image: `${SITE_URL}/images/hero/hero-balcony.webp`,
      telephone: contact.phoneHref.replace("tel:", ""),
      email: contact.email,
      contactPoint: phones.map((phone) => ({
        "@type": "ContactPoint",
        telephone: phone.href.replace("tel:", ""),
        contactType: "customer service",
        areaServed: "IN",
      })),
      address: { "@type": "PostalAddress", addressRegion: "Gujarat", addressCountry: "IN" },
      areaServed: serviceAreas.map((area) => ({ "@type": "City", name: area })),
      openingHoursSpecification: [
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
          opens: "00:00",
          closes: "23:59",
        },
      ],
    },
  ],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en-IN" className={`${manrope.variable} ${caveat.variable}`}>
      <body>
        <a className="skip-link" href="#main">
          Skip to content
        </a>
        <Header />
        <div id="main" tabIndex={-1}>
          {children}
        </div>
        <Footer />
        <WhatsAppFab />
        <JsonLd data={siteSchema} />
      </body>
    </html>
  );
}
