const path = require('path')
const VueLoaderPlugin = require('vue-loader/lib/plugin')

const config = {
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
        test: /\.(css)$/,
        use: [
          'style-loader',
          'css-loader']
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
}

module.exports = config
