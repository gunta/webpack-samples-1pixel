module.exports = function (grunt) {
  grunt.file.expand('../node_modules/grunt-*/tasks').forEach(grunt.loadTasks);

  var webpack = require('webpack');
  var webpackConfig = require('./webpack.config.js');

  grunt.initConfig({
    webpack: {
      options: webpackConfig,
      build: {
        plugins: webpackConfig.plugins.concat(
          new webpack.DefinePlugin({
            'process.env': {
              'NODE_ENV': JSON.stringify('production')
            }
          }),
          new webpack.optimize.DedupePlugin(),
          new webpack.optimize.UglifyJsPlugin()
        )
      }
    },
    'webpack-dev-server': {
      options: {
        webpack: webpackConfig,
        publicPath: '/' + webpackConfig.output.publicPath
      },
      start: {
        keepAlive: true,
        webpack: {
          devtool: 'eval',
          debug: true
        }
      }
    },
    open: {
      dev: {
        path: 'http://localhost:8080/webpack-dev-server/index.html',
        options: {
          delay: 500
        }
      }
    }
  });

  // Development server
  grunt.registerTask('default', ['open:dev', 'webpack-dev-server:start' ]);

  // Production build
  grunt.registerTask('build', ['webpack:build']);
};
