# UseState

A copy of the useState hook in React


```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Use State</title>
    <script src="src/index.js" type="module"></script>
</head>
<body>
</body>
</html>
```

```javascript
// src/index.js
import "./UseState.js";
import Component from "./Component.js";
let component = new Component()
```
```javascript
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
```

## Almost React sintax

```Javascript
// src/Component.js
export default function Component() {
    let [name, setName, getName] = this.useState('Jhon');
    console.log(name, getName()); //Jhon Jhon
    console.log(this.state);//{0: 'Jhon'}
    setName('Peter')
    console.log(name, getName());//Jhon Peter
}
```