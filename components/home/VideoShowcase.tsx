"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { videos } from "@/data/videos";
import { VideoCard, VideoModal, useVideoModal } from "@/components/ui/VideoPlayer";
import Reveal from "@/components/ui/Reveal";

export default function VideoShowcase() {
  const modal = useVideoModal();

  return (
    <section className="section--navy video-section" id="videos">
      <div className="container video-grid">
        <Reveal className="video-copy" variant="left">
          <div className="eyebrow eyebrow--light">Video showcase</div>
          <h2>See our work in action</h2>
          <p>Real installations. Real happy customers. Filmed on our own sites across Delhi NCR.</p>
          <div style={{ marginTop: 26 }}>
            <Link href="/videos" className="btn btn--light">
              Watch More Videos <ArrowRight size={17} />
            </Link>
          </div>
          <p className="video-script">
            Real People
            <br />
            Real Results
          </p>
        </Reveal>

        <Reveal className="video-rail" variant="right" delay={100}>
          {videos.map((video) => (
            <VideoCard key={video.slug} video={video} onPlay={modal.open} />
          ))}
        </Reveal>
      </div>

      <VideoModal video={modal.active} onClose={modal.close} />
    </section>
  );
}
