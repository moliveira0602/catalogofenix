import { Jimp } from 'jimp';
import fs from 'fs';
import path from 'path';

async function printAscii(filePath) {
  const image = await Jimp.read(filePath);
  image.resize({ w: 20, h: 40 }); // Resize to 20x40
  image.greyscale();

  console.log(`\nFile: ${path.basename(filePath)}`);
  let ascii = '';
  for (let y = 0; y < image.bitmap.height; y++) {
    let row = '';
    for (let x = 0; x < image.bitmap.width; x++) {
      const color = image.getPixelColor(x, y);
      const r = (color >> 24) & 255;
      // Map 0-255 to ascii characters
      const chars = ['@', '%', '#', '*', '+', '=', '-', ':', '.', ' '];
      const charIdx = Math.floor((r / 255) * 9);
      row += chars[charIdx];
    }
    ascii += row + '\n';
  }
  console.log(ascii);
}

async function main() {
  const lisoDir = './public/porta-liso';
  const reflexDir = './public/porta-reflex';
  
  for (const file of fs.readdirSync(lisoDir)) {
    if (file.endsWith('.png')) await printAscii(path.join(lisoDir, file));
  }
  for (const file of fs.readdirSync(reflexDir)) {
    if (file.endsWith('.png')) await printAscii(path.join(reflexDir, file));
  }
}

main();
