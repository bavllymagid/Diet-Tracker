const { GenerateSW } = require('workbox-webpack-plugin');

module.exports = {
  webpack: {
    configure: (webpackConfig) => {
      // Add WorkboxWebpackPlugin to generate service worker
      webpackConfig.plugins.push(
        new GenerateSW({
          clientsClaim: true,
          skipWaiting: true,
          navigateFallback: '/index.html',
          // Define the URLs to cache (e.g., assets, pages)
          // Adjust these URLs based on your app's structure
          runtimeCaching: [
            {
              // Cache all API requests with NetworkFirst strategy
              urlPattern: /^https:\/\/api\.example\.com/,
              handler: 'NetworkFirst',
              options: {
                cacheName: 'api-cache',
                networkTimeoutSeconds: 10,
              },
            },
            {
              // Cache other assets with StaleWhileRevalidate strategy
              urlPattern: /\.(?:png|jpg|jpeg|svg|js|css)$/,
              handler: 'StaleWhileRevalidate',
              options: {
                cacheName: 'assets-cache',
                expiration: {
                  maxEntries: 100,
                  maxAgeSeconds: 7 * 24 * 60 * 60, // 7 days
                },
              },
            },
          ],
        })
      );
      return webpackConfig;
    },
  },
};
