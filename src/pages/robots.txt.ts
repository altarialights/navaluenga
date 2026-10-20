import type { APIRoute } from 'astro';
export const GET: APIRoute = () => {
  const site = import.meta.env.SITE_URL;
  const indexable = Boolean(site && import.meta.env.PUBLIC_INDEXABLE === 'true');
  return new Response(indexable ? `User-agent: *\nAllow: /\nSitemap: ${new URL('/sitemap-index.xml', site)}\n` : 'User-agent: *\nDisallow: /\n', { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
};
