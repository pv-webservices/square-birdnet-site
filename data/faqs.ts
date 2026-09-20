/**
 * FAQ content, grouped by category for the /faq page and reused on the
 * homepage preview. Keep answers factual — avoid absolute safety claims.
 */

export type Faq = { q: string; a: string };
export type FaqGroup = { category: string; items: Faq[] };

export const faqGroups: FaqGroup[] = [
  {
    category: "General",
    items: [
      {
        q: "Which areas do you serve?",
        a: "We work across Delhi NCR — Delhi, Gurugram, Noida, Greater Noida, Ghaziabad, Faridabad and the surrounding areas. If you are just outside, call us and we will tell you honestly whether we can reach you.",
      },
      {
        q: "Is the site visit really free?",
        a: "Yes. A site visit, inspection and measurement cost you nothing and carry no obligation. You only pay if you decide to go ahead with the work.",
      },
      {
        q: "How soon can you visit?",
        a: "In most parts of Delhi NCR we can arrange a same-day or next-day visit. Peak season and outlying areas may take a little longer.",
      },
      {
        q: "Do you work on weekends?",
        a: "Our standard working hours are Monday to Saturday, 9:00 AM to 7:00 PM. Commercial work can be scheduled outside these hours when a site needs it.",
      },
    ],
  },
  {
    category: "Bird Netting",
    items: [
      {
        q: "Will the net block my view?",
        a: "The cord is thin and installed under tension, so from inside the room it largely disappears. Standing directly against it you will see it — that is true of any physical barrier.",
      },
      {
        q: "Is it safe for birds?",
        a: "Yes. A net is a barrier, not a trap. We tension it correctly and seal the edges precisely so birds cannot become caught in it.",
      },
      {
        q: "What net colours are available?",
        a: "Transparent and black are the usual choices. Transparent blends into the sky; black reads better against a dark facade or a covered soffit.",
      },
      {
        q: "Can netting be fitted on an odd-shaped balcony?",
        a: "Yes. The perimeter is framed to whatever shape the opening is. Angled, curved and stepped balconies are routine work.",
      },
      {
        q: "Will the net affect ventilation or light?",
        a: "Barely. The mesh is open and the cord is thin, so airflow and daylight are essentially unchanged.",
      },
    ],
  },
  {
    category: "Invisible Grill",
    items: [
      {
        q: "Is the invisible grill really invisible?",
        a: "The cables are intentionally slim and are genuinely hard to see from a few feet away or from outside the building. Up close you will see them — nothing physical is truly invisible, and we would rather say so.",
      },
      {
        q: "Will it be safe for children and pets?",
        a: "Cable spacing is what matters. For homes with small children or pets we set the spacing tighter so nothing can pass through and the cables cannot be climbed. We confirm the spacing at the site visit.",
      },
      {
        q: "Can the cables rust?",
        a: "Stainless cable and stainless fittings are specified precisely to resist rust outdoors. The grade of the hardware matters more than anything else in this system.",
      },
      {
        q: "Can the cables loosen over time?",
        a: "Tensioners are built into the system so cables can be re-tightened. A check at your first service visit covers this.",
      },
      {
        q: "Will my society allow an invisible grill?",
        a: "Most societies prefer it, because it keeps the building facade uniform where an external MS grill does not. We can share installation photographs if your RWA asks.",
      },
    ],
  },
  {
    category: "Bird Spikes",
    items: [
      {
        q: "Do bird spikes hurt birds?",
        a: "No. The tips are blunt and the purpose is discomfort, not injury. Birds land, find no stable footing and move on.",
      },
      {
        q: "When are spikes better than netting?",
        a: "On narrow ledges, parapets, AC casings and signage edges, where there is nothing to frame a net across.",
      },
      {
        q: "Will spikes be obvious from the street?",
        a: "From ground level they read as a thin line along the edge rather than a visible feature.",
      },
    ],
  },
  {
    category: "Installation",
    items: [
      {
        q: "How long does installation take?",
        a: "A typical balcony is completed within a few hours. Larger terraces, full buildings and commercial spans are scheduled after measurement.",
      },
      {
        q: "Do I need to be present during installation?",
        a: "Someone should be there to give access and approve the final position, but you do not need to supervise the work.",
      },
      {
        q: "Will drilling damage my walls or tiles?",
        a: "Fixings go into sound structure and are placed to avoid tiled faces wherever possible. If a fixing must pass through tile, we tell you before we drill.",
      },
      {
        q: "Do you clean up afterwards?",
        a: "Yes. Dust and offcuts are removed and the space is handed back clean. That is part of the job, not an extra.",
      },
    ],
  },
  {
    category: "Warranty & Maintenance",
    items: [
      {
        q: "Do you provide a warranty?",
        a: "Yes. Warranty duration depends on the system and the material selected, and the exact terms are stated on your quotation before you confirm the order.",
      },
      {
        q: "How long will the installation last?",
        a: "Service life depends on material grade, weather exposure and installation quality. We will give you a realistic expectation for your specific site rather than a headline number.",
      },
      {
        q: "How do I maintain it?",
        a: "Nets need an occasional rinse. Invisible grill cables need a wipe and a tension check now and then. We explain the routine at handover.",
      },
      {
        q: "What if something is damaged later?",
        a: "Contact us and we will inspect it. Localised repairs are usually straightforward and far cheaper than replacing a full run.",
      },
    ],
  },
  {
    category: "Pricing",
    items: [
      {
        q: "How is pricing calculated?",
        a: "Mostly by measured area, plus the system selected, the fixing method and site access. That is exactly why we measure before quoting.",
      },
      {
        q: "Do you quote over the phone?",
        a: "We can give an indicative range on the phone, but the confirmed price follows the site visit. Quoting blind is how customers end up with surprises.",
      },
      {
        q: "Are there any hidden charges?",
        a: "No. The quotation covers material, installation and cleanup. Anything outside it is discussed and agreed before work starts.",
      },
    ],
  },
  {
    category: "Child & Pet Safety",
    items: [
      {
        q: "Which is better for a toddler — safety net or invisible grill?",
        a: "An invisible grill gives a firmer barrier and keeps the view. A safety net is quicker and lighter on budget. Railing height and what a child can climb on decide it — we advise at the site visit.",
      },
      {
        q: "Does a safety net make a balcony completely child-proof?",
        a: "No barrier removes the need for supervision. A correctly specified and correctly anchored net adds a substantial protective layer, and we will tell you if a balcony needs more than a net.",
      },
      {
        q: "Will my cat be able to get through?",
        a: "Not with the right mesh. Cats need a tighter mesh than birds do, so we specify accordingly when there is a pet in the home.",
      },
    ],
  },
];

/** Flat list for schema markup and search. */
export const allFaqs: Faq[] = faqGroups.flatMap((g) => g.items);

/** The six questions shown on the homepage preview. */
export const homeFaqs: Faq[] = [
  faqGroups[2].items[0],
  faqGroups[2].items[1],
  faqGroups[4].items[0],
  faqGroups[5].items[1],
  faqGroups[5].items[0],
  faqGroups[1].items[1],
];
