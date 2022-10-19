console.log('user.js loaded')
class User{
    constructor(x, y){
        this.firstName = x
        this.lastName = y
    }

    getFullName(){
        return `This is${this.firstName} ${this.lastName}`
    }

    // return html element
    render(){
       let htmlEL = document.createElement('div')
       htmlEL.innerHTML = `
          <h1 style='color:red'>${this.getFullName()}</h1>
       `
       return htmlEL
    }
}

// Artist Spotify but not just music
// Users - Musicians
class Musician extends User {
    constructor(firstName, lastName, instrument, genre ){
        super(firstName, lastName)
        this.instrument = instrument
        this.genre = genre
    }

    // this grabs the html element from User render and then adds more
    // specific to a musician
    render(){
 
        //1. Get the html element from the parent render method
        let userHtml = super.render()
        
        //2. creating the specific html for a musician
        //2a.create a div element
        let musicianHTML = document.createElement('div')
        //2.b adding 2 paragraphs with information about musician to that div inner html.
        musicianHTML.innerHTML = `
           <p>instrument: ${this.instrument}</p>
           <p> genre: ${this.genre}</p>
        `
        //3. combine the two into the userHtml element
        // THIS IS NOT APPEND TO DOM
        userHtml.append(musicianHTML)
       
        //4. return the element
        return  userHtml
    }


}

// Users - Painters
class Painter extends User {
    constructor(firstName, lastName, medium ){
        super(firstName, lastName)
        this.medium = medium
    }

    
    render(){
        //1. Get the html element from the parent render method
        let userHtml = super.render()
        
        //2. creating the specific html for a painter
        //2a.create a div element
        let painterHTML = document.createElement('div')
        //2.b adding 2 paragraphs with information about painter to that div inner html.
        painterHTML.innerHTML=`
          <p>meduim: ${this.medium}</p>
        `
 
        //3. combine the two into the userHtml element
        userHtml.append(painterHTML)
       
        //4. return the element
        return  userHtml
     
    }
}


// Users - Fans
class Fan extends User {
    constructor(firstName, lastName, musicians, painters ){
        super(firstName, lastName)
        this.musicians = musicians
        this.painters = painters
    }
}

