# Adding stories to EITDA

Stories are maintained in [`content/stories.ts`](../content/stories.ts). There is no dashboard, database or public submission form. Editing the code and deploying the updated website is the publishing workflow.

## Add a story

1. Put the cover image in `public/photos/` (or another folder inside `public/`). Use an appropriately compressed image, ideally at least 1200 pixels wide.
2. Copy the object below into the `stories` array in `content/stories.ts`.
3. Give it a unique, lowercase, hyphenated `slug`. Keep published slugs stable so existing links continue to work.
4. Add the title, summary, author, date, image description and article sections. Each paragraph is a separate string. Optional `points` render as a bulleted list. Optional `sources` render as linked references.
5. Change `status` to `'published'` when ready, check the site, and deploy through your usual process.

```ts
{
  slug: 'your-story-title',
  title: 'Your story title',
  excerpt: 'A short summary used on cards and when the story is shared.',
  category: 'Work & careers',
  author: 'Author name',
  publishedAt: '2026-09-08', // YYYY-MM-DD
  status: 'draft', // Change to 'published' when ready.
  image: {
    src: '/photos/your-cover.jpg',
    alt: 'Describe what is in the photograph.',
    caption: 'Optional context or photography credit.',
  },
  introduction: 'The opening paragraph of your story.',
  sections: [
    {
      heading: 'Your first section',
      paragraphs: [
        'The first paragraph.',
        'The next paragraph. Use double quotes if you need an apostrophe.',
      ],
      points: ['An optional point.', 'Another optional point.'],
    },
    {
      heading: 'Your next section',
      paragraphs: ['Continue the story here.'],
    },
  ],
  sources: [
    { title: 'Source title and publication year', url: 'https://example.com/source' },
  ],
},
```

Drafts are omitted from the homepage, blog index, generated route list and public article lookup. Their URLs return a not-found page. Draft content remains in the repository and may be present in server build artifacts, so do not use drafts to store confidential information.

`publishedAt` determines display order, newest first. It is a publication label, not a scheduler: a future date does not hide a story marked `'published'`. Use `'draft'` until you are ready to publish.

The homepage shows up to three published stories. `/blog` lists all published stories, with the newest featured first. A published story has the URL `/blog/your-story-title`. Reading time is calculated from the article text at 200 words per minute. Every article automatically gets its own title, description, cover image and social-sharing metadata.

Only use images and quotations you are authorised to publish. When writing about research, retain the source year, relevant sample and a source link; do not turn sample findings into claims about all Nigerian professionals.

## Check your story

Run `npm run dev` and visit `/blog` and your article's URL. Check the copy, cover image and source links. Run `npm run build` before deploying. Story edits appear in the development server immediately; the live site updates only after deployment.

If the website uses a different canonical domain, set `NEXT_PUBLIC_SITE_URL` to that origin (for example, `https://your-domain.com`) before building. It controls canonical and social-image URLs. The default is the existing EITDA Sites origin.
