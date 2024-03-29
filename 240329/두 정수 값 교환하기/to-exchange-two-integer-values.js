const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split(" ").map(Number);

const [n, m] = input

console.log(swap(n, m));

function swap(a, b){
    let str = ""
    str += b + " "
    str += a
    return str
}