import Image from "next/image";
import { BadgeCheck } from "lucide-react";
import { whyChoose } from "@/data/site";
import Icon from "@/components/ui/Icon";
import Reveal from "@/components/ui/Reveal";

export default function WhyChooseUs() {
  return (
    <section className="section">
      <div className="container why-grid">
        <div className="why-media">
          <Image
            src="/images/team/installation-01.webp"
            alt="A SQUARE installer fitting bird netting along an apartment balcony"
            fill
            loading="lazy"
            sizes="(max-width: 1040px) 100vw, 43vw"
          />
          <div className="why-badge">
            <BadgeCheck size={22} aria-hidden="true" />
            <div>
              <strong>Trusted by 1,000+ homeowners</strong>
              <span>Across Delhi NCR</span>
            </div>
          </div>
        </div>

        <div className="why-copy">
          <Reveal>
            <div className="eyebrow">Why choose SQUARE</div>
            <h2>Safe. Clean. Beautiful.</h2>
            <p>More than just protection — we deliver peace of mind.</p>
          </Reveal>

          <div className="why-list">
            {whyChoose.map((item, i) => (
              <Reveal className="why-item" key={item.title} delay={i * 70}>
                <span className="why-item__icon" aria-hidden="true">
                  <Icon name={item.icon} size={20} />
                </span>
                <div>
                  <h4>{item.title}</h4>
                  <p>{item.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
