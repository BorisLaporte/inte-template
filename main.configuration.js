/* ---------------------------------------------------------- */
/* ---------------- MAIN CONFIGURATION FILE------------------ */
/* ------------------FOR GULP AND WEEBPACK------------------- */
/* ---------------------------------------------------------- */

// require our dependencies
const path = require('path');

const V = {};

// folder for development
V.DEV_FOLDER = path.resolve(__dirname, 'src');

// folder for the assets within the project
V.ASSET_FOLDER = path.resolve(V.DEV_FOLDER,'assets');

// folder for fonts
V.FONTS_FOLDER = path.resolve(V.ASSET_FOLDER, 'font');

// folder for images
V.IMG_FOLDER = path.resolve(V.ASSET_FOLDER, 'img');

// folder for the handlebars template within the project
V.TPL_FOLDER = path.resolve(V.DEV_FOLDER,'partials');

// folder for javascript files non compiled
V.DEV_JS_FOLDER = path.resolve(V.DEV_FOLDER, 'js');

// folder for scss files non compiled
V.DEV_SCSS_FOLDER = path.resolve(V.DEV_FOLDER, 'scss');

// name of the compiled project
// used for webpack's publicPath
V.PROD_FOLDER_NAME = 'build';

// folder of the compiled project;
V.PROD_FOLDER = path.resolve(__dirname, V.PROD_FOLDER_NAME);

// link our javascript file to webpack
V.JS_BUNDLES = [ path.resolve(V.DEV_JS_FOLDER, 'index.js') ];

// the server webpack to develop
V.SERVER_WEBPACK = {
  contentBase: V.PROD_FOLDER,
  historyApiFallback: true,
  hot: true,
  noInfo: false
};

module.exports = V;
