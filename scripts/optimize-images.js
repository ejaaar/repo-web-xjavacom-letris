const fs = require("fs");
const path = require("path");
const sharp = require("sharp");

const src = path.resolve(__dirname, "../src/assets/hero-source.jpg");
const outDir = path.resolve(__dirname, "../src/assets");

async function run() {
  if (!fs.existsSync(src)) {
    console.error("Source image not found:", src);
    console.error(
      "Place a high-res image at src/assets/hero-source.jpg and re-run `npm run optimize-images`.",
    );
    process.exit(1);
  }

  const sizes = [800, 1600, 2000];
  for (const size of sizes) {
    const outJpg = path.join(outDir, `hero-${size}.jpg`);
    const outWebp = path.join(outDir, `hero-${size}.webp`);
    await sharp(src)
      .resize(size)
      .jpeg({ quality: 80, mozjpg: true })
      .toFile(outJpg);

    await sharp(src).resize(size).webp({ quality: 75 }).toFile(outWebp);

    console.log("Written", outJpg);
    console.log("Written", outWebp);
  }
  console.log("Image optimization complete.");
}

run().catch((err) => {
  console.error(err);
  process.exit(1);
});
