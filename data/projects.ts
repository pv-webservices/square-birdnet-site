/**
 * Project gallery. Images are real client installation photographs and still
 * frames from the client's site videos.
 *
 * TODO(client): confirm the location and property details on each entry —
 * the categories and imagery are correct, the narrative copy is indicative.
 */

export type ProjectCategory = "Bird Net" | "Invisible Grill" | "Industrial";

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

export const projectFilters = ["All", "Bird Net", "Invisible Grill", "Industrial"] as const;

export const projects: Project[] = [
  {
    id: "p01",
    title: "Covered Balcony",
    service: "Invisible Grill",
    category: "Invisible Grill",
    segment: "Residential",
    location: "Rajkot",
    propertyType: "Apartment balcony",
    challenge:
      "A family with a young child wanted the balcony made safe without a welded grill hiding the timber-finished wall and the street view.",
    solution:
      "Vertical stainless cables with a horizontal cross-cable were tensioned slab to slab, keeping the balcony open and the finish visible.",
    image: "/images/projects/project-01.webp",
    alt: "Invisible grill cables with stainless ferrules across a covered residential balcony",
  },
  {
    id: "p13",
    title: "Morbi Eden Garden",
    service: "Society Bird Netting",
    category: "Bird Net",
    segment: "Residential",
    location: "Morbi",
    propertyType: "Residential society",
    challenge:
      "Pigeons were nesting on the upper-floor balconies across the towers, and residents did not want to lose the view over the gardens.",
    solution:
      "Every balcony was netted to one consistent line, so the towers read uniformly from outside and the garden view stays open.",
    image: "/images/services/society-balcony-netting.webp",
    alt: "Balcony bird net at Eden Garden society in Morbi with the neighbouring towers behind",
  },
  {
    id: "p14",
    title: "Factory Shed",
    service: "Industrial Bird Netting",
    category: "Industrial",
    segment: "Commercial",
    location: "Gujarat",
    propertyType: "Factory shed",
    challenge:
      "Birds were roosting in the roof structure of a working factory, fouling the floor and the equipment below.",
    solution:
      "A large-span net was run under the roof sheeting and along the side walls, with fittings anchored to the steel structure.",
    image: "/images/services/factory-roof-netting.webp",
    alt: "Large-span bird net installed under the roof of a factory shed",
  },
  {
    id: "p02",
    title: "High-Rise Apartment",
    service: "Invisible Grill",
    category: "Invisible Grill",
    segment: "Residential",
    location: "Morbi",
    propertyType: "High-rise tower",
    challenge:
      "An upper-floor balcony overlooking the neighbouring towers needed a safe barrier the society would accept on its facade.",
    solution:
      "Slim stainless cables were fitted across the full opening, keeping the facade uniform and the balcony open.",
    image: "/images/projects/project-02.webp",
    alt: "Invisible grill cables across an apartment balcony facing neighbouring towers",
  },
  {
    id: "p03",
    title: "Apartment Balcony",
    service: "Balcony Bird Netting",
    category: "Bird Net",
    segment: "Residential",
    location: "Gandhinagar",
    propertyType: "Apartment balcony",
    challenge:
      "Pigeons were landing on the railing and nesting in the corners of a long apartment balcony.",
    solution:
      "A transparent net was framed from the ceiling to the railing line and tensioned along its full length.",
    image: "/images/projects/project-03.webp",
    alt: "Bird netting fitted from the ceiling to the railing of an apartment balcony",
  },
  {
    id: "p15",
    title: "Full Facade Coverage",
    service: "Building Bird Netting",
    category: "Bird Net",
    segment: "Commercial",
    location: "Gujarat",
    propertyType: "High-rise building",
    challenge:
      "Birds were landing and nesting across an entire elevation, where netting individual balconies would never have been enough.",
    solution:
      "The whole facade was covered in one continuous, tensioned net so there is nowhere left for birds to land.",
    image: "/images/services/building-facade-netting.webp",
    alt: "Bird net covering the full facade of a tall building",
  },
  {
    id: "p04",
    title: "Balcony Enclosure",
    service: "Invisible Grill",
    category: "Invisible Grill",
    segment: "Residential",
    location: "Jamnagar",
    propertyType: "Apartment balcony",
    challenge:
      "The family wanted child safety on a balcony they use every evening, without a welded grill blocking the greenery.",
    solution:
      "Vertical stainless cables were run at close spacing so the planting and the view stay completely visible.",
    image: "/images/projects/project-04.webp",
    alt: "Invisible grill cables running vertically across a balcony overlooking greenery",
  },
  {
    id: "p09",
    title: "Open Balcony",
    service: "Balcony Bird Netting",
    category: "Bird Net",
    segment: "Residential",
    location: "Upleta",
    propertyType: "Apartment balcony",
    challenge:
      "An open balcony facing empty land attracted pigeons every morning, leaving droppings across the floor.",
    solution:
      "A tensioned net was fixed around the full opening, keeping the balcony bright and the open view intact.",
    image: "/images/projects/project-09.webp",
    alt: "Bird net installed across an open apartment balcony",
  },
  {
    id: "p05",
    title: "Balcony with Planting",
    service: "Invisible Grill",
    category: "Invisible Grill",
    segment: "Residential",
    location: "Bhavnagar",
    propertyType: "Apartment balcony",
    challenge:
      "A balcony with planters and a low railing needed a barrier for a toddler, without closing in the view over the open land.",
    solution:
      "Cables were run from slab to railing at close spacing, leaving the planters and the outlook untouched.",
    image: "/images/projects/project-05.webp",
    alt: "Invisible grill on an apartment balcony with a plant pot and open land beyond",
  },
  {
    id: "p11",
    title: "Industrial Shed",
    service: "Industrial Bird Netting",
    category: "Industrial",
    segment: "Commercial",
    location: "Morbi",
    propertyType: "Warehouse",
    challenge:
      "Birds were roosting in the roof trusses of a working shed, contaminating stored material below.",
    solution:
      "A large-span net was run under the truss line in phases so work continued through the installation.",
    image: "/images/projects/project-11.webp",
    alt: "Large-span bird netting under the roof trusses of an industrial shed",
  },
  {
    id: "p16",
    title: "Night View Balcony",
    service: "Invisible Grill",
    category: "Invisible Grill",
    segment: "Residential",
    location: "Gujarat",
    propertyType: "Apartment balcony",
    challenge:
      "A long glass-railed balcony needed protection for children and pets without spoiling the evening view.",
    solution:
      "Close-spaced stainless cables were run along the full length, almost disappearing against the night sky.",
    image: "/images/services/invisible-grill-night.webp",
    alt: "Invisible grill along a glass-railed balcony at night",
  },
  {
    id: "p06",
    title: "Corner Balcony",
    service: "Invisible Grill",
    category: "Invisible Grill",
    segment: "Residential",
    location: "Vadodara",
    propertyType: "Apartment balcony",
    challenge:
      "A corner balcony with a solid parapet needed a barrier above it that would not interrupt the view.",
    solution:
      "Slim cables were tensioned from the parapet to the slab above, retaining the outlook from inside the room.",
    image: "/images/projects/project-06.webp",
    alt: "Invisible grill fitted above the parapet of a corner balcony",
  },
  {
    id: "p07",
    title: "Evening City View",
    service: "Invisible Grill",
    category: "Invisible Grill",
    segment: "Residential",
    location: "Junagadh",
    propertyType: "High-rise balcony",
    challenge:
      "The owners wanted balcony safety that would not interfere with the evening skyline they bought the flat for.",
    solution:
      "Stainless cables at even spacing keep the barrier visually quiet against the night sky and city lights.",
    image: "/images/projects/project-07.webp",
    alt: "Invisible grill on a high-rise balcony with the city lights behind",
  },
  {
    id: "p08",
    title: "Long Balcony at Night",
    service: "Invisible Grill",
    category: "Invisible Grill",
    segment: "Residential",
    location: "Gondal",
    propertyType: "Apartment balcony",
    challenge:
      "A long balcony used by the whole family needed one continuous barrier from end to end.",
    solution:
      "Cables were run along the full length to a consistent tension so the run stays perfectly parallel.",
    image: "/images/projects/project-08.webp",
    alt: "Invisible grill along the full length of an apartment balcony at night",
  },
  {
    id: "p10",
    title: "Society Tower View",
    service: "Invisible Grill",
    category: "Invisible Grill",
    segment: "Residential",
    location: "Rajkot",
    propertyType: "High-rise balcony",
    challenge:
      "A balcony overlooking the society courtyard needed child safety without an external grill on the facade.",
    solution:
      "Stainless cables were fitted across the opening, leaving the courtyard view and the facade line unchanged.",
    image: "/images/projects/project-10.webp",
    alt: "Invisible grill on a balcony overlooking a residential society courtyard",
  },
  {
    id: "p12",
    title: "Glass-Railed Balcony",
    service: "Invisible Grill",
    category: "Invisible Grill",
    segment: "Residential",
    location: "Gandhinagar",
    propertyType: "Apartment balcony",
    challenge:
      "A glass railing left a climbable gap above it, which worried a family with young children.",
    solution:
      "Cables were run from the railing to the slab above, closing the gap while the glass stays clear.",
    image: "/images/projects/project-12.webp",
    alt: "Invisible grill above a glass balcony railing overlooking nearby houses",
  },
];
