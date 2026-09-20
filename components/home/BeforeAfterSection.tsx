import { Bird, HeartHandshake, Sparkles, SprayCan } from "lucide-react";
import BeforeAfter from "@/components/ui/BeforeAfter";
import Reveal from "@/components/ui/Reveal";

const BENEFITS = [
  { Icon: SprayCan, label: "Cleaner Spaces" },
  { Icon: Bird, label: "No Bird Nuisance" },
  { Icon: Sparkles, label: "Hygienic Environment" },
  { Icon: HeartHandshake, label: "Humane Solution" },
] as const;

export default function BeforeAfterSection() {
  return (
    <section className="section section--soft">
      <div className="container before-after-grid">
        <Reveal className="before-after-copy" variant="left">
          <div className="eyebrow">The difference</div>
          <h2>From a bird-prone space to a peaceful home</h2>
          <p>
            Keep pigeons and other birds out, maintain hygiene and enjoy a cleaner, healthier balcony —
            humanely and effectively. Drag the slider to see the change.
          </p>
        </Reveal>

        <Reveal variant="zoom" delay={100}>
          <BeforeAfter
            before="/images/compare/before-birds.webp"
            after="/images/compare/after-clean.webp"
            beforeAlt="Balcony before treatment, with pigeons perched on the railing and debris on the floor"
            afterAlt="The same style of balcony after bird netting, clean and planted"
          />
        </Reveal>

        <Reveal className="benefit-rail" variant="right" delay={160}>
          {BENEFITS.map(({ Icon, label }) => (
            <span key={label}>
              <Icon size={19} aria-hidden="true" /> {label}
            </span>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
