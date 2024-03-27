const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim();
const [a, b, c] = input.split(" ").map(Number)
function print(a, b, c){
    return Math.min(a, b, c)
}

console.log(print(a, b, b));