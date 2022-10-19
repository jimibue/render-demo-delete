console.log('user.js loaded')
class User{
    constructor(x, y){
        this.firstName = x
        this.lastName = y
    }

    getFullName(){
        return `${this.firstName} ${this.lastName}`
    }

    // return html element
    render(){
       let htmlEL = document.createElement('div')
       htmlEL.innerHTML = `
          <h1>${this.getFullName()}</h1>
       `
       return htmlEL
    }
}
