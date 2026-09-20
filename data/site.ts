/**
 * Global site configuration.
 *
 * Everything the client is likely to change lives in this folder rather than
 * inside components. Values marked with a TODO below are demo values that must
 * be confirmed before the site goes live.
 */

export const brand = {
  name: "SQUARE",
  tagline: "Bird Net & Invisible Grill",
  promise: "Safe. Clean. Beautiful.",
  utilityLine: "Protecting Homes. Beautifying Views.",
  description:
    "Professional bird netting, invisible grill, bird spike and safety net installation for homes, societies and commercial properties across Delhi NCR.",
  logoMark: "/images/brand/logo-mark.webp",
  logoLockup: "/images/brand/logo-lockup.webp",
} as const;

export const contact = {
  phoneDisplay: "+91 91044 16804",
  phoneHref: "tel:+919104416804",
  whatsappNumber: "919104416804",
  whatsappDisplay: "+91 91044 16804",
  email: "squarebirdnetservice@gmail.com",
  location: "Delhi NCR, India",
  addressLine: "Serving Delhi, Gurugram, Noida, Ghaziabad & Faridabad",
  hours: "Mon – Sat, 9:00 AM – 7:00 PM",
  mapsUrl: "https://www.google.com/maps/search/?api=1&query=Delhi+NCR",
} as const;

/** Builds a WhatsApp deep link with a pre-filled, context-aware message. */
export function whatsappLink(subject?: string) {
  const message = subject
    ? `Hi SQUARE, I would like to enquire about ${subject} and request a free site visit.`
    : "Hi SQUARE, I would like to request a free site visit.";
  return `https://wa.me/${contact.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

export const socials = [
  { label: "Facebook", href: "https://facebook.com", icon: "facebook" },
  { label: "Instagram", href: "https://instagram.com", icon: "instagram" },
  { label: "YouTube", href: "https://youtube.com", icon: "youtube" },
  { label: "LinkedIn", href: "https://linkedin.com", icon: "linkedin" },
] as const;

// TODO(client): confirm each figure before launch.
export const metrics = [
  { value: 8, suffix: "+", label: "Years of Experience" },
  { value: 500, suffix: "+", label: "Projects Completed" },
  { value: 1000, suffix: "+", label: "Happy Customers" },
  { value: 2, suffix: " Years", label: "Service Warranty" },
  { value: null, display: "Same-Day", label: "Site Visit (Select Areas)" },
] as const;

export const serviceAreas = [
  "Delhi",
  "Gurugram",
  "Noida",
  "Greater Noida",
  "Ghaziabad",
  "Faridabad",
  "Dwarka",
  "Rohini",
  "South Delhi",
] as const;

export const processSteps = [
  {
    n: "01",
    title: "Site Visit & Measurement",
    text: "Our team visits your space, inspects the risk areas and records exact measurements — free of cost.",
  },
  {
    n: "02",
    title: "Solution Recommendation",
    text: "We recommend the system that suits the opening, the usage and your budget, with clear pricing.",
  },
  {
    n: "03",
    title: "Professional Installation",
    text: "Trained installers complete the work with correct tension, precise alignment and a clean finish.",
  },
  {
    n: "04",
    title: "Final Safety Check",
    text: "We inspect every fixing point, hand over the space clean and explain care and maintenance.",
  },
] as const;

export const materials = [
  {
    title: "Durable Bird Net",
    meta: "UV-stabilised HDPE mesh",
    body: "Knotted high-density mesh that holds its shape under sun and wind without blocking light.",
    image: "/images/materials/bird-net-mesh.webp",
  },
  {
    title: "Stainless Steel Cable",
    meta: "High tensile strength",
    body: "Multi-strand stainless cable tensioned across the opening for strength with minimal visibility.",
    image: "/images/materials/steel-cable.webp",
  },
  {
    title: "Premium Fittings",
    meta: "Rust resistant hardware",
    body: "Stainless anchors, ferrules and tensioners chosen to survive years of outdoor exposure.",
    image: "/images/materials/grill-fittings.webp",
  },
  {
    title: "Bird Spikes",
    meta: "Polished stainless steel",
    body: "Blunt-tipped spike strips that deter perching on ledges without harming birds.",
    image: "/images/materials/bird-spikes.webp",
  },
] as const;

export const whyChoose = [
  {
    icon: "team",
    title: "Experienced Team",
    text: "Trained installers who work safely at height and finish neatly.",
  },
  {
    icon: "sun",
    title: "Weather Resistant Materials",
    text: "UV-stabilised nets and stainless hardware selected for Indian weather.",
  },
  {
    icon: "shield",
    title: "Child & Pet Safety Focus",
    text: "Spacing and fixing chosen around who actually uses the space.",
  },
  {
    icon: "sparkle",
    title: "Clean & Neat Finishing",
    text: "Straight lines, hidden fixings and a site left tidy after handover.",
  },
  {
    icon: "badge",
    title: "Transparent Pricing",
    text: "Measured quotation before work begins. No surprises afterwards.",
  },
  {
    icon: "building",
    title: "Residential & Commercial",
    text: "From a single balcony to a full warehouse span.",
  },
] as const;

// TODO(client): replace with verified Google reviews before launch.
export const reviewSummary = {
  rating: "4.8",
  outOf: "5",
  countLabel: "Based on 200+ Google Reviews",
} as const;

export const testimonials = [
  {
    name: "Rohit Sharma",
    location: "Gurugram",
    rating: 5,
    copy: "Excellent service and professional installation. The invisible grill is barely visible and the quality of the cable is outstanding. Highly recommended.",
  },
  {
    name: "Priya Mehta",
    location: "Noida",
    rating: 5,
    copy: "Very neat work and a polite team. Our balcony looks the same but now feels much safer for our kids. Great experience overall.",
  },
  {
    name: "Amit Verma",
    location: "Delhi",
    rating: 5,
    copy: "Quick response, genuine pricing and high-quality material. Highly satisfied with both the workmanship and the service.",
  },
  {
    name: "Neha Gupta",
    location: "Ghaziabad",
    rating: 5,
    copy: "We had a constant pigeon problem on our terrace. After the netting was installed the space is finally usable and easy to keep clean.",
  },
  {
    name: "Sandeep Rana",
    location: "Faridabad",
    rating: 5,
    copy: "They surveyed our factory shed properly and installed a large-span net without disturbing our operations. Very professional.",
  },
] as const;
