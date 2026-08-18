/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_APP_NAME?: string;
  readonly VITE_LEMONSQUEEZY_CHECKOUT_URL?: string;
  readonly VITE_APP_DOWNLOAD_URL?: string;
  readonly VITE_RELEASES_URL?: string;
  readonly VITE_SUPPORT_EMAIL?: string;
  readonly VITE_CURRENCY?: string;
  readonly VITE_PRICE_ONETIME?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
