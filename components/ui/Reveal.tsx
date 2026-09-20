"use client";

import { useEffect, useRef, useState, type ElementType, type ReactNode } from "react";

type Props = {
  children: ReactNode;
  /** Element to render. Defaults to a div so it stays layout-neutral. */
  as?: ElementType;
  className?: string;
  /** Stagger in milliseconds. */
  delay?: number;
  variant?: "up" | "left" | "right" | "zoom";
  /** Fraction of the element that must be visible before revealing. */
  threshold?: number;
  style?: React.CSSProperties;
};

/**
 * Reveals its children once they scroll into view. Falls back to visible
 * immediately when IntersectionObserver is unavailable, and the reduced-motion
 * media query in globals.css neutralises the transform for users who ask for it.
 */
export default function Reveal({
  children,
  as: Tag = "div",
  className = "",
  delay = 0,
  variant = "up",
  threshold = 0.12,
  style,
}: Props) {
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    if (typeof IntersectionObserver === "undefined") {
      setVisible(true);
      return;
    }
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.unobserve(entry.target);
          }
        }
      },
      { threshold, rootMargin: "0px 0px -60px 0px" },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, [threshold]);

  const variantClass = variant === "up" ? "" : ` reveal--${variant}`;

  return (
    <Tag
      ref={ref}
      className={`reveal${variantClass} ${visible ? "is-visible" : ""} ${className}`.trim()}
      style={{ ...(delay ? ({ "--reveal-delay": `${delay}ms` } as React.CSSProperties) : {}), ...style }}
    >
      {children}
    </Tag>
  );
}
