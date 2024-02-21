const fs = require("fs");

let input = fs.readFileSync(0).toString().trim().split(" ");

const [A,B] = input

a = Number(A)
b = Number(B)

console.log(a+b)
console.log(a-b)
console.log(parseInt(a/b))
console.log(a%b)