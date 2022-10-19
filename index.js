// create instances of Users
// load index first
console.log('index.js loaded')
let frank = new User ('Frank', 'Doe')
let sally = new User ('Sally', 'Doe')

// need an instance of object with render that return an html element
// need a valid selector (must exist on your html page)
let rh = new RenderHelper()
rh.renderToDom(sally, '#user1')
rh.renderToDom(frank, '#user2')

let taco = new Taco('carne asada')
rh.renderToDom(taco,'#taco')

// THIS IS THE MANUAL OF DOING IT
// select element on page
// const sallySection = document.querySelector("#user1");
// const frankSection = document.querySelector("#user2");

// // use our render method
// const sallyElement = sally.render();
// const frankElement = frank.render();

// // replace element
// sallySection.replaceChildren(sallyElement);
// frankSection.append(frankElement);
