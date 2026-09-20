import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import type { ReactNode } from "react";

export type Crumb = { label: string; href?: string };

type Props = {
  eyebrow: string;
  title: ReactNode;
  lead: string;
  image?: string;
  imageAlt?: string;
  crumbs?: Crumb[];
  actions?: ReactNode;
};

/** Shared hero band for every internal page. */
export default function PageHero({ eyebrow, title, lead, image, imageAlt = "", crumbs = [], actions }: Props) {
  const plain = !image;
  return (
    <section className={`page-hero ${plain ? "page-hero--plain" : ""}`.trim()}>
      {image ? (
        <div className="page-hero__media">
          <Image src={image} alt={imageAlt} fill priority sizes="100vw" />
        </div>
      ) : null}
      <div className="container">
        <div className="page-hero__inner">
          {crumbs.length ? (
            <nav className="breadcrumbs" aria-label="Breadcrumb">
              <Link href="/">Home</Link>
              {crumbs.map((crumb, i) => (
                <span key={crumb.label} style={{ display: "inline-flex", alignItems: "center", gap: 8 }}>
                  <ChevronRight size={13} aria-hidden="true" />
                  {crumb.href && i < crumbs.length - 1 ? (
                    <Link href={crumb.href}>{crumb.label}</Link>
                  ) : (
                    <span aria-current="page">{crumb.label}</span>
                  )}
                </span>
              ))}
            </nav>
          ) : null}
          <div className="eyebrow">{eyebrow}</div>
          <h1>{title}</h1>
          <p>{lead}</p>
          {actions ? <div className="page-hero__actions">{actions}</div> : null}
        </div>
      </div>
    </section>
  );
}
