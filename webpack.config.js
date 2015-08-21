var webpack           = require('webpack')
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var path              = require('path');
var cssLoader         = ExtractTextPlugin.extract('style-loader', 'css-loader');
var lessLoader        = "style!css!less";
var cssBundlePath     = '../../stylesheets/bundles/bundle.css';
// var babelPoly         = 'babel-core/polyfill';
var commonsPlugin     = new webpack.optimize.CommonsChunkPlugin({
  filename: "common.js",
  minChunks: 2,
});

module.exports = {
  entry: {
    'three':                './client/three.js',
  },
  output: {
      path: './app/assets/javascripts/bundles/',
      filename: "[name].js",
      publicPath: '/assets/bundles/'
  },
  watchOptions: {
    aggregateTimeout: 300,
    poll: 1000
  },
  module: {
    preLoaders: [
      // {
      //   test: /\.(js|jsx)$/,
      //   loader: "eslint-loader",
      //   exclude: /node_modules/
      // }
    ],
    loaders: [
      {
        test: /\.css$/,
        loader: cssLoader
      },
      {
        test: /\.less$/,
        exclude: /node_modules/,
        loader: lessLoader
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'babel'
      },
      {
        test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'url-loader?limit=10000&minetype=application/font-woff'
      },
      {
        test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'file-loader'
      },
      {
        test: /\.elm$/,
        loader: 'elm'
      },
    ]
  },
  plugins: [
    new ExtractTextPlugin(cssBundlePath),
  ]
};
