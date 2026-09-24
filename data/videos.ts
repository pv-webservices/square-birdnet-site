/**
 * Client-supplied installation footage.
 *
 * Only real client videos are listed here. Each entry carries a poster frame
 * lifted from the video itself, so nothing is downloaded until the visitor
 * actually presses play.
 */

export type Video = {
  slug: string;
  title: string;
  description: string;
  category: "Bird Netting" | "Industrial";
  src: string;
  poster: string;
  duration: string;
  orientation: "portrait" | "landscape";
};

export const videos: Video[] = [
  {
    slug: "morbi-eden-garden",
    title: "Morbi Eden Garden — Balcony Bird Netting",
    description:
      "Balcony bird netting across the residential towers of Eden Garden, Morbi. The view over the gardens stays open while pigeons stay out.",
    category: "Bird Netting",
    src: "/videos/morbi-eden-garden.mp4",
    poster: "/images/videos/morbi-eden-garden.webp",
    duration: "0:15",
    orientation: "portrait",
  },
  {
    slug: "industrial-factory-netting",
    title: "Industrial Factory Bird Netting",
    description:
      "A large-span net run under the roof and along the side walls of a working factory shed, with fittings anchored to the steel structure.",
    category: "Industrial",
    src: "/videos/industrial-factory-netting.mp4",
    poster: "/images/videos/industrial-factory-netting.webp",
    duration: "0:20",
    orientation: "portrait",
  },
  {
    slug: "building-facade-netting",
    title: "Full Building Facade Netting",
    description:
      "One continuous net across the full facade of a tall building, so birds have nowhere left to land or nest on any floor.",
    category: "Bird Netting",
    src: "/videos/building-facade-netting.mp4",
    poster: "/images/videos/building-facade-netting.webp",
    duration: "0:15",
    orientation: "portrait",
  },
  {
    slug: "residential-netting",
    title: "Residential Building Bird Netting",
    description:
      "Netting fitted across the balconies and window openings of a residential block, floor by floor, to a single consistent line.",
    category: "Bird Netting",
    src: "/videos/services video-1.mp4",
    poster: "/images/videos/residential-netting.webp",
    duration: "0:15",
    orientation: "portrait",
  },
];

export const videoBySlug = (slug: string) => videos.find((v) => v.slug === slug);

/** The three clips featured in the homepage video showcase. */
export const homeVideos: Video[] = ["morbi-eden-garden", "industrial-factory-netting", "building-facade-netting"]
  .map(videoBySlug)
  .filter((video): video is Video => Boolean(video));

export const videoCategories = ["All", "Bird Netting", "Industrial"] as const;
