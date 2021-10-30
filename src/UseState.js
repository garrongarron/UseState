// src/UseState.js
Object.prototype.useState = function (value){
    if (!this.state) this.state = {}
    let n = Object.keys(this.state).length
    this.state[n] = value
    return [
        (typeof value == 'undefined') ? value : JSON.parse(JSON.stringify(this.state[n])),
        (newState) => {
            this.state[n] = newState
        },
        ()=> {
            return (typeof this.state[n] == 'undefined') ? this.state[n] : JSON.parse(JSON.stringify(this.state[n]))
        }
    ]
}
