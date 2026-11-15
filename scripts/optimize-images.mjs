// Converts screenshots (PNG/JPG) into optimized WebP files for the portfolio.
//
// Usage:
//   pnpm images <input file or folder> <output folder> [--width 1600] [--quality 80] [--sizes 480,768,1200]
//
// Examples:
//   pnpm images ~/Desktop/captures src/assets/projects/onboarding
//   pnpm images cover.png src/assets/projects --width 1200 --name onboarding
//
// Never upscales. With --sizes it also writes name-480.webp, name-768.webp, ...
// for use in srcset. Prints the before/after size of every file.
import { readdir, stat, mkdir } from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const args = process.argv.slice(2);
const flag = (name, fallback) => {
  const i = args.indexOf(`--${name}`);
  return i === -1 ? fallback : args[i + 1];
};
const [input, outDir] = args.filter((a, i) => !a.startsWith("--") && !args[i - 1]?.startsWith("--"));

if (!input || !outDir) {
  console.error("Usage: pnpm images <input> <output folder> [--width 1600] [--quality 80] [--sizes 480,768,1200] [--name file]");
  process.exit(1);
}

const width = Number(flag("width", 1600));
const quality = Number(flag("quality", 80));
const sizes = flag("sizes", "")
  .split(",")
  .filter(Boolean)
  .map(Number);
const forcedName = flag("name", "");

const kb = (bytes) => `${Math.round(bytes / 1024)} KB`;
const slug = (file) =>
  path
    .parse(file)
    .name.toLowerCase()
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");

async function convert(file) {
  const name = forcedName || slug(file);
  const before = (await stat(file)).size;
  const targets = [{ w: width, out: `${name}.webp` }, ...sizes.map((w) => ({ w, out: `${name}-${w}.webp` }))];
  for (const { w, out } of targets) {
    const dest = path.join(outDir, out);
    const info = await sharp(file)
      .resize({ width: w, withoutEnlargement: true })
      .webp({ quality, effort: 6 })
      .toFile(dest);
    console.log(`${path.basename(file)} (${kb(before)}) -> ${dest} ${info.width}x${info.height} ${kb(info.size)}`);
  }
}

await mkdir(outDir, { recursive: true });
const files = (await stat(input)).isDirectory()
  ? (await readdir(input)).filter((f) => /\.(png|jpe?g|webp)$/i.test(f)).map((f) => path.join(input, f))
  : [input];
for (const file of files) await convert(file);
