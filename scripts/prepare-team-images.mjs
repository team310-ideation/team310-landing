import sharp from "sharp";
import { mkdir } from "node:fs/promises";

const sourceDir = "src/assets/images/team/originals";
const outputDir = "src/assets/images/team/optimized";

const jobs = [
  {
    input: "team310-group-portrait-original.jpg",
    output: "team310-group-portrait.webp",
    width: 1200,
  },
  {
    input: "sejong-portrait-01-original.jpg",
    output: "sejong-profile.webp",
    width: 900,
    height: 1125,
    position: sharp.strategy.attention,
  },
  {
    input: "semin-portrait-01-original.jpg",
    output: "semin-profile.webp",
    width: 900,
    height: 1125,
    extract: { left: 0, top: 0, width: 3235, height: 4044 },
  },
  {
    input: "junhyeok-portrait-01-original.jpg",
    output: "junhyeok-profile.webp",
    width: 900,
    height: 1125,
    position: sharp.strategy.attention,
  },
  {
    input: "semin-sejong-together-original.jpg",
    output: "semin-sejong-together.webp",
    width: 1400,
    height: 900,
    position: sharp.strategy.attention,
  },
];

await mkdir(outputDir, { recursive: true });

for (const job of jobs) {
  let image = sharp(`${sourceDir}/${job.input}`).rotate();

  if (job.extract) {
    image = image.extract(job.extract);
  }

  await image
    .resize(job.width, job.height ?? null, {
      fit: "cover",
      position: job.position ?? "center",
    })
    .webp({ quality: 82, effort: 5 })
    .toFile(`${outputDir}/${job.output}`);
}

console.log(`Prepared ${jobs.length} team images in ${outputDir}`);
