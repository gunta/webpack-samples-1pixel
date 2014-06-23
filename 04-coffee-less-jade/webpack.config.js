module.exports = {
  entry: './main.coffee',
  output: {
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      { test: /\.less$/, loader: 'style!css!less' },
      { test: /\.coffee$/, loader: "coffee" },
      { test: /\.jade$/, loader: "template-html" }
    ]
  }
};
