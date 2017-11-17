
'user-strict'

// require our dependencies
const webpack = require('webpack')
const path = require('path')
// const ExtractTextPlugin = require("extract-text-webpack-plugin")

const V = require('./main.configuration.js')
const webpackConfig = require('./webpack.config.js')

const pathNormalize = path.resolve(__dirname, "node_modules/normalize-scss/sass")

// wee create a copy of the core webpack config
const webpackConfigDevelopment = Object.assign({}, webpackConfig)

// map files for easier debug
webpackConfigDevelopment.devtool = '#cheap-module-eval-source-map'

// const fullHostWebpack = `${V.SERVER_GLOBAL.protocol_webpack}://${V.SERVER_GLOBAL.hostname_webpack}:${V.SERVER_GLOBAL.port_webpack}`

// add the output of the webpack dev server into webpack it self
// this is for the hot reload
/*webpackConfigDevelopment.entry = Object.assign(webpackConfigDevelopment.entry,
	{'webpack-dev-server': `webpack-dev-server/client? ${fullHostWebpack}`}
)*/

// const entries  = Object.keys(webpackConfigDevelopment.entry)
// for (var i = 0; i < entries.length; i++) {
// 	// webpackConfigDevelopment.entry[entries[i]] = webpackConfigDevelopment.entry[entries[i]].concat('webpack-dev-server/client? '+fullHostWebpack)
// 	webpackConfigDevelopment.entry[entries[i]] = webpackConfigDevelopment.entry[entries[i]].concat('webpack/hot/only-dev-server')
// }
webpackConfigDevelopment.entry.push('webpack/hot/only-dev-server')

// configuration for webpack dev server
// can be found in './main.configuration.js'
webpackConfigDevelopment.devServer = V.SERVER_WEBPACK

// define NODE_ENV to development,
// some library have different behavior between development and production
webpackConfigDevelopment.plugins = webpackConfigDevelopment.plugins.concat([
	new webpack.HotModuleReplacementPlugin(),
	new webpack.DefinePlugin({
		'process.env.NODE_ENV': JSON.stringify('development'),
	}),
])

// add the loader for the scss
// without extract text plugin because we don't need it here
// and it causes problem with the hot reload
webpackConfigDevelopment.module.loaders = webpackConfigDevelopment.module.loaders.concat([
	{
		test: /\.(css|scss)$/,
    use: [
      {
        loader: 'style-loader'
      },
      {
        loader: 'css-loader',
        options: {
            minimize: false,
            sourceMap: true
        }
      },
      {
				loader: 'postcss-loader',
        options: {
            sourceMap: true
        }
      },
      {
        loader: 'sass-loader',
        options: {
					// the paths for scss ressources and depedencies
					includePaths: [V.DEV_SCSS_FOLDER, pathNormalize],
					sourceMap: true
        }
      }]
	},
])

module.exports = webpackConfigDevelopment
