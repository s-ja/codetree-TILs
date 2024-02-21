const fs = require("fs");

let input = fs.readFileSync(0).toString().trim().split(" ");

const [A,B] = input

let a = Number(A)
let b = Number(B)

a +=8
b *=3

console.log(a)
console.log(b)
console.log(a*b)