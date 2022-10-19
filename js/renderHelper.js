class RenderHelper {
  constructor() {
    
  }

  // this function needs to be passed a object that has a render method
  // AND that render method needs to return an html element
  renderToDom(instanceWithRenderMethod, selector) {
    // const sallyElement = sally.render();
    // here is your html
    const htmlEl = instanceWithRenderMethod.render();

    // here is where to put
    // select element on page
    const domSection = document.querySelector(selector);

    // put the stuff on the dom
    domSection.append(htmlEl);
  }
}
