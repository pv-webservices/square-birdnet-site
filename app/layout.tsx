import type { Metadata } from "next";
import { Manrope, Caveat } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import WhatsAppFab from "@/components/ui/WhatsAppFab";
import { brand, contact, phones, serviceAreas } from "@/data/site";

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

export const metadata: Metadata = {
  metadataBase: new URL("https://www.squarebirdnet.com"),
  title: {
    default: "SQUARE | Bird Netting Services & Invisible Grill Contractors in Gujarat",
    template: "%s | SQUARE",
  },
  description: brand.description,
  keywords: [
    "bird netting services in Gujarat",
    "anti bird net dealers in Gujarat",
    "mosquito net installation services",
    "bird spike installation services",
    "industrial bird netting services",
    "invisible grill contractors in Gujarat",
    "nylon bird netting services",
    "plastic anti bird net",
    "safety net installation services",
    "stainless steel invisible grill",
    "cricket net installation",
    "balcony bird net",
    "pigeon net Gujarat",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_IN",
    siteName: "SQUARE — Bird Net & Invisible Grill",
    title: "SQUARE | Bird Netting Services & Invisible Grill Contractors in Gujarat",
    description: brand.description,
    images: [{ url: "/images/hero/hero-balcony.webp", width: 1400, height: 939, alt: "Balcony protected by an invisible grill overlooking the city" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "SQUARE | Bird Netting Services & Invisible Grill Contractors in Gujarat",
    description: brand.description,
    images: ["/images/hero/hero-balcony.webp"],
  },
  robots: { index: true, follow: true },
};

/** LocalBusiness schema — one copy for the whole site. */
const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "SQUARE — Bird Net & Invisible Grill",
  description: brand.description,
  url: "https://www.squarebirdnet.com",
  telephone: contact.phoneDisplay,
  contactPoint: phones.map((phone) => ({
    "@type": "ContactPoint",
    telephone: phone.display,
    contactType: "customer service",
    areaServed: "IN",
    availableLanguage: ["en", "hi", "gu"],
  })),
  email: contact.email,
  image: "https://www.squarebirdnet.com/images/hero/hero-balcony.webp",
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
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en-IN" className={`${manrope.variable} ${caveat.variable}`}>
      <body>
        <a className="skip-link" href="#main">
          Skip to content
        </a>
        <Header />
        <div id="main">{children}</div>
        <Footer />
        <WhatsAppFab />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
      </body>
    </html>
  );
}
