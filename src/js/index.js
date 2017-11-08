// Polyfill let us use our code across multiples browsers
// even some who doesn't support our feature
import 'babel-polyfill'

// Import the main class usually called "App"
import App from './App'

// Import the style.scss here,
// It will be linked to the html automaticly.
import 'SCSS/style.scss'

// Start the App
const app = new App(
  /** object with variables for configuration **/
  {container: document.getElementById('app')}
)