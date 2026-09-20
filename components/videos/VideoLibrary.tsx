"use client";

import { useMemo, useState } from "react";
import { videoCategories, videos } from "@/data/videos";
import { VideoCard, VideoModal, useVideoModal } from "@/components/ui/VideoPlayer";
import Reveal from "@/components/ui/Reveal";

/**
 * Filterable video library. Posters are static images — an MP4 is only
 * requested once the visitor opens a clip.
 */
export default function VideoLibrary() {
  const [category, setCategory] = useState<string>("All");
  const modal = useVideoModal();

  const visible = useMemo(
    () => (category === "All" ? videos : videos.filter((v) => v.category === category)),
    [category],
  );

  return (
    <>
      <div className="filter-row" role="group" aria-label="Filter videos by category">
        {videoCategories.map((option) => (
          <button
            key={option}
            type="button"
            className={category === option ? "is-active" : ""}
            aria-pressed={category === option}
            onClick={() => setCategory(option)}
          >
            {option}
          </button>
        ))}
      </div>

      <div className="videos-grid">
        {visible.map((video, i) => (
          <Reveal key={video.slug} delay={i * 80}>
            <VideoCard video={video} onPlay={modal.open} />
          </Reveal>
        ))}
      </div>

      {visible.length === 0 ? (
        <div className="faq-empty">
          <p style={{ margin: 0 }}>No videos in this category yet.</p>
        </div>
      ) : null}

      <VideoModal video={modal.active} onClose={modal.close} />
    </>
  );
}
