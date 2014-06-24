module.exports = {
  entry: './main.js',
  output: {
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      { test: /\.html$/, loader: 'html' },
      { test: /\.js$/, loader: 'es6' }
    ]
  },
  resolve: {
    modulesDirectories: [ 'node_modules', 'bower_components' ]
  }
};
