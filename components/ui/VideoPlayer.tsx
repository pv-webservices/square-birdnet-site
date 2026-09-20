"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import { Play, X, Clock3 } from "lucide-react";
import type { Video } from "@/data/videos";

/**
 * Click-to-play video presentation.
 *
 * Nothing but the poster image loads until the visitor opens a clip, so the
 * client's MP4s never affect first paint. The modal supports native controls,
 * background click and ESC to close, and returns focus on exit.
 */

export function VideoCard({
  video,
  onPlay,
  className = "",
}: {
  video: Video;
  onPlay: (video: Video) => void;
  className?: string;
}) {
  return (
    <button type="button" className={`video-card ${className}`.trim()} onClick={() => onPlay(video)}>
      <Image
        src={video.poster}
        alt={`${video.title} — video thumbnail`}
        fill
        sizes="(max-width: 760px) 50vw, 24vw"
        style={{ position: "absolute", inset: 0 }}
      />
      <span className="video-card__tag">{video.category}</span>
      <span className="video-card__play" aria-hidden="true">
        <Play size={22} fill="currentColor" />
      </span>
      <span className="video-card__info">
        <strong>{video.title}</strong>
        <span>
          <Clock3 size={12} /> {video.duration}
        </span>
      </span>
      <span className="sr-only">Play video: {video.title}</span>
    </button>
  );
}

export function VideoModal({ video, onClose }: { video: Video | null; onClose: () => void }) {
  const handleKey = useCallback(
    (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    },
    [onClose],
  );

  useEffect(() => {
    if (!video) return;
    document.addEventListener("keydown", handleKey);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKey);
      document.body.style.overflow = previousOverflow;
    };
  }, [video, handleKey]);

  if (!video) return null;

  return (
    <div
      className="video-modal"
      role="dialog"
      aria-modal="true"
      aria-label={video.title}
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="video-modal__panel">
        <button type="button" className="video-modal__close" onClick={onClose} aria-label="Close video">
          <X size={20} />
        </button>
        {/* eslint-disable-next-line jsx-a11y/media-has-caption */}
        <video src={video.src} poster={video.poster} controls autoPlay playsInline preload="metadata" />
        <p className="video-modal__caption">
          <strong>{video.title}</strong>
          {video.description}
        </p>
      </div>
    </div>
  );
}

/** Convenience hook so pages can share one modal across many cards. */
export function useVideoModal() {
  const [active, setActive] = useState<Video | null>(null);
  return {
    active,
    open: (video: Video) => setActive(video),
    close: () => setActive(null),
  };
}
