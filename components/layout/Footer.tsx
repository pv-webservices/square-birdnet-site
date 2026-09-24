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
import { brand, contact, socials, whatsappLink } from "@/data/site";
import { services } from "@/data/services";

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
          <div className="socials">
            {socials.map((social) => {
              const IconComponent = SOCIAL_ICONS[social.icon];
              return (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={`${brand.name} on ${social.label}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  <IconComponent size={17} />
                </a>
              );
            })}
          </div>
        </div>

        <nav aria-label="Quick links">
          <h3>Quick Links</h3>
          <ul>
            {QUICK_LINKS.map(([label, href]) => (
              <li key={href}>
                <Link href={href}>{label}</Link>
              </li>
            ))}
          </ul>
        </nav>

        <nav aria-label="Our services">
          <h3>Our Services</h3>
          <ul>
            {services.map((service) => (
              <li key={service.slug}>
                <Link href={`/services/${service.slug}`}>{service.navLabel}</Link>
              </li>
            ))}
            <li>
              <Link href="/services">All Services</Link>
            </li>
          </ul>
        </nav>

        <div className="footer-contact">
          <h3>Contact Us</h3>
          <a href={contact.phoneHref}>
            <Phone size={16} aria-hidden="true" /> {contact.phoneDisplay}
          </a>
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
          <Link href="/sitemap.xml">Sitemap</Link>
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
