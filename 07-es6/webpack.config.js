var webpack = require('webpack');

module.exports = {
  entry: './main.js',
  output: {
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      { test: /\.css$/, loader: 'style!css' },
      { test: /\.js$/, loader: 'es6' },
      { test: /\.png$/, loader: 'url?mimetype=image/png' }
    ]
  },
  resolve: {
    modulesDirectories: [ 'node_modules', 'bower_components' ]
  },
  plugins: [
    new webpack.ResolverPlugin(
      new webpack.ResolverPlugin.DirectoryDescriptionFilePlugin('bower.json', ['main'])
    )]
};
