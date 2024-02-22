const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim();
input = Number(input)
if(input === 5){
    console.log("A")
}
if(input%2===0){
    console.log("B")
}