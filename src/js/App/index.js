// Import the libraries and templates here
import appTemplate from 'TPL/app.handlebars'

// Code in oriented object, you'll thank me later
class App{

  // the function that run at the instantiation
  constructor (options) {
    // The container of the app
    this.container = options.container || document.body

    // Just somthing fun
    console.warn("Still didn't look at index.js huh ?")

    // instantiate the app's html
    this.initHtml();
  }

  // Render the main template
  initHtml () {
    this.container.innerHTML = appTemplate(
      // pass variables
      {
        some_text: "Hello world 🤖"
      }
    )
  }
}

// we export our class to use it in an other file
export default App;