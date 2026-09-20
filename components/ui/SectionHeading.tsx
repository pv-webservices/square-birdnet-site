import type { ReactNode } from "react";
import Reveal from "@/components/ui/Reveal";

type Props = {
  eyebrow?: string;
  title: ReactNode;
  body?: string;
  action?: ReactNode;
  align?: "left" | "center";
  tone?: "light" | "dark";
};

export function SectionHeading({ eyebrow, title, body, action, align = "left", tone = "light" }: Props) {
  return (
    <Reveal className={`section-heading ${align === "center" ? "section-heading--center" : ""}`.trim()}>
      <div>
        {eyebrow ? <div className={`eyebrow ${tone === "dark" ? "eyebrow--light" : ""}`.trim()}>{eyebrow}</div> : null}
        <h2>{title}</h2>
        {body ? <p>{body}</p> : null}
      </div>
      {action ? <div className="section-heading__action">{action}</div> : null}
    </Reveal>
  );
}

export default SectionHeading;
