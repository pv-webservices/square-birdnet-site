"use client";

import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useMemo, useState } from "react";
import { ArrowUpRight, Maximize2, MessageCircle, X } from "lucide-react";
import { projectFilters, type Project } from "@/data/projects";
import { whatsappLink } from "@/data/site";
import Reveal from "@/components/ui/Reveal";

type Props = {
  projects: Project[];
  /** Show the filter row. Off for the compact homepage strip. */
  withFilters?: boolean;
  /** Larger four-column grid used on the projects page. */
  variant?: "strip" | "page";
};

/**
 * Filterable project grid. Each card opens a case-study lightbox with the
 * location, property type, challenge and solution for that installation.
 */
export default function ProjectGallery({ projects, withFilters = true, variant = "strip" }: Props) {
  const [filter, setFilter] = useState<string>("All");
  const [active, setActive] = useState<Project | null>(null);

  const visible = useMemo(
    () => (filter === "All" ? projects : projects.filter((p) => p.category === filter)),
    [filter, projects],
  );

  const close = useCallback(() => setActive(null), []);

  useEffect(() => {
    if (!active) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    document.addEventListener("keydown", onKey);
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = previous;
    };
  }, [active, close]);

  return (
    <>
      {withFilters ? (
        <div className="filter-row" role="group" aria-label="Filter projects by service">
          {projectFilters.map((option) => (
            <button
              key={option}
              type="button"
              className={filter === option ? "is-active" : ""}
              aria-pressed={filter === option}
              onClick={() => setFilter(option)}
            >
              {option}
            </button>
          ))}
        </div>
      ) : null}

      <div className={`projects-grid ${variant === "page" ? "projects-grid--page" : ""}`.trim()}>
        {visible.map((project, i) => (
          <Reveal key={project.id} delay={Math.min(i, 6) * 70}>
            <button type="button" className="project-card hover-card" onClick={() => setActive(project)}>
              <div className="hover-media" style={{ aspectRatio: "1.18" }}>
                <Image
                  src={project.image}
                  alt={project.alt}
                  fill
                  loading="lazy"
                  sizes="(max-width: 760px) 74vw, (max-width: 1240px) 32vw, 17vw"
                />
                <span className="project-card__peek" aria-hidden="true">
                  <Maximize2 size={18} />
                </span>
              </div>
              <span className="project-card__body">
                <span>{project.location} — {project.propertyType}</span>
                <strong>{project.service}</strong>
              </span>
            </button>
          </Reveal>
        ))}
      </div>

      {visible.length === 0 ? (
        <div className="faq-empty">
          <p style={{ margin: 0 }}>No projects in this category yet. Try another filter.</p>
        </div>
      ) : null}

      {active ? (
        <div
          className="lightbox"
          role="dialog"
          aria-modal="true"
          aria-label={`${active.title} case study`}
          onClick={(e) => {
            if (e.target === e.currentTarget) close();
          }}
        >
          <div className="lightbox__panel">
            <button type="button" className="lightbox__close" onClick={close} aria-label="Close project details">
              <X size={20} />
            </button>
            <div className="lightbox__grid">
              <div className="lightbox__media">
                <Image src={active.image} alt={active.alt} fill sizes="(max-width: 1040px) 100vw, 55vw" />
              </div>
              <div className="lightbox__body">
                <div className="eyebrow">{active.category}</div>
                <h3 style={{ fontSize: 26 }}>{active.title}</h3>

                <div className="lightbox__meta">
                  <div>
                    <span>Location</span>
                    <strong>{active.location}</strong>
                  </div>
                  <div>
                    <span>Property type</span>
                    <strong>{active.propertyType}</strong>
                  </div>
                  <div>
                    <span>Service</span>
                    <strong>{active.service}</strong>
                  </div>
                  <div>
                    <span>Segment</span>
                    <strong>{active.segment}</strong>
                  </div>
                </div>

                <div className="lightbox__block">
                  <h4>The challenge</h4>
                  <p>{active.challenge}</p>
                </div>
                <div className="lightbox__block">
                  <h4>Our solution</h4>
                  <p>{active.solution}</p>
                </div>

                <div style={{ display: "flex", gap: 10, flexWrap: "wrap", marginTop: 24 }}>
                  <Link href="/contact" className="btn btn--primary btn--compact">
                    Get a Similar Quote <ArrowUpRight size={16} />
                  </Link>
                  <a
                    href={whatsappLink(active.service)}
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn--ghost btn--compact"
                  >
                    <MessageCircle size={16} /> WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
