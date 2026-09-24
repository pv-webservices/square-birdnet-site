import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, MessageCircle } from "lucide-react";
import { videos } from "@/data/videos";
import { whatsappLink } from "@/data/site";
import CtaBand from "@/components/ui/CtaBand";
import PageHero from "@/components/ui/PageHero";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import VideoLibrary from "@/components/videos/VideoLibrary";

export const metadata: Metadata = {
  title: "Videos — Installations on Site",
  description:
    "Watch real SQUARE bird netting installations filmed on site across Gujarat — Morbi Eden Garden, full building facades and industrial factory sheds.",
  alternates: { canonical: "/videos" },
};

export default function Page() {
  return (
    <main>
      <PageHero
        eyebrow="Videos"
        title="See the work, not just the claims."
        lead="Footage from our own sites — Morbi Eden Garden, a full building facade, a residential block and a working factory shed."
        image="/images/services/bird-netting-commercial.webp"
        imageAlt="Industrial shed interior with large-span bird netting"
        crumbs={[{ label: "Videos" }]}
        actions={
          <>
            <Link href="/contact" className="btn btn--primary btn--large">
              Get Free Site Visit <ArrowUpRight size={17} />
            </Link>
            <a href={whatsappLink()} target="_blank" rel="noreferrer" className="btn btn--light btn--large">
              <MessageCircle size={18} /> Chat on WhatsApp
            </a>
          </>
        }
      />

      <section className="section">
        <div className="container">
          <SectionHeading
            eyebrow="Video library"
            title="Installations in progress"
            body="Videos load only when you press play, so the page stays quick on mobile data."
          />
          <VideoLibrary />
        </div>
      </section>

      {/* Written context for each clip */}
      <section className="section section--soft">
        <div className="container">
          <SectionHeading eyebrow="About these jobs" title="What you are looking at" />
          <div className="feature-grid feature-grid--2">
            {videos.map((video, i) => (
              <Reveal key={video.slug} delay={i * 90}>
                <article className="service-row" style={{ gridTemplateColumns: "180px 1fr" }}>
                  <div className="service-row__media" style={{ minHeight: 220 }}>
                    <Image
                      src={video.poster}
                      alt={`${video.title} — still frame`}
                      fill
                      loading="lazy"
                      sizes="180px"
                    />
                  </div>
                  <div className="service-row__body" style={{ padding: "28px 30px" }}>
                    <div className="eyebrow">{video.category}</div>
                    <h3 style={{ fontSize: 20 }}>{video.title}</h3>
                    <p style={{ fontSize: 13.5 }}>{video.description}</p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--tight">
        <div className="container">
          <CtaBand
            title="Want your site to look like this?"
            body="Book a free site visit and we will tell you exactly what your property needs."
          />
        </div>
      </section>
    </main>
  );
}
