var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  entry: './main.js',
  output: {
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.css$/,
        loaders: [
          ExtractTextPlugin.loader({ remove: true }),
          'css'
        ]
      },
      { test: /\.png$/, loader: 'file-loader' }
    ]
  },
  plugins: [
    new ExtractTextPlugin('bundle.css', { allChunks: true })
  ]
};
