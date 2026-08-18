# StowLink website

Static Vite + React site for https://www.stowlink.app. Cloudflare Pages serves the generated `dist` directory with no server functions or app binaries.

## Local

```sh
cp .env.example .env
npm install
npm run dev
```

## Cloudflare Pages

- Build command: `npm run build`
- Build output directory: `dist`
- Production branch: `main`
- Production `VITE_LEMONSQUEEZY_CHECKOUT_URL` must be the **Live** checkout
- Preview deploys should use the **Test** checkout
- Custom domains: `www.stowlink.app` and `stowlink.app`

The Pages project configuration is stored in `wrangler.jsonc`. Security headers are stored in `public/_headers` and copied into `dist` during the build.

Downloads are always:

`https://github.com/Cratis1831/stowlink-releases/releases/latest/download/StowLink.zip`
