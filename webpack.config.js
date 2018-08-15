const path = require('path')
const VueLoaderPlugin = require('vue-loader/lib/plugin')

const baseConfig = {
  entry: [
    path.resolve('./src/main.js')
  ],
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader'
        // options: { target: 'node' }
      },
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
      {
        test: /\.(css|less)$/,
        use: ['style-loader', 'css-loader', 'less-loader']
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: [{
          loader: 'file-loader?name=[name].[ext]?[hash]'
        }]
      }
    ]
  },
  plugins: [
    new VueLoaderPlugin()
  ],
  mode: process.env.NODE_ENV || 'development'
} /* baseConfig */

/**
 * Web config uses a global Vue and Lodash object.
 * */
const webConfig = {
  ...baseConfig,
  externals: {
    vue: 'Vue',
    'marker-clusterer-plus': 'MarkerClusterer'
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'vue-google-maps.js',
    library: ['VueGoogleMaps'],
    libraryTarget: 'umd'
  }
}

module.exports = [
  webConfig
]
