const fs = require("fs");

let input = fs.readFileSync(0).toString().trim().split(" ");

let height = Number(input[0])
const weight = Number(input[1])


// height = (height/100)**2
// console.log(height, weight)

const bmi = Math.floor(weight/((height/100)**2))

console.log(bmi)

if(bmi>=25){
    console.log("Obesity")
}