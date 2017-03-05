// Development configuration

import webpack from 'webpack';
import path from 'path';

const PORT = 3000;

export default {
  devtool: 'inline-source-map',

  entry: [
    `webpack-hot-middleware/client?path=http://localhost:${PORT}/__webpack_hmr`,
    'babel-polyfill',
    './app/index',
  ],

  output: {
    path: path.join(__dirname, 'app'),
    publicPath: `http://localhost:${PORT}/dist/`,
    filename: 'bundle.js',
  },

  module: {
    loaders: [{
      test: /\.js[x]?$/,
      loaders: ['babel-loader'],
      exclude: /node_modules/,
    }, {
      test: /\.scss$/,
      loaders: ['style-loader', 'css-loader', 'sass-loader'],
    }, {
      test: /\.json$/,
      loader: 'json-loader'
    }, {
      test: /\.woff(\?v=\d+\.\d+\.\d+)?$/,
      loader: 'url?limit=10000&mimetype=application/font-woff'
    }, {
      test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/,
      loader: 'url?limit=10000&mimetype=application/font-woff'
    }, {
      test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
      loader: 'url?limit=10000&mimetype=application/octet-stream'
    }, {
      test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
      loader: 'file'
    }, {
      test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
      loader: 'url?limit=10000&mimetype=image/svg+xml'
    }, {
      test: /\.(?:ico|gif|png|jpg|jpeg|webp)$/,
      loader: 'url-loader'
    }],
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('development')
    })
  ]
}
