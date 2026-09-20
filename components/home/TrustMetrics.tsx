import { BadgeCheck, CalendarCheck, Layers3, ShieldCheck, UsersRound } from "lucide-react";
import { metrics } from "@/data/site";
import CountUp from "@/components/ui/CountUp";
import Reveal from "@/components/ui/Reveal";

const ICONS = [CalendarCheck, Layers3, UsersRound, ShieldCheck, BadgeCheck];

export default function TrustMetrics() {
  return (
    <section className="metrics-strip" aria-label="Company at a glance">
      <div className="container">
        <Reveal className="metrics-grid" variant="zoom">
          {metrics.map((metric, i) => {
            const IconComponent = ICONS[i] ?? ShieldCheck;
            return (
              <div className="metric" key={metric.label}>
                <span className="metric__icon" aria-hidden="true">
                  <IconComponent size={21} />
                </span>
                <div>
                  <strong>
                    {metric.value === null ? (
                      metric.display
                    ) : (
                      <CountUp to={metric.value} suffix={metric.suffix} />
                    )}
                  </strong>
                  <span>{metric.label}</span>
                </div>
              </div>
            );
          })}
        </Reveal>
      </div>
    </section>
  );
}
