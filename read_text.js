import { createWorker } from 'tesseract.js';
import fs from 'fs';
import path from 'path';

async function recognizeText(filePath) {
  const worker = await createWorker('por');
  const { data: { text } } = await worker.recognize(filePath);
  console.log(`\nFile: ${path.basename(filePath)}`);
  console.log(text.trim().replace(/\n/g, ' '));
  await worker.terminate();
}

async function main() {
  const lisoDir = './public/porta-liso';
  const reflexDir = './public/porta-reflex';
  
  for (const file of fs.readdirSync(lisoDir)) {
    if (file.endsWith('.png')) await recognizeText(path.join(lisoDir, file));
  }
  for (const file of fs.readdirSync(reflexDir)) {
    if (file.endsWith('.png')) await recognizeText(path.join(reflexDir, file));
  }
}

main();
