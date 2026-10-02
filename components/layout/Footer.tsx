import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpRight,
  Clock3,
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Youtube,
} from "lucide-react";
import { brand, contact, phones, socials, whatsappLink } from "@/data/site";
import { footerServiceLinks } from "@/data/services";

const QUICK_LINKS = [
  ["Home", "/"],
  ["About Us", "/about"],
  ["Services", "/services"],
  ["Projects", "/projects"],
  ["Videos", "/videos"],
  ["Reviews", "/#reviews"],
  ["FAQ", "/faq"],
  ["Contact", "/contact"],
] as const;

const SOCIAL_ICONS = {
  facebook: Facebook,
  instagram: Instagram,
  youtube: Youtube,
  linkedin: Linkedin,
} as const;

const liveSocials = socials.filter((social) => social.href);

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div className="footer-brand">
          <Link href="/" className="brand" aria-label={`${brand.name} — home`}>
            <span className="brand__mark">
              <Image src={brand.logoMark} alt="" width={100} height={62} />
            </span>
            <span className="brand__copy">
              <strong>{brand.name}</strong>
              <small>BIRD NET &amp; INVISIBLE GRILL</small>
            </span>
          </Link>
          <p>{brand.description}</p>
          {liveSocials.length ? (
            <div className="socials">
              {liveSocials.map((social) => {
                const IconComponent = SOCIAL_ICONS[social.icon];
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    aria-label={`${brand.name} on ${social.label}`}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <IconComponent size={17} aria-hidden="true" />
                  </a>
                );
              })}
            </div>
          ) : null}
        </div>

        <nav aria-label="Quick links">
          <h2>Quick Links</h2>
          <ul>
            {QUICK_LINKS.map(([label, href]) => (
              <li key={href}>
                <Link href={href}>{label}</Link>
              </li>
            ))}
          </ul>
        </nav>

        <nav aria-label="Our services">
          <h2>Our Services</h2>
          <ul>
            {footerServiceLinks.map((link) => (
              <li key={link.label}>
                <Link href={link.href}>{link.label}</Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="footer-contact">
          <h2>Contact Us</h2>
          {phones.map((phone) => (
            <a key={phone.href} href={phone.href}>
              <Phone size={16} aria-hidden="true" /> {phone.display}
            </a>
          ))}
          <a href={whatsappLink()} target="_blank" rel="noreferrer">
            <MessageCircle size={16} aria-hidden="true" /> Chat on WhatsApp
          </a>
          <a href={`mailto:${contact.email}`}>
            <Mail size={16} aria-hidden="true" /> {contact.email}
          </a>
          <span>
            <MapPin size={16} aria-hidden="true" /> {contact.addressLine}
          </span>
          <span>
            <Clock3 size={16} aria-hidden="true" /> {contact.hours}
          </span>
          <Link className="btn btn--primary btn--compact" href="/contact">
            Get Free Site Visit <ArrowUpRight size={16} />
          </Link>
        </div>
      </div>

      <div className="container footer-bottom">
        <span>
          © {new Date().getFullYear()} {brand.name} — {brand.tagline}. All rights reserved.
        </span>
        <div className="footer-bottom__links">
          <Link href="/privacy-policy">Privacy Policy</Link>
          <Link href="/terms">Terms &amp; Conditions</Link>
          {/* Plain anchor: an XML file, not a page Next.js should prefetch. */}
          <a href="/sitemap.xml">Sitemap</a>
        </div>
        <span className="footer-script">
          Safe.
          <br />
          Clean.
          <br />
          Beautiful.
        </span>
      </div>
    </footer>
  );
}
