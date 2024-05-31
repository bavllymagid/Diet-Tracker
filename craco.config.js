const { GenerateSW } = require('workbox-webpack-plugin');

module.exports = {
  webpack: {
    plugins: [
      new GenerateSW({
        runtimeCaching: [
          {
            urlPattern: /\.(?:js,css,html)$/,
            handler: 'CacheFirst',
            options: {
              cacheName: 'static-resources',
            },
          },
        ],
      }),
    ],
  },
};