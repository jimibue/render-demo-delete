class Taco{
    constructor(name){
        this.name = name
    }
    render(){
      console.log('render yo')
      let htmlEl = document.createElement('div')
      htmlEl.innerHTML = `
        <h1>${this.name}</h1>
      `
      return htmlEl
    }
}