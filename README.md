# EITDA

Official landing page for **Earning in the Digital Age**, a youth empowerment initiative by Eshiet Foundation.

## Development

```bash
npm install
npm run dev
```

Create a production build with `npm run build`.

## Stories

The blog lives at `/blog`, with individual articles at `/blog/[slug]` and a latest-stories section on the homepage. Add and edit stories directly in [`content/stories.ts`](content/stories.ts). Only stories marked `published` appear on the site.

See [Adding stories](docs/adding-stories.md) for the content template and publishing instructions.

## Experience campaign

The campaign lives at [`/impact`](http://localhost:3000/impact). It runs in demo mode by default during local development and uses fictional records from `content/impact-mock.json`. It has an advocate flow at `/impact/start`, invite links at `/impact/:code`, a public `/impact/wall`, and private dashboard links at `/impact/me/:code?token=...`.

The live operational datastore is Google Sheets through Google Apps Script. Follow [`GOOGLE_SHEETS_SETUP.md`](GOOGLE_SHEETS_SETUP.md) to create the five tabs, deploy the script, and configure `EITDA_DATA_MODE=google_sheets`, `EITDA_APPS_SCRIPT_URL`, and `EITDA_APPS_SCRIPT_SECRET` on Render. No database is required.
