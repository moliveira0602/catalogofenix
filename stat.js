import fs from 'fs';
import path from 'path';

function printStats(dir) {
  const files = fs.readdirSync(dir);
  const stats = files.map(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    return { file, mtime: stat.mtime, birthtime: stat.birthtime };
  });
  stats.sort((a, b) => a.birthtime - b.birthtime);
  console.log(`\nDirectory: ${dir}`);
  stats.forEach(s => console.log(`${s.file} - ${s.birthtime}`));
}

printStats('./public/porta-liso');
printStats('./public/porta-reflex');
