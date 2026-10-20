import sharp from 'sharp';
for (const engine of ['chromium', 'webkit']) {
  for (const width of [1440, 1920]) {
    await sharp(`.impeccable/review/${engine}-${width}.png`).jpeg({ quality: 82 }).toFile(`.impeccable/review/${engine}-${width}.jpg`);
  }
}
