const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split(' ');

let arr = []

input.forEach((i)=>{
    arr.push(Number(i))
})

// console.log(arr)
const [a,b,c] = arr

if ((a > b && a < c) || (a > c && a < b)) {
    console.log(a);
  }
  else if ((b > a && b < c) || (b > c && b < a)) {
    console.log(b);
  }
  else {
    console.log(c);
  }