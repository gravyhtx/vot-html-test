// const textFx = ({ text, fx }) => {

//     fx = fx.toLowerCase();
//     const Rumble = () => {

//     }

//     if (fx === "rumble") {
//         return (<Rumble />)
//     }
// }
const randomize = (n) => {Math.floor(Math.random() * n)}
class TextFx {
    constructor(text) {
        this.text = text.toLowerCase();
    }
}