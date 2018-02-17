import webpack from 'webpack'
import path from 'path'

export default new Promise((resolve) => {
  const webpackConfig = require('../webpack.config.js')[0]

  webpack(
    webpackConfig,
    (err, status) => {
      if (!err) {
        resolve()
      } else {
        reject(err)
      }
    }
  )
})
