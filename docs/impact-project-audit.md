# Existing project inspection — 10 September 2026

- Vinext 1.0.0-beta.5, React 19.2.6, Vite 8; Next-style app directory, server components and client components. TypeScript strict checks run before production builds.
- Routes: `/`, `/blog`, `/blog/[slug]`. No database, authentication service, API endpoints or ticket webhooks existed before this feature.
- `app/page.tsx` contains the event landing page, programme, free/VIP tickets, first-edition photographs and FAQ. Shared header/footer and independent story components are already present.
- Selar handles General Access (`817383or48`) and VIP (`8d08851l58`), with physical/virtual choices made there. The campaign reuses these destinations and adds no payment processor or pretend confirmation.
- Branding: Geist, ink `#07101f`, blue `#0731b5`, yellow `#ffc400`, warm paper `#f5f3ed`; large, tightly spaced headings; square cards; understated motion; Eshiet Foundation logo. Existing photography is unrelated to named campaign participants and is not used as their portrait.
- CSS is global in `app/globals.css`, with header, footer, landing, story and mobile rules. Existing breakpoints include 1120, 820 and 520px. New campaign CSS is scoped under `.impact-shell`; mobile campaign navigation avoids adding another link to the crowded existing header row.
- Existing accessible UI primitives are available under `components/ui/`; campaign forms compose those inputs/buttons/checkboxes/native selects rather than installing another UI kit.
- Images are pre-generated WebP variants under `public/optimized`, used by `SiteImage`. New campaign graphics are typography and a small people grid, so no new photo downloads are required.
- Git remote: GitHub `Peterkingsley/EITDA`, branch `main`. The public custom domain is served by Render. `RENDER=true` selects the existing Node build; the original Sites/Cloudflare configuration is preserved in `vite.config.ts` and `.openai/hosting.json` (both database bindings remain null).
- The existing canonical URL is `NEXT_PUBLIC_SITE_URL`, defaulting to `https://www.eshietfoundation.xyz`. No local `.env` files were present. `.env.example` is now explicitly permitted by `.gitignore`; real secret files remain ignored.
- New integration: browser → same-origin `/api/impact` → Apps Script HTTPS → one private Google Spreadsheet. This small proxy provides secure cookies, origin checks and server-only secrets while avoiding Apps Script browser redirect/CORS constraints. Google Sheets is the sole live operational datastore. No traditional database is added.
