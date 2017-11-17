// Polyfill let us use our code across multiples browsers
// even some who doesn't support our feature
import 'babel-polyfill'

// Import the main class usually called "App"
import App from './App'

// We import the style here,
// don't worry in production it'll be in a seperate file
import 'SCSS/styles.scss'


// Start the App
const app = new App(
  /** object with variables for configuration **/
  {
    container: document.getElementById('app')
  }
)