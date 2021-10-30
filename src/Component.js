export default function Component() {
    let [name, setName, getName] = this.useState('Jhon');
    console.log(name, getName()); //Jhon Jhon
    console.log(this.state);//{0: 'Jhon'}
    setName('Peter')
    console.log(name, getName());//Jhon Peter
}