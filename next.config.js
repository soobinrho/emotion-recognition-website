/** @type {import('next').NextConfig} */
const nextConfig = {
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'Content-Security-Policy',
            value:
              "default-src 'none'; script-src 'self' 'unsafe-inline' 'unsafe-eval'; connect-src 'self' https://beemovr.com; img-src 'self' data:; style-src 'self' 'unsafe-inline'; font-src 'self' https://fonts.googleapis.com; worker-src 'self' blob:; base-uri 'self'; form-action 'self'; manifest-src 'self'; object-src 'self' data:;",
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin',
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;