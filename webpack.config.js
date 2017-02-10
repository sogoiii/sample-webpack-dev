const path = require('path')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const HelloAsyncPlugin = require('./my-plugins/helloAsyncPlugin.js')

module.exports = {
  entry: './app/javascripts/app.js',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'app.js'
  },
  plugins: [
    new CopyWebpackPlugin([
      { from: './app/index.html', to: 'index.html' }
    ]),
    new HelloAsyncPlugin({ amish: 'paradise' })
  ],
  resolveLoader: {
    modules: ['node_modules', 'my-loaders']
  },
  module: {
    rules: [
      {
        test: /\.gangstas_paradise/,
        use: [
          { loader: 'json-loader' },
          { loader: 'coolio-loader' }
        ]
      }
    ]
  }
}
