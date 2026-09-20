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
  category: "Installation" | "Bird Netting" | "Commercial";
  src: string;
  poster: string;
  duration: string;
  orientation: "portrait" | "landscape";
};

export const videos: Video[] = [
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
  {
    slug: "commercial-netting",
    title: "Industrial Shed Bird Netting",
    description:
      "A large-span net run beneath the roof trusses of a working industrial shed, installed in phases around live operations.",
    category: "Commercial",
    src: "/videos/services video-2.mp4",
    poster: "/images/videos/commercial-netting.webp",
    duration: "0:13",
    orientation: "portrait",
  },
];

export const videoBySlug = (slug: string) => videos.find((v) => v.slug === slug);

export const videoCategories = ["All", "Bird Netting", "Commercial"] as const;
