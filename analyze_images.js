import { GoogleGenAI } from "@google/genai";
import fs from 'fs';
import path from 'path';

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

async function analyzeImage(filePath) {
  const base64Data = fs.readFileSync(filePath, { encoding: 'base64' });
  const response = await ai.models.generateContent({
    model: 'gemini-3-flash-preview',
    contents: [
      {
        inlineData: {
          data: base64Data,
          mimeType: 'image/png'
        }
      },
      'Describe this door in detail. 1. Is it a window or a door? 2. Is it a double door? 3. Does it have a vertical glass strip on the left (bandeira)? If so, how many sections in the strip (2 or 3)? 4. Does it have a grid of glass panels on top and solid bottom (palito lux)? If so, how many panels? 5. Is it a full glass door with a grid (lux)? 6. Does it have 4 vertical glass panels on top (postigo)?'
    ]
  });
  console.log(`\nFile: ${path.basename(filePath)}`);
  console.log(response.text);
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
