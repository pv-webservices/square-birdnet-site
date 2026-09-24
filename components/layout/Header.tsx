"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import {
  ArrowUpRight,
  ChevronDown,
  Clock3,
  MapPin,
  MessageCircle,
  Menu,
  Phone,
  X,
} from "lucide-react";
import { brand, contact, whatsappLink } from "@/data/site";
import { services } from "@/data/services";
import Icon from "@/components/ui/Icon";

const NAV = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services", children: true },
  { label: "Projects", href: "/projects" },
  { label: "Videos", href: "/videos" },
  { label: "FAQ", href: "/faq" },
  { label: "Contact", href: "/contact" },
] as const;

const SERVICE_ICONS: Record<string, string> = {
  "bird-netting": "bird",
  "invisible-grill": "shield",
  "bird-spikes": "spike",
};

function Brand({ onClick }: { onClick?: () => void }) {
  return (
    <Link href="/" className="brand" aria-label={`${brand.name} — home`} onClick={onClick}>
      <span className="brand__mark">
        <Image src={brand.logoMark} alt="" width={100} height={62} priority />
      </span>
      <span className="brand__copy">
        <strong>{brand.name}</strong>
        <small>BIRD NET &amp; INVISIBLE GRILL</small>
      </span>
    </Link>
  );
}

export default function Header() {
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [compact, setCompact] = useState(false);
  const pathname = usePathname();

  // Drives the stuck-state shadow only — it changes no box dimensions, so it
  // cannot move the page. Read once per frame, with a dead zone between the
  // on and off thresholds so the shadow never flickers at the boundary.
  useEffect(() => {
    let frame = 0;
    const read = () => {
      frame = 0;
      const y = window.scrollY;
      setCompact((wasCompact) => (wasCompact ? y > 24 : y > 56));
    };
    const onScroll = () => {
      if (!frame) frame = window.requestAnimationFrame(read);
    };
    read();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, []);

  // Close the drawer whenever the route changes.
  useEffect(() => {
    setOpen(false);
    setServicesOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  const isCurrent = (href: string) =>
    href === "/" ? pathname === "/" : pathname === href || pathname.startsWith(`${href}/`);

  return (
    <header className={`site-header ${compact ? "site-header--compact" : ""}`.trim()}>
      <div className="utility-bar">
        <div className="container utility-bar__inner">
          <div className="utility-bar__left">
            <span>{brand.utilityLine}</span>
            <span className="utility-hide">
              <MapPin size={13} aria-hidden="true" /> Serving Across Gujarat
            </span>
            <span className="utility-hide">
              <Clock3 size={13} aria-hidden="true" /> {contact.hours}
            </span>
          </div>
          <div className="utility-bar__right">
            <a href={contact.phoneHref}>
              <Phone size={13} aria-hidden="true" /> {contact.phoneDisplay}
            </a>
            <a className="utility-bar__wa" href={whatsappLink()} target="_blank" rel="noreferrer">
              <MessageCircle size={13} aria-hidden="true" /> WhatsApp Us
            </a>
          </div>
        </div>
      </div>

      <div className="main-nav">
        <div className="container main-nav__inner">
          <Brand />

          <nav className="desktop-nav" aria-label="Primary">
            {NAV.map((item) =>
              "children" in item && item.children ? (
                <div className="nav-item" key={item.href}>
                  <Link href={item.href} aria-current={isCurrent(item.href) ? "page" : undefined}>
                    {item.label} <ChevronDown size={14} aria-hidden="true" />
                  </Link>
                  <div className="nav-dropdown">
                    {services.map((service) => (
                      <Link key={service.slug} href={`/services/${service.slug}`}>
                        <Icon name={SERVICE_ICONS[service.slug] ?? "shield"} size={17} />
                        {service.navLabel}
                      </Link>
                    ))}
                    <Link href="/services">
                      <Icon name="help" size={17} />
                      All Services
                    </Link>
                  </div>
                </div>
              ) : (
                <div className="nav-item" key={item.href}>
                  <Link href={item.href} aria-current={isCurrent(item.href) ? "page" : undefined}>
                    {item.label}
                  </Link>
                </div>
              ),
            )}
          </nav>

          <div className="nav-actions">
            <a
              className="icon-button desktop-cta"
              href={contact.phoneHref}
              aria-label={`Call ${contact.phoneDisplay}`}
            >
              <Phone size={19} />
            </a>
            <Link className="btn btn--primary btn--compact desktop-cta" href="/contact">
              Get Free Site Visit <ArrowUpRight size={16} />
            </Link>
            <button
              className="icon-button menu-button"
              onClick={() => setOpen(true)}
              aria-label="Open menu"
              aria-expanded={open}
              type="button"
            >
              <Menu size={24} />
            </button>
          </div>
        </div>
      </div>

      {open ? (
        <>
          <div className="drawer-scrim" onClick={() => setOpen(false)} aria-hidden="true" />
          <div className="mobile-drawer" role="dialog" aria-modal="true" aria-label="Site menu">
            <div className="mobile-drawer__top">
              <Brand onClick={() => setOpen(false)} />
              <button className="icon-button" onClick={() => setOpen(false)} aria-label="Close menu" type="button">
                <X size={22} />
              </button>
            </div>

            <nav className="mobile-nav" aria-label="Mobile">
              {NAV.map((item) =>
                "children" in item && item.children ? (
                  <div className="mobile-nav__group" key={item.href}>
                    <button
                      type="button"
                      onClick={() => setServicesOpen((v) => !v)}
                      aria-expanded={servicesOpen}
                    >
                      {item.label}
                      <ChevronDown
                        size={20}
                        style={{ transform: servicesOpen ? "rotate(180deg)" : undefined, transition: "transform .3s" }}
                      />
                    </button>
                    {servicesOpen ? (
                      <div className="mobile-nav__sub">
                        <Link href="/services">All Services</Link>
                        {services.map((service) => (
                          <Link key={service.slug} href={`/services/${service.slug}`}>
                            {service.navLabel}
                          </Link>
                        ))}
                      </div>
                    ) : null}
                  </div>
                ) : (
                  <Link key={item.href} href={item.href} aria-current={isCurrent(item.href) ? "page" : undefined}>
                    {item.label}
                    <ArrowUpRight size={18} aria-hidden="true" />
                  </Link>
                ),
              )}
            </nav>

            <div className="mobile-drawer__contact">
              <a href={contact.phoneHref}>
                <Phone size={18} aria-hidden="true" /> {contact.phoneDisplay}
              </a>
              <a href={whatsappLink()} target="_blank" rel="noreferrer">
                <MessageCircle size={18} aria-hidden="true" /> Chat on WhatsApp
              </a>
              <Link href="/contact" className="btn btn--primary btn--block">
                Get Free Site Visit <ArrowUpRight size={17} />
              </Link>
            </div>
          </div>
        </>
      ) : null}
    </header>
  );
}
