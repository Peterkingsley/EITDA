# EITDA campaign: Google Sheets setup

The campaign uses one Google Spreadsheet as its live operational datastore. The website talks to a Google Apps Script web app through its server route; Google credentials and the Apps Script secret never go into browser code.

## Create the spreadsheet

1. Create a blank spreadsheet and copy its ID from the URL.
2. Open **Extensions → Apps Script**.
3. Run `npm run build:apps-script` in this project. Copy the generated `apps-script/Code.gs` into the Apps Script editor. Copy `apps-script/appsscript.json` into the project manifest (`Show appsscript.json`).
4. In **Project Settings → Script properties**, add:
   - `SPREADSHEET_ID`: the spreadsheet ID.
   - `API_SECRET`: a random 64-character lowercase hexadecimal value.
   - `TOKEN_SECRET`: a different random 64-character lowercase hexadecimal value.
5. Run `setupCampaign()` once and approve the spreadsheet permissions. It creates these tabs and exact headers: `Advocates`, `People`, `Events`, `Milestones`, and `PublicImpact`.
6. Run `installCampaignTrigger()` once. This installs the spreadsheet edit trigger used to recalculate counts, milestones, public wall rows, and manually updated ticket events.

## Deploy the API

Deploy **Deploy → New deployment → Web app**. Execute as the spreadsheet owner and choose the access level that allows the website to call it. Copy the `/exec` URL; it should look like `https://script.google.com/macros/s/DEPLOYMENT_ID/exec`.

Set these Render environment variables:

```text
EITDA_DATA_MODE=google_sheets
EITDA_APPS_SCRIPT_URL=https://script.google.com/macros/s/DEPLOYMENT_ID/exec
EITDA_APPS_SCRIPT_SECRET=the_same_value_as_API_SECRET
NEXT_PUBLIC_SITE_URL=https://www.eshietfoundation.xyz
```

Generate secrets with `node -e "console.log(require('node:crypto').randomBytes(32).toString('hex'))"`. Never commit them. After changing Apps Script code, generate and paste `Code.gs` again, create a new deployment version, and keep the same `/exec` deployment URL.

## Check the connection

Use these safe public requests after deployment:

```text
GET /api/impact?action=getCampaignStats
GET /api/impact?action=getPublicImpact&limit=24
```

Then submit one test advocate and one test person from `/impact`. Confirm that a row appears in `Advocates`, `People`, and `Events`; confirm that an unchecked wall-consent person appears anonymously on `PublicImpact`; and confirm that a checked person appears by first name only. Delete test rows manually from the sheet and run `syncCampaign()` afterward.

The Apps Script uses a script lock for writes, duplicate submission IDs for safe retries, a short cache for public totals, and rate limits. Google Apps Script quotas still apply, so the Experience Wall is paginated and public stats are cached.

## Operations

The team can correct professions, update `ticket_status` (`not_started`, `clicked`, `pending`, `confirmed`, or `attended`), mark a public row `featured`, and export the spreadsheet as CSV. Keep ID, hash, token, and timestamp columns intact. Never paste email, phone, private answers, or dashboard tokens into `PublicImpact`.
