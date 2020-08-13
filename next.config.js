require('dotenv').config()
const { RelativeCiAgentWebpackPlugin } = require('@relative-ci/agent')
const { StatsWriterPlugin } = require('webpack-stats-plugin')

module.exports = {
  env: {
    SENDGRID_API_KEY: process.env.SENDGRID_API_KEY
  },
  webpack: function (config, options) {
    const { dev, isServer } = options

    if (!dev && !isServer) {
      config.plugins.push(
        new StatsWriterPlugin({
          filename: 'stats.json',
          stats: {
            context: './src', // optional, will improve readability of the paths
            assets: true,
            entrypoints: true,
            chunks: true,
            modules: true
          }
        }),
        new RelativeCiAgentWebpackPlugin({
          stats: {
            excludeAssets: [/stats.json/]
          }
        })
      )
    }

    return config
  }
}
