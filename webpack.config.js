//require our dependencies
const path = require('path')
const webpack = require('webpack')
const ExtractTextPlugin = require("extract-text-webpack-plugin")
const HtmlWebpackPlugin = require("html-webpack-plugin")
// const GoogleFontsPlugin = require("google-fonts-webpack-plugin")
const V = require('./main.configuration.js')



module.exports = {

  // the main files to injected into webpack
  entry: V.JS_BUNDLES,

  // the output files, once compiled
  output: {
    // path to the assets folder
    path: V.PROD_FOLDER,
    // name of the js files,
    // keep the folder name,
    // because for the css we use a plugin and the css is in another folder
    filename:  '[name].[hash:6].js',
    // the path for the server to know where to look for the ressources or assets
    publicPath: '/'

  },

  resolve: {
    // look for dependencies in node_modules
    modules: ['node_modules'],
    // alias for relative path within js and scss files
    alias: {
      'FONT': V.FONTS_FOLDER,
      'IMG': V.IMG_FOLDER,
      'SCSS': V.DEV_SCSS_FOLDER,
      'JS': V.DEV_JS_FOLDER,
      'TPL': V.TPL_FOLDER,
      'modernizr': path.resolve(__dirname, ".modernizrrc"),
      // 'TweenLite': path.resolve(__dirname,'node_modules/gsap/src/uncompressed/TweenLite'),
      // 'ScrollToPlugin': path.resolve(__dirname,'node_modules/gsap/src/uncompressed/plugins/ScrollToPlugin.js'),
    }
  },

  // plugins for webpack
  plugins: [
    // give different names to depedencies,
    //  $: 'jquery' => $ is an alias for jquery library
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery'
    }),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './src/index.handlebars'
    }),
  ],

  module: {
    // the different loaders for the files,
    //  either fonts, images, scss, js, ts, everything you want !
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules|bower_components/,
        include: V.DEV_JS_FOLDER,
        loader: 'babel-loader',
        options: {
          presets: ['env']
        }
      },
      {
        test: /\.handlebars$|.hbs$/,
        loader: 'handlebars-loader',
        include: V.DEV_FOLDER,
        query: {
          partialDirs: [
              V.TPL_FOLDER
          ],
          context: {
            data: {
              test: "Ici les variables"
            }
          }
        },
        exclude: /node_modules|bower_components/
      },
      {
        test: /\.(eot|svg|ttf|otf|woff2?)$/,
        loader: 'file-loader?name=font/[name].[ext]',
        include: V.FONTS_FOLDER
      },
      {
        test: /\.(jpe?g|png|svg|gif)$/,
        loader: 'file-loader?name=img/[name]-[hash:4].[ext]',
        include: V.IMG_FOLDER
      },
      {
        test: /\.modernizrrc.js$/,
        use: [ 'modernizr-loader' ]
      },
      {
        test: /\.modernizrrc(\.json)?$/,
        use: [ 'modernizr-loader', 'json-loader' ]
      },
      {
        test: /\.json$/,
        use: [ 'json-loader' ]
      }
    ]
  }
}