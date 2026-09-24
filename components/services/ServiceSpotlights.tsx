"use client";

import Image from "next/image";
import { CheckCircle2 } from "lucide-react";
import type { ServiceSpotlight } from "@/data/services";
import { videoBySlug } from "@/data/videos";
import { VideoCard, VideoModal, useVideoModal } from "@/components/ui/VideoPlayer";
import Reveal from "@/components/ui/Reveal";

/**
 * Alternating photo + video rows for the focused parts of a service (society,
 * industrial, full-facade netting). One modal is shared across every row.
 */
export default function ServiceSpotlights({ spotlights }: { spotlights: ServiceSpotlight[] }) {
  const modal = useVideoModal();

  return (
    <>
      <div className="spotlight-list">
        {spotlights.map((spotlight) => {
          const video = videoBySlug(spotlight.videoSlug);
          return (
            <article className="spotlight" id={spotlight.id} key={spotlight.id}>
              <Reveal className="spotlight__copy">
                <div className="eyebrow">{spotlight.eyebrow}</div>
                <h3>{spotlight.title}</h3>
                <p>{spotlight.text}</p>
                <ul className="spotlight__points">
                  {spotlight.points.map((point) => (
                    <li key={point}>
                      <CheckCircle2 size={16} aria-hidden="true" />
                      {point}
                    </li>
                  ))}
                </ul>
              </Reveal>

              <Reveal className="spotlight__media" delay={120}>
                <div className="spotlight__photo">
                  <Image
                    src={spotlight.image}
                    alt={spotlight.imageAlt}
                    fill
                    loading="lazy"
                    sizes="(max-width: 760px) 46vw, 24vw"
                  />
                </div>
                {video ? <VideoCard video={video} onPlay={modal.open} /> : null}
              </Reveal>
            </article>
          );
        })}
      </div>
      <VideoModal video={modal.active} onClose={modal.close} />
    </>
  );
}
