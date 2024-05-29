const { GenerateSW } = require('workbox-webpack-plugin');

module.exports = {
  webpack: {
    configure: (webpackConfig) => {
      webpackConfig.plugins.push(
        new GenerateSW({
          clientsClaim: true,
          skipWaiting: true,
        })
      );
      return webpackConfig;
    },
  },
};