// Set NEXT_PUBLIC_SITE_URL to your canonical origin when using a custom domain.
export const SITE_URL = new URL(
  process.env.NEXT_PUBLIC_SITE_URL ||
    'https://eitda-eshiet-foundation.vocal-hake-9811.chatgpt.site',
);
