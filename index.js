// // create instances of Users
// // load index first
// console.log('index.js loaded')
// let frank = new User ('Frank', 'Doe')
// let sally = new User ('Sally', 'Doe')

// // need an instance of object with render that return an html element
// // need a valid selector (must exist on your html page)
// let rh = new RenderHelper()
// rh.renderToDom(sally, '#user1')
// rh.renderToDom(frank, '#user2')

// let taco = new Taco('carne asada')
// rh.renderToDom(taco,'#taco')



let britney = new Musician("Britney", "Spears", "Vocal", "pop")
let mj = new Musician("Micheal", "Jackson", "Vocal", "pop")
let hendrix = new Musician("Jimi", "Hendrix", "Guitar", "rock")
let ross = new Painter('Bob','Ross','oil')
let michelanglo = new Painter('Bob','Ross','pencil')
let dalle2 = new Painter('Dalle','2','digital')


let james = new Fan('Jon', 'Doe', [britney, mj], [dalle2])

britney.render()

// append the html
let rh = new RenderHelper()

rh.renderToDom(britney, '#bs')
rh.renderToDom(mj, '#mj')
rh.renderToDom(dalle2, '#d2')

// using the static keyword in the RenderHelper class 
// makes this a class method
// RenderHelper.renderToDom


// console.log(james)

// // how do I get the artist from fan1
// console.log(james.musicians)

// // how do I get britney from fan1
// console.log(james.musicians[0])

// // how do a get britneys full name from fan1?
// console.log(james.musicians[0].getFullName())



// class methods
// Math.random


// instance methods
// britney.render()

// Person.count - 8 billion
// Person.name - Human
// james.getName - james

