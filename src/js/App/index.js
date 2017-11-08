import appTemplate from 'TPL/app.handlebars';

// Code in oriented object, you'll thank me later
class App{

  // the function that run at the instantiation
  constructor () {
    console.warn("Still didn't look at index.js huh ?");
    this.initHtml();

  }

  initHtml () {
    const div = document.createElement('div')
    div.innerHTML = appTemplate({
      some_text: "Hello world 🤖"
    })
    document.body.appendChild(div);
  }
}

// we export our class to use it in an other file
export default App;