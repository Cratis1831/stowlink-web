# StowLink website

Static Vite + React site for https://www.stowlink.app. Cloudflare Workers serves the generated `dist` directory as static assets, with no server functions or app binaries.

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
