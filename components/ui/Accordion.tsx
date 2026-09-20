"use client";

import { useId, useState } from "react";
import { Plus } from "lucide-react";

type Props = {
  question: string;
  answer: string;
  /** Open on first paint — used for the first item of a group. */
  defaultOpen?: boolean;
};

/**
 * Accessible single FAQ disclosure. The panel animates via a
 * grid-template-rows transition so it works with content of any height.
 */
export function AccordionItem({ question, answer, defaultOpen = false }: Props) {
  const [open, setOpen] = useState(defaultOpen);
  const id = useId();

  return (
    <div className={`faq-item ${open ? "is-open" : ""}`}>
      <h3 style={{ margin: 0 }}>
        <button
          type="button"
          className="faq-item__trigger"
          aria-expanded={open}
          aria-controls={`${id}-panel`}
          id={`${id}-trigger`}
          onClick={() => setOpen((v) => !v)}
        >
          {question}
          <span className="faq-item__icon" aria-hidden="true">
            <Plus size={15} />
          </span>
        </button>
      </h3>
      <div className="faq-item__panel" id={`${id}-panel`} role="region" aria-labelledby={`${id}-trigger`}>
        <div>
          <p>{answer}</p>
        </div>
      </div>
    </div>
  );
}

export default function Accordion({
  items,
  openFirst = false,
}: {
  items: { q: string; a: string }[];
  openFirst?: boolean;
}) {
  return (
    <div className="faq-grid">
      {items.map((item, i) => (
        <AccordionItem key={item.q} question={item.q} answer={item.a} defaultOpen={openFirst && i === 0} />
      ))}
    </div>
  );
}
