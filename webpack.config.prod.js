//require our dependencies
const path = require('path')
const webpack = require('webpack')
const ExtractTextPlugin = require("extract-text-webpack-plugin")
const CompressionPlugin = require('compression-webpack-plugin')

const V = require('./main.configuration.js')
const webpackConfig = require('./webpack.config.js')

const pathNormalize = path.resolve(__dirname, "node_modules/normalize-scss/sass")

// wee create a copy of the core webpack config
const webpackConfigProduction = Object.assign({}, webpackConfig)

// we had several plugins for the production version
webpackConfigProduction.plugins = webpackConfigProduction.plugins.concat([
    // uglify js
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      },
      output: {
        comments: false
      }
    }),
    new webpack.optimize.OccurrenceOrderPlugin(),
    // define NODE_ENV to production,
    // some library have different versions between development and production
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production')
    }),
    new webpack.LoaderOptionsPlugin({
      debug: false
    }),
    // create GZIP versions
    new CompressionPlugin()
  ])

// add the loader for the scss
// with extract text plugin so we can have a seperate css file
webpackConfigProduction.module.loaders = webpackConfig.module.loaders.concat([
    {
      test: /\.(css|scss)$/,
      use: ExtractTextPlugin.extract({
        fallback: 'style-loader',
        use: [
          {
            loader: 'css-loader',
            options: {
                minimize: true
            }
          },
          {
			loader: 'postcss-loader',
          },
          {
            loader: 'sass-loader',
            options: {
              // the paths for scss ressources and depedencies
              includePaths: [V.DEV_SCSS_FOLDER, pathNormalize]
            }
          }]
      })
    }
  ])


module.exports = webpackConfigProduction