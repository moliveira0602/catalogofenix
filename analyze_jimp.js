import { Jimp } from 'jimp';
import fs from 'fs';
import path from 'path';

async function analyzeImage(filePath) {
  const image = await Jimp.read(filePath);
  const width = image.bitmap.width;
  const height = image.bitmap.height;
  const aspectRatio = width / height;

  // Calculate average color of top half, bottom half, left half, right half
  let topDarkness = 0;
  let bottomDarkness = 0;
  let leftDarkness = 0;
  let rightDarkness = 0;

  image.scan(0, 0, width, height, function(x, y, idx) {
    const r = this.bitmap.data[idx + 0];
    const g = this.bitmap.data[idx + 1];
    const b = this.bitmap.data[idx + 2];
    const brightness = (r + g + b) / 3;
    const isDark = brightness < 200 ? 1 : 0; // Assuming glass is darker than white aluminum

    if (y < height / 2) topDarkness += isDark;
    else bottomDarkness += isDark;

    if (x < width / 2) leftDarkness += isDark;
    else rightDarkness += isDark;
  });

  const topRatio = topDarkness / (width * height / 2);
  const bottomRatio = bottomDarkness / (width * height / 2);
  const leftRatio = leftDarkness / (width * height / 2);
  const rightRatio = rightDarkness / (width * height / 2);

  console.log(`\nFile: ${path.basename(filePath)}`);
  console.log(`Aspect Ratio: ${aspectRatio.toFixed(2)}`);
  console.log(`Top Darkness: ${topRatio.toFixed(2)}`);
  console.log(`Bottom Darkness: ${bottomRatio.toFixed(2)}`);
  console.log(`Left Darkness: ${leftRatio.toFixed(2)}`);
  console.log(`Right Darkness: ${rightRatio.toFixed(2)}`);
}

async function main() {
  const lisoDir = './public/porta-liso';
  const reflexDir = './public/porta-reflex';
  
  for (const file of fs.readdirSync(lisoDir)) {
    if (file.endsWith('.png')) await analyzeImage(path.join(lisoDir, file));
  }
  for (const file of fs.readdirSync(reflexDir)) {
    if (file.endsWith('.png')) await analyzeImage(path.join(reflexDir, file));
  }
}

main();
