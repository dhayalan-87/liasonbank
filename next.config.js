/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,

  // Allow iframe embedding only from trusted domains
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "Content-Security-Policy",
            value: "frame-ancestors 'self' https://liaisonbank.frappe.cloud;",
          },

          // Optional fallback for legacy browsers
          {
            key: "X-Frame-Options",
            value: "SAMEORIGIN",
          },

          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },

          {
            key: "Referrer-Policy",
            value: "strict-origin-when-cross-origin",
          },

          {
            key: "X-DNS-Prefetch-Control",
            value: "on",
          },
        ],
      },
    ];
  },
 allowedDevOrigins: [
    "192.168.56.1",
    "localhost",
    "*.localhost",
  ],
  // Dev environment allowed origins
//   allowedDevOrigins: ["local-origin.dev", "*.local-origin.dev"],
};

module.exports = nextConfig;