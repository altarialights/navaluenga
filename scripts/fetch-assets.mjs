import { mkdir, writeFile, access } from 'node:fs/promises';

const files = [
  ['valle', 'Navaluenga 01 by-dpc.jpg'],
  ['pueblo', 'Navaluenga 02 by-dpc.jpg'],
  ['alberche', 'Alberche Navaluenga.jpg'],
  ['puente', 'P1080386-24x15 (27241774117).jpg'],
];
await mkdir('src/assets', { recursive: true });
await mkdir('research', { recursive: true });
const records = [];
for (const [name, title] of files) {
  const query = new URLSearchParams({ action: 'query', format: 'json', titles: `File:${title}`, prop: 'imageinfo', iiprop: 'url|size|extmetadata' });
  const res = await fetch(`https://commons.wikimedia.org/w/api.php?${query}`, { signal: AbortSignal.timeout(40000) });
  if (!res.ok) throw new Error(`${title}: ${res.status}`);
  const data = await res.json();
  const info = Object.values(data.query.pages)[0].imageinfo[0];
  const url = new URL(info.url);
  url.search = '';
  try { await access(`src/assets/${name}.jpg`); }
  catch {
    const img = await fetch(url, { signal: AbortSignal.timeout(40000) });
    if (!img.ok) { console.error(`${url}: ${img.status}`); continue; }
    await writeFile(`src/assets/${name}.jpg`, Buffer.from(await img.arrayBuffer()));
  }
  records.push({ name, title, ...info });
  await writeFile('research/commons-assets.json', JSON.stringify(records, null, 2));
  console.log(`${name}: ${info.width} × ${info.height}; ${info.extmetadata.LicenseShortName?.value}; ${info.extmetadata.Artist?.value}`);
}
await writeFile('research/commons-assets.json', JSON.stringify(records, null, 2));
