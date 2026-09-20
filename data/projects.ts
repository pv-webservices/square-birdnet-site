/**
 * Project gallery. Images are real client installation photographs.
 *
 * TODO(client): confirm the location and property details on each entry —
 * the categories and imagery are correct, the narrative copy is indicative.
 */

export type ProjectCategory =
  | "Bird Net"
  | "Invisible Grill"
  | "Bird Spike"
  | "Safety Net"
  | "Commercial";

export type Project = {
  id: string;
  title: string;
  service: string;
  category: ProjectCategory;
  segment: "Residential" | "Commercial";
  location: string;
  propertyType: string;
  challenge: string;
  solution: string;
  image: string;
  alt: string;
};

export const projectFilters = [
  "All",
  "Bird Net",
  "Invisible Grill",
  "Bird Spike",
  "Safety Net",
  "Commercial",
] as const;

export const projects: Project[] = [
  {
    id: "p01",
    title: "Residential Balcony",
    service: "Balcony Bird Netting",
    category: "Bird Net",
    segment: "Residential",
    location: "Gurugram",
    propertyType: "Apartment balcony",
    challenge:
      "A covered balcony with a wooden soffit was being used by pigeons for nesting, leaving the seating area unusable.",
    solution:
      "A transparent net was framed to the full opening and tensioned along the soffit line so the timber finish stays visible.",
    image: "/images/projects/project-01.webp",
    alt: "Bird netting fitted across a covered residential balcony with a timber ceiling",
  },
  {
    id: "p02",
    title: "High-Rise Apartment",
    service: "Building Bird Netting",
    category: "Bird Net",
    segment: "Residential",
    location: "Noida",
    propertyType: "High-rise tower",
    challenge:
      "Multiple floors of an apartment tower had recurring bird activity across balconies and service openings.",
    solution:
      "Netting was installed floor by floor to a consistent line so the facade reads uniformly from the street.",
    image: "/images/projects/project-02.webp",
    alt: "Multi-storey apartment building with bird netting fitted across its balconies",
  },
  {
    id: "p03",
    title: "Independent House",
    service: "Balcony Safety Net",
    category: "Safety Net",
    segment: "Residential",
    location: "Delhi",
    propertyType: "Independent house",
    challenge:
      "An open first-floor balcony with a low railing needed protection for young children without closing in the space.",
    solution:
      "A close-knit safety mesh was anchored to the slab and railing, keeping the balcony bright and fully usable.",
    image: "/images/projects/project-03.webp",
    alt: "Safety netting fitted to the balcony railing of an independent house",
  },
  {
    id: "p04",
    title: "Balcony Enclosure",
    service: "Invisible Grill",
    category: "Invisible Grill",
    segment: "Residential",
    location: "Dwarka",
    propertyType: "Apartment balcony",
    challenge:
      "The family wanted child safety on a balcony they use every evening, without a welded grill blocking the greenery.",
    solution:
      "Vertical stainless cables were run at close spacing so the planting and the view stay completely visible.",
    image: "/images/projects/project-04.webp",
    alt: "Invisible grill cables running vertically across a balcony overlooking greenery",
  },
  {
    id: "p05",
    title: "Terrace Sit-Out",
    service: "Terrace Bird Netting",
    category: "Bird Net",
    segment: "Residential",
    location: "Greater Noida",
    propertyType: "Terrace",
    challenge:
      "An open terrace overlooking green land attracted birds daily, making the sit-out impossible to keep clean.",
    solution:
      "The full terrace span was netted between the parapet and the beam line with a tensioned perimeter cable.",
    image: "/images/projects/project-05.webp",
    alt: "Terrace sit-out protected by bird netting with an open landscape view",
  },
  {
    id: "p06",
    title: "Garden-Facing Balcony",
    service: "Invisible Grill",
    category: "Invisible Grill",
    segment: "Residential",
    location: "South Delhi",
    propertyType: "Apartment balcony",
    challenge:
      "A ground-floor balcony facing a garden needed a barrier that would not interrupt the view from inside the living room.",
    solution:
      "Slim cables were tensioned from slab to slab, retaining the full garden outlook from every seat in the room.",
    image: "/images/projects/project-06.webp",
    alt: "Invisible grill installed on a garden-facing balcony",
  },
  {
    id: "p07",
    title: "Corner Balcony",
    service: "Balcony Bird Netting",
    category: "Bird Net",
    segment: "Residential",
    location: "Ghaziabad",
    propertyType: "Apartment balcony",
    challenge:
      "A wide corner balcony with two open faces was a favourite perching spot for pigeons throughout the day.",
    solution:
      "Both faces were netted to a single continuous perimeter so there was no gap left at the corner return.",
    image: "/images/projects/project-07.webp",
    alt: "Corner balcony with bird netting across two open faces",
  },
  {
    id: "p08",
    title: "Window Protection",
    service: "Window Bird Netting",
    category: "Bird Net",
    segment: "Residential",
    location: "Rohini",
    propertyType: "Apartment window",
    challenge:
      "Birds were entering through a bedroom window that had to stay open for ventilation through the day.",
    solution:
      "A fine mesh was framed to the window reveal so it can stay open without letting anything in.",
    image: "/images/projects/project-08.webp",
    alt: "Fine bird netting framed across an apartment window opening",
  },
  {
    id: "p09",
    title: "Parapet & Ledge Line",
    service: "Bird Spikes",
    category: "Bird Spike",
    segment: "Residential",
    location: "Faridabad",
    propertyType: "Terrace parapet",
    challenge:
      "Pigeons were roosting on a narrow parapet edge that was far too slim to frame a net across.",
    solution:
      "Stainless spike strips were fixed in a continuous run along the parapet, including both corner returns.",
    image: "/images/projects/project-09.webp",
    alt: "Terrace parapet edge protected against bird perching",
  },
  {
    id: "p10",
    title: "Evening City View",
    service: "Balcony Bird Netting",
    category: "Bird Net",
    segment: "Residential",
    location: "Noida",
    propertyType: "High-rise balcony",
    challenge:
      "The owners wanted bird protection that would not interfere with the evening skyline view they bought the flat for.",
    solution:
      "A transparent mesh at high tension keeps the net visually quiet against the night sky and city lights.",
    image: "/images/projects/project-10.webp",
    alt: "High-rise balcony netting with an evening city skyline behind",
  },
  {
    id: "p11",
    title: "Industrial Shed",
    service: "Commercial Bird Netting",
    category: "Commercial",
    segment: "Commercial",
    location: "Delhi NCR",
    propertyType: "Factory shed",
    challenge:
      "Birds were roosting in the roof trusses of a working shed, contaminating stored material below.",
    solution:
      "A large-span net was run under the truss line in phases so production continued through the installation.",
    image: "/images/projects/project-11.webp",
    alt: "Large-span bird netting under the roof trusses of an industrial shed",
  },
  {
    id: "p12",
    title: "Society Common Area",
    service: "Bird Netting",
    category: "Commercial",
    segment: "Commercial",
    location: "Gurugram",
    propertyType: "Apartment society",
    challenge:
      "Shared corridors and service openings across a society block needed one consistent treatment.",
    solution:
      "A single specification was applied across every opening so the result is uniform and easy to maintain.",
    image: "/images/projects/project-12.webp",
    alt: "Bird netting across the shared service openings of an apartment society",
  },
];
