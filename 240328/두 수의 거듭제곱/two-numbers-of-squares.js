const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim();

const [a,b] = input.split(" ").map(Number)

function pow(a,b){
    console.log(a**b)
}

pow(a,b)