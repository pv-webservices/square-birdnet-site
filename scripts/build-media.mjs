/**
 * Media pipeline for the SQUARE website.
 *
 * Reads the original client assets (logo, photographs, video poster frames)
 * plus the generated photography from ./media-source — which is kept outside
 * public/ so the heavy originals are never shipped — and writes optimised WebP
 * derivatives into the public/images folders the site references.
 *
 * Run with: node scripts/build-media.mjs            (every step)
 *       or: node scripts/build-media.mjs services   (named steps only)
 */
import { mkdir, readdir, unlink } from "node:fs/promises";
import { existsSync } from "node:fs";
import path from "node:path";
import sharp from "sharp";

const ROOT = process.cwd();
const IMAGES = path.join(ROOT, "public/images");
const SOURCE = path.join(ROOT, "media-source");
const CLIENT = (n) => path.join(SOURCE, `client-${n}.jpeg`);
const GENERATED = (n) => path.join(SOURCE, `${n}.png`);
// Still frames lifted from the client's site videos (ffmpeg -ss <t> -frames:v 1).
const FRAME = (n) => path.join(SOURCE, `frame-${n}.png`);
// Named client photographs (jpeg) and free-licence stock (Pexels licence).
const PHOTO = (n) => path.join(SOURCE, `${n}.jpeg`);
const STOCK = (id) => path.join(SOURCE, `pexels-${id}.jpg`);

const QUALITY = 78;

async function ensureDir(dir) {
  await mkdir(dir, { recursive: true });
}

/** Blurs rectangular regions (e.g. third-party names printed on clothing). */
async function redacted(input, regions) {
  const base = sharp(input).rotate();
  const patches = await Promise.all(
    regions.map(async (region) => ({
      input: await sharp(input).rotate().extract(region).blur(28).toBuffer(),
      left: region.left,
      top: region.top,
    })),
  );
  return base.composite(patches).toBuffer();
}

async function emit(input, outRelative, width, options = {}) {
  const out = path.join(IMAGES, outRelative);
  await ensureDir(path.dirname(out));
  const source = options.redact ? await redacted(input, options.redact) : input;
  const pipeline = sharp(source);
  if (options.extract) pipeline.extract(options.extract);
  pipeline.resize({
    width,
    height: options.height,
    fit: options.height ? "cover" : "inside",
    position: options.position ?? "centre",
    withoutEnlargement: !options.allowEnlarge,
  });
  const { size } = await pipeline.webp({ quality: options.quality ?? QUALITY, effort: 5 }).toFile(out);
  console.log(`  ${outRelative.padEnd(42)} ${String(width).padStart(4)}px  ${Math.round(size / 1024)}kb`);
}

/* ---------------------------------------------------------------- brand -- */
async function brand() {
  console.log("brand");
  const logo = path.join(SOURCE, "logo-original.png");
  // Emblem only — used as the header / footer mark.
  await emit(logo, "brand/logo-mark.webp", 320, {
    extract: { left: 170, top: 85, width: 970, height: 600 },
    quality: 92,
  });
  // Full lockup including wordmark — used on the contact page and OG card.
  await emit(logo, "brand/logo-lockup.webp", 640, {
    extract: { left: 20, top: 40, width: 1214, height: 1000 },
    quality: 92,
  });
  // Favicon source.
  await ensureDir(path.join(ROOT, "app"));
  await sharp(logo)
    .extract({ left: 170, top: 85, width: 970, height: 600 })
    .resize(180, 180, { fit: "contain", background: "#ffffff" })
    .png()
    .toFile(path.join(ROOT, "app/icon.png"));
  console.log("  app/icon.png");
}

/* ----------------------------------------------------------------- hero -- */
async function hero() {
  console.log("hero & banners");
  await emit(GENERATED("hero-balcony"), "hero/hero-balcony.webp", 1400, { quality: 80 });
  await emit(GENERATED("towers-skyline"), "hero/towers-skyline.webp", 1600);
  await emit(GENERATED("cta-balcony-night"), "hero/cta-balcony-night.webp", 1600);
  await emit(GENERATED("commercial-facade"), "hero/commercial-facade.webp", 1400);
}

/* ------------------------------------------------------------- services -- */
async function services() {
  console.log("services");
  await emit(CLIENT(1), "services/invisible-grill-balcony.webp", 1000);
  await emit(CLIENT(16), "services/invisible-grill-night.webp", 1000);
  await emit(CLIENT(3), "services/bird-netting-residential.webp", 1000);
  await emit(CLIENT(14), "services/bird-netting-commercial.webp", 1000);
  await emit(GENERATED("invisible-grill-wide"), "services/invisible-grill.webp", 1000);
  await emit(GENERATED("bird-spikes"), "services/bird-spikes.webp", 1000);
  await emit(GENERATED("safety-net"), "services/balcony-bird-net.webp", 1000);
  await emit(FRAME("factory-roof"), "services/factory-roof-netting.webp", 720);
  await emit(FRAME("factory-fittings"), "services/factory-net-fittings.webp", 720);
  await emit(FRAME("building-facade"), "services/building-facade-netting.webp", 720);
  await emit(FRAME("morbi-balcony"), "services/society-balcony-netting.webp", 720);
  await emit(FRAME("morbi-garden"), "services/society-garden-netting.webp", 720);
  await emit(CLIENT(8), "services/window-netting.webp", 1000);
  await emit(GENERATED("invisible-grill-wide"), "services/invisible-grill-wide.webp", 1400);
  await emit(GENERATED("invisible-grill-closeup"), "services/invisible-grill-closeup.webp", 760);
  // Client photographs added in the second revision.
  await emit(PHOTO("grill-net-worker"), "services/grill-bird-net.webp", 1000, {
    // The installer's shirt carries another company's name and phone numbers.
    redact: [{ left: 830, top: 640, width: 190, height: 230 }],
  });
  await emit(PHOTO("factory-warehouse-net"), "services/factory-warehouse-netting.webp", 1000);
  await emit(PHOTO("invisible-grill-customers"), "services/invisible-grill-customers.webp", 1000);
  await emit(PHOTO("spike-1"), "services/bird-spikes-rooftop.webp", 1400);
  await emit(PHOTO("spike-4"), "services/bird-spikes-ledge.webp", 1000);
  await emit(PHOTO("spike-2"), "services/bird-spikes-terrace.webp", 1000);
  // Crop the product photo out of the catalogue screenshot (drops the price row).
  await emit(PHOTO("spike-3"), "services/bird-spikes-strip.webp", 1000, {
    extract: { left: 0, top: 122, width: 1077, height: 763 },
  });
  await emit(PHOTO("spike-5"), "services/bird-spikes-ac-unit.webp", 1000);
}

/* -------------------------------------------------------------- cricket -- */
// Free-licence stock from pexels.com (Pexels licence: commercial use allowed).
async function cricket() {
  console.log("cricket net");
  await emit(STOCK(36676877), "services/cricket-box-net.webp", 1600);
  await emit(STOCK(31171122), "services/cricket-net-batting.webp", 1000);
  await emit(STOCK(9559761), "services/cricket-net-practice.webp", 1000);
}

/* ------------------------------------------------------------- projects -- */
const PROJECT_SOURCES = [1, 2, 3, 6, 7, 9, 10, 11, 12, 13, 14, 15];
async function projects() {
  console.log("projects");
  for (let i = 0; i < PROJECT_SOURCES.length; i += 1) {
    const n = String(i + 1).padStart(2, "0");
    await emit(CLIENT(PROJECT_SOURCES[i]), `projects/project-${n}.webp`, 1000);
  }
}

/* ------------------------------------------------------------ materials -- */
async function materials() {
  console.log("materials");
  await emit(GENERATED("material-net"), "materials/bird-net-mesh.webp", 900);
  await emit(GENERATED("material-cable"), "materials/steel-cable.webp", 900);
  await emit(GENERATED("material-fittings"), "materials/grill-fittings.webp", 900);
  await emit(GENERATED("bird-spikes"), "materials/bird-spikes.webp", 900);
}

/* ----------------------------------------------------------------- team -- */
async function team() {
  console.log("team");
  await emit(CLIENT(5), "team/installation-01.webp", 1200);
  await emit(CLIENT(4), "team/installation-02.webp", 1200);
}

/* -------------------------------------------------------------- compare -- */
async function compare() {
  console.log("before / after");
  await emit(GENERATED("before-birds"), "compare/before-birds.webp", 1000);
  await emit(GENERATED("after-clean"), "compare/after-clean.webp", 1000);
}

/* --------------------------------------------------------------- videos -- */
async function videoPosters() {
  console.log("video posters");
  await emit(path.join(SOURCE, "video-1-poster.jpg"), "videos/residential-netting.webp", 720, { quality: 72 });
  await emit(path.join(SOURCE, "video-2-poster.jpg"), "videos/commercial-netting.webp", 720, { quality: 72 });
  await emit(FRAME("morbi-balcony"), "videos/morbi-eden-garden.webp", 720, { quality: 72 });
  await emit(FRAME("factory-poster"), "videos/industrial-factory-netting.webp", 720, { quality: 72 });
  await emit(FRAME("building-facade"), "videos/building-facade-netting.webp", 720, { quality: 72 });
}

/* ---------------------------------------------------------------- clean -- */
async function removeLegacyPlaceholders() {
  const dir = path.join(IMAGES, "placeholders");
  if (!existsSync(dir)) return;
  console.log("removing legacy placeholders");
  for (const file of await readdir(dir)) await unlink(path.join(dir, file));
}

const STEPS = { brand, hero, services, cricket, projects, materials, team, compare, videoPosters, removeLegacyPlaceholders };
const requested = process.argv.slice(2);
for (const [name, step] of Object.entries(STEPS)) {
  if (requested.length === 0 || requested.includes(name)) await step();
}
console.log("\nmedia build complete");
