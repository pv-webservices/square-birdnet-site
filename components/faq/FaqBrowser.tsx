"use client";

import { useMemo, useState } from "react";
import { Search } from "lucide-react";
import { faqGroups } from "@/data/faqs";
import Accordion from "@/components/ui/Accordion";
import Reveal from "@/components/ui/Reveal";

const slug = (value: string) => value.toLowerCase().replace(/[^a-z0-9]+/g, "-");

/** Categorised FAQ list with a client-side search filter. */
export default function FaqBrowser() {
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    const term = query.trim().toLowerCase();
    if (!term) return faqGroups;
    return faqGroups
      .map((group) => ({
        ...group,
        items: group.items.filter(
          (item) => item.q.toLowerCase().includes(term) || item.a.toLowerCase().includes(term),
        ),
      }))
      .filter((group) => group.items.length > 0);
  }, [query]);

  const matches = filtered.reduce((total, group) => total + group.items.length, 0);

  return (
    <div className="faq-layout">
      <nav className="faq-toc" aria-label="FAQ categories">
        {faqGroups.map((group) => (
          <a key={group.category} href={`#${slug(group.category)}`}>
            {group.category}
          </a>
        ))}
      </nav>

      <div>
        <div className="faq-search">
          <Search size={18} aria-hidden="true" />
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search the FAQs — try 'warranty' or 'children'"
            aria-label="Search frequently asked questions"
          />
        </div>
        <p className="sr-only" role="status" aria-live="polite">
          {query.trim() ? `${matches} matching question${matches === 1 ? "" : "s"}` : ""}
        </p>

        {filtered.length === 0 ? (
          <div className="faq-empty">
            <p className="faq-empty__title">No matching questions</p>
            <p style={{ margin: 0 }}>
              Try a different word, or call us — we would rather answer it directly.
            </p>
          </div>
        ) : (
          filtered.map((group) => (
            <Reveal className="faq-group" key={group.category}>
              <section id={slug(group.category)} aria-labelledby={`${slug(group.category)}-heading`}>
                <h2 id={`${slug(group.category)}-heading`}>{group.category}</h2>
                <Accordion items={group.items} openFirst={Boolean(query)} />
              </section>
            </Reveal>
          ))
        )}
      </div>
    </div>
  );
}
