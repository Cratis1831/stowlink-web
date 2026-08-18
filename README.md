# StowLink website

Static Vite + React site for https://www.stowlink.app. Chosen over Next.js so Netlify Free stays on a static `dist` publish, with no server functions and no app binaries on Netlify.

## Local

```sh
cp .env.example .env
npm install
npm run dev
```

## Netlify

- Build command: `npm run build`
- Publish directory: `dist`
- Production branch: `main`
- Production `VITE_LEMONSQUEEZY_CHECKOUT_URL` must be the **Live** checkout
- Preview deploys should use the **Test** checkout
- Custom domains: `www.stowlink.app` and `stowlink.app`, HTTPS forced

Downloads are always:

`https://github.com/Cratis1831/stowlink-releases/releases/latest/download/StowLink.zip`
