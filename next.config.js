require("dotenv").config();
const { RelativeCiAgentWebpackPlugin } = require("@relative-ci/agent");
const { StatsWriterPlugin } = require("webpack-stats-plugin");
const withPlugins = require("next-compose-plugins");
const withPWA = require("next-pwa");

module.exports = withPlugins(
  [
    withPWA,
    {
      pwa: {
        disable: process.env.NODE_ENV === "development",
        register: true,
        dest: "public",
      },
    },
  ],
  {
    env: {
      SENDGRID_API_KEY: process.env.SENDGRID_API_KEY,
    },
    webpack: function (config, options) {
      const { dev, isServer } = options;

      if (!dev && !isServer) {
        config.plugins.push(
          new StatsWriterPlugin({
            filename: "stats.json",
            stats: {
              context: "./src", // optional, will improve readability of the paths
              assets: true,
              entrypoints: true,
              chunks: true,
              modules: true,
            },
          }),
          new RelativeCiAgentWebpackPlugin({
            stats: {
              excludeAssets: [/stats.json/],
            },
          })
        );
      }

      return config;
    },
  }
);
