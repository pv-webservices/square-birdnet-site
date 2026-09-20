"use client";

import type { Video } from "@/data/videos";
import { VideoCard, VideoModal, useVideoModal } from "@/components/ui/VideoPlayer";

/** Single click-to-play clip embedded inside a service page. */
export default function ServiceVideo({ video }: { video: Video }) {
  const modal = useVideoModal();
  return (
    <>
      <div style={{ maxWidth: 320 }}>
        <VideoCard video={video} onPlay={modal.open} />
      </div>
      <VideoModal video={modal.active} onClose={modal.close} />
    </>
  );
}
