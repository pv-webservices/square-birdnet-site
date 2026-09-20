import { CheckCircle2, ChevronRight, Layers3, Ruler, Wrench } from "lucide-react";
import { processSteps } from "@/data/site";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";

const STEP_ICONS = [Ruler, Layers3, Wrench, CheckCircle2];

export default function Process() {
  return (
    <section className="section">
      <div className="container">
        <SectionHeading
          eyebrow="Our process"
          title="A simple process for a safer tomorrow"
          body="Four clear steps from first call to final handover — no guesswork, no surprises."
        />
        <Reveal className="process-grid">
          {processSteps.map((step, i) => {
            const IconComponent = STEP_ICONS[i] ?? CheckCircle2;
            return (
              <div className="process-step" key={step.n}>
                <div className="process-step__icon" aria-hidden="true">
                  <IconComponent size={22} />
                </div>
                <span className="process-step__n">{step.n}</span>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
                {i < processSteps.length - 1 ? (
                  <ChevronRight className="process-arrow" size={22} aria-hidden="true" />
                ) : null}
              </div>
            );
          })}
        </Reveal>
      </div>
    </section>
  );
}
