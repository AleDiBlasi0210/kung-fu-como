# Kung Fu Como Website + Sanity CMS

Public site: Next.js static export for GitHub Pages.
Admin CMS: Sanity Studio (separate app, authenticated on Sanity side).

## 1) Install

```bash
npm.cmd install
```

## 2) Environment

Create `.env.local` from `.env.example` and fill:

- `NEXT_PUBLIC_SANITY_PROJECT_ID`
- `NEXT_PUBLIC_SANITY_DATASET`
- Optional `SANITY_STUDIO_PROJECT_ID` / `SANITY_STUDIO_DATASET`
- Optional `NEXT_PUBLIC_SANITY_STUDIO_URL` to expose an "Area Admin" link in the footer

Do not set `BASE_PATH` or `NEXT_PUBLIC_BASE_PATH` in local development unless you intentionally want to serve the app from `/kung-fu-como` on localhost. Those values are for the GitHub Pages deployment workflow.

If Studio shows `placeholder-project-id`, the real Sanity project ID has not been set yet. Add the actual project ID from your Sanity project into `.env.local` before starting the Studio.

Also add these CORS origins in the Sanity project settings:

- `http://localhost:3333`
- `http://localhost:3000` if you want to preview data while the Next.js app is running locally

## 3) Run public site

```bash
npm.cmd run dev
```

## 4) Run CMS admin (separate)

```bash
npm.cmd run studio:dev
```

Studio will run locally on `http://localhost:3333`.
Only Sanity users with project access can edit content.

## 5) Deploy public site to GitHub Pages

The workflow in `.github/workflows/deploy-pages.yml` builds and deploys from `out/`.
Set repository secrets/variables as needed for Sanity and base path.

## 6) Deploy admin Studio

```bash
npm.cmd run studio:deploy
```

When prompted, choose a Studio hostname (for example `kungfucomo-admin`).
This creates a separate secure admin URL from the public GitHub Pages site.

## 7) On-demand revalidation (Vercel)

This project includes an API route at `POST /api/revalidate` to refresh cached
pages/tags after Sanity publish.

Add environment variable on Vercel:

- `REVALIDATE_SECRET` (long random string)

Create a Sanity webhook:

1. Sanity Manage -> API -> Webhooks -> Create webhook
2. URL: `https://<your-domain>/api/revalidate?secret=<REVALIDATE_SECRET>`
3. Method: `POST`
4. Trigger on: publish (optionally unpublish/delete)
5. Include document payload (default) so `_type` is available

After each publish, the webhook triggers selective revalidation for relevant
pages (news, attivita, faq, instructors, etc.) without full redeploy.

## Content managed via Sanity

- Home mission + affiliations
- FAQ
- Discipline cards and detail pages
- Sedi / locations and schedules
- News
- Attivita events + galleries
- Instructors
- Contact cards
- Partners

Fallback local data remains active when Sanity is not configured.
