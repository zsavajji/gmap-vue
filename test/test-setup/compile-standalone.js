const webpack = require('webpack')
const shell = require('shelljs')
const path = require('path')

module.exports = new Promise((resolve, reject) => {
  const webpackConfig = require('../../webpack.config.js')[0]

  webpack(
    {
      ...webpackConfig,
      mode: 'development'
    },
    (err, status) => {
      if (!err) {
        shell.cp(
          path.resolve(__dirname, '../../dist/vue-google-maps.js'),
          path.resolve(__dirname, '../../examples/vue-google-maps.js')
        )
        resolve()
      } else {
        reject(err)
      }
    }
  )
})
