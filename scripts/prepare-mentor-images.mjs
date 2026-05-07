import sharp from "sharp";
import { mkdir } from "node:fs/promises";

const sourceDir = "src/assets/images/mentors/originals";
const outputDir = "src/assets/images/mentors/optimized";

const jobs = [
  {
    input: "mentor-sehwan-original.png",
    output: "mentor-sehwan.webp",
    width: 840,
    height: 980,
    extract: { left: 145, top: 0, width: 562, height: 656 },
  },
  {
    input: "mentor-jaehong-original.jpg",
    output: "mentor-jaehong.webp",
    width: 840,
    height: 980,
    position: sharp.strategy.attention,
  },
  {
    input: "mentor-soonyup-original.png",
    output: "mentor-soonyup.webp",
    width: 840,
    height: 980,
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
    .resize(job.width, job.height, {
      fit: "cover",
      position: job.position ?? "center",
    })
    .webp({ quality: 82, effort: 5 })
    .toFile(`${outputDir}/${job.output}`);
}

console.log(`Prepared ${jobs.length} mentor images in ${outputDir}`);
