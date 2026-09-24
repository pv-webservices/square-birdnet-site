/**
 * Service catalogue. Each entry drives both the services index and the
 * individual /services/<slug> page, so a new service only needs a data entry
 * plus a one-line route file.
 */

export type ServiceFaq = { q: string; a: string };

/**
 * A focused sub-section of a service page — e.g. industrial netting within the
 * bird net service. Each pairs a site photograph with a real client video, and
 * its `id` is an anchor the homepage cards link straight to.
 */
export type ServiceSpotlight = {
  id: string;
  eyebrow: string;
  title: string;
  text: string;
  points: string[];
  image: string;
  imageAlt: string;
  videoSlug: string;
};

export type Service = {
  slug: string;
  name: string;
  cardTitle: string;
  cardSubtitle: string;
  navLabel: string;
  eyebrow: string;
  heroTitle: string;
  heroLead: string;
  image: string;
  heroImage: string;
  galleryImages: string[];
  metaTitle: string;
  metaDescription: string;
  overview: string[];
  problem: { title: string; text: string };
  how: { title: string; text: string }[];
  benefits: { title: string; text: string }[];
  applications: string[];
  bestFor: string;
  materials: string[];
  faqs: ServiceFaq[];
  spotlights?: ServiceSpotlight[];
  videoSlug?: string;
};

export const services: Service[] = [
  {
    slug: "bird-netting",
    name: "Bird Netting",
    cardTitle: "Bird Net Service",
    cardSubtitle: "Humane bird protection for balconies, buildings and factory sheds.",
    navLabel: "Bird Net Service",
    eyebrow: "BIRD NET SERVICE",
    heroTitle: "Cleaner open spaces, without the constant bird nuisance.",
    heroLead:
      "From a single balcony to a full building facade or a factory shed — a tensioned, near-transparent net keeps pigeons out while daylight, airflow and your view stay exactly as they were.",
    image: "/images/services/balcony-bird-net.webp",
    heroImage: "/images/services/bird-netting-residential.webp",
    galleryImages: [
      "/images/services/society-balcony-netting.webp",
      "/images/projects/project-03.webp",
      "/images/services/building-facade-netting.webp",
      "/images/services/factory-roof-netting.webp",
      "/images/services/factory-net-fittings.webp",
      "/images/projects/project-09.webp",
    ],
    metaTitle: "Bird Net Service in Gujarat — Balcony, Building & Industrial",
    metaDescription:
      "Professional bird netting for balconies, windows, full building facades, societies and factory sheds across Gujarat. UV-stabilised mesh, neat fixings and a free site visit.",
    overview: [
      "Bird netting is the most reliable way to keep pigeons and other birds out of an opening without harming them. A tensioned mesh is fixed to the perimeter of the balcony, window, duct, facade or shed so birds simply cannot enter or nest.",
      "Because the mesh is thin and taut, it reads as almost invisible from a few feet away. You keep the light, the breeze and the view — you only lose the birds.",
    ],
    problem: {
      title: "The problem it solves",
      text: "Pigeons nest on unused balconies, air-conditioner ledges, building facades and factory roof trusses. The result is droppings, feathers, nesting material, blocked drains, contaminated stock and spaces nobody wants to use. Cleaning repeatedly does not fix the cause — blocking access does.",
    },
    how: [
      { title: "Perimeter framing", text: "Fixing points are marked around the full opening so the net has a continuous, gap-free boundary." },
      { title: "Mesh selection", text: "Mesh size is chosen for the target bird — a tighter grid for sparrows, a standard grid for pigeons." },
      { title: "Tensioning", text: "The net is drawn tight with steel cable so it stays flat, quiet in wind and visually clean." },
      { title: "Edge sealing", text: "Corners, gaps behind pipes and drain openings are closed off, because birds will find any opening left." },
    ],
    benefits: [
      { title: "Humane bird prevention", text: "Birds are kept out rather than harmed or trapped." },
      { title: "Cleaner spaces", text: "No more droppings, feathers or nesting material to clear each week." },
      { title: "Minimal obstruction", text: "The mesh is thin enough that your view and daylight stay intact." },
      { title: "Durable outdoors", text: "UV-stabilised cord holds its strength through sun, rain and wind." },
      { title: "Any size of opening", text: "Balconies, odd-shaped ducts, full facades and factory spans are all workable." },
      { title: "Low maintenance", text: "An occasional rinse is usually all the net needs." },
    ],
    applications: [
      "Apartment balconies",
      "Windows & French windows",
      "Society & high-rise towers",
      "Full building facades",
      "Factory sheds & warehouses",
      "Open terraces",
      "Duct and shaft areas",
      "Cricket practice nets",
    ],
    bestFor: "You have a pigeon problem — at home, across a building or in a factory — and want it to stop permanently.",
    materials: [
      "UV-stabilised HDPE knotted mesh",
      "Heavy-duty large-span mesh for sheds and facades",
      "Stainless steel perimeter cable and turnbuckles",
      "Corrosion-resistant anchors, hooks and structural fittings",
    ],
    faqs: [
      { q: "Will the net block my view?", a: "The cord is thin and installed under tension, so from inside the room it mostly disappears. You will see it if you stand right against it, which is unavoidable with any physical barrier." },
      { q: "Can I still dry clothes on the balcony?", a: "Yes. The net sits at the outer edge of the balcony, so the usable floor area does not change." },
      { q: "Does the net harm birds?", a: "No. It is a barrier, not a trap. We tension it properly and seal the edges specifically so birds cannot get caught in it." },
      { q: "Do you net full buildings and factory sheds?", a: "Yes. Societies, full building facades, factory roofs and warehouse walls are surveyed first, then netted in planned phases so residents and production are not disturbed." },
      { q: "How long does installation take?", a: "A typical balcony is completed within a few hours. Full buildings, sheds and other large spans are scheduled after measurement." },
      { q: "What colours are available?", a: "Transparent and black are the most common choices. Transparent disappears against the sky; black reads better against a dark facade." },
    ],
    spotlights: [
      {
        id: "society",
        eyebrow: "Societies & high-rises",
        title: "Morbi Eden Garden — balcony netting across the towers",
        text: "Every balcony across the residential towers was netted to one consistent line. Residents keep the open view over the gardens, and pigeons no longer nest on the upper floors.",
        points: [
          "Uniform finish across every floor",
          "View over the gardens stays open",
          "Planned floor by floor with the society",
        ],
        image: "/images/services/society-garden-netting.webp",
        imageAlt: "View over the Eden Garden society in Morbi through a newly installed balcony bird net",
        videoSlug: "morbi-eden-garden",
      },
      {
        id: "industrial",
        eyebrow: "Industrial & factory",
        title: "Factory sheds netted from the roof down",
        text: "Birds roosting in roof trusses contaminate stock and corrode steelwork. We run a large-span net under the roof and along the side walls, anchored to the steel structure, in phases around live production.",
        points: [
          "Roof-level and side-wall coverage",
          "Fittings anchored to the steel structure",
          "Installed around working shifts",
        ],
        image: "/images/services/factory-net-fittings.webp",
        imageAlt: "Bird net and steel fittings installed along the wall of a factory shed",
        videoSlug: "industrial-factory-netting",
      },
      {
        id: "facade",
        eyebrow: "Full building coverage",
        title: "Complete facade netting for tall buildings",
        text: "When birds use an entire elevation, netting single balconies is not enough. The whole facade is covered in one continuous, tensioned net so there is nowhere left to land or nest.",
        points: [
          "One continuous net across the elevation",
          "Reads as a clean, uniform finish from the street",
          "Suited to towers, hostels and office blocks",
        ],
        image: "/images/videos/residential-netting.webp",
        imageAlt: "Bird net fitted across the full height of a residential building",
        videoSlug: "building-facade-netting",
      },
    ],
  },
  {
    slug: "invisible-grill",
    name: "Invisible Grill",
    cardTitle: "Invisible Grill",
    cardSubtitle: "Child and pet safety with a clean, open balcony view.",
    navLabel: "Invisible Grill Installation",
    eyebrow: "INVISIBLE GRILL — CHILD & PET SAFETY",
    heroTitle: "Safety that does not block your beautiful view.",
    heroLead:
      "Slim stainless steel cables tensioned vertically across your balcony give you a real physical barrier for children and pets, while keeping the open, uncluttered look of a modern home.",
    image: "/images/services/invisible-grill-balcony.webp",
    heroImage: "/images/services/invisible-grill-wide.webp",
    galleryImages: [
      "/images/services/invisible-grill-balcony.webp",
      "/images/services/invisible-grill-night.webp",
      "/images/projects/project-02.webp",
      "/images/projects/project-05.webp",
      "/images/projects/project-07.webp",
      "/images/projects/project-12.webp",
    ],
    metaTitle: "Invisible Grill Installation for Child & Pet Safety — Gujarat",
    metaDescription:
      "Invisible grill installation for balconies and windows in Gujarat. Child and pet safety with high-tensile stainless cable, rust-resistant fittings and a free site visit.",
    overview: [
      "An invisible grill replaces the heavy welded MS grill with a run of tensioned stainless steel cables. Each cable is only a few millimetres thick, so at normal viewing distance the balcony reads as open.",
      "It is the solution most high-rise families choose when a society will not allow external grills, or when the view is the reason they bought the home in the first place.",
    ],
    problem: {
      title: "The problem it solves",
      text: "A traditional grill makes a balcony safe and makes it feel like a cage. Leaving it open is not an option with small children or pets. The invisible grill resolves that trade-off: a real barrier that you barely register.",
    },
    how: [
      { title: "Measurement", text: "Opening height, width and the fixing surface are measured, and cable spacing is set for how the balcony is used." },
      { title: "Anchoring", text: "Stainless anchors are drilled into the structural slab and wall — never into loose plaster or tile alone." },
      { title: "Cable run", text: "Each cable is threaded through the anchors and drawn to a consistent tension so the run stays perfectly parallel." },
      { title: "Finishing", text: "Ends are capped, tensioners are concealed and every cable is checked by hand before handover." },
    ],
    benefits: [
      { title: "Unobstructed view", text: "Thin vertical lines instead of a heavy grid — the skyline stays yours." },
      { title: "High tensile strength", text: "Multi-strand stainless cable carries far more load than its thickness suggests." },
      { title: "Rust & weather resistant", text: "Stainless cable and hardware are chosen to stay clean through monsoon and summer." },
      { title: "Ideal for kids & pets", text: "Close vertical spacing prevents climbing and squeezing through." },
      { title: "Society friendly", text: "It keeps the building facade uniform, which most RWAs prefer over external grills." },
      { title: "Long service life", text: "No welding, no painting, no annual rust treatment." },
    ],
    applications: [
      "Homes with children & pets",
      "High-rise apartment balconies",
      "French windows & full-height glazing",
      "Bedroom and kitchen windows",
      "Duplex and penthouse terraces",
      "Stair and mezzanine openings",
      "Villa balconies",
    ],
    bestFor: "You want balcony safety for children or pets without losing the view.",
    materials: [
      "Multi-strand stainless steel cable",
      "Stainless anchors, ferrules and end caps",
      "Aluminium or stainless track sections",
      "Adjustable tensioners for re-tightening",
    ],
    faqs: [
      { q: "Is the invisible grill really invisible?", a: "The cables are intentionally slim and are genuinely hard to see from a few feet away or from outside the building. Standing directly at the balcony edge you will see them — nothing physical is truly invisible." },
      { q: "Is it safe for children?", a: "Cable spacing is the critical factor. For homes with small children we set the spacing tighter so a child cannot pass through or use the cables as a ladder. We confirm the spacing during the site visit." },
      { q: "Is it safe for pets?", a: "Yes. For cats and small dogs we set the cable spacing tighter so they cannot squeeze through or jump between cables. Tell us about your pets at the site visit and we specify accordingly." },
      { q: "Can it rust?", a: "Stainless cable and stainless fittings are specified precisely to resist rust in outdoor conditions. Quality of the hardware matters more than anything else here." },
      { q: "Can the cables loosen over time?", a: "Cables are installed with tensioners so they can be re-tightened if needed. A check during your first service visit covers this." },
      { q: "Will it obstruct cleaning the windows?", a: "No. The cables run vertically with space between them, so the glass stays reachable." },
    ],
  },
  {
    slug: "bird-spikes",
    name: "Bird Spikes",
    cardTitle: "Bird Spikes",
    cardSubtitle: "Professional deterrence for ledges, parapets and building edges.",
    navLabel: "Bird Spike Installation",
    eyebrow: "BIRD SPIKES",
    heroTitle: "Stop birds perching where they cause the most mess.",
    heroLead:
      "Discreet stainless steel spike strips make narrow ledges, parapets and signage edges uncomfortable to land on — so birds move along instead of settling in.",
    image: "/images/services/bird-spikes.webp",
    heroImage: "/images/services/bird-spikes.webp",
    galleryImages: [
      "/images/services/bird-spikes.webp",
      "/images/materials/bird-spikes.webp",
      "/images/hero/commercial-facade.webp",
      "/images/hero/towers-skyline.webp",
    ],
    metaTitle: "Bird Spikes Installation in Gujarat",
    metaDescription:
      "Stainless steel bird spike installation for ledges, parapets, AC units and commercial facades across Gujarat. Humane, discreet and durable.",
    overview: [
      "Bird spikes are the right answer where netting would be impractical — a narrow ledge, the top of a signboard, a parapet edge, the casing of an outdoor AC unit.",
      "The strips are fixed along the landing surface so there is no comfortable place to perch. Birds are not injured; they simply choose somewhere else.",
    ],
    problem: {
      title: "The problem it solves",
      text: "Pigeons return to the same ledge every day, and the droppings stain the facade, corrode metal and block drainage. Cleaning does not change the behaviour. Removing the perch does.",
    },
    how: [
      { title: "Survey the perches", text: "We identify exactly which edges birds actually use — spiking everything is wasteful and looks poor." },
      { title: "Surface preparation", text: "The ledge is cleaned and dried so the fixing bonds properly and the finish stays neat." },
      { title: "Strip fixing", text: "Strips are mechanically fixed or bonded in a continuous line with no gaps for a bird to slip into." },
      { title: "Edge coverage", text: "Corners and returns are covered, since an unprotected corner simply becomes the new perch." },
    ],
    benefits: [
      { title: "Humane deterrent", text: "Blunt-tipped spikes discourage landing without injuring birds." },
      { title: "Visually discreet", text: "From ground level the strips read as a thin line, not a feature." },
      { title: "Works in tight spaces", text: "Ideal where a net cannot be framed or tensioned." },
      { title: "Corrosion resistant", text: "Stainless steel construction survives sun, rain and pollution." },
      { title: "Protects finishes", text: "Prevents the staining and corrosion that droppings cause." },
      { title: "Minimal maintenance", text: "Once fixed correctly, the strips need almost no attention." },
    ],
    applications: [
      "Parapets & building edges",
      "Window and AC ledges",
      "Outdoor AC unit casings",
      "Signboards & hoardings",
      "Commercial facades",
      "Beams, pipes and cable trays",
    ],
    bestFor: "Birds perch and mess on ledges where a net cannot be fitted.",
    materials: [
      "Polished stainless steel spike strips",
      "UV-stable polycarbonate base",
      "Outdoor-grade structural adhesive",
      "Stainless mechanical fixings",
    ],
    faqs: [
      { q: "Do spikes hurt birds?", a: "No. The tips are blunt and the purpose is discomfort, not injury. Birds land, find no stable footing, and move on." },
      { q: "Will spikes be visible from the street?", a: "From ground level they read as a thin line along the edge. On facades we can specify a finish that blends with the surface." },
      { q: "Do spikes work against all birds?", a: "They are most effective against pigeons and similar perching birds. For smaller birds that nest inside cavities, netting is usually the better solution." },
      { q: "Can spikes be fitted on any surface?", a: "Most ledges, parapets and metal casings are suitable. Very narrow or crumbling edges are assessed during the site visit." },
    ],
  },
];

export const serviceBySlug = (slug: string) => services.find((s) => s.slug === slug);

/**
 * Cards shown on the homepage services grid. Every card leads into one of the
 * three services; the bird-net cards deep-link to the matching section of
 * that page where one exists.
 */
export const homeServiceCards = [
  {
    href: "/services/bird-netting",
    title: "Balcony",
    titleBold: "Bird Netting",
    image: "/images/services/balcony-bird-net.webp",
    alt: "Near-transparent bird net fitted across an apartment balcony overlooking the city",
  },
  {
    href: "/services/invisible-grill",
    title: "Invisible Grill",
    titleBold: "Child & Pet Safety",
    image: "/images/services/invisible-grill-balcony.webp",
    alt: "Close-up of stainless invisible grill cables on a residential balcony",
  },
  {
    href: "/services/bird-netting#society",
    title: "Society & High-Rise",
    titleBold: "Bird Netting",
    image: "/images/services/society-balcony-netting.webp",
    alt: "Balcony bird net at Eden Garden society in Morbi with the neighbouring towers behind",
  },
  {
    href: "/services/bird-netting#industrial",
    title: "Industrial & Factory",
    titleBold: "Bird Netting",
    image: "/images/services/factory-roof-netting.webp",
    alt: "Large-span bird net installed under the roof of a factory shed",
  },
  {
    href: "/services/bird-netting#facade",
    title: "Full Building",
    titleBold: "Net Coverage",
    image: "/images/services/building-facade-netting.webp",
    alt: "Bird net covering the full facade of a tall building",
  },
  {
    href: "/services/bird-spikes",
    title: "Bird Spikes",
    titleBold: "Anti-Bird Protection",
    image: "/images/services/bird-spikes.webp",
    alt: "Stainless steel bird spikes installed along a concrete building parapet",
  },
] as const;

/** "Not sure what you need?" recommendation matrix on the services index. */
export const recommendations = [
  { need: "Pigeon problem on the balcony", answer: "Bird Net Service", href: "/services/bird-netting", icon: "bird" },
  { need: "Child & pet safety without losing the view", answer: "Invisible Grill", href: "/services/invisible-grill", icon: "paw" },
  { need: "Society or high-rise building", answer: "Building Bird Netting", href: "/services/bird-netting#society", icon: "building" },
  { need: "Factory, warehouse or industrial shed", answer: "Industrial Bird Netting", href: "/services/bird-netting#industrial", icon: "factory" },
  { need: "Birds perching on ledges & signage", answer: "Bird Spikes", href: "/services/bird-spikes", icon: "spike" },
  { need: "Still not sure", answer: "Book a free site visit", href: "/contact", icon: "help" },
] as const;
