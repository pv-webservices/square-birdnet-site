/**
 * Service catalogue. Each entry drives both the services index and the
 * individual /services/<slug> page, so a new service only needs a data entry
 * plus a one-line route file.
 */

export type ServiceFaq = { q: string; a: string };

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
  videoSlug?: string;
};

export const services: Service[] = [
  {
    slug: "bird-netting",
    name: "Bird Netting",
    cardTitle: "Balcony Bird Netting",
    cardSubtitle: "Clean, humane bird protection for balconies and open areas.",
    navLabel: "Bird Netting",
    eyebrow: "BIRD NETTING",
    heroTitle: "Cleaner open spaces, without the constant bird nuisance.",
    heroLead:
      "A fine, near-transparent mesh installed across your balcony, window or terrace opening keeps pigeons out while daylight, airflow and your view stay exactly as they were.",
    image: "/images/services/bird-netting-balcony.webp",
    heroImage: "/images/projects/project-01.webp",
    galleryImages: [
      "/images/projects/project-01.webp",
      "/images/projects/project-05.webp",
      "/images/projects/project-07.webp",
      "/images/services/window-netting.webp",
      "/images/projects/project-10.webp",
      "/images/projects/project-12.webp",
    ],
    metaTitle: "Bird Netting Installation in Delhi NCR",
    metaDescription:
      "Professional balcony, window, terrace and duct bird netting across Delhi NCR. UV-stabilised mesh, neat fixings and a free site visit.",
    overview: [
      "Bird netting is the most reliable way to keep pigeons and other birds out of an opening without harming them. A tensioned mesh is fixed to the perimeter of the balcony, window, duct or shed so birds simply cannot enter or nest.",
      "Because the mesh is thin and taut, it reads as almost invisible from a few feet away. You keep the light, the breeze and the view — you only lose the birds.",
    ],
    problem: {
      title: "The problem it solves",
      text: "Pigeons nest on unused balconies, air-conditioner ledges and duct areas. The result is droppings, feathers, nesting material, blocked drains, and a space the family stops using. Cleaning it repeatedly does not fix the cause — blocking access does.",
    },
    how: [
      { title: "Perimeter framing", text: "Fixing points are marked around the full opening so the net has a continuous, gap-free boundary." },
      { title: "Mesh selection", text: "Mesh size is chosen for the target bird — a tighter grid for sparrows, a standard grid for pigeons." },
      { title: "Tensioning", text: "The net is drawn tight with steel cable so it stays flat, quiet in wind and visually clean." },
      { title: "Edge sealing", text: "Corners, gaps behind pipes and drain openings are closed off, because birds will find any opening left." },
    ],
    benefits: [
      { title: "Humane bird prevention", text: "Birds are kept out rather than harmed or trapped." },
      { title: "Cleaner balconies", text: "No more droppings, feathers or nesting material to clear each week." },
      { title: "Minimal obstruction", text: "The mesh is thin enough that your view and daylight stay intact." },
      { title: "Durable outdoors", text: "UV-stabilised cord holds its strength through sun, rain and wind." },
      { title: "Fits any opening", text: "Balconies, odd-shaped ducts and full warehouse spans are all workable." },
      { title: "Low maintenance", text: "An occasional rinse is usually all the net needs." },
    ],
    applications: [
      "Apartment balconies",
      "Windows & French windows",
      "Open terraces",
      "Duct and shaft areas",
      "Air-conditioner ledges",
      "Warehouses & factory sheds",
      "Apartment common areas",
      "Parking & stilt areas",
    ],
    bestFor: "You have a pigeon problem and want it to stop permanently.",
    materials: [
      "UV-stabilised HDPE knotted mesh",
      "Stainless steel perimeter cable",
      "Corrosion-resistant anchors and hooks",
      "Nylon ties rated for outdoor use",
    ],
    faqs: [
      { q: "Will the net block my view?", a: "The cord is thin and installed under tension, so from inside the room it mostly disappears. You will see it if you stand right against it, which is unavoidable with any physical barrier." },
      { q: "Can I still dry clothes on the balcony?", a: "Yes. The net sits at the outer edge of the balcony, so the usable floor area does not change." },
      { q: "Does the net harm birds?", a: "No. It is a barrier, not a trap. We tension it properly and seal the edges specifically so birds cannot get caught in it." },
      { q: "How long does installation take?", a: "A typical balcony is completed within a few hours. Larger terraces, sheds and commercial spans are scheduled after measurement." },
      { q: "What colours are available?", a: "Transparent and black are the most common choices. Transparent disappears against the sky; black reads better against a dark facade." },
    ],
    videoSlug: "residential-netting",
  },
  {
    slug: "invisible-grill",
    name: "Invisible Grill",
    cardTitle: "Invisible Grill",
    cardSubtitle: "High-tensile safety with a cleaner, open balcony view.",
    navLabel: "Invisible Grill",
    eyebrow: "INVISIBLE GRILL",
    heroTitle: "Safety that does not block your beautiful view.",
    heroLead:
      "Slim stainless steel cables tensioned vertically across your balcony give you a real physical barrier for children and pets, while keeping the open, uncluttered look of a modern home.",
    image: "/images/services/invisible-grill.webp",
    heroImage: "/images/services/invisible-grill-wide.webp",
    galleryImages: [
      "/images/services/invisible-grill-wide.webp",
      "/images/services/invisible-grill-closeup.webp",
      "/images/hero/hero-balcony.webp",
      "/images/projects/project-06.webp",
      "/images/projects/project-11.webp",
      "/images/materials/steel-cable.webp",
    ],
    metaTitle: "Invisible Grill Installation in Delhi NCR",
    metaDescription:
      "Premium invisible grill installation for balconies and windows in Delhi NCR. High-tensile stainless cable, rust-resistant fittings and a free site visit.",
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
    navLabel: "Bird Spikes",
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
      "/images/projects/project-02.webp",
      "/images/projects/project-09.webp",
      "/images/hero/towers-skyline.webp",
    ],
    metaTitle: "Bird Spikes Installation in Delhi NCR",
    metaDescription:
      "Stainless steel bird spike installation for ledges, parapets, AC units and commercial facades across Delhi NCR. Humane, discreet and durable.",
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
  {
    slug: "safety-net",
    name: "Safety Net",
    cardTitle: "Safety Net",
    cardSubtitle: "Protective netting for children, pets and open residential areas.",
    navLabel: "Safety Net",
    eyebrow: "SAFETY NET — CHILD & PET SAFETY",
    heroTitle: "Peace of mind for the people who matter most.",
    heroLead:
      "A close-knit safety net across balconies, openings and stairwells adds a protective layer for children and pets, while keeping the space light and usable.",
    image: "/images/services/safety-net.webp",
    heroImage: "/images/services/safety-net.webp",
    galleryImages: [
      "/images/services/safety-net.webp",
      "/images/projects/project-03.webp",
      "/images/projects/project-08.webp",
      "/images/compare/after-clean.webp",
      "/images/projects/project-04.webp",
      "/images/materials/bird-net-mesh.webp",
    ],
    metaTitle: "Balcony Safety Net for Children & Pets — Delhi NCR",
    metaDescription:
      "Child and pet safety net installation for balconies, windows and open areas across Delhi NCR. Close-knit mesh, secure anchoring and a free site visit.",
    overview: [
      "A safety net is a tightly woven mesh fixed across an opening to add a protective layer where there is a fall risk — a balcony, a stairwell void, a window a toddler can reach.",
      "It is a practical, quickly installed measure. It is not a substitute for supervision, and we will always tell you where it is and is not the right answer.",
    ],
    problem: {
      title: "The problem it solves",
      text: "Modern apartments have low railings, wide gaps and full-height windows. Children climb and pets jump. A safety net closes the opening without rebuilding the balcony or blocking the light.",
    },
    how: [
      { title: "Risk assessment", text: "We look at railing height, gap width, what a child can climb on and how the space is used day to day." },
      { title: "Mesh selection", text: "Mesh size and cord thickness are chosen for the expected load and the age of the children." },
      { title: "Secure anchoring", text: "Anchors go into sound structure with a continuous perimeter — a net is only as strong as its fixings." },
      { title: "Load check", text: "Every fixing point is tested by hand and the perimeter is checked for gaps before handover." },
    ],
    benefits: [
      { title: "Added protection layer", text: "Closes the gap between railing and reality in most apartment balconies." },
      { title: "Pet friendly", text: "Keeps cats and small dogs from slipping through railings or jumping." },
      { title: "Light and air retained", text: "The mesh is fine enough to keep the balcony bright and ventilated." },
      { title: "Quick to install", text: "Most balconies are completed in a single visit." },
      { title: "Removable", text: "Can be taken down or relocated if you move, unlike a welded grill." },
      { title: "Cost effective", text: "A far lower outlay than structural changes to the balcony." },
    ],
    applications: [
      "Apartment balconies",
      "Full-height windows",
      "Stairwell and mezzanine voids",
      "Open terraces & sit-outs",
      "Pet enclosures",
      "Society play areas",
    ],
    bestFor: "You have small children or pets and an open balcony.",
    materials: [
      "Close-knit UV-stabilised nylon or HDPE mesh",
      "Stainless steel perimeter cable",
      "Structural anchors rated for outdoor use",
      "Corrosion-resistant hooks and turnbuckles",
    ],
    faqs: [
      { q: "Does a safety net make a balcony completely child-proof?", a: "No barrier removes the need for supervision. A correctly specified and correctly anchored net adds a substantial protective layer, and we will tell you honestly if a balcony needs more than a net." },
      { q: "What mesh size should I choose?", a: "For toddlers we recommend a tighter mesh that a foot or hand cannot pass through. We confirm the right size against your railing during the site visit." },
      { q: "Will it block sunlight?", a: "Only marginally. The cord is thin, so the balcony stays bright and ventilated." },
      { q: "Can it be removed later?", a: "Yes. The system is mechanically fixed and can be removed, with anchor points made good afterwards." },
    ],
  },
  {
    slug: "commercial",
    name: "Commercial Solutions",
    cardTitle: "Commercial & Industrial",
    cardSubtitle: "Large-format protection for buildings, factories and warehouses.",
    navLabel: "Commercial",
    eyebrow: "COMMERCIAL SOLUTIONS",
    heroTitle: "Bird control systems for larger, more demanding properties.",
    heroLead:
      "Warehouses, factory sheds, hospitals, schools, hotels and societies need a surveyed, planned installation — not a residential approach scaled up. We plan around your operations and your access constraints.",
    image: "/images/services/bird-netting-commercial.webp",
    heroImage: "/images/hero/commercial-facade.webp",
    galleryImages: [
      "/images/services/bird-netting-commercial.webp",
      "/images/hero/commercial-facade.webp",
      "/images/projects/project-11.webp",
      "/images/projects/project-02.webp",
      "/images/hero/towers-skyline.webp",
      "/images/projects/project-09.webp",
    ],
    metaTitle: "Commercial & Industrial Bird Netting — Delhi NCR",
    metaDescription:
      "Large-span bird netting and spike systems for warehouses, factories, hospitals, hotels and societies across Delhi NCR. Site survey, planned execution and maintenance support.",
    overview: [
      "At commercial scale the problem is rarely just birds. It is contamination risk in a food or pharma facility, stained facades on a corporate building, blocked gutters on a shed roof, and hygiene complaints in a hospital or school.",
      "We survey the property, map where birds actually enter and roost, and propose a system that can be installed without shutting your operations down.",
    ],
    problem: {
      title: "The problem it solves",
      text: "Large sheds and open structures give birds ideal roosting cover. Droppings contaminate stock, corrode steelwork, block drainage and create a hygiene and audit risk. Periodic cleaning is a recurring cost that never resolves the cause.",
    },
    how: [
      { title: "Site survey", text: "We map openings, roosting points, bird activity, access routes and the working constraints on site." },
      { title: "Custom assessment", text: "System type, span strategy and fixing method are matched to your structure — steel truss, RCC or masonry." },
      { title: "Planned execution", text: "Work is sequenced and scheduled around your shifts, with access equipment and safety planned in advance." },
      { title: "Handover & support", text: "You get a documented installation, quality checks and an agreed maintenance and inspection schedule." },
    ],
    benefits: [
      { title: "Hygiene compliance", text: "Supports audit and hygiene requirements in food, pharma and healthcare environments." },
      { title: "Asset protection", text: "Prevents the corrosion and staining that droppings cause to steel and facades." },
      { title: "Large-span capability", text: "Engineered cable runs cover full warehouse and atrium spans." },
      { title: "Minimal disruption", text: "Phased installation planned around live operations." },
      { title: "Documented handover", text: "Drawings, material details and inspection records on completion." },
      { title: "Maintenance support", text: "Scheduled inspection and repair so the system keeps working." },
    ],
    applications: [
      "Factories & industrial sheds",
      "Warehouses & logistics hubs",
      "Office buildings & atriums",
      "Hospitals & clinics",
      "Schools & colleges",
      "Hotels & banquet halls",
      "Apartment societies",
      "Malls & commercial complexes",
    ],
    bestFor: "You manage a property where bird fouling is an operational and hygiene problem.",
    materials: [
      "Heavy-duty UV-stabilised large-span mesh",
      "Engineered stainless cable and turnbuckle system",
      "Structural fixings rated for steel and RCC",
      "Stainless spike strips for ledges and trusses",
    ],
    faqs: [
      { q: "Do you provide a site survey before quoting?", a: "Yes. Commercial quotations are only issued after a survey — span, height, access and structure change the cost significantly." },
      { q: "Will installation disrupt our operations?", a: "We plan work in phases and can schedule around shifts, shutdown windows or weekends." },
      { q: "Can you work at height safely?", a: "Yes. Access equipment and working-at-height precautions are planned as part of the method statement before work begins." },
      { q: "Do you offer maintenance contracts?", a: "Yes. Larger installations are best kept under a scheduled inspection arrangement so small damage is repaired before it spreads." },
    ],
    videoSlug: "commercial-netting",
  },
];

export const serviceBySlug = (slug: string) => services.find((s) => s.slug === slug);

/** Cards shown on the homepage services grid — mirrors the six-card reference layout. */
export const homeServiceCards = [
  {
    href: "/services/bird-netting",
    title: "Balcony",
    titleBold: "Bird Netting",
    image: "/images/services/bird-netting-balcony.webp",
    alt: "Bird netting installed across an apartment balcony overlooking the city",
  },
  {
    href: "/services/bird-netting",
    title: "Residential",
    titleBold: "Bird Netting",
    image: "/images/services/bird-netting-residential.webp",
    alt: "Residential bird netting fitted along a high-rise balcony railing",
  },
  {
    href: "/services/commercial",
    title: "Commercial & Industrial",
    titleBold: "Bird Netting",
    image: "/images/services/bird-netting-commercial.webp",
    alt: "Large-span bird netting under the roof of an industrial warehouse",
  },
  {
    href: "/services/invisible-grill",
    title: "Invisible",
    titleBold: "Grill",
    image: "/images/services/invisible-grill.webp",
    alt: "Invisible grill cables running across an open balcony with a city view",
  },
  {
    href: "/services/bird-spikes",
    title: "Bird Spikes",
    titleBold: "Anti-Bird Protection",
    image: "/images/services/bird-spikes.webp",
    alt: "Stainless steel bird spikes installed along a concrete building parapet",
  },
  {
    href: "/services/safety-net",
    title: "Safety Net",
    titleBold: "Child & Pet Safety",
    image: "/images/services/safety-net.webp",
    alt: "Balcony safety net protecting a family living space",
  },
] as const;

/** "Not sure what you need?" recommendation matrix on the services index. */
export const recommendations = [
  { need: "Pigeon problem on the balcony", answer: "Bird Netting", href: "/services/bird-netting", icon: "bird" },
  { need: "Child safety without losing the view", answer: "Invisible Grill", href: "/services/invisible-grill", icon: "shield" },
  { need: "Pet safety on an open balcony", answer: "Safety Net or Invisible Grill", href: "/services/safety-net", icon: "paw" },
  { need: "Birds perching on ledges & signage", answer: "Bird Spikes", href: "/services/bird-spikes", icon: "spike" },
  { need: "Warehouse, factory or society", answer: "Commercial Bird Netting", href: "/services/commercial", icon: "building" },
  { need: "Still not sure", answer: "Book a free site visit", href: "/contact", icon: "help" },
] as const;
