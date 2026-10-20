import { readFile, readdir, writeFile } from 'node:fs/promises';
const links = new Set();
async function scan(dir) {
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const path = `${dir}/${entry.name}`;
    if (entry.isDirectory()) await scan(path);
    else if (entry.name.endsWith('.html')) {
      const html = await readFile(path, 'utf8');
      for (const match of html.matchAll(/href="(https:\/\/[^\"]+)"/g)) {
        const url = match[1].replaceAll('&amp;', '&');
        if (['aytonavaluenga.es', 'navaluenga.sedelectronica.es', 'www.turismoavila.com'].includes(new URL(url).hostname)) links.add(url);
      }
    }
  }
}
await scan('dist');
const pending = [...links], results = [];
await Promise.all(Array.from({length: 3}, async () => {
  while (pending.length) {
    const url = pending.shift();
    try {
      const response = await fetch(url, { redirect: 'follow', signal: AbortSignal.timeout(12000) });
      results.push({url, status:response.status, finalURL:response.url});
      await response.body?.cancel();
    } catch (error) { results.push({url, error:String(error)}); }
  }
}));
results.sort((a,b) => a.url.localeCompare(b.url));
await writeFile('research/external-links.json', JSON.stringify({ checkedAt:new Date().toISOString(), results }, null, 2));
console.log(JSON.stringify(results, null, 2));
