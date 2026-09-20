"use client";

import Image from "next/image";
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

type Props = {
  before: string;
  after: string;
  beforeAlt: string;
  afterAlt: string;
  beforeLabel?: string;
  afterLabel?: string;
};

/**
 * Draggable before/after comparison.
 *
 * A visually hidden range input drives the clip, which gives keyboard control
 * and screen-reader semantics for free while pointer drag still feels native.
 */
export default function BeforeAfter({
  before,
  after,
  beforeAlt,
  afterAlt,
  beforeLabel = "Before",
  afterLabel = "After",
}: Props) {
  const [position, setPosition] = useState(52);

  return (
    <div className="compare-slider">
      <Image src={before} alt={beforeAlt} fill sizes="(max-width: 1040px) 100vw, 50vw" style={{ position: "absolute", inset: 0 }} />

      <div className="compare-slider__after" style={{ clipPath: `inset(0 0 0 ${position}%)` }}>
        <Image src={after} alt={afterAlt} fill sizes="(max-width: 1040px) 100vw, 50vw" style={{ position: "absolute", inset: 0 }} />
      </div>

      <span className="compare-slider__tag compare-slider__tag--before">{beforeLabel}</span>
      <span className="compare-slider__tag compare-slider__tag--after">{afterLabel}</span>

      <div className="compare-slider__handle" style={{ left: `${position}%` }} aria-hidden="true">
        <span className="compare-slider__knob">
          <ChevronLeft size={15} />
          <ChevronRight size={15} />
        </span>
      </div>

      <input
        className="compare-slider__range"
        type="range"
        min={0}
        max={100}
        step={0.5}
        value={position}
        onChange={(e) => setPosition(Number(e.target.value))}
        aria-label={`Comparison slider: drag to reveal the ${afterLabel.toLowerCase()} image`}
        aria-valuetext={`${Math.round(position)}% ${afterLabel.toLowerCase()}`}
      />
    </div>
  );
}
