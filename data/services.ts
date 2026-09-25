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

/**
 * A related netting job the same crew handles that does not warrant its own
 * page (safety nets, mosquito nets, anti bird net supply). Rendered as a short
 * block on the parent service page; `id` is the anchor other pages link to.
 */
export type ServiceExtra = {
  id: string;
  title: string;
  text: string;
  points: string[];
};

export type Service = {
  slug: string;
  name: string;
  cardTitle: string;
  cardSubtitle: string;
  navLabel: string;
  /** Key into components/ui/Icon. */
  icon: string;
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
  extras?: ServiceExtra[];
  videoSlug?: string;
};

export const services: Service[] = [
  {
    slug: "bird-netting",
    name: "Bird Netting",
    cardTitle: "Bird Net Service",
    cardSubtitle: "Humane bird protection for balconies, buildings and factory sheds.",
    navLabel: "Bird Netting Services",
    icon: "bird",
    eyebrow: "BIRD NETTING SERVICES IN GUJARAT",
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
      "/images/services/factory-warehouse-netting.webp",
    ],
    metaTitle: "Bird Netting Services in Gujarat — Anti Bird Net, Nylon & Industrial",
    metaDescription:
      "Bird netting services in Gujarat for balconies, windows, building facades, societies and factory sheds. Nylon bird netting, plastic anti bird net, industrial bird netting, safety nets and mosquito nets — with a free site visit.",
    overview: [
      "Bird netting is the most reliable way to keep pigeons and other birds out of an opening without harming them. A tensioned mesh is fixed to the perimeter of the balcony, window, duct, facade or shed so birds simply cannot enter or nest.",
      "Because the mesh is thin and taut, it reads as almost invisible from a few feet away. You keep the light, the breeze and the view — you only lose the birds.",
      "We fit both nylon bird netting and plastic anti bird net, and recommend one or the other after seeing the site — nylon for large, high-wind spans; plastic mesh where a lighter, budget-friendly net will do the job.",
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
      "Windows behind existing grills",
    ],
    bestFor: "You have a pigeon problem — at home, across a building or in a factory — and want it to stop permanently.",
    materials: [
      "UV-stabilised nylon bird netting (knotted)",
      "Plastic anti bird net (HDPE / PP extruded mesh)",
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
      { q: "Nylon bird netting or plastic anti bird net — which is better?", a: "Nylon netting is stronger and handles wind and large spans better, so it suits facades, sheds and high floors. Plastic anti bird net is lighter and more economical for smaller balconies and windows. We recommend one at the site visit based on the opening, not the invoice." },
      { q: "Do you also install safety nets and mosquito nets?", a: "Yes. The same team installs safety nets for ducts, staircases and open shafts, and mosquito nets for windows, doors and balconies. They can be fitted on the same visit as your bird net." },
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
        eyebrow: "Industrial bird netting services",
        title: "Factory sheds and warehouses netted from the roof down",
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
    extras: [
      {
        id: "anti-bird-net",
        title: "Anti bird net — supply and installation",
        text: "Need the net itself? We supply nylon and plastic anti bird net for contractors and builders, or fit it for you so the edges are sealed and the tension is right first time.",
        points: ["Nylon and plastic (HDPE / PP) mesh", "Transparent and black", "Supply-only or supply & install"],
      },
      {
        id: "safety-net",
        title: "Safety net installation",
        text: "Heavy-duty safety nets across open ducts, staircase voids, shafts and construction edges — catching falls and falling objects where a bird net is not built to.",
        points: ["Ducts, shafts and stairwells", "Societies and construction sites", "High-strength knotted mesh"],
      },
      {
        id: "mosquito-net",
        title: "Mosquito net installation",
        text: "Fine-mesh mosquito nets on windows, doors and balconies — fixed, sliding or velcro frames — so you can leave the windows open without letting insects in.",
        points: ["Windows, doors and balconies", "Fixed, sliding and velcro frames", "Can be fitted on the same visit"],
      },
    ],
  },
  {
    slug: "invisible-grill",
    name: "Invisible Grill",
    cardTitle: "Invisible Grill",
    cardSubtitle: "Child and pet safety with a clean, open balcony view.",
    navLabel: "Invisible Grill Installation",
    icon: "shield",
    eyebrow: "STAINLESS STEEL INVISIBLE GRILL — CHILD & PET SAFETY",
    heroTitle: "Safety that does not block your beautiful view.",
    heroLead:
      "Slim stainless steel cables tensioned vertically across your balcony give you a real physical barrier for children and pets, while keeping the open, uncluttered look of a modern home.",
    image: "/images/services/invisible-grill-customers.webp",
    heroImage: "/images/services/invisible-grill-wide.webp",
    galleryImages: [
      "/images/services/invisible-grill-balcony.webp",
      "/images/services/invisible-grill-night.webp",
      "/images/projects/project-02.webp",
      "/images/projects/project-05.webp",
      "/images/projects/project-07.webp",
      "/images/projects/project-12.webp",
    ],
    metaTitle: "Stainless Steel Invisible Grill Installation in Gujarat — Invisible Grill Contractors",
    metaDescription:
      "Stainless steel invisible grill installation for balconies and windows across Gujarat. Experienced invisible grill contractors — child and pet safety with high-tensile cable, rust-resistant fittings and a free site visit.",
    overview: [
      "An invisible grill replaces the heavy welded MS grill with a run of tensioned stainless steel cables. Each cable is only a few millimetres thick, so at normal viewing distance the balcony reads as open.",
      "It is the solution most high-rise families choose when a society will not allow external grills, or when the view is the reason they bought the home in the first place.",
      "As invisible grill contractors we handle the whole job ourselves — measurement, anchoring, cable tensioning and the final safety check — rather than subcontracting the fixing.",
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
    icon: "spike",
    eyebrow: "BIRD SPIKE INSTALLATION SERVICES",
    heroTitle: "Stop birds perching where they cause the most mess.",
    heroLead:
      "Discreet polycarbonate and stainless steel bird spike strips make ledges, parapets, AC units and signage edges uncomfortable to land on — so birds move along instead of settling in.",
    image: "/images/services/bird-spikes-ledge.webp",
    heroImage: "/images/services/bird-spikes-rooftop.webp",
    galleryImages: [
      "/images/services/bird-spikes-terrace.webp",
      "/images/services/bird-spikes-strip.webp",
      "/images/services/bird-spikes-ac-unit.webp",
    ],
    metaTitle: "Bird Spike Installation Services in Gujarat",
    metaDescription:
      "Bird spike installation services across Gujarat for ledges, parapets, terrace railings, AC units and commercial facades. Humane polycarbonate and stainless steel bird spikes with a free site visit.",
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
      { title: "Weather resistant", text: "UV-stable polycarbonate and stainless steel survive sun, rain and pollution." },
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
      "UV-stable clear polycarbonate bird spike strips",
      "Stainless steel spikes for heavy-duty ledges",
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
    slug: "cricket-net",
    name: "Cricket Net",
    cardTitle: "Cricket Nets",
    cardSubtitle: "Practice nets and box cricket enclosures for homes, societies and academies.",
    navLabel: "Cricket Net Installation",
    icon: "net",
    eyebrow: "CRICKET NET INSTALLATION",
    heroTitle: "Practise every day, without losing a single ball.",
    heroLead:
      "Cricket practice nets, terrace nets and full box cricket enclosures — framed, tensioned and sized for the space you have, so batters can swing freely and nearby windows stay safe.",
    image: "/images/services/cricket-net-batting.webp",
    heroImage: "/images/services/cricket-box-net.webp",
    galleryImages: [],
    metaTitle: "Cricket Net Installation in Gujarat — Practice & Box Cricket Nets",
    metaDescription:
      "Cricket net installation across Gujarat for home terraces, society grounds, schools and academies. Practice nets, box cricket nets and ground boundary nets in nylon and HDPE with a free site visit.",
    overview: [
      "A cricket net gives players a safe, contained lane to bat and bowl in. We build single and multi-lane practice nets, rooftop and terrace nets for homes, and fully enclosed box cricket arenas for societies, schools and turf owners.",
      "The net is hung on a steel frame or tensioned cable so it stays taut, absorbs the ball without rebounding hard and does not sag after a season of use.",
    ],
    problem: {
      title: "The problem it solves",
      text: "Practice in an open ground or on a terrace means lost balls, broken windows, balls landing in the road and the risk of hitting someone nearby. A properly framed cricket net contains every shot, so play can happen safely right next to homes, parking and walkways.",
    },
    how: [
      { title: "Site survey", text: "We measure the lane or box, check the height available and plan where the frame or cable anchors will go." },
      { title: "Net selection", text: "Mesh size and cord thickness are chosen for leather or tennis ball use and for how hard the net will be worked." },
      { title: "Frame & tension", text: "The net is hung from a steel frame or cable so the sides and roof stay taut and square." },
      { title: "Ground finish", text: "The bottom edge is weighted or fixed so balls cannot roll under, and every joint is checked before handover." },
    ],
    benefits: [
      { title: "Contains every shot", text: "Side, back and roof netting stops balls leaving the practice area." },
      { title: "Safer surroundings", text: "Windows, cars and passers-by are protected from stray balls." },
      { title: "Sized to your space", text: "From a single terrace lane to a full box cricket arena." },
      { title: "Weather resistant", text: "UV-stabilised nylon and HDPE nets hold up to sun and monsoon." },
      { title: "Low rebound", text: "Correct tension absorbs the ball instead of firing it back at the bowler." },
      { title: "Easy to repair", text: "Worn sections can be patched or replaced without redoing the whole net." },
    ],
    applications: [
      "Home terraces & rooftops",
      "Society grounds & open plots",
      "Schools & colleges",
      "Cricket academies",
      "Box cricket & turf arenas",
      "Ground boundary nets",
    ],
    bestFor: "You want to play or coach cricket in a limited space without losing balls or damaging anything nearby.",
    materials: [
      "UV-stabilised knotted nylon cricket netting",
      "HDPE netting for tennis-ball and light use",
      "Galvanised steel pipe frame or stainless tension cable",
      "Ground anchors, weights and edge fixings",
    ],
    faqs: [
      { q: "Can you install a cricket net on a terrace?", a: "Yes. Terrace and rooftop nets are one of our most common cricket jobs. We check the parapet and slab for fixing points and enclose the sides and roof so balls cannot leave the terrace." },
      { q: "Which net is best for leather ball practice?", a: "Leather ball needs a thicker knotted nylon net with a smaller mesh. For tennis-ball cricket a lighter HDPE net is usually enough. We confirm this at the site visit." },
      { q: "Do you build box cricket arenas?", a: "Yes. We net full box cricket and turf enclosures, including the roof, for societies, schools and turf owners." },
      { q: "How long does installation take?", a: "A single practice lane is usually finished in a day. Larger box cricket enclosures are scheduled after measurement." },
    ],
  },
];

export const serviceBySlug = (slug: string) => services.find((s) => s.slug === slug);

/**
 * Cards shown on the homepage services grid. Every card leads into one of the
 * services; the bird-net cards deep-link to the matching section of that page
 * where one exists.
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
  {
    href: "/services/bird-netting#anti-bird-net",
    title: "Window & Grill",
    titleBold: "Anti Bird Net",
    image: "/images/services/grill-bird-net.webp",
    alt: "Installer fitting anti bird net behind a stainless steel balcony grill",
  },
  {
    href: "/services/cricket-net",
    title: "Practice & Box",
    titleBold: "Cricket Nets",
    image: "/images/services/cricket-net-practice.webp",
    alt: "Batter practising inside a green cricket practice net",
  },
] as const;

/** "Not sure what you need?" recommendation matrix on the services index. */
export const recommendations = [
  { need: "Pigeon problem on the balcony", answer: "Bird Netting Services", href: "/services/bird-netting", icon: "bird" },
  { need: "Child & pet safety without losing the view", answer: "Invisible Grill", href: "/services/invisible-grill", icon: "paw" },
  { need: "Society or high-rise building", answer: "Building Bird Netting", href: "/services/bird-netting#society", icon: "building" },
  { need: "Factory, warehouse or industrial shed", answer: "Industrial Bird Netting", href: "/services/bird-netting#industrial", icon: "factory" },
  { need: "Birds perching on ledges & signage", answer: "Bird Spikes", href: "/services/bird-spikes", icon: "spike" },
  { need: "Cricket practice at home, society or academy", answer: "Cricket Net Installation", href: "/services/cricket-net", icon: "net" },
  { need: "Open ducts, shafts or staircase voids", answer: "Safety Net Installation", href: "/services/bird-netting#safety-net", icon: "shield" },
  { need: "Mosquitoes through windows & doors", answer: "Mosquito Net Installation", href: "/services/bird-netting#mosquito-net", icon: "bug" },
  { need: "Still not sure", answer: "Book a free site visit", href: "/contact", icon: "help" },
] as const;

/**
 * Full list of the jobs customers search for, shown on the homepage. Each
 * entry points at the page (or section) that covers it in detail, so the
 * list doubles as internal linking rather than a block of keywords.
 */
export const serviceIndex = [
  {
    title: "Bird Netting Services",
    text: "Balconies, windows, ducts and terraces netted to keep pigeons out for good.",
    href: "/services/bird-netting",
  },
  {
    title: "Anti Bird Net Dealers",
    text: "Nylon and plastic anti bird net supplied by the roll, or supplied and installed.",
    href: "/services/bird-netting#anti-bird-net",
  },
  {
    title: "Nylon Bird Netting",
    text: "Strong knotted nylon mesh for high floors, facades and windy spans.",
    href: "/services/bird-netting",
  },
  {
    title: "Plastic Anti Bird Net Installation",
    text: "Light, economical HDPE / PP mesh for smaller balconies and windows.",
    href: "/services/bird-netting#anti-bird-net",
  },
  {
    title: "Industrial Bird Netting Services",
    text: "Large-span nets under factory roofs and across warehouse walls.",
    href: "/services/bird-netting#industrial",
  },
  {
    title: "Society & High-Rise Bird Netting",
    text: "Every balcony across a tower netted to one clean, uniform line.",
    href: "/services/bird-netting#society",
  },
  {
    title: "Invisible Grill Contractors",
    text: "Measured, anchored and tensioned by our own team for child and pet safety.",
    href: "/services/invisible-grill",
  },
  {
    title: "Stainless Steel Invisible Grill",
    text: "High-tensile stainless cable that keeps the balcony open and rust-free.",
    href: "/services/invisible-grill",
  },
  {
    title: "Bird Spike Installation Services",
    text: "Polycarbonate and steel spikes for ledges, parapets and AC units.",
    href: "/services/bird-spikes",
  },
  {
    title: "Safety Net Installation Services",
    text: "Heavy-duty nets across open ducts, shafts, stairwells and site edges.",
    href: "/services/bird-netting#safety-net",
  },
  {
    title: "Mosquito Net Installation Services",
    text: "Fixed, sliding and velcro mosquito nets for windows, doors and balconies.",
    href: "/services/bird-netting#mosquito-net",
  },
  {
    title: "Cricket Net Installation",
    text: "Practice lanes, terrace nets and full box cricket enclosures.",
    href: "/services/cricket-net",
  },
] as const;
