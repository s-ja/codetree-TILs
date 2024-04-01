const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split(" ");

class Code{
    constructor(code, color, time){
        this.code = code;
        this.color = color;
        this.time = time;
    }
}

const code = new Code(...input)

console.log("code : " + code.code)
console.log("color : " + code.color)
console.log("second : " + code.time)