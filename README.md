# StowLink website

Static Vite + React site for https://www.stowlink.app. Cloudflare Workers serves the generated `dist` directory as static assets, with no server functions or app binaries.

## Google Search Console

Use a **Domain property** for `stowlink.app`. That covers `www.stowlink.app`, the apex domain, and both http and https.

1. In Search Console, add `stowlink.app` as a domain property and verify with a DNS TXT record (Cloudflare DNS if the domain is there).
2. Deploy this site, then submit `https://www.stowlink.app/sitemap.xml`.
3. Canonical URLs, Open Graph tags, and the sitemap all use `https://www.stowlink.app` with no trailing slash except the homepage.
4. In Cloudflare, add a Redirect Rule so `stowlink.app/*` 301s to `https://www.stowlink.app/$1`. Domain properties still need one host as the canonical so pages are not duplicated.

The build writes a real HTML file for each public route plus `404.html`. Unknown URLs return HTTP 404 instead of the homepage.

## Local

```sh
cp .env.example .env
npm install
npm run dev
```

## Cloudflare Workers

- Build command: `npm run build`
- Deploy command: `npx wrangler deploy`
- Production branch: `main`
- Production `VITE_LEMONSQUEEZY_CHECKOUT_URL` must be the **Live** checkout
- Preview deploys should use the **Test** checkout
- Custom domains: `www.stowlink.app` and `stowlink.app`

The Worker configuration is stored in `wrangler.jsonc`. It serves `dist` as a single-page application so client-side routes work when opened directly. Security headers are stored in `public/_headers` and copied into `dist` during the build.

Downloads are always:

`https://github.com/Cratis1831/stowlink-releases/releases/latest/download/StowLink.zip`

`/download` checks GitHub for a `StowLink.zip` asset first. If none exists yet, it shows a waiting page instead of sending people to a 404.
