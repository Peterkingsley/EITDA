import assert from 'node:assert/strict';
import { getPublishedStories } from '../content/stories.ts';

const base = process.env.SMOKE_BASE_URL || 'http://localhost:3000';
const imageUrls = new Set();
const normalize = (text) => text.replace(/&amp;/g, '&').replace(/&#x27;|&#39;|&apos;/g, "'").replace(/&quot;/g, '"');

async function checkPage(route, story) {
  const response = await fetch(new URL(route, base));
  assert.equal(response.status, 200, `${route} must load`);
  const html = await response.text();
  const h1 = html.match(/<h1\b[^>]*>([\s\S]*?)<\/h1>/)?.[1];
  assert.ok(h1, `${route} must render its heading, not an error shell`);
  assert.doesNotMatch(html, /This page couldn.t load|Internal Server Error|ReferenceError/);
  if (story) {
    assert.equal(normalize(h1), story.title);
    assert.ok(html.includes('story-body'), `${route} must render the article body`);
    const related = getPublishedStories().filter((item) => item.slug !== story.slug && item.category === story.category).slice(0, 2);
    for (const item of related) assert.ok(html.includes(`href="/blog/${item.slug}"`), `${route} must link to ${item.slug}`);
  }
  const images = [...html.matchAll(/<img\b[^>]*>/g)].map(([tag]) => tag);
  assert.ok(images.length, `${route} must contain images`);
  for (const tag of images) {
    assert.match(tag, /src="\/optimized\//, `${route} must serve an optimized image`);
    assert.match(tag, /srcSet="[^"]+\d+w/i, `${route} must offer responsive widths`);
    assert.match(tag, /width="\d+"/);
    assert.match(tag, /height="\d+"/);
    for (const [url] of tag.matchAll(/\/optimized\/[a-z0-9-]+\.webp/g)) imageUrls.add(url);
  }
  if (route === '/' || story) {
    assert.ok(images.some((tag) => /fetchPriority="high"/i.test(tag) && /loading="eager"/.test(tag)), `${route} must prioritize the main image`);
  }
  console.log(`PASS ${route}`);
  return html;
}

await checkPage('/');
const index = await checkPage('/blog');
for (const story of getPublishedStories()) {
  assert.ok(index.includes(`href="/blog/${story.slug}"`), `Index must link to ${story.slug}`);
  await checkPage(`/blog/${story.slug}`, story);
}
const missing = await fetch(new URL('/blog/nonexistent-story-smoke-check', base));
assert.equal(missing.status, 404, 'Unknown stories must return 404');
for (const src of imageUrls) {
  const response = await fetch(new URL(src, base), { method: 'HEAD' });
  assert.equal(response.status, 200, `${src} must exist`);
  assert.match(response.headers.get('content-type') || '', /image\/webp/);
  const cache = response.headers.get('cache-control') || '';
  assert.equal([...cache.matchAll(/max-age=/g)].length, 1, `${src} must have one unambiguous cache lifetime`);
  assert.match(cache, /max-age=[1-9]\d*/, `${src} must be cacheable`);
  const bytes = Number(response.headers.get('content-length'));
  assert.ok(bytes > 0 && bytes < 400_000, `${src} must stay below 400 KB (got ${bytes})`);
}
console.log(`PASS 404 and ${imageUrls.size} responsive image assets`);
