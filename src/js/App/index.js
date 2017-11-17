// we import the library we need
import $ from 'jquery'

class App{

  // the function that run at the instantiation
  constructor (options) {
    // The container of the app
    this.container = options.container || document.body

    // Just somthing fun
    console.warn("Still didn't look at index.js huh ?")
    console.log($('#id'), "jquery works !")

  }
}

// we export our class to use it in an other file
export default App;