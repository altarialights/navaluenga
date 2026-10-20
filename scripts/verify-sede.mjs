import { chromium } from '@playwright/test';
import { writeFile } from 'node:fs/promises';
const html = await (await fetch('https://aytonavaluenga.es/')).text();
const links = [...html.matchAll(/href=["']([^"']*sede[^"']*)["']/gi)].map(m => m[1]);
const result = {officialLinks: [...new Set(links)]};
const browser = await chromium.launch();
try {
  const page = await browser.newPage();
  const response = await page.goto('https://navaluenga.sedelectronica.es/', {waitUntil:'domcontentloaded', timeout:20000});
  result.browser = {status:response?.status(),url:page.url(),title:await page.title()};
} catch(error) {result.browser = {error:String(error)};}
await browser.close();
await writeFile('research/sede-verification.json', JSON.stringify(result,null,2));
console.log(result);
